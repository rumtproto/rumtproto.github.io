---
title: "Connected business bots"
original: "https://core.telegram.org/api/bots/connected-business-bots"
section: api
description: "Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI…"
crumbs: [{"title":"API","url":"/api/"},{"title":"Connected business bots","url":"/api/bots/connected-business-bots/"}]
layout: layout.njk
---

# Connected business bots

Users can connect Telegram bots that will process and answer messages **on their behalf**. This allows them to **seamlessly integrate** any existing tools and workflows, or add **AI assistants** that manage their chats.

```
inputBusinessBotRecipients#c4e5921e flags:# existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?Vector<InputUser> exclude_users:flags.6?Vector<InputUser> = InputBusinessBotRecipients;

businessBotRecipients#b88cf373 flags:# existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?Vector<long> exclude_users:flags.6?Vector<long> = BusinessBotRecipients;

connectedBot#cd64636c flags:# bot_id:long recipients:BusinessBotRecipients rights:BusinessBotRights = ConnectedBot;

account.connectedBots#17d7f87b connected_bots:Vector<ConnectedBot> users:Vector<User> = account.ConnectedBots;

botBusinessConnection#8f34b2f5 flags:# disabled:flags.1?true connection_id:string user_id:long dc_id:int date:int rights:flags.2?BusinessBotRights = BotBusinessConnection;

updateBotBusinessConnect#8ae5c97a connection:BotBusinessConnection qts:int = Update;
updateBotNewBusinessMessage#9ddb347c flags:# connection_id:string message:Message reply_to_message:flags.0?Message qts:int = Update;
updateBotEditBusinessMessage#07df587c flags:# connection_id:string message:Message reply_to_message:flags.0?Message qts:int = Update;
updateBotDeleteBusinessMessage#a02a982e connection_id:string peer:Peer messages:Vector<int> qts:int = Update;
updateBusinessBotCallbackQuery#1ea2fda7 flags:# query_id:long user_id:long connection_id:string message:Message reply_to_message:flags.2?Message chat_instance:long data:flags.0?bytes = Update;

---functions---

account.updateConnectedBot#66a08c7e flags:# deleted:flags.1?true rights:flags.0?BusinessBotRights bot:InputUser recipients:InputBusinessBotRecipients = Updates;
account.getConnectedBots#4ea4c80f = account.ConnectedBots;

account.toggleConnectedBotPaused#646e1097 peer:InputPeer paused:Bool = Bool;
account.disablePeerConnectedBot#5e437ed9 peer:InputPeer = Bool;

account.getBotBusinessConnection#76a86270 connection_id:string = Updates;

invokeWithBusinessConnection#dd289f8e {X:Type} connection_id:string query:!X = X;
```

Currently just one business bot may be connected to a user account.  
Bots which may be connected to user accounts have the [user](/constructor/user/).`bot_business` flag set; trying to connect a non-business bot will emit a `BOT_BUSINESS_MISSING` error.  
Connecting a business bot does not require [Telegram Premium »](/api/premium/).

Use [account.updateConnectedBot »](/method/account.updateConnectedBot/) to connect a business bot to the current account, or to change the connection settings.  
Use [account.updateConnectedBot »](/method/account.updateConnectedBot/) with the `deleted` flag set to disconnect a business bot from the current account.  
Use [account.getConnectedBots »](/method/account.getConnectedBots/) to list all currently connected business bots.

Use [account.toggleConnectedBotPaused »](/method/account.toggleConnectedBotPaused/) to pause or resume a specific chat, temporarily disconnecting it from all business bots (equivalent to temporarily specifying it in `recipients.exclude_users` during initial configuration with [account.updateConnectedBot »](/method/account.updateConnectedBot/)).  
Use [account.disablePeerConnectedBot »](/method/account.disablePeerConnectedBot/) to permanently disconnect a specific chat from all business bots (equivalent to specifying it in `recipients.exclude_users` during initial configuration with [account.updateConnectedBot »](/method/account.updateConnectedBot/)); to reconnect a chat disconnected using this method, the user must reconnect the entire bot by invoking [account.updateConnectedBot »](/method/account.updateConnectedBot/).

