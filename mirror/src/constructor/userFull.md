---
title: "userFull"
original: "https://core.telegram.org/constructor/userFull"
section: ref
description: "When updating the local peer database », all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"userFull","url":"/constructor/userFull/"}]
layout: layout.njk
---

# userFull

Extended user info

When updating the [local peer database »](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/userFull/" class="current_page_link">userFull</a>#a02bc13e flags:<a href="/type/%23/">#</a> blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:<a href="/type/%23/">#</a> sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true id:<a href="/type/long/">long</a> about:flags.1?<a href="/type/string/">string</a> settings:<a href="/type/PeerSettings/">PeerSettings</a> personal_photo:flags.21?<a href="/type/Photo/">Photo</a> profile_photo:flags.2?<a href="/type/Photo/">Photo</a> fallback_photo:flags.22?<a href="/type/Photo/">Photo</a> notify_settings:<a href="/type/PeerNotifySettings/">PeerNotifySettings</a> bot_info:flags.3?<a href="/type/BotInfo/">BotInfo</a> pinned_msg_id:flags.6?<a href="/type/int/">int</a> common_chats_count:<a href="/type/int/">int</a> folder_id:flags.11?<a href="/type/int/">int</a> ttl_period:flags.14?<a href="/type/int/">int</a> theme:flags.15?<a href="/type/ChatTheme/">ChatTheme</a> private_forward_name:flags.16?<a href="/type/string/">string</a> bot_group_admin_rights:flags.17?<a href="/type/ChatAdminRights/">ChatAdminRights</a> bot_broadcast_admin_rights:flags.18?<a href="/type/ChatAdminRights/">ChatAdminRights</a> wallpaper:flags.24?<a href="/type/WallPaper/">WallPaper</a> stories:flags.25?<a href="/type/PeerStories/">PeerStories</a> business_work_hours:flags2.0?<a href="/type/BusinessWorkHours/">BusinessWorkHours</a> business_location:flags2.1?<a href="/type/BusinessLocation/">BusinessLocation</a> business_greeting_message:flags2.2?<a href="/type/BusinessGreetingMessage/">BusinessGreetingMessage</a> business_away_message:flags2.3?<a href="/type/BusinessAwayMessage/">BusinessAwayMessage</a> business_intro:flags2.4?<a href="/type/BusinessIntro/">BusinessIntro</a> birthday:flags2.5?<a href="/type/Birthday/">Birthday</a> personal_channel_id:flags2.6?<a href="/type/long/">long</a> personal_channel_message:flags2.6?<a href="/type/int/">int</a> stargifts_count:flags2.8?<a href="/type/int/">int</a> starref_program:flags2.11?<a href="/type/StarRefProgram/">StarRefProgram</a> bot_verification:flags2.12?<a href="/type/BotVerification/">BotVerification</a> send_paid_messages_stars:flags2.14?<a href="/type/long/">long</a> disallowed_gifts:flags2.15?<a href="/type/DisallowedGiftsSettings/">DisallowedGiftsSettings</a> stars_rating:flags2.17?<a href="/type/StarsRating/">StarsRating</a> stars_my_pending_rating:flags2.18?<a href="/type/StarsRating/">StarsRating</a> stars_my_pending_rating_date:flags2.18?<a href="/type/int/">int</a> main_tab:flags2.20?<a href="/type/ProfileTab/">ProfileTab</a> saved_music:flags2.21?<a href="/type/Document/">Document</a> note:flags2.22?<a href="/type/TextWithEntities/">TextWithEntities</a> = <a href="/type/UserFull/">UserFull</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>blocked</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether you have blocked this user</td></tr><tr><td><strong>phone_calls_available</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Whether this user can make VoIP calls</td></tr><tr><td><strong>phone_calls_private</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Whether this user's privacy settings allow you to call them</td></tr><tr><td><strong>can_pin_message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>Whether you can pin messages in the chat with this user, you can do this only for a chat with yourself</td></tr><tr><td><strong>has_scheduled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.12?<a href="/constructor/true/">true</a></td><td>Whether <a href="/api/scheduled-messages/">scheduled messages</a> are available</td></tr><tr><td><strong>video_calls_available</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.13?<a href="/constructor/true/">true</a></td><td>Whether the user can receive video calls</td></tr><tr><td><strong>voice_messages_forbidden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.20?<a href="/constructor/true/">true</a></td><td>Whether this user doesn't allow sending voice messages in a private chat with them</td></tr><tr><td><strong>translations_disabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.23?<a href="/constructor/true/">true</a></td><td>Whether the <a href="/api/translation/">real-time chat translation popup</a> should be hidden.</td></tr><tr><td><strong>stories_pinned_available</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.26?<a href="/constructor/true/">true</a></td><td>Whether this user has some <a href="/api/stories/#pinned-or-archived-stories">pinned stories</a>.</td></tr><tr><td><strong>blocked_my_stories_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.27?<a href="/constructor/true/">true</a></td><td>Whether we've <a href="/api/block/">blocked this user, preventing them from seeing our stories »</a>.</td></tr><tr><td><strong>wallpaper_overridden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.28?<a href="/constructor/true/">true</a></td><td>Whether the other user has chosen a custom wallpaper for us using <a href="/method/messages.setChatWallPaper/">messages.setChatWallPaper</a> and the <code>for_both</code> flag, see <a href="/api/wallpapers/#installing-wallpapers-in-a-specific-chat-or-channel">here »</a> for more info.</td></tr><tr><td><strong>contact_require_premium</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.29?<a href="/constructor/true/">true</a></td><td>If set, we cannot write to this user: subscribe to <a href="/api/premium/">Telegram Premium</a> to get permission to write to this user.<br>To set this flag for ourselves invoke <a href="/method/account.setGlobalPrivacySettings/">account.setGlobalPrivacySettings</a>, setting the <code>settings.new_noncontact_peers_require_premium</code> flag, see <a href="/api/privacy/#require-premium-for-new-non-contact-users">here »</a> for more info.</td></tr><tr><td><strong>read_dates_private</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.30?<a href="/constructor/true/">true</a></td><td>If set, we cannot fetch the exact read date of messages we send to this user using <a href="/method/messages.getOutboxReadDate/">messages.getOutboxReadDate</a>.<br>The exact read date of messages might still be unavailable for other reasons, see <a href="/method/messages.getOutboxReadDate/">here »</a> for more info.<br>To set this flag for ourselves invoke <a href="/method/account.setGlobalPrivacySettings/">account.setGlobalPrivacySettings</a>, setting the <code>settings.hide_read_marks</code> flag.</td></tr><tr><td><strong>flags2</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>sponsored_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.7?<a href="/constructor/true/">true</a></td><td>Whether ads were re-enabled for the current account (only accessible to the currently logged-in user), see <a href="/api/business/#re-enable-ads">here »</a> for more info.</td></tr><tr><td><strong>can_view_revenue</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.9?<a href="/constructor/true/">true</a></td><td>If set, this user can view <a href="/api/revenue/#revenue-statistics">ad revenue statistics »</a> for this bot.</td></tr><tr><td><strong>bot_can_manage_emoji_status</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.10?<a href="/constructor/true/">true</a></td><td>If set, this is a bot that can <a href="/api/emoji-status/#setting-an-emoji-status-from-a-bot">change our emoji status »</a></td></tr><tr><td><strong>display_gifts_button</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.16?<a href="/constructor/true/">true</a></td><td>If this flag is set for both us and another user (changed through <a href="/constructor/globalPrivacySettings/">globalPrivacySettings</a>), a gift button should always be displayed in the text field in private chats with the other user: once clicked, the gift UI should be displayed, offering the user options to gift <a href="/api/premium/">Telegram Premium »</a> subscriptions or <a href="/api/gifts/">Telegram Gifts »</a>.</td></tr><tr><td><strong>noforwards_my_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.23?<a href="/constructor/true/">true</a></td><td>If set, <a href="/api/content-protection/#for-users">content protection »</a> was enabled in this private chat by us.</td></tr><tr><td><strong>noforwards_peer_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.24?<a href="/constructor/true/">true</a></td><td>If set, <a href="/api/content-protection/#for-users">content protection »</a> was enabled in this private chat by this user.</td></tr><tr><td><strong>unofficial_security_risk</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.26?<a href="/constructor/true/">true</a></td><td>If set, this user uses an unofficial Telegram client, and messages sent to them may be less secure; clients should display a warning in the user's profile.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User ID</td></tr><tr><td><strong>about</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Bio of the user</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/PeerSettings/">PeerSettings</a></td><td>Peer settings</td></tr><tr><td><strong>personal_photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.21?<a href="/type/Photo/">Photo</a></td><td>Personal profile photo, to be shown instead of <code>profile_photo</code>.</td></tr><tr><td><strong>profile_photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/Photo/">Photo</a></td><td>Profile photo</td></tr><tr><td><strong>fallback_photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.22?<a href="/type/Photo/">Photo</a></td><td>Fallback profile photo, displayed if no photo is present in <code>profile_photo</code> or <code>personal_photo</code>, due to privacy settings.</td></tr><tr><td><strong>notify_settings</strong></td><td style="text-align: center;"><a href="/type/PeerNotifySettings/">PeerNotifySettings</a></td><td>Notification settings</td></tr><tr><td><strong>bot_info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/BotInfo/">BotInfo</a></td><td>For bots, info about the bot (bot commands, etc)</td></tr><tr><td><strong>pinned_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/int/">int</a></td><td>Message ID of the last <a href="/api/pin/">pinned message</a></td></tr><tr><td><strong>common_chats_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Chats in common with this user</td></tr><tr><td><strong>folder_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/type/int/">int</a></td><td><a href="/api/folders/#peer-folders">Peer folder ID, for more info click here</a></td></tr><tr><td><strong>ttl_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.14?<a href="/type/int/">int</a></td><td>Time To Live of all messages in this chat; once a message is this many seconds old, it must be deleted.</td></tr><tr><td><strong>theme</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.15?<a href="/type/ChatTheme/">ChatTheme</a></td><td><a href="/api/themes/#chat-themes">The chat theme associated with this user »</a>.</td></tr><tr><td><strong>private_forward_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.16?<a href="/type/string/">string</a></td><td>Anonymized text to be shown instead of the user's name on forwarded messages</td></tr><tr><td><strong>bot_group_admin_rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.17?<a href="/type/ChatAdminRights/">ChatAdminRights</a></td><td>A <a href="/api/rights/#suggested-bot-rights">suggested set of administrator rights</a> for the bot, to be shown when adding the bot as admin to a group, see <a href="/api/rights/#suggested-bot-rights">here for more info on how to handle them »</a>.</td></tr><tr><td><strong>bot_broadcast_admin_rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.18?<a href="/type/ChatAdminRights/">ChatAdminRights</a></td><td>A <a href="/api/rights/#suggested-bot-rights">suggested set of administrator rights</a> for the bot, to be shown when adding the bot as admin to a channel, see <a href="/api/rights/#suggested-bot-rights">here for more info on how to handle them »</a>.</td></tr><tr><td><strong>wallpaper</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.24?<a href="/type/WallPaper/">WallPaper</a></td><td><a href="/api/wallpapers/">Wallpaper</a> to use in the private chat with the user.</td></tr><tr><td><strong>stories</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.25?<a href="/type/PeerStories/">PeerStories</a></td><td>Active <a href="/api/stories/">stories »</a></td></tr><tr><td><strong>business_work_hours</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.0?<a href="/type/BusinessWorkHours/">BusinessWorkHours</a></td><td><a href="/api/business/#opening-hours">Telegram Business working hours »</a>.</td></tr><tr><td><strong>business_location</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.1?<a href="/type/BusinessLocation/">BusinessLocation</a></td><td><a href="/api/business/#location">Telegram Business location »</a>.</td></tr><tr><td><strong>business_greeting_message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.2?<a href="/type/BusinessGreetingMessage/">BusinessGreetingMessage</a></td><td><a href="/api/business/#greeting-messages">Telegram Business greeting message »</a>.</td></tr><tr><td><strong>business_away_message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.3?<a href="/type/BusinessAwayMessage/">BusinessAwayMessage</a></td><td><a href="/api/business/#away-messages">Telegram Business away message »</a>.</td></tr><tr><td><strong>business_intro</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.4?<a href="/type/BusinessIntro/">BusinessIntro</a></td><td>Specifies a custom <a href="/api/business/#business-introduction">Telegram Business profile introduction »</a>.</td></tr><tr><td><strong>birthday</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.5?<a href="/type/Birthday/">Birthday</a></td><td>Contains info about the user's <a href="/api/profile/#birthday">birthday »</a>.</td></tr><tr><td><strong>personal_channel_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.6?<a href="/type/long/">long</a></td><td>ID of the associated personal <a href="/api/channel/">channel »</a>, that should be shown in the <a href="/api/profile/#personal-channel">profile page</a>.</td></tr><tr><td><strong>personal_channel_message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.6?<a href="/type/int/">int</a></td><td>ID of the latest message of the associated personal <a href="/api/channel/">channel »</a>, that should be previewed in the <a href="/api/profile/#personal-channel">profile page</a>.</td></tr><tr><td><strong>stargifts_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.8?<a href="/type/int/">int</a></td><td>Number of <a href="/api/gifts/">gifts</a> the user has chosen to display on their profile</td></tr><tr><td><strong>starref_program</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.11?<a href="/type/StarRefProgram/">StarRefProgram</a></td><td>This bot has an active <a href="/api/bots/referrals/">referral program »</a></td></tr><tr><td><strong>bot_verification</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.12?<a href="/type/BotVerification/">BotVerification</a></td><td>Describes a <a href="/api/bots/verification/">bot verification icon »</a>.</td></tr><tr><td><strong>send_paid_messages_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.14?<a href="/type/long/">long</a></td><td>If set and bigger than 0, this user has enabled <a href="/api/paid-messages/">paid messages »</a> and we <em>must</em> pay the specified amount of <a href="/api/stars/">Stars</a> to send messages to them, see <a href="/api/paid-messages/">here »</a> for the full flow.<br>If set and equal to 0, the user requires payment in general but we were exempted from paying <a href="/api/paid-messages/">for any of the reasons specified in the docs »</a>.</td></tr><tr><td><strong>disallowed_gifts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.15?<a href="/type/DisallowedGiftsSettings/">DisallowedGiftsSettings</a></td><td>Disallows the reception of specific gift types.</td></tr><tr><td><strong>stars_rating</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.17?<a href="/type/StarsRating/">StarsRating</a></td><td>The user's <a href="/api/stars/#star-rating">star rating</a>.</td></tr><tr><td><strong>stars_my_pending_rating</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.18?<a href="/type/StarsRating/">StarsRating</a></td><td>Our pending <a href="/api/stars/#star-rating">star rating</a>, only visible for ourselves.</td></tr><tr><td><strong>stars_my_pending_rating_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.18?<a href="/type/int/">int</a></td><td>When the pending <a href="/api/stars/#star-rating">star rating</a> will be applied, only visible for ourselves.</td></tr><tr><td><strong>main_tab</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.20?<a href="/type/ProfileTab/">ProfileTab</a></td><td>The main tab for the user's profile, see <a href="/api/profile/#tabs">here »</a> for more info.</td></tr><tr><td><strong>saved_music</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.21?<a href="/type/Document/">Document</a></td><td>The first song on the music tab of the profile, see <a href="/api/profile/#music">here »</a> for more info on the music profile tab.</td></tr><tr><td><strong>note</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.22?<a href="/type/TextWithEntities/">TextWithEntities</a></td><td>A private note for this contact, only visible to us; see <a href="/api/contacts/#private-notes-for-contacts">here »</a> for more info on contact notes.</td></tr><tr><td><strong>bot_manager_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.25?<a href="/type/long/">long</a></td><td>If this user is a <a href="/api/bots/managed-bots/">managed bot »</a>, the ID of the user or manager bot that manages it.</td></tr></tbody></table>

### Type

[UserFull](/type/UserFull/)

### Related pages

#### [Scheduled messages](/api/scheduled-messages/)

Telegram allows scheduling messages

#### [Message translation](/api/translation/)

Telegram allows translating chat messages: Telegram Premium users may even enable real-time chat translation.

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.

#### [Blocked users](/api/block/)

Working with the blocklist.

#### [messages.setChatWallPaper](/method/messages.setChatWallPaper/)

Set a custom [wallpaper »](/api/wallpapers/) in a specific private chat with another user.

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/)

