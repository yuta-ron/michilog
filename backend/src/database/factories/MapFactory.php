<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Map>
 */
class MapFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $mapNames = ['同志村ツアー', '伊豆一周', '東北縦断ツアー', ];

        return [
            'name' => $mapNames[rand(0, count($mapNames) - 1)],
            'user_id' => User::factory(),
        ];
    }
}
