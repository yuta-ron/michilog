<?php

namespace Database\Factories;

use App\Models\Map;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Location>
 */
class LocationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $locationName = ['北海道', '東京', '広島', ];

        return [
            'title' => $locationName[rand(0, count($locationName) - 1)],
            'description' => $locationName[rand(0, count($locationName) - 1)],
            'lat' => $this->faker->randomFloat(),
            'lng' => $this->faker->randomFloat(),
            'map_id' => Map::factory(),
        ];
    }
}
