---
title: "Типы — справочник схемы TL"
original: "https://core.telegram.org/schema"
section: ref
layout: layout.njk
---

# Типы — справочник схемы TL

Полный список: каждый тип схемы TL со ссылкой на страницу с определением, параметрами и описанием. Всего: **597**.

| Название | Описание |
|---|---|
| [Account.AuthorizationForm](/type/account.AuthorizationForm/) | Authorization form |
| [Account.Authorizations](/type/account.Authorizations/) | Logged-in sessions |
| [Account.AutoDownloadSettings](/type/account.AutoDownloadSettings/) | Media autodownload settings |
| [account.AutoSaveSettings](/type/account.AutoSaveSettings/) | Contains media autosave settings |
| [account.BusinessChatLinks](/type/account.BusinessChatLinks/) | Contains info about [business chat deep links »](https://core.telegram.org/api/business#business-chat-links) created by the current account. |
| [account.ChatThemes](/type/account.ChatThemes/) | Available chat themes |
| [account.ConnectedBots](/type/account.ConnectedBots/) | Info about currently connected [business bots](https://core.telegram.org/api/bots/connected-business-bots). |
| [account.ContentSettings](/type/account.ContentSettings/) | Sensitive content settings |
| [account.EmailVerified](/type/account.EmailVerified/) | Email verification status |
| [account.EmojiStatuses](/type/account.EmojiStatuses/) | A list of [emoji statuses](https://core.telegram.org/api/emoji-status) |
| [account.PaidMessagesRevenue](/type/account.PaidMessagesRevenue/) | Total number of non-refunded [Telegram Stars](https://core.telegram.org/api/stars) a user has spent on sending us messages either directly or through a channel, see [here »](https://core.telegram.org/api/paid-messages) for more info on paid messages. |
| [Account.PasskeyRegistrationOptions](/type/account.PasskeyRegistrationOptions/) | Passkey registration options, see [here »](https://core.telegram.org/api/passkeys#creating-a-passkey) for more info on the full flow. |
| [Account.Passkeys](/type/account.Passkeys/) | List of [passkeys »](https://core.telegram.org/api/passkeys#list-passkeys) associated to the current account. |
| [account.Password](/type/account.Password/) | Configuration for two-factor authorization |
| [account.PasswordInputSettings](/type/account.PasswordInputSettings/) | Constructor for setting up a new [2FA SRP password](/api/srp/) |
| [account.PasswordSettings](/type/account.PasswordSettings/) | Private info associated to the password info (recovery email, telegram [passport](https://core.telegram.org/passport) info & so on) |
| [Account.PrivacyRules](/type/account.PrivacyRules/) | Privacy rules |
| [account.ResetPasswordResult](/type/account.ResetPasswordResult/) | Result of an [account.resetPassword](/method/account.resetPassword/) request. |
| [account.ResolvedBusinessChatLinks](/type/account.ResolvedBusinessChatLinks/) | Contains info about a single resolved [business chat deep link »](https://core.telegram.org/api/business#business-chat-links). |
| [account.SavedMusicIds](/type/account.SavedMusicIds/) | List of IDs of songs ([document](/constructor/document/).`id`s) currently pinned on our profile, see [here »](https://core.telegram.org/api/profile#music) for more info. |
| [account.SavedRingtone](/type/account.SavedRingtone/) | Contains information about a saved notification sound |
| [account.SavedRingtones](/type/account.SavedRingtones/) | Contains a list of saved notification sounds |
| [account.SentEmailCode](/type/account.SentEmailCode/) | The email code that was sent |
| [Account.Takeout](/type/account.Takeout/) | Takeout info |
| [account.Themes](/type/account.Themes/) | Installed themes |
| [Account.TmpPassword](/type/account.TmpPassword/) | Temporary password |
| [Account.WallPapers](/type/account.WallPapers/) | [Wallpapers](https://core.telegram.org/api/wallpapers) |
| [Account.WebAuthorizations](/type/account.WebAuthorizations/) | Web authorizations |
| [AccountDaysTTL](/type/AccountDaysTTL/) | Time-to-live of current account |
| [AttachMenuBot](/type/AttachMenuBot/) | Represents a [bot mini app that can be launched from the attachment menu »](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu) |
| [AttachMenuBotIcon](/type/AttachMenuBotIcon/) | Represents an attachment menu icon for [bot mini apps »](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu) |
| [AttachMenuBotIconColor](/type/AttachMenuBotIconColor/) | Represents an attachment menu icon color for [bot mini apps »](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu) |
| [AttachMenuBots](/type/AttachMenuBots/) | Represents a list of [bot mini apps that can be launched from the attachment menu »](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu) |
| [AttachMenuBotsBot](/type/AttachMenuBotsBot/) | Represents a [bot mini app that can be launched from the attachment menu »](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu) |
| [AttachMenuPeerType](/type/AttachMenuPeerType/) | Indicates a supported peer type for a [bot mini app attachment menu](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu) |
| [AuctionBidLevel](/type/AuctionBidLevel/) | Describes a bid in an [auction](https://core.telegram.org/api/auctions). |
| [auth.Authorization](/type/auth.Authorization/) | Object contains info on user authorization. |
| [auth.CodeType](/type/auth.CodeType/) | Type of verification code that will be sent next if you call the resendCode method |
| [Auth.ExportedAuthorization](/type/auth.ExportedAuthorization/) | Exported authorization |
| [auth.LoggedOut](/type/auth.LoggedOut/) | [Future auth token »](https://core.telegram.org/api/auth/#future-auth-tokens) to be used on subsequent authorizations |
| [auth.LoginToken](/type/auth.LoginToken/) | Login token (for QR code login) |
| [Auth.PasskeyLoginOptions](/type/auth.PasskeyLoginOptions/) | Passkey login options, see [here »](https://core.telegram.org/api/passkeys#logging-in-with-a-passkey) for more info on the full flow. |
| [auth.PasswordRecovery](/type/auth.PasswordRecovery/) | Recovery info of a [2FA password](/api/srp/), only for accounts with a [recovery email configured](https://core.telegram.org/api/srp/#email-verification). |
| [auth.SentCode](/type/auth.SentCode/) | Contains info on a confirmation code message sent via SMS, phone call or Telegram. |
| [auth.SentCodeType](/type/auth.SentCodeType/) | Type of the verification code that was sent |
| [Authorization](/type/Authorization/) | Represents a logged-in session |
| [AutoDownloadSettings](/type/AutoDownloadSettings/) | Media autodownload settings |
| [AutoSaveException](/type/AutoSaveException/) | Peer-specific autosave settings |
| [AutoSaveSettings](/type/AutoSaveSettings/) | Media autosave settings |
| [AvailableEffect](/type/AvailableEffect/) | Describes a [message effect »](https://core.telegram.org/api/effects). |
| [AvailableReaction](/type/AvailableReaction/) | Animations associated with a message reaction |
| [BankCardOpenUrl](/type/BankCardOpenUrl/) | Credit card info URL provided by the bank |
| [BaseTheme](/type/BaseTheme/) | Basic theme settings |
| [Birthday](/type/Birthday/) | [Birthday](https://core.telegram.org/api/profile#birthday) information for a user. |
| [Bool](/type/Bool/) | Boolean type. |
| [Boost](/type/Boost/) | Info about one or more [boosts](https://core.telegram.org/api/boost) applied by a specific user. |
| [BotApp](/type/BotApp/) | Contains information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps). |
| [BotAppSettings](/type/BotAppSettings/) | [Mini app »](https://core.telegram.org/api/bots/webapps) settings |
| [BotBusinessConnection](/type/BotBusinessConnection/) | Contains info about a [bot business connection](https://core.telegram.org/api/bots/connected-business-bots). |
| [BotCommand](/type/BotCommand/) | Describes a bot command that can be used in a chat |
| [BotCommandScope](/type/BotCommandScope/) | Represents a scope where the bot commands, specified using [bots.setBotCommands](/method/bots.setBotCommands/) will be valid. |
| [BotInfo](/type/BotInfo/) | Info about bots (available bot commands, etc) |
| [BotInlineMessage](/type/BotInlineMessage/) | Inline message |
| [BotInlineResult](/type/BotInlineResult/) | Results of an inline query |
| [BotMenuButton](/type/BotMenuButton/) | Indicates the action to execute when pressing the in-UI menu button for bots |
| [BotPreviewMedia](/type/BotPreviewMedia/) | Represents a [Main Mini App preview media, see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info. |
| [bots.BotInfo](/type/bots.BotInfo/) | Localized name, about text and description of a bot. |
| [bots.PopularAppBots](/type/bots.PopularAppBots/) | Popular [Main Mini Apps](https://core.telegram.org/api/bots/webapps#main-mini-apps), to be used in the [apps tab of global search »](https://core.telegram.org/api/search#apps-tab). |
| [bots.PreviewInfo](/type/bots.PreviewInfo/) | Contains info about [Main Mini App previews, see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info. |
| [BotVerification](/type/BotVerification/) | Describes a [bot verification icon »](https://core.telegram.org/api/bots/verification). |
| [BotVerifierSettings](/type/BotVerifierSettings/) | Info about the current [verifier bot »](https://core.telegram.org/api/bots/verification). |
| [BusinessAwayMessage](/type/BusinessAwayMessage/) | Describes a [Telegram Business away message](https://core.telegram.org/api/business#away-messages), automatically sent to users writing to us when we're offline, during closing hours, while we're on vacation, or in some other custom time period when we cannot immediately answer to the user. |
| [BusinessAwayMessageSchedule](/type/BusinessAwayMessageSchedule/) | Specifies when should the [Telegram Business away messages](https://core.telegram.org/api/business#away-messages) be sent. |
| [BusinessBotRecipients](/type/BusinessBotRecipients/) | Specifies the private chats that a [connected business bot »](https://core.telegram.org/api/bots/connected-business-bots) may receive messages and interact with. |
| [BusinessBotRights](/type/BusinessBotRights/) | [Business bot rights](https://core.telegram.org/api/bots/connected-business-bots). |
| [BusinessChatLink](/type/BusinessChatLink/) | Contains info about a [business chat deep link »](https://core.telegram.org/api/business#business-chat-links) created by the current account. |
| [BusinessGreetingMessage](/type/BusinessGreetingMessage/) | Describes a [Telegram Business greeting](https://core.telegram.org/api/business#greeting-messages), automatically sent to new users writing to us in private for the first time, or after a certain inactivity period. |
| [BusinessIntro](/type/BusinessIntro/) | [Telegram Business introduction »](https://core.telegram.org/api/business#business-introduction). |
| [BusinessLocation](/type/BusinessLocation/) | Represents the location of a [Telegram Business »](https://core.telegram.org/api/business#location). |
| [BusinessRecipients](/type/BusinessRecipients/) | Specifies the chats that **can** receive Telegram Business [away »](https://core.telegram.org/api/business#away-messages) and [greeting »](https://core.telegram.org/api/business#greeting-messages) messages. |
| [BusinessWeeklyOpen](/type/BusinessWeeklyOpen/) | A time interval, indicating the opening hours of a [Telegram Business](https://core.telegram.org/api/business#opening-hours). |
| [BusinessWorkHours](/type/BusinessWorkHours/) | Specifies a set of [Telegram Business opening hours](https://core.telegram.org/api/business#opening-hours). |
| [bytes](/type/bytes/) | Basic bare type. It is an alias of the **[string](/type/string/)** type, with the difference that the value may contain arbitrary byte sequences, including invalid UTF-8 sequences. When computing crc32 for a constructor or method it is necessary to replace all byte types with string types. |
| [CdnConfig](/type/CdnConfig/) | Configuration for [CDN](https://core.telegram.org/cdn) file downloads. |
| [CdnPublicKey](/type/CdnPublicKey/) | Public key to use **only** during handshakes to [CDN](https://core.telegram.org/cdn) DCs. |
| [ChannelAdminLogEvent](/type/ChannelAdminLogEvent/) | An event in a channel admin log |
| [ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/) | Channel admin log event |
| [ChannelAdminLogEventsFilter](/type/ChannelAdminLogEventsFilter/) | Filter for fetching events in the channel admin log |
| [ChannelLocation](/type/ChannelLocation/) | Geographical location of supergroup (geogroups) |
| [ChannelMessagesFilter](/type/ChannelMessagesFilter/) | Filter for fetching only certain types of channel messages |
| [ChannelParticipant](/type/ChannelParticipant/) | Channel participant |
| [ChannelParticipantsFilter](/type/ChannelParticipantsFilter/) | Filter for fetching channel participants |
| [Channels.AdminLogResults](/type/channels.AdminLogResults/) | Admin log events |
| [Channels.ChannelParticipant](/type/channels.ChannelParticipant/) | Channel participant |
| [Channels.ChannelParticipants](/type/channels.ChannelParticipants/) | Channel/supergroup participants |
| [channels.SendAsPeers](/type/channels.SendAsPeers/) | A list of peers that can be used to send messages in a specific group |
| [channels.SponsoredMessageReportResult](/type/channels.SponsoredMessageReportResult/) | Status of the method call used to report a [sponsored message »](https://core.telegram.org/api/sponsored-messages). |
| [Chat](/type/Chat/) | Object defines a group. |
| [ChatAdminRights](/type/ChatAdminRights/) | Represents the rights of an admin in a [channel/supergroup](https://core.telegram.org/api/channel). |
| [ChatAdminWithInvites](/type/ChatAdminWithInvites/) | Info about chat invites generated by admins. |
| [ChatBannedRights](/type/ChatBannedRights/) | Represents the rights of a normal user in a [supergroup/channel/chat](https://core.telegram.org/api/channel). |
| [ChatFull](/type/ChatFull/) | Full info about a [channel](https://core.telegram.org/api/channel#channels), [supergroup](https://core.telegram.org/api/channel#supergroups), [gigagroup](https://core.telegram.org/api/channel#gigagroups) or [basic group](https://core.telegram.org/api/channel#basic-groups). |
| [ChatInvite](/type/ChatInvite/) | Chat invite |
| [ChatInviteImporter](/type/ChatInviteImporter/) | When and which user joined the chat using a chat invite |
| [chatlists.ChatlistInvite](/type/chatlists.ChatlistInvite/) | Info about a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |
| [chatlists.ChatlistUpdates](/type/chatlists.ChatlistUpdates/) | Updated info about a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |
| [chatlists.ExportedChatlistInvite](/type/chatlists.ExportedChatlistInvite/) | Exported [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |
| [chatlists.ExportedInvites](/type/chatlists.ExportedInvites/) | A list of exported [chat folder deep links »](https://core.telegram.org/api/links#chat-folder-links). |
| [ChatOnlines](/type/ChatOnlines/) | Number of online users in a chat |
| [ChatParticipant](/type/ChatParticipant/) | Details of a group member. |
| [ChatParticipants](/type/ChatParticipants/) | Contains the full list of members of [basic groups »](https://core.telegram.org/api/channel#basic-groups); is **NOT** usable for supergroups/channels. |
| [ChatPhoto](/type/ChatPhoto/) | Object defines a group profile photo. |
| [ChatReactions](/type/ChatReactions/) | Available chat reactions |
| [ChatTheme](/type/ChatTheme/) | A chat theme |
| [CodeSettings](/type/CodeSettings/) | Settings for the code type to send |
| [Config](/type/Config/) | Object contains info on API configuring parameters. |
| [ConnectedBot](/type/ConnectedBot/) | Contains info about a [connected business bot »](https://core.telegram.org/api/bots/connected-business-bots). |
| [ConnectedBotStarRef](/type/ConnectedBotStarRef/) | Info about an [active affiliate program we have with a Mini App](https://core.telegram.org/api/bots/referrals#becoming-an-affiliate) |
| [Contact](/type/Contact/) | A contact of the current user. |
| [ContactBirthday](/type/ContactBirthday/) | Birthday information of a contact. |
| [contacts.Blocked](/type/contacts.Blocked/) | Info on users from the current user's black list. |
| [contacts.ContactBirthdays](/type/contacts.ContactBirthdays/) | Birthday information of our contacts. |
| [contacts.Contacts](/type/contacts.Contacts/) | Info on the current user's contact list. |
| [contacts.Found](/type/contacts.Found/) | Object contains info on users found by name substring and auxiliary data. |
| [contacts.ImportedContacts](/type/contacts.ImportedContacts/) | Object contains info on successfully imported contacts. |
| [Contacts.ResolvedPeer](/type/contacts.ResolvedPeer/) | Peer returned after resolving a `@username` |
| [contacts.SponsoredPeers](/type/contacts.SponsoredPeers/) | A list of sponsored peers. |
| [Contacts.TopPeers](/type/contacts.TopPeers/) | Top peers |
| [ContactStatus](/type/ContactStatus/) | Contact status: online / offline. |
| [DataJSON](/type/DataJSON/) | Represent a JSON-encoded object |
| [DcOption](/type/DcOption/) | Information for connection to data center. |
| [DecryptedMessage](/type/DecryptedMessage/) | Object describes the contents of an encrypted message. |
| [DecryptedMessageAction](/type/DecryptedMessageAction/) | Object describes the action to which a service message is linked. |
| [DecryptedMessageLayer](/type/DecryptedMessageLayer/) | Object describes encrypted message content in relation to the required layer. |
| [DecryptedMessageMedia](/type/DecryptedMessageMedia/) | Object describes media contents of an encrypted message. |
| [DefaultHistoryTTL](/type/DefaultHistoryTTL/) | Contains info about the default value of the Time-To-Live setting, applied to all new chats. |
| [Dialog](/type/Dialog/) | Chat info. |
| [DialogFilter](/type/DialogFilter/) | Dialog filter ([folder »](https://core.telegram.org/api/folders)) |
| [DialogFilterSuggested](/type/DialogFilterSuggested/) | Suggested dialog filters ([folder »](https://core.telegram.org/api/folders)) |
| [DialogPeer](/type/DialogPeer/) | Peer, or all peers in a folder |
| [DisallowedGiftsSettings](/type/DisallowedGiftsSettings/) | Disallow the reception of specific [gift](https://core.telegram.org/api/gifts) types. |
| [Document](/type/Document/) | A document. |
| [DocumentAttribute](/type/DocumentAttribute/) | Various possible attributes of a document (used to define if it's a sticker, a GIF, a video, a mask sticker, an image, an audio, and so on) #### [End-to-end schema](/schema/end-to-end/) ``` ===23=== documentAttributeAnimated#11b58939 = DocumentAttribute; documentAttributeAudio#051448e5 duration:int = DocumentAttribute; documentAttributeFilename#15590068 file_name:string = DocumentAttribute; documentAttributeImageSize#6c37c15c w:int h:int = DocumentAttribute; documentAttributeSticker#fb0a5727 = DocumentAttribute; documentAttributeVideo#5910cccb duration:int w:int h:int = DocumentAttribute; ===45=== documentAttributeAudio#ded218e0 duration:int title:string performer:string = DocumentAttribute; documentAttributeSticker#3a556302 alt:string stickerset:InputStickerSet = DocumentAttribute; ===46=== documentAttributeAudio#9852f9c6 flags:# duration:int title:flags.0?string performer:flags.1?string waveform:flags.2?bytes = DocumentAttribute; ===66=== documentAttributeVideo#0ef02ce6 flags:# duration:int w:int h:int = DocumentAttribute; ``` API schema: |
| [double](/type/double/) | A basic bare type, values of which correspond two-element sequences containing 64-bit real numbers in a standard _double_ format. [More on basic types»](/mtproto/serialize/) |
| [DraftMessage](/type/DraftMessage/) | Represents a message [draft](https://core.telegram.org/api/drafts). |
| [EmailVerification](/type/EmailVerification/) | Email verification code or token |
| [EmailVerifyPurpose](/type/EmailVerifyPurpose/) | Email verification purpose |
| [EmojiGroup](/type/EmojiGroup/) | Represents an [emoji category](https://core.telegram.org/api/emoji-categories). |
| [EmojiKeyword](/type/EmojiKeyword/) | Emoji keyword |
| [EmojiKeywordsDifference](/type/EmojiKeywordsDifference/) | New emoji keywords |
| [EmojiLanguage](/type/EmojiLanguage/) | Emoji language |
| [EmojiList](/type/EmojiList/) | Represents a list of [custom emojis](https://core.telegram.org/api/custom-emoji). |
| [EmojiStatus](/type/EmojiStatus/) | [Emoji status](https://core.telegram.org/api/emoji-status) |
| [EmojiURL](/type/EmojiURL/) | Emoji URL |
| [EncryptedChat](/type/EncryptedChat/) | Object contains info on an encrypted chat. |
| [EncryptedFile](/type/EncryptedFile/) | Seta an encrypted file. |
| [EncryptedMessage](/type/EncryptedMessage/) | Object contains encrypted message. |
| [Error](/type/Error/) | An object containing a query error. |
| [ExportedChatInvite](/type/ExportedChatInvite/) | Exported chat invite |
| [ExportedChatlistInvite](/type/ExportedChatlistInvite/) | An exported [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |
| [ExportedContactToken](/type/ExportedContactToken/) | Describes a [temporary profile link](https://core.telegram.org/api/links#temporary-profile-links). |
| [ExportedMessageLink](/type/ExportedMessageLink/) | HTTP link and embed info of channel message |
| [ExportedStoryLink](/type/ExportedStoryLink/) | Represents a [story deep link](https://core.telegram.org/api/stories#story-links) |
| [FactCheck](/type/FactCheck/) | Represents a [fact-check »](https://core.telegram.org/api/factcheck) created by an independent fact-checker. |
| [FileHash](/type/FileHash/) | Hash of an uploaded file, to be checked for validity after download |
| [FileLocation](/type/FileLocation/) | Indicates the location of a photo, will be deprecated soon |
| [Folder](/type/Folder/) | A folder |
| [FolderPeer](/type/FolderPeer/) | Peer associated to folder |
| [ForumTopic](/type/ForumTopic/) | Contains information about a [forum topic](https://core.telegram.org/api/forum#forum-topics) |
| [FoundStory](/type/FoundStory/) | A story found using [global story search »](https://core.telegram.org/api/stories#searching-stories). |
| [fragment.CollectibleInfo](/type/fragment.CollectibleInfo/) | Info about a [fragment collectible](https://core.telegram.org/api/fragment). |
| [Game](/type/Game/) | Indicates an already sent game |
| [GeoPoint](/type/GeoPoint/) | Object defines a GeoPoint. |
| [GeoPointAddress](/type/GeoPointAddress/) | Address optionally associated to a [geoPoint](/constructor/geoPoint/). |
| [GlobalPrivacySettings](/type/GlobalPrivacySettings/) | Global privacy settings |
| [GroupCall](/type/GroupCall/) | A group call |
| [GroupCallDonor](/type/GroupCallDonor/) | Describes a live story donor in the [donation leaderboard »](https://core.telegram.org/api/group-calls#paid-live-story-donations). |
| [GroupCallMessage](/type/GroupCallMessage/) | Represents an in-call message, [emoji reaction »](https://core.telegram.org/api/group-calls#in-call-reactions), paid live story comment or standalone paid live story donation. #### [End-to-end schema](/schema/end-to-end/) ``` ===216=== groupCallMessage#907ce88e random_id:long message:TextWithEntities = GroupCallMessage; ``` API schema: |
| [GroupCallParticipant](/type/GroupCallParticipant/) | Info about a group call participant |
| [GroupCallParticipantVideo](/type/GroupCallParticipantVideo/) | Info about a video stream |
| [GroupCallParticipantVideoSourceGroup](/type/GroupCallParticipantVideoSourceGroup/) | Describes a group of video synchronization source identifiers |
| [GroupCallStreamChannel](/type/GroupCallStreamChannel/) | Info about an RTMP stream in a group call or livestream |
| [help.AppConfig](/type/help.AppConfig/) | Contains various [client configuration parameters](https://core.telegram.org/api/config#client-configuration) |
| [help.AppUpdate](/type/help.AppUpdate/) | Contains info on app update availability. |
| [help.CountriesList](/type/help.CountriesList/) | Name, ISO code, localized name and phone codes/patterns of all available countries |
| [help.Country](/type/help.Country/) | Name, ISO code, localized name and phone codes/patterns of a specific country |
| [help.CountryCode](/type/help.CountryCode/) | Country code and phone number pattern of a specific country |
| [Help.DeepLinkInfo](/type/help.DeepLinkInfo/) | Contains information about an unsupported [deep link »](https://core.telegram.org/api/links#unsupported-links) |
| [help.InviteText](/type/help.InviteText/) | Object contains info on the text of a message with an invitation. |
| [Help.PassportConfig](/type/help.PassportConfig/) | Telegram [passport](https://core.telegram.org/passport) configuration |
| [Help.PeerColorOption](/type/help.PeerColorOption/) | Contains info about a [color palette »](https://core.telegram.org/api/colors). |
| [Help.PeerColors](/type/help.PeerColors/) | Contains info about multiple [color palettes »](https://core.telegram.org/api/colors). |
| [Help.PeerColorSet](/type/help.PeerColorSet/) | Contains info about a [color palette »](https://core.telegram.org/api/colors). |
| [help.PremiumPromo](/type/help.PremiumPromo/) | Telegram Premium promotion information |
| [help.PromoData](/type/help.PromoData/) | Info about pinned MTProxy or Public Service Announcement peers. |
| [Help.RecentMeUrls](/type/help.RecentMeUrls/) | Recent t.me URLs |
| [help.Support](/type/help.Support/) | Info about the support user, relevant to the current user. |
| [Help.SupportName](/type/help.SupportName/) | Get localized name for support user |
| [help.TermsOfService](/type/help.TermsOfService/) | Contains info about the latest telegram Terms Of Service. |
| [Help.TermsOfServiceUpdate](/type/help.TermsOfServiceUpdate/) | Update of Telegram's terms of service |
| [help.TimezonesList](/type/help.TimezonesList/) | Timezone information that may be used elsewhere in the API, such as to set [Telegram Business opening hours »](https://core.telegram.org/api/business#opening-hours). |
| [Help.UserInfo](/type/help.UserInfo/) | User info |
| [HighScore](/type/HighScore/) | Game high score |
| [ImportedContact](/type/ImportedContact/) | Object contains info on a successfully imported contact. |
| [InlineBotSwitchPM](/type/InlineBotSwitchPM/) | The bot requested the user to message them in private |
| [InlineBotWebView](/type/InlineBotWebView/) | Specifies an [inline mode mini app](https://core.telegram.org/api/bots/webapps#inline-mode-mini-apps) button, shown on top of the inline query results list. |
| [InlineQueryPeerType](/type/InlineQueryPeerType/) | Inline query peer type. |
| [InputAppEvent](/type/InputAppEvent/) | Object contains info about an event that occurred in the application. |
| [InputBotApp](/type/InputBotApp/) | Used to fetch information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps) |
| [InputBotInlineMessage](/type/InputBotInlineMessage/) | Represents a sent inline message from the perspective of a bot |
| [InputBotInlineMessageID](/type/InputBotInlineMessageID/) | Represents a sent inline message from the perspective of a bot |
| [InputBotInlineResult](/type/InputBotInlineResult/) | Inline bot result |
| [InputBusinessAwayMessage](/type/InputBusinessAwayMessage/) | Describes a [Telegram Business away message](https://core.telegram.org/api/business#away-messages), automatically sent to users writing to us when we're offline, during closing hours, while we're on vacation, or in some other custom time period when we cannot immediately answer to the user. |
| [InputBusinessBotRecipients](/type/InputBusinessBotRecipients/) | Specifies the private chats that a [connected business bot »](https://core.telegram.org/api/bots/connected-business-bots) may interact with. |
| [InputBusinessChatLink](/type/InputBusinessChatLink/) | Contains info about a [business chat deep link »](https://core.telegram.org/api/business#business-chat-links) to be created by the current account. |
| [InputBusinessGreetingMessage](/type/InputBusinessGreetingMessage/) | Describes a [Telegram Business greeting](https://core.telegram.org/api/business#greeting-messages), automatically sent to new users writing to us in private for the first time, or after a certain inactivity period. |
| [InputBusinessIntro](/type/InputBusinessIntro/) | [Telegram Business introduction »](https://core.telegram.org/api/business#business-introduction). |
| [InputBusinessRecipients](/type/InputBusinessRecipients/) | Specifies the chats that **can** receive Telegram Business [away »](https://core.telegram.org/api/business#away-messages) and [greeting »](https://core.telegram.org/api/business#greeting-messages) messages. If `exclude_selected` is set, specifies all chats that **cannot** receive Telegram Business [away »](https://core.telegram.org/api/business#away-messages) and [greeting »](https://core.telegram.org/api/business#greeting-messages) messages. |
| [InputChannel](/type/InputChannel/) | Represents a channel |
| [InputChatlist](/type/InputChatlist/) | Represents a folder |
| [InputChatPhoto](/type/InputChatPhoto/) | Defines a new group profile photo. |
| [InputChatTheme](/type/InputChatTheme/) | Specifies a [chat theme »](https://core.telegram.org/api/themes#chat-themes). |
| [InputCheckPasswordSRP](/type/InputCheckPasswordSRP/) | Constructors for checking the validity of a [2FA SRP password](/api/srp/). See [here »](https://core.telegram.org/api/srp/#using-the-2fa-password) for more info on the 2FA authentication flow for methods that require it, before and after login. |
| [InputClientProxy](/type/InputClientProxy/) | Info about an [MTProxy](https://core.telegram.org/mtproto/mtproto-transports/#transport-obfuscation) used to connect. |
| [InputCollectible](/type/InputCollectible/) | Represents a [Fragment collectible »](https://core.telegram.org/api/fragment). |
| [InputContact](/type/InputContact/) | Object defines a contact from the user's phone book. |
| [InputDialogPeer](/type/InputDialogPeer/) | Peer, or all peers in a certain folder |
| [InputDocument](/type/InputDocument/) | Defines a document for subsequent interaction. |
| [InputEncryptedChat](/type/InputEncryptedChat/) | An [e2e encrypted chat](/api/end-to-end/). |
| [InputEncryptedFile](/type/InputEncryptedFile/) | Object sets encrypted file for attachment |
| [InputFile](/type/InputFile/) | Defines a file uploaded by the client. |
| [InputFileLocation](/type/InputFileLocation/) | Defines the location of a file for download. |
| [InputFolderPeer](/type/InputFolderPeer/) | Peer in a folder |
| [InputGame](/type/InputGame/) | A game to send |
| [InputGeoPoint](/type/InputGeoPoint/) | Defines a GeoPoint. |
| [InputGroupCall](/type/InputGroupCall/) | Indicates a group call |
| [InputInvoice](/type/InputInvoice/) | An invoice |
| [InputMedia](/type/InputMedia/) | Defines media content of a message. |
| [InputMessage](/type/InputMessage/) | A message |
| [InputNotifyPeer](/type/InputNotifyPeer/) | Object defines the set of users and/or groups that generate notifications. |
| [InputPasskeyCredential](/type/InputPasskeyCredential/) | Credential used to register a [passkey »](https://core.telegram.org/api/passkeys) or to log in with one. |
| [InputPasskeyResponse](/type/InputPasskeyResponse/) | WebAuthn response generated by the authenticator when registering or logging in with a [public-key passkey »](https://core.telegram.org/api/passkeys). |
| [InputPaymentCredentials](/type/InputPaymentCredentials/) | Payment credentials |
| [InputPeer](/type/InputPeer/) | Peer |
| [InputPeerNotifySettings](/type/InputPeerNotifySettings/) | Notifications settings. |
| [InputPhoneCall](/type/InputPhoneCall/) | Phone call |
| [InputPhoto](/type/InputPhoto/) | Defines a photo for further interaction. |
| [InputPrivacyKey](/type/InputPrivacyKey/) | Privacy **keys** together with [privacy rules »](https://core.telegram.org/api/privacy#privacy-rules) indicate _what_ can or can't someone do and are specified by a [PrivacyKey](/type/PrivacyKey/) constructor, and its input counterpart [InputPrivacyKey](/type/InputPrivacyKey/). See the [privacy documentation »](https://core.telegram.org/api/privacy) for more info. |
| [InputPrivacyRule](/type/InputPrivacyRule/) | Privacy **rules** indicate _who_ can or can't do something and are specified by a [PrivacyRule](/type/PrivacyRule/), and its input counterpart [InputPrivacyRule](/type/InputPrivacyRule/). See the [privacy documentation »](https://core.telegram.org/api/privacy) for more info. |
| [InputQuickReplyShortcut](/type/InputQuickReplyShortcut/) | Represents a [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts). |
| [InputReplyTo](/type/InputReplyTo/) | Contains info about a message or story to reply to. |
| [InputSavedStarGift](/type/InputSavedStarGift/) | Points to a [gift »](https://core.telegram.org/api/gifts). |
| [InputSecureFile](/type/InputSecureFile/) | Secure [passport](https://core.telegram.org/passport) file, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#inputsecurefile) |
| [InputSecureValue](/type/InputSecureValue/) | Secure value, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) |
| [InputSingleMedia](/type/InputSingleMedia/) | A single media in an [album or grouped media](https://core.telegram.org/api/files/#albums-grouped-media) sent with [messages.sendMultiMedia](/method/messages.sendMultiMedia/). |
| [InputStarGiftAuction](/type/InputStarGiftAuction/) | Identifies a [collectible gift auction »](https://core.telegram.org/api/auctions), either by the ID of the linked collectible gift or by an auction deep link slug. |
| [InputStarsTransaction](/type/InputStarsTransaction/) | Used to fetch info about a [Telegram Star transaction »](https://core.telegram.org/api/stars#balance-and-transaction-history). |
| [InputStickeredMedia](/type/InputStickeredMedia/) | Represents a media with attached stickers |
| [InputStickerSet](/type/InputStickerSet/) | Represents a stickerset #### [End-to-end schema](/schema/end-to-end/) ``` ===45=== inputStickerSetEmpty#ffb62b95 = InputStickerSet; inputStickerSetShortName#861cc8a0 short_name:string = InputStickerSet; ``` API schema: |
| [InputStickerSetItem](/type/InputStickerSetItem/) | Sticker |
| [InputStorePaymentPurpose](/type/InputStorePaymentPurpose/) | Info about a Telegram Premium purchase |
| [InputTheme](/type/InputTheme/) | Cloud theme |
| [InputThemeSettings](/type/InputThemeSettings/) | Theme settings |
| [InputUser](/type/InputUser/) | Defines a user for subsequent interaction. |
| [InputWallPaper](/type/InputWallPaper/) | [Wallpaper](https://core.telegram.org/api/wallpapers) |
| [InputWebDocument](/type/InputWebDocument/) | Specifies a document that will have to be downloaded from the URL by the telegram servers |
| [InputWebFileLocation](/type/InputWebFileLocation/) | Location of remote file |
| [int](/type/int/) | A basic bare type, the values of which correspond to single-element sequences, i.e. numbers from -2^31 to 2^31-1 which in this case represent themselves. [More on basic types »](/mtproto/serialize/) |
| [int256](/type/int256/) | A basic bare type, the values of which correspond to a 256-bit integer. [More on basic types »](/mtproto/serialize/) |
| [Invoice](/type/Invoice/) | Invoice |
| [JSONObjectValue](/type/JSONObjectValue/) | JSON key: value pair #### [End-to-end schema](/schema/end-to-end/) ``` ===216=== jsonObjectValue#c0de1bd9 key:string value:JSONValue = JSONObjectValue; ``` API schema: |
| [JSONValue](/type/JSONValue/) | JSON value #### [End-to-end schema](/schema/end-to-end/) ``` ===216=== jsonArray#f7444763 value:Vector<JSONValue> = JSONValue; jsonBool#c7345e6a value:Bool = JSONValue; jsonNull#3f6d7b68 = JSONValue; jsonNumber#2be0dfa4 value:double = JSONValue; jsonObject#99c1d49d value:Vector<JSONObjectValue> = JSONValue; jsonString#b71e767a value:string = JSONValue; ``` API schema: |
| [KeyboardButton](/type/KeyboardButton/) | Bot or inline keyboard buttons |
| [KeyboardButtonRow](/type/KeyboardButtonRow/) | Bot or inline keyboard rows |
| [KeyboardButtonStyle](/type/KeyboardButtonStyle/) | This constructor allows setting a custom background color and custom emoji label for a button, see [here »](https://core.telegram.org/api/bots/buttons#button-styles) for more info. |
| [LabeledPrice](/type/LabeledPrice/) | Labeled pricetag |
| [LangPackDifference](/type/LangPackDifference/) | Language pack changes |
| [LangPackLanguage](/type/LangPackLanguage/) | Language pack language |
| [LangPackString](/type/LangPackString/) | Language pack string |
| [long](/type/long/) | A basic bare type, elements of which correspond to two-element sequences, representing 64-bit signed numbers (little-endian). [More on basic types »](/mtproto/serialize/) |
| [MaskCoords](/type/MaskCoords/) | Mask coordinates (if this is a mask sticker, attached to a photo) |
| [MediaArea](/type/MediaArea/) | Represents a [story media area »](https://core.telegram.org/api/stories#media-areas) |
| [MediaAreaCoordinates](/type/MediaAreaCoordinates/) | Coordinates and size of a clickable rectangular area on top of a story. |
| [Message](/type/Message/) | Object describing a message. |
| [MessageAction](/type/MessageAction/) | Object describing actions connected to a service message. |
| [MessageEntity](/type/MessageEntity/) | Message entities, representing styled text in a message #### [End-to-end schema](/schema/end-to-end/) ``` ===45=== messageEntityBold#bd610bc9 offset:int length:int = MessageEntity; messageEntityBotCommand#6cef8ac7 offset:int length:int = MessageEntity; messageEntityCode#28a20571 offset:int length:int = MessageEntity; messageEntityEmail#64e475c2 offset:int length:int = MessageEntity; messageEntityHashtag#6f635b0d offset:int length:int = MessageEntity; messageEntityItalic#826f8b60 offset:int length:int = MessageEntity; messageEntityMention#fa04579d offset:int length:int = MessageEntity; messageEntityPre#73924be0 offset:int length:int language:string = MessageEntity; messageEntityTextUrl#76a6d327 offset:int length:int url:string = MessageEntity; messageEntityUnknown#bb92ba95 offset:int length:int = MessageEntity; messageEntityUrl#6ed02538 offset:int length:int = MessageEntity; ===101=== messageEntityBlockquote#020df5d0 offset:int length:int = MessageEntity; messageEntityStrike#bf0693d4 offset:int length:int = MessageEntity; messageEntityUnderline#9c4e7e8b offset:int length:int = MessageEntity; ===144=== messageEntityCustomEmoji#c8cf05f8 offset:int length:int document_id:long = MessageEntity; messageEntitySpoiler#32ca960f offset:int length:int = MessageEntity; ``` API schema: |
| [MessageExtendedMedia](/type/MessageExtendedMedia/) | [Paid media, see here »](https://core.telegram.org/api/paid-media) for more info. |
| [MessageFwdHeader](/type/MessageFwdHeader/) | Info about a forwarded message |
| [MessageMedia](/type/MessageMedia/) | Media |
| [MessagePeerReaction](/type/MessagePeerReaction/) | How a certain peer reacted to the message |
| [MessagePeerVote](/type/MessagePeerVote/) | How a user voted in a poll |
| [MessageRange](/type/MessageRange/) | Indicates a range of chat messages |
| [MessageReactions](/type/MessageReactions/) | [Message reactions »](https://core.telegram.org/api/reactions) |
| [MessageReactor](/type/MessageReactor/) | Info about a user in the [paid Star reactions leaderboard](https://core.telegram.org/api/reactions#paid-reactions) for a message. |
| [MessageReplies](/type/MessageReplies/) | Info about [post comments (for channels) or message replies (for groups)](https://core.telegram.org/api/threads) |
| [MessageReplyHeader](/type/MessageReplyHeader/) | Reply information |
| [MessageReportOption](/type/MessageReportOption/) | Report menu option |
| [messages.AffectedFoundMessages](/type/messages.AffectedFoundMessages/) | Messages found and affected by changes |
| [messages.AffectedHistory](/type/messages.AffectedHistory/) | Object contains info on affected part of communication history with the user or in a chat. |
| [Messages.AffectedMessages](/type/messages.AffectedMessages/) | Messages affected by changes |
| [Messages.AllStickers](/type/messages.AllStickers/) | All stickers |
| [Messages.ArchivedStickers](/type/messages.ArchivedStickers/) | Archived stickers |
| [messages.AvailableEffects](/type/messages.AvailableEffects/) | Full list of usable [animated message effects »](https://core.telegram.org/api/effects). |
| [messages.AvailableReactions](/type/messages.AvailableReactions/) | Animations and metadata associated with [message reactions »](https://core.telegram.org/api/reactions) |
| [messages.BotApp](/type/messages.BotApp/) | Contains information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps) |
| [Messages.BotCallbackAnswer](/type/messages.BotCallbackAnswer/) | Callback answer of bot |
| [Messages.BotPreparedInlineMessage](/type/messages.BotPreparedInlineMessage/) | Represents a [prepared inline message saved by a bot, to be sent to the user via a web app »](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message) |
| [messages.BotResults](/type/messages.BotResults/) | Result of a query to an inline bot |
| [messages.ChatAdminsWithInvites](/type/messages.ChatAdminsWithInvites/) | Info about chat invites generated by admins. |
| [messages.ChatFull](/type/messages.ChatFull/) | Full info about a [channel](https://core.telegram.org/api/channel#channels), [supergroup](https://core.telegram.org/api/channel#supergroups), [gigagroup](https://core.telegram.org/api/channel#gigagroups) or [basic group](https://core.telegram.org/api/channel#basic-groups). |
| [messages.ChatInviteImporters](/type/messages.ChatInviteImporters/) | List of users that imported a chat invitation link. |
| [messages.Chats](/type/messages.Chats/) | Object contains list of chats with auxiliary data. |
| [messages.CheckedHistoryImportPeer](/type/messages.CheckedHistoryImportPeer/) | Contains a confirmation text to be shown to the user, upon [importing chat history, click here for more info »](https://core.telegram.org/api/import). |
| [Messages.DhConfig](/type/messages.DhConfig/) | Contains Diffie-Hellman key generation protocol parameters. |
| [messages.DialogFilters](/type/messages.DialogFilters/) | [Folder](https://core.telegram.org/api/folders) information |
| [messages.Dialogs](/type/messages.Dialogs/) | Object contains a list of chats with messages and auxiliary data. |
| [messages.DiscussionMessage](/type/messages.DiscussionMessage/) | Info about a message thread |
| [Messages.EmojiGameInfo](/type/messages.EmojiGameInfo/) | Dice game information. |
| [Messages.EmojiGameOutcome](/type/messages.EmojiGameOutcome/) | Dice game outcome. |
| [messages.EmojiGroups](/type/messages.EmojiGroups/) | Represents a list of [emoji categories](https://core.telegram.org/api/emoji-categories). |
| [messages.ExportedChatInvite](/type/messages.ExportedChatInvite/) | Contains info about a chat invite, and eventually a pointer to the newest chat invite. |
| [messages.ExportedChatInvites](/type/messages.ExportedChatInvites/) | Info about chat invites exported by a certain admin. |
| [Messages.FavedStickers](/type/messages.FavedStickers/) | Favorited stickers |
| [Messages.FeaturedStickers](/type/messages.FeaturedStickers/) | Featured stickers |
| [messages.ForumTopics](/type/messages.ForumTopics/) | Contains information about multiple [forum topics](https://core.telegram.org/api/forum#forum-topics) |
| [Messages.FoundStickers](/type/messages.FoundStickers/) | Found [stickers](https://core.telegram.org/api/stickers) |
| [Messages.FoundStickerSets](/type/messages.FoundStickerSets/) | Found stickersets |
| [Messages.HighScores](/type/messages.HighScores/) | High scores (in games) |
| [messages.HistoryImport](/type/messages.HistoryImport/) | Identifier of a [history import session, click here for more info »](https://core.telegram.org/api/import). |
| [messages.HistoryImportParsed](/type/messages.HistoryImportParsed/) | Contains information about a chat export file, generated by a foreign chat app. |
| [messages.InactiveChats](/type/messages.InactiveChats/) | Inactive chat list |
| [messages.InvitedUsers](/type/messages.InvitedUsers/) | Contains info about successfully or unsuccessfully [invited »](https://core.telegram.org/api/invites#direct-invites) users. |
| [Messages.MessageEditData](/type/messages.MessageEditData/) | Message edit data for media |
| [messages.MessageReactionsList](/type/messages.MessageReactionsList/) | List of peers that reacted to a specific message |
| [messages.Messages](/type/messages.Messages/) | Object contains information on list of messages with auxiliary data. |
| [messages.MessageViews](/type/messages.MessageViews/) | View, forward counter + info about replies |
| [messages.MyStickers](/type/messages.MyStickers/) | The list of [stickersets owned by the current account »](https://core.telegram.org/api/stickers). |
| [Messages.PeerDialogs](/type/messages.PeerDialogs/) | List of dialogs |
| [messages.PeerSettings](/type/messages.PeerSettings/) | Peer settings |
| [Messages.PreparedInlineMessage](/type/messages.PreparedInlineMessage/) | Represents a [prepared inline message received via a bot's mini app, that can be sent to some chats »](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message) |
| [messages.QuickReplies](/type/messages.QuickReplies/) | Info about [quick reply shortcuts »](https://core.telegram.org/api/business#quick-reply-shortcuts). |
| [messages.Reactions](/type/messages.Reactions/) | A set of [message reactions](https://core.telegram.org/api/reactions) |
| [Messages.RecentStickers](/type/messages.RecentStickers/) | Recent stickers |
| [messages.SavedDialogs](/type/messages.SavedDialogs/) | Represents some [saved message dialogs »](https://core.telegram.org/api/saved-messages). |
| [Messages.SavedGifs](/type/messages.SavedGifs/) | Saved GIFs |
| [messages.SavedReactionTags](/type/messages.SavedReactionTags/) | List of [reaction tag »](https://core.telegram.org/api/saved-messages#tags) names assigned by the user. |
| [Messages.SearchCounter](/type/messages.SearchCounter/) | Number of results that would be returned by a search |
| [messages.SearchResultsCalendar](/type/messages.SearchResultsCalendar/) | Information about found messages sent on a specific day |
| [messages.SearchResultsPositions](/type/messages.SearchResultsPositions/) | Information about sparse positions of messages |
| [Messages.SentEncryptedMessage](/type/messages.SentEncryptedMessage/) | Contains info on message sent to an encrypted chat. |
| [messages.SponsoredMessages](/type/messages.SponsoredMessages/) | A set of [sponsored messages](https://core.telegram.org/api/sponsored-messages) associated with a channel |
| [Messages.Stickers](/type/messages.Stickers/) | Stickers |
| [Messages.StickerSet](/type/messages.StickerSet/) | Stickerset |
| [Messages.StickerSetInstallResult](/type/messages.StickerSetInstallResult/) | Result of stickerset installation process |
| [messages.TranscribedAudio](/type/messages.TranscribedAudio/) | [Transcribed text](https://core.telegram.org/api/transcribe) from a voice message |
| [messages.TranslatedText](/type/messages.TranslatedText/) | Translated text with [entities](https://core.telegram.org/api/entities). |
| [messages.VotesList](/type/messages.VotesList/) | How users voted in a poll |
| [Messages.WebPage](/type/messages.WebPage/) | Contains an instant view webpage. |
| [messages.WebPagePreview](/type/messages.WebPagePreview/) | Represents a webpage preview. |
| [MessagesFilter](/type/MessagesFilter/) | Object describes message filter. |
| [MessageViews](/type/MessageViews/) | View, forward counter + info about replies of a specific message |
| [MissingInvitee](/type/MissingInvitee/) | Info about why a specific user could not be [invited »](https://core.telegram.org/api/invites#direct-invites). |
| [MyBoost](/type/MyBoost/) | Contains information about a single [boost slot »](https://core.telegram.org/api/boost). |
| [NearestDc](/type/NearestDc/) | Object contains info on nearest data center. |
| [NotificationSound](/type/NotificationSound/) | Represents a notification sound |
| [NotifyPeer](/type/NotifyPeer/) | Object defines the set of users and/or groups that generate notifications. |
| [Null](/type/Null/) | Object corresponds to an arbitrary empty object. |
| [OutboxReadDate](/type/OutboxReadDate/) | Exact read date of a private message we sent to another user. |
| [Page](/type/Page/) | [Instant view](https://instantview.telegram.org) page |
| [Page not found](https://core.telegram.org/type/#/) | The page has not been saved |
| [PageBlock](/type/PageBlock/) | Represents an [instant view page element](https://instantview.telegram.org) |
| [PageCaption](/type/PageCaption/) | Page caption |
| [PageListItem](/type/PageListItem/) | Item in block list |
| [PageListOrderedItem](/type/PageListOrderedItem/) | Represents an [instant view ordered list](https://instantview.telegram.org) |
| [PageRelatedArticle](/type/PageRelatedArticle/) | Related articles |
| [PageTableCell](/type/PageTableCell/) | Represents a table in an [instant view table](https://instantview.telegram.org) |
| [PageTableRow](/type/PageTableRow/) | Table row |
| [PaidReactionPrivacy](/type/PaidReactionPrivacy/) | [Paid reaction privacy settings »](https://core.telegram.org/api/reactions#paid-reactions) |
| [Passkey](/type/Passkey/) | Human-readable info about a passkey associated to an account, returned when [creating a passkey »](https://core.telegram.org/api/passkeys#creating-a-passkey) or [listing passkeys »](https://core.telegram.org/api/passkeys#list-passkeys). |
| [PasswordKdfAlgo](/type/PasswordKdfAlgo/) | Key derivation function to use when generating the [password hash for SRP two-factor authorization](/api/srp/) |
| [PaymentCharge](/type/PaymentCharge/) | Charged payment |
| [PaymentFormMethod](/type/PaymentFormMethod/) | Represents a payment method |
| [PaymentRequestedInfo](/type/PaymentRequestedInfo/) | Requested payment info |
| [payments.BankCardData](/type/payments.BankCardData/) | Credit card info, provided by the card's bank(s) |
| [payments.CheckCanSendGiftResult](/type/payments.CheckCanSendGiftResult/) | Specifies if a gift can or cannot be sent. |
| [Payments.CheckedGiftCode](/type/payments.CheckedGiftCode/) | Info about a [Telegram Premium Giftcode](https://core.telegram.org/api/giveaways). |
| [Payments.ConnectedStarRefBots](/type/payments.ConnectedStarRefBots/) | Active [affiliations](https://core.telegram.org/api/bots/referrals#becoming-an-affiliate) |
| [payments.ExportedInvoice](/type/payments.ExportedInvoice/) | Exported invoice |
| [Payments.GiveawayInfo](/type/payments.GiveawayInfo/) | Info about a [Telegram Premium Giveaway](https://core.telegram.org/api/giveaways). |
| [Payments.PaymentForm](/type/payments.PaymentForm/) | Payment form |
| [Payments.PaymentReceipt](/type/payments.PaymentReceipt/) | Payment receipt |
| [Payments.PaymentResult](/type/payments.PaymentResult/) | Payment result |
| [payments.ResaleStarGifts](/type/payments.ResaleStarGifts/) | List of gifts currently on [resale »](https://core.telegram.org/api/gifts#reselling-collectible-gifts). |
| [Payments.SavedInfo](/type/payments.SavedInfo/) | Saved payment info |
| [payments.SavedStarGifts](/type/payments.SavedStarGifts/) | Represents a list of [gifts](https://core.telegram.org/api/gifts). |
| [Payments.StarGiftActiveAuctions](/type/payments.StarGiftActiveAuctions/) | List of currently active [gift auctions »](https://core.telegram.org/api/auctions) where the user has placed a bid, or an indication that the locally cached list hasn't changed. |
| [Payments.StarGiftAuctionAcquiredGifts](/type/payments.StarGiftAuctionAcquiredGifts/) | Describes all the gifts that the current user won in an [auction](https://core.telegram.org/api/auctions). |
| [Payments.StarGiftAuctionState](/type/payments.StarGiftAuctionState/) | Describes a [collectible gift auction »](https://core.telegram.org/api/auctions). |
| [payments.StarGiftCollections](/type/payments.StarGiftCollections/) | Represents a list of [star gift collections »](https://core.telegram.org/api/gifts#gift-collections). |
| [payments.StarGifts](/type/payments.StarGifts/) | Available [gifts »](https://core.telegram.org/api/gifts). |
| [Payments.StarGiftUpgradeAttributes](/type/payments.StarGiftUpgradeAttributes/) | List of just the collectible attributes that may appear for a gift type once it's upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| [payments.StarGiftUpgradePreview](/type/payments.StarGiftUpgradePreview/) | A preview of the possible attributes (chosen randomly) a [gift »](https://core.telegram.org/api/gifts) can receive after upgrading it to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts), see [here »](https://core.telegram.org/api/gifts#collectible-gifts) for more info. |
| [payments.StarGiftWithdrawalUrl](/type/payments.StarGiftWithdrawalUrl/) | A URL that can be used to import the exported NFT on Fragment. |
| [payments.StarsRevenueAdsAccountUrl](/type/payments.StarsRevenueAdsAccountUrl/) | Contains a URL leading to a page where the user will be able to place ads for the channel/bot, paying using [Telegram Stars](https://core.telegram.org/api/stars#paying-for-ads). |
| [payments.StarsRevenueStats](/type/payments.StarsRevenueStats/) | [Star revenue statistics, see here »](https://core.telegram.org/api/stars) for more info. Note that all balances and currency amounts and graph values are in Stars. |
| [payments.StarsRevenueWithdrawalUrl](/type/payments.StarsRevenueWithdrawalUrl/) | Contains the URL to use to [withdraw Telegram Star revenue](https://core.telegram.org/api/stars#withdrawing-revenue). |
| [payments.StarsStatus](/type/payments.StarsStatus/) | Info about the current [Telegram Star subscriptions, balance and transaction history »](https://core.telegram.org/api/stars#balance-and-transaction-history). |
| [Payments.SuggestedStarRefBots](/type/payments.SuggestedStarRefBots/) | A list of suggested [mini apps](https://core.telegram.org/api/bots/webapps) with available [affiliate programs](https://core.telegram.org/api/bots/referrals) |
| [payments.UniqueStarGift](/type/payments.UniqueStarGift/) | Represents a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| [payments.UniqueStarGiftValueInfo](/type/payments.UniqueStarGiftValueInfo/) | Information about the value of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| [Payments.ValidatedRequestedInfo](/type/payments.ValidatedRequestedInfo/) | Validated requested info |
| [PaymentSavedCredentials](/type/PaymentSavedCredentials/) | Saved payment credentials |
| [Peer](/type/Peer/) | Identifier of a private chat, basic group, group or channel (see [here »](https://core.telegram.org/api/peers) for more info). |
| [PeerBlocked](/type/PeerBlocked/) | Info about a blocked user |
| [PeerColor](/type/PeerColor/) | Represents a [color palette »](https://core.telegram.org/api/colors). |
| [PeerLocated](/type/PeerLocated/) | Geolocated peer |
| [PeerNotifySettings](/type/PeerNotifySettings/) | Notification settings. |
| [PeerSettings](/type/PeerSettings/) | List of actions that are possible when interacting with this user, to be shown as suggested actions in the chat bar |
| [PeerStories](/type/PeerStories/) | [Stories](https://core.telegram.org/api/stories) associated to a peer |
| [PendingSuggestion](/type/PendingSuggestion/) | Represents a [custom pending suggestion »](https://core.telegram.org/api/config#custom-suggestions). |
| [phone.ExportedGroupCallInvite](/type/phone.ExportedGroupCallInvite/) | An exported group call invitation. |
| [phone.GroupCall](/type/phone.GroupCall/) | Contains info about a group call, and partial info about its participants. |
| [Phone.GroupCallStars](/type/phone.GroupCallStars/) | Contains a live story's total donations and top donors, see [paid live story donations »](https://core.telegram.org/api/group-calls#paid-live-story-donations). |
| [phone.GroupCallStreamChannels](/type/phone.GroupCallStreamChannels/) | Info about RTMP streams in a group call or livestream |
| [phone.GroupCallStreamRtmpUrl](/type/phone.GroupCallStreamRtmpUrl/) | RTMP URL and stream key to be used in streaming software |
| [phone.GroupParticipants](/type/phone.GroupParticipants/) | Info about the participants of a group call or livestream |
| [phone.JoinAsPeers](/type/phone.JoinAsPeers/) | A list of peers that can be used to join a group call, presenting yourself as a specific user/channel. |
| [Phone.PhoneCall](/type/phone.PhoneCall/) | Phone call |
| [PhoneCall](/type/PhoneCall/) | Phone call |
| [PhoneCallDiscardReason](/type/PhoneCallDiscardReason/) | Why was the phone call discarded? |
| [PhoneCallProtocol](/type/PhoneCallProtocol/) | Phone call protocol |
| [PhoneConnection](/type/PhoneConnection/) | Phone call connection |
| [Photo](/type/Photo/) | Object describes a photo. |
| [photos.Photo](/type/photos.Photo/) | Photo with auxiliary data. |
| [photos.Photos](/type/photos.Photos/) | Object contains list of photos with auxiliary data. |
| [PhotoSize](/type/PhotoSize/) | Location of a certain size of a picture #### [End-to-end schema](/schema/end-to-end/) ``` ===23=== photoCachedSize#e9a734fa type:string location:FileLocation w:int h:int bytes:bytes = PhotoSize; photoSize#77bfb61b type:string location:FileLocation w:int h:int size:int = PhotoSize; photoSizeEmpty#0e17e23c type:string = PhotoSize; ``` API schema: |
| [Poll](/type/Poll/) | Indicates a poll message |
| [PollAnswer](/type/PollAnswer/) | Indicates a possible answer to a [poll](/type/Poll/). |
| [PollAnswerVoters](/type/PollAnswerVoters/) | How users voted on a certain poll answer |
| [PollResults](/type/PollResults/) | Results of poll |
| [PopularContact](/type/PopularContact/) | Popular contact |
| [PostAddress](/type/PostAddress/) | Shipping address |
| [PostInteractionCounters](/type/PostInteractionCounters/) | Interaction counters |
| [Premium.BoostsList](/type/premium.BoostsList/) | List of [boosts](https://core.telegram.org/api/boost) that were applied to a peer by multiple users. |
| [Premium.BoostsStatus](/type/premium.BoostsStatus/) | Contains info about the current [boost status](https://core.telegram.org/api/boost) of a peer. |
| [Premium.MyBoosts](/type/premium.MyBoosts/) | A list of peers we are currently [boosting](https://core.telegram.org/api/boost), and how many [boost slots](https://core.telegram.org/api/boost) we have left. |
| [PremiumGiftCodeOption](/type/PremiumGiftCodeOption/) | [Giveaway](https://core.telegram.org/api/giveaways) option. |
| [PremiumSubscriptionOption](/type/PremiumSubscriptionOption/) | Telegram Premium subscription option |
| [PrepaidGiveaway](/type/PrepaidGiveaway/) | Contains info about a [prepaid giveaway »](https://core.telegram.org/api/giveaways). |
| [PrivacyKey](/type/PrivacyKey/) | Privacy **keys** together with [privacy rules »](https://core.telegram.org/api/privacy#privacy-rules) indicate _what_ can or can't someone do and are specified by a [PrivacyKey](/type/PrivacyKey/) constructor, and its input counterpart [InputPrivacyKey](/type/InputPrivacyKey/). See the [privacy documentation »](https://core.telegram.org/api/privacy) for more info. |
| [PrivacyRule](/type/PrivacyRule/) | Privacy **rules** together with [privacy keys](https://core.telegram.org/api/privacy#privacy-keys) indicate _what_ can or can't someone do and are specified by a [PrivacyRule](/type/PrivacyRule/) constructor, and its input counterpart [InputPrivacyRule](/type/InputPrivacyRule/). See the [privacy documentation »](https://core.telegram.org/api/privacy) for more info. |
| [ProfileTab](/type/ProfileTab/) | Represents a [tab of a profile page »](https://core.telegram.org/api/profile#tabs). |
| [PublicForward](/type/PublicForward/) | Contains info about the forwards of a [story](https://core.telegram.org/api/stories) as a message to public chats and reposts by public channels. |
| [QuickReply](/type/QuickReply/) | A [quick reply shortcut](https://core.telegram.org/api/business#quick-reply-shortcuts). |
| [Reaction](/type/Reaction/) | [Message reaction](https://core.telegram.org/api/reactions) |
| [ReactionCount](/type/ReactionCount/) | Number of users that reacted with a certain emoji |
| [ReactionNotificationsFrom](/type/ReactionNotificationsFrom/) | Reaction notification settings |
| [ReactionsNotifySettings](/type/ReactionsNotifySettings/) | Reaction notification settings, see [here »](https://core.telegram.org/api/reactions#notifications-about-reactions) for more info. |
| [ReadParticipantDate](/type/ReadParticipantDate/) | Contains info about when a certain participant has read a message |
| [ReceivedNotifyMessage](/type/ReceivedNotifyMessage/) | Confirmation of message receipt |
| [RecentMeUrl](/type/RecentMeUrl/) | Recent t.me urls |
| [RecentStory](/type/RecentStory/) | Summary of a peer's [active stories »](https://core.telegram.org/api/stories#recent-story-summaries). |
| [ReplyMarkup](/type/ReplyMarkup/) | Reply markup for bot and inline keyboards |
| [ReportReason](/type/ReportReason/) | Report reason |
| [ReportResult](/type/ReportResult/) | Represents a report menu or result |
| [RequestedPeer](/type/RequestedPeer/) | Info about a peer, shared by a user with the currently logged in bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/). |
| [RequestPeerType](/type/RequestPeerType/) | Filtering criteria to use for the peer selection list shown to the user. |
| [RequirementToContact](/type/RequirementToContact/) | Specifies a requirement that must be satisfied in order to contact a user. |
| [RestrictionReason](/type/RestrictionReason/) | Restriction reason |
| [RichText](/type/RichText/) | Rich text |
| [SavedContact](/type/SavedContact/) | Saved contact |
| [SavedDialog](/type/SavedDialog/) | Represents a [saved message dialog »](https://core.telegram.org/api/saved-messages). |
| [SavedReactionTag](/type/SavedReactionTag/) | Info about a [saved message reaction tag »](https://core.telegram.org/api/saved-messages#tags). |
| [SavedStarGift](/type/SavedStarGift/) | Represents a [gift](https://core.telegram.org/api/gifts) owned by a peer. |
| [SearchPostsFlood](/type/SearchPostsFlood/) | Indicates if the specified [global post search »](https://core.telegram.org/api/search#posts-tab) requires payment. |
| [SearchResultsCalendarPeriod](/type/SearchResultsCalendarPeriod/) | Information about found messages sent on a specific day, used to split the `messages` in [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/) constructors by days. |
| [SearchResultsPosition](/type/SearchResultsPosition/) | Information about a message in a specific position |
| [SecureCredentialsEncrypted](/type/SecureCredentialsEncrypted/) | Encrypted secure credentials |
| [SecureData](/type/SecureData/) | Secure [passport](https://core.telegram.org/passport) data, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#securedata) |
| [SecureFile](/type/SecureFile/) | Secure [passport](https://core.telegram.org/passport) file, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#inputsecurefile) |
| [SecurePasswordKdfAlgo](/type/SecurePasswordKdfAlgo/) | KDF algorithm to use for computing telegram [passport](https://core.telegram.org/passport) hash |
| [SecurePlainData](/type/SecurePlainData/) | Plaintext verified [passport data](https://core.telegram.org/passport/encryption#secureplaindata). |
| [SecureRequiredType](/type/SecureRequiredType/) | Required secure file type |
| [SecureSecretSettings](/type/SecureSecretSettings/) | Telegram [passport](https://core.telegram.org/passport) settings |
| [SecureValue](/type/SecureValue/) | Secure Telegram Passport value |
| [SecureValueError](/type/SecureValueError/) | Secure value error |
| [SecureValueHash](/type/SecureValueHash/) | Secure value hash |
| [SecureValueType](/type/SecureValueType/) | Secure value type |
| [SendAsPeer](/type/SendAsPeer/) | Indicates a peer that can be used to send messages |
| [SendMessageAction](/type/SendMessageAction/) | User actions. Use this to provide users with detailed info about their chat partner's actions: typing or sending attachments of all kinds. #### [End-to-end schema](/schema/end-to-end/) ``` ===17=== sendMessageCancelAction#fd5ec8f5 = SendMessageAction; sendMessageChooseContactAction#628cbc6f = SendMessageAction; sendMessageGeoLocationAction#176f8ba1 = SendMessageAction; sendMessageRecordAudioAction#d52f73f7 = SendMessageAction; sendMessageRecordVideoAction#a187d66f = SendMessageAction; sendMessageTypingAction#16bf744e = SendMessageAction; sendMessageUploadAudioAction#e6ac8a6f = SendMessageAction; sendMessageUploadDocumentAction#8faee98e = SendMessageAction; sendMessageUploadPhotoAction#990a3c1a = SendMessageAction; sendMessageUploadVideoAction#92042ff7 = SendMessageAction; ===66=== sendMessageRecordRoundAction#88f27fbc = SendMessageAction; sendMessageUploadRoundAction#bb718624 = SendMessageAction; ``` API schema: |
| [ShippingOption](/type/ShippingOption/) | Shipping options |
| [SmsJob](/type/SmsJob/) | Info about an SMS job. |
| [smsjobs.EligibilityToJoin](/type/smsjobs.EligibilityToJoin/) | SMS jobs eligibility |
| [smsjobs.Status](/type/smsjobs.Status/) | Status |
| [SponsoredMessage](/type/SponsoredMessage/) | A sponsored message |
| [SponsoredMessageReportOption](/type/SponsoredMessageReportOption/) | A [report option for a sponsored message »](https://core.telegram.org/api/sponsored-messages#reporting-sponsored-messages). |
| [SponsoredPeer](/type/SponsoredPeer/) | A sponsored peer. |
| [StarGift](/type/StarGift/) | Represents a [star gift, see here »](https://core.telegram.org/api/gifts) for more info. |
| [StarGiftActiveAuctionState](/type/StarGiftActiveAuctionState/) | Contains info about [an auction where the user has placed a bid »](https://core.telegram.org/api/auctions). |
| [StarGiftAttribute](/type/StarGiftAttribute/) | An attribute of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| [StarGiftAttributeCounter](/type/StarGiftAttributeCounter/) | Indicates the total number of gifts that have the specified attribute. |
| [StarGiftAttributeId](/type/StarGiftAttributeId/) | Represents the _identifier_ of a [collectible gift attribute](https://core.telegram.org/api/gifts#collectible-gifts). |
| [StarGiftAttributeRarity](/type/StarGiftAttributeRarity/) | Rarity of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts) attribute, either as an exact permille value or as one of the named rarity tiers (uncommon, rare, epic, legendary). |
| [StarGiftAuctionAcquiredGift](/type/StarGiftAuctionAcquiredGift/) | Describes a gift that the current user won in an auction. |
| [StarGiftAuctionRound](/type/StarGiftAuctionRound/) | Describes one or more rounds of a [collectible gift auction »](https://core.telegram.org/api/auctions), optionally extendable. |
| [StarGiftAuctionState](/type/StarGiftAuctionState/) | State of a [collectible gift auction »](https://core.telegram.org/api/auctions): active/pending, finished, or unchanged with respect to a locally cached version. |
| [StarGiftAuctionUserState](/type/StarGiftAuctionUserState/) | Contains information about the current user's state in an [auction »](https://core.telegram.org/api/auctions). The `bid_amount`, `bid_date`, `bid_peer` and `min_bid_amount` flags of [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) will all be set if the user placed a bid in the auction. |
| [StarGiftBackground](/type/StarGiftBackground/) | Contains the default background palette of a [gift type »](https://core.telegram.org/api/gifts#listing-all-possible-collectible-variants). |
| [StarGiftCollection](/type/StarGiftCollection/) | Represents a [star gift collection »](https://core.telegram.org/api/gifts#gift-collections). |
| [StarGiftUpgradePrice](/type/StarGiftUpgradePrice/) | Indicates the price for a [gift upgrade »](https://core.telegram.org/api/gifts#collectible-gifts) starting from a specific point in time. |
| [StarRefProgram](/type/StarRefProgram/) | Indo about an [affiliate program offered by a bot](https://core.telegram.org/api/bots/referrals) |
| [StarsAmount](/type/StarsAmount/) | Describes a real (i.e. possibly decimal) amount of [Telegram Stars](https://core.telegram.org/api/stars). |
| [StarsGiftOption](/type/StarsGiftOption/) | [Telegram Stars gift option](https://core.telegram.org/api/stars#buying-or-gifting-stars). |
| [StarsGiveawayOption](/type/StarsGiveawayOption/) | Contains info about a [Telegram Star giveaway](https://core.telegram.org/api/giveaways#star-giveaways) option. |
| [StarsGiveawayWinnersOption](/type/StarsGiveawayWinnersOption/) | Represents a possible option for the number of winners in a star giveaway |
| [StarsRating](/type/StarsRating/) | Represents the profile's [star rating, see here »](https://core.telegram.org/api/stars#star-rating) for more info. |
| [StarsRevenueStatus](/type/StarsRevenueStatus/) | Describes [Telegram Star revenue balances »](https://core.telegram.org/api/stars). |
| [StarsSubscription](/type/StarsSubscription/) | Represents a [Telegram Star subscription »](https://core.telegram.org/api/invites#paid-invite-links). |
| [StarsSubscriptionPricing](/type/StarsSubscriptionPricing/) | Pricing of a [Telegram Star subscription »](https://core.telegram.org/api/invites#paid-invite-links). |
| [StarsTopupOption](/type/StarsTopupOption/) | [Telegram Stars topup option](https://core.telegram.org/api/stars). |
| [StarsTransaction](/type/StarsTransaction/) | Represents a [Telegram Stars transaction »](https://core.telegram.org/api/stars). |
| [StarsTransactionPeer](/type/StarsTransactionPeer/) | Source of an incoming [Telegram Star transaction](https://core.telegram.org/api/stars), or its recipient for outgoing [Telegram Star transactions](https://core.telegram.org/api/stars). |
| [Stats.BroadcastStats](/type/stats.BroadcastStats/) | Channel statistics |
| [stats.MegagroupStats](/type/stats.MegagroupStats/) | Supergroup statistics |
| [stats.MessageStats](/type/stats.MessageStats/) | Message statistics |
| [Stats.PublicForwards](/type/stats.PublicForwards/) | Contains info about the forwards of a [story](https://core.telegram.org/api/stories) as a message to public chats and reposts by public channels. |
| [Stats.StoryStats](/type/stats.StoryStats/) | Contains [statistics](https://core.telegram.org/api/stats) about a [story](https://core.telegram.org/api/stories). |
| [StatsAbsValueAndPrev](/type/StatsAbsValueAndPrev/) | Channel statistics value pair |
| [StatsDateRangeDays](/type/StatsDateRangeDays/) | Channel statistics date range |
| [StatsGraph](/type/StatsGraph/) | Channel statistics graph |
| [StatsGroupTopAdmin](/type/StatsGroupTopAdmin/) | Most active admin in a [supergroup](https://core.telegram.org/api/channel) |
| [StatsGroupTopInviter](/type/StatsGroupTopInviter/) | Most active inviter in a [supergroup](https://core.telegram.org/api/channel) |
| [StatsGroupTopPoster](/type/StatsGroupTopPoster/) | Most active user in a [supergroup](https://core.telegram.org/api/channel) |
| [StatsPercentValue](/type/StatsPercentValue/) | Channel statistics percentage |
| [StatsURL](/type/StatsURL/) | URL with chat statistics |
| [StickerKeyword](/type/StickerKeyword/) | Keywords for a certain sticker |
| [StickerPack](/type/StickerPack/) | Stickerpack |
| [stickers.SuggestedShortName](/type/stickers.SuggestedShortName/) | A suggested short name for the specified stickerpack |
| [StickerSet](/type/StickerSet/) | Represents a stickerset (stickerpack) |
| [StickerSetCovered](/type/StickerSetCovered/) | Stickerset preview |
| [storage.FileType](/type/storage.FileType/) | Object describes the file type. |
| [Stories.Albums](/type/stories.Albums/) | Represents a list of [story albums »](https://core.telegram.org/api/stories#story-albums). |
| [stories.AllStories](/type/stories.AllStories/) | Full list of active (or active and hidden) [stories](https://core.telegram.org/api/stories#watching-stories). |
| [stories.CanSendStoryCount](/type/stories.CanSendStoryCount/) | Contains the number of available active story slots (equal to the value of the [`story_expiring_limit_*` client configuration parameter](https://core.telegram.org/api/config#story-expiring-limit-default) minus the number of currently active stories). |
| [stories.FoundStories](/type/stories.FoundStories/) | Stories found using [global story search »](https://core.telegram.org/api/stories#searching-stories). |
| [stories.PeerStories](/type/stories.PeerStories/) | [Active story list](https://core.telegram.org/api/stories#watching-stories) of a specific peer. |
| [stories.Stories](/type/stories.Stories/) | List of [stories](https://core.telegram.org/api/stories#pinned-or-archived-stories) |
| [stories.StoryReactionsList](/type/stories.StoryReactionsList/) | List of peers that reacted to a specific [story](https://core.telegram.org/api/stories) |
| [stories.StoryViews](/type/stories.StoryViews/) | Reaction and view counters for a list of [stories](https://core.telegram.org/api/stories) |
| [stories.StoryViewsList](/type/stories.StoryViewsList/) | Reaction and view counters for a [story](https://core.telegram.org/api/stories) |
| [StoriesStealthMode](/type/StoriesStealthMode/) | [Story stealth mode status](https://core.telegram.org/api/stories#stealth-mode) |
| [StoryAlbum](/type/StoryAlbum/) | Represents a [story album »](https://core.telegram.org/api/stories#story-albums). |
| [StoryFwdHeader](/type/StoryFwdHeader/) | Contains info about the original poster of a reposted story. |
| [StoryItem](/type/StoryItem/) | Represents a [Telegram Story](https://core.telegram.org/api/stories) |
| [StoryReaction](/type/StoryReaction/) | How a certain peer reacted to or interacted with a story |
| [StoryView](/type/StoryView/) | [Story](https://core.telegram.org/api/stories) view date and reaction information |
| [StoryViews](/type/StoryViews/) | Aggregated view and reaction information of a [story](https://core.telegram.org/api/stories) |
| [string](/type/string/) | A basic bare type. Values of type `string` look differently depending on the length `L` of the string being serialized: -   If `L <= 253`, the serialization contains one byte with the value of `L`, then `L` bytes of the string followed by 0 to 3 characters containing 0, such that the overall length of the value be divisible by 4, whereupon all of this is interpreted as a sequence of `int(L/4)+1` 32-bit little-endian integers. -   If `L >= 254`, the serialization contains byte 254, followed by 3 bytes with the string length `L` in little-endian order, followed by `L` bytes of the string, further followed by 0 to 3 null padding bytes. All strings passed to the API must be encoded in UTF-8. When arbitrary byte sequences have to be serialized, [bytes](/type/bytes/) alias is to be used. [Further details on basic types»](/mtproto/serialize/) |
| [SuggestedPost](/type/SuggestedPost/) | Contains info about a [suggested post »](https://core.telegram.org/api/suggested-posts). |
| [TextWithEntities](/type/TextWithEntities/) | Styled text with [message entities](https://core.telegram.org/api/entities) #### [End-to-end schema](/schema/end-to-end/) ``` ===216=== textWithEntities#751f3146 text:string entities:Vector<MessageEntity> = TextWithEntities; ``` API schema: |
| [Theme](/type/Theme/) | Cloud theme |
| [ThemeSettings](/type/ThemeSettings/) | Theme settings |
| [Timezone](/type/Timezone/) | Timezone information. |
| [TodoCompletion](/type/TodoCompletion/) | A completed [todo list »](https://core.telegram.org/api/todo) item. |
| [TodoItem](/type/TodoItem/) | An item of a [todo list »](https://core.telegram.org/api/todo). |
| [TodoList](/type/TodoList/) | Represents a [todo list »](https://core.telegram.org/api/todo). |
| [TopPeer](/type/TopPeer/) | Top peer |
| [TopPeerCategory](/type/TopPeerCategory/) | Top peer category |
| [TopPeerCategoryPeers](/type/TopPeerCategoryPeers/) | Top peers by top peer category |
| [True](/type/True/) | See [predefined identifiers](https://core.telegram.org/mtproto/TL-formal#predefined-identifiers). |
| [Update](/type/Update/) | Object contains info on events occurred. |
| [Updates](/type/Updates/) | Object which is perceived by the client without a call on its part when an event occurs. |
| [updates.ChannelDifference](/type/updates.ChannelDifference/) | Contains the difference (new messages) between our local channel state and the remote state |
| [updates.Difference](/type/updates.Difference/) | Occurred changes. |
| [updates.State](/type/updates.State/) | Object contains info on state for further updates. |
| [upload.CdnFile](/type/upload.CdnFile/) | Represents the download status of a CDN file |
| [upload.File](/type/upload.File/) | Contains info on file. |
| [Upload.WebFile](/type/upload.WebFile/) | Remote file |
| [UrlAuthResult](/type/UrlAuthResult/) | URL authorization result |
| [User](/type/User/) | Object defines a user. |
| [UserFull](/type/UserFull/) | Object contains extended user info. |
| [Username](/type/Username/) | Contains information about a username |
| [UserProfilePhoto](/type/UserProfilePhoto/) | Object contains info on the user's profile photo. |
| [users.SavedMusic](/type/users.SavedMusic/) | List of songs ([document](/constructor/document/).`id`s) currently pinned on a user's profile, see [here »](https://core.telegram.org/api/profile#music) for more info. |
| [users.UserFull](/type/users.UserFull/) | Full user information, with attached context peers for reactions |
| [users.Users](/type/users.Users/) | Describes a list of users (or bots). |
| [UserStatus](/type/UserStatus/) | User online status |
| [Vector t](/type/Vector t/) | Universal vector. |
| [VideoSize](/type/VideoSize/) | Represents an animated video thumbnail |
| [WallPaper](/type/WallPaper/) | Object contains info on a [wallpaper](https://core.telegram.org/api/wallpapers). |
| [WallPaperSettings](/type/WallPaperSettings/) | Wallpaper rendering information. |
| [WebAuthorization](/type/WebAuthorization/) | Web authorization |
| [WebDocument](/type/WebDocument/) | Remote document |
| [WebPage](/type/WebPage/) | [Instant View](https://instantview.telegram.org) webpage preview |
| [WebPageAttribute](/type/WebPageAttribute/) | Webpage attributes |
| [WebViewMessageSent](/type/WebViewMessageSent/) | Contains information about an inline message sent by a [Web App](https://core.telegram.org/bots/webapps) on behalf of a user. |
| [WebViewResult](/type/WebViewResult/) | Contains the webview URL with appropriate theme and user info parameters added |