<?php

namespace Database\Factories;

use App\Models\Layer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Route>
 */
class RouteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'layer_id' => Layer::factory(),
            'geo_json' => '{"json": "here"}',
        ];
    }
}