Set global privacy settings

#### [Privacy settings](/api/privacy/)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.

#### [messages.getOutboxReadDate](/method/messages.getOutboxReadDate/)

Get the exact read date of one of our messages, sent to a private chat with another user.

Can be only done for private outgoing messages not older than [appConfig.pm\_read\_date\_expire\_period »](/api/config/#pm-read-date-expire-period).

If the `peer`'s [userFull](/constructor/userFull/).`read_dates_private` flag is set, we will not be able to fetch the exact read date of messages we send to them, and a `USER_PRIVACY_RESTRICTED` RPC error will be emitted.  
The exact read date of messages might still be unavailable for other reasons, see [here »](/constructor/globalPrivacySettings/) for more info.  
To set [userFull](/constructor/userFull/).`read_dates_private` for ourselves invoke [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/), setting the `settings.hide_read_marks` flag.

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [Channel and bot ad revenue](/api/revenue/)

Telegram has one of the most generous reward systems in the history of social media. Telegram channel and bot owners can now receive 50% of the revenue from ads displayed in their channels and bots. This page describes the methods used to withdraw channel/bot ad revenue, as well as view detailed revenue stats.

#### [Emoji status](/api/emoji-status/)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.

#### [globalPrivacySettings](/constructor/globalPrivacySettings/)

Global privacy settings

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Content protection](/api/content-protection/)

Users and bots who want to keep their messages private, as well as Group and Channel owners who want to keep their content members-only can enable content protection, which prevents screenshots, copying, disables message forwards and limits the ability to save media from posts.

#### [Pinned messages](/api/pin/)

Telegram allows pinning multiple messages on top of a specific chat.

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [Telegram themes](/api/themes/)

Telegram apps support generating, sharing and synchronizing app themes.

#### [Admin, banned, default rights](/api/rights/)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.

#### [User profiles](/api/profile/)

Telegram offers many customization options for your profile!

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Affiliate programs](/api/bots/referrals/)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.

#### [Third-party verification](/api/bots/verification/)

To further improve transparency on Telegram, official third-party services are able to assign extra verification icons to user accounts and chats — in order to prevent scams and reduce misinformation.

#### [Paid messages](/api/paid-messages/)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Contact list](/api/contacts/)

Working with contacts.

#### [Managed bots](/api/bots/managed-bots/)

Users can create **managed** bots (which are controlled by a specific manager bot) directly through the MTProto API, without interacting with [@BotFather](https://t.me/botfather).

#### [Peer database](/api/peers/)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.
