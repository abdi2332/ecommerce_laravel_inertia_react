<?php

// database/migrations/xxxx_xx_xx_add_can_invite_to_users_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCanInviteToUsersTable extends Migration
{
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->boolean('can_invite')->default(false); // Add can_invite column with a default value of false
        });
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('can_invite'); // Drop the column if rolled back
        });
    }
}

