<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('employees', function (Blueprint $table) {
            // เพิ่มคอลัมน์ images หากยังไม่มี
            if (!Schema::hasColumn('employees', 'images')) {
                $table->string('images')->nullable()->after('hire_date'); // วางหลัง hire_date เพื่อความเป็นระเบียบ
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('employees', function (Blueprint $table) {
            // ลบคอลัมน์ images หากมี
            if (Schema::hasColumn('employees', 'images')) {
                $table->dropColumn('images');
            }
        });
    }
};
