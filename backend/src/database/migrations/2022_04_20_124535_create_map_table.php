<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('maps', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
            $table->timestamps();
        });

        Schema::create('map_metas', function (Blueprint $table) {
            $table->id();
            $table->string('thumbnail_url')->nullable();
            $table->string('description')->nullable();
            $table->unsignedBigInteger('map_id');
            $table->foreign('map_id')->references('id')->on('maps')->cascadeOnDelete();
            $table->timestamps();
        });

        Schema::create('layers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('color');
            $table->string('hash');
            $table->unsignedBigInteger('map_id');
            $table->foreign('map_id')->references('id')->on('maps')->cascadeOnDelete();
            $table->timestamps();
        });
        Schema::create('routes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('layer_id');
            $table->foreign('layer_id')->references('id')->on('layers')->cascadeOnDelete();
            $table->json('geo_json');
            $table->timestamps();
        });
        Schema::create('locations', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description');
            $table->double('lat');
            $table->double('lng');
            $table->unsignedBigInteger('map_id');
            $table->foreign('map_id')->references('id')->on('maps')->cascadeOnDelete();
            $table->timestamps();
        });
        Schema::create('location_metas', function (Blueprint $table) {
            $table->id();
            $table->string('media_url')->nullable();
            $table->unsignedBigInteger('location_id');
            $table->foreign('location_id')->references('id')->on('locations')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('routes');
    }
};
