<?php

namespace App\Package\Domains\Layer;

interface LayerRepositoryInterface
{
    /**
     * @param int $id
     * @return array<Layer>
     */
    public function getByMapId(int $mapId): array;

    /**
     * @param int $mapId
     * @return bool
     */
    public function clearByMapId(int $mapId): bool;
}
