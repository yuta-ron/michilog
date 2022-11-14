<?php

namespace Tests\Feature\api\v1;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CreateMapTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        User::factory()->count(1)->create();
    }

    public function test_mapを作成できることのテスト()
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user, 'web')->post('/api/v1/maps',['name' => 'test map']);

        $response->assertStatus(201);
    }

//    public function test_未ログインの場合401() {
//        $response = $this->post('/api/v1/maps',['name' => 'test map']);
//        $response->assertStatus(401);
//
//    }
}
