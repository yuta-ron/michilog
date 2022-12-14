<?php

namespace App\Package\Infrastructure\Map;

use App\Package\Domains\Layer\LayerRepositoryInterface;
use App\Package\Domains\Location\LocationRepositoryInterface;
use App\Package\Domains\Map\Map;
use App\Package\Domains\Map\MapListRequest;
use App\Package\Domains\Map\MapRepositoryInterface;
use App\Package\Domains\Route\Route;
use App\Package\Domains\Route\RouteRepositoryInterface;

/**
 * Aggregates Root
 */
class EloquentMapRepository implements MapRepositoryInterface
{
    protected LayerRepositoryInterface $layerRepository;
    protected LocationRepositoryInterface $locationRepository;

    public function __construct(LayerRepositoryInterface $lr, LocationRepositoryInterface $locr) {
        $this->layerRepository = $lr;
        $this->locationRepository = $locr;
    }

    /**
     * マップ一覧を出す
     * @return array<Map>
     */
    public function list(MapListRequest $request): array
    {
        if ($request->userId) {
            $models = \App\Models\Map::offset(($request->page - 1) * $request->limit)->limit($request->limit)->where('user_id',' = ', $request->userId)->get();
        } else {
            $models = \App\Models\Map::offset(($request->page - 1) * $request->limit)->limit($request->limit)->get();
        }
        $results = [];
        foreach($models as $model) {
            $results[] = $this->initialize($model);
        }

        return $results;
    }

    public function count(MapListRequest $request): int {
        if ($request->userId) {
            return \App\Models\Map::where('user_id',' = ', $request->userId)->count();
        }

        return \App\Models\Map::count();
    }

    /**
     * @param int $id
     * @return Map|null
     */
    public function getById(int $id):?Map {
        $model = \App\Models\Map::find($id);
        if (!$model) {
            return null;
        }

        return $this->initialize($model);
    }

    public function updateMap(): Map {
        return new Map();
    }

    public function deleteMap(): bool{
        return false;
    }

    /**
     * @param \App\Models\Map $model
     * @return Map|null
     */
    protected function initialize(\App\Models\Map $model): ?Map {
        $layers = $this->layerRepository->getByMapId($model->id) ?? [];
        $locations = $this->locationRepository->getByMapId($model->id) ?? [];

        return new Map($model, $layers, $locations);
    }
}
