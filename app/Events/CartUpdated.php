<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;

class CartUpdated implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    use serializesModels;

    public $userId;
    public $cartItemCount;

    public function __construct($userId, $cartItemCount)
    {
       $this->userId = $userId;
      $this->cartItemCount = $cartItemCount;

    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn()
    {
        return new PrivateChannel("cart.{$this->userId}");
    }

    public function broadcastAs(){
        return 'cart.updated';
    }

    public function broadcastWith(){
        return [
            'cartCount'=> $this->cartItemCount,
        ];
    }
}
