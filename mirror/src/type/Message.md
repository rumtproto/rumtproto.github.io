---
title: "Message"
original: "https://core.telegram.org/type/Message"
section: ref
description: "Object describing a message."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Message","url":"/type/Message/"}]
layout: layout.njk
---

# Message

Object describing a message.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageEmpty/">messageEmpty</a>#90a6ca84 flags:<a href="/type/%23/">#</a> id:<a href="/type/int/">int</a> peer_id:flags.0?<a href="/type/Peer/">Peer</a> = <a href="/type/Message/" class="current_page_link">Message</a>;
<a href="/constructor/message/">message</a>#3ae56482 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:<a href="/type/%23/">#</a> offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:<a href="/type/int/">int</a> from_id:flags.8?<a href="/type/Peer/">Peer</a> from_boosts_applied:flags.29?<a href="/type/int/">int</a> from_rank:flags2.12?<a href="/type/string/">string</a> peer_id:<a href="/type/Peer/">Peer</a> saved_peer_id:flags.28?<a href="/type/Peer/">Peer</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> via_business_bot_id:flags2.0?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> date:<a href="/type/int/">int</a> message:<a href="/type/string/">string</a> media:flags.9?<a href="/type/MessageMedia/">MessageMedia</a> reply_markup:flags.6?<a href="/type/ReplyMarkup/">ReplyMarkup</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; views:flags.10?<a href="/type/int/">int</a> forwards:flags.10?<a href="/type/int/">int</a> replies:flags.23?<a href="/type/MessageReplies/">MessageReplies</a> edit_date:flags.15?<a href="/type/int/">int</a> post_author:flags.16?<a href="/type/string/">string</a> grouped_id:flags.17?<a href="/type/long/">long</a> reactions:flags.20?<a href="/type/MessageReactions/">MessageReactions</a> restriction_reason:flags.22?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/RestrictionReason/">RestrictionReason</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> quick_reply_shortcut_id:flags.30?<a href="/type/int/">int</a> effect:flags2.2?<a href="/type/long/">long</a> factcheck:flags2.3?<a href="/type/FactCheck/">FactCheck</a> report_delivery_until_date:flags2.5?<a href="/type/int/">int</a> paid_message_stars:flags2.6?<a href="/type/long/">long</a> suggested_post:flags2.7?<a href="/type/SuggestedPost/">SuggestedPost</a> schedule_repeat_period:flags2.10?<a href="/type/int/">int</a> summary_from_language:flags2.11?<a href="/type/string/">string</a> = <a href="/type/Message/" class="current_page_link">Message</a>;
<a href="/constructor/messageService/">messageService</a>#7a800e0a flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true reactions_are_possible:flags.9?true silent:flags.13?true post:flags.14?true legacy:flags.19?true id:<a href="/type/int/">int</a> from_id:flags.8?<a href="/type/Peer/">Peer</a> peer_id:<a href="/type/Peer/">Peer</a> saved_peer_id:flags.28?<a href="/type/Peer/">Peer</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> date:<a href="/type/int/">int</a> action:<a href="/type/MessageAction/">MessageAction</a> reactions:flags.20?<a href="/type/MessageReactions/">MessageReactions</a> ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Message/" class="current_page_link">Message</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messageEmpty/">messageEmpty</a></td><td>Empty constructor, non-existent message.</td></tr><tr><td><a href="/constructor/message/">message</a></td><td>A message</td></tr><tr><td><a href="/constructor/messageService/">messageService</a></td><td>Indicates a service message</td></tr></tbody></table>
