<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Mail\ReplyMail;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $messages = Message::all();
        return Inertia::render('Messages/Index', [
            'messages' => $messages,
        ]);
    }

    /**
     * Mark a message as read.
     */
    public function markAsRead(Message $message)
    {
        $message->is_read = true;
        $message->save();

        return redirect()->back();
    }

    /**
     * Send a reply email to the message sender.
     */
    public function reply(Request $request, Message $message)
    {
        $request->validate([
            'reply_message' => 'required|string|min:10',
        ]);
        
        Mail::send(new ReplyMail(
            $request->input('reply_message'),
            $message->email,
            $message->message
        ));

        if (!$message->is_read) {
            $message->is_read = true;
            $message->save();
        }

        return redirect()->back()->with('success', 'Balasan email berhasil dikirim.');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|min:10',
        ]);

        Message::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'message' => $validated['message'],
            'is_read' => false,
        ]);

        return back()->with('success', 'Pesan Anda berhasil terkirim! Kami akan membalas secepatnya.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
