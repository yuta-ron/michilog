<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Location extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'lat',
        'lng',
        'map_id',
    ];

    public function map() {
        return $this->belongsTo(Map::class);
    }

    /**
     * @return HasMany
     */
    public function locationMetas(): HasMany {
        return $this->hasMany(LocationMeta::class);
    }
}
