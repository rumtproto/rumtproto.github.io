---
title: "account.updateProfile"
original: "https://core.telegram.org/method/account.updateProfile"
section: ref
description: "Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.updateProfile","url":"/method/account.updateProfile/"}]
layout: layout.njk
---

# account.updateProfile

Updates user profile.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/userEmpty/">userEmpty</a>#d3bc4b7a id:<a href="/type/long/">long</a> = <a href="/type/User/">User</a>;
<a href="/constructor/user/">user</a>#31774388 flags:<a href="/type/%23/">#</a> self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:<a href="/type/%23/">#</a> bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true id:<a href="/type/long/">long</a> access_hash:flags.0?<a href="/type/long/">long</a> first_name:flags.1?<a href="/type/string/">string</a> last_name:flags.2?<a href="/type/string/">string</a> username:flags.3?<a href="/type/string/">string</a> phone:flags.4?<a href="/type/string/">string</a> photo:flags.5?<a href="/type/UserProfilePhoto/">UserProfilePhoto</a> status:flags.6?<a href="/type/UserStatus/">UserStatus</a> bot_info_version:flags.14?<a href="/type/int/">int</a> restriction_reason:flags.18?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/RestrictionReason/">RestrictionReason</a>&gt; bot_inline_placeholder:flags.19?<a href="/type/string/">string</a> lang_code:flags.22?<a href="/type/string/">string</a> emoji_status:flags.30?<a href="/type/EmojiStatus/">EmojiStatus</a> usernames:flags2.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Username/">Username</a>&gt; stories_max_id:flags2.5?<a href="/type/RecentStory/">RecentStory</a> color:flags2.8?<a href="/type/PeerColor/">PeerColor</a> profile_color:flags2.9?<a href="/type/PeerColor/">PeerColor</a> bot_active_users:flags2.12?<a href="/type/int/">int</a> bot_verification_icon:flags2.14?<a href="/type/long/">long</a> send_paid_messages_stars:flags2.15?<a href="/type/long/">long</a> = <a href="/type/User/">User</a>;
---functions---
<a href="/method/account.updateProfile/" class="current_page_link">account.updateProfile</a>#78515775 flags:<a href="/type/%23/">#</a> first_name:flags.0?<a href="/type/string/">string</a> last_name:flags.1?<a href="/type/string/">string</a> about:flags.2?<a href="/type/string/">string</a> = <a href="/type/User/">User</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>first_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>New user first name</td></tr><tr><td><strong>last_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>New user last name</td></tr><tr><td><strong>about</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>New bio</td></tr></tbody></table>

### Result

[User](/type/User/)

### Only users can use this method

### This method can be invoked over a [business connection »](/api/bots/connected-business-bots/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>ABOUT_TOO_LONG</td><td>About string too long.</td></tr><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>The <code>connection_id</code> passed to the wrapping <a href="/api/business/">invokeWithBusinessConnection</a> call is invalid.</td></tr><tr><td>400</td><td>FIRSTNAME_INVALID</td><td>The first name is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
