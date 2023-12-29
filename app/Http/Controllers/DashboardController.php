<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        // dd(Post::with('author')->get());

        return Inertia::render('Dashboard', [
            'posts' => Post::with('author')->paginate(10),
        ]);
    }
}
