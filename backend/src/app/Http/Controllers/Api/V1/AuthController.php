<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Log\Logger;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
    const TWITTER = 'twitter';

    public function twitterAuthRedirect() {
        $url = Socialite::driver(self::TWITTER)->redirect()->getTargetUrl();
        \Log::info('url: '. $url);

        return response(['redirect_url' => $url]);
    }

    public function twitterAuthCallback() {
        $user =  Socialite::driver(self::TWITTER)->user();
        $user = User::updateOrCreate([
            'provider' => self::TWITTER,
            'provider_id' => $user->getId(),
        ],[
            'name' => $user->getNickname(),
            'provider' => self::TWITTER,
            'provider_id' => $user->getId(),
            'icon_url' => str_replace('_normal', '', $user->getAvatar()),
        ]);

        Auth::login($user, true);

        return redirect(env('MAP_FEED_PATH'));
    }

    public function Logout() {
        Auth::logout();
    }
}
