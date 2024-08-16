<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // First, add a temporary column to hold converted values
            $table->unsignedTinyInteger('usertype_temp')->nullable();
        });

        // Now you can manually convert the existing string values to integers
        DB::table('users')->update([
            'usertype_temp' => DB::raw("CASE 
                WHEN usertype = 'user' THEN 0 
                WHEN usertype = 'admin' THEN 1 
                WHEN usertype = 'restricted_admin' THEN 2 
                ELSE 0 
            END")
        ]);

        // Drop the old column and rename the new one
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('usertype');
            $table->renameColumn('usertype_temp', 'usertype');
        });

        // Finally, update the column to be non-nullable and set the default value
        Schema::table('users', function (Blueprint $table) {
            $table->unsignedTinyInteger('usertype')->default(0)->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // This is optional; only necessary if you want to be able to roll back
        Schema::table('users', function (Blueprint $table) {
            $table->string('usertype')->default('user')->nullable();
            $table->dropColumn('usertype_temp');
        });

        // Convert integer values back to string
        DB::table('users')->update([
            'usertype' => DB::raw("CASE 
                WHEN usertype = 0 THEN 'user' 
                WHEN usertype = 1 THEN 'admin' 
                WHEN usertype = 2 THEN 'restricted_admin' 
                ELSE 'user' 
            END")
        ]);
    }
};
