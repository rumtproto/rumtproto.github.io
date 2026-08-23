---
title: "Конструкторы — справочник схемы TL"
original: "https://core.telegram.org/schema"
section: ref
layout: layout.njk
---

# Конструкторы — справочник схемы TL

Полный список: каждый конструктор схемы TL со ссылкой на страницу с определением, параметрами и описанием. Всего: **1574**.

| Название | Описание |
|---|---|
| [account.authorizationForm](/constructor/account.authorizationForm/) | [Telegram Passport](https://core.telegram.org/passport) authorization form |
| [account.authorizations](/constructor/account.authorizations/) | Logged-in sessions |
| [account.autoDownloadSettings](/constructor/account.autoDownloadSettings/) | Media autodownload settings |
| [account.autoSaveSettings](/constructor/account.autoSaveSettings/) | Contains media autosave settings |
| [account.businessChatLinks](/constructor/account.businessChatLinks/) | Contains info about [business chat deep links »](https://core.telegram.org/api/business#business-chat-links) created by the current account. |
| [account.chatThemes](/constructor/account.chatThemes/) | Available [chat themes](https://core.telegram.org/api/themes#chat-themes) |
| [account.chatThemesNotModified](/constructor/account.chatThemesNotModified/) | The available chat themes were not modified |
| [account.connectedBots](/constructor/account.connectedBots/) | Info about currently connected [business bots](https://core.telegram.org/api/bots/connected-business-bots). |
| [account.contentSettings](/constructor/account.contentSettings/) | Sensitive content settings |
| [account.emailVerified](/constructor/account.emailVerified/) | The email was verified correctly. |
| [account.emailVerifiedLogin](/constructor/account.emailVerifiedLogin/) | The email was verified correctly, and a login code was just sent to it. |
| [account.emojiStatuses](/constructor/account.emojiStatuses/) | A list of [emoji statuses](https://core.telegram.org/api/emoji-status) |
| [account.emojiStatusesNotModified](/constructor/account.emojiStatusesNotModified/) | The server-side list of [emoji statuses](https://core.telegram.org/api/emoji-status) hasn't changed |
| [account.paidMessagesRevenue](/constructor/account.paidMessagesRevenue/) | Total number of non-refunded [Telegram Stars](https://core.telegram.org/api/stars) a user has spent on sending us messages either directly or through a channel, see [here »](https://core.telegram.org/api/paid-messages) for more info on paid messages. |
| [account.passkeyRegistrationOptions](/constructor/account.passkeyRegistrationOptions/) | Passkey registration options, see [here »](https://core.telegram.org/api/passkeys#creating-a-passkey) for more info on the full flow. |
| [account.passkeys](/constructor/account.passkeys/) | List of [passkeys »](https://core.telegram.org/api/passkeys#list-passkeys) associated to the current account. |
| [account.password](/constructor/account.password/) | Configuration for two-factor authorization |
| [account.passwordInputSettings](/constructor/account.passwordInputSettings/) | Settings for setting up a new password |
| [account.passwordSettings](/constructor/account.passwordSettings/) | Private info associated to the password info (recovery email, telegram [passport](https://core.telegram.org/passport) info & so on) |
| [account.privacyRules](/constructor/account.privacyRules/) | Privacy rules |
| [account.resetPasswordFailedWait](/constructor/account.resetPasswordFailedWait/) | You recently requested a password reset that was canceled, please wait until the specified date before requesting another reset. |
| [account.resetPasswordOk](/constructor/account.resetPasswordOk/) | The 2FA password was reset successfully. |
| [account.resetPasswordRequestedWait](/constructor/account.resetPasswordRequestedWait/) | You successfully requested a password reset, please wait until the specified date before finalizing the reset. |
| [account.resolvedBusinessChatLinks](/constructor/account.resolvedBusinessChatLinks/) | Contains info about a single resolved [business chat deep link »](https://core.telegram.org/api/business#business-chat-links). |
| [account.savedMusicIds](/constructor/account.savedMusicIds/) | List of IDs of songs ([document](/constructor/document/).`id`s) currently pinned on our profile, see [here »](https://core.telegram.org/api/profile#music) for more info. |
| [account.savedMusicIdsNotModified](/constructor/account.savedMusicIdsNotModified/) | The list of IDs of songs ([document](/constructor/document/).`id`s) currently pinned on our profile hasn't changed. |
| [account.savedRingtone](/constructor/account.savedRingtone/) | The notification sound was already in MP3 format and was saved without any modification |
| [account.savedRingtoneConverted](/constructor/account.savedRingtoneConverted/) | The notification sound was not in MP3 format and was successfully converted and saved, use the returned [Document](/type/Document/) to refer to the notification sound from now on |
| [account.savedRingtones](/constructor/account.savedRingtones/) | A list of saved notification sounds |
| [account.savedRingtonesNotModified](/constructor/account.savedRingtonesNotModified/) | The notification sound list hasn't changed. |
| [account.sentEmailCode](/constructor/account.sentEmailCode/) | The sent email code |
| [account.takeout](/constructor/account.takeout/) | Takeout info |
| [account.themes](/constructor/account.themes/) | Installed themes |
| [account.themesNotModified](/constructor/account.themesNotModified/) | No new themes were installed |
| [account.tmpPassword](/constructor/account.tmpPassword/) | Temporary payment password |
| [account.wallPapers](/constructor/account.wallPapers/) | Installed [wallpapers](https://core.telegram.org/api/wallpapers) |
| [account.wallPapersNotModified](/constructor/account.wallPapersNotModified/) | No new [wallpapers](https://core.telegram.org/api/wallpapers) were found |
| [account.webAuthorizations](/constructor/account.webAuthorizations/) | Web authorizations |
| [accountDaysTTL](/constructor/accountDaysTTL/) | Time to live in days of the current account |
| [attachMenuBot](/constructor/attachMenuBot/) | Represents a [bot mini app that can be launched from the attachment/side menu »](https://core.telegram.org/api/bots/attach) At least one of the `show_in_attach_menu` or the `show_in_side_menu` flags will always be set. |
| [attachMenuBotIcon](/constructor/attachMenuBotIcon/) | Represents an attachment menu icon for [bot mini apps »](https://core.telegram.org/api/bots/attach) |
| [attachMenuBotIconColor](/constructor/attachMenuBotIconColor/) | Represents an attachment menu icon color for [bot mini apps »](https://core.telegram.org/api/bots/attach) |
| [attachMenuBots](/constructor/attachMenuBots/) | Represents a list of [bot mini apps that can be launched from the attachment menu »](https://core.telegram.org/api/bots/attach) |
| [attachMenuBotsBot](/constructor/attachMenuBotsBot/) | Represents a [bot mini app that can be launched from the attachment menu »](https://core.telegram.org/api/bots/attach) |
| [attachMenuBotsNotModified](/constructor/attachMenuBotsNotModified/) | The list of bot mini apps hasn't changed |
| [attachMenuPeerTypeBotPM](/constructor/attachMenuPeerTypeBotPM/) | The bot attachment menu entry is available in private chats with other bots (excluding the bot that offers the current attachment menu) |
| [attachMenuPeerTypeBroadcast](/constructor/attachMenuPeerTypeBroadcast/) | The bot attachment menu entry is available in channels |
| [attachMenuPeerTypeChat](/constructor/attachMenuPeerTypeChat/) | The bot attachment menu entry is available in [groups and supergroups](https://core.telegram.org/api/channel) |
| [attachMenuPeerTypePM](/constructor/attachMenuPeerTypePM/) | The bot attachment menu entry is available in private chats with other users (not bots) |
| [attachMenuPeerTypeSameBotPM](/constructor/attachMenuPeerTypeSameBotPM/) | The bot attachment menu entry is available in the chat with the bot that offers it |
| [auctionBidLevel](/constructor/auctionBidLevel/) | Describes a bid in an [auction](https://core.telegram.org/api/auctions). |
| [auth.authorization](/constructor/auth.authorization/) | Contains user authorization info. |
| [auth.authorizationSignUpRequired](/constructor/auth.authorizationSignUpRequired/) | An account with this phone number doesn't exist on telegram: the user has to [enter basic information and sign up](/api/auth/) |
| [auth.codeTypeCall](/constructor/auth.codeTypeCall/) | The next time, the authentication code is to be delivered via an outgoing phone call. |
| [auth.codeTypeFlashCall](/constructor/auth.codeTypeFlashCall/) | The next time, the authentication code will be delivered via an immediately canceled incoming call. |
| [auth.codeTypeFragmentSms](/constructor/auth.codeTypeFragmentSms/) | The next time, the authentication code will be delivered via [fragment.com](https://fragment.com) |
| [auth.codeTypeMissedCall](/constructor/auth.codeTypeMissedCall/) | The next time, the authentication code will be delivered via an immediately canceled incoming call, handled manually by the user. |
| [auth.codeTypeSms](/constructor/auth.codeTypeSms/) | The next time, the authentication code will be delivered via an immediately canceled incoming call. |
| [auth.exportedAuthorization](/constructor/auth.exportedAuthorization/) | Data for copying of authorization between data centers. |
| [auth.loggedOut](/constructor/auth.loggedOut/) | [Future auth token »](https://core.telegram.org/api/auth/#future-auth-tokens) to be used on subsequent authorizations |
| [auth.loginToken](/constructor/auth.loginToken/) | Login token (for [QR code login](https://core.telegram.org/api/qr-login)) |
| [auth.loginTokenMigrateTo](/constructor/auth.loginTokenMigrateTo/) | Repeat the query to the specified DC |
| [auth.loginTokenSuccess](/constructor/auth.loginTokenSuccess/) | Login via token (QR code) succeeded! |
| [auth.passkeyLoginOptions](/constructor/auth.passkeyLoginOptions/) | Passkey login options, see [here »](https://core.telegram.org/api/passkeys#logging-in-with-a-passkey) for more info on the full flow. |
| [auth.passwordRecovery](/constructor/auth.passwordRecovery/) | Recovery info of a [2FA password](/api/srp/), only for accounts with a [recovery email configured](https://core.telegram.org/api/srp/#email-verification). |
| [auth.sentCode](/constructor/auth.sentCode/) | Contains info about a sent verification code. |
| [auth.sentCodePaymentRequired](/constructor/auth.sentCodePaymentRequired/) | Official apps may receive this constructor, indicating that due to the high cost of SMS verification codes for the user's country/provider, the user must purchase a [Telegram Premium](https://core.telegram.org/api/premium) subscription in order to proceed with the login/signup, see [here »](https://core.telegram.org/api/auth/#paid-auth) for more info. |
| [auth.sentCodeSuccess](/constructor/auth.sentCodeSuccess/) | The user successfully authorized using [future auth tokens](https://core.telegram.org/api/auth/#future-auth-tokens) |
| [auth.sentCodeTypeApp](/constructor/auth.sentCodeTypeApp/) | The code was sent through the telegram app |
| [auth.sentCodeTypeCall](/constructor/auth.sentCodeTypeCall/) | The code will be sent via a phone call: a synthesized voice will tell the user which verification code to input. |
| [auth.sentCodeTypeEmailCode](/constructor/auth.sentCodeTypeEmailCode/) | The code was sent via the [previously configured login email »](https://core.telegram.org/api/auth/#email-verification) |
| [auth.sentCodeTypeFirebaseSms](/constructor/auth.sentCodeTypeFirebaseSms/) | An authentication code should be delivered via SMS after Firebase attestation, as described in the [auth documentation »](/api/auth/). |
| [auth.sentCodeTypeFlashCall](/constructor/auth.sentCodeTypeFlashCall/) | The code will be sent via a flash phone call, that will be closed immediately. The phone code will then be the phone number itself, just make sure that the phone number matches the specified pattern. |
| [auth.sentCodeTypeFragmentSms](/constructor/auth.sentCodeTypeFragmentSms/) | The code was delivered via [fragment.com](https://fragment.com). |
| [auth.sentCodeTypeMissedCall](/constructor/auth.sentCodeTypeMissedCall/) | The code will be sent via a flash phone call, that will be closed immediately. The last digits of the phone number that calls are the code that must be entered manually by the user. |
| [auth.sentCodeTypeSetUpEmailRequired](/constructor/auth.sentCodeTypeSetUpEmailRequired/) | The user should add and verify an email address in order to login as described [here »](https://core.telegram.org/api/auth/#email-verification). |
| [auth.sentCodeTypeSms](/constructor/auth.sentCodeTypeSms/) | The code was sent via SMS |
| [auth.sentCodeTypeSmsPhrase](/constructor/auth.sentCodeTypeSmsPhrase/) | The code was sent via SMS as a secret phrase starting with the word specified in `beginning` |
| [auth.sentCodeTypeSmsWord](/constructor/auth.sentCodeTypeSmsWord/) | The code was sent via SMS as a secret word, starting with the letter specified in `beginning` |
| [authorization](/constructor/authorization/) | Logged-in session |
| [autoDownloadSettings](/constructor/autoDownloadSettings/) | Autodownload settings |
| [autoSaveException](/constructor/autoSaveException/) | Peer-specific media autosave settings |
| [autoSaveSettings](/constructor/autoSaveSettings/) | Media autosave settings |
| [availableEffect](/constructor/availableEffect/) | Represents a [message effect »](https://core.telegram.org/api/effects). All `long` IDs except for `id` are [document](/constructor/document/).`id`s from the containing [messages.availableEffects](/constructor/messages.availableEffects/) constructor. See [here »](https://core.telegram.org/api/effects) for more info on how to use following fields. |
| [availableReaction](/constructor/availableReaction/) | Animations associated with a message reaction |
| [bankCardOpenUrl](/constructor/bankCardOpenUrl/) | Credit card info URL provided by the bank |
| [baseThemeArctic](/constructor/baseThemeArctic/) | Arctic theme |
| [baseThemeClassic](/constructor/baseThemeClassic/) | Classic theme |
| [baseThemeDay](/constructor/baseThemeDay/) | Day theme |
| [baseThemeNight](/constructor/baseThemeNight/) | Night theme |
| [baseThemeTinted](/constructor/baseThemeTinted/) | Tinted theme |
| [birthday](/constructor/birthday/) | [Birthday](https://core.telegram.org/api/profile#birthday) information for a user. Also used to invite users to gift [Telegram Premium subscriptions »](https://core.telegram.org/api/premium#gifting-telegram-premium) to other users with birthdays within a +1/-1 day time range, related to the current day. |
| [boolFalse](/constructor/boolFalse/) | Constructor may be interpreted as a **boolean**`false` value. |
| [boolTrue](/constructor/boolTrue/) | The constructor can be interpreted as a **boolean**`true` value. |
| [boost](/constructor/boost/) | Info about one or more [boosts](https://core.telegram.org/api/boost) applied by a specific user. |
| [botApp](/constructor/botApp/) | Contains information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps). |
| [botAppNotModified](/constructor/botAppNotModified/) | Bot app info hasn't changed. |
| [botAppSettings](/constructor/botAppSettings/) | [Mini app »](https://core.telegram.org/api/bots/webapps) settings |
| [botBusinessConnection](/constructor/botBusinessConnection/) | Contains info about a [bot business connection](https://core.telegram.org/api/bots/connected-business-bots). |
| [botCommand](/constructor/botCommand/) | Describes a bot command that can be used in a chat |
| [botCommandScopeChatAdmins](/constructor/botCommandScopeChatAdmins/) | The specified bot commands will be valid only for chat administrators, in all [groups and supergroups](https://core.telegram.org/api/channel). |
| [botCommandScopeChats](/constructor/botCommandScopeChats/) | The specified bot commands will be valid in all [groups and supergroups](https://core.telegram.org/api/channel). |
| [botCommandScopeDefault](/constructor/botCommandScopeDefault/) | The commands will be valid in all dialogs |
| [botCommandScopePeer](/constructor/botCommandScopePeer/) | The specified bot commands will be valid only in a specific dialog. |
| [botCommandScopePeerAdmins](/constructor/botCommandScopePeerAdmins/) | The specified bot commands will be valid for all admins of the specified [group or supergroup](https://core.telegram.org/api/channel). |
| [botCommandScopePeerUser](/constructor/botCommandScopePeerUser/) | The specified bot commands will be valid only for a specific user in the specified [group or supergroup](https://core.telegram.org/api/channel). |
| [botCommandScopeUsers](/constructor/botCommandScopeUsers/) | The specified bot commands will only be valid in all private chats with users. |
| [botInfo](/constructor/botInfo/) | Info about bots (available bot commands, etc) |
| [botInlineMediaResult](/constructor/botInlineMediaResult/) | Media result |
| [botInlineMessageMediaAuto](/constructor/botInlineMessageMediaAuto/) | Send whatever media is attached to the [botInlineMediaResult](/constructor/botInlineMediaResult/) |
| [botInlineMessageMediaContact](/constructor/botInlineMessageMediaContact/) | Send a contact |
| [botInlineMessageMediaGeo](/constructor/botInlineMessageMediaGeo/) | Send a geolocation |
| [botInlineMessageMediaInvoice](/constructor/botInlineMessageMediaInvoice/) | Send an invoice |
| [botInlineMessageMediaVenue](/constructor/botInlineMessageMediaVenue/) | Send a venue |
| [botInlineMessageMediaWebPage](/constructor/botInlineMessageMediaWebPage/) | Specifies options that must be used to generate the link preview for the message, or even a standalone link preview without an attached message. |
| [botInlineMessageText](/constructor/botInlineMessageText/) | Send a simple text message |
| [botInlineResult](/constructor/botInlineResult/) | Generic result |
| [botMenuButton](/constructor/botMenuButton/) | [Bot menu button](https://core.telegram.org/api/bots/menu) that opens a [web app](https://core.telegram.org/api/bots/webapps) when clicked. |
| [botMenuButtonCommands](/constructor/botMenuButtonCommands/) | [Bot menu button](https://core.telegram.org/api/bots/menu) that opens the bot command list when clicked. |
| [botMenuButtonDefault](/constructor/botMenuButtonDefault/) | Placeholder [bot menu button](https://core.telegram.org/api/bots/menu) never returned to users: see [the docs for more info](https://core.telegram.org/api/bots/menu). |
| [botPreviewMedia](/constructor/botPreviewMedia/) | Represents a [Main Mini App preview media, see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info. |
| [bots.botInfo](/constructor/bots.botInfo/) | Localized information about a bot. |
| [bots.popularAppBots](/constructor/bots.popularAppBots/) | Popular [Main Mini Apps](https://core.telegram.org/api/bots/webapps#main-mini-apps), to be used in the [apps tab of global search »](https://core.telegram.org/api/search#apps-tab). |
| [bots.previewInfo](/constructor/bots.previewInfo/) | Contains info about [Main Mini App previews, see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info. |
| [botVerification](/constructor/botVerification/) | Describes a [bot verification icon »](https://core.telegram.org/api/bots/verification). |
| [botVerifierSettings](/constructor/botVerifierSettings/) | Info about the current [verifier bot »](https://core.telegram.org/api/bots/verification). |
| [businessAwayMessage](/constructor/businessAwayMessage/) | Describes a [Telegram Business away message](https://core.telegram.org/api/business#away-messages), automatically sent to users writing to us when we're offline, during closing hours, while we're on vacation, or in some other custom time period when we cannot immediately answer to the user. |
| [businessAwayMessageScheduleAlways](/constructor/businessAwayMessageScheduleAlways/) | Always send [Telegram Business away messages](https://core.telegram.org/api/business#away-messages) to users writing to us in private. |
| [businessAwayMessageScheduleCustom](/constructor/businessAwayMessageScheduleCustom/) | Send [Telegram Business away messages](https://core.telegram.org/api/business#away-messages) to users writing to us in private in the specified time span. |
| [businessAwayMessageScheduleOutsideWorkHours](/constructor/businessAwayMessageScheduleOutsideWorkHours/) | Send [Telegram Business away messages](https://core.telegram.org/api/business#away-messages) to users writing to us in private outside of the configured [Telegram Business working hours](https://core.telegram.org/api/business#opening-hours). |
| [businessBotRecipients](/constructor/businessBotRecipients/) | Specifies the private chats that a [connected business bot »](https://core.telegram.org/api/bots/connected-business-bots) may receive messages and interact with. |
| [businessBotRights](/constructor/businessBotRights/) | [Business bot rights](https://core.telegram.org/api/bots/connected-business-bots). |
| [businessChatLink](/constructor/businessChatLink/) | Contains info about a [business chat deep link »](https://core.telegram.org/api/business#business-chat-links) created by the current account. |
| [businessGreetingMessage](/constructor/businessGreetingMessage/) | Describes a [Telegram Business greeting](https://core.telegram.org/api/business#greeting-messages), automatically sent to new users writing to us in private for the first time, or after a certain inactivity period. |
| [businessIntro](/constructor/businessIntro/) | [Telegram Business introduction »](https://core.telegram.org/api/business#business-introduction). |
| [businessLocation](/constructor/businessLocation/) | Represents the location of a [Telegram Business »](https://core.telegram.org/api/business#location). |
| [businessRecipients](/constructor/businessRecipients/) | Specifies the chats that **can** receive Telegram Business [away »](https://core.telegram.org/api/business#away-messages) and [greeting »](https://core.telegram.org/api/business#greeting-messages) messages. If `exclude_selected` is set, specifies all chats that **cannot** receive Telegram Business [away »](https://core.telegram.org/api/business#away-messages) and [greeting »](https://core.telegram.org/api/business#greeting-messages) messages. |
| [businessWeeklyOpen](/constructor/businessWeeklyOpen/) | A time interval, indicating the opening hours of a business. Note that opening hours specified by the user must be appropriately validated and transformed before uploading them to the server, as specified [here »](https://core.telegram.org/api/business#opening-hours). |
| [businessWorkHours](/constructor/businessWorkHours/) | Specifies a set of [Telegram Business opening hours](https://core.telegram.org/api/business#opening-hours). |
| [cdnConfig](/constructor/cdnConfig/) | Configuration for [CDN](https://core.telegram.org/cdn) file downloads. |
| [cdnPublicKey](/constructor/cdnPublicKey/) | Public key to use **only** during handshakes to [CDN](https://core.telegram.org/cdn) DCs. |
| [channel](/constructor/channel/) | Channel/supergroup info When updating the [local peer database](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor). The only exception to the above rule is when the `min` flag is set, in which case **only** the following fields must be applied over any locally stored version: -   `title` -   `megagroup` -   `color` -   `photo` -   `username` -   `usernames` -   `has_geo` -   `noforwards` -   `emoji_status` -   `has_link` -   `slow_mode_enabled` -   `scam` -   `fake` -   `gigagroup` -   `forum` -   `level` -   `restricted` -   `restriction_reason` -   `join_to_send` -   `join_request` -   `is_verified` -   `default_banned_rights` -   `signature_profiles` -   `autotranslation` -   `broadcast_messages_allowed` -   `monoforum` -   `forum_tabs` -   `linked_monoforum_id` -   `send_paid_messages_stars` -   `bot_verification_icon` See [here »](https://github.com/tdlib/td/blob/077f71addad9db5d1a5692cc1255438793e75636/td/telegram/ChatManager.cpp#L9176) for an implementation of the logic to use when updating the [local channel peer database](https://core.telegram.org/api/peers). |
| [channelAdminLogEvent](/constructor/channelAdminLogEvent/) | Admin log event |
| [channelAdminLogEventActionChangeAbout](/constructor/channelAdminLogEventActionChangeAbout/) | The description was changed |
| [channelAdminLogEventActionChangeAvailableReactions](/constructor/channelAdminLogEventActionChangeAvailableReactions/) | The set of allowed [message reactions »](https://core.telegram.org/api/reactions) for this channel has changed |
| [channelAdminLogEventActionChangeEmojiStatus](/constructor/channelAdminLogEventActionChangeEmojiStatus/) | The [emoji status](https://core.telegram.org/api/emoji-status) was changed |
| [channelAdminLogEventActionChangeEmojiStickerSet](/constructor/channelAdminLogEventActionChangeEmojiStickerSet/) | The supergroup's [custom emoji stickerset](https://core.telegram.org/api/boost#setting-a-custom-emoji-stickerset-for-supergroups) was changed. |
| [channelAdminLogEventActionChangeHistoryTTL](/constructor/channelAdminLogEventActionChangeHistoryTTL/) | The Time-To-Live of messages in this chat was changed |
| [channelAdminLogEventActionChangeLinkedChat](/constructor/channelAdminLogEventActionChangeLinkedChat/) | The linked chat was changed |
| [channelAdminLogEventActionChangeLocation](/constructor/channelAdminLogEventActionChangeLocation/) | The geogroup location was changed |
| [channelAdminLogEventActionChangePeerColor](/constructor/channelAdminLogEventActionChangePeerColor/) | The [message accent color](https://core.telegram.org/api/colors) was changed |
| [channelAdminLogEventActionChangePhoto](/constructor/channelAdminLogEventActionChangePhoto/) | The channel/supergroup's picture was changed |
| [channelAdminLogEventActionChangeProfilePeerColor](/constructor/channelAdminLogEventActionChangeProfilePeerColor/) | The [profile accent color](https://core.telegram.org/api/colors) was changed |
| [channelAdminLogEventActionChangeStickerSet](/constructor/channelAdminLogEventActionChangeStickerSet/) | The supergroup's stickerset was changed |
| [channelAdminLogEventActionChangeTitle](/constructor/channelAdminLogEventActionChangeTitle/) | Channel/supergroup title was changed |
| [channelAdminLogEventActionChangeUsername](/constructor/channelAdminLogEventActionChangeUsername/) | Channel/supergroup username was changed |
| [channelAdminLogEventActionChangeUsernames](/constructor/channelAdminLogEventActionChangeUsernames/) | The list of usernames associated with the channel was changed |
| [channelAdminLogEventActionChangeWallpaper](/constructor/channelAdminLogEventActionChangeWallpaper/) | The [wallpaper](https://core.telegram.org/api/wallpapers) was changed |
| [channelAdminLogEventActionCreateTopic](/constructor/channelAdminLogEventActionCreateTopic/) | A [forum topic](https://core.telegram.org/api/forum#forum-topics) was created |
| [channelAdminLogEventActionDefaultBannedRights](/constructor/channelAdminLogEventActionDefaultBannedRights/) | The default banned rights were modified |
| [channelAdminLogEventActionDeleteMessage](/constructor/channelAdminLogEventActionDeleteMessage/) | A message was deleted |
| [channelAdminLogEventActionDeleteTopic](/constructor/channelAdminLogEventActionDeleteTopic/) | A [forum topic](https://core.telegram.org/api/forum#forum-topics) was deleted |
| [channelAdminLogEventActionDiscardGroupCall](/constructor/channelAdminLogEventActionDiscardGroupCall/) | A group call was terminated |
| [channelAdminLogEventActionEditMessage](/constructor/channelAdminLogEventActionEditMessage/) | A message was edited |
| [channelAdminLogEventActionEditTopic](/constructor/channelAdminLogEventActionEditTopic/) | A [forum topic](https://core.telegram.org/api/forum#forum-topics) was edited |
| [channelAdminLogEventActionExportedInviteDelete](/constructor/channelAdminLogEventActionExportedInviteDelete/) | A chat invite was deleted |
| [channelAdminLogEventActionExportedInviteEdit](/constructor/channelAdminLogEventActionExportedInviteEdit/) | A chat invite was edited |
| [channelAdminLogEventActionExportedInviteRevoke](/constructor/channelAdminLogEventActionExportedInviteRevoke/) | A specific invite link was revoked |
| [channelAdminLogEventActionParticipantEditRank](/constructor/channelAdminLogEventActionParticipantEditRank/) | A participant's [tag »](https://core.telegram.org/api/rank) was changed. |
| [channelAdminLogEventActionParticipantInvite](/constructor/channelAdminLogEventActionParticipantInvite/) | A user was invited to the group |
| [channelAdminLogEventActionParticipantJoin](/constructor/channelAdminLogEventActionParticipantJoin/) | A user has joined the group (in the case of big groups, info of the user that has joined isn't shown) |
| [channelAdminLogEventActionParticipantJoinByInvite](/constructor/channelAdminLogEventActionParticipantJoinByInvite/) | A user joined the [supergroup/channel](https://core.telegram.org/api/channel) using a specific invite link |
| [channelAdminLogEventActionParticipantJoinByRequest](/constructor/channelAdminLogEventActionParticipantJoinByRequest/) | A new member was accepted to the chat by an admin |
| [channelAdminLogEventActionParticipantLeave](/constructor/channelAdminLogEventActionParticipantLeave/) | A user left the channel/supergroup (in the case of big groups, info of the user that has joined isn't shown) |
| [channelAdminLogEventActionParticipantMute](/constructor/channelAdminLogEventActionParticipantMute/) | A group call participant was muted |
| [channelAdminLogEventActionParticipantSubExtend](/constructor/channelAdminLogEventActionParticipantSubExtend/) | A paid subscriber has extended their [Telegram Star subscription »](https://core.telegram.org/api/stars#star-subscriptions). |
| [channelAdminLogEventActionParticipantToggleAdmin](/constructor/channelAdminLogEventActionParticipantToggleAdmin/) | The admin [rights](https://core.telegram.org/api/rights) of a user were changed |
| [channelAdminLogEventActionParticipantToggleBan](/constructor/channelAdminLogEventActionParticipantToggleBan/) | The banned [rights](https://core.telegram.org/api/rights) of a user were changed |
| [channelAdminLogEventActionParticipantUnmute](/constructor/channelAdminLogEventActionParticipantUnmute/) | A group call participant was unmuted |
| [channelAdminLogEventActionParticipantVolume](/constructor/channelAdminLogEventActionParticipantVolume/) | channelAdminLogEvent.user\_id has set the volume of participant.peer to participant.volume |
| [channelAdminLogEventActionPinTopic](/constructor/channelAdminLogEventActionPinTopic/) | A [forum topic](https://core.telegram.org/api/forum#forum-topics) was pinned or unpinned |
| [channelAdminLogEventActionSendMessage](/constructor/channelAdminLogEventActionSendMessage/) | A message was posted in a channel |
| [channelAdminLogEventActionStartGroupCall](/constructor/channelAdminLogEventActionStartGroupCall/) | A group call was started |
| [channelAdminLogEventActionStopPoll](/constructor/channelAdminLogEventActionStopPoll/) | A poll was stopped |
| [channelAdminLogEventActionToggleAntiSpam](/constructor/channelAdminLogEventActionToggleAntiSpam/) | [Native antispam](https://core.telegram.org/api/antispam) functionality was enabled or disabled. |
| [channelAdminLogEventActionToggleAutotranslation](/constructor/channelAdminLogEventActionToggleAutotranslation/) | [Channel autotranslation was toggled »](https://core.telegram.org/api/translation#autotranslation-for-channels). |
| [channelAdminLogEventActionToggleForum](/constructor/channelAdminLogEventActionToggleForum/) | [Forum](https://core.telegram.org/api/forum) functionality was enabled or disabled. |
| [channelAdminLogEventActionToggleGroupCallSetting](/constructor/channelAdminLogEventActionToggleGroupCallSetting/) | Group call settings were changed |
| [channelAdminLogEventActionToggleInvites](/constructor/channelAdminLogEventActionToggleInvites/) | Invites were enabled/disabled |
| [channelAdminLogEventActionToggleNoForwards](/constructor/channelAdminLogEventActionToggleNoForwards/) | Forwards were enabled or disabled |
| [channelAdminLogEventActionTogglePreHistoryHidden](/constructor/channelAdminLogEventActionTogglePreHistoryHidden/) | The hidden prehistory setting was [changed](/method/channels.togglePreHistoryHidden/) |
| [channelAdminLogEventActionToggleSignatureProfiles](/constructor/channelAdminLogEventActionToggleSignatureProfiles/) | Channel signature profiles were enabled/disabled. |
| [channelAdminLogEventActionToggleSignatures](/constructor/channelAdminLogEventActionToggleSignatures/) | Channel signatures were enabled/disabled |
| [channelAdminLogEventActionToggleSlowMode](/constructor/channelAdminLogEventActionToggleSlowMode/) | [Slow mode setting for supergroups was changed](/method/channels.toggleSlowMode/) |
| [channelAdminLogEventActionUpdatePinned](/constructor/channelAdminLogEventActionUpdatePinned/) | A message was pinned |
| [channelAdminLogEventsFilter](/constructor/channelAdminLogEventsFilter/) | Filter only certain admin log events |
| [channelForbidden](/constructor/channelForbidden/) | Indicates a channel/supergroup we can't access because we were banned, or for some other reason. |
| [channelFull](/constructor/channelFull/) | Full info about a [channel](https://core.telegram.org/api/channel#channels), [supergroup](https://core.telegram.org/api/channel#supergroups) or [gigagroup](https://core.telegram.org/api/channel#gigagroups). When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor). |
| [channelLocation](/constructor/channelLocation/) | Geographical location of supergroup (geogroups) |
| [channelLocationEmpty](/constructor/channelLocationEmpty/) | No location (normal supergroup) |
| [channelMessagesFilter](/constructor/channelMessagesFilter/) | Filter for getting only certain types of channel messages. This filter cannot be used to fetch messages older than the channel message box size. |
| [channelMessagesFilterEmpty](/constructor/channelMessagesFilterEmpty/) | No filter |
| [channelParticipant](/constructor/channelParticipant/) | Channel/supergroup participant |
| [channelParticipantAdmin](/constructor/channelParticipantAdmin/) | Admin |
| [channelParticipantBanned](/constructor/channelParticipantBanned/) | Banned/kicked user |
| [channelParticipantCreator](/constructor/channelParticipantCreator/) | Channel/supergroup creator |
| [channelParticipantLeft](/constructor/channelParticipantLeft/) | A participant that left the channel/supergroup |
| [channelParticipantsAdmins](/constructor/channelParticipantsAdmins/) | Fetch only admin participants |
| [channelParticipantsBanned](/constructor/channelParticipantsBanned/) | Fetch only banned participants |
| [channelParticipantsBots](/constructor/channelParticipantsBots/) | Fetch only bot participants |
| [channelParticipantsContacts](/constructor/channelParticipantsContacts/) | Fetch only participants that are also contacts |
| [channelParticipantSelf](/constructor/channelParticipantSelf/) | Myself |
| [channelParticipantsKicked](/constructor/channelParticipantsKicked/) | Fetch only kicked participants |
| [channelParticipantsMentions](/constructor/channelParticipantsMentions/) | This filter is used when looking for supergroup members to mention.   This filter will automatically remove anonymous admins, and return even non-participant users that replied to a specific [thread](https://core.telegram.org/api/threads) through the [comment section](https://core.telegram.org/api/threads#channel-comments) of a channel. |
| [channelParticipantsRecent](/constructor/channelParticipantsRecent/) | Fetch only recent participants |
| [channelParticipantsSearch](/constructor/channelParticipantsSearch/) | Query participants by name |
| [channels.adminLogResults](/constructor/channels.adminLogResults/) | Admin log events |
| [channels.channelParticipant](/constructor/channels.channelParticipant/) | Represents a channel participant |
| [channels.channelParticipants](/constructor/channels.channelParticipants/) | Represents multiple channel participants |
| [channels.channelParticipantsNotModified](/constructor/channels.channelParticipantsNotModified/) | No new participant info could be found |
| [channels.sendAsPeers](/constructor/channels.sendAsPeers/) | A list of peers that can be used to send messages in a specific group |
| [channels.sponsoredMessageReportResultAdsHidden](/constructor/channels.sponsoredMessageReportResultAdsHidden/) | Sponsored messages were hidden for the user in all chats. |
| [channels.sponsoredMessageReportResultChooseOption](/constructor/channels.sponsoredMessageReportResultChooseOption/) | The user must choose a report option from the localized options available in `options`, and after selection, [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/) must be invoked again, passing the option's `option` field to the `option` param of the method. |
| [channels.sponsoredMessageReportResultReported](/constructor/channels.sponsoredMessageReportResultReported/) | The sponsored message was reported successfully. |
| [chat](/constructor/chat/) | Info about a group. When updating the [local peer database](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor). See [here »](https://github.com/tdlib/td/blob/077f71addad9db5d1a5692cc1255438793e75636/td/telegram/ChatManager.cpp#L5679) for an implementation of the logic to use when updating the [local chat peer database](https://core.telegram.org/api/peers). |
| [chatAdminRights](/constructor/chatAdminRights/) | Represents the rights of an admin in a [channel/supergroup](https://core.telegram.org/api/channel). |
| [chatAdminWithInvites](/constructor/chatAdminWithInvites/) | Info about chat invites generated by admins. |
| [chatBannedRights](/constructor/chatBannedRights/) | Represents the rights of a normal user in a [supergroup/channel/chat](https://core.telegram.org/api/channel). In this case, the flags are inverted: if set, a flag **does not allow** a user to do X. |
| [chatEmpty](/constructor/chatEmpty/) | Empty constructor, group doesn't exist |
| [chatForbidden](/constructor/chatForbidden/) | A group to which the user has no access. E.g., because the user was kicked from the group. |
| [chatFull](/constructor/chatFull/) | Full info about a [basic group](https://core.telegram.org/api/channel#basic-groups). When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor). |
| [chatInvite](/constructor/chatInvite/) | Chat invite info |
| [chatInviteAlready](/constructor/chatInviteAlready/) | The user has already joined this chat |
| [chatInviteExported](/constructor/chatInviteExported/) | Exported chat invite |
| [chatInviteImporter](/constructor/chatInviteImporter/) | When and which user joined the chat using a chat invite |
| [chatInvitePeek](/constructor/chatInvitePeek/) | A chat invitation that also allows peeking into the group to read messages without joining it. |
| [chatInvitePublicJoinRequests](/constructor/chatInvitePublicJoinRequests/) | Used in updates and in the channel log to indicate when a user is requesting to join or has joined a [discussion group](https://core.telegram.org/api/discussion#requiring-users-to-join-the-group) |
| [chatlists.chatlistInvite](/constructor/chatlists.chatlistInvite/) | Info about a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |
| [chatlists.chatlistInviteAlready](/constructor/chatlists.chatlistInviteAlready/) | Updated info about a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links) we already imported. |
| [chatlists.chatlistUpdates](/constructor/chatlists.chatlistUpdates/) | Updated information about a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |
| [chatlists.exportedChatlistInvite](/constructor/chatlists.exportedChatlistInvite/) | Info about an exported [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |
| [chatlists.exportedInvites](/constructor/chatlists.exportedInvites/) | Info about multiple [chat folder deep links »](https://core.telegram.org/api/links#chat-folder-links). |
| [chatOnlines](/constructor/chatOnlines/) | Number of online users in a chat |
| [chatParticipant](/constructor/chatParticipant/) | [Basic group](https://core.telegram.org/api/channel#basic-groups) member (not usable by supergroups). |
| [chatParticipantAdmin](/constructor/chatParticipantAdmin/) | [Basic group](https://core.telegram.org/api/channel#basic-groups) admin (not usable by supergroups). |
| [chatParticipantCreator](/constructor/chatParticipantCreator/) | Represents the creator of the [basic group »](https://core.telegram.org/api/channel#basic-groups) |
| [chatParticipants](/constructor/chatParticipants/) | Contains the full list of members of [basic groups »](https://core.telegram.org/api/channel#basic-groups); is **NOT** usable for supergroups/channels. |
| [chatParticipantsForbidden](/constructor/chatParticipantsForbidden/) | The full list of members of [basic groups »](https://core.telegram.org/api/channel#basic-groups) is not available to you, because you were banned. |
| [chatPhoto](/constructor/chatPhoto/) | Group profile photo. |
| [chatPhotoEmpty](/constructor/chatPhotoEmpty/) | Group photo is not set. |
| [chatReactionsAll](/constructor/chatReactionsAll/) | All reactions or all non-custom reactions are allowed |
| [chatReactionsNone](/constructor/chatReactionsNone/) | No reactions are allowed |
| [chatReactionsSome](/constructor/chatReactionsSome/) | Some reactions are allowed |
| [chatTheme](/constructor/chatTheme/) | A chat theme |
| [chatThemeUniqueGift](/constructor/chatThemeUniqueGift/) | A chat theme based on a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| [codeSettings](/constructor/codeSettings/) | Settings used by telegram servers for sending the confirm code. Example implementations: [telegram for android](https://github.com/DrKLO/Telegram/blob/master/TMessagesProj/src/main/java/org/telegram/ui/LoginActivity.java), [tdlib](https://github.com/tdlib/td/tree/master/td/telegram/SendCodeHelper.cpp). |
| [config](/constructor/config/) | Current configuration |
| [connectedBot](/constructor/connectedBot/) | Contains info about a [connected business bot »](https://core.telegram.org/api/bots/connected-business-bots). |
| [connectedBotStarRef](/constructor/connectedBotStarRef/) | Info about an [active affiliate program we have with a Mini App](https://core.telegram.org/api/bots/referrals#becoming-an-affiliate) |
| [contact](/constructor/contact/) | A contact of the current user that is registered in the system. |
| [contactBirthday](/constructor/contactBirthday/) | Birthday information of a contact. |
| [contacts.blocked](/constructor/contacts.blocked/) | Full list of blocked users. |
| [contacts.blockedSlice](/constructor/contacts.blockedSlice/) | Incomplete list of blocked users. |
| [contacts.contactBirthdays](/constructor/contacts.contactBirthdays/) | Birthday information of our contacts. |
| [contacts.contacts](/constructor/contacts.contacts/) | The current user's contact list and info on users. |
| [contacts.contactsNotModified](/constructor/contacts.contactsNotModified/) | Contact list on the server is the same as the list on the client. |
| [contacts.found](/constructor/contacts.found/) | Users found by name substring and auxiliary data. |
| [contacts.importedContacts](/constructor/contacts.importedContacts/) | Info on successfully imported contacts. |
| [contacts.resolvedPeer](/constructor/contacts.resolvedPeer/) | Resolved peer |
| [contacts.sponsoredPeers](/constructor/contacts.sponsoredPeers/) | Sponsored peers. |
| [contacts.sponsoredPeersEmpty](/constructor/contacts.sponsoredPeersEmpty/) | There are no sponsored peers for this query. |
| [contacts.topPeers](/constructor/contacts.topPeers/) | Top peers |
| [contacts.topPeersDisabled](/constructor/contacts.topPeersDisabled/) | Top peers disabled |
| [contacts.topPeersNotModified](/constructor/contacts.topPeersNotModified/) | Top peer info hasn't changed |
| [contactStatus](/constructor/contactStatus/) | Contact status: online / offline. |
| [dataJSON](/constructor/dataJSON/) | Represents a json-encoded object |
| [dcOption](/constructor/dcOption/) | Data center |
| [decryptedMessage](/constructor/decryptedMessage/) | Contents of an encrypted message. |
| [decryptedMessageActionAbortKey](/constructor/decryptedMessageActionAbortKey/) | Abort rekeying |
| [decryptedMessageActionAcceptKey](/constructor/decryptedMessageActionAcceptKey/) | Accept new key |
| [decryptedMessageActionCommitKey](/constructor/decryptedMessageActionCommitKey/) | Commit new key, see [rekeying process](https://core.telegram.org/api/end-to-end/pfs) |
| [decryptedMessageActionDeleteMessages](/constructor/decryptedMessageActionDeleteMessages/) | Deleted messages. |
| [decryptedMessageActionFlushHistory](/constructor/decryptedMessageActionFlushHistory/) | The entire message history has been deleted. |
| [decryptedMessageActionNoop](/constructor/decryptedMessageActionNoop/) | NOOP action |
| [decryptedMessageActionNotifyLayer](/constructor/decryptedMessageActionNotifyLayer/) | A notification stating the API layer that is used by the client. You should use your current layer and take notice of the layer used on the other side of a conversation when sending messages. |
| [decryptedMessageActionReadMessages](/constructor/decryptedMessageActionReadMessages/) | Messages marked as read. |
| [decryptedMessageActionRequestKey](/constructor/decryptedMessageActionRequestKey/) | Request rekeying, see [rekeying process](https://core.telegram.org/api/end-to-end/pfs) |
| [decryptedMessageActionResend](/constructor/decryptedMessageActionResend/) | Request for the other party in a Secret Chat to automatically resend a contiguous range of previously sent messages, as explained in [Sequence number is Secret Chats](https://core.telegram.org/api/end-to-end/seq_no). |
| [decryptedMessageActionScreenshotMessages](/constructor/decryptedMessageActionScreenshotMessages/) | A screenshot was taken. |
| [decryptedMessageActionSetMessageTTL](/constructor/decryptedMessageActionSetMessageTTL/) | Setting of a message lifetime after reading. Upon receiving such message the client shall start deleting of all messages of an encrypted chat **ttl\_seconds** seconds after the messages were read by user. |
| [decryptedMessageActionTyping](/constructor/decryptedMessageActionTyping/) | User is preparing a message: typing, recording, uploading, etc. |
| [decryptedMessageLayer](/constructor/decryptedMessageLayer/) | Sets the layer number for the contents of an encrypted message. |
| [decryptedMessageMediaAudio](/constructor/decryptedMessageMediaAudio/) | Audio file attached to a secret chat message. |
| [decryptedMessageMediaContact](/constructor/decryptedMessageMediaContact/) | Contact attached to an encrypted message. |
| [decryptedMessageMediaDocument](/constructor/decryptedMessageMediaDocument/) | Document attached to a message in a secret chat. |
| [decryptedMessageMediaEmpty](/constructor/decryptedMessageMediaEmpty/) | Empty constructor, no media content. |
| [decryptedMessageMediaExternalDocument](/constructor/decryptedMessageMediaExternalDocument/) | Non-e2e documented forwarded from non-secret chat |
| [decryptedMessageMediaGeoPoint](/constructor/decryptedMessageMediaGeoPoint/) | GeoPoint attached to an encrypted message. |
| [decryptedMessageMediaPhoto](/constructor/decryptedMessageMediaPhoto/) | Photo attached to an encrypted message. |
| [decryptedMessageMediaVenue](/constructor/decryptedMessageMediaVenue/) | Venue |
| [decryptedMessageMediaVideo](/constructor/decryptedMessageMediaVideo/) | Video attached to an encrypted message. |
| [decryptedMessageMediaWebPage](/constructor/decryptedMessageMediaWebPage/) | Webpage preview |
| [decryptedMessageService](/constructor/decryptedMessageService/) | Contents of an encrypted service message. |
| [defaultHistoryTTL](/constructor/defaultHistoryTTL/) | Contains info about the default value of the Time-To-Live setting, applied to all new chats. |
| [dialog](/constructor/dialog/) | Chat |
| [dialogFilter](/constructor/dialogFilter/) | Dialog filter AKA [folder](https://core.telegram.org/api/folders) |
| [dialogFilterChatlist](/constructor/dialogFilterChatlist/) | A folder imported using a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |
| [dialogFilterDefault](/constructor/dialogFilterDefault/) | Used only when reordering folders to indicate the default (all chats) folder. |
| [dialogFilterSuggested](/constructor/dialogFilterSuggested/) | Suggested [folders](https://core.telegram.org/api/folders) |
| [dialogFolder](/constructor/dialogFolder/) | Dialog in folder |
| [dialogPeer](/constructor/dialogPeer/) | Peer |
| [dialogPeerFolder](/constructor/dialogPeerFolder/) | [Peer folder](https://core.telegram.org/api/folders#peer-folders) |
| [disallowedGiftsSettings](/constructor/disallowedGiftsSettings/) | Disallow the reception of specific [gift](https://core.telegram.org/api/gifts) types. |
| [document](/constructor/document/) | Document |
| [documentAttributeAnimated](/constructor/documentAttributeAnimated/) | Defines an animated GIF #### [End-to-end schema](/schema/end-to-end/) ``` ===23=== documentAttributeAnimated#11b58939 = DocumentAttribute; ``` #### API schema |
| [documentAttributeAudio](/constructor/documentAttributeAudio/) | Represents an audio file #### [End-to-end schema](/schema/end-to-end/) ``` ===23=== documentAttributeAudio#051448e5 duration:int = DocumentAttribute; ===45=== documentAttributeAudio#ded218e0 duration:int title:string performer:string = DocumentAttribute; ===46=== documentAttributeAudio#9852f9c6 flags:# duration:int title:flags.0?string performer:flags.1?string waveform:flags.2?bytes = DocumentAttribute; ``` #### API schema |
| [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/) | Info about a custom emoji |
| [documentAttributeFilename](/constructor/documentAttributeFilename/) | A simple document with a file name #### [End-to-end schema](/schema/end-to-end/) ``` ===23=== documentAttributeFilename#15590068 file_name:string = DocumentAttribute; ``` #### API schema |
| [documentAttributeHasStickers](/constructor/documentAttributeHasStickers/) | Whether the current document has stickers attached |
| [documentAttributeImageSize](/constructor/documentAttributeImageSize/) | Defines the width and height of an image uploaded as document #### [End-to-end schema](/schema/end-to-end/) ``` ===23=== documentAttributeImageSize#6c37c15c w:int h:int = DocumentAttribute; ``` #### API schema |
| [documentAttributeSticker](/constructor/documentAttributeSticker/) | Defines a sticker #### [End-to-end schema](/schema/end-to-end/) ``` ===23=== documentAttributeSticker#fb0a5727 = DocumentAttribute; ===45=== documentAttributeSticker#3a556302 alt:string stickerset:InputStickerSet = DocumentAttribute; ``` #### API schema |
| [documentAttributeVideo](/constructor/documentAttributeVideo/) | Defines a video #### [End-to-end schema](/schema/end-to-end/) ``` ===23=== documentAttributeVideo#5910cccb duration:int w:int h:int = DocumentAttribute; ===66=== documentAttributeVideo#0ef02ce6 flags:# duration:int w:int h:int = DocumentAttribute; ``` #### API schema |
| [documentEmpty](/constructor/documentEmpty/) | Empty constructor, document doesn't exist. |
| [draftMessage](/constructor/draftMessage/) | Represents a message [draft](https://core.telegram.org/api/drafts). |
| [draftMessageEmpty](/constructor/draftMessageEmpty/) | Empty draft |
| [emailVerificationApple](/constructor/emailVerificationApple/) | Apple ID email verification token |
| [emailVerificationCode](/constructor/emailVerificationCode/) | Email verification code |
| [emailVerificationGoogle](/constructor/emailVerificationGoogle/) | Google ID email verification token |
| [emailVerifyPurposeLoginChange](/constructor/emailVerifyPurposeLoginChange/) | Email verification purpose: change login email |
| [emailVerifyPurposeLoginSetup](/constructor/emailVerifyPurposeLoginSetup/) | Email verification purpose: setup login email |
| [emailVerifyPurposePassport](/constructor/emailVerifyPurposePassport/) | Verify an email for use in [telegram passport](https://core.telegram.org/api/passport) |
| [emojiGroup](/constructor/emojiGroup/) | Represents an [emoji category](https://core.telegram.org/api/emoji-categories). |
| [emojiGroupGreeting](/constructor/emojiGroupGreeting/) | Represents an [emoji category](https://core.telegram.org/api/emoji-categories), that should be moved to the top of the list when choosing a sticker for a [business introduction](https://core.telegram.org/api/business#business-introduction) |
| [emojiGroupPremium](/constructor/emojiGroupPremium/) | An [emoji category](https://core.telegram.org/api/emoji-categories), used to select all [Premium](https://core.telegram.org/api/premium)\-only stickers (i.e. those with a [Premium effect »](https://core.telegram.org/api/stickers#premium-animated-sticker-effects))/[Premium](https://core.telegram.org/api/premium)\-only [custom emojis](https://core.telegram.org/api/custom-emoji) (i.e. those where the [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/).`free` flag is **not** set) |
| [emojiKeyword](/constructor/emojiKeyword/) | Emoji keyword |
| [emojiKeywordDeleted](/constructor/emojiKeywordDeleted/) | Deleted emoji keyword |
| [emojiKeywordsDifference](/constructor/emojiKeywordsDifference/) | Changes to emoji keywords |
| [emojiLanguage](/constructor/emojiLanguage/) | Emoji language |
| [emojiList](/constructor/emojiList/) | Represents a list of [custom emojis](https://core.telegram.org/api/custom-emoji). |
| [emojiListNotModified](/constructor/emojiListNotModified/) | The list of [custom emojis](https://core.telegram.org/api/custom-emoji) hasn't changed. |
| [emojiStatus](/constructor/emojiStatus/) | An [emoji status](https://core.telegram.org/api/emoji-status) |
| [emojiStatusCollectible](/constructor/emojiStatusCollectible/) | An owned or [hosted collectible gift »](https://core.telegram.org/api/gifts#hosted-collectible-gifts) as emoji status. **Cannot** be passed to [account.updateEmojiStatus](/method/account.updateEmojiStatus/), must be converted to an [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/) first before passing it to that method. |
| [emojiStatusEmpty](/constructor/emojiStatusEmpty/) | No emoji status is set |
| [emojiURL](/constructor/emojiURL/) | An HTTP URL which can be used to automatically log in into translation platform and suggest new emoji replacements. The URL will be valid for 30 seconds after generation |
| [encryptedChat](/constructor/encryptedChat/) | Encrypted chat |
| [encryptedChatDiscarded](/constructor/encryptedChatDiscarded/) | Discarded or deleted chat. |
| [encryptedChatEmpty](/constructor/encryptedChatEmpty/) | Empty constructor. |
| [encryptedChatRequested](/constructor/encryptedChatRequested/) | Request to create an encrypted chat. |
| [encryptedChatWaiting](/constructor/encryptedChatWaiting/) | Chat waiting for approval of second participant. |
| [encryptedFile](/constructor/encryptedFile/) | Encrypted file. |
| [encryptedFileEmpty](/constructor/encryptedFileEmpty/) | Empty constructor, non-existing file. |
| [encryptedMessage](/constructor/encryptedMessage/) | Encrypted message. |
| [encryptedMessageService](/constructor/encryptedMessageService/) | Encrypted service message |
| [error](/constructor/error/) | Error. |
| [exportedChatlistInvite](/constructor/exportedChatlistInvite/) | Exported [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |
| [exportedContactToken](/constructor/exportedContactToken/) | Describes a [temporary profile link](https://core.telegram.org/api/links#temporary-profile-links). |
| [exportedMessageLink](/constructor/exportedMessageLink/) | Link to a message in a supergroup/channel |
| [exportedStoryLink](/constructor/exportedStoryLink/) | Represents a [story deep link](https://core.telegram.org/api/stories#story-links). |
| [factCheck](/constructor/factCheck/) | Represents a [fact-check »](https://core.telegram.org/api/factcheck) created by an independent fact-checker. |
| [FileHash](/constructor/fileHash/) | SHA256 Hash of an uploaded file, to be checked for validity after download |
| [fileLocation](/constructor/fileLocation/) | File location. |
| [fileLocationUnavailable](/constructor/fileLocationUnavailable/) | File is currently unavailable. |
| [folder](/constructor/folder/) | Folder |
| [folderPeer](/constructor/folderPeer/) | Peer in a folder |
| [forumTopic](/constructor/forumTopic/) | Represents a [forum topic](https://core.telegram.org/api/forum#forum-topics). |
| [forumTopicDeleted](/constructor/forumTopicDeleted/) | Represents a deleted [forum topic](https://core.telegram.org/api/forum#forum-topics). This constructor is returned in place of a [forumTopic](/constructor/forumTopic/) by [messages.getForumTopicsByID](/method/messages.getForumTopicsByID/) (and the other topic-fetching methods) when a topic no longer exists, allowing clients and bots to confirm that a topic was deleted. |
| [foundStory](/constructor/foundStory/) | A story found using [global story search »](https://core.telegram.org/api/stories#searching-stories). |
| [fragment.collectibleInfo](/constructor/fragment.collectibleInfo/) | Info about a [fragment collectible](https://core.telegram.org/api/fragment). |
| [game](/constructor/game/) | Indicates an already sent game |
| [geoPoint](/constructor/geoPoint/) | GeoPoint. |
| [geoPointAddress](/constructor/geoPointAddress/) | Address optionally associated to a [geoPoint](/constructor/geoPoint/). |
| [geoPointEmpty](/constructor/geoPointEmpty/) | Empty constructor. |
| [globalPrivacySettings](/constructor/globalPrivacySettings/) | Global privacy settings |
| [groupCall](/constructor/groupCall/) | Describes a [group call](https://core.telegram.org/api/group-calls). If the `min` flag is set, this is a partial (`min`) constructor: only a subset of its fields contains up-to-date information, and it must be merged into a previously cached non-`min` constructor as described below. If no full (non-`min`) constructor for this call was cached previously, the `min` constructor must be discarded. When `min` is set, the following mandatory fields may be used: `id`, `access_hash`, `participants_count` and `version`. In addition, **only** the following conditional fields may be used if present, subject to the usual `version` check: -   `conference` -   `rtmp_stream` -   `listeners_hidden` -   `title` -   `messages_enabled` -   `record_start_date` and `record_video_active` -   `schedule_date` -   `send_paid_messages_stars` When `min` is set, the following fields **must be ignored**, keeping the values from the previously cached non-`min` constructor: -   `join_muted` -   `can_change_join_muted` -   `schedule_start_subscribed` -   `can_start_video` -   `creator` -   `can_change_messages_enabled` -   `unmuted_video_count` -   `unmuted_video_limit` -   `stream_dc_id` -   `invite_link` -   `default_send_as` The `join_date_asc` flag is set only when the call is created and never changes afterwards, so it too is not applied from a `min` constructor. |
| [groupCallDiscarded](/constructor/groupCallDiscarded/) | Describes an ended [group call](https://core.telegram.org/api/group-calls). |
| [groupCallDonor](/constructor/groupCallDonor/) | Describes a live story donor in the [donation leaderboard »](https://core.telegram.org/api/group-calls#paid-live-story-donations). |
| [groupCallMessage](/constructor/groupCallMessage/) | Represents an [in-call message »](https://core.telegram.org/api/group-calls#in-call-messages), emoji reaction, paid live story comment or standalone paid live story donation. #### [End-to-end schema](/schema/end-to-end/) ``` ===216=== groupCallMessage#907ce88e random_id:long message:TextWithEntities = GroupCallMessage; ``` #### API schema |
| [groupCallParticipant](/constructor/groupCallParticipant/) | Describes a group call participant and their current state, see [applying group call updates »](https://core.telegram.org/api/group-calls#applying-group-call-updates). |
| [groupCallParticipantVideo](/constructor/groupCallParticipantVideo/) | Info about a video stream |
| [groupCallParticipantVideoSourceGroup](/constructor/groupCallParticipantVideoSourceGroup/) | Describes a group of video synchronization source identifiers |
| [groupCallStreamChannel](/constructor/groupCallStreamChannel/) | Describes an available RTMP stream channel and its current playback timestamp, see [playing an RTMP livestream »](https://core.telegram.org/api/group-calls#rtmp-mode). |
| [help.appConfig](/constructor/help.appConfig/) | Contains various [client configuration parameters](https://core.telegram.org/api/config#client-configuration) |
| [help.appConfigNotModified](/constructor/help.appConfigNotModified/) | The client configuration parameters haven't changed |
| [help.appUpdate](/constructor/help.appUpdate/) | An update is available for the application. |
| [help.countriesList](/constructor/help.countriesList/) | Name, ISO code, localized name and phone codes/patterns of all available countries |
| [help.countriesListNotModified](/constructor/help.countriesListNotModified/) | The country list has not changed |
| [help.country](/constructor/help.country/) | Name, ISO code, localized name and phone codes/patterns of a specific country |
| [help.countryCode](/constructor/help.countryCode/) | Country code and phone number pattern of a specific country |
| [help.deepLinkInfo](/constructor/help.deepLinkInfo/) | Deep link info, see [the here for more details](https://core.telegram.org/api/links#unsupported-links) |
| [help.deepLinkInfoEmpty](/constructor/help.deepLinkInfoEmpty/) | Deep link info empty |
| [help.inviteText](/constructor/help.inviteText/) | Text of a text message with an invitation to install Telegram. |
| [help.noAppUpdate](/constructor/help.noAppUpdate/) | No updates are available for the application. |
| [help.passportConfig](/constructor/help.passportConfig/) | Telegram [passport](https://core.telegram.org/passport) configuration |
| [help.passportConfigNotModified](/constructor/help.passportConfigNotModified/) | Password configuration not modified |
| [help.peerColorOption](/constructor/help.peerColorOption/) | Contains info about a [color palette »](https://core.telegram.org/api/colors). |
| [help.peerColorProfileSet](/constructor/help.peerColorProfileSet/) | Represents a [color palette that can be used in profile pages »](https://core.telegram.org/api/colors). |
| [help.peerColors](/constructor/help.peerColors/) | Contains info about multiple [color palettes »](https://core.telegram.org/api/colors). |
| [help.peerColorSet](/constructor/help.peerColorSet/) | Represents a [color palette that can be used in message accents »](https://core.telegram.org/api/colors). |
| [help.peerColorsNotModified](/constructor/help.peerColorsNotModified/) | The list of color palettes has not changed. |
| [help.premiumPromo](/constructor/help.premiumPromo/) | Telegram Premium promotion information Note that the `video_sections`+`videos` fields are a list of videos, and the corresponding premium feature identifiers.   They're equivalent to a section => video dictionary, with keys from `video_section` and values from `videos`.   The keys in `video_sections` correspond to a specific feature identifier, and the associated promotional video should be shown when the associated feature row is clicked. |
| [help.promoData](/constructor/help.promoData/) | A set of useful suggestions and a PSA/MTProxy sponsored peer, see [here »](https://core.telegram.org/api/config#suggestions) for more info. |
| [help.promoDataEmpty](/constructor/help.promoDataEmpty/) | No PSA/MTProxy info is available |
| [help.recentMeUrls](/constructor/help.recentMeUrls/) | Recent t.me URLs |
| [help.support](/constructor/help.support/) | Info on support user. |
| [help.supportName](/constructor/help.supportName/) | Localized name for telegram support |
| [help.termsOfService](/constructor/help.termsOfService/) | Info about the latest telegram Terms Of Service |
| [help.termsOfServiceUpdate](/constructor/help.termsOfServiceUpdate/) | Info about an update of telegram's terms of service. If the terms of service are declined, then the [account.deleteAccount](/method/account.deleteAccount/) method should be called with the reason "Decline ToS update" |
| [help.termsOfServiceUpdateEmpty](/constructor/help.termsOfServiceUpdateEmpty/) | No changes were made to telegram's terms of service |
| [help.timezonesList](/constructor/help.timezonesList/) | Timezone information that may be used elsewhere in the API, such as to set [Telegram Business opening hours »](https://core.telegram.org/api/business#opening-hours). |
| [help.timezonesListNotModified](/constructor/help.timezonesListNotModified/) | The timezone list has not changed. |
| [help.userInfo](/constructor/help.userInfo/) | Internal use |
| [help.userInfoEmpty](/constructor/help.userInfoEmpty/) | Internal use |
| [highScore](/constructor/highScore/) | Game highscore |
| [importedContact](/constructor/importedContact/) | Successfully imported contact. |
| [inlineBotSwitchPM](/constructor/inlineBotSwitchPM/) | The bot requested the user to message them in private |
| [inlineBotWebView](/constructor/inlineBotWebView/) | Specifies an [inline mode mini app](https://core.telegram.org/api/bots/webapps#inline-mode-mini-apps) button, shown on top of the inline query results list. |
| [inlineQueryPeerTypeBotPM](/constructor/inlineQueryPeerTypeBotPM/) | Peer type: private chat with a bot. |
| [inlineQueryPeerTypeBroadcast](/constructor/inlineQueryPeerTypeBroadcast/) | Peer type: [channel](https://core.telegram.org/api/channel) |
| [inlineQueryPeerTypeChat](/constructor/inlineQueryPeerTypeChat/) | Peer type: [chat](https://core.telegram.org/api/channel) |
| [inlineQueryPeerTypeMegagroup](/constructor/inlineQueryPeerTypeMegagroup/) | Peer type: [supergroup](https://core.telegram.org/api/channel) |
| [inlineQueryPeerTypePM](/constructor/inlineQueryPeerTypePM/) | Peer type: private chat |
| [inlineQueryPeerTypeSameBotPM](/constructor/inlineQueryPeerTypeSameBotPM/) | Peer type: private chat with the bot itself |
| [inputAppEvent](/constructor/inputAppEvent/) | Event that occurred in the application. |
| [inputBotAppID](/constructor/inputBotAppID/) | Used to fetch information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps) by its ID |
| [inputBotAppShortName](/constructor/inputBotAppShortName/) | Used to fetch information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps) by its short name |
| [inputBotInlineMessageGame](/constructor/inputBotInlineMessageGame/) | A game |
| [inputBotInlineMessageID](/constructor/inputBotInlineMessageID/) | Represents a sent inline message from the perspective of a bot (legacy constructor) |
| [inputBotInlineMessageID64](/constructor/inputBotInlineMessageID64/) | Represents a sent inline message from the perspective of a bot |
| [inputBotInlineMessageMediaAuto](/constructor/inputBotInlineMessageMediaAuto/) | A media |
| [inputBotInlineMessageMediaContact](/constructor/inputBotInlineMessageMediaContact/) | A contact |
| [inputBotInlineMessageMediaGeo](/constructor/inputBotInlineMessageMediaGeo/) | Geolocation |
| [inputBotInlineMessageMediaInvoice](/constructor/inputBotInlineMessageMediaInvoice/) | An invoice |
| [inputBotInlineMessageMediaVenue](/constructor/inputBotInlineMessageMediaVenue/) | Venue |
| [inputBotInlineMessageMediaWebPage](/constructor/inputBotInlineMessageMediaWebPage/) | Specifies options that will be used to generate the link preview for the message, or even a standalone link preview without an attached message. |
| [inputBotInlineMessageText](/constructor/inputBotInlineMessageText/) | Simple text message |
| [inputBotInlineResult](/constructor/inputBotInlineResult/) | An inline bot result |
| [inputBotInlineResultDocument](/constructor/inputBotInlineResultDocument/) | Document (media of any type except for photos) |
| [inputBotInlineResultGame](/constructor/inputBotInlineResultGame/) | Game |
| [inputBotInlineResultPhoto](/constructor/inputBotInlineResultPhoto/) | Photo |
| [inputBusinessAwayMessage](/constructor/inputBusinessAwayMessage/) | Describes a [Telegram Business away message](https://core.telegram.org/api/business#away-messages), automatically sent to users writing to us when we're offline, during closing hours, while we're on vacation, or in some other custom time period when we cannot immediately answer to the user. |
| [inputBusinessBotRecipients](/constructor/inputBusinessBotRecipients/) | Specifies the private chats that a [connected business bot »](https://core.telegram.org/api/bots/connected-business-bots) may interact with. |
| [inputBusinessChatLink](/constructor/inputBusinessChatLink/) | Contains info about a [business chat deep link »](https://core.telegram.org/api/business#business-chat-links) to be created by the current account. |
| [inputBusinessGreetingMessage](/constructor/inputBusinessGreetingMessage/) | Describes a [Telegram Business greeting](https://core.telegram.org/api/business#greeting-messages), automatically sent to new users writing to us in private for the first time, or after a certain inactivity period. |
| [inputBusinessIntro](/constructor/inputBusinessIntro/) | [Telegram Business introduction »](https://core.telegram.org/api/business#business-introduction). |
| [inputBusinessRecipients](/constructor/inputBusinessRecipients/) | Specifies the chats that **can** receive Telegram Business [away »](https://core.telegram.org/api/business#away-messages) and [greeting »](https://core.telegram.org/api/business#greeting-messages) messages. If `exclude_selected` is set, specifies all chats that **cannot** receive Telegram Business [away »](https://core.telegram.org/api/business#away-messages) and [greeting »](https://core.telegram.org/api/business#greeting-messages) messages. |
| [inputChannel](/constructor/inputChannel/) | Represents a channel |
| [inputChannelEmpty](/constructor/inputChannelEmpty/) | Represents the absence of a channel |
| [inputChannelFromMessage](/constructor/inputChannelFromMessage/) | Defines a [min](https://core.telegram.org/api/min) channel that was seen in a certain message of a certain chat. |
| [inputChatlistDialogFilter](/constructor/inputChatlistDialogFilter/) | Folder ID |
| [inputChatPhoto](/constructor/inputChatPhoto/) | Existing photo to be set as a chat profile photo. |
| [inputChatPhotoEmpty](/constructor/inputChatPhotoEmpty/) | Empty constructor, remove group photo. |
| [inputChatTheme](/constructor/inputChatTheme/) | Set an emoji-based chat theme, returned by [account.getChatThemes](/method/account.getChatThemes/). |
| [inputChatThemeEmpty](/constructor/inputChatThemeEmpty/) | Remove any currently configured theme. |
| [inputChatThemeUniqueGift](/constructor/inputChatThemeUniqueGift/) | Set a theme based on an owned or [hosted collectible gift »](https://core.telegram.org/api/gifts#hosted-collectible-gifts), returned by [account.getUniqueGiftChatThemes](/method/account.getUniqueGiftChatThemes/). |
| [inputChatUploadedPhoto](/constructor/inputChatUploadedPhoto/) | New photo to be set as group profile photo. The `file`, `video` and `video_emoji_markup` flags are mutually exclusive. |
| [inputCheckPasswordEmpty](/constructor/inputCheckPasswordEmpty/) | There is no password |
| [inputCheckPasswordSRP](/constructor/inputCheckPasswordSRP/) | Constructor for checking the validity of a 2FA SRP password (see [SRP](/api/srp/)) |
| [inputClientProxy](/constructor/inputClientProxy/) | Info about an [MTProxy](https://core.telegram.org/mtproto/mtproto-transports/#transport-obfuscation) used to connect. |
| [inputCollectiblePhone](/constructor/inputCollectiblePhone/) | Represents a [phone number fragment collectible](https://core.telegram.org/api/fragment) |
| [inputCollectibleUsername](/constructor/inputCollectibleUsername/) | Represents a [username fragment collectible](https://core.telegram.org/api/fragment) |
| [inputDialogPeer](/constructor/inputDialogPeer/) | A peer |
| [inputDialogPeerFolder](/constructor/inputDialogPeerFolder/) | All peers in a [peer folder](https://core.telegram.org/api/folders#peer-folders) |
| [inputDocument](/constructor/inputDocument/) | Defines a document for subsequent interaction. |
| [inputDocumentEmpty](/constructor/inputDocumentEmpty/) | Empty constructor. |
| [inputDocumentFileLocation](/constructor/inputDocumentFileLocation/) | Document location (video, voice, audio, basically every type except photo) |
| [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/) | An owned or [hosted collectible gift »](https://core.telegram.org/api/gifts#hosted-collectible-gifts) as emoji status: can only be used in [account.updateEmojiStatus](/method/account.updateEmojiStatus/), is never returned by the API. Note that once set, the status will be returned to users as a [emojiStatusCollectible](/constructor/emojiStatusCollectible/) constructor, instead (which **cannot** be passed to [account.updateEmojiStatus](/method/account.updateEmojiStatus/), and must be converted to an [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/) first). |
| [inputEncryptedChat](/constructor/inputEncryptedChat/) | An [e2e encrypted chat](/api/end-to-end/). |
| [inputEncryptedFile](/constructor/inputEncryptedFile/) | Sets forwarded encrypted file for attachment. |
| [inputEncryptedFileBigUploaded](/constructor/inputEncryptedFileBigUploaded/) | Assigns a new big encrypted file (over 10 MB in size), saved in parts using the method [upload.saveBigFilePart](/method/upload.saveBigFilePart/). |
| [inputEncryptedFileEmpty](/constructor/inputEncryptedFileEmpty/) | Empty constructor. |
| [inputEncryptedFileLocation](/constructor/inputEncryptedFileLocation/) | Location of encrypted secret chat file. |
| [inputEncryptedFileUploaded](/constructor/inputEncryptedFileUploaded/) | Sets new encrypted file saved by parts using upload.saveFilePart method. |
| [inputFile](/constructor/inputFile/) | Defines a file saved in parts using the method [upload.saveFilePart](/method/upload.saveFilePart/). |
| [inputFileBig](/constructor/inputFileBig/) | Assigns a big file (over 10 MB in size), saved in part using the method [upload.saveBigFilePart](/method/upload.saveBigFilePart/). |
| [inputFileLocation](/constructor/inputFileLocation/) | DEPRECATED location of a photo |
| [inputFileStoryDocument](/constructor/inputFileStoryDocument/) | Used to [edit the thumbnail/static preview of a story, see here »](https://core.telegram.org/api/stories#editing-stories) for more info on the full flow. |
| [inputFolderPeer](/constructor/inputFolderPeer/) | Peer in a folder |
| [inputGameID](/constructor/inputGameID/) | Indicates an already sent game |
| [inputGameShortName](/constructor/inputGameShortName/) | Game by short name |
| [inputGeoPoint](/constructor/inputGeoPoint/) | Defines a GeoPoint by its coordinates. |
| [inputGeoPointEmpty](/constructor/inputGeoPointEmpty/) | Empty GeoPoint constructor. |
| [inputGroupCall](/constructor/inputGroupCall/) | Points to a specific [group call](https://core.telegram.org/api/group-calls). |
| [inputGroupCallInviteMessage](/constructor/inputGroupCallInviteMessage/) | Identifies a [conference call »](https://core.telegram.org/api/group-calls#conference-calls) using its [messageActionConferenceCall](/constructor/messageActionConferenceCall/) invitation service message. |
| [inputGroupCallSlug](/constructor/inputGroupCallSlug/) | Identify a [conference call »](https://core.telegram.org/api/group-calls#conference-calls) using the slug from its invitation link. This constructor can only be used for conference calls. It cannot be used for video chats/livestreams, live stories or any other group call type. |
| [inputGroupCallStream](/constructor/inputGroupCallStream/) | Identifies a media chunk of an RTMP-mode video chat, livestream or live story, see [playing an RTMP livestream »](https://core.telegram.org/api/group-calls#downloading-media-chunks). |
| [inputInvoiceBusinessBotTransferStars](/constructor/inputInvoiceBusinessBotTransferStars/) | Transfer stars from the balance of a user account [connected to a business bot](https://core.telegram.org/api/bots/connected-business-bots), to the balance of the [business bot](https://core.telegram.org/api/bots/connected-business-bots), see [here »](https://core.telegram.org/api/stars#transferring-stars-from-a-business-account-to-the-business-bot) for more info on the full flow. |
| [inputInvoiceChatInviteSubscription](/constructor/inputInvoiceChatInviteSubscription/) | Used to pay for a [Telegram Star subscription »](https://core.telegram.org/api/stars#star-subscriptions). |
| [inputInvoiceMessage](/constructor/inputInvoiceMessage/) | An invoice contained in a [messageMediaInvoice](/constructor/messageMediaInvoice/) message or [paid media »](https://core.telegram.org/api/paid-media). |
| [inputInvoicePremiumAuthCode](/constructor/inputInvoicePremiumAuthCode/) | Used to pay for login codes, in case of high cost of SMS verification codes for the user's country/provider, see [here »](https://core.telegram.org/api/auth/#paid-auth) for more info. |
| [inputInvoicePremiumGiftCode](/constructor/inputInvoicePremiumGiftCode/) | Used if the user wishes to start a channel/supergroup [giveaway](https://core.telegram.org/api/giveaways) or send some [giftcodes](https://core.telegram.org/api/giveaways) to members of a channel/supergroup, in exchange for [boosts](https://core.telegram.org/api/boost). |
| [inputInvoicePremiumGiftStars](/constructor/inputInvoicePremiumGiftStars/) | Used to gift a [Telegram Premium](https://core.telegram.org/api/premium) subscription to another user, paying with [Telegram Stars](https://core.telegram.org/api/stars). |
| [inputInvoiceSlug](/constructor/inputInvoiceSlug/) | An invoice slug taken from an [invoice deep link](https://core.telegram.org/api/links#invoice-links) or from the [`premium_invoice_slug` app config parameter »](https://core.telegram.org/api/config#premium-invoice-slug) |
| [inputInvoiceStarGift](/constructor/inputInvoiceStarGift/) | Used to buy a [Telegram Star Gift, see here »](https://core.telegram.org/api/gifts) for more info. |
| [inputInvoiceStarGiftAuctionBid](/constructor/inputInvoiceStarGiftAuctionBid/) | Used to place a bid in a [collectible gift auction »](https://core.telegram.org/api/auctions). |
| [inputInvoiceStarGiftDropOriginalDetails](/constructor/inputInvoiceStarGiftDropOriginalDetails/) | Used to pay for for the removal of the [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/) attribute from a collectible gift, see [here »](https://core.telegram.org/api/gifts#dropping-the-original-details-of-an-upgraded-gift) for the full flow. |
| [inputInvoiceStarGiftPrepaidUpgrade](/constructor/inputInvoiceStarGiftPrepaidUpgrade/) | [Separately prepay for the upgrade of a gift »](https://core.telegram.org/api/gifts#prepaying-for-someone-elses-upgrade). |
| [inputInvoiceStarGiftResale](/constructor/inputInvoiceStarGiftResale/) | Used to buy a [collectible gift](https://core.telegram.org/api/gifts#collectible-gifts) currently up on resale, see [here](https://core.telegram.org/api/gifts#reselling-collectible-gifts) for more info on the full flow. |
| [inputInvoiceStarGiftTransfer](/constructor/inputInvoiceStarGiftTransfer/) | Used to [pay to transfer a collectible gift to another peer](https://core.telegram.org/api/gifts#transferring-collectible-gifts), see the [gifts »](https://core.telegram.org/api/gifts#transferring-collectible-gifts) documentation for more info. |
| [inputInvoiceStarGiftUpgrade](/constructor/inputInvoiceStarGiftUpgrade/) | Used to [pay to upgrade a Gift to a collectible gift](https://core.telegram.org/api/gifts#upgrade-a-gift-to-a-collectible-gift), see the [collectible gifts »](https://core.telegram.org/api/gifts#collectible-gifts) documentation for more info on the full flow. |
| [inputInvoiceStars](/constructor/inputInvoiceStars/) | Used to top up the [Telegram Stars](https://core.telegram.org/api/stars) balance of the current account or someone else's account, or to start a [Telegram Star giveaway »](https://core.telegram.org/api/giveaways#star-giveaways). |
| [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/) | Prompts the user to select and share one or more peers with the bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/). Use this constructor to send a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button in a [reply keyboard](https://core.telegram.org/bots/features#keyboards) in a private chat. See [peer requests](https://core.telegram.org/api/bots/buttons#peer-requests) for the full flow. |
| [inputKeyboardButtonUrlAuth](/constructor/inputKeyboardButtonUrlAuth/) | Button to request a user to [authorize](/method/messages.acceptUrlAuth/) via URL using [Seamless Telegram Login](https://telegram.org/blog/privacy-discussions-web-bots#meet-seamless-web-bots). Use this constructor to send a [keyboardButtonUrlAuth](/constructor/keyboardButtonUrlAuth/) button in an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards). |
| [inputKeyboardButtonUserProfile](/constructor/inputKeyboardButtonUserProfile/) | Button that links directly to a user profile Use this constructor to send a [keyboardButtonUserProfile](/constructor/keyboardButtonUserProfile/) button in an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards). |
| [inputMediaAreaChannelPost](/constructor/inputMediaAreaChannelPost/) | Represents a channel post |
| [inputMediaAreaVenue](/constructor/inputMediaAreaVenue/) | Represents a [location tag](https://core.telegram.org/api/stories#media-areas) attached to a [story](https://core.telegram.org/api/stories), with additional venue information. |
| [inputMediaContact](/constructor/inputMediaContact/) | Phone book contact |
| [inputMediaDice](/constructor/inputMediaDice/) | Send a [dice-based animated sticker](https://core.telegram.org/api/dice) |
| [inputMediaDocument](/constructor/inputMediaDocument/) | Forwarded document |
| [inputMediaDocumentExternal](/constructor/inputMediaDocumentExternal/) | Document that will be downloaded by the telegram servers |
| [inputMediaEmpty](/constructor/inputMediaEmpty/) | Empty media content of a message. |
| [inputMediaGame](/constructor/inputMediaGame/) | A game |
| [inputMediaGeoLive](/constructor/inputMediaGeoLive/) | [Live geolocation](https://core.telegram.org/api/live-location) |
| [inputMediaGeoPoint](/constructor/inputMediaGeoPoint/) | Map. |
| [inputMediaInvoice](/constructor/inputMediaInvoice/) | Generated invoice of a [bot payment](https://core.telegram.org/bots/payments) |
| [inputMediaPaidMedia](/constructor/inputMediaPaidMedia/) | [Paid media, see here »](https://core.telegram.org/api/paid-media) for more info. |
| [inputMediaPhoto](/constructor/inputMediaPhoto/) | Forwarded photo |
| [inputMediaPhotoExternal](/constructor/inputMediaPhotoExternal/) | New photo that will be uploaded by the server using the specified URL |
| [inputMediaPoll](/constructor/inputMediaPoll/) | A poll |
| [inputMediaStakeDice](/constructor/inputMediaStakeDice/) | Dice game media. |
| [inputMediaStory](/constructor/inputMediaStory/) | Forwarded story |
| [inputMediaTodo](/constructor/inputMediaTodo/) | Creates a [todo list »](https://core.telegram.org/api/todo). |
| [inputMediaUploadedDocument](/constructor/inputMediaUploadedDocument/) | New document |
| [inputMediaUploadedPhoto](/constructor/inputMediaUploadedPhoto/) | Photo |
| [inputMediaVenue](/constructor/inputMediaVenue/) | Can be used to send a venue geolocation. |
| [inputMediaWebPage](/constructor/inputMediaWebPage/) | Specifies options that will be used to generate the link preview for the caption, or even a standalone link preview without an attached message. |
| [inputMessageCallbackQuery](/constructor/inputMessageCallbackQuery/) | Used by bots for fetching information about the message that originated a callback query |
| [inputMessageEntityMentionName](/constructor/inputMessageEntityMentionName/) | Message entity that can be used to create a user [user mention](https://core.telegram.org/api/mentions): received mentions use the [messageEntityMentionName](/constructor/messageEntityMentionName/) constructor, instead. |
| [inputMessageID](/constructor/inputMessageID/) | Message by ID |
| [inputMessagePinned](/constructor/inputMessagePinned/) | Pinned message |
| [inputMessageReplyTo](/constructor/inputMessageReplyTo/) | Message to which the specified message replies to |
| [inputMessagesFilterChatPhotos](/constructor/inputMessagesFilterChatPhotos/) | Return only chat photo changes |
| [inputMessagesFilterContacts](/constructor/inputMessagesFilterContacts/) | Return only messages containing contacts |
| [inputMessagesFilterDocument](/constructor/inputMessagesFilterDocument/) | Filter for messages containing documents. |
| [inputMessagesFilterEmpty](/constructor/inputMessagesFilterEmpty/) | Filter is absent. |
| [inputMessagesFilterGeo](/constructor/inputMessagesFilterGeo/) | Return only messages containing geolocations |
| [inputMessagesFilterGif](/constructor/inputMessagesFilterGif/) | Return only messages containing gifs |
| [inputMessagesFilterMusic](/constructor/inputMessagesFilterMusic/) | Return only messages containing audio files |
| [inputMessagesFilterMyMentions](/constructor/inputMessagesFilterMyMentions/) | Return only messages where the current user was [mentioned](https://core.telegram.org/api/mentions). |
| [inputMessagesFilterPhoneCalls](/constructor/inputMessagesFilterPhoneCalls/) | Return only phone calls |
| [inputMessagesFilterPhotos](/constructor/inputMessagesFilterPhotos/) | Filter for messages containing photos. |
| [inputMessagesFilterPhotoVideo](/constructor/inputMessagesFilterPhotoVideo/) | Filter for messages containing photos or videos. |
| [inputMessagesFilterPinned](/constructor/inputMessagesFilterPinned/) | Fetch only pinned messages |
| [inputMessagesFilterRoundVideo](/constructor/inputMessagesFilterRoundVideo/) | Return only round videos |
| [inputMessagesFilterRoundVoice](/constructor/inputMessagesFilterRoundVoice/) | Return only round videos and voice notes |
| [inputMessagesFilterUrl](/constructor/inputMessagesFilterUrl/) | Return only messages containing URLs |
| [inputMessagesFilterVideo](/constructor/inputMessagesFilterVideo/) | Filter for messages containing videos. |
| [inputMessagesFilterVoice](/constructor/inputMessagesFilterVoice/) | Return only messages containing voice notes |
| [inputNotifyBroadcasts](/constructor/inputNotifyBroadcasts/) | All [channels](https://core.telegram.org/api/channel) |
| [inputNotifyChats](/constructor/inputNotifyChats/) | Notifications generated by all groups. |
| [inputNotifyForumTopic](/constructor/inputNotifyForumTopic/) | Notifications generated by a [topic](https://core.telegram.org/api/forum#forum-topics) in a [forum](https://core.telegram.org/api/forum). |
| [inputNotifyPeer](/constructor/inputNotifyPeer/) | Notifications generated by a certain user or group. |
| [inputNotifyUsers](/constructor/inputNotifyUsers/) | Notifications generated by all users. |
| [inputPasskeyCredentialFirebasePNV](/constructor/inputPasskeyCredentialFirebasePNV/) | Alternative [passkey](https://core.telegram.org/api/passkeys) credential that proves ownership of the account's phone number through a Firebase Phone Number Verification (PNV) token, used on official apps where a full WebAuthn [public-key passkey](/constructor/inputPasskeyCredentialPublicKey/) cannot be created, in a way similar to [Firebase SMS authentication »](/api/auth/). |
| [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/) | Public-key passkey credential used both for registration and for login, see [creating a passkey »](https://core.telegram.org/api/passkeys#creating-a-passkey) and [logging in with a passkey »](https://core.telegram.org/api/passkeys#logging-in-with-a-passkey) for the full flows. |
| [inputPasskeyResponseLogin](/constructor/inputPasskeyResponseLogin/) | WebAuthn authentication response used when logging in with a passkey, see [here »](https://core.telegram.org/api/passkeys#logging-in-with-a-passkey) for more info on the full flow. Generated from the [AuthenticatorAssertionResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse) object. |
| [inputPasskeyResponseRegister](/constructor/inputPasskeyResponseRegister/) | WebAuthn registration response used when registering a new passkey, see [here »](https://core.telegram.org/api/passkeys#creating-a-passkey) for more info on the full flow. Generated from the [AuthenticatorAttestationResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse) object. |
| [inputPaymentCredentials](/constructor/inputPaymentCredentials/) | Payment credentials |
| [inputPaymentCredentialsApplePay](/constructor/inputPaymentCredentialsApplePay/) | Apple pay payment credentials |
| [inputPaymentCredentialsGooglePay](/constructor/inputPaymentCredentialsGooglePay/) | Google Pay payment credentials |
| [inputPaymentCredentialsSaved](/constructor/inputPaymentCredentialsSaved/) | Saved payment credentials |
| [inputPeerChannel](/constructor/inputPeerChannel/) | Defines a channel for further interaction. |
| [inputPeerChannelFromMessage](/constructor/inputPeerChannelFromMessage/) | Defines a [min](https://core.telegram.org/api/min) channel that was seen in a certain message of a certain chat. |
| [inputPeerChat](/constructor/inputPeerChat/) | Defines a chat for further interaction. |
| [inputPeerColorCollectible](/constructor/inputPeerColorCollectible/) | Represents a [color palette »](https://core.telegram.org/api/colors) associated to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts), see [here »](https://core.telegram.org/api/colors#collectible-gift-palettes) for more info. |
| [inputPeerEmpty](/constructor/inputPeerEmpty/) | An empty constructor, no user or chat is defined. |
| [inputPeerNotifySettings](/constructor/inputPeerNotifySettings/) | Notification settings. |
| [inputPeerPhotoFileLocation](/constructor/inputPeerPhotoFileLocation/) | Location of profile photo of channel/group/supergroup/user |
| [inputPeerSelf](/constructor/inputPeerSelf/) | Defines the current user. |
| [inputPeerUser](/constructor/inputPeerUser/) | Defines a user for further interaction. |
| [inputPeerUserFromMessage](/constructor/inputPeerUserFromMessage/) | Defines a [min](https://core.telegram.org/api/min) user that was seen in a certain message of a certain chat. |
| [inputPhoneCall](/constructor/inputPhoneCall/) | Identifies a [phone call](https://core.telegram.org/api/calls). |
| [inputPhoneContact](/constructor/inputPhoneContact/) | Phone contact. |
| [inputPhoto](/constructor/inputPhoto/) | Defines a photo for further interaction. |
| [inputPhotoEmpty](/constructor/inputPhotoEmpty/) | Empty constructor. |
| [inputPhotoFileLocation](/constructor/inputPhotoFileLocation/) | Use this object to download a photo with [upload.getFile](/method/upload.getFile/) method |
| [inputPhotoLegacyFileLocation](/constructor/inputPhotoLegacyFileLocation/) | DEPRECATED legacy photo file location |
| [inputPrivacyKeyAbout](/constructor/inputPrivacyKeyAbout/) | Whether people can see your bio |
| [inputPrivacyKeyAddedByPhone](/constructor/inputPrivacyKeyAddedByPhone/) | Whether people can add you to their contact list by your phone number |
| [inputPrivacyKeyBirthday](/constructor/inputPrivacyKeyBirthday/) | Whether the user can see our birthday. |
| [inputPrivacyKeyChatInvite](/constructor/inputPrivacyKeyChatInvite/) | Whether people will be able to invite you to chats |
| [inputPrivacyKeyForwards](/constructor/inputPrivacyKeyForwards/) | Whether messages forwarded from you will be [anonymous](https://telegram.org/blog/unsend-privacy-emoji#anonymous-forwarding) |
| [inputPrivacyKeyNoPaidMessages](/constructor/inputPrivacyKeyNoPaidMessages/) | Who can send you messages without paying, if [paid messages »](https://core.telegram.org/api/paid-messages) are enabled. |
| [inputPrivacyKeyPhoneCall](/constructor/inputPrivacyKeyPhoneCall/) | Whether you will accept phone calls |
| [inputPrivacyKeyPhoneNumber](/constructor/inputPrivacyKeyPhoneNumber/) | Whether people will be able to see your phone number |
| [inputPrivacyKeyPhoneP2P](/constructor/inputPrivacyKeyPhoneP2P/) | Whether to allow P2P communication during VoIP calls |
| [inputPrivacyKeyProfilePhoto](/constructor/inputPrivacyKeyProfilePhoto/) | Whether people will be able to see your profile picture |
| [inputPrivacyKeySavedMusic](/constructor/inputPrivacyKeySavedMusic/) | Whether the user can see the [songs we pinned to our profile »](https://core.telegram.org/api/profile#music). |
| [inputPrivacyKeyStarGiftsAutoSave](/constructor/inputPrivacyKeyStarGiftsAutoSave/) | Whether received [gifts](https://core.telegram.org/api/gifts) will be automatically displayed on our profile |
| [inputPrivacyKeyStatusTimestamp](/constructor/inputPrivacyKeyStatusTimestamp/) | Whether people will be able to see our exact last online timestamp. Note that if _we_ decide to hide our exact last online timestamp to someone (i.e., users A, B, C, or all users) **and** we do not have a [Premium](https://core.telegram.org/api/premium) subscription, we won't be able to see the exact last online timestamp of those users (A, B, C, or all users), even if those users _do_ share it with us. If those users _do_ share their exact online status with us, but we can't see it due to the reason mentioned above, the `by_me` flag of [userStatusRecently](/constructor/userStatusRecently/), [userStatusLastWeek](/constructor/userStatusLastWeek/), [userStatusLastMonth](/constructor/userStatusLastMonth/) will be set. |
| [inputPrivacyKeyVoiceMessages](/constructor/inputPrivacyKeyVoiceMessages/) | Whether people can send you voice messages or round videos ([Premium](https://core.telegram.org/api/premium) users only). |
| [inputPrivacyValueAllowAll](/constructor/inputPrivacyValueAllowAll/) | Allow all users |
| [inputPrivacyValueAllowBots](/constructor/inputPrivacyValueAllowBots/) | Allow bots and mini apps |
| [inputPrivacyValueAllowChatParticipants](/constructor/inputPrivacyValueAllowChatParticipants/) | Allow only participants of certain chats |
| [inputPrivacyValueAllowCloseFriends](/constructor/inputPrivacyValueAllowCloseFriends/) | Allow only [close friends »](https://core.telegram.org/api/privacy) |
| [inputPrivacyValueAllowContacts](/constructor/inputPrivacyValueAllowContacts/) | Allow only contacts |
| [inputPrivacyValueAllowPremium](/constructor/inputPrivacyValueAllowPremium/) | Allow only users with a [Premium subscription »](https://core.telegram.org/api/premium), currently only usable for [inputPrivacyKeyChatInvite](/constructor/inputPrivacyKeyChatInvite/). |
| [inputPrivacyValueAllowUsers](/constructor/inputPrivacyValueAllowUsers/) | Allow only certain users |
| [inputPrivacyValueDisallowAll](/constructor/inputPrivacyValueDisallowAll/) | Disallow all |
| [inputPrivacyValueDisallowBots](/constructor/inputPrivacyValueDisallowBots/) | Disallow bots and mini apps |
| [inputPrivacyValueDisallowChatParticipants](/constructor/inputPrivacyValueDisallowChatParticipants/) | Disallow only participants of certain chats |
| [inputPrivacyValueDisallowContacts](/constructor/inputPrivacyValueDisallowContacts/) | Disallow only contacts |
| [inputPrivacyValueDisallowUsers](/constructor/inputPrivacyValueDisallowUsers/) | Disallow only certain users |
| [inputQuickReplyShortcut](/constructor/inputQuickReplyShortcut/) | Selects a [quick reply shortcut](https://core.telegram.org/api/business#quick-reply-shortcuts) by name. |
| [inputQuickReplyShortcutId](/constructor/inputQuickReplyShortcutId/) | Selects a [quick reply shortcut](https://core.telegram.org/api/business#quick-reply-shortcuts) by its numeric ID. |
| [inputReplyToMessage](/constructor/inputReplyToMessage/) | Reply to a message. |
| [inputReplyToMonoForum](/constructor/inputReplyToMonoForum/) | Used to send messages to a [monoforum topic](https://core.telegram.org/api/monoforum). |
| [inputReplyToStory](/constructor/inputReplyToStory/) | Reply to a story. |
| [inputReportReasonChildAbuse](/constructor/inputReportReasonChildAbuse/) | Report for child abuse |
| [inputReportReasonCopyright](/constructor/inputReportReasonCopyright/) | Report for copyrighted content |
| [inputReportReasonFake](/constructor/inputReportReasonFake/) | Report for impersonation |
| [inputReportReasonGeoIrrelevant](/constructor/inputReportReasonGeoIrrelevant/) | Report an irrelevant geogroup |
| [inputReportReasonIllegalDrugs](/constructor/inputReportReasonIllegalDrugs/) | Report for illegal drugs |
| [inputReportReasonOther](/constructor/inputReportReasonOther/) | Other |
| [inputReportReasonPersonalDetails](/constructor/inputReportReasonPersonalDetails/) | Report for divulgation of personal details |
| [inputReportReasonPornography](/constructor/inputReportReasonPornography/) | Report for pornography |
| [inputReportReasonSpam](/constructor/inputReportReasonSpam/) | Report for spam |
| [inputReportReasonViolence](/constructor/inputReportReasonViolence/) | Report for violence |
| [inputSavedStarGiftChat](/constructor/inputSavedStarGiftChat/) | A gift received by a channel we own. |
| [inputSavedStarGiftSlug](/constructor/inputSavedStarGiftSlug/) | Points to a [collectible gift obtained from a collectible gift link »](https://core.telegram.org/api/links#collectible-gift-link). |
| [inputSavedStarGiftUser](/constructor/inputSavedStarGiftUser/) | A gift received in a private chat with another user. |
| [inputSecureFile](/constructor/inputSecureFile/) | Pre-uploaded [passport](https://core.telegram.org/passport) file, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#inputsecurefile) |
| [inputSecureFileLocation](/constructor/inputSecureFileLocation/) | Location of encrypted telegram [passport](https://core.telegram.org/passport) file. |
| [inputSecureFileUploaded](/constructor/inputSecureFileUploaded/) | Uploaded secure file, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#inputsecurefile) |
| [inputSecureValue](/constructor/inputSecureValue/) | Secure value, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) |
| [inputSingleMedia](/constructor/inputSingleMedia/) | A single media in an [album or grouped media](https://core.telegram.org/api/files/#albums-grouped-media) sent with [messages.sendMultiMedia](/method/messages.sendMultiMedia/). |
| [inputStarGiftAuction](/constructor/inputStarGiftAuction/) | Used to fetch [auctions](https://core.telegram.org/api/auctions) using the ID of the linked [collectible gift](https://core.telegram.org/api/gifts#collectible-gifts). |
| [inputStarGiftAuctionSlug](/constructor/inputStarGiftAuctionSlug/) | Used to fetch [auctions](https://core.telegram.org/api/auctions) using the [slug of an auction deep link »](https://core.telegram.org/api/links#auction-links). |
| [inputStarsTransaction](/constructor/inputStarsTransaction/) | Used to fetch info about a [Telegram Star transaction »](https://core.telegram.org/api/stars#balance-and-transaction-history). |
| [inputStickeredMediaDocument](/constructor/inputStickeredMediaDocument/) | A document with stickers attached |
| [inputStickeredMediaPhoto](/constructor/inputStickeredMediaPhoto/) | A photo with stickers attached |
| [inputStickerSetAnimatedEmoji](/constructor/inputStickerSetAnimatedEmoji/) | Animated emojis stickerset |
| [inputStickerSetAnimatedEmojiAnimations](/constructor/inputStickerSetAnimatedEmojiAnimations/) | Animated emoji reaction stickerset (contains animations to play when a user clicks on a given animated emoji) |
| [inputStickerSetDice](/constructor/inputStickerSetDice/) | Used for fetching [animated dice stickers](https://core.telegram.org/api/dice) |
| [inputStickerSetEmojiChannelDefaultStatuses](/constructor/inputStickerSetEmojiChannelDefaultStatuses/) | Default [custom emoji status](https://core.telegram.org/api/emoji-status) stickerset for channel statuses |
| [inputStickerSetEmojiDefaultStatuses](/constructor/inputStickerSetEmojiDefaultStatuses/) | Default [custom emoji status](https://core.telegram.org/api/emoji-status) stickerset |
| [inputStickerSetEmojiDefaultTopicIcons](/constructor/inputStickerSetEmojiDefaultTopicIcons/) | Default [custom emoji](https://core.telegram.org/api/custom-emoji) stickerset for [forum topic icons](https://core.telegram.org/api/forum#forum-topics) |
| [inputStickerSetEmojiGenericAnimations](/constructor/inputStickerSetEmojiGenericAnimations/) | Generic animation stickerset containing animations to play when [reacting to messages using a normal emoji without a custom animation](https://core.telegram.org/api/reactions) |
| [inputStickerSetEmpty](/constructor/inputStickerSetEmpty/) | Empty constructor #### [End-to-end schema](/schema/end-to-end/) ``` ===45=== inputStickerSetEmpty#ffb62b95 = InputStickerSet; ``` #### API schema |
| [inputStickerSetID](/constructor/inputStickerSetID/) | Stickerset by ID |
| [inputStickerSetItem](/constructor/inputStickerSetItem/) | Sticker in a stickerset |
| [inputStickerSetPremiumGifts](/constructor/inputStickerSetPremiumGifts/) | Stickers to show when receiving a gifted Telegram Premium subscription |
| [inputStickerSetShortName](/constructor/inputStickerSetShortName/) | Stickerset by short name, from a [stickerset deep link »](https://core.telegram.org/api/links#stickerset-links) #### [End-to-end schema](/schema/end-to-end/) ``` ===45=== inputStickerSetShortName#861cc8a0 short_name:string = InputStickerSet; ``` #### API schema |
| [inputStickerSetThumb](/constructor/inputStickerSetThumb/) | Location of stickerset thumbnail (see [files](/api/files/)) |
| [inputStickerSetTonGifts](/constructor/inputStickerSetTonGifts/) | TON gifts stickerset. |
| [inputStorePaymentAuthCode](/constructor/inputStorePaymentAuthCode/) | Indicates payment for a login code. |
| [inputStorePaymentGiftPremium](/constructor/inputStorePaymentGiftPremium/) | Info about a gifted Telegram Premium purchase |
| [inputStorePaymentPremiumGiftCode](/constructor/inputStorePaymentPremiumGiftCode/) | Used to gift [Telegram Premium](https://core.telegram.org/api/premium) subscriptions only to some specific subscribers of a channel/supergroup or to some of our contacts, see [here »](https://core.telegram.org/api/giveaways) for more info on giveaways and gifts. |
| [inputStorePaymentPremiumGiveaway](/constructor/inputStorePaymentPremiumGiveaway/) | Used to pay for a [giveaway, see here »](https://core.telegram.org/api/giveaways) for more info. |
| [inputStorePaymentPremiumSubscription](/constructor/inputStorePaymentPremiumSubscription/) | Info about a Telegram Premium purchase |
| [inputStorePaymentStarsGift](/constructor/inputStorePaymentStarsGift/) | Used to gift [Telegram Stars](https://core.telegram.org/api/stars) to a friend. |
| [inputStorePaymentStarsGiveaway](/constructor/inputStorePaymentStarsGiveaway/) | Used to pay for a [star giveaway, see here »](https://core.telegram.org/api/giveaways#star-giveaways) for more info. |
| [inputStorePaymentStarsTopup](/constructor/inputStorePaymentStarsTopup/) | Used to top up the [Telegram Stars balance](https://core.telegram.org/api/stars) of the current account. |
| [inputTakeoutFileLocation](/constructor/inputTakeoutFileLocation/) | Used to download a JSON file that will contain all personal data related to features that do not have a specialized [takeout method](https://core.telegram.org/api/takeout) yet, see [here »](https://core.telegram.org/api/takeout) for more info on the takeout API. |
| [inputTheme](/constructor/inputTheme/) | Theme |
| [inputThemeSettings](/constructor/inputThemeSettings/) | Theme settings |
| [inputThemeSlug](/constructor/inputThemeSlug/) | Theme by theme ID |
| [inputUser](/constructor/inputUser/) | Defines a user for further interaction. |
| [inputUserEmpty](/constructor/inputUserEmpty/) | Empty constructor, does not define a user. |
| [inputUserFromMessage](/constructor/inputUserFromMessage/) | Defines a [min](https://core.telegram.org/api/min) user that was seen in a certain message of a certain chat. |
| [inputUserSelf](/constructor/inputUserSelf/) | Defines the current user. |
| [inputWallPaper](/constructor/inputWallPaper/) | [Wallpaper](https://core.telegram.org/api/wallpapers) |
| [inputWallPaperNoFile](/constructor/inputWallPaperNoFile/) | [Wallpaper](https://core.telegram.org/api/wallpapers) with no file access hash, used for example when deleting (`unsave=true`) wallpapers using [account.saveWallPaper](/method/account.saveWallPaper/), specifying just the wallpaper ID. |
| [inputWallPaperSlug](/constructor/inputWallPaperSlug/) | [Wallpaper](https://core.telegram.org/api/wallpapers) by slug (a unique ID, obtained from a [wallpaper link »](https://core.telegram.org/api/links#wallpaper-links)) |
| [inputWebDocument](/constructor/inputWebDocument/) | The document |
| [inputWebFileAudioAlbumThumbLocation](/constructor/inputWebFileAudioAlbumThumbLocation/) | Used to download an album cover for any music file using [upload.getWebFile](/method/upload.getWebFile/), see the [webfile docs for more info »](https://core.telegram.org/api/files/#downloading-webfiles). |
| [inputWebFileGeoPointLocation](/constructor/inputWebFileGeoPointLocation/) | Used to download a server-generated image with the map preview from a [geoPoint](/constructor/geoPoint/), see the [webfile docs for more info »](https://core.telegram.org/api/files/#downloading-webfiles). |
| [inputWebFileLocation](/constructor/inputWebFileLocation/) | Location of a remote HTTP(s) file |
| [invoice](/constructor/invoice/) | Invoice |
| [jsonArray](/constructor/jsonArray/) | JSON array #### [End-to-end schema](/schema/end-to-end/) ``` ===216=== jsonArray#f7444763 value:Vector<JSONValue> = JSONValue; ``` #### API schema |
| [jsonBool](/constructor/jsonBool/) | JSON boolean value #### [End-to-end schema](/schema/end-to-end/) ``` ===216=== jsonBool#c7345e6a value:Bool = JSONValue; ``` #### API schema |
| [jsonNull](/constructor/jsonNull/) | null JSON value #### [End-to-end schema](/schema/end-to-end/) ``` ===216=== jsonNull#3f6d7b68 = JSONValue; ``` #### API schema |
| [jsonNumber](/constructor/jsonNumber/) | JSON numeric value #### [End-to-end schema](/schema/end-to-end/) ``` ===216=== jsonNumber#2be0dfa4 value:double = JSONValue; ``` #### API schema |
| [jsonObject](/constructor/jsonObject/) | JSON object value #### [End-to-end schema](/schema/end-to-end/) ``` ===216=== jsonObject#99c1d49d value:Vector<JSONObjectValue> = JSONValue; ``` #### API schema |
| [jsonObjectValue](/constructor/jsonObjectValue/) | JSON key: value pair #### [End-to-end schema](/schema/end-to-end/) ``` ===216=== jsonObjectValue#c0de1bd9 key:string value:JSONValue = JSONObjectValue; ``` #### API schema |
| [jsonString](/constructor/jsonString/) | JSON string #### [End-to-end schema](/schema/end-to-end/) ``` ===216=== jsonString#b71e767a value:string = JSONValue; ``` #### API schema |
| [keyboardButton](/constructor/keyboardButton/) | Bot keyboard button Available only in [reply keyboards](/constructor/replyKeyboardMarkup/). When pressed, clients must send `text` as a message to the current chat, replying to the message that attached the [replyKeyboardMarkup](/constructor/replyKeyboardMarkup/). |
| [keyboardButtonBuy](/constructor/keyboardButtonBuy/) | Button to buy a product Available only in [inline keyboards](/constructor/replyInlineMarkup/). When pressed, clients must start the [payment flow for the attached invoice](https://core.telegram.org/api/payments). |
| [keyboardButtonCallback](/constructor/keyboardButtonCallback/) | Callback button Available only in [inline keyboards](/constructor/replyInlineMarkup/). When pressed, clients send `data` to the bot, optionally providing the user's [2FA SRP parameters](/api/srp/) for identity verification, as described in [callback queries](https://core.telegram.org/api/bots/buttons#callback-queries). |
| [keyboardButtonCopy](/constructor/keyboardButtonCopy/) | Clipboard button Available only in [inline keyboards](/constructor/replyInlineMarkup/). When pressed, clients must copy `copy_text` to the clipboard. |
| [keyboardButtonGame](/constructor/keyboardButtonGame/) | Button to start a game Available only in [inline keyboards](/constructor/replyInlineMarkup/). When pressed, clients must open the [game](/constructor/game/) from the attached [messageMediaGame](/constructor/messageMediaGame/) constructor by invoking [messages.getBotCallbackAnswer](/method/messages.getBotCallbackAnswer/) with the `game` flag set, as described in [Starting a game](https://core.telegram.org/api/bots/games#starting-a-game). |
| [keyboardButtonRequestGeoLocation](/constructor/keyboardButtonRequestGeoLocation/) | Button to request a user's geolocation Available only in private chats, in [reply keyboards](/constructor/replyKeyboardMarkup/). When pressed, clients must request permission from the user to send the current user's geolocation to the chat, replying to the message that attached the [replyKeyboardMarkup](/constructor/replyKeyboardMarkup/). |
| [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) | Prompts the user to select and share one or more peers with the bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/) Available only in private chats, in [reply keyboards](/constructor/replyKeyboardMarkup/). See [peer requests](https://core.telegram.org/api/bots/buttons#peer-requests) for the full flow. |
| [keyboardButtonRequestPhone](/constructor/keyboardButtonRequestPhone/) | Button to request a user's phone number Available only in private chats, in [reply keyboards](/constructor/replyKeyboardMarkup/). When pressed, clients must request permission from the user to send the current user's contact to the chat, replying to the message that attached the [replyKeyboardMarkup](/constructor/replyKeyboardMarkup/). |
| [keyboardButtonRequestPoll](/constructor/keyboardButtonRequestPoll/) | Button to request a poll from the user Available only in private chats, in [reply keyboards](/constructor/replyKeyboardMarkup/). When pressed, clients prompt the user to create and send a [poll](https://core.telegram.org/api/poll), replying to the message that attached the [replyKeyboardMarkup](/constructor/replyKeyboardMarkup/). If `quiz` is set, the prompt must create a quiz poll. |
| [keyboardButtonRow](/constructor/keyboardButtonRow/) | Inline keyboard row |
| [keyboardButtonSimpleWebView](/constructor/keyboardButtonSimpleWebView/) | Button to open a [bot mini app](https://core.telegram.org/api/bots/webapps) using [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/), without sending user information to the web app. Can only be sent or received as part of a reply keyboard, use [keyboardButtonWebView](/constructor/keyboardButtonWebView/) for inline keyboards. When pressed, clients must open a [Keyboard Button Mini App](https://core.telegram.org/api/bots/webapps#keyboard-button-mini-apps) using [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/), passing `url` to [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/).`url`. |
| [keyboardButtonStyle](/constructor/keyboardButtonStyle/) | This constructor allows setting a custom background color and custom emoji label for a button, see [here »](https://core.telegram.org/api/bots/buttons#button-styles) for more info. |
| [keyboardButtonSwitchInline](/constructor/keyboardButtonSwitchInline/) | Button to switch the user to inline mode Available only in [inline keyboards](/constructor/replyInlineMarkup/). When pressed, clients must insert the bot's username and `query` into the chat input field, triggering an [inline query](https://core.telegram.org/api/bots/inline). If `same_peer` is set, clients use the current chat. Otherwise, clients prompt the user to select a chat, filtered by `peer_types` if specified. |
| [keyboardButtonUrl](/constructor/keyboardButtonUrl/) | URL button Available only in [inline keyboards](/constructor/replyInlineMarkup/). When pressed, clients open `url`, showing a confirmation prompt unless the URL is one of the [internal URIs](https://github.com/DrKLO/Telegram/blob/68d51749c4fcbaffa584829f23936565df55e08b/TMessagesProj/src/main/java/org/telegram/messenger/browser/Browser.java#L680). |
| [keyboardButtonUrlAuth](/constructor/keyboardButtonUrlAuth/) | Button to request a user to authorize via URL using [Seamless Telegram Login](https://telegram.org/blog/privacy-discussions-web-bots#meet-seamless-web-bots). When the user clicks on such a button, [messages.requestUrlAuth](/method/messages.requestUrlAuth/) should be called, providing the `button_id` and the ID of the container message. The returned [urlAuthResultRequest](/constructor/urlAuthResultRequest/) object will contain more details about the authorization request (`request_write_access` if the bot would like to send messages to the user along with the username of the bot which will be used for user authorization). Finally, the user can choose to call [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/) to get a [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/) with the URL to open instead of the `url` of this constructor, or a [urlAuthResultDefault](/constructor/urlAuthResultDefault/), in which case the `url` of this constructor must be opened, instead. If the user refuses the authorization request but still wants to open the link, the `url` of this constructor must be used. Available only in [inline keyboards](/constructor/replyInlineMarkup/). |
| [keyboardButtonUserProfile](/constructor/keyboardButtonUserProfile/) | Button that links directly to a user profile Available only in [inline keyboards](/constructor/replyInlineMarkup/). When pressed, clients must open the profile of the user identified by `user_id`. |
| [keyboardButtonWebView](/constructor/keyboardButtonWebView/) | Button to open a [bot mini app](https://core.telegram.org/api/bots/webapps) using [messages.requestWebView](/method/messages.requestWebView/), sending over user information after user confirmation. Can only be sent or received as part of an inline keyboard, use [keyboardButtonSimpleWebView](/constructor/keyboardButtonSimpleWebView/) for reply keyboards. When pressed, clients must open an [Inline Button Mini App](https://core.telegram.org/api/bots/webapps#inline-button-mini-apps) using [messages.requestWebView](/method/messages.requestWebView/), passing `url` to [messages.requestWebView](/method/messages.requestWebView/).`url`. |
| [labeledPrice](/constructor/labeledPrice/) | This object represents a portion of the price for goods or services. |
| [langPackDifference](/constructor/langPackDifference/) | Changes to the app's localization pack |
| [langPackLanguage](/constructor/langPackLanguage/) | Identifies a localization pack |
| [langPackString](/constructor/langPackString/) | Translated localization string |
| [langPackStringDeleted](/constructor/langPackStringDeleted/) | Deleted localization string |
| [langPackStringPluralized](/constructor/langPackStringPluralized/) | A language pack string which has different forms based on the number of some object it mentions. See [https://www.unicode.org/cldr/charts/latest/supplemental/language\_plural\_rules.html](https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html) for more info |
| [maskCoords](/constructor/maskCoords/) | Position on a photo where a mask should be placed when [attaching stickers to media »](https://core.telegram.org/api/stickers#attached-stickers) The `n` position indicates where the mask should be placed: -   0 => Relative to the forehead -   1 => Relative to the eyes -   2 => Relative to the mouth -   3 => Relative to the chin |
| [mediaAreaChannelPost](/constructor/mediaAreaChannelPost/) | Represents a channel post. |
| [mediaAreaCoordinates](/constructor/mediaAreaCoordinates/) | Coordinates and size of a clickable rectangular area on top of a story. |
| [mediaAreaGeoPoint](/constructor/mediaAreaGeoPoint/) | Represents a geolocation tag attached to a [story](https://core.telegram.org/api/stories). |
| [mediaAreaStarGift](/constructor/mediaAreaStarGift/) | Represents a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| [mediaAreaSuggestedReaction](/constructor/mediaAreaSuggestedReaction/) | Represents a reaction bubble. |
| [mediaAreaUrl](/constructor/mediaAreaUrl/) | Represents a [URL media area](https://core.telegram.org/api/stories#urls). |
| [mediaAreaVenue](/constructor/mediaAreaVenue/) | Represents a location tag attached to a [story](https://core.telegram.org/api/stories), with additional venue information. |
| [mediaAreaWeather](/constructor/mediaAreaWeather/) | Represents a [weather widget »](https://core.telegram.org/api/stories#weather). |
| [message](/constructor/message/) | A message |
| [messageActionBoostApply](/constructor/messageActionBoostApply/) | Some [boosts »](https://core.telegram.org/api/boost) were applied to the channel or supergroup. |
| [messageActionBotAllowed](/constructor/messageActionBotAllowed/) | We have given the bot permission to send us direct messages. The optional fields specify how did we authorize the bot to send us messages. |
| [messageActionChangeCreator](/constructor/messageActionChangeCreator/) | Service message: emitted to a supergroup when [ownership transfer completes after the old owner left the group »](https://core.telegram.org/api/channel#leaving-groups-channels) (7 days after the old owner left without rejoining), indicating that ownership has been transferred to a new owner. Sent from the user ID of the old owner. |
| [messageActionChannelCreate](/constructor/messageActionChannelCreate/) | The channel was created |
| [messageActionChannelMigrateFrom](/constructor/messageActionChannelMigrateFrom/) | Indicates the channel was [migrated](https://core.telegram.org/api/channel) from the specified chat |
| [messageActionChatAddUser](/constructor/messageActionChatAddUser/) | New member in the group |
| [messageActionChatCreate](/constructor/messageActionChatCreate/) | Group created |
| [messageActionChatDeletePhoto](/constructor/messageActionChatDeletePhoto/) | Group profile photo removed. |
| [messageActionChatDeleteUser](/constructor/messageActionChatDeleteUser/) | User left the group. |
| [messageActionChatEditPhoto](/constructor/messageActionChatEditPhoto/) | Group profile changed |
| [messageActionChatEditTitle](/constructor/messageActionChatEditTitle/) | Group name changed. |
| [messageActionChatJoinedByLink](/constructor/messageActionChatJoinedByLink/) | A user joined the chat via an invite link |
| [messageActionChatJoinedByRequest](/constructor/messageActionChatJoinedByRequest/) | A user was accepted into the group by an admin |
| [messageActionChatMigrateTo](/constructor/messageActionChatMigrateTo/) | Indicates the chat was [migrated](https://core.telegram.org/api/channel) to the specified supergroup |
| [messageActionConferenceCall](/constructor/messageActionConferenceCall/) | Represents a [conference call »](https://core.telegram.org/api/group-calls#conference-calls), or an invitation to one if neither the `missed` nor `active` flags are set. If [call\_requests\_disabled](https://core.telegram.org/api/config#call-requests-disabled) is not set or false, an incoming [messageActionConferenceCall](/constructor/messageActionConferenceCall/) with the `missed` and `active` flags **not** set should trigger ringing and an incoming call screen, just like for one-on-one calls. |
| [messageActionContactSignUp](/constructor/messageActionContactSignUp/) | A contact just signed up to telegram |
| [messageActionCustomAction](/constructor/messageActionCustomAction/) | Custom action (most likely not supported by the current layer, an upgrade might be needed) |
| [messageActionEmpty](/constructor/messageActionEmpty/) | Empty constructor. |
| [messageActionGameScore](/constructor/messageActionGameScore/) | Someone scored in a game |
| [messageActionGeoProximityReached](/constructor/messageActionGeoProximityReached/) | A user of the chat is now in proximity of another user |
| [messageActionGiftCode](/constructor/messageActionGiftCode/) | Contains a [Telegram Premium giftcode link](https://core.telegram.org/api/links#premium-giftcode-links). |
| [messageActionGiftPremium](/constructor/messageActionGiftPremium/) | Info about a gifted Telegram Premium subscription This service message should be displayed below the appropriate sticker from the [inputStickerSetPremiumGifts »](/constructor/inputStickerSetPremiumGifts/) [stickerset »](https://core.telegram.org/api/stickers#stickersets): -   If `months == 1`, choose the sticker with emoji equal to "![1️⃣](https://core.telegram.org//telegram.org/img/emoji/40/31E283A3.png)" -   If `months == 3`, choose the sticker with emoji equal to "![2️⃣](https://core.telegram.org//telegram.org/img/emoji/40/32E283A3.png)" -   If `months == 6`, choose the sticker with emoji equal to "![3️⃣](https://core.telegram.org//telegram.org/img/emoji/40/33E283A3.png)" -   If `months == 12`, choose the sticker with emoji equal to "![4️⃣](https://core.telegram.org//telegram.org/img/emoji/40/34E283A3.png)" -   If `months == 24`, choose the sticker with emoji equal to "![5️⃣](https://core.telegram.org//telegram.org/img/emoji/40/35E283A3.png)" -   Otherwise, fallback to the sticker with emoji equal to "![1️⃣](https://core.telegram.org//telegram.org/img/emoji/40/31E283A3.png)" |
| [messageActionGiftStars](/constructor/messageActionGiftStars/) | You gifted or were gifted some [Telegram Stars](https://core.telegram.org/api/stars). This service message should be displayed below the appropriate sticker from the [inputStickerSetPremiumGifts »](/constructor/inputStickerSetPremiumGifts/) [stickerset »](https://core.telegram.org/api/stickers#stickersets): -   If `stars <= 1000`, choose the sticker with emoji equal to "![2️⃣](https://core.telegram.org//telegram.org/img/emoji/40/32E283A3.png)" -   If `stars < 2500`, choose the sticker with emoji equal to "![3️⃣](https://core.telegram.org//telegram.org/img/emoji/40/33E283A3.png)" -   Otherwise, choose the sticker with emoji equal to "![4️⃣](https://core.telegram.org//telegram.org/img/emoji/40/34E283A3.png)" |
| [messageActionGiftTon](/constructor/messageActionGiftTon/) | You were gifted some Grams. This service message should be displayed below the appropriate sticker from the [inputStickerSetTonGifts »](/constructor/inputStickerSetTonGifts/) [stickerset »](https://core.telegram.org/api/stickers#stickersets): -   If `crypto_amount <= 10_000_000_000`, choose the sticker with emoji equal to "![2️⃣](https://core.telegram.org//telegram.org/img/emoji/40/32E283A3.png)" -   If `crypto_amount <= 50_000_000_000`, choose the sticker with emoji equal to "![1️⃣](https://core.telegram.org//telegram.org/img/emoji/40/31E283A3.png)" -   Otherwise, choose the sticker with emoji equal to "![3️⃣](https://core.telegram.org//telegram.org/img/emoji/40/33E283A3.png)" |
| [messageActionGiveawayLaunch](/constructor/messageActionGiveawayLaunch/) | A [giveaway](https://core.telegram.org/api/giveaways) was started. |
| [messageActionGiveawayResults](/constructor/messageActionGiveawayResults/) | A [giveaway](https://core.telegram.org/api/giveaways) has ended. |
| [messageActionGroupCall](/constructor/messageActionGroupCall/) | A [video chat/livestream](https://core.telegram.org/api/group-calls#video-chats-livestreams) was started or terminated. |
| [messageActionGroupCallScheduled](/constructor/messageActionGroupCallScheduled/) | A [video chat/livestream](https://core.telegram.org/api/group-calls#video-chats-livestreams) was scheduled. |
| [messageActionHistoryClear](/constructor/messageActionHistoryClear/) | Chat history was cleared |
| [messageActionInviteToGroupCall](/constructor/messageActionInviteToGroupCall/) | A set of users was invited to a [video chat/livestream »](https://core.telegram.org/api/group-calls#video-chats-livestreams). |
| [messageActionNewCreatorPending](/constructor/messageActionNewCreatorPending/) | Service message: emitted to a supergroup when the [group/channel creator leaves the group »](https://core.telegram.org/api/channel#leaving-groups-channels), indicating that ownership transfer is pending. The `new_creator_id` user will become the new owner after 7 days if the old owner does not rejoin. Sent from the user ID of the old owner. |
| [messageActionNoForwardsRequest](/constructor/messageActionNoForwardsRequest/) | Emitted only in private chats if the other side requested to disable [content protection »](https://core.telegram.org/api/content-protection#for-users). |
| [messageActionNoForwardsToggle](/constructor/messageActionNoForwardsToggle/) | Emitted only in private chats when enabling or disabling [content protection »](https://core.telegram.org/api/content-protection#for-users). |
| [messageActionPaidMessagesPrice](/constructor/messageActionPaidMessagesPrice/) | The price of [paid messages »](https://core.telegram.org/api/paid-messages) in this chat was changed. |
| [messageActionPaidMessagesRefunded](/constructor/messageActionPaidMessagesRefunded/) | Sent from peer A to B, indicates that A refunded all [stars](https://core.telegram.org/api/stars) B previously paid to send messages to A, see [here »](https://core.telegram.org/api/paid-messages) for more info on paid messages. |
| [messageActionPaymentRefunded](/constructor/messageActionPaymentRefunded/) | Describes a payment refund (service message received by both users and bots). |
| [messageActionPaymentSent](/constructor/messageActionPaymentSent/) | A payment was sent |
| [messageActionPaymentSentMe](/constructor/messageActionPaymentSentMe/) | A user just sent a payment to me (a bot) |
| [messageActionPhoneCall](/constructor/messageActionPhoneCall/) | A phone call |
| [messageActionPinMessage](/constructor/messageActionPinMessage/) | A message was pinned |
| [messageActionPrizeStars](/constructor/messageActionPrizeStars/) | You won some [Telegram Stars](https://core.telegram.org/api/stars) in a [Telegram Star giveaway »](https://core.telegram.org/api/giveaways#star-giveaways). This service message should be displayed below the appropriate sticker from the [inputStickerSetPremiumGifts »](/constructor/inputStickerSetPremiumGifts/) [stickerset »](https://core.telegram.org/api/stickers#stickersets): -   If `stars <= 1000`, choose the sticker with emoji equal to "![2️⃣](https://core.telegram.org//telegram.org/img/emoji/40/32E283A3.png)" -   If `stars < 2500`, choose the sticker with emoji equal to "![3️⃣](https://core.telegram.org//telegram.org/img/emoji/40/33E283A3.png)" -   Otherwise, choose the sticker with emoji equal to "![4️⃣](https://core.telegram.org//telegram.org/img/emoji/40/34E283A3.png)" |
| [messageActionRequestedPeer](/constructor/messageActionRequestedPeer/) | Contains info about one or more peers that the we (the user) shared with the bot after clicking on a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button (service message sent by the user). |
| [messageActionRequestedPeerSentMe](/constructor/messageActionRequestedPeerSentMe/) | Contains info about one or more peers that the a user shared with the me (the bot) after clicking on a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button (service message received by the bot). |
| [messageActionScreenshotTaken](/constructor/messageActionScreenshotTaken/) | A screenshot of the chat was taken |
| [messageActionSecureValuesSent](/constructor/messageActionSecureValuesSent/) | Request for secure [telegram passport](https://core.telegram.org/passport) values was sent |
| [messageActionSecureValuesSentMe](/constructor/messageActionSecureValuesSentMe/) | Secure [telegram passport](https://core.telegram.org/passport) values were received |
| [messageActionSetChatTheme](/constructor/messageActionSetChatTheme/) | The chat theme was changed |
| [messageActionSetChatWallPaper](/constructor/messageActionSetChatWallPaper/) | The [wallpaper »](https://core.telegram.org/api/wallpapers) of the current chat was changed. |
| [messageActionSetMessagesTTL](/constructor/messageActionSetMessagesTTL/) | The Time-To-Live of messages in this chat was changed. |
| [messageActionStarGift](/constructor/messageActionStarGift/) | You received a [gift, see here »](https://core.telegram.org/api/gifts) for more info. |
| [messageActionStarGiftPurchaseOffer](/constructor/messageActionStarGiftPurchaseOffer/) | Contains an offer to purchase a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gift-purchase-offers), see [here »](https://core.telegram.org/api/gifts#collectible-gift-purchase-offers) for the full flow. |
| [messageActionStarGiftPurchaseOfferDeclined](/constructor/messageActionStarGiftPurchaseOfferDeclined/) | A [collectible gift purchase offer »](https://core.telegram.org/api/gifts#collectible-gift-purchase-offers) was declined, or the offer expired, see [here »](https://core.telegram.org/api/gifts#collectible-gift-purchase-offers) for the full flow. |
| [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/) | A [gift »](https://core.telegram.org/api/gifts) was upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| [messageActionSuggestBirthday](/constructor/messageActionSuggestBirthday/) | A new birthday was suggested using [users.suggestBirthday](/method/users.suggestBirthday/), see [here »](https://core.telegram.org/api/profile#birthday) for more info on birthdays in the API. |
| [messageActionSuggestedPostApproval](/constructor/messageActionSuggestedPostApproval/) | A [suggested post »](https://core.telegram.org/api/suggested-posts) was approved or rejected. |
| [messageActionSuggestedPostRefund](/constructor/messageActionSuggestedPostRefund/) | A [suggested post »](https://core.telegram.org/api/suggested-posts) was accepted and posted or scheduled, but either the channel deleted the posted/scheduled post before [stars\_suggested\_post\_age\_min](https://core.telegram.org/api/config#stars-suggested-post-age-min) seconds have elapsed, or the user refunded the payment for the stars used to pay for the suggested post. |
| [messageActionSuggestedPostSuccess](/constructor/messageActionSuggestedPostSuccess/) | A [suggested post »](https://core.telegram.org/api/suggested-posts) was successfully posted, and payment for it was successfully received. |
| [messageActionSuggestProfilePhoto](/constructor/messageActionSuggestProfilePhoto/) | A new profile picture was suggested using [photos.uploadContactProfilePhoto](/method/photos.uploadContactProfilePhoto/). |
| [messageActionTodoAppendTasks](/constructor/messageActionTodoAppendTasks/) | Items were appended to the [todo list »](https://core.telegram.org/api/todo). |
| [messageActionTodoCompletions](/constructor/messageActionTodoCompletions/) | Items were marked as completed or not completed in a [todo list »](https://core.telegram.org/api/todo). |
| [messageActionTopicCreate](/constructor/messageActionTopicCreate/) | A [forum topic](https://core.telegram.org/api/forum#forum-topics) was created. |
| [messageActionTopicEdit](/constructor/messageActionTopicEdit/) | [Forum topic](https://core.telegram.org/api/forum#forum-topics) information was edited. |
| [messageActionWebViewDataSent](/constructor/messageActionWebViewDataSent/) | Data from an opened [reply keyboard bot mini app](https://core.telegram.org/api/bots/webapps) was relayed to the bot that owns it (user side service message). Clients should display a service message with the text `Data from the «$text» button was transferred to the bot.` |
| [messageActionWebViewDataSentMe](/constructor/messageActionWebViewDataSentMe/) | Data from an opened [reply keyboard bot mini app](https://core.telegram.org/api/bots/webapps) was relayed to the bot that owns it (bot side service message). |
| [messageEmpty](/constructor/messageEmpty/) | Empty constructor, non-existent message. |
| [messageEntityBankCard](/constructor/messageEntityBankCard/) | Indicates a credit card number |
| [messageEntityBlockquote](/constructor/messageEntityBlockquote/) | Message entity representing a block quote. #### [End-to-end schema](/schema/end-to-end/) ``` ===101=== messageEntityBlockquote#020df5d0 offset:int length:int = MessageEntity; ``` #### API schema |
| [messageEntityBold](/constructor/messageEntityBold/) | Message entity representing **bold text**. #### [End-to-end schema](/schema/end-to-end/) ``` ===45=== messageEntityBold#bd610bc9 offset:int length:int = MessageEntity; ``` #### API schema |
| [messageEntityBotCommand](/constructor/messageEntityBotCommand/) | Message entity representing a bot /command #### [End-to-end schema](/schema/end-to-end/) ``` ===45=== messageEntityBotCommand#6cef8ac7 offset:int length:int = MessageEntity; ``` #### API schema |
| [messageEntityCashtag](/constructor/messageEntityCashtag/) | Message entity representing a **$cashtag**. |
| [messageEntityCode](/constructor/messageEntityCode/) | Message entity representing a `codeblock`. #### [End-to-end schema](/schema/end-to-end/) ``` ===45=== messageEntityCode#28a20571 offset:int length:int = MessageEntity; ``` #### API schema |
| [messageEntityCustomEmoji](/constructor/messageEntityCustomEmoji/) | Represents a custom emoji.   Note that this entity must wrap exactly one regular emoji (the one contained in [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/).`alt`) in the related text, otherwise the server will ignore it. #### [End-to-end schema](/schema/end-to-end/) ``` ===144=== messageEntityCustomEmoji#c8cf05f8 offset:int length:int document_id:long = MessageEntity; ``` #### API schema |
| [messageEntityEmail](/constructor/messageEntityEmail/) | Message entity representing an [email@example.com](mailto:email@example.com). #### [End-to-end schema](/schema/end-to-end/) ``` ===45=== messageEntityEmail#64e475c2 offset:int length:int = MessageEntity; ``` #### API schema |
| [messageEntityFormattedDate](/constructor/messageEntityFormattedDate/) | Represents a specific point in time, rendered as specified [here »](https://core.telegram.org/api/entities#date-entities) All flags are optional, with the following limitations: -   `relative` cannot combined with any other flag -   `short_time` and `long_time` cannot be combined with each other -   `short_date` and `long_date` cannot be combined with each other If any of the flags are combined, their rendering order in the text is the following: -   `day_of_week` -   `short_time`/`long_time` -   `short_date`/`long_date` |
| [messageEntityHashtag](/constructor/messageEntityHashtag/) | **#hashtag** message entity #### [End-to-end schema](/schema/end-to-end/) ``` ===45=== messageEntityHashtag#6f635b0d offset:int length:int = MessageEntity; ``` #### API schema |
| [messageEntityItalic](/constructor/messageEntityItalic/) | Message entity representing _italic text_. #### [End-to-end schema](/schema/end-to-end/) ``` ===45=== messageEntityItalic#826f8b60 offset:int length:int = MessageEntity; ``` #### API schema |
| [messageEntityMention](/constructor/messageEntityMention/) | Message entity [mentioning](https://core.telegram.org/api/mentions) a user by `@username`; [messageEntityMentionName](/constructor/messageEntityMentionName/) can also be used to mention users by their ID. #### [End-to-end schema](/schema/end-to-end/) ``` ===45=== messageEntityMention#fa04579d offset:int length:int = MessageEntity; ``` #### API schema |
| [messageEntityMentionName](/constructor/messageEntityMentionName/) | Message entity representing a [user mention](https://core.telegram.org/api/mentions): for _creating_ a mention use [inputMessageEntityMentionName](/constructor/inputMessageEntityMentionName/). |
| [messageEntityPhone](/constructor/messageEntityPhone/) | Message entity representing a phone number. |
| [messageEntityPre](/constructor/messageEntityPre/) | Message entity representing a preformatted `codeblock`, allowing the user to specify a programming language for the codeblock. #### [End-to-end schema](/schema/end-to-end/) ``` ===45=== messageEntityPre#73924be0 offset:int length:int language:string = MessageEntity; ``` #### API schema |
| [messageEntitySpoiler](/constructor/messageEntitySpoiler/) | Message entity representing a spoiler #### [End-to-end schema](/schema/end-to-end/) ``` ===144=== messageEntitySpoiler#32ca960f offset:int length:int = MessageEntity; ``` #### API schema |
| [messageEntityStrike](/constructor/messageEntityStrike/) | Message entity representing strikethrough text. #### [End-to-end schema](/schema/end-to-end/) ``` ===101=== messageEntityStrike#bf0693d4 offset:int length:int = MessageEntity; ``` #### API schema |
| [messageEntityTextUrl](/constructor/messageEntityTextUrl/) | Message entity representing a [text url](https://google.com): for in-text urls like [https://google.com](https://google.com) use [messageEntityUrl](/constructor/messageEntityUrl/). Note that an additional confirmation popup with the full URL must be displayed to the user before opening this link, unless the domain satisfies the conditions specified in the [domain whitelist documentation »](https://core.telegram.org/api/config#whitelisted-domains). #### [End-to-end schema](/schema/end-to-end/) ``` ===45=== messageEntityTextUrl#76a6d327 offset:int length:int url:string = MessageEntity; ``` #### API schema |
| [messageEntityUnderline](/constructor/messageEntityUnderline/) | Message entity representing underlined text. #### [End-to-end schema](/schema/end-to-end/) ``` ===101=== messageEntityUnderline#9c4e7e8b offset:int length:int = MessageEntity; ``` #### API schema |
| [messageEntityUnknown](/constructor/messageEntityUnknown/) | Unknown message entity #### [End-to-end schema](/schema/end-to-end/) ``` ===45=== messageEntityUnknown#bb92ba95 offset:int length:int = MessageEntity; ``` #### API schema |
| [messageEntityUrl](/constructor/messageEntityUrl/) | Message entity representing an in-text url: [https://google.com](https://google.com); for [text urls](https://google.com), use [messageEntityTextUrl](/constructor/messageEntityTextUrl/). #### [End-to-end schema](/schema/end-to-end/) ``` ===45=== messageEntityUrl#6ed02538 offset:int length:int = MessageEntity; ``` #### API schema |
| [messageExtendedMedia](/constructor/messageExtendedMedia/) | Already purchased paid media, [see here »](https://core.telegram.org/api/paid-media) for more info. |
| [messageExtendedMediaPreview](/constructor/messageExtendedMediaPreview/) | Paid media preview for not yet purchased paid media, [see here »](https://core.telegram.org/api/paid-media) for more info. |
| [messageFwdHeader](/constructor/messageFwdHeader/) | Info about a forwarded message |
| [messageMediaContact](/constructor/messageMediaContact/) | Attached contact. |
| [messageMediaDice](/constructor/messageMediaDice/) | [Dice-based animated sticker](https://core.telegram.org/api/dice) |
| [messageMediaDocument](/constructor/messageMediaDocument/) | Document (video, audio, voice, sticker, any media type except photo) |
| [messageMediaEmpty](/constructor/messageMediaEmpty/) | Empty constructor. |
| [messageMediaGame](/constructor/messageMediaGame/) | Telegram game |
| [messageMediaGeo](/constructor/messageMediaGeo/) | Attached map. |
| [messageMediaGeoLive](/constructor/messageMediaGeoLive/) | Indicates a [live geolocation](https://core.telegram.org/api/live-location) |
| [messageMediaGiveaway](/constructor/messageMediaGiveaway/) | Contains info about a [giveaway, see here »](https://core.telegram.org/api/giveaways) for more info. |
| [messageMediaGiveawayResults](/constructor/messageMediaGiveawayResults/) | A [giveaway](https://core.telegram.org/api/giveaways) with public winners has finished, this constructor contains info about the winners. |
| [messageMediaInvoice](/constructor/messageMediaInvoice/) | Invoice |
| [messageMediaPaidMedia](/constructor/messageMediaPaidMedia/) | [Paid media, see here »](https://core.telegram.org/api/paid-media) for more info. |
| [messageMediaPhoto](/constructor/messageMediaPhoto/) | Attached photo. |
| [messageMediaPoll](/constructor/messageMediaPoll/) | Poll |
| [messageMediaStory](/constructor/messageMediaStory/) | Represents a forwarded [story](https://core.telegram.org/api/stories) or a story mention. |
| [messageMediaToDo](/constructor/messageMediaToDo/) | Represents a [todo list »](https://core.telegram.org/api/todo). |
| [messageMediaUnsupported](/constructor/messageMediaUnsupported/) | Current version of the client does not support this media type. |
| [messageMediaVenue](/constructor/messageMediaVenue/) | Venue |
| [messageMediaVideoStream](/constructor/messageMediaVideoStream/) | Identifies the active group call associated with a [live story »](https://core.telegram.org/api/group-calls#live-stories). |
| [messageMediaWebPage](/constructor/messageMediaWebPage/) | Preview of webpage |
| [messagePeerReaction](/constructor/messagePeerReaction/) | How a certain peer reacted to the message |
| [messagePeerVote](/constructor/messagePeerVote/) | How a peer voted in a poll |
| [messagePeerVoteInputOption](/constructor/messagePeerVoteInputOption/) | How a peer voted in a poll (reduced constructor, returned if an `option` was provided to [messages.getPollVotes](/method/messages.getPollVotes/)) |
| [messagePeerVoteMultiple](/constructor/messagePeerVoteMultiple/) | How a peer voted in a multiple-choice poll |
| [messageRange](/constructor/messageRange/) | Indicates a range of chat messages |
| [messageReactions](/constructor/messageReactions/) | [Message reactions »](https://core.telegram.org/api/reactions) |
| [messageReactor](/constructor/messageReactor/) | Info about a user in the [paid Star reactions leaderboard](https://core.telegram.org/api/reactions#paid-reactions) for a message. |
| [messageReplies](/constructor/messageReplies/) | Info about [the comment section of a channel post, a simple message thread, a forum topic, or a direct messages topic](https://core.telegram.org/api/threads) (all features ultimately based on message threads). |
| [messageReplyHeader](/constructor/messageReplyHeader/) | Message replies and [thread](https://core.telegram.org/api/threads) information |
| [messageReplyStoryHeader](/constructor/messageReplyStoryHeader/) | Represents a reply to a [story](https://core.telegram.org/api/stories) |
| [messageReportOption](/constructor/messageReportOption/) | Report menu option |
| [messages.affectedFoundMessages](/constructor/messages.affectedFoundMessages/) | Messages found and affected by changes |
| [messages.affectedHistory](/constructor/messages.affectedHistory/) | Affected part of communication history with the user or in a chat. |
| [messages.affectedMessages](/constructor/messages.affectedMessages/) | Events affected by operation |
| [messages.allStickers](/constructor/messages.allStickers/) | Info about all installed stickers |
| [messages.allStickersNotModified](/constructor/messages.allStickersNotModified/) | Info about all installed stickers hasn't changed |
| [messages.archivedStickers](/constructor/messages.archivedStickers/) | Archived stickersets |
| [messages.availableEffects](/constructor/messages.availableEffects/) | The full list of usable [animated message effects »](https://core.telegram.org/api/effects). |
| [messages.availableEffectsNotModified](/constructor/messages.availableEffectsNotModified/) | The full list of usable [animated message effects »](https://core.telegram.org/api/effects) hasn't changed. |
| [messages.availableReactions](/constructor/messages.availableReactions/) | Animations and metadata associated with [message reactions »](https://core.telegram.org/api/reactions) |
| [messages.availableReactionsNotModified](/constructor/messages.availableReactionsNotModified/) | No new reactions are available |
| [messages.botApp](/constructor/messages.botApp/) | Contains information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps) |
| [messages.botCallbackAnswer](/constructor/messages.botCallbackAnswer/) | Callback answer sent by the bot in response to a button press |
| [messages.botPreparedInlineMessage](/constructor/messages.botPreparedInlineMessage/) | Represents a [prepared inline message saved by a bot, to be sent to the user via a web app »](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message) |
| [messages.botResults](/constructor/messages.botResults/) | Result of a query to an inline bot |
| [messages.channelMessages](/constructor/messages.channelMessages/) | Channel messages |
| [messages.chatAdminsWithInvites](/constructor/messages.chatAdminsWithInvites/) | Info about chat invites generated by admins. |
| [messages.chatFull](/constructor/messages.chatFull/) | Full info about a [channel](https://core.telegram.org/api/channel#channels), [supergroup](https://core.telegram.org/api/channel#supergroups), [gigagroup](https://core.telegram.org/api/channel#gigagroups) or [basic group](https://core.telegram.org/api/channel#basic-groups). |
| [messages.chatInviteImporters](/constructor/messages.chatInviteImporters/) | Info about the users that joined the chat using a specific chat invite |
| [messages.chats](/constructor/messages.chats/) | List of chats with auxiliary data. |
| [messages.chatsSlice](/constructor/messages.chatsSlice/) | Partial list of chats, more would have to be fetched with [pagination](https://core.telegram.org/api/offsets) |
| [messages.checkedHistoryImportPeer](/constructor/messages.checkedHistoryImportPeer/) | Contains a confirmation text to be shown to the user, upon [importing chat history, click here for more info »](https://core.telegram.org/api/import). |
| [messages.dhConfig](/constructor/messages.dhConfig/) | New set of configuring parameters. |
| [messages.dhConfigNotModified](/constructor/messages.dhConfigNotModified/) | Configuring parameters did not change. |
| [messages.dialogFilters](/constructor/messages.dialogFilters/) | [Folder and folder tags](https://core.telegram.org/api/folders) information |
| [messages.dialogs](/constructor/messages.dialogs/) | Full list of chats with messages and auxiliary data. |
| [messages.dialogsNotModified](/constructor/messages.dialogsNotModified/) | Dialogs haven't changed |
| [messages.dialogsSlice](/constructor/messages.dialogsSlice/) | Incomplete list of dialogs with messages and auxiliary data. |
| [messages.discussionMessage](/constructor/messages.discussionMessage/) | Information about a [message thread](https://core.telegram.org/api/threads) |
| [messages.emojiGameDiceInfo](/constructor/messages.emojiGameDiceInfo/) | Dice game information. |
| [messages.emojiGameOutcome](/constructor/messages.emojiGameOutcome/) | Dice game outcome. |
| [messages.emojiGameUnavailable](/constructor/messages.emojiGameUnavailable/) | Dice game information. |
| [messages.emojiGroups](/constructor/messages.emojiGroups/) | Represents a list of [emoji categories](https://core.telegram.org/api/emoji-categories). |
| [messages.emojiGroupsNotModified](/constructor/messages.emojiGroupsNotModified/) | The list of [emoji categories](https://core.telegram.org/api/emoji-categories) hasn't changed. |
| [messages.exportedChatInvite](/constructor/messages.exportedChatInvite/) | Info about a chat invite |
| [messages.exportedChatInviteReplaced](/constructor/messages.exportedChatInviteReplaced/) | The specified chat invite was replaced with another one |
| [messages.exportedChatInvites](/constructor/messages.exportedChatInvites/) | Info about chat invites exported by a certain admin. |
| [messages.favedStickers](/constructor/messages.favedStickers/) | Favorited stickers |
| [messages.favedStickersNotModified](/constructor/messages.favedStickersNotModified/) | No new favorited stickers were found |
| [messages.featuredStickers](/constructor/messages.featuredStickers/) | Featured stickersets |
| [messages.featuredStickersNotModified](/constructor/messages.featuredStickersNotModified/) | Featured stickers haven't changed |
| [messages.forumTopics](/constructor/messages.forumTopics/) | Contains information about multiple [forum topics](https://core.telegram.org/api/forum#forum-topics) |
| [messages.foundStickers](/constructor/messages.foundStickers/) | Found stickers |
| [messages.foundStickerSets](/constructor/messages.foundStickerSets/) | Found stickersets |
| [messages.foundStickerSetsNotModified](/constructor/messages.foundStickerSetsNotModified/) | No further results were found |
| [messages.foundStickersNotModified](/constructor/messages.foundStickersNotModified/) | No new stickers were found for the specified query |
| [messages.highScores](/constructor/messages.highScores/) | Highscores in a game |
| [messages.historyImport](/constructor/messages.historyImport/) | ID of a specific [chat import session, click here for more info »](https://core.telegram.org/api/import). |
| [messages.historyImportParsed](/constructor/messages.historyImportParsed/) | Contains information about a chat export file [generated by a foreign chat app, click here for more info](https://core.telegram.org/api/import).   If neither the `pm` or `group` flags are set, the specified chat export was generated from a chat of unknown type. |
| [messages.inactiveChats](/constructor/messages.inactiveChats/) | Inactive chat list |
| [messages.invitedUsers](/constructor/messages.invitedUsers/) | Contains info about successfully or unsuccessfully [invited »](https://core.telegram.org/api/invites#direct-invites) users. |
| [messages.messageEditData](/constructor/messages.messageEditData/) | Message edit data for media |
| [messages.messageReactionsList](/constructor/messages.messageReactionsList/) | List of peers that reacted to a specific message |
| [messages.messages](/constructor/messages.messages/) | Full list of messages with auxiliary data. |
| [messages.messagesNotModified](/constructor/messages.messagesNotModified/) | No new messages matching the query were found |
| [messages.messagesSlice](/constructor/messages.messagesSlice/) | Incomplete list of messages and auxiliary data. |
| [messages.messageViews](/constructor/messages.messageViews/) | View, forward counter + info about replies |
| [messages.myStickers](/constructor/messages.myStickers/) | The list of [stickersets owned by the current account »](https://core.telegram.org/api/stickers). |
| [messages.peerDialogs](/constructor/messages.peerDialogs/) | Dialog info of multiple peers |
| [messages.peerSettings](/constructor/messages.peerSettings/) | Peer settings |
| [messages.preparedInlineMessage](/constructor/messages.preparedInlineMessage/) | Represents a [prepared inline message received via a bot's mini app, that can be sent to some chats »](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message) |
| [messages.quickReplies](/constructor/messages.quickReplies/) | Info about [quick reply shortcuts »](https://core.telegram.org/api/business#quick-reply-shortcuts). |
| [messages.quickRepliesNotModified](/constructor/messages.quickRepliesNotModified/) | Info about [quick reply shortcuts »](https://core.telegram.org/api/business#quick-reply-shortcuts) hasn't changed. |
| [messages.reactions](/constructor/messages.reactions/) | List of [message reactions](https://core.telegram.org/api/reactions) |
| [messages.reactionsNotModified](/constructor/messages.reactionsNotModified/) | The server-side list of [message reactions](https://core.telegram.org/api/reactions) hasn't changed |
| [messages.recentStickers](/constructor/messages.recentStickers/) | Recently used stickers |
| [messages.recentStickersNotModified](/constructor/messages.recentStickersNotModified/) | No new recent sticker was found |
| [messages.savedDialogs](/constructor/messages.savedDialogs/) | Represents some [saved message dialogs »](https://core.telegram.org/api/saved-messages). |
| [messages.savedDialogsNotModified](/constructor/messages.savedDialogsNotModified/) | The saved dialogs haven't changed |
| [messages.savedDialogsSlice](/constructor/messages.savedDialogsSlice/) | Incomplete list of [saved message dialogs »](https://core.telegram.org/api/saved-messages) with messages and auxiliary data. |
| [messages.savedGifs](/constructor/messages.savedGifs/) | Saved gifs |
| [messages.savedGifsNotModified](/constructor/messages.savedGifsNotModified/) | No new saved gifs were found |
| [messages.savedReactionTags](/constructor/messages.savedReactionTags/) | List of [reaction tag »](https://core.telegram.org/api/saved-messages#tags) names assigned by the user. |
| [messages.savedReactionTagsNotModified](/constructor/messages.savedReactionTagsNotModified/) | The list of [reaction tag »](https://core.telegram.org/api/saved-messages#tags) names assigned by the user hasn't changed. |
| [messages.searchCounter](/constructor/messages.searchCounter/) | Indicates how many results would be found by a [messages.search](/method/messages.search/) call with the same parameters |
| [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/) | Information about found messages sent on a specific day |
| [messages.searchResultsPositions](/constructor/messages.searchResultsPositions/) | Information about sparse positions of messages |
| [messages.sentEncryptedFile](/constructor/messages.sentEncryptedFile/) | Message with a file enclosure sent to a protected chat |
| [messages.sentEncryptedMessage](/constructor/messages.sentEncryptedMessage/) | Message without file attachments sent to an encrypted file. |
| [messages.sponsoredMessages](/constructor/messages.sponsoredMessages/) | A set of sponsored messages associated to a channel |
| [messages.sponsoredMessagesEmpty](/constructor/messages.sponsoredMessagesEmpty/) | No sponsored messages are available. |
| [messages.stickers](/constructor/messages.stickers/) | Found stickers |
| [messages.stickerSet](/constructor/messages.stickerSet/) | Stickerset and stickers inside it |
| [messages.stickerSetInstallResultArchive](/constructor/messages.stickerSetInstallResultArchive/) | The stickerset was installed, but since there are too many stickersets some were archived |
| [messages.stickerSetInstallResultSuccess](/constructor/messages.stickerSetInstallResultSuccess/) | The stickerset was installed successfully |
| [messages.stickerSetNotModified](/constructor/messages.stickerSetNotModified/) | The stickerset hasn't changed |
| [messages.stickersNotModified](/constructor/messages.stickersNotModified/) | No new stickers were found for the given query |
| [messages.transcribedAudio](/constructor/messages.transcribedAudio/) | [Transcribed text from a voice message »](https://core.telegram.org/api/transcribe) |
| [messages.translateResult](/constructor/messages.translateResult/) | Translated text with [entities](https://core.telegram.org/api/entities) |
| [messages.votesList](/constructor/messages.votesList/) | How users voted in a poll |
| [messages.webPage](/constructor/messages.webPage/) | Represents an Instant View webpage. |
| [messages.webPagePreview](/constructor/messages.webPagePreview/) | Represents a webpage preview. |
| [messageService](/constructor/messageService/) | Indicates a service message |
| [messageViews](/constructor/messageViews/) | View, forward counter + info about replies of a specific message |
| [missingInvitee](/constructor/missingInvitee/) | Info about why a specific user could not be [invited »](https://core.telegram.org/api/invites#direct-invites). |
| [monoForumDialog](/constructor/monoForumDialog/) | Represents a [monoforum topic »](https://core.telegram.org/api/monoforum). |
| [myBoost](/constructor/myBoost/) | Contains information about a single [boost slot »](https://core.telegram.org/api/boost). |
| [nearestDc](/constructor/nearestDc/) | Nearest data center, according to geo-ip. |
| [notificationSoundDefault](/constructor/notificationSoundDefault/) | Indicates the default notification sound should be used |
| [notificationSoundLocal](/constructor/notificationSoundLocal/) | Indicates a specific local notification sound should be used |
| [notificationSoundNone](/constructor/notificationSoundNone/) | No notification sound should be used |
| [notificationSoundRingtone](/constructor/notificationSoundRingtone/) | A specific previously uploaded notification sound should be used |
| [notifyBroadcasts](/constructor/notifyBroadcasts/) | Channel notification settings |
| [notifyChats](/constructor/notifyChats/) | Notifications generated by all groups. |
| [notifyForumTopic](/constructor/notifyForumTopic/) | Notifications generated by a [topic](https://core.telegram.org/api/forum#forum-topics) in a [forum](https://core.telegram.org/api/forum). |
| [notifyPeer](/constructor/notifyPeer/) | Notifications generated by a certain user or group. |
| [notifyUsers](/constructor/notifyUsers/) | Notifications generated by all users. |
| [null](/constructor/null/) | Corresponds to an arbitrary empty object. |
| [outboxReadDate](/constructor/outboxReadDate/) | Exact read date of a private message we sent to another user. |
| [page](/constructor/page/) | [Instant view](https://instantview.telegram.org) page |
| [pageBlockAnchor](/constructor/pageBlockAnchor/) | Link to section within the page itself (like `<a href="#target">anchor</a>`) |
| [pageBlockAudio](/constructor/pageBlockAudio/) | Audio |
| [pageBlockAuthorDate](/constructor/pageBlockAuthorDate/) | Author and date of creation of article |
| [pageBlockBlockquote](/constructor/pageBlockBlockquote/) | Quote (equivalent to the HTML `<blockquote>`) |
| [pageBlockChannel](/constructor/pageBlockChannel/) | Reference to a telegram channel |
| [pageBlockCollage](/constructor/pageBlockCollage/) | Collage of media |
| [pageBlockCover](/constructor/pageBlockCover/) | A page cover |
| [pageBlockDetails](/constructor/pageBlockDetails/) | A collapsible details block |
| [pageBlockDivider](/constructor/pageBlockDivider/) | An empty block separating a page |
| [pageBlockEmbed](/constructor/pageBlockEmbed/) | An embedded webpage |
| [pageBlockEmbedPost](/constructor/pageBlockEmbedPost/) | An embedded post |
| [pageBlockFooter](/constructor/pageBlockFooter/) | Page footer |
| [pageBlockHeader](/constructor/pageBlockHeader/) | Page header |
| [pageBlockKicker](/constructor/pageBlockKicker/) | Kicker |
| [pageBlockList](/constructor/pageBlockList/) | Unordered list of IV blocks |
| [pageBlockMap](/constructor/pageBlockMap/) | A map |
| [pageBlockOrderedList](/constructor/pageBlockOrderedList/) | Ordered list of IV blocks |
| [pageBlockParagraph](/constructor/pageBlockParagraph/) | A paragraph |
| [pageBlockPhoto](/constructor/pageBlockPhoto/) | A photo |
| [pageBlockPreformatted](/constructor/pageBlockPreformatted/) | Preformatted (`<pre>` text) |
| [pageBlockPullquote](/constructor/pageBlockPullquote/) | Pullquote |
| [pageBlockRelatedArticles](/constructor/pageBlockRelatedArticles/) | Related articles |
| [pageBlockSlideshow](/constructor/pageBlockSlideshow/) | Slideshow |
| [pageBlockSubheader](/constructor/pageBlockSubheader/) | Subheader |
| [pageBlockSubtitle](/constructor/pageBlockSubtitle/) | Subtitle |
| [pageBlockTable](/constructor/pageBlockTable/) | Table |
| [pageBlockTitle](/constructor/pageBlockTitle/) | Title |
| [pageBlockUnsupported](/constructor/pageBlockUnsupported/) | Unsupported IV element |
| [pageBlockVideo](/constructor/pageBlockVideo/) | Video |
| [pageCaption](/constructor/pageCaption/) | Page caption |
| [pageListItemBlocks](/constructor/pageListItemBlocks/) | List item |
| [pageListItemText](/constructor/pageListItemText/) | List item |
| [pageListOrderedItemBlocks](/constructor/pageListOrderedItemBlocks/) | Ordered list of [IV](https://instantview.telegram.org) blocks |
| [pageListOrderedItemText](/constructor/pageListOrderedItemText/) | Ordered list of text items |
| [pageRelatedArticle](/constructor/pageRelatedArticle/) | Related article |
| [pageTableCell](/constructor/pageTableCell/) | Table cell |
| [pageTableRow](/constructor/pageTableRow/) | Table row |
| [paidReactionPrivacyAnonymous](/constructor/paidReactionPrivacyAnonymous/) | Send paid reactions anonymously. |
| [paidReactionPrivacyDefault](/constructor/paidReactionPrivacyDefault/) | Uses the default reaction privacy, set using [messages.togglePaidReactionPrivacy](/method/messages.togglePaidReactionPrivacy/). |
| [paidReactionPrivacyPeer](/constructor/paidReactionPrivacyPeer/) | Send paid reactions as the specified peer, fetched using [channels.getSendAs](/method/channels.getSendAs/) with the `for_paid_reactions` flag set. |
| [passkey](/constructor/passkey/) | Human-readable info about a passkey associated to an account, returned when [creating a passkey »](https://core.telegram.org/api/passkeys#creating-a-passkey) or [listing passkeys »](https://core.telegram.org/api/passkeys#list-passkeys). |
| [passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow](/constructor/passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow/) | This key derivation algorithm defines that [SRP 2FA login](/api/srp/) must be used |
| [passwordKdfAlgoUnknown](/constructor/passwordKdfAlgoUnknown/) | Unknown KDF (most likely, the client is outdated and does not support the specified KDF algorithm) |
| [paymentCharge](/constructor/paymentCharge/) | Payment identifier |
| [paymentFormMethod](/constructor/paymentFormMethod/) | Represents an additional payment method |
| [paymentRequestedInfo](/constructor/paymentRequestedInfo/) | Order info provided by the user |
| [payments.bankCardData](/constructor/payments.bankCardData/) | Credit card info, provided by the card's bank(s) |
| [payments.checkCanSendGiftResultFail](/constructor/payments.checkCanSendGiftResultFail/) | The specified gift cannot be sent yet for the specified reason. |
| [payments.checkCanSendGiftResultOk](/constructor/payments.checkCanSendGiftResultOk/) | The specified gift can be sent. |
| [payments.checkedGiftCode](/constructor/payments.checkedGiftCode/) | Contains info about a [Telegram Premium giftcode link](https://core.telegram.org/api/links#premium-giftcode-links). |
| [payments.connectedStarRefBots](/constructor/payments.connectedStarRefBots/) | Active [affiliations](https://core.telegram.org/api/bots/referrals#becoming-an-affiliate) |
| [payments.exportedInvoice](/constructor/payments.exportedInvoice/) | Exported [invoice deep link](https://core.telegram.org/api/links#invoice-links) |
| [payments.giveawayInfo](/constructor/payments.giveawayInfo/) | Contains info about an ongoing [giveaway](https://core.telegram.org/api/giveaways). If neither the `participating`, `joined_too_early_date`, `admin_disallowed_chat_id` or `disallowed_country` flags are set, the user is not currently participating in the giveaway but could participate by joining all the channels specified in the [messageMediaGiveaway](/constructor/messageMediaGiveaway/).`channels` field. |
| [payments.giveawayInfoResults](/constructor/payments.giveawayInfoResults/) | A [giveaway](https://core.telegram.org/api/giveaways) has ended. |
| [payments.paymentForm](/constructor/payments.paymentForm/) | Payment form |
| [payments.paymentFormStarGift](/constructor/payments.paymentFormStarGift/) | Represents a payment form for a [gift, see here »](https://core.telegram.org/api/gifts) for more info. |
| [payments.paymentFormStars](/constructor/payments.paymentFormStars/) | Represents a payment form, for payments to be using [Telegram Stars, see here »](https://core.telegram.org/api/stars) for more info. |
| [payments.paymentReceipt](/constructor/payments.paymentReceipt/) | Receipt |
| [payments.paymentReceiptStars](/constructor/payments.paymentReceiptStars/) | Receipt for [payment made using Telegram Stars](https://core.telegram.org/api/stars). |
| [payments.paymentResult](/constructor/payments.paymentResult/) | Payment result |
| [payments.paymentVerificationNeeded](/constructor/payments.paymentVerificationNeeded/) | Payment was not successful, additional verification is needed |
| [payments.resaleStarGifts](/constructor/payments.resaleStarGifts/) | List of gifts currently on [resale »](https://core.telegram.org/api/gifts#reselling-collectible-gifts). |
| [payments.savedInfo](/constructor/payments.savedInfo/) | Saved server-side order information |
| [payments.savedStarGifts](/constructor/payments.savedStarGifts/) | Represents a list of [gifts](https://core.telegram.org/api/gifts). |
| [payments.starGiftActiveAuctions](/constructor/payments.starGiftActiveAuctions/) | Describes all currently active [gift auctions](https://core.telegram.org/api/auctions) **where the user has placed a bid**. |
| [payments.starGiftActiveAuctionsNotModified](/constructor/payments.starGiftActiveAuctionsNotModified/) | The list of currently active [gift auctions](https://core.telegram.org/api/auctions) **where the user has placed a bid** hasn't changed. |
| [payments.starGiftAuctionAcquiredGifts](/constructor/payments.starGiftAuctionAcquiredGifts/) | Describes all the gifts that the current user won in an [auction](https://core.telegram.org/api/auctions). |
| [payments.starGiftAuctionState](/constructor/payments.starGiftAuctionState/) | Describes a [collectible gift auction »](https://core.telegram.org/api/auctions). |
| [payments.starGiftCollections](/constructor/payments.starGiftCollections/) | Represents a list of [star gift collections »](https://core.telegram.org/api/gifts#gift-collections). |
| [payments.starGiftCollectionsNotModified](/constructor/payments.starGiftCollectionsNotModified/) | The list of [star gift collections »](https://core.telegram.org/api/gifts#gift-collections) hasn't changed. |
| [payments.starGifts](/constructor/payments.starGifts/) | Available [gifts »](https://core.telegram.org/api/gifts). |
| [payments.starGiftsNotModified](/constructor/payments.starGiftsNotModified/) | The list of available [gifts »](https://core.telegram.org/api/gifts) hasn't changed. |
| [payments.starGiftUpgradeAttributes](/constructor/payments.starGiftUpgradeAttributes/) | List of just the collectible attributes that may appear for a gift type once it's upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| [payments.starGiftUpgradePreview](/constructor/payments.starGiftUpgradePreview/) | A preview of the possible attributes (chosen randomly) a [gift »](https://core.telegram.org/api/gifts) can receive after upgrading it to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts), see [here »](https://core.telegram.org/api/gifts#collectible-gifts) for more info. |
| [payments.starGiftWithdrawalUrl](/constructor/payments.starGiftWithdrawalUrl/) | A URL that can be used to import the exported NFT on Fragment. |
| [payments.starsRevenueAdsAccountUrl](/constructor/payments.starsRevenueAdsAccountUrl/) | Contains a URL leading to a page where the user will be able to place ads for the channel/bot, paying using [Telegram Stars](https://core.telegram.org/api/stars#paying-for-ads). |
| [payments.starsRevenueStats](/constructor/payments.starsRevenueStats/) | [Star revenue statistics, see here »](https://core.telegram.org/api/stars) for more info. Note that all balances and currency amounts and graph values are in Stars. |
| [payments.starsRevenueWithdrawalUrl](/constructor/payments.starsRevenueWithdrawalUrl/) | Contains the URL to use to [withdraw Telegram Star revenue](https://core.telegram.org/api/stars#withdrawing-revenue). |
| [payments.starsStatus](/constructor/payments.starsStatus/) | Info about the current [Telegram Star subscriptions, balance and transaction history »](https://core.telegram.org/api/stars#balance-and-transaction-history). |
| [payments.suggestedStarRefBots](/constructor/payments.suggestedStarRefBots/) | A list of suggested [mini apps](https://core.telegram.org/api/bots/webapps) with available [affiliate programs](https://core.telegram.org/api/bots/referrals) |
| [payments.uniqueStarGift](/constructor/payments.uniqueStarGift/) | Represents a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| [payments.uniqueStarGiftValueInfo](/constructor/payments.uniqueStarGiftValueInfo/) | Information about the value of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| [payments.ValidatedRequestedInfo](/constructor/payments.validatedRequestedInfo/) | Validated user-provided info |
| [paymentSavedCredentialsCard](/constructor/paymentSavedCredentialsCard/) | Saved credit card |
| [peerBlocked](/constructor/peerBlocked/) | Information about a blocked peer |
| [peerChannel](/constructor/peerChannel/) | Channel/supergroup |
| [peerChat](/constructor/peerChat/) | Group. |
| [peerColor](/constructor/peerColor/) | Represents a [color palette »](https://core.telegram.org/api/colors). |
| [peerColorCollectible](/constructor/peerColorCollectible/) | Represents a [color palette »](https://core.telegram.org/api/colors) associated to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts), see [here »](https://core.telegram.org/api/colors#collectible-gift-palettes) for more info. |
| [peerLocated](/constructor/peerLocated/) | Peer geolocated nearby |
| [peerNotifySettings](/constructor/peerNotifySettings/) | Notification settings. |
| [peerSelfLocated](/constructor/peerSelfLocated/) | Current peer |
| [peerSettings](/constructor/peerSettings/) | List of actions that are possible when interacting with this user, to be shown as suggested actions in the [chat action bar »](https://core.telegram.org/api/action-bar), see [here »](https://core.telegram.org/api/action-bar) for more info. |
| [peerStories](/constructor/peerStories/) | [Stories](https://core.telegram.org/api/stories) associated to a peer |
| [peerUser](/constructor/peerUser/) | Chat partner |
| [pendingSuggestion](/constructor/pendingSuggestion/) | Represents a [custom pending suggestion »](https://core.telegram.org/api/config#custom-suggestions). |
| [phone.exportedGroupCallInvite](/constructor/phone.exportedGroupCallInvite/) | An invite to a group call or livestream |
| [phone.groupCall](/constructor/phone.groupCall/) | Contains group call information and an initial participant page, see [getting info about a group call »](https://core.telegram.org/api/group-calls#getting-info-about-a-group-call). |
| [phone.groupCallStars](/constructor/phone.groupCallStars/) | Contains a live story's total donations and top donors, see [paid live story donations »](https://core.telegram.org/api/group-calls#paid-live-story-donations). |
| [phone.groupCallStreamChannels](/constructor/phone.groupCallStreamChannels/) | Contains the available channels of an RTMP-mode group call, see [playing an RTMP livestream »](https://core.telegram.org/api/group-calls#rtmp-mode). |
| [phone.groupCallStreamRtmpUrl](/constructor/phone.groupCallStreamRtmpUrl/) | Contains the RTMP publishing URL and secret stream key, see [creating and publishing an RTMP livestream »](https://core.telegram.org/api/group-calls#creating-and-publishing-an-rtmp-livestream). |
| [phone.groupParticipants](/constructor/phone.groupParticipants/) | Contains a page of group call participants, see [getting info about a group call »](https://core.telegram.org/api/group-calls#getting-info-about-a-group-call). |
| [phone.joinAsPeers](/constructor/phone.joinAsPeers/) | Contains the peers that may be used to join a video chat/livestream, see [joining on behalf of owned channels »](https://core.telegram.org/api/group-calls#joining-a-group-call-on-behalf-of-owned-channels). |
| [phone.phoneCall](/constructor/phone.phoneCall/) | A VoIP phone call |
| [phoneCall](/constructor/phoneCall/) | Phone call, see [here »](https://core.telegram.org/api/calls) for more info on the full flow. |
| [phoneCallAccepted](/constructor/phoneCallAccepted/) | An accepted phone call, see [here »](https://core.telegram.org/api/calls) for more info on the full flow. |
| [phoneCallDiscarded](/constructor/phoneCallDiscarded/) | Indicates a discarded phone call, see [here »](https://core.telegram.org/api/calls) for more info on the full flow. |
| [phoneCallDiscardReasonBusy](/constructor/phoneCallDiscardReasonBusy/) | The phone call was discarded because the user is busy in another call, see [here »](https://core.telegram.org/api/calls) for more info. |
| [phoneCallDiscardReasonDisconnect](/constructor/phoneCallDiscardReasonDisconnect/) | The phone call was disconnected, see [here »](https://core.telegram.org/api/calls) for more info. |
| [phoneCallDiscardReasonHangup](/constructor/phoneCallDiscardReasonHangup/) | The phone call was ended normally, see [here »](https://core.telegram.org/api/calls) for more info. |
| [phoneCallDiscardReasonMigrateConferenceCall](/constructor/phoneCallDiscardReasonMigrateConferenceCall/) | This phone call was migrated to a [conference call](https://core.telegram.org/api/end-to-end/group-calls). |
| [phoneCallDiscardReasonMissed](/constructor/phoneCallDiscardReasonMissed/) | The phone call was missed, see [here »](https://core.telegram.org/api/calls) for more info. |
| [phoneCallEmpty](/constructor/phoneCallEmpty/) | Empty constructor |
| [phoneCallProtocol](/constructor/phoneCallProtocol/) | Protocol info for the VoIP library, see [here »](https://core.telegram.org/api/calls#populating-phonecallprotocol) for details on how to populate it. |
| [phoneCallRequested](/constructor/phoneCallRequested/) | Requested phone call, see [here »](https://core.telegram.org/api/calls) for more info on the full flow. |
| [phoneCallWaiting](/constructor/phoneCallWaiting/) | Incoming phone call, see [here »](https://core.telegram.org/api/calls) for more info on the full flow. |
| [phoneConnection](/constructor/phoneConnection/) | DEPRECATED (libtgvoip): Identifies an endpoint that can be used to connect to the other user in a phone call |
| [phoneConnectionWebrtc](/constructor/phoneConnectionWebrtc/) | WebRTC connection parameters for a [phone call](https://core.telegram.org/api/calls). |
| [photo](/constructor/photo/) | Photo |
| [photoCachedSize](/constructor/photoCachedSize/) | Description of an image and its content. #### [End-to-end schema](/schema/end-to-end/) ``` ===23=== photoCachedSize#e9a734fa type:string location:FileLocation w:int h:int bytes:bytes = PhotoSize; ``` #### API schema |
| [photoEmpty](/constructor/photoEmpty/) | Empty constructor, non-existent photo |
| [photoPathSize](/constructor/photoPathSize/) | Messages with animated stickers can have a compressed svg (< 300 bytes) to show the outline of the sticker before fetching the actual lottie animation. |
| [photos.photo](/constructor/photos.photo/) | Photo with auxiliary data. |
| [photos.photos](/constructor/photos.photos/) | Full list of photos with auxiliary data. |
| [photos.photosSlice](/constructor/photos.photosSlice/) | Incomplete list of photos with auxiliary data. |
| [photoSize](/constructor/photoSize/) | Image description. #### [End-to-end schema](/schema/end-to-end/) ``` ===23=== photoSize#77bfb61b type:string location:FileLocation w:int h:int size:int = PhotoSize; ``` #### API schema |
| [photoSizeEmpty](/constructor/photoSizeEmpty/) | Empty constructor. Image with this thumbnail is unavailable. #### [End-to-end schema](/schema/end-to-end/) ``` ===23=== photoSizeEmpty#0e17e23c type:string = PhotoSize; ``` #### API schema |
| [photoSizeProgressive](/constructor/photoSizeProgressive/) | Progressively encoded photosize |
| [photoStrippedSize](/constructor/photoStrippedSize/) | A low-resolution compressed JPG payload |
| [poll](/constructor/poll/) | Poll |
| [pollAnswer](/constructor/pollAnswer/) | A possible answer of a poll |
| [pollAnswerVoters](/constructor/pollAnswerVoters/) | A poll answer, and how users voted on it |
| [pollResults](/constructor/pollResults/) | Results of poll |
| [popularContact](/constructor/popularContact/) | Popular contact |
| [postAddress](/constructor/postAddress/) | Shipping address |
| [postInteractionCountersMessage](/constructor/postInteractionCountersMessage/) | Interaction counters for a message. |
| [postInteractionCountersStory](/constructor/postInteractionCountersStory/) | Interaction counters for a story. |
| [premium.boostsList](/constructor/premium.boostsList/) | List of [boosts](https://core.telegram.org/api/boost) that were applied to a peer by multiple users. |
| [premium.boostsStatus](/constructor/premium.boostsStatus/) | Contains info about the current [boost status](https://core.telegram.org/api/boost) of a peer. |
| [premium.myBoosts](/constructor/premium.myBoosts/) | A list of peers we are currently [boosting](https://core.telegram.org/api/boost), and how many [boost slots](https://core.telegram.org/api/boost) we have left. |
| [premiumGiftCodeOption](/constructor/premiumGiftCodeOption/) | Contains info about a [giveaway/gift](https://core.telegram.org/api/giveaways) option. |
| [premiumSubscriptionOption](/constructor/premiumSubscriptionOption/) | Describes a Telegram Premium subscription option |
| [prepaidGiveaway](/constructor/prepaidGiveaway/) | Contains info about a [prepaid giveaway »](https://core.telegram.org/api/giveaways). |
| [prepaidStarsGiveaway](/constructor/prepaidStarsGiveaway/) | Contains info about a [prepaid Telegram Star giveaway »](https://core.telegram.org/api/giveaways#star-giveaways). |
| [privacyKeyAbout](/constructor/privacyKeyAbout/) | Whether people can see your bio |
| [privacyKeyAddedByPhone](/constructor/privacyKeyAddedByPhone/) | Whether this user can be added to our contact list by their phone number |
| [privacyKeyBirthday](/constructor/privacyKeyBirthday/) | Whether the user can see our birthday. |
| [privacyKeyChatInvite](/constructor/privacyKeyChatInvite/) | Whether the user can be invited to chats |
| [privacyKeyForwards](/constructor/privacyKeyForwards/) | Whether messages forwarded from the user will be [anonymously forwarded](https://telegram.org/blog/unsend-privacy-emoji#anonymous-forwarding) |
| [privacyKeyNoPaidMessages](/constructor/privacyKeyNoPaidMessages/) | Who can send you messages without paying, if [paid messages »](https://core.telegram.org/api/paid-messages) are enabled. |
| [privacyKeyPhoneCall](/constructor/privacyKeyPhoneCall/) | Whether the user accepts phone calls |
| [privacyKeyPhoneNumber](/constructor/privacyKeyPhoneNumber/) | Whether the user allows us to see his phone number |
| [privacyKeyPhoneP2P](/constructor/privacyKeyPhoneP2P/) | Whether P2P connections in phone calls with this user are allowed |
| [privacyKeyProfilePhoto](/constructor/privacyKeyProfilePhoto/) | Whether the profile picture of the user is visible |
| [privacyKeySavedMusic](/constructor/privacyKeySavedMusic/) | Whether the user can see the [songs we pinned to our profile »](https://core.telegram.org/api/profile#music). |
| [privacyKeyStarGiftsAutoSave](/constructor/privacyKeyStarGiftsAutoSave/) | Whether received [gifts](https://core.telegram.org/api/gifts) will be automatically displayed on our profile |
| [privacyKeyStatusTimestamp](/constructor/privacyKeyStatusTimestamp/) | Whether we can see the last online timestamp of this user. Note that if _we_ decide to hide our exact last online timestamp to someone (i.e., users A, B, C, or all users) **and** we do not have a [Premium](https://core.telegram.org/api/premium) subscription, we won't be able to see the exact last online timestamp of those users (A, B, C, or all users), even if those users _do_ share it with us. If those users _do_ share their exact online status with us, but we can't see it due to the reason mentioned above, the `by_me` flag of [userStatusRecently](/constructor/userStatusRecently/), [userStatusLastWeek](/constructor/userStatusLastWeek/), [userStatusLastMonth](/constructor/userStatusLastMonth/) will be set. |
| [privacyKeyVoiceMessages](/constructor/privacyKeyVoiceMessages/) | Whether the user accepts voice messages |
| [privacyValueAllowAll](/constructor/privacyValueAllowAll/) | Allow all users |
| [privacyValueAllowBots](/constructor/privacyValueAllowBots/) | Allow bots and mini apps |
| [privacyValueAllowChatParticipants](/constructor/privacyValueAllowChatParticipants/) | Allow all participants of certain chats |
| [privacyValueAllowCloseFriends](/constructor/privacyValueAllowCloseFriends/) | Allow only [close friends »](https://core.telegram.org/api/privacy) |
| [privacyValueAllowContacts](/constructor/privacyValueAllowContacts/) | Allow all contacts |
| [privacyValueAllowPremium](/constructor/privacyValueAllowPremium/) | Allow only users with a [Premium subscription »](https://core.telegram.org/api/premium), currently only usable for [inputPrivacyKeyChatInvite](/constructor/inputPrivacyKeyChatInvite/). |
| [privacyValueAllowUsers](/constructor/privacyValueAllowUsers/) | Allow only certain users |
| [privacyValueDisallowAll](/constructor/privacyValueDisallowAll/) | Disallow all users |
| [privacyValueDisallowBots](/constructor/privacyValueDisallowBots/) | Disallow bots and mini apps |
| [privacyValueDisallowChatParticipants](/constructor/privacyValueDisallowChatParticipants/) | Disallow only participants of certain chats |
| [privacyValueDisallowContacts](/constructor/privacyValueDisallowContacts/) | Disallow only contacts |
| [privacyValueDisallowUsers](/constructor/privacyValueDisallowUsers/) | Disallow only certain users |
| [profileTabFiles](/constructor/profileTabFiles/) | Represents the shared files tab of a profile. |
| [profileTabGifs](/constructor/profileTabGifs/) | Represents the gifs tab of a profile page. |
| [profileTabGifts](/constructor/profileTabGifts/) | Represents the [gifts](https://core.telegram.org/api/gifts) tab of a profile page. |
| [profileTabLinks](/constructor/profileTabLinks/) | Represents the shared links tab of a profile page. |
| [profileTabMedia](/constructor/profileTabMedia/) | Represents the media tab of a profile page. |
| [profileTabMusic](/constructor/profileTabMusic/) | Represents the [music](https://core.telegram.org/api/profile#music) tab of a profile page. |
| [profileTabPosts](/constructor/profileTabPosts/) | Represents the [stories](https://core.telegram.org/api/stories) tab of a profile page. |
| [profileTabVoice](/constructor/profileTabVoice/) | Represents the voice messages tab of a profile page. |
| [publicForwardMessage](/constructor/publicForwardMessage/) | Contains info about a forward of a [story](https://core.telegram.org/api/stories) as a message. |
| [publicForwardStory](/constructor/publicForwardStory/) | Contains info about a forward of a [story](https://core.telegram.org/api/stories) as a repost by a public channel. |
| [quickReply](/constructor/quickReply/) | A [quick reply shortcut](https://core.telegram.org/api/business#quick-reply-shortcuts). |
| [reactionCount](/constructor/reactionCount/) | Reactions |
| [reactionCustomEmoji](/constructor/reactionCustomEmoji/) | [Custom emoji](https://core.telegram.org/api/custom-emoji) message reaction |
| [reactionEmoji](/constructor/reactionEmoji/) | Normal emoji message reaction |
| [reactionEmpty](/constructor/reactionEmpty/) | No reaction |
| [reactionNotificationsFromAll](/constructor/reactionNotificationsFromAll/) | Receive notifications about reactions made by any user. |
| [reactionNotificationsFromContacts](/constructor/reactionNotificationsFromContacts/) | Receive notifications about reactions made only by our contacts. |
| [reactionPaid](/constructor/reactionPaid/) | Represents a [paid Telegram Star reaction »](https://core.telegram.org/api/reactions#paid-reactions). |
| [reactionsNotifySettings](/constructor/reactionsNotifySettings/) | Reaction notification settings, see [here »](https://core.telegram.org/api/reactions#notifications-about-reactions) for more info. |
| [readParticipantDate](/constructor/readParticipantDate/) | Contains info about when a certain participant has read a message |
| [receivedNotifyMessage](/constructor/receivedNotifyMessage/) | Message ID, for which PUSH-notifications were cancelled. |
| [recentMeUrlChat](/constructor/recentMeUrlChat/) | Recent t.me link to a chat |
| [recentMeUrlChatInvite](/constructor/recentMeUrlChatInvite/) | Recent t.me invite link to a chat |
| [recentMeUrlStickerSet](/constructor/recentMeUrlStickerSet/) | Recent t.me stickerset installation URL |
| [recentMeUrlUnknown](/constructor/recentMeUrlUnknown/) | Unknown t.me url |
| [recentMeUrlUser](/constructor/recentMeUrlUser/) | Recent t.me link to a user |
| [recentStory](/constructor/recentStory/) | Summary of a peer's [active stories »](https://core.telegram.org/api/stories#recent-story-summaries), embedded in [user](/constructor/user/).`stories_max_id` and [channel](/constructor/channel/).`stories_max_id` and returned by [stories.getPeerMaxIDs](/method/stories.getPeerMaxIDs/). |
| [replyInlineMarkup](/constructor/replyInlineMarkup/) | Represents an inline keyboard |
| [replyKeyboardForceReply](/constructor/replyKeyboardForceReply/) | Force the user to send a reply |
| [replyKeyboardHide](/constructor/replyKeyboardHide/) | Hide sent reply keyboard |
| [replyKeyboardMarkup](/constructor/replyKeyboardMarkup/) | Represents a reply keyboard |
| [reportResultAddComment](/constructor/reportResultAddComment/) | The user should enter an additional comment for the moderators, and then [messages.report](/method/messages.report/) must be re-invoked, passing the comment to [messages.report](/method/messages.report/).`message`. |
| [reportResultChooseOption](/constructor/reportResultChooseOption/) | The user must choose one of the following options, and then [messages.report](/method/messages.report/) must be re-invoked, passing the option's `option` identifier to [messages.report](/method/messages.report/).`option`. |
| [reportResultReported](/constructor/reportResultReported/) | The report was sent successfully, no further actions are required. |
| [requestedPeerChannel](/constructor/requestedPeerChannel/) | Info about a [channel/supergroup](https://core.telegram.org/api/channel), shared by a user with the currently logged in bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/). All fields except the ID are optional, and will be populated if present on the chosen channel/supergroup, according to the parameters of the requesting [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/). |
| [requestedPeerChat](/constructor/requestedPeerChat/) | Info about a [chat](https://core.telegram.org/api/channel), shared by a user with the currently logged in bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/). All fields except the ID are optional, and will be populated if present on the chosen chat, according to the parameters of the requesting [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/). |
| [requestedPeerUser](/constructor/requestedPeerUser/) | Info about a user, shared by a user with the currently logged in bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/). All fields except the ID are optional, and will be populated if present on the chosen user, according to the parameters of the requesting [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/). |
| [requestPeerTypeBroadcast](/constructor/requestPeerTypeBroadcast/) | Choose a channel |
| [requestPeerTypeChat](/constructor/requestPeerTypeChat/) | Choose a chat or supergroup |
| [requestPeerTypeUser](/constructor/requestPeerTypeUser/) | Choose a user. |
| [requirementToContactEmpty](/constructor/requirementToContactEmpty/) | This user can be freely contacted. |
| [requirementToContactPaidMessages](/constructor/requirementToContactPaidMessages/) | This user requires us to pay the specified amount of [Telegram Stars](https://core.telegram.org/api/stars) to send them a message, see [here »](https://core.telegram.org/api/paid-messages) for the full flow. |
| [requirementToContactPremium](/constructor/requirementToContactPremium/) | This user requires us to buy a [Premium](https://core.telegram.org/api/premium) subscription in order to contact them. |
| [restrictionReason](/constructor/restrictionReason/) | Restriction reason. See [here »](https://core.telegram.org/api/age-verification) for the full flow to use for restricted or age-gated content. |
| [savedDialog](/constructor/savedDialog/) | Represents a [saved dialog »](https://core.telegram.org/api/saved-messages). |
| [savedPhoneContact](/constructor/savedPhoneContact/) | Saved contact |
| [savedReactionTag](/constructor/savedReactionTag/) | Info about a [saved message reaction tag »](https://core.telegram.org/api/saved-messages#tags). |
| [savedStarGift](/constructor/savedStarGift/) | Represents a [gift](https://core.telegram.org/api/gifts) owned by a peer. |
| [searchPostsFlood](/constructor/searchPostsFlood/) | Indicates if the specified [global post search »](https://core.telegram.org/api/search#posts-tab) requires payment. |
| [searchResultPosition](/constructor/searchResultPosition/) | Information about a message in a specific position |
| [searchResultsCalendarPeriod](/constructor/searchResultsCalendarPeriod/) | Information about found messages sent on a specific day, used to split the `messages` in [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/) constructors by days. Multiple searchResultsCalendarPeriod constructors are returned in [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/), each containing information about the first, last and total number of messages matching the filter that were sent on a specific day. |
| [secureCredentialsEncrypted](/constructor/secureCredentialsEncrypted/) | Encrypted credentials required to decrypt [telegram passport](https://core.telegram.org/passport) data. |
| [secureData](/constructor/secureData/) | Secure [passport](https://core.telegram.org/passport) data, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#securedata) |
| [secureFile](/constructor/secureFile/) | Secure [passport](https://core.telegram.org/passport) file, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#inputsecurefile) |
| [secureFileEmpty](/constructor/secureFileEmpty/) | Empty constructor |
| [securePasswordKdfAlgoPBKDF2HMACSHA512iter100000](/constructor/securePasswordKdfAlgoPBKDF2HMACSHA512iter100000/) | PBKDF2 with SHA512 and 100000 iterations KDF algo |
| [securePasswordKdfAlgoSHA512](/constructor/securePasswordKdfAlgoSHA512/) | SHA512 KDF algo |
| [securePasswordKdfAlgoUnknown](/constructor/securePasswordKdfAlgoUnknown/) | Unknown KDF algo (most likely the client has to be updated) |
| [securePlainEmail](/constructor/securePlainEmail/) | Email address to use in [telegram passport](https://core.telegram.org/passport): [it must be verified, first »](https://core.telegram.org/passport/encryption#secureplaindata). |
| [securePlainPhone](/constructor/securePlainPhone/) | Phone number to use in [telegram passport](https://core.telegram.org/passport): [it must be verified, first »](https://core.telegram.org/passport/encryption#secureplaindata). |
| [secureRequiredType](/constructor/secureRequiredType/) | Required type |
| [secureRequiredTypeOneOf](/constructor/secureRequiredTypeOneOf/) | One of |
| [secureSecretSettings](/constructor/secureSecretSettings/) | Secure settings |
| [secureValue](/constructor/secureValue/) | Secure value |
| [secureValueError](/constructor/secureValueError/) | Secure value error |
| [secureValueErrorData](/constructor/secureValueErrorData/) | Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes. |
| [secureValueErrorFile](/constructor/secureValueErrorFile/) | Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes. |
| [secureValueErrorFiles](/constructor/secureValueErrorFiles/) | Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes. |
| [secureValueErrorFrontSide](/constructor/secureValueErrorFrontSide/) | Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes. |
| [secureValueErrorReverseSide](/constructor/secureValueErrorReverseSide/) | Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes. |
| [secureValueErrorSelfie](/constructor/secureValueErrorSelfie/) | Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes. |
| [secureValueErrorTranslationFile](/constructor/secureValueErrorTranslationFile/) | Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes. |
| [secureValueErrorTranslationFiles](/constructor/secureValueErrorTranslationFiles/) | Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation changes. |
| [secureValueHash](/constructor/secureValueHash/) | Secure value hash |
| [secureValueTypeAddress](/constructor/secureValueTypeAddress/) | Address |
| [secureValueTypeBankStatement](/constructor/secureValueTypeBankStatement/) | Bank statement |
| [secureValueTypeDriverLicense](/constructor/secureValueTypeDriverLicense/) | Driver's license |
| [secureValueTypeEmail](/constructor/secureValueTypeEmail/) | Email |
| [secureValueTypeIdentityCard](/constructor/secureValueTypeIdentityCard/) | Identity card |
| [secureValueTypeInternalPassport](/constructor/secureValueTypeInternalPassport/) | Internal [passport](https://core.telegram.org/passport) |
| [secureValueTypePassport](/constructor/secureValueTypePassport/) | Passport |
| [secureValueTypePassportRegistration](/constructor/secureValueTypePassportRegistration/) | Internal registration [passport](https://core.telegram.org/passport) |
| [secureValueTypePersonalDetails](/constructor/secureValueTypePersonalDetails/) | Personal details |
| [secureValueTypePhone](/constructor/secureValueTypePhone/) | Phone |
| [secureValueTypeRentalAgreement](/constructor/secureValueTypeRentalAgreement/) | Rental agreement |
| [secureValueTypeTemporaryRegistration](/constructor/secureValueTypeTemporaryRegistration/) | Temporary registration |
| [secureValueTypeUtilityBill](/constructor/secureValueTypeUtilityBill/) | Utility bill |
| [sendAsPeer](/constructor/sendAsPeer/) | Indicates a peer that can be used to send messages |
| [sendMessageCancelAction](/constructor/sendMessageCancelAction/) | Invalidate all previous action updates. E.g. when user deletes entered text or aborts a video upload. #### [End-to-end schema](/schema/end-to-end/) ``` ===17=== sendMessageCancelAction#fd5ec8f5 = SendMessageAction; ``` #### API schema |
| [sendMessageChooseContactAction](/constructor/sendMessageChooseContactAction/) | User is selecting a contact to share. #### [End-to-end schema](/schema/end-to-end/) ``` ===17=== sendMessageChooseContactAction#628cbc6f = SendMessageAction; ``` #### API schema |
| [sendMessageChooseStickerAction](/constructor/sendMessageChooseStickerAction/) | User is choosing a sticker |
| [sendMessageEmojiInteraction](/constructor/sendMessageEmojiInteraction/) | User has clicked on an animated emoji triggering a [reaction, click here for more info »](https://core.telegram.org/api/animated-emojis#emoji-reactions). |
| [sendMessageEmojiInteractionSeen](/constructor/sendMessageEmojiInteractionSeen/) | User is watching an animated emoji reaction triggered by another user, [click here for more info »](https://core.telegram.org/api/animated-emojis#emoji-reactions). |
| [sendMessageGamePlayAction](/constructor/sendMessageGamePlayAction/) | User is playing a game |
| [sendMessageGeoLocationAction](/constructor/sendMessageGeoLocationAction/) | User is selecting a location to share. #### [End-to-end schema](/schema/end-to-end/) ``` ===17=== sendMessageGeoLocationAction#176f8ba1 = SendMessageAction; ``` #### API schema |
| [sendMessageHistoryImportAction](/constructor/sendMessageHistoryImportAction/) | Chat history is being imported |
| [sendMessageRecordAudioAction](/constructor/sendMessageRecordAudioAction/) | User is recording a voice message. #### [End-to-end schema](/schema/end-to-end/) ``` ===17=== sendMessageRecordAudioAction#d52f73f7 = SendMessageAction; ``` #### API schema |
| [sendMessageRecordRoundAction](/constructor/sendMessageRecordRoundAction/) | User is recording a round video to share #### [End-to-end schema](/schema/end-to-end/) ``` ===66=== sendMessageRecordRoundAction#88f27fbc = SendMessageAction; ``` #### API schema |
| [sendMessageRecordVideoAction](/constructor/sendMessageRecordVideoAction/) | User is recording a video. #### [End-to-end schema](/schema/end-to-end/) ``` ===17=== sendMessageRecordVideoAction#a187d66f = SendMessageAction; ``` #### API schema |
| [sendMessageTextDraftAction](/constructor/sendMessageTextDraftAction/) | Used by bots to implement [live message streaming »](https://core.telegram.org/api/bots/ai#live-response-streaming). |
| [sendMessageTypingAction](/constructor/sendMessageTypingAction/) | User is typing. #### [End-to-end schema](/schema/end-to-end/) ``` ===17=== sendMessageTypingAction#16bf744e = SendMessageAction; ``` #### API schema |
| [sendMessageUploadAudioAction](/constructor/sendMessageUploadAudioAction/) | User is uploading a voice message. #### [End-to-end schema](/schema/end-to-end/) ``` ===17=== sendMessageUploadAudioAction#e6ac8a6f = SendMessageAction; ``` #### API schema |
| [sendMessageUploadDocumentAction](/constructor/sendMessageUploadDocumentAction/) | User is uploading a file. #### [End-to-end schema](/schema/end-to-end/) ``` ===17=== sendMessageUploadDocumentAction#8faee98e = SendMessageAction; ``` #### API schema |
| [sendMessageUploadPhotoAction](/constructor/sendMessageUploadPhotoAction/) | User is uploading a photo. #### [End-to-end schema](/schema/end-to-end/) ``` ===17=== sendMessageUploadPhotoAction#990a3c1a = SendMessageAction; ``` #### API schema |
| [sendMessageUploadRoundAction](/constructor/sendMessageUploadRoundAction/) | User is uploading a round video #### [End-to-end schema](/schema/end-to-end/) ``` ===66=== sendMessageUploadRoundAction#bb718624 = SendMessageAction; ``` #### API schema |
| [sendMessageUploadVideoAction](/constructor/sendMessageUploadVideoAction/) | User is uploading a video. #### [End-to-end schema](/schema/end-to-end/) ``` ===17=== sendMessageUploadVideoAction#92042ff7 = SendMessageAction; ``` #### API schema |
| [shippingOption](/constructor/shippingOption/) | Shipping option |
| [smsJob](/constructor/smsJob/) | Info about an SMS job. |
| [smsjobs.eligibleToJoin](/constructor/smsjobs.eligibleToJoin/) | SMS jobs eligibility |
| [smsjobs.status](/constructor/smsjobs.status/) | Status |
| [speakingInGroupCallAction](/constructor/speakingInGroupCallAction/) | User is currently speaking in the group call |
| [sponsoredMessage](/constructor/sponsoredMessage/) | A [sponsored message](https://core.telegram.org/api/sponsored-messages). |
| [sponsoredMessageReportOption](/constructor/sponsoredMessageReportOption/) | A [report option for a sponsored message »](https://core.telegram.org/api/sponsored-messages#reporting-sponsored-messages). |
| [sponsoredPeer](/constructor/sponsoredPeer/) | A sponsored peer. |
| [starGift](/constructor/starGift/) | Represents a [star gift, see here »](https://core.telegram.org/api/gifts) for more info. |
| [starGiftActiveAuctionState](/constructor/starGiftActiveAuctionState/) | Contains info about [an auction where the user has placed a bid »](https://core.telegram.org/api/auctions). |
| [starGiftAttributeBackdrop](/constructor/starGiftAttributeBackdrop/) | The backdrop of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| [starGiftAttributeCounter](/constructor/starGiftAttributeCounter/) | Indicates the total number of gifts that have the specified attribute. |
| [starGiftAttributeIdBackdrop](/constructor/starGiftAttributeIdBackdrop/) | The ID of a backdrop of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| [starGiftAttributeIdModel](/constructor/starGiftAttributeIdModel/) | The ID of a model of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| [starGiftAttributeIdPattern](/constructor/starGiftAttributeIdPattern/) | The ID of a pattern of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| [starGiftAttributeModel](/constructor/starGiftAttributeModel/) | The model of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/) | Info about the sender, receiver and message attached to the original [gift »](https://core.telegram.org/api/gifts), before it was upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| [starGiftAttributePattern](/constructor/starGiftAttributePattern/) | A [sticker](https://core.telegram.org/api/stickers) applied on the backdrop of a [collectible gift »](https://core.telegram.org/api/gifts) using a repeating pattern. |
| [starGiftAttributeRarity](/constructor/starGiftAttributeRarity/) | Exact rarity value for a collectible gift attribute. |
| [starGiftAttributeRarityEpic](/constructor/starGiftAttributeRarityEpic/) | Represents epic collectible gift attribute rarity. |
| [starGiftAttributeRarityLegendary](/constructor/starGiftAttributeRarityLegendary/) | Represents legendary collectible gift attribute rarity. |
| [starGiftAttributeRarityRare](/constructor/starGiftAttributeRarityRare/) | Represents rare collectible gift attribute rarity. |
| [starGiftAttributeRarityUncommon](/constructor/starGiftAttributeRarityUncommon/) | Represents uncommon collectible gift attribute rarity. |
| [starGiftAuctionAcquiredGift](/constructor/starGiftAuctionAcquiredGift/) | Describes a gift that the current user won in an auction. |
| [starGiftAuctionRound](/constructor/starGiftAuctionRound/) | Describes one or more [collectible gift auction rounds »](https://core.telegram.org/api/auctions). |
| [starGiftAuctionRoundExtendable](/constructor/starGiftAuctionRoundExtendable/) | Describes one or more extendable [collectible gift auction rounds »](https://core.telegram.org/api/auctions). |
| [starGiftAuctionState](/constructor/starGiftAuctionState/) | Represents an active or pending [auction »](https://core.telegram.org/api/auctions). |
| [starGiftAuctionStateFinished](/constructor/starGiftAuctionStateFinished/) | Represents a finished [auction »](https://core.telegram.org/api/auctions). |
| [starGiftAuctionStateNotModified](/constructor/starGiftAuctionStateNotModified/) | Returned only by auction methods (never by updates) if the passed `version` is equal to the remote [auction »](https://core.telegram.org/api/auctions).`version`, meaning auction information hasn't changed over the locally cached version. |
| [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) | Contains information about the current user's state in an [auction »](https://core.telegram.org/api/auctions). The `bid_amount`, `bid_date`, `bid_peer` and `min_bid_amount` flags of [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) will all be set if the user placed a bid in the auction. |
| [starGiftBackground](/constructor/starGiftBackground/) | Contains the default background palette of a [gift type »](https://core.telegram.org/api/gifts#listing-all-possible-collectible-variants). |
| [starGiftCollection](/constructor/starGiftCollection/) | Represents a [star gift collection »](https://core.telegram.org/api/gifts#gift-collections). |
| [starGiftUnique](/constructor/starGiftUnique/) | Represents a [collectible star gift, see here »](https://core.telegram.org/api/gifts#collectible-gifts) for more info. The sticker that represents the gift is contained in a [starGiftAttributeModel](/constructor/starGiftAttributeModel/) object in `attributes`. |
| [starGiftUpgradePrice](/constructor/starGiftUpgradePrice/) | Indicates the price for a [gift upgrade »](https://core.telegram.org/api/gifts#collectible-gifts) starting from a specific point in time. |
| [starRefProgram](/constructor/starRefProgram/) | Info about an [affiliate program offered by a bot](https://core.telegram.org/api/bots/referrals) |
| [starsAmount](/constructor/starsAmount/) | Describes a real (i.e. possibly decimal) amount of [Telegram Stars](https://core.telegram.org/api/stars). |
| [starsGiftOption](/constructor/starsGiftOption/) | [Telegram Stars gift option](https://core.telegram.org/api/stars#buying-or-gifting-stars). |
| [starsGiveawayOption](/constructor/starsGiveawayOption/) | Contains info about a [Telegram Star giveaway](https://core.telegram.org/api/giveaways#star-giveaways) option. |
| [starsGiveawayWinnersOption](/constructor/starsGiveawayWinnersOption/) | Allowed options for the number of giveaway winners. |
| [starsRating](/constructor/starsRating/) | Represents the profile's [star rating, see here »](https://core.telegram.org/api/stars#star-rating) for more info. |
| [starsRevenueStatus](/constructor/starsRevenueStatus/) | Describes [Telegram Star revenue balances »](https://core.telegram.org/api/stars). |
| [starsSubscription](/constructor/starsSubscription/) | Represents a [Telegram Star subscription »](https://core.telegram.org/api/invites#paid-invite-links). |
| [starsSubscriptionPricing](/constructor/starsSubscriptionPricing/) | Pricing of a [Telegram Star subscription »](https://core.telegram.org/api/invites#paid-invite-links). |
| [starsTonAmount](/constructor/starsTonAmount/) | Describes an amount of Gram in nanograms (i.e. `1/1_000_000_000` of a Gram). |
| [starsTopupOption](/constructor/starsTopupOption/) | [Telegram Stars topup option](https://core.telegram.org/api/stars). |
| [starsTransaction](/constructor/starsTransaction/) | Represents a [Telegram Stars or TON transaction »](https://core.telegram.org/api/stars). |
| [starsTransactionPeer](/constructor/starsTransactionPeer/) | Describes a [Telegram Star](https://core.telegram.org/api/stars) transaction with another peer. |
| [starsTransactionPeerAds](/constructor/starsTransactionPeerAds/) | Describes a [Telegram Star](https://core.telegram.org/api/stars) transaction used to pay for [Telegram ads as specified here »](https://core.telegram.org/api/stars#paying-for-ads). |
| [starsTransactionPeerAPI](/constructor/starsTransactionPeerAPI/) | Describes a [Telegram Star](https://core.telegram.org/api/stars) transaction used to pay for paid API usage, such as [paid bot broadcasts](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once). |
| [starsTransactionPeerAppStore](/constructor/starsTransactionPeerAppStore/) | Describes a [Telegram Star](https://core.telegram.org/api/stars) transaction with the App Store, used when purchasing Telegram Stars through the App Store. |
| [starsTransactionPeerFragment](/constructor/starsTransactionPeerFragment/) | Describes a [Telegram Star](https://core.telegram.org/api/stars) transaction with [Fragment](https://fragment.com), used when purchasing Telegram Stars through [Fragment](https://fragment.com). |
| [starsTransactionPeerPlayMarket](/constructor/starsTransactionPeerPlayMarket/) | Describes a [Telegram Star](https://core.telegram.org/api/stars) transaction with the Play Store, used when purchasing Telegram Stars through the Play Store. |
| [starsTransactionPeerPremiumBot](/constructor/starsTransactionPeerPremiumBot/) | Describes a [Telegram Star](https://core.telegram.org/api/stars) transaction made using [@PremiumBot](https://t.me/premiumbot) (i.e. using the [inputInvoiceStars](/constructor/inputInvoiceStars/) flow described [here »](https://core.telegram.org/api/stars#buying-or-gifting-stars)). |
| [starsTransactionPeerUnsupported](/constructor/starsTransactionPeerUnsupported/) | Describes a [Telegram Star](https://core.telegram.org/api/stars) transaction that cannot be described using the current layer. |
| [stats.broadcastStats](/constructor/stats.broadcastStats/) | [Channel statistics](https://core.telegram.org/api/stats). |
| [stats.megagroupStats](/constructor/stats.megagroupStats/) | Supergroup [statistics](https://core.telegram.org/api/stats) |
| [stats.messageStats](/constructor/stats.messageStats/) | Message statistics |
| [stats.publicForwards](/constructor/stats.publicForwards/) | Contains info about the forwards of a [story](https://core.telegram.org/api/stories) as a message to public chats and reposts by public channels. |
| [stats.storyStats](/constructor/stats.storyStats/) | Contains [statistics](https://core.telegram.org/api/stats) about a [story](https://core.telegram.org/api/stories). |
| [statsAbsValueAndPrev](/constructor/statsAbsValueAndPrev/) | Statistics value couple; initial and final value for period of time currently in consideration |
| [statsDateRangeDays](/constructor/statsDateRangeDays/) | [Channel statistics](https://core.telegram.org/api/stats) date range |
| [statsGraph](/constructor/statsGraph/) | [Channel statistics graph](https://core.telegram.org/api/stats) |
| [statsGraphAsync](/constructor/statsGraphAsync/) | This [channel statistics graph](https://core.telegram.org/api/stats) must be generated asynchronously using [stats.loadAsyncGraph](/method/stats.loadAsyncGraph/) to reduce server load |
| [statsGraphError](/constructor/statsGraphError/) | An error occurred while generating the [statistics graph](https://core.telegram.org/api/stats) |
| [statsGroupTopAdmin](/constructor/statsGroupTopAdmin/) | Information about an active admin in a supergroup |
| [statsGroupTopInviter](/constructor/statsGroupTopInviter/) | Information about an active supergroup inviter |
| [statsGroupTopPoster](/constructor/statsGroupTopPoster/) | Information about an active user in a supergroup |
| [statsPercentValue](/constructor/statsPercentValue/) | [Channel statistics percentage](https://core.telegram.org/api/stats).   Compute the percentage simply by doing `part * total / 100` |
| [statsURL](/constructor/statsURL/) | URL with chat statistics |
| [stickerKeyword](/constructor/stickerKeyword/) | Keywords for a certain sticker |
| [stickerPack](/constructor/stickerPack/) | A stickerpack is a group of stickers associated to the same emoji.   It is **not** a sticker pack the way it is usually intended, you may be looking for a [StickerSet](/type/StickerSet/). |
| [stickers.suggestedShortName](/constructor/stickers.suggestedShortName/) | A suggested short name for a stickerpack |
| [stickerSet](/constructor/stickerSet/) | Represents a stickerset (stickerpack) |
| [stickerSetCovered](/constructor/stickerSetCovered/) | Stickerset with a single sticker as preview |
| [stickerSetFullCovered](/constructor/stickerSetFullCovered/) | Stickerset preview with all stickers of the stickerset included.   Currently used only for [custom emoji stickersets](https://core.telegram.org/api/custom-emoji), to avoid a further call to [messages.getStickerSet](/method/messages.getStickerSet/). |
| [stickerSetMultiCovered](/constructor/stickerSetMultiCovered/) | Stickerset, with multiple stickers as preview |
| [stickerSetNoCovered](/constructor/stickerSetNoCovered/) | Just the stickerset information, with no previews. |
| [storage.fileGif](/constructor/storage.fileGif/) | GIF image. MIME type: `image/gif`. |
| [storage.fileJpeg](/constructor/storage.fileJpeg/) | JPEG image. MIME type: `image/jpeg`. |
| [storage.fileMov](/constructor/storage.fileMov/) | Quicktime video. MIME type: `video/quicktime`. |
| [storage.fileMp3](/constructor/storage.fileMp3/) | Mp3 audio. MIME type: `audio/mpeg`. |
| [storage.fileMp4](/constructor/storage.fileMp4/) | MPEG-4 video. MIME type: `video/mp4`. |
| [storage.filePartial](/constructor/storage.filePartial/) | Part of a bigger file. |
| [storage.filePdf](/constructor/storage.filePdf/) | PDF document image. MIME type: `application/pdf`. |
| [storage.filePng](/constructor/storage.filePng/) | PNG image. MIME type: `image/png`. |
| [storage.fileUnknown](/constructor/storage.fileUnknown/) | Unknown type. |
| [storage.fileWebp](/constructor/storage.fileWebp/) | WEBP image. MIME type: `image/webp`. |
| [stories.albums](/constructor/stories.albums/) | [Story albums »](https://core.telegram.org/api/stories#story-albums). |
| [stories.albumsNotModified](/constructor/stories.albumsNotModified/) | The [story album list »](https://core.telegram.org/api/stories#story-albums) hasn't changed. |
| [stories.allStories](/constructor/stories.allStories/) | Full list of active (or active and hidden) [stories](https://core.telegram.org/api/stories#watching-stories). |
| [stories.allStoriesNotModified](/constructor/stories.allStoriesNotModified/) | The list of active (or active and hidden) [stories](https://core.telegram.org/api/stories#watching-stories) has not changed. |
| [stories.canSendStoryCount](/constructor/stories.canSendStoryCount/) | Contains the number of available active story slots (equal to the value of the [`story_expiring_limit_*` client configuration parameter](https://core.telegram.org/api/config#story-expiring-limit-default) minus the number of currently active stories). |
| [stories.foundStories](/constructor/stories.foundStories/) | Stories found using [global story search »](https://core.telegram.org/api/stories#searching-stories). |
| [stories.peerStories](/constructor/stories.peerStories/) | [Active story list](https://core.telegram.org/api/stories#watching-stories) of a specific peer. |
| [stories.stories](/constructor/stories.stories/) | List of [stories](https://core.telegram.org/api/stories#pinned-or-archived-stories) |
| [stories.storyReactionsList](/constructor/stories.storyReactionsList/) | List of peers that reacted to or intercated with a specific [story](https://core.telegram.org/api/stories) |
| [stories.storyViews](/constructor/stories.storyViews/) | Reaction and view counters for a list of [stories](https://core.telegram.org/api/stories) |
| [stories.storyViewsList](/constructor/stories.storyViewsList/) | Reaction and view counters for a [story](https://core.telegram.org/api/stories) |
| [storiesStealthMode](/constructor/storiesStealthMode/) | Information about the current [stealth mode](https://core.telegram.org/api/stories#stealth-mode) session. |
| [storyAlbum](/constructor/storyAlbum/) | Represents a [story album »](https://core.telegram.org/api/stories#story-albums). |
| [storyFwdHeader](/constructor/storyFwdHeader/) | Contains info about the original poster of a reposted story. |
| [storyItem](/constructor/storyItem/) | Represents a [story](https://core.telegram.org/api/stories). |
| [storyItemDeleted](/constructor/storyItemDeleted/) | Represents a previously active story, that was deleted |
| [storyItemSkipped](/constructor/storyItemSkipped/) | Represents an active story, whose full information was omitted for space and performance reasons; use [stories.getStoriesByID](/method/stories.getStoriesByID/) to fetch full info about the skipped story when and if needed. |
| [storyReaction](/constructor/storyReaction/) | How a certain peer reacted to a story |
| [storyReactionPublicForward](/constructor/storyReactionPublicForward/) | A certain peer has forwarded the story as a message to a public chat or channel. |
| [storyReactionPublicRepost](/constructor/storyReactionPublicRepost/) | A certain peer has reposted the story. |
| [storyView](/constructor/storyView/) | [Story](https://core.telegram.org/api/stories) view date and reaction information |
| [storyViewPublicForward](/constructor/storyViewPublicForward/) | A certain peer has forwarded the story as a message to a public chat or channel. |
| [storyViewPublicRepost](/constructor/storyViewPublicRepost/) | A certain peer has reposted the story. |
| [storyViews](/constructor/storyViews/) | Aggregated view and reaction information of a [story](https://core.telegram.org/api/stories). |
| [suggestedPost](/constructor/suggestedPost/) | Contains info about a [suggested post »](https://core.telegram.org/api/suggested-posts). |
| [textAnchor](/constructor/textAnchor/) | Text linking to another section of the page |
| [textBold](/constructor/textBold/) | **Bold** text |
| [textConcat](/constructor/textConcat/) | Concatenation of rich texts |
| [textEmail](/constructor/textEmail/) | Rich text email link |
| [textEmpty](/constructor/textEmpty/) | Empty rich text element |
| [textFixed](/constructor/textFixed/) | `fixed-width` rich text |
| [textImage](/constructor/textImage/) | Inline image |
| [textItalic](/constructor/textItalic/) | _Italic_ text |
| [textMarked](/constructor/textMarked/) | Highlighted text |
| [textPhone](/constructor/textPhone/) | Rich text linked to a phone number |
| [textPlain](/constructor/textPlain/) | Plain text |
| [textStrike](/constructor/textStrike/) | Strikethrough text |
| [textSubscript](/constructor/textSubscript/) | Subscript text |
| [textSuperscript](/constructor/textSuperscript/) | Superscript text |
| [textUnderline](/constructor/textUnderline/) | Underlined text |
| [textUrl](/constructor/textUrl/) | Link |
| [textWithEntities](/constructor/textWithEntities/) | Styled text with [message entities](https://core.telegram.org/api/entities) #### [End-to-end schema](/schema/end-to-end/) ``` ===216=== textWithEntities#751f3146 text:string entities:Vector<MessageEntity> = TextWithEntities; ``` #### API schema |
| [theme](/constructor/theme/) | Theme |
| [themeSettings](/constructor/themeSettings/) | Theme settings |
| [timezone](/constructor/timezone/) | Timezone information. |
| [todoCompletion](/constructor/todoCompletion/) | A completed [todo list »](https://core.telegram.org/api/todo) item. |
| [todoItem](/constructor/todoItem/) | An item of a [todo list »](https://core.telegram.org/api/todo). |
| [todoList](/constructor/todoList/) | Represents a [todo list »](https://core.telegram.org/api/todo). |
| [topPeer](/constructor/topPeer/) | Top peer |
| [topPeerCategoryBotsApp](/constructor/topPeerCategoryBotsApp/) | Most frequently used [Main Mini Bot Apps](https://core.telegram.org/api/bots/webapps#main-mini-apps). |
| [topPeerCategoryBotsInline](/constructor/topPeerCategoryBotsInline/) | Most used inline bots |
| [topPeerCategoryBotsPM](/constructor/topPeerCategoryBotsPM/) | Most used bots |
| [topPeerCategoryChannels](/constructor/topPeerCategoryChannels/) | Most frequently visited channels |
| [topPeerCategoryCorrespondents](/constructor/topPeerCategoryCorrespondents/) | Users we've chatted most frequently with |
| [topPeerCategoryForwardChats](/constructor/topPeerCategoryForwardChats/) | Chats to which the users often forwards messages to |
| [topPeerCategoryForwardUsers](/constructor/topPeerCategoryForwardUsers/) | Users to which the users often forwards messages to |
| [topPeerCategoryGroups](/constructor/topPeerCategoryGroups/) | Often-opened groups and supergroups |
| [topPeerCategoryPeers](/constructor/topPeerCategoryPeers/) | Top peer category |
| [topPeerCategoryPhoneCalls](/constructor/topPeerCategoryPhoneCalls/) | Most frequently called users |
| [true](/constructor/true/) | See [predefined identifiers](https://core.telegram.org/mtproto/TL-formal#predefined-identifiers). |
| [updateAttachMenuBots](/constructor/updateAttachMenuBots/) | The list of installed [attachment menu entries »](https://core.telegram.org/api/bots/attach) has changed, use [messages.getAttachMenuBots](/method/messages.getAttachMenuBots/) to fetch the updated list. |
| [updateAutoSaveSettings](/constructor/updateAutoSaveSettings/) | Media autosave settings have changed and must be refetched using [account.getAutoSaveSettings](/method/account.getAutoSaveSettings/). |
| [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) | Connecting or disconnecting a [business bot](https://core.telegram.org/api/bots/connected-business-bots) or changing the connection settings will emit an [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) update to the bot, with the new settings and a `connection_id` that will be used by the bot to handle updates from and send messages as the user. |
| [updateBotCallbackQuery](/constructor/updateBotCallbackQuery/) | A callback button was pressed, and the button data was sent to the bot that created the button |
| [updateBotChatBoost](/constructor/updateBotChatBoost/) | A [channel/supergroup boost](https://core.telegram.org/api/boost) has changed (bots only) |
| [updateBotChatInviteRequester](/constructor/updateBotChatInviteRequester/) | Someone has requested to join a chat or channel (bots only, users will receive an [updatePendingJoinRequests](/constructor/updatePendingJoinRequests/), instead) |
| [updateBotCommands](/constructor/updateBotCommands/) | The [command set](https://core.telegram.org/api/bots/commands) of a certain bot in a certain chat has changed. |
| [updateBotDeleteBusinessMessage](/constructor/updateBotDeleteBusinessMessage/) | A message was deleted in a [connected business chat »](https://core.telegram.org/api/bots/connected-business-bots). |
| [updateBotEditBusinessMessage](/constructor/updateBotEditBusinessMessage/) | A message was edited in a [connected business chat »](https://core.telegram.org/api/bots/connected-business-bots). |
| [updateBotInlineQuery](/constructor/updateBotInlineQuery/) | An incoming inline query |
| [updateBotInlineSend](/constructor/updateBotInlineSend/) | The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the [feedback collecting](https://core.telegram.org/bots/inline#collecting-feedback) for details on how to enable these updates for your bot. |
| [updateBotMenuButton](/constructor/updateBotMenuButton/) | The menu button behavior for the specified bot has changed |
| [updateBotMessageReaction](/constructor/updateBotMessageReaction/) | Bots only: a user has changed their reactions on a message with public reactions. |
| [updateBotMessageReactions](/constructor/updateBotMessageReactions/) | Bots only: the number of reactions on a message with anonymous reactions has changed. |
| [updateBotNewBusinessMessage](/constructor/updateBotNewBusinessMessage/) | A message was received via a [connected business chat »](https://core.telegram.org/api/bots/connected-business-bots). |
| [updateBotPrecheckoutQuery](/constructor/updateBotPrecheckoutQuery/) | This object contains information about an incoming pre-checkout query. |
| [updateBotPurchasedPaidMedia](/constructor/updateBotPurchasedPaidMedia/) | Bots only: a user has purchased a [paid media](https://core.telegram.org/api/paid-media). |
| [updateBotShippingQuery](/constructor/updateBotShippingQuery/) | This object contains information about an incoming shipping query. |
| [updateBotStopped](/constructor/updateBotStopped/) | A bot was stopped or re-started. |
| [updateBotWebhookJSON](/constructor/updateBotWebhookJSON/) | A new incoming event; for bots only |
| [updateBotWebhookJSONQuery](/constructor/updateBotWebhookJSONQuery/) | A new incoming query; for bots only |
| [updateBusinessBotCallbackQuery](/constructor/updateBusinessBotCallbackQuery/) | A callback button sent via a [business connection](https://core.telegram.org/api/bots/connected-business-bots) was pressed, and the button data was sent to the bot that created the button. |
| [updateChannel](/constructor/updateChannel/) | Channel/supergroup ([channel](/constructor/channel/) and/or [channelFull](/constructor/channelFull/)) information was updated. This update can only be received through getDifference or in [updates](/constructor/updates/)/[updatesCombined](/constructor/updatesCombined/) constructors, so it will **always** come bundled with the updated [channel](/constructor/channel/), that should be applied [as usual »](https://core.telegram.org/api/peers), **without** re-fetching the info manually. However, full peer information will not come bundled in updates, so the full peer cache ([channelFull](/constructor/channelFull/)) must be invalidated for `channel_id` when receiving this update. |
| [updateChannelAvailableMessages](/constructor/updateChannelAvailableMessages/) | The history of a [channel/supergroup](https://core.telegram.org/api/channel) was hidden. |
| [updateChannelMessageForwards](/constructor/updateChannelMessageForwards/) | The forward counter of a message in a channel has changed |
| [updateChannelMessageViews](/constructor/updateChannelMessageViews/) | The view counter of a message in a channel has changed |
| [updateChannelParticipant](/constructor/updateChannelParticipant/) | A participant has left, joined, was banned or admined in a [channel or supergroup](https://core.telegram.org/api/channel). |
| [updateChannelReadMessagesContents](/constructor/updateChannelReadMessagesContents/) | The specified [channel/supergroup](https://core.telegram.org/api/channel) messages were read (emitted specifically for messages like voice messages or video, only once the media is watched and marked as read using [channels.readMessageContents](/method/channels.readMessageContents/)) |
| [updateChannelTooLong](/constructor/updateChannelTooLong/) | There are new updates in the specified channel, the client must fetch them manually by invoking [updates.getChannelDifference](/method/updates.getChannelDifference/) as specified in the [documentation »](/api/updates/). If the channel's PTS isn't currently stored in the database (i.e. we joined this channel on another client while the current client was offline), start fetching from the specified pts. Does **not** necessarily indicate the [channel message box size limit was reached](https://core.telegram.org/api/updates/#recovering-gaps-for-very-old-messages), it simply indicates that the number of queued updates in a message box is too large to be delivered passively through the socket. |
| [updateChannelUserTyping](/constructor/updateChannelUserTyping/) | A user is typing in a [supergroup, channel](https://core.telegram.org/api/channel) or [message thread](https://core.telegram.org/api/threads) |
| [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/) | Users may also choose to display messages from all topics as if they were sent to a normal group, using a "View as messages" setting in the local client.   This setting only affects the current account, and is synced to other logged in sessions using the [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/) method; invoking this method will update the value of the `view_forum_as_messages` flag of [channelFull](/constructor/channelFull/) or [dialog](/constructor/dialog/) and emit an [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/). |
| [updateChannelWebPage](/constructor/updateChannelWebPage/) | A webpage preview of a link in a [channel/supergroup](https://core.telegram.org/api/channel) message was generated |
| [updateChat](/constructor/updateChat/) | Chat ([chat](/constructor/chat/) and/or [chatFull](/constructor/chatFull/)) information was updated. This update can only be received through getDifference or in [updates](/constructor/updates/)/[updatesCombined](/constructor/updatesCombined/) constructors, so it will **always** come bundled with the updated [chat](/constructor/chat/), that should be applied [as usual »](https://core.telegram.org/api/peers), **without** re-fetching the info manually. However, full peer information will not come bundled in updates, so the full peer cache ([chatFull](/constructor/chatFull/)) must be invalidated for `chat_id` when receiving this update. |
| [updateChatDefaultBannedRights](/constructor/updateChatDefaultBannedRights/) | Default banned rights in a [basic group](https://core.telegram.org/api/channel#basic-groups) were updated |
| [updateChatParticipant](/constructor/updateChatParticipant/) | A user has joined or left a specific [basic group »](https://core.telegram.org/api/channel#basic-groups): this update can only be received by bots, see [here »](https://core.telegram.org/api/peers#basic-group-updates) for the user version of this update. |
| [updateChatParticipantAdd](/constructor/updateChatParticipantAdd/) | New group member. |
| [updateChatParticipantAdmin](/constructor/updateChatParticipantAdmin/) | Admin permissions of a user in a [basic group](https://core.telegram.org/api/channel#basic-groups) were changed |
| [updateChatParticipantDelete](/constructor/updateChatParticipantDelete/) | A member has left the [basic group](https://core.telegram.org/api/channel#basic-groups). |
| [updateChatParticipantRank](/constructor/updateChatParticipantRank/) | The [tag »](https://core.telegram.org/api/rank) of a participant of a [basic group »](https://core.telegram.org/api/channel#basic-groups) has changed. |
| [updateChatParticipants](/constructor/updateChatParticipants/) | The participants of a [basic group »](https://core.telegram.org/api/channel#basic-groups) changed. |
| [updateChatUserTyping](/constructor/updateChatUserTyping/) | The user is preparing a message in a group; typing, recording, uploading, etc. This update is valid for 6 seconds. If no further updates of this kind are received after 6 seconds, it should be considered that the user stopped doing whatever they were doing |
| [updateConfig](/constructor/updateConfig/) | The server-side configuration has changed; the client should re-fetch the config using [help.getConfig](/method/help.getConfig/) and [help.getAppConfig](/method/help.getAppConfig/). |
| [updateContactsReset](/constructor/updateContactsReset/) | All contacts were deleted |
| [updateDcOptions](/constructor/updateDcOptions/) | Changes in the data center configuration options. |
| [updateDeleteChannelMessages](/constructor/updateDeleteChannelMessages/) | Some messages in a [supergroup/channel](https://core.telegram.org/api/channel) were deleted |
| [updateDeleteGroupCallMessages](/constructor/updateDeleteGroupCallMessages/) | Indicates that messages were deleted from the [in-call message overlay »](https://core.telegram.org/api/group-calls#in-call-messages) of a video chat/livestream or live story, including in RTMP mode. |
| [updateDeleteMessages](/constructor/updateDeleteMessages/) | Messages were deleted. |
| [updateDeleteQuickReply](/constructor/updateDeleteQuickReply/) | A [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts) was deleted. This will **not** emit [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/) updates, even if all the messages in the shortcut are also deleted by this update. |
| [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/) | One or more messages in a [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts) were deleted. |
| [updateDeleteScheduledMessages](/constructor/updateDeleteScheduledMessages/) | Some [scheduled messages](https://core.telegram.org/api/scheduled-messages) were deleted (or sent) from the schedule queue of a chat |
| [updateDialogFilter](/constructor/updateDialogFilter/) | A new [folder](https://core.telegram.org/api/folders) was added |
| [updateDialogFilterOrder](/constructor/updateDialogFilterOrder/) | New [folder](https://core.telegram.org/api/folders) order |
| [updateDialogFilters](/constructor/updateDialogFilters/) | Clients should update [folder](https://core.telegram.org/api/folders) info |
| [updateDialogPinned](/constructor/updateDialogPinned/) | A dialog was pinned/unpinned |
| [updateDialogUnreadMark](/constructor/updateDialogUnreadMark/) | The manual unread mark of a chat was changed |
| [updateDraftMessage](/constructor/updateDraftMessage/) | Notifies a change of a message [draft](https://core.telegram.org/api/drafts). |
| [updateEditChannelMessage](/constructor/updateEditChannelMessage/) | A message was edited in a [channel/supergroup](https://core.telegram.org/api/channel) |
| [updateEditMessage](/constructor/updateEditMessage/) | A message was edited |
| [updateEmojiGameInfo](/constructor/updateEmojiGameInfo/) | Dice game update. |
| [updateEncryptedChatTyping](/constructor/updateEncryptedChatTyping/) | Interlocutor is typing a message in an encrypted chat. Update period is 6 second. If upon this time there is no repeated update, it shall be considered that the interlocutor stopped typing. |
| [updateEncryptedMessagesRead](/constructor/updateEncryptedMessagesRead/) | Communication history in an encrypted chat was marked as read. |
| [updateEncryption](/constructor/updateEncryption/) | Change of state in an encrypted chat. |
| [updateFavedStickers](/constructor/updateFavedStickers/) | The list of favorited stickers was changed, the client should call [messages.getFavedStickers](/method/messages.getFavedStickers/) to refetch the new list |
| [updateFolderPeers](/constructor/updateFolderPeers/) | The peer list of a [peer folder](https://core.telegram.org/api/folders#peer-folders) was updated |
| [updateGeoLiveViewed](/constructor/updateGeoLiveViewed/) | Live geoposition message was viewed |
| [updateGroupCall](/constructor/updateGroupCall/) | Indicates that group call information changed, see [applying group call updates »](https://core.telegram.org/api/group-calls#applying-group-call-updates). |
| [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/) | Contains conference call blockchain blocks, see [handling E2E group call updates »](https://core.telegram.org/api/end-to-end/group-calls#handling-updates). |
| [updateGroupCallConnection](/constructor/updateGroupCallConnection/) | Connection parameters returned after joining a group call, see [presentations »](https://core.telegram.org/api/group-calls#presentations) and [stream mode »](https://core.telegram.org/api/group-calls#stream-mode). If `presentation` is set, the parameters belong to the separate [presentation connection](https://core.telegram.org/api/group-calls#presentations); otherwise they belong to the main connection. For a normal WebRTC connection, pass `params` to the local tgcalls group-call engine as its join response payload. For [stream-mode calls](https://core.telegram.org/api/group-calls#detecting-stream-mode), where the client plays the call by [downloading media chunks »](https://core.telegram.org/api/group-calls#downloading-media-chunks) instead of using WebRTC, `params` instead has one of the following shapes: ``` {   "stream": true } ``` for a call that entered [stream mode](https://core.telegram.org/api/group-calls#stream-mode), or ``` {   "stream": true,   "rtmp": true } ``` for an [RTMP-mode call](https://core.telegram.org/api/group-calls#creating-and-publishing-an-rtmp-livestream). |
| [updateGroupCallEncryptedMessage](/constructor/updateGroupCallEncryptedMessage/) | A new E2E-encrypted message or emoji reaction was received in a conference call, see [here »](https://core.telegram.org/api/end-to-end/group-calls#receiving-and-decrypting-a-message) for the decryption process. |
| [updateGroupCallMessage](/constructor/updateGroupCallMessage/) | A new message, reaction, paid comment or donation was received through the [in-call message overlay »](https://core.telegram.org/api/group-calls#in-call-messages). |
| [updateGroupCallParticipants](/constructor/updateGroupCallParticipants/) | The participant list of a [group call](https://core.telegram.org/api/group-calls#applying-group-call-updates) has changed. |
| [updateInlineBotCallbackQuery](/constructor/updateInlineBotCallbackQuery/) | This notification is received by bots when a button is pressed |
| [updateLangPack](/constructor/updateLangPack/) | Language pack updated |
| [updateLangPackTooLong](/constructor/updateLangPackTooLong/) | A language pack has changed, the client should manually fetch the changed strings using [langpack.getDifference](/method/langpack.getDifference/) |
| [updateLoginToken](/constructor/updateLoginToken/) | A login token (for login via QR code) was accepted. |
| [updateMessageExtendedMedia](/constructor/updateMessageExtendedMedia/) | You [bought a paid media »](https://core.telegram.org/api/paid-media): this update contains the revealed media. |
| [updateMessageID](/constructor/updateMessageID/) | Sent message with **random\_id** client identifier was assigned an identifier. |
| [updateMessagePoll](/constructor/updateMessagePoll/) | The results of a poll have changed |
| [updateMessagePollVote](/constructor/updateMessagePollVote/) | A specific peer has voted in a poll (this update can only be received by a bot). |
| [updateMessageReactions](/constructor/updateMessageReactions/) | New [message reactions »](https://core.telegram.org/api/reactions) are available |
| [updateMonoForumNoPaidException](/constructor/updateMonoForumNoPaidException/) | An admin has (un)exempted this [monoforum topic »](https://core.telegram.org/api/monoforum) from payment to send messages using [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/). |
| [updateMoveStickerSetToTop](/constructor/updateMoveStickerSetToTop/) | A stickerset was just moved to top, [see here for more info »](https://core.telegram.org/api/stickers#recent-stickersets) |
| [updateNewAuthorization](/constructor/updateNewAuthorization/) | A new session logged into the current user's account through an unknown device. |
| [updateNewChannelMessage](/constructor/updateNewChannelMessage/) | A new message was sent in a [channel/supergroup](https://core.telegram.org/api/channel) |
| [updateNewEncryptedMessage](/constructor/updateNewEncryptedMessage/) | New encrypted message. |
| [updateNewMessage](/constructor/updateNewMessage/) | New message in a private chat or in a [basic group](https://core.telegram.org/api/channel#basic-groups). |
| [updateNewQuickReply](/constructor/updateNewQuickReply/) | A new [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts) was created. |
| [updateNewScheduledMessage](/constructor/updateNewScheduledMessage/) | A message was added to the [schedule queue of a chat](https://core.telegram.org/api/scheduled-messages) |
| [updateNewStickerSet](/constructor/updateNewStickerSet/) | A new stickerset was installed |
| [updateNewStoryReaction](/constructor/updateNewStoryReaction/) | Represents a new [reaction to a story](https://core.telegram.org/api/reactions#notifications-about-reactions). |
| [updateNotifySettings](/constructor/updateNotifySettings/) | Changes in notification settings. |
| [updatePaidReactionPrivacy](/constructor/updatePaidReactionPrivacy/) | Contains the current [default paid reaction privacy, see here »](https://core.telegram.org/api/reactions#paid-reactions) for more info. Clients should invoke [messages.getPaidReactionPrivacy](/method/messages.getPaidReactionPrivacy/) on startup to fetch the current default reaction privacy because this update is only sent to currently online sessions and cannot be fetched using getDifference on client startup. |
| [updatePeerBlocked](/constructor/updatePeerBlocked/) | We blocked a peer, see [here »](https://core.telegram.org/api/block) for more info on blocklists. |
| [updatePeerHistoryTTL](/constructor/updatePeerHistoryTTL/) | The Time-To-Live for messages sent by the current user in a specific chat has changed |
| [updatePeerLocated](/constructor/updatePeerLocated/) | List of peers near you was updated |
| [updatePeerSettings](/constructor/updatePeerSettings/) | Settings of a certain peer have changed |
| [updatePeerWallpaper](/constructor/updatePeerWallpaper/) | The [wallpaper »](https://core.telegram.org/api/wallpapers) of a given peer has changed. |
| [updatePendingJoinRequests](/constructor/updatePendingJoinRequests/) | Someone has requested to join a chat or channel |
| [updatePhoneCall](/constructor/updatePhoneCall/) | An incoming phone call |
| [updatePhoneCallSignalingData](/constructor/updatePhoneCallSignalingData/) | Incoming phone call signaling payload |
| [updatePinnedChannelMessages](/constructor/updatePinnedChannelMessages/) | Messages were pinned/unpinned in a [channel/supergroup](https://core.telegram.org/api/channel) |
| [updatePinnedDialogs](/constructor/updatePinnedDialogs/) | Pinned dialogs were updated |
| [updatePinnedForumTopic](/constructor/updatePinnedForumTopic/) | A [forum topic »](https://core.telegram.org/api/forum#forum-topics) was pinned or unpinned. |
| [updatePinnedForumTopics](/constructor/updatePinnedForumTopics/) | The [pinned topics](https://core.telegram.org/api/forum#forum-topics) of a forum have changed. |
| [updatePinnedMessages](/constructor/updatePinnedMessages/) | Some messages were pinned in a chat |
| [updatePinnedSavedDialogs](/constructor/updatePinnedSavedDialogs/) | [Pinned saved dialogs »](https://core.telegram.org/api/saved-messages) were updated |
| [updatePrivacy](/constructor/updatePrivacy/) | Privacy rules were changed |
| [updatePtsChanged](/constructor/updatePtsChanged/) | [Common message box sequence PTS](/api/updates/) has changed, [state has to be refetched using updates.getState](https://core.telegram.org/api/updates/#fetching-state) |
| [updateQuickReplies](/constructor/updateQuickReplies/) | Info about or the order of [quick reply shortcuts »](https://core.telegram.org/api/business#quick-reply-shortcuts) was changed. |
| [updateQuickReplyMessage](/constructor/updateQuickReplyMessage/) | A new message was added to a [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts). |
| [updateReadChannelDiscussionInbox](/constructor/updateReadChannelDiscussionInbox/) | Incoming comments in a [discussion thread](https://core.telegram.org/api/threads) were marked as read |
| [updateReadChannelDiscussionOutbox](/constructor/updateReadChannelDiscussionOutbox/) | Outgoing comments in a [discussion thread](https://core.telegram.org/api/threads) were marked as read |
| [updateReadChannelInbox](/constructor/updateReadChannelInbox/) | Incoming messages in a [channel/supergroup](https://core.telegram.org/api/channel) were read |
| [updateReadChannelOutbox](/constructor/updateReadChannelOutbox/) | Outgoing messages in a [channel/supergroup](https://core.telegram.org/api/channel) were read |
| [updateReadFeaturedEmojiStickers](/constructor/updateReadFeaturedEmojiStickers/) | Some featured [custom emoji stickers](https://core.telegram.org/api/custom-emoji) were marked as read |
| [updateReadFeaturedStickers](/constructor/updateReadFeaturedStickers/) | Some featured stickers were marked as read |
| [updateReadHistoryInbox](/constructor/updateReadHistoryInbox/) | Incoming messages were read |
| [updateReadHistoryOutbox](/constructor/updateReadHistoryOutbox/) | Outgoing messages were read |
| [updateReadMessagesContents](/constructor/updateReadMessagesContents/) | Contents of messages in the common [message box](/api/updates/) were read (emitted specifically for messages like voice messages or video, only once the media is watched and marked as read using [messages.readMessageContents](/method/messages.readMessageContents/)). |
| [updateReadMonoForumInbox](/constructor/updateReadMonoForumInbox/) | Incoming messages in a [monoforum topic](https://core.telegram.org/api/monoforum) were read |
| [updateReadMonoForumOutbox](/constructor/updateReadMonoForumOutbox/) | Outgoing messages in a [monoforum](https://core.telegram.org/api/monoforum) were read. |
| [updateReadStories](/constructor/updateReadStories/) | Stories of a specific peer were marked as read. |
| [updateRecentEmojiStatuses](/constructor/updateRecentEmojiStatuses/) | The list of recent [emoji statuses](https://core.telegram.org/api/emoji-status) has changed |
| [updateRecentReactions](/constructor/updateRecentReactions/) | The list of recent [message reactions](https://core.telegram.org/api/reactions) has changed |
| [updateRecentStickers](/constructor/updateRecentStickers/) | The recent sticker list was updated |
| [Updates](/constructor/updates/) | Full constructor of updates |
| [updates.channelDifference](/constructor/updates.channelDifference/) | The new updates |
| [updates.channelDifferenceEmpty](/constructor/updates.channelDifferenceEmpty/) | There are no new updates |
| [updates.channelDifferenceTooLong](/constructor/updates.channelDifferenceTooLong/) | The passed `pts` is too old: one or more updates starting from the specified PTS were deleted from the message box of this channel. For supergroups/channels, this usually happens for updates older than `latestPts - 100000` (though do not rely on this value, it's a server-side implementation detail that may change, and should not be used by clients in any way). |
| [updates.difference](/constructor/updates.difference/) | Full list of occurred events. |
| [updates.differenceEmpty](/constructor/updates.differenceEmpty/) | No events. |
| [updates.differenceSlice](/constructor/updates.differenceSlice/) | Incomplete list of occurred events. |
| [updates.differenceTooLong](/constructor/updates.differenceTooLong/) | The difference is [too long](https://core.telegram.org/api/updates/#recovering-gaps), and the specified state must be used to refetch updates. |
| [updates.state](/constructor/updates.state/) | Updates state. |
| [updateSavedDialogPinned](/constructor/updateSavedDialogPinned/) | A [saved message dialog](https://core.telegram.org/api/saved-messages) was pinned/unpinned |
| [updateSavedGifs](/constructor/updateSavedGifs/) | The saved gif list has changed, the client should refetch it using [messages.getSavedGifs](https://core.telegram.org/method/messages.getSavedGifs) |
| [updateSavedReactionTags](/constructor/updateSavedReactionTags/) | The list of [reaction tag »](https://core.telegram.org/api/saved-messages#tags) names assigned by the user has changed and should be refetched using [messages.getSavedReactionTags »](/method/messages.getSavedReactionTags/). |
| [updateSavedRingtones](/constructor/updateSavedRingtones/) | The list of saved notification sounds has changed, use [account.getSavedRingtones](/method/account.getSavedRingtones/) to fetch the new list. |
| [updatesCombined](/constructor/updatesCombined/) | Constructor for a group of updates. |
| [updateSentPhoneCode](/constructor/updateSentPhoneCode/) | A paid login SMS code was successfully sent. |
| [updateSentStoryReaction](/constructor/updateSentStoryReaction/) | Indicates we [reacted to a story »](https://core.telegram.org/api/stories#reactions). |
| [updateServiceNotification](/constructor/updateServiceNotification/) | A service message for the user. The app must show the message to the user upon receiving this update. In case the **popup** parameter was passed, the text message must be displayed in a popup alert immediately upon receipt. It is recommended to handle the text as you would an ordinary message in terms of highlighting links, etc. The message must also be stored locally as part of the message history with the user id `777000` (Telegram Notifications). |
| [updateShort](/constructor/updateShort/) | Shortened constructor containing info on one update not requiring auxiliary data |
| [updateShortChatMessage](/constructor/updateShortChatMessage/) | Shortened constructor containing info on one new incoming text message from a chat |
| [updateShortMessage](/constructor/updateShortMessage/) | Info about a message sent to (received from) another user |
| [updateShortSentMessage](/constructor/updateShortSentMessage/) | Shortened constructor containing info on one outgoing message to a contact (the destination chat has to be extracted from the method call that returned this object). |
| [updateSmsJob](/constructor/updateSmsJob/) | A new SMS job was received |
| [updateStarGiftAuctionState](/constructor/updateStarGiftAuctionState/) | Contains updates to [auction state, see here »](https://core.telegram.org/api/auctions) for more info on how to enable these updates. |
| [updateStarGiftAuctionUserState](/constructor/updateStarGiftAuctionUserState/) | Contains updates to [auction state related to the current user, see here »](https://core.telegram.org/api/auctions) for more info on how to enable these updates. |
| [updateStarGiftCraftFail](/constructor/updateStarGiftCraftFail/) | Indicates that a [crafting »](https://core.telegram.org/api/gifts#crafting-collectible-gifts) attempt did not produce a new collectible gift. |
| [updateStarsBalance](/constructor/updateStarsBalance/) | The current account's [Telegram Stars balance »](https://core.telegram.org/api/stars) has changed. |
| [updateStarsRevenueStatus](/constructor/updateStarsRevenueStatus/) | The [Telegram Star balance of a channel/bot we own has changed »](https://core.telegram.org/api/stars#revenue-statistics). |
| [updateStickerSets](/constructor/updateStickerSets/) | Installed stickersets have changed, the client should refetch them as [described in the docs](https://core.telegram.org/api/stickers#installing-stickersets). |
| [updateStickerSetsOrder](/constructor/updateStickerSetsOrder/) | The order of stickersets was changed |
| [updatesTooLong](/constructor/updatesTooLong/) | The number of queued updates in the common message box is too large to be delivered passively through the socket, invoke [updates.getDifference](/method/updates.getDifference/) to fetch the difference as specified in the [documentation »](/api/updates/). Does **not** necessarily indicate the [message box size limit was reached](https://core.telegram.org/api/updates/#recovering-gaps-for-very-old-messages), it simply indicates that the number of queued updates in a message box is too large to be delivered passively through the socket. |
| [updateStoriesStealthMode](/constructor/updateStoriesStealthMode/) | Indicates that [stories stealth mode](https://core.telegram.org/api/stories#stealth-mode) was activated. |
| [updateStory](/constructor/updateStory/) | A new story was posted. |
| [updateStoryID](/constructor/updateStoryID/) | A story was successfully uploaded. Once a story is successfully uploaded, an [updateStoryID](/constructor/updateStoryID/) will be returned, indicating the story ID (`id`) that was attributed to the story (like for messages, `random_id` indicates the `random_id` that was passed to [stories.sendStory](/method/stories.sendStory/): this way, you can tell which story was assigned a specific `id` by checking which [stories.sendStory](/method/stories.sendStory/) call has the returned `random_id`). |
| [updateTheme](/constructor/updateTheme/) | A cloud theme was updated |
| [updateTranscribedAudio](/constructor/updateTranscribedAudio/) | A pending [voice message transcription »](https://core.telegram.org/api/transcribe) initiated with [messages.transcribeAudio](/method/messages.transcribeAudio/) was updated. |
| [updateUser](/constructor/updateUser/) | User ([user](/constructor/user/) and/or [userFull](/constructor/userFull/)) information was updated. This update can only be received through getDifference or in [updates](/constructor/updates/)/[updatesCombined](/constructor/updatesCombined/) constructors, so it will **always** come bundled with the updated [user](/constructor/user/), that should be applied [as usual »](https://core.telegram.org/api/peers), **without** re-fetching the info manually. However, full peer information will not come bundled in updates, so the full peer cache ([userFull](/constructor/userFull/)) must be invalidated for `user_id` when receiving this update. |
| [updateUserEmojiStatus](/constructor/updateUserEmojiStatus/) | The [emoji status](https://core.telegram.org/api/emoji-status) of a certain user has changed |
| [updateUserName](/constructor/updateUserName/) | Changes the user's first name, last name and username. |
| [updateUserPhone](/constructor/updateUserPhone/) | A user's phone number was changed |
| [updateUserStatus](/constructor/updateUserStatus/) | Contact status update. |
| [updateUserTyping](/constructor/updateUserTyping/) | The user is preparing a message; typing, recording, uploading, etc. This update is valid for 6 seconds. If no further updates of this kind are received after 6 seconds, it should be considered that the user stopped doing whatever they were doing |
| [updateWebPage](/constructor/updateWebPage/) | An [instant view](https://instantview.telegram.org) webpage preview was generated |
| [updateWebViewResultSent](/constructor/updateWebViewResultSent/) | Indicates to a bot that a webview was closed and an inline message was sent on behalf of the user using [messages.sendWebViewResultMessage](/method/messages.sendWebViewResultMessage/) |
| [upload.cdnFile](/constructor/upload.cdnFile/) | Represent a chunk of a [CDN](https://core.telegram.org/cdn) file. |
| [upload.cdnFileReuploadNeeded](/constructor/upload.cdnFileReuploadNeeded/) | The file was cleared from the temporary RAM cache of the [CDN](https://core.telegram.org/cdn) and has to be re-uploaded. |
| [upload.file](/constructor/upload.file/) | File content. |
| [upload.fileCdnRedirect](/constructor/upload.fileCdnRedirect/) | The file must be downloaded from a [CDN DC](https://core.telegram.org/cdn). |
| [upload.webFile](/constructor/upload.webFile/) | Represents a chunk of an [HTTP webfile](/api/files/) downloaded through telegram's secure MTProto servers |
| [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/) | Details about an accepted authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization) |
| [urlAuthResultDefault](/constructor/urlAuthResultDefault/) | Details about an accepted authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization) |
| [urlAuthResultRequest](/constructor/urlAuthResultRequest/) | Details about the authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization) |
| [user](/constructor/user/) | Indicates info about a certain user. Unless specified otherwise, when updating the [local peer database](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor). See [here »](https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L3106) for an implementation of the logic to use when updating the [local user peer database](https://core.telegram.org/api/peers). |
| [userEmpty](/constructor/userEmpty/) | Empty constructor, non-existent user. |
| [userFull](/constructor/userFull/) | Extended user info When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor). |
| [username](/constructor/username/) | Contains information about a username. |
| [userProfilePhoto](/constructor/userProfilePhoto/) | User profile photo. |
| [userProfilePhotoEmpty](/constructor/userProfilePhotoEmpty/) | Profile photo has not been set, or was hidden. |
| [users.savedMusic](/constructor/users.savedMusic/) | List of songs currently pinned on a user's profile, see [here »](https://core.telegram.org/api/profile#music) for more info. |
| [users.savedMusicNotModified](/constructor/users.savedMusicNotModified/) | This subset of the songs currently pinned on a user's profile hasn't changed, see [here »](https://core.telegram.org/api/profile#music) for more info. |
| [users.userFull](/constructor/users.userFull/) | Full user information |
| [users.users](/constructor/users.users/) | Describes a list of users (or bots). |
| [users.usersSlice](/constructor/users.usersSlice/) | Describes a partial list of users. |
| [userStatusEmpty](/constructor/userStatusEmpty/) | User status has not been set yet. |
| [userStatusLastMonth](/constructor/userStatusLastMonth/) | Online status: last seen last month |
| [userStatusLastWeek](/constructor/userStatusLastWeek/) | Online status: last seen last week |
| [userStatusOffline](/constructor/userStatusOffline/) | The user's offline status. |
| [userStatusOnline](/constructor/userStatusOnline/) | Online status of the user. |
| [userStatusRecently](/constructor/userStatusRecently/) | Online status: last seen recently |
| [vector](/constructor/vector/) | A universal vector constructor. |
| [videoSize](/constructor/videoSize/) | An [animated profile picture](https://core.telegram.org/api/files/#animated-profile-pictures) in MPEG4 format |
| [videoSizeEmojiMarkup](/constructor/videoSizeEmojiMarkup/) | An [animated profile picture](https://core.telegram.org/api/files/#animated-profile-pictures) based on a [custom emoji sticker](https://core.telegram.org/api/custom-emoji). |
| [videoSizeStickerMarkup](/constructor/videoSizeStickerMarkup/) | An [animated profile picture](https://core.telegram.org/api/files/#animated-profile-pictures) based on a [sticker](https://core.telegram.org/api/stickers). |
| [wallPaper](/constructor/wallPaper/) | Represents a [wallpaper](https://core.telegram.org/api/wallpapers) based on an image. |
| [wallPaperNoFile](/constructor/wallPaperNoFile/) | Represents a [wallpaper](https://core.telegram.org/api/wallpapers) only based on colors/gradients. |
| [wallPaperSettings](/constructor/wallPaperSettings/) | [Wallpaper](https://core.telegram.org/api/wallpapers) rendering information. |
| [webAuthorization](/constructor/webAuthorization/) | Represents a bot logged in using the [Telegram login widget](https://core.telegram.org/widgets/login) |
| [webDocument](/constructor/webDocument/) | Remote document |
| [webDocumentNoProxy](/constructor/webDocumentNoProxy/) | Remote document that can be downloaded without [proxying through telegram](/api/files/) |
| [webPage](/constructor/webPage/) | Webpage preview The `type` field indicates the type of the web page, which influences how the preview is rendered (i.e. which extra action button is offered, where the media is taken from, and which [WebPageAttribute](/type/WebPageAttribute/) is present in the `attributes` field). It can be one of the following: -   `app` - Preview of a [Mini App link »](https://core.telegram.org/api/links#main-mini-app-links): the `photo` is the app icon, and clients render a button that launches the [Mini App »](https://core.telegram.org/api/bots/webapps). -   `article` - Preview of a generic external article or webpage. If `cached_page` is set, clients render an [instant view](https://instantview.telegram.org) button. -   `document` - Preview of an external document or file, contained in the `document` field. -   `gif` - Preview of an external animated GIF. If `embed_url`+`embed_type` are set the GIF is rendered using an embedded player, otherwise the animation is contained in the `document` field. -   `photo` - Preview of an external photo, contained in the `photo` field. -   `profile` - Preview of an external author or profile page; clients typically render this with a small thumbnail (forced small media). -   `telegram_aicomposetone` - Preview of an [AI compose tone link »](https://core.telegram.org/api/links#ai-compose-tone-links), shared when previewing a [custom AI composer tone »](https://core.telegram.org/api/ai#ai-compose-tones). The `attributes` field contains a [webPageAttributeAiComposeTone](https://core.telegram.org/constructor/webPageAttributeAiComposeTone) with the [custom emoji »](https://core.telegram.org/api/custom-emoji) representing the tone; clients render a button that applies the shared tone. -   `telegram_album` - Preview of a [message link »](https://core.telegram.org/api/links#message-links) pointing to a group of messages (album), rendered as a grouped media album rather than as a single-media preview. For this type the album media is **not** taken from the top-level `photo`/`document` fields: instead, a [cached\_page](#) ([instant view](https://instantview.telegram.org)) must be present, and clients render the items of its first [pageBlockCollage](/constructor/pageBlockCollage/) or [pageBlockSlideshow](/constructor/pageBlockSlideshow/) block. Each [pageBlockPhoto](/constructor/pageBlockPhoto/)/[pageBlockVideo](/constructor/pageBlockVideo/) item in that block references a photo or video by ID, resolved against the `photos` and `documents` of the `cached_page`. The instant view itself is not offered as a button (the album media replaces it). -   `telegram_auction` - Preview of an [auction link »](https://core.telegram.org/api/links#auction-links) to a [collectible gift auction »](https://core.telegram.org/api/auctions). The `attributes` field contains a [webPageAttributeStarGiftAuction](/constructor/webPageAttributeStarGiftAuction/) with the auctioned gift and the auction end date; clients render a button to join the auction, or to view the results once the auction has ended. -   `telegram_background` - Preview of a [wallpaper deep link »](https://core.telegram.org/api/links#wallpaper-links) to a [chat wallpaper »](https://core.telegram.org/api/wallpapers). The wallpaper settings (background colors, gradient rotation, pattern intensity, blur/motion, etc.) are parsed from the deep link in the `url`, not from dedicated fields. Image wallpapers carry the wallpaper image in the `document` field. Pattern wallpapers also use the `document` field, with `application/x-tgwallpattern` or `image/png` as the pattern MIME type; the colors from the `url` are rendered as the pattern background and tint. Solid-color and gradient wallpapers carry no media and are rendered from the colors encoded in the `url`. No `photo` is present. Clients render a button to apply the background. -   `telegram_bot` - Preview of a [bot link »](https://core.telegram.org/api/links#bot-links), rendered like a profile preview using the bot's avatar in the `photo` field. -   `telegram_botapp` - Preview of a [direct Mini App link »](https://core.telegram.org/api/links#direct-mini-app-links) to a named bot Mini App: the `photo` is the app preview, and clients render a button that opens the Mini App. -   `telegram_call` - Preview of a [conference link »](https://core.telegram.org/api/links#conference-links) to a [group call/conference call »](https://core.telegram.org/api/group-calls); clients render a button to join the call (no `photo`/`document` is present). -   `telegram_channel` - Preview of a [public username link »](https://core.telegram.org/api/links#public-username-links) to a channel, using the channel's avatar in the `photo` field; clients render a button to open/join the channel. -   `telegram_channel_boost` - Preview of a [boost link »](https://core.telegram.org/api/links#boost-links) to [boost a channel »](https://core.telegram.org/api/boost), using the channel avatar in the `photo` field; clients render a button to boost the channel. -   `telegram_channel_direct` - Preview of a [monoforum link »](https://core.telegram.org/api/links#monoforum-links) to the direct messages of a channel, using the channel avatar in the `photo` field. -   `telegram_channel_request` - Preview of a [chat invite link »](https://core.telegram.org/api/links#chat-invite-links) to a channel that has [join requests »](https://core.telegram.org/api/invites#join-requests) enabled; clients render a "Request to join" button. -   `telegram_chat` - Preview of a [public username link »](https://core.telegram.org/api/links#public-username-links) to a basic group, using the group avatar in the `photo` field; clients render a button to open/join the group. -   `telegram_chat_request` - Preview of a [chat invite link »](https://core.telegram.org/api/links#chat-invite-links) to a group that has [join requests »](https://core.telegram.org/api/invites#join-requests) enabled; clients render a "Request to join" button. -   `telegram_chatlist` - Preview of a [chat folder link »](https://core.telegram.org/api/links#chat-folder-links) to a [shareable chat folder »](https://core.telegram.org/api/folders#shared-folders) (no `photo`/`document` is present): clients use the `site_name`, `title` and `description` fields for the preview text, no [WebPageAttribute](/type/WebPageAttribute/) is required, and the action button opens the deep link in `url` to import the folder. -   `telegram_collection` - Preview of a [gift collection link »](https://core.telegram.org/api/links#gift-collection-links) to a [gift collection »](https://core.telegram.org/api/gifts#gift-collections). The `attributes` field contains a [webPageAttributeStarGiftCollection](/constructor/webPageAttributeStarGiftCollection/) with the collection's icon stickers; clients render a button to view the collection. -   `telegram_community` - Preview of a [chat folder link »](https://core.telegram.org/api/links#chat-folder-links) to a [shareable chat folder »](https://core.telegram.org/api/folders#shared-folders), rendered like `telegram_chatlist`. -   `telegram_giftcode` - Preview of a [premium giftcode link »](https://core.telegram.org/api/links#premium-giftcode-links) to a [Telegram Premium gift code »](https://core.telegram.org/api/giveaways); clients render a button to view/redeem the gift code (no `photo`/`document` is present). -   `telegram_group_boost` - Preview of a [boost link »](https://core.telegram.org/api/links#boost-links) to [boost a supergroup »](https://core.telegram.org/api/boost), using the supergroup avatar in the `photo` field; clients render a button to boost the supergroup. -   `telegram_livestream` - Preview of a [video chat/livestream link »](https://core.telegram.org/api/links#video-chat-livestream-links) to a [live video stream »](https://core.telegram.org/api/group-calls), rendered as a video chat preview marked as a livestream; clients render a button to watch the stream. -   `telegram_megagroup` - Preview of a [public username link »](https://core.telegram.org/api/links#public-username-links) to a supergroup, using the supergroup avatar in the `photo` field; clients render a button to open/join the supergroup. -   `telegram_megagroup_request` - Preview of a [chat invite link »](https://core.telegram.org/api/links#chat-invite-links) to a supergroup that has [join requests »](https://core.telegram.org/api/invites#join-requests) enabled; clients render a "Request to join" button. -   `telegram_message` - Preview of a [message link »](https://core.telegram.org/api/links#message-links) to a single message; clients render a button to open the message. Any `cached_page` instant view is ignored for this type. -   `telegram_newbot` - Preview of a [managed bot creation request link »](https://core.telegram.org/api/links#managed-bot-creation-request-links) used to create a new bot; clients render a button to create/register the managed bot. -   `telegram_nft` - Preview of a [collectible gift link »](https://core.telegram.org/api/links#collectible-gift-link) to a [collectible (unique) gift »](https://core.telegram.org/api/gifts#collectible-gifts). The `attributes` field contains a [webPageAttributeUniqueStarGift](/constructor/webPageAttributeUniqueStarGift/) with the unique gift; clients render a button to view the collectible. -   `telegram_stickerset` - Preview of a [stickerset link »](https://core.telegram.org/api/links#stickerset-links) to a [sticker or custom emoji set »](https://core.telegram.org/api/stickers). The `attributes` field contains a [webPageAttributeStickerSet](/constructor/webPageAttributeStickerSet/) with a few preview stickers and the `emojis`/`text_color` flags; clients display the preview stickers and render a button to view the sticker set (or custom emoji set, if the `emojis` flag is set). -   `telegram_story` - Preview of a [story link »](https://core.telegram.org/api/links#story-links) to a [story »](https://core.telegram.org/api/stories). The `attributes` field contains a [webPageAttributeStory](/constructor/webPageAttributeStory/) with the story's peer and ID (and optionally the embedded [storyItem](/constructor/storyItem/)); the preview media and caption are taken from the story, and clients render a button to view it. -   `telegram_story_album` - Preview of a [story album link »](https://core.telegram.org/api/links#story-album-links) to a [story album »](https://core.telegram.org/api/stories): a `photo` (and optional video `document`) cover is present, and clients render a button to view the story album. -   `telegram_theme` - Preview of a [theme link »](https://core.telegram.org/api/links#theme-links) to a [theme »](https://core.telegram.org/api/themes). The `attributes` field contains a [webPageAttributeTheme](/constructor/webPageAttributeTheme/) with the theme file(s) and theme settings; clients render a button to apply the theme. -   `telegram_user` - Preview of a [public username link »](https://core.telegram.org/api/links#public-username-links) to a user, rendered like a profile preview using the user's avatar in the `photo` field. -   `telegram_videochat` - Preview of a [video chat/livestream link »](https://core.telegram.org/api/links#video-chat-livestream-links) to a [video chat »](https://core.telegram.org/api/group-calls), rendered as a video chat preview. -   `telegram_voicechat` - Preview of a [video chat/livestream link »](https://core.telegram.org/api/links#video-chat-livestream-links) to a [voice chat »](https://core.telegram.org/api/group-calls), rendered as a (non-video) video chat preview; clients render a button to join the voice chat. -   `video` - Preview of an external video. If `embed_url`+`embed_type` are set the video is rendered using an embedded player, otherwise the video is contained in the `document` field. |
| [webPageAttributeStarGiftAuction](/constructor/webPageAttributeStarGiftAuction/) | Contains info about a [collectible gift auction »](https://core.telegram.org/api/auctions) for a [webPage](/constructor/webPage/) preview of an [auction »](https://core.telegram.org/api/auctions) (the [webPage](/constructor/webPage/) will have a `type` of `telegram_auction`). |
| [webPageAttributeStarGiftCollection](/constructor/webPageAttributeStarGiftCollection/) | Contains info about a [gift collection »](https://core.telegram.org/api/gifts#gift-collections) for a [webPage](/constructor/webPage/) preview of a [gift collection »](https://core.telegram.org/api/gifts#gift-collections) (the [webPage](/constructor/webPage/) will have a `type` of `telegram_collection`). |
| [webPageAttributeStickerSet](/constructor/webPageAttributeStickerSet/) | Contains info about a [stickerset »](https://core.telegram.org/api/stickers), for a [webPage](/constructor/webPage/) preview of a [stickerset deep link »](https://core.telegram.org/api/links#stickerset-links) (the [webPage](/constructor/webPage/) will have a `type` of `telegram_stickerset`). |
| [webPageAttributeStory](/constructor/webPageAttributeStory/) | Webpage preview of a Telegram story |
| [webPageAttributeTheme](/constructor/webPageAttributeTheme/) | Page theme |
| [webPageAttributeUniqueStarGift](/constructor/webPageAttributeUniqueStarGift/) | Contains info about [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts) for a [webPage](/constructor/webPage/) preview of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts) (the [webPage](/constructor/webPage/) will have a `type` of `telegram_nft`). |
| [webPageEmpty](/constructor/webPageEmpty/) | No preview is available for the webpage |
| [webPageNotModified](/constructor/webPageNotModified/) | The preview of the webpage hasn't changed |
| [webPagePending](/constructor/webPagePending/) | A preview of the webpage is currently being generated |
| [webViewMessageSent](/constructor/webViewMessageSent/) | Info about a sent inline webview message |
| [webViewResultUrl](/constructor/webViewResultUrl/) | Contains the webview URL with appropriate theme and user info parameters added |