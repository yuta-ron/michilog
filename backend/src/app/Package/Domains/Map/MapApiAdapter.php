<?php

namespace App\Package\Domains\Map;

class MapApiAdapter
{
    public static function toApiResponse(Map $map): array {
        $ls = [];
        foreach($map->layers as $layer) {
            $ls[]  = [
                'name' => $layer->name,
                'hash' => $layer->hash,
                'color' => $layer->color,
                'route' => [
                    'name' => $layer->route->layerId,
                    'geo_json' => $layer->route->geoJson,
                ],
            ];
        }

        $locs = [];
        foreach($map->locations as $location) {
            $locs[] = [
                'title' => $location->title,
                'description' => $location->description,
                'latlng' => [
                    'lat' => $location->latLng->lat,
                    'lng' => $location->latLng->lng,
                ],
                'media_url' => $location->locationMeta->mediaUrl ?? 'https://youtu.be/vlj9vKNrxrs',
            ];
        }

        return [
            'id' => $map->id,
            'owner_id' => $map->getOwner()->id,
            'name' => $map->name,
            'description' => $map->meta->description,
            'thumbnail' => $map->meta->thumbnailUrl,
            'layers'   => $ls,
            'locations' => $locs,
        ];
    }
}
