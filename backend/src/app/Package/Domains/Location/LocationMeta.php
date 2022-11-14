<?php

namespace App\Package\Domains\Location;

class LocationMeta
{
    public readonly string $mediaUrl;
    public readonly string $locationId;

    public function __construct(\App\Models\LocationMeta $model) {
        $this->mediaUrl = $model->media_url;
        $this->locationId = $model->location_id;
    }
}
