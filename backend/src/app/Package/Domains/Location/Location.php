<?php

namespace App\Package\Domains\Location;

class Location
{
    public readonly string $title;
    public readonly string $description;
    public readonly LatLng $latLng;
//    /**
//     * @var array<LocationMeta>
//     */
//    public readonly array $locationMeta;
//    /**
//     * @var array<LocationMeta>
//     */
    public $locationMeta;

    public function __construct(\App\Models\Location $model) {
        $this->title = $model->title;
        $this->description = $model->description;
        $this->latLng = new LatLng($model->lat, $model->lng);

        $meta = $model->locationMetas()->first();
        if ($meta) {
            \Log::info('initialized');
            $this->locationMeta = new LocationMeta($meta);
        }
// Todo: fix
//        foreach()
//        \Log::info(json_encode($model->locationMetas()->get()->toArray()));
        // $location->locationMeta()->first();
        // $this->meta = new LocationMeta($meta);
    }
}
