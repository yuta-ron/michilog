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
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GetMapListTest extends TestCase
{
    public function test_マップの一覧を取れることのテスト() {
        $layers = Layer::factory()->has(Route::factory()->count(3))->count(5); //->create();
        $locations = Location::factory()->has(LocationMeta::factory()->count(10))->count(10); //->create();
        $mapMeta = MapMeta::factory()->count(1);
        $maps = Map::factory()->has($mapMeta)->has($layers)->has($locations)->count(10)->create();

        $user = User::factory()->create();
        $response = $this->actingAs($user, 'web')->get('/api/v1/maps');
        $response->assertOk();
        $response->assertJsonCount(10);

        $item = $response[0];
        $this->assertArrayHasKey('thumbnail', $item);
        $this->assertArrayHasKey('title', $item);
        $this->assertArrayHasKey('description', $item);
        $this->assertArrayHasKey('id', $item);
    }
}
