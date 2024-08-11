<?php

// app/Http/Controllers/InvitationController.php
namespace App\Http\Controllers;

use App\Models\Invitation;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use App\Mail\InvitationMail;
use Inertia\Inertia;
use App\Models\User;

class InvitationController extends Controller
{
    public function index(){
        return Inertia::render('Admin/InviteUser');
    }

    public function invite(Request $request)
    {
        if (!auth()->user()->can_invite) {
            return redirect('/admin/dashboard')->withErrors('You do not have permission to invite others.');
        }

        $request->validate([
            'email' => 'required|email|unique:invitations,email',
        ]);

        $inviteCount = Invitation::where('invited_by', auth()->id())->count();
        if ($inviteCount >= 4) {
            return redirect()->back()->with('error', 'You have reached the maximum number of invitations.');
        }

        $token = Str::random(32);

        $invitation = Invitation::create([
            'email' => $request->email,
            'token' => $token,
            'invited_by' => auth()->id(),
            'expires_at' => Carbon::now()->addDays(2),  // Token expires in 2 days
        ]);

        Mail::to($request->email)->send(new InvitationMail($invitation));

        return redirect()->back()->with('success', 'Invitation sent successfully!');
    }

    public function accept($token)
    {
        $invitation = Invitation::where('token', $token)
                                ->where('accepted', false)
                                ->where('expires_at', '>', Carbon::now())
                                ->first();

        if (!$invitation) {
            return redirect('/')->with('error', 'This invitation link is either invalid or has expired.');
        }

        return inertia('Auth/Registertoken', ['invitation' => $invitation]);
    }

    public function register(Request $request, $token)
    {
        $invitation = Invitation::where('token', $token)
                                ->where('accepted', false)
                                ->where('expires_at', '>', Carbon::now())
                                ->firstOrFail();

        $request->validate([
            'name' => 'required|string|max:255',
            'password' => 'required|string|confirmed|min:8',
        ]);

        $user = User::create([
            'email' => $invitation->email,
            'name' => $request->name,
            'password' => bcrypt($request->password),
            'usertype' => 'admin',
            'can_invite' => false, 
        ]);

        $invitation->update(['accepted' => true]);

        auth()->login($user);

        return redirect('/admin/dashboard');
    }
}