<?php

namespace App\Package\Domains\Location;

interface LocationRepositoryInterface
{
    public function getByMapId(int $mapId): array;
}
