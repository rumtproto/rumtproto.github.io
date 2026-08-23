---
title: "userFull (конструктор)"
original: "https://core.telegram.org/constructor/userFull"
section: ref
kind: constructor
layout: layout.njk
---

# userFull

*Конструктор из схемы TL.*

> Extended user info
> When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

## Определение TL

```
userFull#a02bc13e flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities = UserFull;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| blocked | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether you have blocked this user |
| phone_calls_available | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Whether this user can make VoIP calls |
| phone_calls_private | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether this user's privacy settings allow you to call them |
| can_pin_message | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | Whether you can pin messages in the chat with this user, you can do this only for a chat with yourself |
| has_scheduled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[true](/constructor/true/) | Whether [scheduled messages](https://core.telegram.org/api/scheduled-messages) are available |
| video_calls_available | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[true](/constructor/true/) | Whether the user can receive video calls |
| voice_messages_forbidden | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).20?[true](/constructor/true/) | Whether this user doesn't allow sending voice messages in a private chat with them |
| translations_disabled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).23?[true](/constructor/true/) | Whether the [real-time chat translation popup](https://core.telegram.org/api/translation) should be hidden. |
| stories_pinned_available | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).26?[true](/constructor/true/) | Whether this user has some [pinned stories](https://core.telegram.org/api/stories#pinned-or-archived-stories). |
| blocked_my_stories_from | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).27?[true](/constructor/true/) | Whether we've [blocked this user, preventing them from seeing our stories »](https://core.telegram.org/api/block). |
| wallpaper_overridden | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).28?[true](/constructor/true/) | Whether the other user has chosen a custom wallpaper for us using [messages.setChatWallPaper](/method/messages.setChatWallPaper/) and the for_both flag, see [here »](https://core.telegram.org/api/wallpapers#installing-wallpapers-in-a-specific-chat-or-channel) for more info. |
| contact_require_premium | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).29?[true](/constructor/true/) | If set, we cannot write to this user: subscribe to [Telegram Premium](https://core.telegram.org/api/premium) to get permission to write to this user. To set this flag for ourselves invoke [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/), setting the settings.new_noncontact_peers_require_premium flag, see [here »](https://core.telegram.org/api/privacy#require-premium-for-new-non-contact-users) for more info. |
| read_dates_private | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).30?[true](/constructor/true/) | If set, we cannot fetch the exact read date of messages we send to this user using [messages.getOutboxReadDate](/method/messages.getOutboxReadDate/). The exact read date of messages might still be unavailable for other reasons, see [here »](/method/messages.getOutboxReadDate/) for more info. To set this flag for ourselves invoke [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/), setting the settings.hide_read_marks flag. |
| flags2 | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| sponsored_enabled | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | Whether ads were re-enabled for the current account (only accessible to the currently logged-in user), see [here »](https://core.telegram.org/api/business#re-enable-ads) for more info. |
| can_view_revenue | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[true](/constructor/true/) | If set, this user can view [ad revenue statistics »](https://core.telegram.org/api/revenue#revenue-statistics) for this bot. |
| bot_can_manage_emoji_status | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[true](/constructor/true/) | If set, this is a bot that can [change our emoji status »](https://core.telegram.org/api/emoji-status#setting-an-emoji-status-from-a-bot) |
| display_gifts_button | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[true](/constructor/true/) | If this flag is set for both us and another user (changed through [globalPrivacySettings](/constructor/globalPrivacySettings/)), a gift button should always be displayed in the text field in private chats with the other user: once clicked, the gift UI should be displayed, offering the user options to gift [Telegram Premium »](https://core.telegram.org/api/premium) subscriptions or [Telegram Gifts »](https://core.telegram.org/api/gifts). |
| noforwards_my_enabled | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).23?[true](/constructor/true/) | If set, [content protection »](https://core.telegram.org/api/content-protection#for-users) was enabled in this private chat by us. |
| noforwards_peer_enabled | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).24?[true](/constructor/true/) | If set, [content protection »](https://core.telegram.org/api/content-protection#for-users) was enabled in this private chat by this user. |
| unofficial_security_risk | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).26?[true](/constructor/true/) | If set, this user uses an unofficial Telegram client, and messages sent to them may be less secure; clients should display a warning in the user's profile. |
| id | [long](/type/long/) | User ID |
| about | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Bio of the user |
| settings | [PeerSettings](/type/PeerSettings/) | Peer settings |
| personal_photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).21?[Photo](/type/Photo/) | Personal profile photo, to be shown instead of profile_photo. |
| profile_photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[Photo](/type/Photo/) | Profile photo |
| fallback_photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).22?[Photo](/type/Photo/) | Fallback profile photo, displayed if no photo is present in profile_photo or personal_photo, due to privacy settings. |
| notify_settings | [PeerNotifySettings](/type/PeerNotifySettings/) | Notification settings |
| bot_info | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[BotInfo](/type/BotInfo/) | For bots, info about the bot (bot commands, etc) |
| pinned_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[int](/type/int/) | Message ID of the last [pinned message](https://core.telegram.org/api/pin) |
| common_chats_count | [int](/type/int/) | Chats in common with this user |
| folder_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[int](/type/int/) | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) |
| ttl_period | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[int](/type/int/) | Time To Live of all messages in this chat; once a message is this many seconds old, it must be deleted. |
| theme | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[ChatTheme](/type/ChatTheme/) | [The chat theme associated with this user »](https://core.telegram.org/api/themes#chat-themes). |
| private_forward_name | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[string](/type/string/) | Anonymized text to be shown instead of the user's name on forwarded messages |
| bot_group_admin_rights | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[ChatAdminRights](/type/ChatAdminRights/) | A [suggested set of administrator rights](https://core.telegram.org/api/rights#suggested-bot-rights) for the bot, to be shown when adding the bot as admin to a group, see [here for more info on how to handle them »](https://core.telegram.org/api/rights#suggested-bot-rights). |
| bot_broadcast_admin_rights | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).18?[ChatAdminRights](/type/ChatAdminRights/) | A [suggested set of administrator rights](https://core.telegram.org/api/rights#suggested-bot-rights) for the bot, to be shown when adding the bot as admin to a channel, see [here for more info on how to handle them »](https://core.telegram.org/api/rights#suggested-bot-rights). |
| wallpaper | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).24?[WallPaper](/type/WallPaper/) | [Wallpaper](https://core.telegram.org/api/wallpapers) to use in the private chat with the user. |
| stories | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).25?[PeerStories](/type/PeerStories/) | Active [stories »](https://core.telegram.org/api/stories) |
| business_work_hours | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[BusinessWorkHours](/type/BusinessWorkHours/) | [Telegram Business working hours »](https://core.telegram.org/api/business#opening-hours). |
| business_location | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[BusinessLocation](/type/BusinessLocation/) | [Telegram Business location »](https://core.telegram.org/api/business#location). |
| business_greeting_message | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[BusinessGreetingMessage](/type/BusinessGreetingMessage/) | [Telegram Business greeting message »](https://core.telegram.org/api/business#greeting-messages). |
| business_away_message | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[BusinessAwayMessage](/type/BusinessAwayMessage/) | [Telegram Business away message »](https://core.telegram.org/api/business#away-messages). |
| business_intro | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[BusinessIntro](/type/BusinessIntro/) | Specifies a custom [Telegram Business profile introduction »](https://core.telegram.org/api/business#business-introduction). |
| birthday | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[Birthday](/type/Birthday/) | Contains info about the user's [birthday »](https://core.telegram.org/api/profile#birthday). |
| personal_channel_id | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[long](/type/long/) | ID of the associated personal [channel »](https://core.telegram.org/api/channel), that should be shown in the [profile page](https://core.telegram.org/api/profile#personal-channel). |
| personal_channel_message | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[int](/type/int/) | ID of the latest message of the associated personal [channel »](https://core.telegram.org/api/channel), that should be previewed in the [profile page](https://core.telegram.org/api/profile#personal-channel). |
| stargifts_count | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[int](/type/int/) | Number of [gifts](https://core.telegram.org/api/gifts) the user has chosen to display on their profile |
| starref_program | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[StarRefProgram](/type/StarRefProgram/) | This bot has an active [referral program »](https://core.telegram.org/api/bots/referrals) |
| bot_verification | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[BotVerification](/type/BotVerification/) | Describes a [bot verification icon »](https://core.telegram.org/api/bots/verification). |
| send_paid_messages_stars | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[long](/type/long/) | If set and bigger than 0, this user has enabled [paid messages »](https://core.telegram.org/api/paid-messages) and we must pay the specified amount of [Stars](https://core.telegram.org/api/stars) to send messages to them, see [here »](https://core.telegram.org/api/paid-messages) for the full flow. If set and equal to 0, the user requires payment in general but we were exempted from paying [for any of the reasons specified in the docs »](https://core.telegram.org/api/paid-messages). |
| disallowed_gifts | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[DisallowedGiftsSettings](/type/DisallowedGiftsSettings/) | Disallows the reception of specific gift types. |
| stars_rating | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[StarsRating](/type/StarsRating/) | The user's [star rating](https://core.telegram.org/api/stars#star-rating). |
| stars_my_pending_rating | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).18?[StarsRating](/type/StarsRating/) | Our pending [star rating](https://core.telegram.org/api/stars#star-rating), only visible for ourselves. |
| stars_my_pending_rating_date | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).18?[int](/type/int/) | When the pending [star rating](https://core.telegram.org/api/stars#star-rating) will be applied, only visible for ourselves. |
| main_tab | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).20?[ProfileTab](/type/ProfileTab/) | The main tab for the user's profile, see [here »](https://core.telegram.org/api/profile#tabs) for more info. |
| saved_music | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).21?[Document](/type/Document/) | The first song on the music tab of the profile, see [here »](https://core.telegram.org/api/profile#music) for more info on the music profile tab. |
| note | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).22?[TextWithEntities](/type/TextWithEntities/) | A private note for this contact, only visible to us; see [here »](https://core.telegram.org/api/contacts#private-notes-for-contacts) for more info on contact notes. |
| bot_manager_id | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).25?[long](/type/long/) | If this user is a [managed bot »](https://core.telegram.org/api/bots/managed-bots), the ID of the user or manager bot that manages it. |

## Тип

[UserFull](/type/UserFull/)

## Related pages

#### [Scheduled messages](https://core.telegram.org/api/scheduled-messages)

Telegram allows scheduling messages

#### [Message translation](https://core.telegram.org/api/translation)

Telegram allows translating chat messages: Telegram Premium users may even enable real-time chat translation.

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.

#### [Blocked users](https://core.telegram.org/api/block)

Working with the blocklist.

#### [messages.setChatWallPaper](/method/messages.setChatWallPaper/)

Set a custom [wallpaper »](https://core.telegram.org/api/wallpapers) in a specific private chat with another user.

#### [Chat wallpapers](https://core.telegram.org/api/wallpapers)

Telegram apps support generating, sharing and synchronizing chat backgrounds.

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/)

Set global privacy settings

#### [Privacy settings](https://core.telegram.org/api/privacy)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.

#### [messages.getOutboxReadDate](/method/messages.getOutboxReadDate/)

Get the exact read date of one of our messages, sent to a private chat with another user.

Can be only done for private outgoing messages not older than [appConfig.pm\_read\_date\_expire\_period »](https://core.telegram.org/api/config#pm-read-date-expire-period).

If the `peer`'s [userFull](/constructor/userFull/).`read_dates_private` flag is set, we will not be able to fetch the exact read date of messages we send to them, and a `USER_PRIVACY_RESTRICTED` RPC error will be emitted.  
The exact read date of messages might still be unavailable for other reasons, see [here »](/constructor/globalPrivacySettings/) for more info.  
To set [userFull](/constructor/userFull/).`read_dates_private` for ourselves invoke [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/), setting the `settings.hide_read_marks` flag.

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [Channel and bot ad revenue](https://core.telegram.org/api/revenue)

Telegram has one of the most generous reward systems in the history of social media. Telegram channel and bot owners can now receive 50% of the revenue from ads displayed in their channels and bots. This page describes the methods used to withdraw channel/bot ad revenue, as well as view detailed revenue stats.

#### [Emoji status](https://core.telegram.org/api/emoji-status)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.

#### [globalPrivacySettings](/constructor/globalPrivacySettings/)

Global privacy settings

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Content protection](https://core.telegram.org/api/content-protection)

Users and bots who want to keep their messages private, as well as Group and Channel owners who want to keep their content members-only can enable content protection, which prevents screenshots, copying, disables message forwards and limits the ability to save media from posts.

#### [Pinned messages](https://core.telegram.org/api/pin)

Telegram allows pinning multiple messages on top of a specific chat.

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [Telegram themes](https://core.telegram.org/api/themes)

Telegram apps support generating, sharing and synchronizing app themes.

#### [Admin, banned, default rights](https://core.telegram.org/api/rights)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.

#### [User profiles](https://core.telegram.org/api/profile)

Telegram offers many customization options for your profile!

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Affiliate programs](https://core.telegram.org/api/bots/referrals)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.

#### [Third-party verification](https://core.telegram.org/api/bots/verification)

To further improve transparency on Telegram, official third-party services are able to assign extra verification icons to user accounts and chats — in order to prevent scams and reduce misinformation.

#### [Paid messages](https://core.telegram.org/api/paid-messages)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Contact list](https://core.telegram.org/api/contacts)

Working with contacts.

#### [Managed bots](https://core.telegram.org/api/bots/managed-bots)

Users can create **managed** bots (which are controlled by a specific manager bot) directly through the MTProto API, without interacting with [@BotFather](https://t.me/botfather).

#### [Peer database](https://core.telegram.org/api/peers)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.
