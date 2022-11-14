<?php

namespace App\Package\Domains\Map;

interface MapRepositoryInterface
{
    public function list($page, $limit): array;
    public function getById(int $id): ?Map;
    public function updateMap(): Map;
    public function deleteMap(): bool;
}
