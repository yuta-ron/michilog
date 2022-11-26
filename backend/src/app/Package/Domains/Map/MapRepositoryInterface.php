<?php

namespace App\Package\Domains\Map;

interface MapRepositoryInterface
{
    public function list(MapListRequest $request): array;
    public function count(MapListRequest $request): int;
    public function getById(int $id): ?Map;
    public function updateMap(): Map;
    public function deleteMap(): bool;
}
