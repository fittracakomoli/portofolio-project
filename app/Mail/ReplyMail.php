<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ReplyMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Pesan balasan yang dikirim oleh admin.
     * @var string
     */
    public $replyMessage;

    /**
     * Pesan asli yang dikirim oleh pengguna (opsional).
     * @var string
     */
    public $originalMessage;

    /**
     * Alamat email penerima.
     * @var string
     */
    protected $recipientEmail;

    /**
     * Create a new message instance.
     *
     * @param string $replyMessage Isi balasan dari admin.
     * @param string $recipientEmail Email tujuan (pengirim pesan kontak asli).
     */
    public function __construct(string $replyMessage, string $recipientEmail, string $originalMessage) // <--- BARU: Tambah parameter
    {
        $this->replyMessage = $replyMessage;
        $this->recipientEmail = $recipientEmail;
        $this->originalMessage = $originalMessage; // <--- SIMPAN PESAN ASLI
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            to: $this->recipientEmail, // Menggunakan alamat email yang kita simpan
            subject: 'Re: Balasan Pesan dari ' . config('app.name'), // Subjek email balasan
        );
    }

    /**
     * Get the message content (Plain Text / HTML).
     */
    public function content(): Content
    {
        // Menggunakan view emails.reply
        return new Content(
            view: 'reply',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}