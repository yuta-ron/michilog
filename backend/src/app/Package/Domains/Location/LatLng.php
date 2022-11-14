<?php

namespace App\Package\Domains\Location;

class LatLng
{
    public readonly float $lat;
    public readonly float $lng;

    public function __construct(float $lat, float $lng) {
        $this->lat = $lat;
        $this->lng = $lng;
    }
}
