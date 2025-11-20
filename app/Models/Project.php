<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $table = 'projects';

    protected $fillable = [
        'title',
        'description',
        'image',
        'tech',
        'visit_link',
        'repo_link',
    ];

    protected $casts = [
        'tech' => 'array',
    ];
}
