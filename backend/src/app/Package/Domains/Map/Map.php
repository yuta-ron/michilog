<?php

namespace App\Package\Domains\Map;

use App\Package\Domains\Layer\Layer;
use App\Package\Domains\Location\Location;
use App\Package\Domains\User\User;

final class Map
{
    public readonly int $id;
    public readonly string $name;
    public readonly MapMeta $meta;
    public readonly User $owner;

    /**
     * @var array<Layer>
     */
    public readonly array $layers;
    /**
     * @var array<Location>
     */
    public readonly array $locations;

    public function __construct(?\App\Models\Map $obj, array $layers, array $locations) {
        $this->id = $obj->id;
        $this->owner = new User($obj->owner()->first());
        $this->name = $obj->name;
        $meta = $obj->mapMeta()->first();
        $this->meta = new MapMeta($meta);
        $this->layers = $layers;
        $this->locations = $locations;
    }

    /**
     * @return User|null
     */
    public function getOwner(): ?User {
        return $this->owner;
    }
}
