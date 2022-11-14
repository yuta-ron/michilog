<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Location;
use App\Models\LocationMeta;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class LocationController extends Controller
{
    public function create(Request $request) {
        \Log::info(json_encode($request->toArray()));

//        return response(['message' => 'ok'], 200);
        // Serviceに切り出す
        $location = Location::create([
            'title' => $request->get('title'),
            'description' => $request->get('description'),
            'lat' => $request->get('latLng')['lat'],
            'lng' => $request->get('latLng')['lng'],
            'map_id' => $request->get('mapId'),
        ]);

        if(isset($request->get('locationMeta')[0]['mediaUrl'])) {
            LocationMeta::create([
                'media_url' =>  $request->get('locationMeta')[0]['mediaUrl'] ?? '',
                'location_id' =>  $location->id,
            ]);

        }
        // Todo Location戻すように
        return response('ok', Response::HTTP_CREATED);
    }

    public function update($request, $locationId) {

    }
}
