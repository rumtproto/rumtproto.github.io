---
title: "messages.getFutureChatCreatorAfterLeave"
original: "https://core.telegram.org/method/messages.getFutureChatCreatorAfterLeave"
section: ref
description: "Group/channel owners only: returns the ID of the user that will become the new owner of the group if we decide to leave the group, see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getFutureChatCreatorAfterLeave","url":"/method/messages.getFutureChatCreatorAfterLeave/"}]
layout: layout.njk
---

# messages.getFutureChatCreatorAfterLeave

Group/channel owners only: returns the ID of the user that will become the new owner of the group if we decide to leave the group, see [here »](/api/channel/#leaving-groups-channels) for more info on the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/userEmpty/">userEmpty</a>#d3bc4b7a id:<a href="/type/long/">long</a> = <a href="/type/User/">User</a>;
<a href="/constructor/user/">user</a>#31774388 flags:<a href="/type/%23/">#</a> self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:<a href="/type/%23/">#</a> bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true id:<a href="/type/long/">long</a> access_hash:flags.0?<a href="/type/long/">long</a> first_name:flags.1?<a href="/type/string/">string</a> last_name:flags.2?<a href="/type/string/">string</a> username:flags.3?<a href="/type/string/">string</a> phone:flags.4?<a href="/type/string/">string</a> photo:flags.5?<a href="/type/UserProfilePhoto/">UserProfilePhoto</a> status:flags.6?<a href="/type/UserStatus/">UserStatus</a> bot_info_version:flags.14?<a href="/type/int/">int</a> restriction_reason:flags.18?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/RestrictionReason/">RestrictionReason</a>&gt; bot_inline_placeholder:flags.19?<a href="/type/string/">string</a> lang_code:flags.22?<a href="/type/string/">string</a> emoji_status:flags.30?<a href="/type/EmojiStatus/">EmojiStatus</a> usernames:flags2.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Username/">Username</a>&gt; stories_max_id:flags2.5?<a href="/type/RecentStory/">RecentStory</a> color:flags2.8?<a href="/type/PeerColor/">PeerColor</a> profile_color:flags2.9?<a href="/type/PeerColor/">PeerColor</a> bot_active_users:flags2.12?<a href="/type/int/">int</a> bot_verification_icon:flags2.14?<a href="/type/long/">long</a> send_paid_messages_stars:flags2.15?<a href="/type/long/">long</a> = <a href="/type/User/">User</a>;
---functions---
<a href="/method/messages.getFutureChatCreatorAfterLeave/" class="current_page_link">messages.getFutureChatCreatorAfterLeave</a>#3b7d0ea6 peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/User/">User</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The basic group/supergroup/channel we're about to leave.</td></tr></tbody></table>

### Result

[User](/type/User/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_ID_INVALID</td><td>The specified supergroup ID is invalid.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
