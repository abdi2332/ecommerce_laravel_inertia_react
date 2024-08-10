// resources/views/emails/invitation.blade.php
@component('mail::message')
# You're Invited!

You have been invited to access the admin view. This invitation will expire in 2 days. Click the button below to register.

@component('mail::button', ['url' => url('/invite/' . $invitation->token)])
Register
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent

