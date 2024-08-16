<?php

// app/Http/Controllers/TeamController.php
namespace App\Http\Controllers;

use App\Models\Delinfo;
use App\Models\Team;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class TeamController extends Controller
{
    public function index()
    {
        $users = User::whereHas('team', function ($query) {
            $query->where('inviter_id', auth()->id());
        })->get();
    
        return Inertia::render('Admin/ManagePrivileges', ['users' => $users]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'inviter_id' => 'required|exists:users,id',
            'user_id' => 'required|exists:users,id',
        ]);

        Team::create([
            'inviter_id' => $request->inviter_id,
            'user_id' => $request->user_id,
        ]);

        return redirect()->back()->with('success', 'User added to team successfully!');
    }

    public function grantPrivilege(Request $request)
    {
        if (!Auth::user()->isAdmin()) {
            return redirect()->back()->withErrors('You do not have permission to grant privileges.');
        }

        $request->validate([
            'user_id' => 'required|exists:users,id',
            'privilege' => 'required|in:admin,restricted_admin',
        ]);

        $user = User::find($request->user_id);
        $user->usertype = $request->privilege === 'admin' 
            ? User::USER_TYPE_ADMIN 
            : User::USER_TYPE_RESTRICTED_ADMIN;
        $user->save();

        return redirect()->back()->with('success', 'Privilege granted successfully!');
    }

    public function revokePrivilege(Request $request)
    {
        if (!Auth::user()->isAdmin()) {
            return redirect()->back()->withErrors('You do not have permission to revoke privileges.');
        }
    
        $request->validate([
            'user_id' => 'required|exists:users,id',
        ]);
    
        $user = User::find($request->user_id);

        Delinfo::create([
            'name' => $user->name,
            'email' => $user->email,
            'user_id' => $user->id,
        ]);

        $team=Team::where('user_id',$user->id);
        $team->update(['is_deleted'=>true]);

        $user->delete();
        return redirect()->back()->with('success', 'Privilege revoked successfully!');
    }
    
}
#tokens=EAAM1JZBnz20oBO4vpZADnYwjPLQctvzYndeYxSbPeKqvLnYSOnBB5wZAEhQPAZCOco7rjlYuy7egxJbqZCXPGXnUCp6L98cdkLBtl5Q5eH3O4Q6WpXZARnZCZCYyD8MTZC2ZBbJNwvmHEZC2IrdzYfZCVdkxUnt1S6ZAJ5XbWhYoMizJ9JaBRBL6wlfSAvZBIKjZCQ8tYhEtzrm4ROXiAZA14vXBnQAz7kwZD
// "id": "201095936422701",
//       "access_token": "EAAM1JZBnz20oBOxKBvjZCNMZCWwZAsPhJiRzMPkzkHDGhcemgSPxXwK0VOIRWQxyzWbi5J0tgKcyCSIcE64Qx7tL1wKB5Stp2rmlFs3RMBMzfdO817g7ZArjn4A4RJ8a7DuWesZBJu7PjDgsCCG3aN1MprQEK3UAl8m6mX33AITRsZCZCeFWs2YzpANseen8cy0ZD"
