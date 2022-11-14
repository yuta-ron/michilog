<?php

namespace App\Package\Domains\Map;

class MapMeta
{
    public readonly int $id;
    public readonly int $mapId;
    public readonly string $thumbnailUrl;
    public readonly string $description;

    public function __construct(\App\Models\MapMeta $meta) {
        $this->id = $meta->id;
        $this->mapId = $meta->map_id;
        $this->thumbnailUrl = $meta->thumbnail_url ?? '';
        $this->description = $meta->description ?? '';
    }
}
