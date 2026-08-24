---
title: "messages.setChatWallPaper"
original: "https://core.telegram.org/method/messages.setChatWallPaper"
section: ref
description: "Set a custom wallpaper » in a specific private chat with another user."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.setChatWallPaper","url":"/method/messages.setChatWallPaper/"}]
layout: layout.njk
---

# messages.setChatWallPaper

Set a custom [wallpaper »](/api/wallpapers/) in a specific private chat with another user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updatesTooLong/">updatesTooLong</a>#e317af7e = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortMessage/">updateShortMessage</a>#313bc7f8 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:<a href="/type/int/">int</a> user_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortChatMessage/">updateShortChatMessage</a>#4d6deea5 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:<a href="/type/int/">int</a> from_id:<a href="/type/long/">long</a> chat_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShort/">updateShort</a>#78d4dec1 update:<a href="/type/Update/">Update</a> date:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updatesCombined/">updatesCombined</a>#725b04c3 updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; date:<a href="/type/int/">int</a> seq_start:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updates/">updates</a>#74ae4240 updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; date:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortSentMessage/">updateShortSentMessage</a>#9015e101 flags:<a href="/type/%23/">#</a> out:flags.1?true id:<a href="/type/int/">int</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> media:flags.9?<a href="/type/MessageMedia/">MessageMedia</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
---functions---
<a href="/method/messages.setChatWallPaper/" class="current_page_link">messages.setChatWallPaper</a>#8ffacae1 flags:<a href="/type/%23/">#</a> for_both:flags.3?true revert:flags.4?true peer:<a href="/type/InputPeer/">InputPeer</a> wallpaper:flags.0?<a href="/type/InputWallPaper/">InputWallPaper</a> settings:flags.2?<a href="/type/WallPaperSettings/">WallPaperSettings</a> id:flags.1?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>for_both</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Only for <a href="/api/premium/">Premium</a> users, sets the specified wallpaper for both users of the chat, without requiring confirmation from the other user.</td></tr><tr><td><strong>revert</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>If we don't like the new wallpaper the other user of the chat has chosen for us using the <code>for_both</code> flag, we can re-set our previous wallpaper just on our side using this flag.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The private chat where the wallpaper will be set</td></tr><tr><td><strong>wallpaper</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputWallPaper/">InputWallPaper</a></td><td>The <a href="/api/wallpapers/">wallpaper »</a>, obtained as described in the <a href="/api/wallpapers/#uploading-wallpapers">wallpaper documentation »</a>; must <strong>not</strong> be provided when installing a wallpaper obtained from a <a href="/constructor/messageActionSetChatWallPaper/">messageActionSetChatWallPaper</a> service message (<code>id</code> must be provided, instead).</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/WallPaperSettings/">WallPaperSettings</a></td><td>Wallpaper settings, obtained as described in the <a href="/api/wallpapers/#uploading-wallpapers">wallpaper documentation »</a> or from <a href="/constructor/messageActionSetChatWallPaper/">messageActionSetChatWallPaper</a>.<code>wallpaper</code>.<code>settings</code>.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>If the wallpaper was obtained from a <a href="/constructor/messageActionSetChatWallPaper/">messageActionSetChatWallPaper</a> service message, must contain the ID of that message.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>WALLPAPER_INVALID</td><td>The specified wallpaper is invalid.</td></tr><tr><td>400</td><td>WALLPAPER_NOT_FOUND</td><td>The specified wallpaper could not be found.</td></tr></tbody></table>

### Related pages

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.

#### [messageActionSetChatWallPaper](/constructor/messageActionSetChatWallPaper/)

The [wallpaper »](/api/wallpapers/) of the current chat was changed.
