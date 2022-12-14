<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Layer;
use App\Models\Map;
use App\Models\MapMeta;
use App\Models\Route;
use App\Package\Domains\Layer\LayerRepositoryInterface;
use App\Package\Domains\Map\MapApiAdapter;
use App\Package\Domains\Map\MapListRequest;
use App\Package\Domains\Map\MapRepositoryInterface;
use App\Package\Domains\Map\MapsApiAdapter;
use App\Package\Domains\Route\RouteRepositoryInterface;
use App\Package\Infrastructure\Map\EloquentMapRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\UnauthorizedException;
use Symfony\Component\HttpFoundation\Response;

class MapController extends Controller
{
    protected MapRepositoryInterface $mapRepository;
    protected LayerRepositoryInterface $layerRepository;

    public function __construct(
        MapRepositoryInterface $mapRepository,
        LayerRepositoryInterface $layerRepository
    ) {
        $this->mapRepository = $mapRepository;
        $this->layerRepository = $layerRepository;
    }

    public function list(Request $request) {
        $request = new MapListRequest($request->query('page'), $request->query('limit'), $request->query('user_id'));
        $maps = $this->mapRepository->list($request);
        $total = $this->mapRepository->count($request); // limitつけなかった場合の全件

        $response = MapsApiAdapter::toApiResponse($maps, $total);
        return response($response, 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(int $id)
    {
        $map = $this->mapRepository->getById($id);

        // Locationsを追加する　
        return response(MapApiAdapter::toApiResponse($map));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $user = Auth::user();
        if (!$user) {
            return response('user not found', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        $map = Map::create([
            'user_id' => $user->id,
            'name' => $request->get('name'),
        ]);

        $mapMeta = MapMeta::create([
            'map_id' => $map->id,
        ]);

        return response($map, Response::HTTP_CREATED);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Todo バリデーション
        DB::transaction(function() use ($request, $id) {
            $map = Map::find($id);
            if (!$map) {
                return response(['message' => 'this map not found'], 404);
            }
            $map->name = $request['name'];
            $map->save();

            $mapMeta = MapMeta::where('map_id', $id)->first();
            if (!$mapMeta) {
                $mapMeta = MapMeta::create([
                    'map_id' => $map->id,
                    'thumbnail_url' => null,
                    'description' => null,
                ]);
            }

            $mapMeta->description = $request['description'] ?? null;
            $mapMeta->thumbnail_url = $request['thubnaiil'] ?? null;
            $mapMeta->save();

            $this->layerRepository->clearByMapId($map->id);

            foreach ($request->get('layers') ?? [] as $layer) {
                $layerRecord = [
                    'name' => $layer['name'],
                    'hash' => $layer['hash'],
                    'color' => $layer['color'],
                    'map_id' => $map['id']
                ];
                $createLayerResult = Layer::create($layerRecord);
                Route::create([
                    'layer_id' => $createLayerResult['id'],
                    'geo_json' => json_encode($layer['route']['geoJson']),
                ]);
            }
        }, 3);

        $map = $this->mapRepository->getById($id);

        return response(MapApiAdapter::toApiResponse($map));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Map::destroy([$id]);
        return \response('ok', 200);
    }
}
