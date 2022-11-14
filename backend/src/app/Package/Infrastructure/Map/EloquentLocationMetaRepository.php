<?php

namespace App\Package\Infrastructure\Map;

use App\Package\Domains\Location\LocationMeta;
use App\Package\Domains\Location\LocationMetaRepositoryInterface;

class EloquentLocationMetaRepository implements LocationMetaRepositoryInterface
{
    public function getByLocationId(int $locationId): LocationMeta
    {
        $model = \App\Models\LocationMeta::where('location_id', $locationId)->get();

        return new LocationMeta($model);
    }
}
