<?php

namespace App\Package\Domains\User;


final class User
{
    public readonly int $id;
    public readonly string $name;
    public readonly string $iconUrl;

    public function __construct(\App\Models\User $user)
    {
        $this->id = $user->id;
        $this->name = $user->name;
        $this->iconUrl = $user->icon_url;
    }
}
