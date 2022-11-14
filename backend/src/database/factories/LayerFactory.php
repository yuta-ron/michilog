<?php

namespace Database\Factories;

use App\Models\Map;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Layer>
 */
class LayerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->randomAscii(),
            'color' => $this->faker->hexColor(),
            'hash' => $this->faker->randomAscii(),
            'map_id' => Map::factory(),
        ];
    }
}
