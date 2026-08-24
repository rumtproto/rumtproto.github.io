---
title: "Min constructors"
original: "https://core.telegram.org/api/min"
section: api
description: "In some situations user and channel constructors have reduced set of fields present (although id is always there) and min flag set. This is done for performance and privacy…"
crumbs: [{"title":"API","url":"/api/"},{"title":"Min constructors","url":"/api/min/"}]
layout: layout.njk
---

# Min constructors

In some situations [user](/constructor/user/) and [channel](/constructor/channel/) constructors have reduced set of fields present (although `id` is always there) and `min` flag set. This is done for performance and privacy reasons.

When receiving said constructors, the client must first check if user or chat object without `min` flag is already present in the [local peer database »](/api/peers/).  
If it is present, then the client should merge the remote and the local object, ignoring some specific fields of the remote object as specified by the [user](/constructor/user/) and [channel](/constructor/channel/) pages.

Additionally, the client must store the context (similar to [file references](/api/file-references/)) in which the user/channel was seen. Later, when the client needs to pass the user/channel as input argument (e.g. passing the `access_hash` to fetch profile, mute, ban info etc), the context is used to generate the `input*FromMessage` constructor, instead of normal `inputUser`, `inputChannel` or `inputPeer`.

-   [inputPeerUserFromMessage](/constructor/inputPeerUserFromMessage/)
-   [inputPeerChannelFromMessage](/constructor/inputPeerChannelFromMessage/)
-   [inputUserFromMessage](/constructor/inputUserFromMessage/)
-   [inputChannelFromMessage](/constructor/inputChannelFromMessage/)

The `access_hash` value of a `min` constructor is only suitable to use in certain conditions as specified by the [user](/constructor/user/) and [channel](/constructor/channel/) pages.

Usually `min` constructors are encountered in messages inside of groups or channels. When a message mentioning (sender, forwarder or forwardee, et cetera) such a user or channel is found, the constructor must be associated with the message ID of the message and with the chat where the message was seen.

#### Example

Assume a [message](/constructor/message/) with id `34` is received from supergroup ([actually channel](/api/channel/)) `123456789`. Said message was sent by `from_id` `102424212`. The [updates](/api/updates/) container that contained the message has a user with ID `102424212` in the `users` field, but it has the `min` flag set, and the provided `access_hash` may be absent, or otherwise can't be used to generate a typical [inputPeerUser](/constructor/inputPeerUser/) constructor to send messages or do other actions.

What the client does is associate `102424212` with the channel `123456789` and message ID `34`. When and if the client will need to interact with user `102424212`, it will generate one of the `*FromMessage` constructors mentioned above, setting:

-   `msg_id` to `34`
-   `peer` to the [InputPeer](/type/InputPeer/) associated with channel `123456789`
-   `user_id` to `102424212`

`user_id` can also be set to the IDs of users met in the `fwd_header` (messages forwarded from a user can be used to interact with the original sender, if they don't have privacy settings for forwards enabled). Users mentioned via [messageEntityMentionName](/constructor/messageEntityMentionName/) in a message can also be used.

The same can be done with `min` [channels](/api/channel/).

Example implementations: [Telegram for iOS](https://github.com/peter-iakovlev/Telegram-iOS), [tdlib](https://github.com/tdlib/td).
