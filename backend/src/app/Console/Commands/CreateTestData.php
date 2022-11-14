<?php

namespace App\Console\Commands;

use App\Models\Layer;
use App\Models\Location;
use App\Models\LocationMeta;
use App\Models\Map;
use App\Models\MapMeta;
use App\Models\Route;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * php artisan migrate:fresh && php artisan testdata:seed
 */
class CreateTestData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'testdata:seed';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'テストデータを生成します。すでにある場合はリセットします。';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        echo "start seeding data\n";
        $users = User::factory()->count(5)->create();
        $layers = Layer::factory()->has(Route   ::factory()->count(3))->count(5); //->create();
        $locations = Location::factory()->has(LocationMeta::factory()->count(10))->count(10); //->create();
        $mapMeta = MapMeta::factory()->count(1);
        Map::factory()->has($mapMeta)->has($layers)->has($locations)->count(10)->create();
        echo "done\n";

        return 0;
    }
}
