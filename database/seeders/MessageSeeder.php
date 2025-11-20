<?php

namespace Database\Seeders;

use App\Models\Message;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Message::create([
            'name' => 'John Doe',
            'email' => 'john.doe@example.com',
            'message' => 'Hello, I would like to know more about your projects and experience.',
        ]);
    }
}
