<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\Layer
 *
 * @property int $id
 * @property string $name
 * @property string $color
 * @property string $hash
 * @property int $map_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Route[] $routes
 * @property-read int|null $routes_count
 * @method static \Database\Factories\LayerFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Layer newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Layer newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Layer query()
 * @method static \Illuminate\Database\Eloquent\Builder|Layer whereColor($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Layer whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Layer whereHash($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Layer whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Layer whereMapId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Layer whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Layer whereUpdatedAt($value)
 */
	class Layer extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Location
 *
 * @property int $id
 * @property string $title
 * @property string $description
 * @property float $lat
 * @property float $lng
 * @property int $map_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\LocationMeta[] $locationMetas
 * @property-read int|null $location_metas_count
 * @property-read \App\Models\Map $map
 * @method static \Database\Factories\LocationFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Location newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Location newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Location query()
 * @method static \Illuminate\Database\Eloquent\Builder|Location whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Location whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Location whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Location whereLat($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Location whereLng($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Location whereMapId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Location whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Location whereUpdatedAt($value)
 */
	class Location extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\LocationMeta
 *
 * @property int $id
 * @property string|null $media_url
 * @property int $location_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\LocationMetaFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|LocationMeta newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|LocationMeta newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|LocationMeta query()
 * @method static \Illuminate\Database\Eloquent\Builder|LocationMeta whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LocationMeta whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LocationMeta whereLocationId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LocationMeta whereMediaUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LocationMeta whereUpdatedAt($value)
 */
	class LocationMeta extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Map
 *
 * @property int $id
 * @property string $name
 * @property int $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Layer[] $layers
 * @property-read int|null $layers_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Location[] $locations
 * @property-read int|null $locations_count
 * @property-read \App\Models\MapMeta|null $mapMeta
 * @method static \Database\Factories\MapFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Map newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Map newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Map query()
 * @method static \Illuminate\Database\Eloquent\Builder|Map whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Map whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Map whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Map whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Map whereUserId($value)
 */
	class Map extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\MapMeta
 *
 * @property int $id
 * @property string|null $thumbnail_url
 * @property string|null $description
 * @property int $map_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\MapMetaFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|MapMeta newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|MapMeta newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|MapMeta query()
 * @method static \Illuminate\Database\Eloquent\Builder|MapMeta whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MapMeta whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MapMeta whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MapMeta whereMapId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MapMeta whereThumbnailUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MapMeta whereUpdatedAt($value)
 */
	class MapMeta extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Route
 *
 * @property int $id
 * @property int $layer_id
 * @property mixed $geo_json
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\RouteFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Route newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Route newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Route query()
 * @method static \Illuminate\Database\Eloquent\Builder|Route whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Route whereGeoJson($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Route whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Route whereLayerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Route whereUpdatedAt($value)
 */
	class Route extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $icon_url
 * @property string $provider
 * @property string $provider_id
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Map[] $maps
 * @property-read int|null $maps_count
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Sanctum\PersonalAccessToken[] $tokens
 * @property-read int|null $tokens_count
 * @method static \Database\Factories\UserFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereIconUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereProvider($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereProviderId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