Note that invoking the above two methods will also add the peer to the `recipients.exclude_users` field of the related [connectedBot](/constructor/connectedBot/) (or to `recipients.users`, if the inversion `recipients.exclude_selected` flag is set).

The above two methods should be invoked when pressing the appropriate buttons in the [action bar, see here »](/api/action-bar/#manage-a-connected-business-bot) for more info on the business bot action bar that should be displayed on all peers currently managed by the bot, according to the [action bar flags »](/api/action-bar/#manage-a-connected-business-bot).

Connecting or disconnecting a business bot or changing the connection settings will emit an [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) update to the bot, with the new settings and a `connection_id` that will be used by the bot to handle updates from and send messages as the user.

According to the specified settings, the bot will start receiving [updateBotNewBusinessMessage](/constructor/updateBotNewBusinessMessage/), [updateBotEditBusinessMessage](/constructor/updateBotEditBusinessMessage/), [updateBotDeleteBusinessMessage](/constructor/updateBotDeleteBusinessMessage/) updates containing messages sent to the connected user via the business connection.

Bots may invoke [account.getBotBusinessConnection](/method/account.getBotBusinessConnection/) to re-fetch the [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) constructor associated with a specific `connection_id`.  
This is needed for example for freshly logged in bots that are receiving some [updateBotNewBusinessMessage](/constructor/updateBotNewBusinessMessage/), etc. updates because some users have already connected to the bot before it could login.  
In this case, the bot is receiving messages from the business connection, but it hasn't cached the associated [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) with info about the connection (can it reply to messages? etc.) yet, and cannot receive the old ones because they were sent when the bot wasn't logged into the session yet.  
This method can be used to fetch info about a not-yet-cached business connection, and should not be invoked if the info is already cached or to fetch changes, as eventual changes will automatically be sent as new [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) updates to the bot, using the usual [update delivery methods »](/api/updates/).

The bot will be able to invoke the following methods on behalf of the user via a business connection (according to the [businessBotRights](/constructor/businessBotRights/) passed to [account.updateConnectedBot](/method/account.updateConnectedBot/)), by wrapping the query in a [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), passing the connection ID:

-   [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/) - Set global privacy settings
-   [account.updateProfile](/method/account.updateProfile/) - Updates user profile.
-   [messages.deleteMessages](/method/messages.deleteMessages/) - Deletes messages by their identifiers.
-   [messages.editMessage](/method/messages.editMessage/) - Edit message
-   [messages.readHistory](/method/messages.readHistory/) - Marks message history as read.
-   [messages.sendMedia](/method/messages.sendMedia/) - Send a media
-   [messages.sendMessage](/method/messages.sendMessage/) - Sends a message to a chat
-   [messages.sendMultiMedia](/method/messages.sendMultiMedia/) - Send an [album or grouped media](/api/files/#albums-grouped-media)
-   [messages.setTyping](/method/messages.setTyping/) - Sends a current user typing event (see [SendMessageAction](/type/SendMessageAction/) for all event types) to a conversation partner or group.
-   [messages.updatePinnedMessage](/method/messages.updatePinnedMessage/) - Pin a message
-   [payments.convertStarGift](/method/payments.convertStarGift/) - Convert a [received gift »](/api/gifts/) into Telegram Stars: this will permanently destroy the gift, converting it into [starGift](/constructor/starGift/).`convert_stars` [Telegram Stars](/api/stars/), added to the user's balance.
-   [payments.exportInvoice](/method/payments.exportInvoice/) - Generate an [invoice deep link](/api/links/#invoice-links)
-   [payments.getPaymentForm](/method/payments.getPaymentForm/) - Get a payment form
-   [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/) - Fetch the full list of [gifts »](/api/gifts/#list-all-received-gifts) owned, received or [hosted »](/api/gifts/#hosted-collectible-gifts) by a peer.
-   [payments.getStarsStatus](/method/payments.getStarsStatus/) - Get the current [Telegram Stars balance](/api/stars/) of the current account (with peer=[inputPeerSelf](/constructor/inputPeerSelf/)), or the stars balance of the bot or channel specified in `peer`.
-   [payments.sendStarsForm](/method/payments.sendStarsForm/) - Make a payment using [Telegram Stars, see here »](/api/stars/#using-stars) for more info.
-   [payments.transferStarGift](/method/payments.transferStarGift/) - Transfer a [collectible gift](/api/gifts/#collectible-gifts) to another user or channel: can only be used if transfer is free (i.e. [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/).`transfer_stars` is not set); see [here »](/api/gifts/#transferring-collectible-gifts) for more info on the full flow (including the different flow to use in case the transfer isn't free).
-   [payments.upgradeStarGift](/method/payments.upgradeStarGift/) - Upgrade a [gift](/api/gifts/) to a [collectible gift](/api/gifts/#collectible-gifts): can only be used if the upgrade was already paid by the gift sender; see [here »](/api/gifts/#upgrade-a-gift-to-a-collectible-gift) for more info on the full flow (including the different flow to use in case the upgrade was not paid by the gift sender).
-   [stories.deleteStories](/method/stories.deleteStories/) - Deletes some posted [stories](/api/stories/).

Make sure to always send queries wrapped in an `invokeWithBusinessConnection` to the datacenter ID, specified in the `dc_id` field of the [botBusinessConnection](/constructor/botBusinessConnection/) that is being used.

Note that a JSON version of the full list of business-ready methods is also available in the [RPC db »](/api/errors/#error-database).

[messages.uploadMedia](/method/messages.uploadMedia/) may also be used in business connections, _not_ by wrapping it in [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), but rather by specifying the business connection ID in the `business_connection_id` parameter.

[stories.sendStory](/method/stories.sendStory/) and [stories.editStory](/method/stories.editStory/) can also be used to post and edit stories on behalf of a connected business account: in this case, simply pass the business account's peer in `peer`, _without_ wrapping the request in an [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/) query.  
Note that [stories.editStory](/method/stories.editStory/) can only be used to edit stories posted by the same business bot on behalf of the user.

A `BUSINESS_CONNECTION_INVALID` RPC error (or for some business methods, `BOT_METHOD_INVALID`) will be emitted when using [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/) if the `connection_id` passed to [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/) is invalid or was changed (by a change of the business connection parameters, in this case a new [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) update will be emitted with the new `connection_id`).

A `BUSINESS_CONNECTION_NOT_ALLOWED` RPC error will be emitted when using [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/) if either:

-   The method was invoked by a user (obviously, as users cannot invoke methods over a business connection).
-   The method was invoked by a bot, but business mode was disabled in @botfather.
-   The method was invoked by a bot, but this method cannot be invoked over a business connection.

A `BOT_ACCESS_FORBIDDEN` RPC error will be emitted when using [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), or the other business-ready methods that do _not_ require [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/) if the specified query attempted an operation that is not allowed over a business connection (i.e. editing a story not uploaded by the business bot, and so on).

[Message](/constructor/message/)s sent by business bots on behalf of the user using this method will have the `via_business_connection` flag set, indicating that the message was sent by the business bot indicated in [message](/constructor/message/).`via_bot_id`.

[Message](/constructor/message/)s sent by business bots on behalf of the user may also contain [inline keyboards](/api/bots/buttons/), including [callback buttons](/constructor/keyboardButtonCallback/), which when pressed will emit an [updateBusinessBotCallbackQuery](/constructor/updateBusinessBotCallbackQuery/) which should be handled as specified [here »](/api/bots/buttons/#answering-a-callback-query) (_without_ wrapping the query in an `invokeWithBusinessConnection`).

#### Transferring stars from a business account to the business bot

[inputInvoiceBusinessBotTransferStars](/constructor/inputInvoiceBusinessBotTransferStars/) may be used to transfer stars from the balance of a user account connected to a business bot, to the balance of the business bot, see [here »](/api/stars/#transferring-stars-from-a-business-account-to-the-business-bot) for more info on the full flow.
