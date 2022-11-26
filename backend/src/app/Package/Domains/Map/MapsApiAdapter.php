<?php

namespace App\Package\Domains\Map;

class MapsApiAdapter
{
    /**
     * @param array<Map> $maps
     * @return array
     */
    public static function toApiResponse(array $maps, int $total): array {
        $result = [];

        foreach($maps as $map) {
            $result[] = [
                'id' => $map->id,
                'title' => $map->name,
                'description' => $map->meta->description ?? null,
                'thumbnail' => $map->meta->thumbnailUrl ?? null,
            ];
        }

        return ['total' => $total, 'result' => $result,];
    }
}
