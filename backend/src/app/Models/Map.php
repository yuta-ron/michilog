<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Map extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name'
    ];

    public function layers() {
        return $this->hasMany(Layer::class);
    }

    public function mapMeta(): HasOne {
        return $this->hasOne(MapMeta::class, 'map_id', 'id');
    }

    public function locations() {
        return $this->hasMany(Location::class);
    }

    public function owner(): HasOne {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
