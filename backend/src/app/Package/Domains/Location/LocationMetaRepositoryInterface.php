<?php

namespace App\Package\Domains\Location;

interface LocationMetaRepositoryInterface
{
    public function getByLocationId(int $locationId):LocationMeta;
}
