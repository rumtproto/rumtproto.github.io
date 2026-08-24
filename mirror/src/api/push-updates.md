---
title: "Handling PUSH-notifications"
original: "https://core.telegram.org/api/push-updates"
section: api
description: "To be able to send APNS notifications to Apple servers or GCM notifications to Google servers, application certificates (APNS) or an application key (GCM) must be specified in the…"
crumbs: [{"title":"API","url":"/api/"},{"title":"Handling PUSH-notifications","url":"/api/push-updates/"}]
layout: layout.njk
---

# Handling PUSH-notifications

### Configuring the application

To be able to send APNS notifications to Apple servers or GCM notifications to Google servers, application certificates (APNS) or an application key (GCM) must be specified in the [application settings](https://core.telegram.org/myapp).

### Subscribing to notifications

To subscribe to notifications, the client must invoke the [account.registerDevice](/method/account.registerDevice/) query, passing in **token\_type** and **token** as parameters that identify the current device. It is useful to repeat this query at least once every 24 hours or when restarting the application. Use [account.unregisterDevice](/method/account.unregisterDevice/) to unsubscribe.

The following **token\_type**s are supported:

-   `1` - APNS (device token for apple push)
-   `2` - FCM (firebase token for google firebase)
-   `3` - MPNS (channel URI for microsoft push)
-   `4` - Simple push (endpoint for firefox's deprecated simple push API): note that this push type can also be used by an open source push notification spec like [UnifiedPush »](https://unifiedpush.org/).  
    Simple push works by sending a simple PUT request with a `version=number` payload to the specified HTTPS endpoint every time a relevant message is received: upon receiving such a notification, clients should connect to the MTProto API and fetch [updates](/api/updates/).  
    (Note that the `number` won't necessarily be incremental in Telegram's implementation, just treat each distinct request as a signal that a new message is waiting to be fetched via MTProto).
-   `5` - Ubuntu phone (token for ubuntu push)
-   `6` - Blackberry (token for blackberry push)
-   `7` - MTProto separate session
-   `8` - WNS (windows push)
-   `9` - APNS VoIP (token for apple push VoIP)
-   `10` - Web push (web push, see below)
-   `11` - MPNS VoIP (token for microsoft push VoIP)
-   `12` - Tizen (token for tizen push)
-   `13` - Huawei push

For `10` web push, the token must be a JSON-encoded object with the following keys:

-   `endpoint`: Absolute URL exposed by the push service where the application server can send push messages
-   `keys`: P-256 elliptic curve Diffie-Hellman parameters in the following object
    -   `p256dh`: Base64url-encoded P-256 elliptic curve Diffie-Hellman public key
    -   `auth`: Base64url-encoded authentication secret

### Notification encryption

For FCM and APNS VoIP, an optional encryption key used to encrypt push notifications can be passed to [account.registerDevice](/method/account.registerDevice/) (`secret`). This key (`auth_key`) is used to encrypt the payloads using [MTProto v2](/mtproto/description/).

The FCM payload will be a JSON payload, containing a `p` field with the base64url-encoded encrypted [MTProto payload](/mtproto/description/). After decryption, the result will be a JSON object, prefixed by a 32-bit little-endian integer with the length of the JSON payload. As usual, make sure to follow all security checks as described in the [MTProto docs](/mtproto/description/#important-checks).

[Example implementation](https://github.com/DrKLO/Telegram/blob/b1aa2020e5533ea18dc77aab6c6b8236e5dc2b6c/TMessagesProj/src/main/java/org/telegram/messenger/GcmPushListenerService.java#L30).

As mentioned [above](#subscribing-to-notifications), payloads can also be encrypted using [P-256 Elliptic Curve Diffie-Hellman when using web push](https://tools.ietf.org/html/rfc8291).

### Notification structure

An ([optionally encrypted](#notification-encryption)) notification is provided as a JSON object in the following format:

```
{
  "data": {
    "loc_key": "CHAT_MESSAGE_CONTACT",
    "loc_args": ["John Doe", "My magical group", "Contact Exchange"],
    "user_id": 14124122,
    "custom": {
      "chat_id": 241233,
      "msg_id": 123
    },
    "sound": "sound1.mp3",
  }
}
```

Each notification has several parameters that describe it.

-   loc\_key - Notification type: a string literal in the form `/[A-Z_0-9]+/`, which summarizes the notification. For example, `CHAT_MESSAGE_TEXT`.
-   loc\_args - Notification placeholder arguments: a list or arguments which, when inserted into a template, produce a readable notification.
-   custom - Custom parameters to be passed into the application when a notification is opened. Possible fields:
    -   attachb64 - For notifications about media, base64url-encoded TL-serialization of the corresponding [Photo](/type/Photo/) / [Document](/type/Document/) object
    -   updates - base64url-encoded TL-serialization of the [Updates](/type/Updates/) object, currently sent only for PHONE\_CALL\_REQUEST (with [updatePhoneCall](/constructor/updatePhoneCall/) inside)
    -   call\_id - Call ID, used in PHONE\_CALL\_REQUEST
    -   call\_ah - Call access hash, used in PHONE\_CALL\_REQUEST
    -   encryption\_id - Secret chat id for ENCRYPTION\_REQUEST, ENCRYPTION\_ACCEPT, ENCRYPTED\_MESSAGE
    -   random\_id - Random id for message in ENCRYPTED\_MESSAGE
    -   contact\_id - Telegram user identifier of contact that joined Telegram in CONTACT\_JOINED
    -   msg\_id - Message ID for new message event or reaction event
    -   channel\_id - Identifier of the [channel/supergroup](/api/channel/) where the event occurred
    -   chat\_id - Identifier of the [basic group](/api/channel/#basic-groups) where the event occurred
    -   from\_id - User ID where the event occurred
    -   chat\_from\_broadcast\_id - If the group message was sent as a channel, this field will contain the sender channel ID
    -   chat\_from\_group\_id - If the group message was sent as a supergroup, this field will contain the sender supergroup ID
    -   chat\_from\_id - Groups only, message author identifier (ignore if any of chat\_from\_broadcast\_id / chat\_from\_group\_id was present)
    -   mention - Whether the current user was mentioned/replied to in this new message
    -   silent - Whether the message was posted silently (no sound should be played for this notification)
    -   schedule - Whether the message is outgoing and was sent via [scheduled messages](/api/scheduled-messages/)
    -   report\_delivery\_until\_date - If set and the current unixtime is bigger than the specified unixtime, invoke [messages.reportMessagesDelivery](/method/messages.reportMessagesDelivery/), setting the `push` flag and passing the ID and the peer of this message as soon as it is received by the client (optionally batching requests for the same peer), used for [Telegram Gateway verification messages](https://telegram.org/blog/star-messages-gateway-2-0-and-more#save-even-more-on-user-verification).
    -   edit\_date - When was the message last edited
    -   top\_msg\_id - thread\_id for new mentions/replies in [threads](/api/threads/)
    -   data\_url - Full URL of the webpage trying to login using OAUTH\_REQUEST
    -   announcement - ID of an announcement, used by MESSAGE\_ANNOUNCEMENT
-   sound - The name of an audio file to be played.
-   user\_id - ID of the account to which the PUSH notification should be delivered, in case of clients with multiple accounts active and running.
-   message - Optional notification text, currently used by MESSAGE\_ANNOUNCEMENT

A machine-readable list of all notification types, along with their templates and placeholder arguments, is also embedded in the [/api/config.json](/api/config.json/) index, under the `push` (per-type notification templates) and `push_arguments` (per-type placeholder argument lists) keys.

### Processing notifications

In principle, **data.loc\_key**, **data.custom**, and an Internet connection are sufficient to generate a notification. Obviously, if possible, when generating a visual notification you need not use all of the transmitted data and may rely on the information already stored on the client. But if a user or a chat is not cached locally, the values passed in loc\_args may also be used. **data.user\_id** is the ID of the account to which the PUSH notification should be delivered, in case of clients with multiple accounts active and running.

### Service notifications

The following notifications are handled specially by clients to update local app state or synthesize lightweight local events, instead of displaying an ordinary message notification.

#### DC\_UPDATE

**Extra custom arguments**

**data.custom.dc** - number of the data-center  
**data.custom.addr** - server address with port number in the format `111.112.113.114:443`

**Description**

Add the received server address to the list of possible addresses for the specified DC.

If the address of the first DC was passed (`dc=1`), it is recommended to call [help.getConfig](/method/help.getConfig/) immediately to refresh the DC configuration.

**Template example**

`Open this notification to update app settings`

**Arguments**

This notification does not use placeholder arguments.

#### MESSAGE\_DELETED

**Extra custom arguments**

**data.custom.channel\_id**: For [channels and supergroups](/api/channel/), [Channel/supergroup](/api/channel/) identifier  
**data.custom.chat\_id**: For [chats](/api/channel/), [Chat](/api/channel/) identifier  
**data.custom.from\_id**: For PMs, Author identifier  
**data.custom.messages**: Comma-separated IDs of messages that were deleted

**Description**

Messages were deleted in the specified dialog: remove local notifications for the listed messages.

**data.custom.messages** contains a comma-separated list of server-side message IDs.

#### READ\_REACTION

**Extra custom arguments**

**data.custom.channel\_id**: For [channels and supergroups](/api/channel/), [Channel/supergroup](/api/channel/) identifier  
**data.custom.chat\_id**: For [chats](/api/channel/), [Chat](/api/channel/) identifier  
**data.custom.from\_id**: For PMs, Author identifier  
**data.custom.topic\_id**: Optional forum topic identifier  
**data.custom.messages**: Comma-separated IDs of messages whose reactions were read

**Description**

Reactions were read on the specified messages: remove local reaction-related notifications for those messages.

#### READ\_HISTORY

**Extra custom arguments**

**data.custom.channel\_id**: For [channels and supergroups](/api/channel/), [Channel/supergroup](/api/channel/) identifier  
**data.custom.chat\_id**: For [chats](/api/channel/), [Chat](/api/channel/) identifier  
**data.custom.from\_id**: For PMs, Author identifier  
**data.custom.max\_id**: Maximum ID of read messages

**Description**

Message history was read in the specified non-secret dialog: mark incoming history up to **data.custom.max\_id** as read and remove the corresponding notifications.

#### READ\_STORIES

**Extra custom arguments**

**data.custom.channel\_id**: For [channels and supergroups](/api/channel/), [Channel/supergroup](/api/channel/) identifier  
**data.custom.from\_id**: For user-sent stories, Author identifier  
**data.custom.max\_id**: Maximum ID of read story

**Description**

Story notifications were read for the specified user or channel: mark stories up to **data.custom.max\_id** as read and remove the corresponding story-related notifications.

#### STORY\_DELETED

**Extra custom arguments**

**data.custom.channel\_id**: For [channels and supergroups](/api/channel/), [Channel/supergroup](/api/channel/) identifier  
**data.custom.from\_id**: For user-sent stories, Author identifier  
**data.custom.story\_id**: Comma-separated list of IDs of deleted stories

**Description**

A story was deleted: remove local notifications for that story.

#### STORY\_NOTEXT

**Extra custom arguments**

**data.custom.channel\_id**: For [channels and supergroups](/api/channel/), [Channel/supergroup](/api/channel/) identifier  
**data.custom.from\_id**: For user-sent stories, Author identifier  
**data.custom.story\_id**: ID of the story

**Description**

A new story without text was posted.

**Template example**

`posted a story`

**Arguments**

This notification does not use placeholder arguments.

#### STORY\_LIVE

**Extra custom arguments**

**data.custom.channel\_id**: For [channels and supergroups](/api/channel/), [Channel/supergroup](/api/channel/) identifier  
**data.custom.from\_id**: For user-sent stories, Author identifier  
**data.custom.story\_id**: ID of the story

**Description**

A story live stream was started.

**Template example**

`started a live stream!`

**Arguments**

This notification does not use placeholder arguments.

#### STORY\_HIDDEN\_AUTHOR

**Extra custom arguments**

**data.custom.channel\_id**: For [channels and supergroups](/api/channel/), [Channel/supergroup](/api/channel/) identifier  
**data.custom.from\_id**: For user-sent stories, Author identifier  
**data.custom.story\_id**: ID of the story

**Description**

A new story was posted, but the client should not expose the author in the visible notification text.

**Template example**

`A new story was posted`

**Arguments**

This notification does not use placeholder arguments.

#### GEO\_LIVE\_PENDING

**Description**

Refresh any live locations currently being watched or shared.

This push is a wake-up hint and does not need placeholder arguments or a user-visible notification.

#### SESSION\_REVOKE

**Description**

Logout and remove DB for specified session by **data.user\_id**, only apply if coming from an [MTProto-encrypted payload](#notification-encryption)

#### MESSAGE\_MUTED

**Description**

Sent rarely for muted chats, roughly every 10th muted chat message or about once every 15 seconds in PMs, to refresh badge state or trigger fetching updates from the server.

This push is not meant to be shown to the user as a visible notification.

#### MESSAGE\_ANNOUNCEMENT

**Extra custom arguments**

**data.custom.announcement**: Announcement ID (integer)

**Extra top-level arguments**

**data.message**: Non-empty announcement text

**Description**

Roughly equivalent to a message received from the service notifications ([updateServiceNotification](/constructor/updateServiceNotification/) with `type="announcement"`), but is delivered via push notifications, without contacting the API.

The push text is taken from **data.message**.

Clients may deduplicate repeated announcements using the announcement ID in **data.custom.announcement**: for example, by storing received IDs for 7 days, persisting the cache across restarts.

### Possible Notifications

#### AUTH\_REGION

**Template example**

`New login from unrecognized device {1}, location: {2}`

**Arguments**

1.  Device name
2.  Location

#### AUTH\_UNKNOWN

**Template example**

`New login from unrecognized device {1}`

**Arguments**

1.  Device name

#### CHANNEL\_MESSAGES

**Template example**

`{1} posted an album`

**Arguments**

1.  Message author

#### CHANNEL\_MESSAGE\_AUDIO

**Template example**

`{1} posted a voice message`

**Arguments**

1.  Message author

#### CHANNEL\_MESSAGE\_CONTACT

**Template example**

`{1} posted a contact {2}`

**Arguments**

1.  Message author
2.  Contact name

#### CHANNEL\_MESSAGE\_DOC

**Template example**

`{1} posted a file`

**Arguments**

1.  Message author

#### CHANNEL\_MESSAGE\_DOCS

**Template example**

`{1} posted {2} files`

**Arguments**

1.  Channel name
2.  Number of documents that were posted

#### CHANNEL\_MESSAGE\_FWDS

**Template example**

`{1} posted {2} forwarded messages`

**Arguments**

1.  Message author
2.  Number of forwarded messages

#### CHANNEL\_MESSAGE\_GAME

**Template example**

`{1} invited you to play {2}`

**Arguments**

1.  Message author
2.  Game name

#### CHANNEL\_MESSAGE\_GAME\_SCORE

**Template example**

`{1} scored {3} in game {2}`

**Arguments**

1.  User
2.  Game name
3.  Score

#### CHANNEL\_MESSAGE\_GEO

**Template example**

`{1} posted a location`

**Arguments**

1.  Channel name

#### CHANNEL\_MESSAGE\_GEOLIVE

**Template example**

`{1} posted a live location`

**Arguments**

1.  Channel name

#### CHANNEL\_MESSAGE\_GIF

**Template example**

`{1} posted a GIF`

**Arguments**

1.  Channel name

#### CHANNEL\_MESSAGE\_GIVEAWAY

**Template example**

`{1} posted a giveaway of {2}x {3}m Premium subscriptions`

**Arguments**

1.  Channel name
2.  Number of Telegram Premium subscriptions in the giveaway
3.  Duration in months of each Telegram Premium subscription in the giveaway

#### CHANNEL\_MESSAGE\_GIVEAWAY\_STARS

**Template example**

`{1} posted a giveaway of {3} stars {2}`

**Arguments**

1.  Channel name
2.  Number of winners in the giveaway
3.  Number of Telegram Stars being given away

#### CHANNEL\_MESSAGE\_NOTEXT

**Template example**

`{1} posted a message`

**Arguments**

1.  Channel name

#### CHANNEL\_MESSAGE\_PAID\_MEDIA

**Template example**

`{1} posted a paid post for {2} star`

**Arguments**

1.  Channel name
2.  [Stars](/api/stars/)

#### CHANNEL\_MESSAGE\_PHOTO

**Template example**

`{1} posted a photo`

**Arguments**

1.  Channel name

#### CHANNEL\_MESSAGE\_PHOTOS

**Template example**

`{1} posted {2} photos`

**Arguments**

1.  Channel name
2.  Number of photos that was sent

#### CHANNEL\_MESSAGE\_PLAYLIST

**Template example**

`{1} posted {2} music files`

**Arguments**

1.  Channel name
2.  Number of audio files that were posted

#### CHANNEL\_MESSAGE\_POLL

**Template example**

`{1} posted a poll {2}`

**Arguments**

1.  Channel name
2.  Poll name

#### CHANNEL\_MESSAGE\_QUIZ

**Template example**

`{1} posted a quiz {2}`

**Arguments**

1.  Channel name
2.  Quiz name

#### CHANNEL\_MESSAGE\_ROUND

**Template example**

`{1} posted a video message`

**Arguments**

1.  Channel name

#### CHANNEL\_MESSAGE\_STICKER

**Template example**

`{1} posted a {2} sticker`

**Arguments**

1.  Channel name
2.  Sticker emoji

#### CHANNEL\_MESSAGE\_STORY

**Template example**

`{1} shared a story`

**Arguments**

1.  Channel name

#### CHANNEL\_MESSAGE\_TEXT

**Template example**

`{1}: {2}`

**Arguments**

1.  Channel name
2.  Message body

#### CHANNEL\_MESSAGE\_TODO

**Template example**

`{1} posted a checklist {2}`

**Arguments**

1.  Channel name
2.  Checklist title

#### CHANNEL\_MESSAGE\_TODO\_APPEND

**Template example**

`{1} added {2} tasks`

**Arguments**

1.  Channel name
2.  Number of added tasks

#### CHANNEL\_MESSAGE\_TODO\_DONE

**Template example**

`{1} toggled {2} tasks`

**Arguments**

1.  Channel name
2.  Number of toggled tasks

#### CHANNEL\_MESSAGE\_VIDEO

**Template example**

`{1} posted a video`

**Arguments**

1.  Channel name

#### CHANNEL\_MESSAGE\_VIDEOS

**Template example**

`{1} posted {2} videos`

**Arguments**

1.  Channel name
2.  Number of videos that were posted

#### CHAT\_ADD\_MEMBER

**Template example**

`{1} invited {3} to the group {2}`

**Arguments**

1.  Message author
2.  Chat name
3.  New participant name

#### CHAT\_ADD\_YOU

**Template example**

`{1} invited you to the group {2}`

**Arguments**

1.  User name
2.  Group name

#### CHAT\_CREATED

**Template example**

`{1} invited you to the group {2}`

**Arguments**

1.  Message author
2.  Chat name

#### CHAT\_DELETE\_MEMBER

**Template example**

`{1} removed {3} from the group {2}`

**Arguments**

1.  Message author
2.  Chat name
3.  Dropped participant name

#### CHAT\_DELETE\_YOU

**Template example**

`{1} removed you from the group {2}`

**Arguments**

1.  Message author
2.  Chat name

#### CHAT\_JOINED

**Template example**

`{1} joined the group {2}`

**Arguments**

1.  User name
2.  Group name

#### CHAT\_LEFT

**Template example**

`{1} left the group {2}`

**Arguments**

1.  Message author
2.  Chat name

#### CHAT\_MESSAGES

**Template example**

`{1} sent an album to the group {2}`

**Arguments**

1.  User name
2.  Group name

#### CHAT\_MESSAGE\_AUDIO

**Template example**

`{1} sent a voice message to the group {2}`

**Arguments**

1.  Message author
2.  Chat name

#### CHAT\_MESSAGE\_CONTACT

**Template example**

`{1} shared a contact {3} in the group {2}`

**Arguments**

1.  User name
2.  Group name
3.  Contact name

#### CHAT\_MESSAGE\_DOC

**Template example**

`{1} sent a file to the group {2}`

**Arguments**

1.  User name
2.  Group name

#### CHAT\_MESSAGE\_DOCS

**Template example**

`{1} sent {3} files to the group {2}`

**Arguments**

1.  User name
2.  Group name
3.  Number of documents that were sent

#### CHAT\_MESSAGE\_FWDS

**Template example**

`{1} forwarded {3} messages to the group {2}`

**Arguments**

1.  User name
2.  Group name
3.  Number of messages that were forwarded

#### CHAT\_MESSAGE\_GAME

**Template example**

`{1} invited the group {2} to play {3}`

**Arguments**

1.  User name
2.  Group name
3.  Game name

#### CHAT\_MESSAGE\_GAME\_SCORE

**Template example**

`{1} scored {4} in game {3} in the group {2}`

**Arguments**

1.  User name
2.  Group name
3.  Game name
4.  Score

#### CHAT\_MESSAGE\_GEO

**Template example**

`{1} sent a location to the group {2}`

**Arguments**

1.  Message author
2.  Chat name

#### CHAT\_MESSAGE\_GEOLIVE

**Template example**

`{1} shared a live location with the group {2}`

**Arguments**

1.  User name
2.  Group name

#### CHAT\_MESSAGE\_GIF

**Template example**

`{1} sent a GIF to the group {2}`

**Arguments**

1.  User name
2.  Group name

#### CHAT\_MESSAGE\_GIVEAWAY

**Template example**

`{1} sent a giveaway of {3}x {4}m Premium subscriptions to the group {2}`

**Arguments**

1.  User name
2.  Group name
3.  Number of Telegram Premium subscriptions in the giveaway
4.  Duration in months of each Telegram Premium subscription in the giveaway

#### CHAT\_MESSAGE\_GIVEAWAY\_STARS

**Template example**

`{1} sent a giveaway of {4} stars {3} to the group {2}`

**Arguments**

1.  User name
2.  Group name
3.  Number of winners in the giveaway
4.  Number of Telegram Stars being given away

#### CHAT\_MESSAGE\_INVOICE

**Template example**

`{1} sent an invoice to the group {2} for {3}`

**Arguments**

1.  User name
2.  Group name
3.  Product name

#### CHAT\_MESSAGE\_NOTEXT

**Template example**

`{1} sent a message to the group {2}`

**Arguments**

1.  Message author
2.  Chat name

#### CHAT\_MESSAGE\_PAID\_MEDIA

**Template example**

`{1} posted a paid post in {2} group for {3} star`

**Arguments**

1.  Message author
2.  Chat name
3.  [Stars](/api/stars/)

#### CHAT\_MESSAGE\_PHOTO

**Template example**

`{1} sent a photo to the group {2}`

**Arguments**

1.  Message author
2.  Chat name

#### CHAT\_MESSAGE\_PHOTOS

**Template example**

`{1} sent {3} photos to the group {2}`

**Arguments**

1.  User name
2.  Group name
3.  Number of photos that were sent

#### CHAT\_MESSAGE\_PLAYLIST

**Template example**

`{1} sent {3} music files to the group {2}`

**Arguments**

1.  User name
2.  Group name
3.  Number of audio files that were sent

#### CHAT\_MESSAGE\_POLL

**Template example**

`{1} sent a poll {3} to the group {2}`

**Arguments**

1.  User name
2.  Group name
3.  Poll name

#### CHAT\_MESSAGE\_QUIZ

**Template example**

`{1} sent a quiz {3} to the group {2}`

**Arguments**

1.  User name
2.  Group name
3.  Quiz name

#### CHAT\_MESSAGE\_ROUND

**Template example**

`{1} sent a video message to the group {2}`

**Arguments**

1.  User name
2.  Group name

#### CHAT\_MESSAGE\_STICKER

**Template example**

`{1} sent a {3} sticker to the group {2}`

**Arguments**

1.  User name
2.  Group name
3.  Sticker emoji

#### CHAT\_MESSAGE\_STORY

**Template example**

`{1} shared a story to the group`

**Arguments**

1.  Group name

#### CHAT\_MESSAGE\_TEXT

**Template example**

`{1} @ {2}: {3}`

**Arguments**

1.  Message author
2.  Chat name
3.  Message body

#### CHAT\_MESSAGE\_TODO

**Template example**

`{1} sent a checklist {3} to the group {2}`

**Arguments**

1.  User
2.  Group name
3.  Checklist title

#### CHAT\_MESSAGE\_TODO\_APPEND

**Template example**

`{1} added {3} tasks in the group {2}`

**Arguments**

1.  User
2.  Group name
3.  Number of added tasks

#### CHAT\_MESSAGE\_TODO\_DONE

**Template example**

`{1} toggled {3} tasks in the group {2}`

**Arguments**

1.  User name
2.  Group name
3.  Number of toggled tasks

#### CHAT\_MESSAGE\_VIDEO

**Template example**

`{1} sent a video to the group {2}`

**Arguments**

1.  Message author
2.  Chat name

#### CHAT\_MESSAGE\_VIDEOS

**Template example**

`{1} sent {3} videos to the group {2}`

**Arguments**

1.  User name
2.  Group name
3.  Number of videos that were sent

#### CHAT\_PHOTO\_EDITED

**Template example**

`{1} changed the group photo for {2}`

**Arguments**

1.  Message author
2.  Chat name

#### CHAT\_REACT\_AUDIO

**Template example**

`{1}: {3} to your voice message in {2}`

**Arguments**

1.  User name
2.  Group name
3.  Reaction

#### CHAT\_REACT\_CONTACT

**Template example**

`{1}: {3} to your contact {4} in {2}`

**Arguments**

1.  User name
2.  Group name
3.  Reaction
4.  Contact name

#### CHAT\_REACT\_DOC

**Template example**

`{1}: {3} to your file in {2}`

**Arguments**

1.  User name
2.  Group name
3.  Reaction

#### CHAT\_REACT\_GAME

**Template example**

`{1}: {3} to your game in {2}`

**Arguments**

1.  User name
2.  Group name
3.  Reaction

#### CHAT\_REACT\_GEO

**Template example**

`{1}: {3} to your map in {2}`

**Arguments**

1.  User name
2.  Group name
3.  Reaction

#### CHAT\_REACT\_GEOLIVE

**Template example**

`{1}: {3} to your live location in {2}`

**Arguments**

1.  User name
2.  Group name
3.  Reaction

#### CHAT\_REACT\_GIF

**Template example**

`{1}: {3} to your GIF in {2}`

**Arguments**

1.  User name
2.  Group name
3.  Reaction

#### CHAT\_REACT\_GIVEAWAY

**Template example**

`{1} reacted {3} in group {2} to your giveaway`

**Arguments**

1.  User name
2.  Group name
3.  Reaction

#### CHAT\_REACT\_INVOICE

**Template example**

`{1}: {3} to your invoice in {2}`

**Arguments**

1.  User name
2.  Group name
3.  Reaction

#### CHAT\_REACT\_NOTEXT

**Template example**

`{1}: {3} to your message in {2}`

**Arguments**

1.  User name
2.  Group name
3.  Reaction

#### CHAT\_REACT\_PAID\_MEDIA

**Template example**

`{1} reacted {3} in group {2} to your paid post for {4} star`

**Arguments**

1.  User name
2.  Group name
3.  Reaction
4.  [Stars](/api/stars/)

#### CHAT\_REACT\_PHOTO

**Template example**

`{1}: {3} to your photo in {2}`

**Arguments**

1.  User name
2.  Group name
3.  Reaction

#### CHAT\_REACT\_POLL

**Template example**

`{1}: {3} to your poll {4} in {2}`

**Arguments**

1.  User name
2.  Group name
3.  Reaction
4.  Poll name

#### CHAT\_REACT\_QUIZ

**Template example**

`{1}: {3} to your quiz {4} in {2}`

**Arguments**

1.  User name
2.  Group name
3.  Reaction
4.  Quiz name

#### CHAT\_REACT\_ROUND

**Template example**

`{1}: {3} to your video message in {2}`

**Arguments**

1.  User name
2.  Group name
3.  Reaction

#### CHAT\_REACT\_STICKER

**Template example**

`{1}: {3} to your {4} sticker in {2}`

**Arguments**

1.  User name
2.  Group name
3.  Reaction
4.  Sticker emoji

#### CHAT\_REACT\_TEXT

**Template example**

`{1}: {3} in {2} to your "{4}"`

**Arguments**

1.  User name
2.  Group name
3.  Reaction
4.  Message body

#### CHAT\_REACT\_TODO

**Template example**

`{1}: {3} to your checklist {4} in {2}`

**Arguments**

1.  User name
2.  Group name
3.  Reaction
4.  Checklist title

#### CHAT\_REACT\_VIDEO

**Template example**

`{1}: {3} to your video in {2}`

**Arguments**

1.  User name
2.  Group name
3.  Reaction

#### CHAT\_REQ\_JOINED

**Template example**

`{2}|{1} was accepted into the group`

**Arguments**

1.  User name
2.  Chat name

#### CHAT\_RETURNED

**Template example**

`{1} returned to the group {2}`

**Arguments**

1.  Message author
2.  Chat name

#### CHAT\_TITLE\_EDITED

**Template example**

`{1} renamed the group {2}`

**Arguments**

1.  User name
2.  Group name

#### CHAT\_VOICECHAT\_END

**Template example**

`{1} ended a voice chat in the group {2}`

**Arguments**

1.  User name
2.  Chat name

#### CHAT\_VOICECHAT\_INVITE

**Template example**

`{1} invited {3} to a voice chat in the group {2}`

**Arguments**

1.  User name
2.  Chat name
3.  Invited users

#### CHAT\_VOICECHAT\_INVITE\_YOU

**Template example**

`{1} invited you to a voice chat in the group {2}`

**Arguments**

1.  User name
2.  Chat name

#### CHAT\_VOICECHAT\_START

**Template example**

`{1} started a voice chat in the group {2}`

**Arguments**

1.  User name
2.  Chat name

#### CONF\_CALL\_MISSED

**Template example**

`You missed a call from {1}`

**Arguments**

1.  User name

#### CONTACT\_JOINED

**Template example**

`{1} joined Telegram!`

**Arguments**

1.  Contact name

#### ENCRYPTED\_MESSAGE

**Template example**

`You have a new message`

**Arguments**

This notification does not use placeholder arguments.

#### ENCRYPTION\_ACCEPT

**Template example**

`You have a new message`

**Arguments**

This notification does not use placeholder arguments.

#### ENCRYPTION\_REQUEST

**Template example**

`You have a new message`

**Arguments**

This notification does not use placeholder arguments.

#### LOCKED\_MESSAGE

**Template example**

`You have a new message`

**Arguments**

This notification does not use placeholder arguments.

#### MESSAGES

**Template example**

`{1} sent you an album`

**Arguments**

1.  User name

#### MESSAGE\_AUDIO

**Template example**

`{1} sent you a voice message`

**Arguments**

1.  Message author

#### MESSAGE\_CONTACT

**Template example**

`{1} shared a contact {2} with you`

**Arguments**

1.  User name
2.  Contact name

#### MESSAGE\_DOC

**Template example**

`{1} sent you a file`

**Arguments**

1.  User name

#### MESSAGE\_DOCS

**Template example**

`{1} sent you {2} files`

**Arguments**

1.  User name
2.  Number of documents that were sent

#### MESSAGE\_FWDS

**Template example**

`{1} forwarded you {2} messages`

**Arguments**

1.  User name
2.  Number of messages that were forwarded

#### MESSAGE\_GAME

**Template example**

`{1} invited you to play {2}`

**Arguments**

1.  User name
2.  Game name

#### MESSAGE\_GAME\_SCORE

**Template example**

`{1} scored {3} in game {2}`

**Arguments**

1.  User name
2.  Game name
3.  Score

#### MESSAGE\_GEO

**Template example**

`{1} sent you a location`

**Arguments**

1.  Message author

#### MESSAGE\_GEOLIVE

**Template example**

`{1} sent you a live location`

**Arguments**

1.  User name

#### MESSAGE\_GIF

**Template example**

`{1} sent you a GIF`

**Arguments**

1.  User name

#### MESSAGE\_GIFTCODE

**Template example**

`{1} sent you a Gift Code for {2} of Telegram Premium`

**Arguments**

1.  User name
2.  Duration of Telegram Premium subscription

#### MESSAGE\_GIVEAWAY

**Template example**

`{1} sent you a giveaway of {2}x {3}m Premium subscriptions`

**Arguments**

1.  User name
2.  Number of Telegram Premium subscriptions in the giveaway
3.  Duration in months of each Telegram Premium subscription in the giveaway

#### MESSAGE\_GIVEAWAY\_STARS

**Template example**

`{1} sent you a giveaway of {3} stars {2}`

**Arguments**

1.  User name
2.  Number of winners in the giveaway
3.  Number of Telegram Stars being given away

#### MESSAGE\_INVOICE

**Template example**

`{1} sent you an invoice for {2}`

**Arguments**

1.  User name
2.  Product

#### MESSAGE\_NOTEXT

**Template example**

`{1} sent you a message`

**Arguments**

1.  Message author

#### MESSAGE\_PAID\_MEDIA

**Template example**

`{1} sent you a paid post for {2} star`

**Arguments**

1.  Message author
2.  [Stars](/api/stars/)

#### MESSAGE\_PHOTO

**Template example**

`{1} sent you a photo`

**Arguments**

1.  Message author

#### MESSAGE\_PHOTOS

**Template example**

`{1} sent you {2} photos`

**Arguments**

1.  User name
2.  Number of photos that were sent

#### MESSAGE\_PHOTO\_SECRET

**Template example**

`{1} sent you a self-destructing photo`

**Arguments**

1.  User name

#### MESSAGE\_PLAYLIST

**Template example**

`{1} sent you {2} music files`

**Arguments**

1.  User name
2.  Number of audio files that were sent

#### MESSAGE\_POLL

**Template example**

`{1} sent you a poll {2}`

**Arguments**

1.  User name
2.  Poll name

#### MESSAGE\_QUIZ

**Template example**

`{1} sent you a quiz {2}`

**Arguments**

1.  User name
2.  Quiz name

#### MESSAGE\_RECURRING\_PAY

**Template example**

`You were charged {2} by {1}`

**Arguments**

1.  The entity to which money was sent for a recurring subscription
2.  The amount of money charged for a recurring subscription

#### MESSAGE\_ROUND

**Template example**

`{1} sent you a video message`

**Arguments**

1.  User name

#### MESSAGE\_SAME\_WALLPAPER

**Template example**

`{1} set a same wallpaper for this chat`

**Arguments**

1.  User name

#### MESSAGE\_SCREENSHOT

**Template example**

`{1} took a screenshot`

**Arguments**

1.  User name

#### MESSAGE\_STARGIFT

**Template example**

`{1} sent you a Gift worth {2} Stars`

**Arguments**

1.  User name
2.  Number of Telegram Stars

#### MESSAGE\_STARGIFT\_UNPACK\_UPGRADE

**Template example**

`{1} unpacked the Gift that you helped upgrade`

**Arguments**

1.  User name

#### MESSAGE\_STARGIFT\_UPGRADE

**Template example**

`{1} upgraded your Gift`

**Arguments**

1.  User name

#### MESSAGE\_STICKER

**Template example**

`{1} sent you a {2} sticker`

**Arguments**

1.  User name
2.  Sticker emoji

#### MESSAGE\_STORY

**Template example**

`{1} shared a story with you`

**Arguments**

1.  User name

#### MESSAGE\_STORY\_MENTION

**Template example**

`{1} mentioned you in a story`

**Arguments**

1.  User name

#### MESSAGE\_SUGGEST\_BIRTHDAY

**Template example**

`{1} suggested you your birthday`

**Arguments**

1.  User name

#### MESSAGE\_TEXT

**Template example**

`{1}: {2}`

**Arguments**

1.  Message author
2.  Message body

#### MESSAGE\_TODO

**Template example**

`{1} sent you a checklist {2}`

**Arguments**

1.  User name
2.  Checklist title

#### MESSAGE\_UNIQUE\_STARGIFT

**Template example**

`{1} transferred you a Gift!`

**Arguments**

1.  User name

#### MESSAGE\_VIDEO

**Template example**

`{1} sent you a video`

**Arguments**

1.  Message author

#### MESSAGE\_VIDEOS

**Template example**

`{1} sent you {2} videos`

**Arguments**

1.  User name
2.  Number of videos that were sent

#### MESSAGE\_VIDEO\_SECRET

**Template example**

`{1} sent you a self-destructing video`

**Arguments**

1.  User name

#### MESSAGE\_WALLPAPER

**Template example**

`{1} set a new wallpaper for this chat`

**Arguments**

1.  User name

#### OAUTH\_REQUEST

**Template example**

`Login request for {1} from {2}`

**Arguments**

1.  Domain of the URL where the user is trying to log in, the full URL is passed in the `data_url` field of the custom arguments
2.  Human-readable description of a country and a region from which the authorization is performed, based on the IP address of the user

#### PHONE\_CALL\_MISSED

**Template example**

`You missed a call from {1}`

**Arguments**

1.  User name

#### PHONE\_CALL\_REQUEST

**Template example**

`{1} is calling you!`

**Arguments**

1.  User name

#### PINNED\_AUDIO

**Template example 1**

`{1} pinned a voice message`

**Arguments**

1.  User name

**Template example 2**

`{1} pinned a voice message in the group {2}`

**Arguments**

1.  User name
2.  Group name

#### PINNED\_CONTACT

**Template example 1**

`{1} pinned a contact {2}`

**Arguments**

1.  User name
2.  Contact name

**Template example 2**

`{1} pinned a contact {3} in the group {2}`

**Arguments**

1.  User name
2.  Group name
3.  Contact name

#### PINNED\_DOC

**Template example 1**

`{1} pinned a file`

**Arguments**

1.  User name

**Template example 2**

`{1} pinned a file in the group {2}`

**Arguments**

1.  User name
2.  Group name

#### PINNED\_GAME

**Template example 1**

`{1} pinned a game`

**Arguments**

1.  User name

**Template example 2**

`{1} pinned a game in the group {2}`

**Arguments**

1.  User name
2.  Group name

#### PINNED\_GAME\_SCORE

**Template example 1**

`{1} pinned a game score`

**Arguments**

1.  User name

**Template example 2**

`{1} pinned a game score in the group {2}`

**Arguments**

1.  User name
2.  Group name

#### PINNED\_GEO

**Template example 1**

`{1} pinned a map`

**Arguments**

1.  User name

**Template example 2**

`{1} pinned a map in the group {2}`

**Arguments**

1.  User name
2.  Group name

#### PINNED\_GEOLIVE

**Template example 1**

`{1} pinned a live location`

**Arguments**

1.  User name

**Template example 2**

`{1} pinned a live location in the group {2}`

**Arguments**

1.  User name
2.  Group name

#### PINNED\_GIF

**Template example 1**

`{1} pinned a GIF`

**Arguments**

1.  User name

**Template example 2**

`{1} pinned a GIF in the group {2}`

**Arguments**

1.  User name
2.  Group name

#### PINNED\_GIVEAWAY

**Template example 1**

`{1} pinned a giveaway`

**Arguments**

1.  User name

**Template example 2**

`{1} pinned a giveaway in the group {2}`

**Arguments**

1.  User name
2.  Group name

#### PINNED\_INVOICE

**Template example 1**

`{1} pinned an invoice`

**Arguments**

1.  User name

**Template example 2**

`{1} pinned an invoice in the group {2}`

**Arguments**

1.  User name
2.  Group name

#### PINNED\_NOTEXT

**Template example 1**

`{1} pinned a message`

**Arguments**

1.  User name

**Template example 2**

`{1} pinned a message in the group {2}`

**Arguments**

1.  User name
2.  Group name

#### PINNED\_PAID\_MEDIA

**Template example 1**

`{1} pinned a paid post for {2} star`

**Arguments**

1.  User name
2.  [Stars](/api/stars/)

**Template example 2**

`{1} pinned a paid post for {3} star in the group {2}`

**Arguments**

1.  User name
2.  Group name
3.  [Stars](/api/stars/)

#### PINNED\_PHOTO

**Template example 1**

`{1} pinned a photo`

**Arguments**

1.  User name

**Template example 2**

`{1} pinned a photo in the group {2}`

**Arguments**

1.  User name
2.  Group name

#### PINNED\_POLL

**Template example 1**

`{1} pinned a poll {2}`

**Arguments**

1.  User name
2.  Poll name

**Template example 2**

`{1} pinned a poll {3} in the group {2}`

**Arguments**

1.  User name
2.  Group name
3.  Poll name

#### PINNED\_QUIZ

**Template example 1**

`{1} pinned a quiz {2}`

**Arguments**

1.  User name
2.  Quiz name

**Template example 2**

`{1} pinned a quiz {3} in the group {2}`

**Arguments**

1.  User name
2.  Group name
3.  Quiz name

#### PINNED\_ROUND

**Template example 1**

`{1} pinned a video message`

**Arguments**

1.  User name

**Template example 2**

`{1} pinned a video message in the group {2}`

**Arguments**

1.  User name
2.  Group name

#### PINNED\_STICKER

**Template example 1**

`{1} pinned a {2} sticker`

**Arguments**

1.  User name
2.  Sticker emoji

**Template example 2**

`{1} pinned a {3} sticker in the group {2}`

**Arguments**

1.  User name
2.  Group name
3.  Sticker emoji

#### PINNED\_TEXT

**Template example 1**

`{1} pinned "{2}"`

**Arguments**

1.  User name
2.  Message body

**Template example 2**

`{1} pinned "{3}" in the group {2}`

**Arguments**

1.  User name
2.  Group name
3.  Message body

#### PINNED\_TODO

**Template example 1**

`{1} pinned a checklist {2}`

**Arguments**

1.  User name
2.  Checklist title

**Template example 2**

`{1} pinned a checklist {3} in the group {2}`

**Arguments**

1.  User name
2.  Group name
3.  Checklist title

#### PINNED\_VIDEO

**Template example 1**

`{1} pinned a video`

**Arguments**

1.  User name

**Template example 2**

`{1} pinned a video in the group {2}`

**Arguments**

1.  User name
2.  Group name

#### REACT\_AUDIO

**Template example**

`{1}: {2} to your voice message`

**Arguments**

1.  User name
2.  Reaction

#### REACT\_CONTACT

**Template example**

`{1}: {2} to your contact {3}`

**Arguments**

1.  User name
2.  Reaction
3.  Contact name

#### REACT\_DOC

**Template example**

`{1}: {2} to your file`

**Arguments**

1.  User name
2.  Reaction

#### REACT\_GAME

**Template example**

`{1}: {2} to your game`

**Arguments**

1.  User name
2.  Reaction

#### REACT\_GEO

**Template example**

`{1}: {2} to your map`

**Arguments**

1.  User name
2.  Reaction

#### REACT\_GEOLIVE

**Template example**

`{1}: {2} to your live location`

**Arguments**

1.  User name
2.  Reaction

#### REACT\_GIF

**Template example**

`{1}: {2} to your GIF`

**Arguments**

1.  User name
2.  Reaction

#### REACT\_GIVEAWAY

**Template example**

`{1} reacted {2} to your giveaway`

**Arguments**

1.  User name
2.  Reaction

#### REACT\_HIDDEN

**Template example**

`New reaction to your message`

**Arguments**

This notification does not use placeholder arguments.

#### REACT\_INVOICE

**Template example**

`{1}: {2} to your invoice`

**Arguments**

1.  User name
2.  Reaction

#### REACT\_NOTEXT

**Template example**

`{1}: {2} to your message`

**Arguments**

1.  User name
2.  Reaction

#### REACT\_PHOTO

**Template example**

`{1}: {2} to your photo`

**Arguments**

1.  User name
2.  Reaction

#### REACT\_POLL

**Template example**

`{1}: {2} to your poll {3}`

**Arguments**

1.  User name
2.  Reaction
3.  Poll name

#### REACT\_QUIZ

**Template example**

`{1}: {2} to your quiz {3}`

**Arguments**

1.  User name
2.  Reaction
3.  Quiz name

#### REACT\_ROUND

**Template example**

`{1}: {2} to your video message`

**Arguments**

1.  User name
2.  Reaction

#### REACT\_STICKER

**Template example**

`{1}: {2} to your {3} sticker`

**Arguments**

1.  User name
2.  Reaction
3.  Sticker emoji

#### REACT\_STORY

**Template example**

`{1}: {2} to your story`

**Arguments**

1.  Peer where the story was posted
2.  Reaction

#### REACT\_STORY\_HIDDEN

**Template example**

`New reaction to your story`

**Arguments**

This notification does not use placeholder arguments.

#### REACT\_TEXT

**Template example**

`{1}: {2} to your "{3}"`

**Arguments**

1.  User name
2.  Reaction
3.  Message body

#### REACT\_TODO

**Template example**

`{1}: {2} to your checklist {3}`

**Arguments**

1.  User name
2.  Reaction
3.  Checklist title

#### REACT\_VIDEO

**Template example**

`{1}: {2} to your video`

**Arguments**

1.  User name
2.  Reaction
