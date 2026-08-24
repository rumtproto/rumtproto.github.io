---
title: "User"
original: "https://core.telegram.org/type/User"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"User","url":"/type/User/"}]
layout: layout.njk
---

# User

Object defines a user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/userEmpty/">userEmpty</a>#d3bc4b7a id:<a href="/type/long/">long</a> = <a href="/type/User/" class="current_page_link">User</a>;
<a href="/constructor/user/">user</a>#31774388 flags:<a href="/type/%23/">#</a> self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:<a href="/type/%23/">#</a> bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true id:<a href="/type/long/">long</a> access_hash:flags.0?<a href="/type/long/">long</a> first_name:flags.1?<a href="/type/string/">string</a> last_name:flags.2?<a href="/type/string/">string</a> username:flags.3?<a href="/type/string/">string</a> phone:flags.4?<a href="/type/string/">string</a> photo:flags.5?<a href="/type/UserProfilePhoto/">UserProfilePhoto</a> status:flags.6?<a href="/type/UserStatus/">UserStatus</a> bot_info_version:flags.14?<a href="/type/int/">int</a> restriction_reason:flags.18?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/RestrictionReason/">RestrictionReason</a>&gt; bot_inline_placeholder:flags.19?<a href="/type/string/">string</a> lang_code:flags.22?<a href="/type/string/">string</a> emoji_status:flags.30?<a href="/type/EmojiStatus/">EmojiStatus</a> usernames:flags2.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Username/">Username</a>&gt; stories_max_id:flags2.5?<a href="/type/RecentStory/">RecentStory</a> color:flags2.8?<a href="/type/PeerColor/">PeerColor</a> profile_color:flags2.9?<a href="/type/PeerColor/">PeerColor</a> bot_active_users:flags2.12?<a href="/type/int/">int</a> bot_verification_icon:flags2.14?<a href="/type/long/">long</a> send_paid_messages_stars:flags2.15?<a href="/type/long/">long</a> = <a href="/type/User/" class="current_page_link">User</a>;

---functions---

<a href="/method/account.updateProfile/">account.updateProfile</a>#78515775 flags:<a href="/type/%23/">#</a> first_name:flags.0?<a href="/type/string/">string</a> last_name:flags.1?<a href="/type/string/">string</a> about:flags.2?<a href="/type/string/">string</a> = <a href="/type/User/" class="current_page_link">User</a>;
<a href="/method/account.updateUsername/">account.updateUsername</a>#3e0bdd7c username:<a href="/type/string/">string</a> = <a href="/type/User/" class="current_page_link">User</a>;
<a href="/method/account.changePhone/">account.changePhone</a>#70c32edb phone_number:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> phone_code:<a href="/type/string/">string</a> = <a href="/type/User/" class="current_page_link">User</a>;

<a href="/method/contacts.importContactToken/">contacts.importContactToken</a>#13005788 token:<a href="/type/string/">string</a> = <a href="/type/User/" class="current_page_link">User</a>;

<a href="/method/channels.getMessageAuthor/">channels.getMessageAuthor</a>#ece2a0e6 channel:<a href="/type/InputChannel/">InputChannel</a> id:<a href="/type/int/">int</a> = <a href="/type/User/" class="current_page_link">User</a>;

<a href="/method/messages.getFutureChatCreatorAfterLeave/">messages.getFutureChatCreatorAfterLeave</a>#3b7d0ea6 peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/User/" class="current_page_link">User</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/userEmpty/">userEmpty</a></td><td>Empty constructor, non-existent user.</td></tr><tr><td><a href="/constructor/user/">user</a></td><td>Indicates info about a certain user.<br><br>Unless specified otherwise, when updating the <a href="/api/peers/">local peer database</a>, all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).<br><br>See <a href="https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L3106">here »</a> for an implementation of the logic to use when updating the <a href="/api/peers/">local user peer database</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.updateProfile/">account.updateProfile</a></td><td>Updates user profile.</td></tr><tr><td><a href="/method/account.updateUsername/">account.updateUsername</a></td><td>Changes username for the current user.</td></tr><tr><td><a href="/method/account.changePhone/">account.changePhone</a></td><td>Change the phone number of the current account</td></tr><tr><td><a href="/method/contacts.importContactToken/">contacts.importContactToken</a></td><td>Obtain user info from a <a href="/api/links/#temporary-profile-links">temporary profile link</a>.</td></tr><tr><td><a href="/method/messages.getFutureChatCreatorAfterLeave/">messages.getFutureChatCreatorAfterLeave</a></td><td>Group/channel owners only: returns the ID of the user that will become the new owner of the group if we decide to leave the group, see <a href="/api/channel/#leaving-groups-channels">here »</a> for more info on the full flow.</td></tr><tr><td><a href="/method/channels.getMessageAuthor/">channels.getMessageAuthor</a></td><td>Can only be invoked by non-bot admins of a <a href="/api/monoforum/">monoforum »</a>, obtains the original sender of a message sent by other monoforum admins to the monoforum, on behalf of the channel associated to the monoforum.</td></tr><tr><td><a href="/method/bots.createBot/">bots.createBot</a></td><td>Create a <a href="/api/bots/managed-bots/#creating-a-managed-bot">managed bot »</a> owned by the current user and controlled by the specified manager bot.</td></tr></tbody></table>
