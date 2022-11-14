<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Layer extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'hash',
        'color',
        'map_id',
    ];

    public function routes() {
        return $this->hasMany(Route::class);
    }
}
