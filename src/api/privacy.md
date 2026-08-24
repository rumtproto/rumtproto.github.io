---
title: "Настройки приватности"
original: "https://core.telegram.org/api/privacy"
section: api
description: "Telegram позволяет пользователям задавать детальные настройки приватности, выбирая, кто может и кто не может взаимодействовать с ними тем или иным образом."
layout: layout.njk
---

# Настройки приватности

Telegram позволяет пользователям задавать детальные настройки приватности, выбирая, кто может и кто не может взаимодействовать с ними тем или иным образом.

### Правила приватности

Схема:

```
inputPrivacyValueAllowContacts#0d09e07b = InputPrivacyRule;
inputPrivacyValueAllowAll#184b35ce = InputPrivacyRule;
inputPrivacyValueAllowUsers#131cc67f users:Vector<InputUser> = InputPrivacyRule;
inputPrivacyValueDisallowContacts#0ba52007 = InputPrivacyRule;
inputPrivacyValueDisallowAll#d66b66c9 = InputPrivacyRule;
inputPrivacyValueDisallowUsers#90110467 users:Vector<InputUser> = InputPrivacyRule;
inputPrivacyValueAllowChatParticipants#840649cf chats:Vector<long> = InputPrivacyRule;
inputPrivacyValueDisallowChatParticipants#e94f0f86 chats:Vector<long> = InputPrivacyRule;
inputPrivacyValueAllowCloseFriends#2f453e49 = InputPrivacyRule;
inputPrivacyValueAllowPremium#77cdc9f1 = InputPrivacyRule;
inputPrivacyValueAllowBots#5a4fcce5 = InputPrivacyRule;
inputPrivacyValueDisallowBots#c4e57915 = InputPrivacyRule;

privacyValueAllowContacts#fffe1bac = PrivacyRule;
privacyValueAllowAll#65427b82 = PrivacyRule;
privacyValueAllowUsers#b8905fb2 users:Vector<long> = PrivacyRule;
privacyValueDisallowContacts#f888fa1a = PrivacyRule;
privacyValueDisallowAll#8b73e763 = PrivacyRule;
privacyValueDisallowUsers#e4621141 users:Vector<long> = PrivacyRule;
privacyValueAllowChatParticipants#6b134e8e chats:Vector<long> = PrivacyRule;
privacyValueDisallowChatParticipants#41c87565 chats:Vector<long> = PrivacyRule;
privacyValueAllowCloseFriends#f7e8d89b = PrivacyRule;
privacyValueAllowPremium#ece9814b = PrivacyRule;
privacyValueAllowBots#21461b5d = PrivacyRule;
privacyValueDisallowBots#f6a5f82f = PrivacyRule;

user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

---functions---

contacts.editCloseFriends#ba6705f0 id:Vector<long> = Bool;
```

[@term:PrivacyRule] **Правила** приватности определяют, _кому_ разрешено или запрещено то или иное действие, и задаются типом [PrivacyRule](/type/PrivacyRule/) (правило приватности — описание круга пользователей, которым доступ разрешается или запрещается) и его входным аналогом [InputPrivacyRule](/type/InputPrivacyRule/).  
Конструкторы [InputPrivacyRule](/type/InputPrivacyRule/) _передаются_ на вход методам, принимающим правила приватности, а конструкторы [PrivacyRule](/type/PrivacyRule/) содержатся в конструкторах, _возвращаемых_ API.

Полный список правил приватности и их описания приведены на [странице типа »](/type/InputPrivacyRule/).

Отдельно стоит упомянуть одно правило приватности — (input)[privacyValueAllowCloseFriends](/constructor/privacyValueAllowCloseFriends/): оно применимо только при [публикации историй](/api/stories/) и относится исключительно к списку «близких друзей», который можно изменить методом [contacts.editCloseFriends](/method/contacts.editCloseFriends/), передав полный список близких друзей в виде списка идентификаторов пользователей; учтите, что в список близких друзей можно добавить только тех, кто [есть в списке контактов (даже без номера телефона) »](/api/contacts/).

Текущий список близких друзей определяется по тому, у каких пользователей из нашего списка контактов установлен флаг `close_friend` в соответствующем конструкторе [user](/constructor/user/); о том, как получить список контактов, см. [здесь »](/api/contacts/#fetching-the-contact-list).

### Ключи приватности

Схема:

```
inputPrivacyKeyStatusTimestamp#4f96cb18 = InputPrivacyKey;
inputPrivacyKeyChatInvite#bdfb0426 = InputPrivacyKey;
inputPrivacyKeyPhoneCall#fabadc5f = InputPrivacyKey;
inputPrivacyKeyPhoneP2P#db9e70d2 = InputPrivacyKey;
inputPrivacyKeyForwards#a4dd4c08 = InputPrivacyKey;
inputPrivacyKeyProfilePhoto#5719bacc = InputPrivacyKey;
inputPrivacyKeyPhoneNumber#0352dafa = InputPrivacyKey;
inputPrivacyKeyAddedByPhone#d1219bdd = InputPrivacyKey;
inputPrivacyKeyVoiceMessages#aee69d68 = InputPrivacyKey;
inputPrivacyKeyAbout#3823cc40 = InputPrivacyKey;
inputPrivacyKeyBirthday#d65a11cc = InputPrivacyKey;
inputPrivacyKeyStarGiftsAutoSave#e1732341 = InputPrivacyKey;
inputPrivacyKeyNoPaidMessages#bdc597b4 = InputPrivacyKey;
inputPrivacyKeySavedMusic#4dbe9226 = InputPrivacyKey;

privacyKeyStatusTimestamp#bc2eab30 = PrivacyKey;
privacyKeyChatInvite#500e6dfa = PrivacyKey;
privacyKeyPhoneCall#3d662b7b = PrivacyKey;
privacyKeyPhoneP2P#39491cc8 = PrivacyKey;
privacyKeyForwards#69ec56a3 = PrivacyKey;
privacyKeyProfilePhoto#96151fed = PrivacyKey;
privacyKeyPhoneNumber#d19ae46d = PrivacyKey;
privacyKeyAddedByPhone#42ffd42b = PrivacyKey;
privacyKeyVoiceMessages#0697f414 = PrivacyKey;
privacyKeyAbout#a486b761 = PrivacyKey;
privacyKeyStarGiftsAutoSave#2ca4fdf8 = PrivacyKey;
privacyKeyNoPaidMessages#17d348d2 = PrivacyKey;
privacyKeySavedMusic#ff7a571b = PrivacyKey;

account.privacyRules#50a04e45 rules:Vector<PrivacyRule> chats:Vector<Chat> users:Vector<User> = account.PrivacyRules;

updatePrivacy#ee3b272a key:PrivacyKey rules:Vector<PrivacyRule> = Update;

---functions---

account.getPrivacy#dadbc950 key:InputPrivacyKey = account.PrivacyRules;
account.setPrivacy#c9f81ce8 key:InputPrivacyKey rules:Vector<InputPrivacyRule> = account.PrivacyRules;
```

[@term:PrivacyKey] **Ключи** приватности вместе с [правилами приватности »](#privacy-rules) определяют, _что_ именно кто-либо может или не может делать, и задаются конструктором [PrivacyKey](/type/PrivacyKey/) (ключ приватности — обозначение конкретного вида взаимодействия, для которого настраивается доступ) и его входным аналогом [InputPrivacyKey](/type/InputPrivacyKey/).  
Конструкторы [InputPrivacyKey](/type/InputPrivacyKey/) _передаются_ на вход методам, принимающим ключи приватности, тогда как конструкторы [PrivacyKey](/type/PrivacyKey/) содержатся в конструкторах, _возвращаемых_ API.

Полный список ключей приватности и их описания приведены на [странице типа »](/type/InputPrivacyKey/).

Чтобы получить текущий набор [правил](#privacy-rules), связанных с ключом, используйте [account.getPrivacy](/method/account.getPrivacy/), а чтобы изменить его — [account.setPrivacy](/method/account.setPrivacy/).

Изменение настроек приватности вызывает [updatePrivacy](/constructor/updatePrivacy/), которое отправляется во все сессии, где сейчас выполнен вход в текущий аккаунт.

### Глобальные настройки приватности

```
globalPrivacySettings#fe41b34f flags:# archive_and_mute_new_noncontact_peers:flags.0?true keep_archived_unmuted:flags.1?true keep_archived_folders:flags.2?true hide_read_marks:flags.3?true new_noncontact_peers_require_premium:flags.4?true display_gifts_button:flags.7?true noncontact_peers_paid_stars:flags.5?long disallowed_gifts:flags.6?DisallowedGiftsSettings = GlobalPrivacySettings;

---functions---

account.getGlobalPrivacySettings#eb2b4cf6 = GlobalPrivacySettings;
account.setGlobalPrivacySettings#1edaaac2 settings:GlobalPrivacySettings = GlobalPrivacySettings;
```

Некоторые глобальные настройки приватности можно также получать и изменять с помощью [account.getGlobalPrivacySettings](/method/account.getGlobalPrivacySettings/) и [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/).

Глобальные настройки приватности представлены конструктором [globalPrivacySettings](/constructor/globalPrivacySettings/); полное описание всех настроек приведено на [странице конструктора](/constructor/globalPrivacySettings/).

#### Требовать Premium для новых пользователей не из контактов

```
requirementToContactEmpty#050a9839 = RequirementToContact;
requirementToContactPremium#e581e4e9 = RequirementToContact;
requirementToContactPaidMessages#b4f67e93 stars_amount:long = RequirementToContact;

user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

userFull#06cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;

---functions---

users.getRequirementsToContact#d89a83a3 id:Vector<InputUser> = Vector<RequirementToContact>;
```

Если пользователь включает у себя [глобальную настройку приватности](/api/privacy/#global-privacy-settings) [globalPrivacySettings](/constructor/globalPrivacySettings/).**new\_noncontact\_peers\_require\_premium**, которая для остальных пользователей отражается в поле [user](/constructor/user/).`contact_require_premium`, писать ему в личные сообщения смогут только те, у кого есть премиум-аккаунт, кто состоит у него в списке контактов или у кого уже есть с ним личный чат; в остальных случаях сервер вернёт ошибку `403 PRIVACY_PREMIUM_REQUIRED`.

Учтите, что все перечисленные выше дополнительные условия нужно проверять отдельно, чтобы понять, можем ли мы всё-таки написать пользователю, даже если у него установлен флаг [user](/constructor/user/).`contact_require_premium` (так, у взаимного контакта этот флаг тоже будет установлен, хотя писать ему по-прежнему можно, и тому подобное); чтобы избежать этих дополнительных проверок, когда вся необходимая информация ещё не закеширована (скажем, при показе списка чатов в окне пересылки), можно вместо этого вызвать метод [users.getRequirementsToContact](/method/users.getRequirementsToContact/), передав ему список пользователей, видимых в интерфейсе в данный момент: он вернёт список условий (в том числе [requirementToContactPremium](/constructor/requirementToContactPremium/)), прямо указывающих, можем мы написать каждому из этих пользователей или нет.  
Как вариант, флаг [userFull](/constructor/userFull/).`contact_require_premium` содержит ту же самую информацию, что возвращает [users.getRequirementsToContact](/method/users.getRequirementsToContact/) (уже полностью проверенную, то есть это не просто копия [user](/constructor/user/).`contact_require_premium`).

Эту информацию можно затем использовать, например, чтобы показывать значок замка рядом с аватаром каждого пользователя, которому мы не можем написать, вместе с подсказкой, предлагающей оформить подписку [Premium](/api/premium/).

Учтите, что [users.getRequirementsToContact](/method/users.getRequirementsToContact/) следует вызывать **только** в том случае, если у нас нет подписки [Premium](/api/premium/), и только для тех пользователей, чья полная информация ([userFull](/constructor/userFull/) плюс сведения об истории сообщений) ещё не закеширована: если все упомянутые данные есть, то же самое вычисляется локально, а поддерживается в актуальном состоянии автоматически — обычными [обновлениями](/api/updates/).

Учтите также, что настройку [globalPrivacySettings](/constructor/globalPrivacySettings/).**new\_noncontact\_peers\_require\_premium** могут включать как пользователи без [Premium](/api/premium/), так и пользователи с [Premium](/api/premium/), но лишь при условии, что [флаг клиентской конфигурации new\_noncontact\_peers\_require\_premium\_without\_ownpremium »](/api/config/#new-noncontact-peers-require-premium-without-ownpremium) равен true; в противном случае включить её могут только пользователи с [Premium](/api/premium/), а пользователи без Premium при попытке выставить этот флаг через [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/) получат ошибку `PREMIUM_ACCOUNT_REQUIRED`.

#### Требовать оплату в Telegram Stars за получение сообщений

Если пользователь включает у себя [глобальную настройку приватности](/api/privacy/#global-privacy-settings) [globalPrivacySettings](/constructor/globalPrivacySettings/).`noncontact_peers_paid_stars`, то каждый, кто захочет ему написать, обязан будет заплатить ему указанное количество [Telegram Stars »](/api/stars/)

Ту же настройку можно включить для супергрупп и каналов; полная документация по платным сообщениям — [здесь »](/api/paid-messages/).
