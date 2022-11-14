<?php

namespace Tests\Unit\Map;

use App\Models\Layer;
use App\Models\Map;
use App\Models\Route;
use App\Models\User;
use App\Package\Infrastructure\Map\EloquentMapRepository;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GetMapTest extends TestCase
{
     use RefreshDatabase;

    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_test()
    {
        $this->assertSame(1,1);
//        User::factory()->count(1)->create();
//        Map::factory()->count(10)->create();
//        Layer::factory()->count(5)->create();
//        Route::factory()->count(3)->create();
//
//        $repo = new EloquentMapRepository();
//        $this->assertNotNull($repo->getMap(1));
//
    }
}
