<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MapMeta extends Model
{
    use HasFactory;

    protected $fillable = [
        'map_id',
        'description',
        'thumbnail_url',
    ];
}
