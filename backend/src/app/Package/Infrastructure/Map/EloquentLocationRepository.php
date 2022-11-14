<?php

namespace App\Package\Infrastructure\Map;

use App\Package\Domains\Location\Location;
use App\Package\Domains\Location\LocationRepositoryInterface;

class EloquentLocationRepository implements LocationRepositoryInterface
{
    /**
     * @param int $mapId
     * @return array<Location>
     */
    public function getByMapId(int $mapId): array
    {
        $locs = \App\Models\Location::where('map_id', $mapId)->get();
        $larr = [];
        foreach($locs as $location) {
            $larr[] = new Location($location);
        }

        return $larr;
    }


}
