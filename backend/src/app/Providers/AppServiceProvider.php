<?php

namespace App\Providers;

use App\Package\Domains\Layer\LayerRepositoryInterface;
use App\Package\Domains\Location\LocationRepositoryInterface;
use App\Package\Domains\Map\MapRepositoryInterface;
use App\Package\Domains\Route\RouteRepositoryInterface;
use App\Package\Infrastructure\Map\EloquentLayerRepository;
use App\Package\Infrastructure\Map\EloquentLocationRepository;
use App\Package\Infrastructure\Map\EloquentMapRepository;
use App\Package\Infrastructure\Map\EloquentRouteRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(MapRepositoryInterface::class, EloquentMapRepository::class);
        $this->app->bind(LayerRepositoryInterface::class, EloquentLayerRepository::class);
        $this->app->bind(RouteRepositoryInterface::class, EloquentRouteRepository::class);
        $this->app->bind(LocationRepositoryInterface::class, EloquentLocationRepository::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
