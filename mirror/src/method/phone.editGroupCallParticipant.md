---
title: "phone.editGroupCallParticipant"
original: "https://core.telegram.org/method/phone.editGroupCallParticipant"
section: ref
description: "Edit information about a participant of a non-RTMP video chat/livestream or conference. The raise_hand field is only supported in video chats/livestreams, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.editGroupCallParticipant","url":"/method/phone.editGroupCallParticipant/"}]
layout: layout.njk
---

# phone.editGroupCallParticipant

Edit information about a participant of a non-RTMP video chat/livestream or conference. The `raise_hand` field is only supported in video chats/livestreams, see [here »](/api/group-calls/#managing-an-active-group-call) for more info.

Note: [flags](/mtproto/TL-combinators/#conditional-fields).N?[Bool](/type/Bool/) parameters can have three possible values:

-   If the [TL flag](/mtproto/TL-combinators/#conditional-fields) is not set, the previous value will not be changed.
-   If the [TL flag](/mtproto/TL-combinators/#conditional-fields) is set and contains a [boolTrue](/constructor/boolTrue/), the previous value will be overwritten to `true`.
-   If the [TL flag](/mtproto/TL-combinators/#conditional-fields) is set and contains a [boolFalse](/constructor/boolFalse/), the previous value will be overwritten to `false`.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updatesTooLong/">updatesTooLong</a>#e317af7e = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortMessage/">updateShortMessage</a>#313bc7f8 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:<a href="/type/int/">int</a> user_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortChatMessage/">updateShortChatMessage</a>#4d6deea5 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:<a href="/type/int/">int</a> from_id:<a href="/type/long/">long</a> chat_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShort/">updateShort</a>#78d4dec1 update:<a href="/type/Update/">Update</a> date:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updatesCombined/">updatesCombined</a>#725b04c3 updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; date:<a href="/type/int/">int</a> seq_start:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updates/">updates</a>#74ae4240 updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; date:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortSentMessage/">updateShortSentMessage</a>#9015e101 flags:<a href="/type/%23/">#</a> out:flags.1?true id:<a href="/type/int/">int</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> media:flags.9?<a href="/type/MessageMedia/">MessageMedia</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
---functions---
<a href="/method/phone.editGroupCallParticipant/" class="current_page_link">phone.editGroupCallParticipant</a>#a5273abf flags:<a href="/type/%23/">#</a> call:<a href="/type/InputGroupCall/">InputGroupCall</a> participant:<a href="/type/InputPeer/">InputPeer</a> muted:flags.0?<a href="/type/Bool/">Bool</a> volume:flags.1?<a href="/type/int/">int</a> raise_hand:flags.2?<a href="/type/Bool/">Bool</a> video_stopped:flags.3?<a href="/type/Bool/">Bool</a> video_paused:flags.4?<a href="/type/Bool/">Bool</a> presentation_paused:flags.5?<a href="/type/Bool/">Bool</a> = <a href="/type/Updates/">Updates</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall/">InputGroupCall</a></td><td>Non-RTMP video chat/livestream or conference</td></tr><tr><td><strong>participant</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The group call participant (can also be the user itself)</td></tr><tr><td><strong>muted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Bool/">Bool</a></td><td>Change the participant's mute state; allowing a forcibly muted participant to self-unmute does not immediately unmute them</td></tr><tr><td><strong>volume</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>New volume, between <code>1</code> and <code>20000</code>; <code>10000</code> represents 100%. Without moderation rights, changing another participant's volume affects only local playback</td></tr><tr><td><strong>raise_hand</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/Bool/">Bool</a></td><td>Raise or lower hand; only supported in video chats/livestreams</td></tr><tr><td><strong>video_stopped</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Bool/">Bool</a></td><td>Start or stop the current user's video stream</td></tr><tr><td><strong>video_paused</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/Bool/">Bool</a></td><td>Pause or resume the current user's video stream</td></tr><tr><td><strong>presentation_paused</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/Bool/">Bool</a></td><td>Pause or resume the current user's presentation stream</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>GROUPCALL_FORBIDDEN</td><td>The specified group call cannot be used in this context.</td></tr><tr><td>400</td><td>GROUPCALL_INVALID</td><td>The specified group call is invalid.</td></tr><tr><td>400</td><td>PARTICIPANT_JOIN_MISSING</td><td>Trying to enable a presentation, when the user hasn't joined the Video Chat with <a href="/method/phone.joinGroupCall/">phone.joinGroupCall</a>.</td></tr><tr><td>400</td><td>RAISE_HAND_FORBIDDEN</td><td>You cannot raise your hand.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr><tr><td>400</td><td>USER_VOLUME_INVALID</td><td>The specified user volume is invalid.</td></tr><tr><td>400</td><td>VIDEO_PAUSE_FORBIDDEN</td><td>You cannot pause the video stream.</td></tr><tr><td>400</td><td>VIDEO_STOP_FORBIDDEN</td><td>You cannot stop the video stream.</td></tr></tbody></table>

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.

#### [Bool](/type/Bool/)

Boolean type.

#### [boolTrue](/constructor/boolTrue/)

The constructor can be interpreted as a **boolean**`true` value.

#### [boolFalse](/constructor/boolFalse/)

Constructor may be interpreted as a **boolean**`false` value.

#### [phone.joinGroupCall](/method/phone.joinGroupCall/)

Join any [group call type »](/api/group-calls/#group-call-types). Conference calls additionally require the [E2E joining flow »](/api/end-to-end/group-calls/#joining-a-call).

The `params` field must contain a join payload generated by the local tgcalls group-call engine. It contains a random non-zero audio `ssrc`, ICE `ufrag` and `pwd`, DTLS `fingerprints`, and, when publishing video, `ssrc-groups`.

For example, a join payload without published video has the following shape:

```
{
  "ssrc": 123456789,
  "ufrag": "...",
  "pwd": "...",
  "fingerprints": [{
    "hash": "sha-256",
    "fingerprint": "...",
    "setup": "passive"
  }]
}
```

When joining an RTMP-mode call, generate the payload without published video source groups.
