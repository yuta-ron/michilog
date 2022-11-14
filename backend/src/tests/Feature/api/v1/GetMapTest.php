<?php

namespace Tests\Feature\api\v1;

use App\Models\Layer;
use App\Models\Location;
use App\Models\LocationMeta;
use App\Models\Map;
use App\Models\MapMeta;
use App\Models\Route;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\TestResponse;
use Tests\TestCase;

/**
 *
 */
class GetMapTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
    }

    public function test_空のマップを取得するテスト() {

        $maps = Map::factory()->count(1)->create();
        $user = User::factory()->create();
        $response = $this->actingAs($user, 'web')->get('/api/v1/maps/'. $maps[0]->id);


        $this->assertArrayHasKey('name', $response);
        $this->assertArrayHasKey('layers', $response);
        $this->assertIsArray($response['layers']);
        $this->assertArrayHasKey('locations', $response);
        $this->assertIsArray($response['locations']);

        $response->assertStatus(200);
    }

    public function test_何かしらの経路が登録済みのマップを取得するテスト()
    {
        $layers = Layer::factory()->has(Route::factory()->count(3))->count(5); //->create();
        $locations = Location::factory()->has(LocationMeta::factory()->count(10))->count(10); //->create();
        $mapMeta = MapMeta::factory()->count(1);

        $maps = Map::factory()->has($mapMeta)->has($layers)->has($locations)->count(10)->create();

        $user = User::factory()->create();
        $response = $this->actingAs($user, 'web')->get('/api/v1/maps/'. $maps[0]->id);

        $this->assertArrayHasKey('name', $response);
        $this->assertArrayHasKey('layers', $response);
        $this->assertIsArray($response['layers']);

        $layer = $response['layers'][0];
        $this->assertArrayHasKey('color', $layer);
        $this->assertArrayHasKey('hash', $layer);
        $this->assertArrayHasKey('name', $layer);
        $this->assertArrayHasKey('route', $layer);

        $route = $layer['route'];
        $this->assertArrayHasKey('geo_json', $route);
        $this->assertIsString($route['geo_json']);
        $this->assertArrayHasKey('name', $route);

        $this->assertArrayHasKey('locations', $response);
        $this->assertArrayHasKey('title', $response['locations'][0]);
        $this->assertArrayHasKey('description', $response['locations'][0]);
        $this->assertArrayHasKey('lat', $response['locations'][0]['latlng']);
        $this->assertArrayHasKey('lng', $response['locations'][0]['latlng']);
        // 後でarrayに
        $this->assertArrayHasKey('media_url', $response['locations'][0]);

        $response->assertStatus(200);
    }
}
