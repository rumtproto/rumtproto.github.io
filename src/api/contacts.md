---
title: "Список контактов"
original: "https://core.telegram.org/api/contacts"
section: api
description: "Глубокие ссылки на контакты » (deep link — ссылка, открывающая нужный экран прямо в приложении) позволяют перевести пользователя к списку контактов, при желании сразу открыв…"
layout: layout.njk
---

# Список контактов

Работа с контактами.

[@term:deep link] [Глубокие ссылки на контакты »](/api/links/#contacts-links) (`deep link` — ссылка, открывающая нужный экран прямо в приложении) позволяют привести пользователя к списку контактов и при желании сразу открыть определённый раздел или действие: поиск, сортировку, добавление нового контакта, приглашение друзей или управление контактами.

### Импорт телефонных контактов

Схема:

```
inputPhoneContact#6a1dc4be flags:# client_id:long phone:string first_name:string last_name:string note:flags.0?TextWithEntities = InputContact;

importedContact#c13e3c50 user_id:long client_id:long = ImportedContact;
popularContact#5ce14175 client_id:long importers:int = PopularContact;

contacts.importedContacts#77d01c3b imported:Vector<ImportedContact> popular_invites:Vector<PopularContact> retry_contacts:Vector<long> users:Vector<User> = contacts.ImportedContacts;

---functions---

contacts.importContacts#2c800be5 contacts:Vector<InputContact> = contacts.ImportedContacts;
```

Чтобы загрузить локальный список контактов в Telegram и узнать, кто из них уже зарегистрирован в Telegram, вызовите [contacts.importContacts](/method/contacts.importContacts/), передав массив конструкторов [inputPhoneContact](/constructor/inputPhoneContact/), которые содержат:

-   `phone` — номер телефона в международном формате
-   `first_name` — имя
-   `last_name` — фамилия, может быть пустой
-   `client_id` — произвольное 64-битное целое число (**не** идентификатор пользователя Telegram, так как его мы ещё не знаем); проследите, чтобы среди значений client\_id, передаваемых в одном вызове [contacts.importContacts](/method/contacts.importContacts/), не было совпадений (например, используйте простой возрастающий идентификатор, начиная с 0)

Метод вернёт конструктор [contacts.importedContacts](/constructor/contacts.importedContacts/) со следующими полями:

-   `imported` — список успешно импортированных контактов, у которых есть связанный аккаунт Telegram, в виде конструкторов [importedContact](/constructor/importedContact/).  
    `user_id` — идентификатор пользователя Telegram, `client_id` — тот `client_id`, который был сопоставлен контакту при вызове метода. Учтите: из-за [настроек приватности](/api/privacy/) пользователя (а именно ключа приватности [inputPrivacyKeyAddedByPhone](/constructor/inputPrivacyKeyAddedByPhone/)) здесь возвращаются не обязательно все контакты, у которых есть связанный аккаунт Telegram.
-   `users` — сведения о пользователях Telegram, упомянутых в `imported`
-   `popular_invites` — сведения о популярных контактах: каждый конструктор [popularContact](/constructor/popularContact/) означает, что контакт с указанным `client_id` импортировали `imported` раз — столько же пользователей Telegram.
-   `retry_contacts` — список идентификаторов контактов, которые не удалось импортировать из-за системного ограничения на стороне сервера; их придётся импортировать повторно ещё одним вызовом [contacts.importedContacts](/constructor/contacts.importedContacts/).

### Поиск аккаунта по номеру телефона

```
contacts.resolvedPeer#7f077ad9 peer:Peer chats:Vector<Chat> users:Vector<User> = contacts.ResolvedPeer;

---functions---

contacts.resolvePhone#8af94344 phone:string = contacts.ResolvedPeer;
```

Метод [contacts.resolvePhone](/method/contacts.resolvePhone/) позволяет проверить, связан ли с номером телефона аккаунт Telegram, не добавляя этот номер в контакты.

Если с указанным номером телефона не связан ни один аккаунт Telegram, будет возвращена ошибка `PHONE_NOT_OCCUPIED`.

Та же ошибка возвращается, если [настройки приватности »](/api/privacy/) целевого аккаунта (а именно ключ приватности [inputPrivacyKeyAddedByPhone](/constructor/inputPrivacyKeyAddedByPhone/)) запрещают искать его по номеру телефона.

[@term:rate limit] Обязательно реализуйте на стороне клиента ограничение частоты запросов к этому методу (`rate limit`) и подавление дребезга (debounce): допускается не более одного вызова каждые 3 секунды.

### Добавление пользователей Telegram в контакты

Схема:

```
users.userFull#3b6d152e full_user:UserFull chats:Vector<Chat> users:Vector<User> = users.UserFull;

inputUser#f21158c6 user_id:long access_hash:long = InputUser;

user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

peerSettings#f47741f7 flags:# report_spam:flags.0?true add_contact:flags.1?true block_contact:flags.2?true share_contact:flags.3?true need_contacts_exception:flags.4?true report_geo:flags.5?true autoarchived:flags.7?true invite_members:flags.8?true request_chat_broadcast:flags.10?true business_bot_paused:flags.11?true business_bot_can_reply:flags.12?true geo_distance:flags.6?int request_chat_title:flags.9?string request_chat_date:flags.9?int business_bot_id:flags.13?long business_bot_manage_url:flags.13?string charge_paid_message_stars:flags.14?long registration_month:flags.15?string phone_country:flags.16?string name_change_date:flags.17?int photo_change_date:flags.18?int = PeerSettings;

userFull#06cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;

updatePeerSettings#6a7e7366 peer:Peer settings:PeerSettings = Update;

---functions---

users.getFullUser#b60f5918 id:InputUser = users.UserFull;

contacts.addContact#d9ba2e54 flags:# add_phone_privacy_exception:flags.0?true id:InputUser first_name:string last_name:string phone:string note:flags.1?TextWithEntities = Updates;
```

Пользователей Telegram тоже можно добавлять в список контактов (даже если их номер телефона нам недоступен!) — методом [contacts.addContact](/method/contacts.addContact/).

Установите флаг `add_phone_privacy_exception`, если хотим разрешить другому пользователю видеть наш номер телефона: этот флаг **обязан** быть установлен, если в [peerSettings](/constructor/peerSettings/) установлен флаг `need_contacts_exception` (подробнее см. [документацию по панели действий »](/api/action-bar/)).

Другому пользователю будет предложено, в свою очередь, добавить нас в список контактов через [панель действий «добавить контакт»](/api/action-bar/): если он согласится, его номер телефона автоматически добавится в наш контакт.

При добавлении или изменении контакта теперь можно приложить личную заметку — чтобы не забыть, как вы познакомились, где человек работает или какое мороженое он любит; подробнее см. [здесь »](/api/contacts/#private-notes-for-contacts).

### Личные заметки к контактам

```
inputPhoneContact#6a1dc4be flags:# client_id:long phone:string first_name:string last_name:string note:flags.0?TextWithEntities = InputContact;

userFull#06cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;

---functions---

contacts.addContact#d9ba2e54 flags:# add_phone_privacy_exception:flags.0?true id:InputUser first_name:string last_name:string phone:string note:flags.1?TextWithEntities = Updates;
contacts.importContacts#2c800be5 contacts:Vector<InputContact> = contacts.ImportedContacts;

contacts.updateContactNote#139f63fb id:InputUser note:TextWithEntities = Bool;

users.getFullUser#b60f5918 id:InputUser = users.UserFull;
```

При добавлении или изменении **контакта Telegram** теперь можно приложить личную заметку — чтобы не забыть, как вы познакомились, где человек работает или какое мороженое он любит.

Заметки к контактам **видны только вам** и показываются в [профиле »](/api/profile/) пользователя Telegram под его описанием.

Заметку можно задать при добавлении контакта через [contacts.addContact](/method/contacts.addContact/).`note`, а также при импорте контактов через [contacts.importContacts](/method/contacts.importContacts/) — передав её в [inputPhoneContact](/constructor/inputPhoneContact/).`note`.

Заметки у уже существующих контактов меняются методом [contacts.updateContactNote](/method/contacts.updateContactNote/).

Максимальная длина заметки задана [ключом клиентской конфигурации contact\_note\_length\_limit »](/api/config/#contact-note-length-limit).

Учтите, что пользователей Telegram можно добавить в список контактов (а значит, и завести для них личную заметку), даже если их номер телефона нам недоступен, — методом [contacts.addContact](/method/contacts.addContact/); подробнее см. [здесь »](/api/contacts/#adding-telegram-users-as-contacts).

После этого заметка станет доступна в [userFull](/constructor/userFull/).`note`; получить её можно методом [users.getFullUser](/method/users.getFullUser/).

### Как поделиться своим номером телефона

```
---functions---

contacts.acceptContact#f831a20f id:InputUser = Updates;
```

Этот метод вызывается, когда пользователь нажимает кнопку добавления контакта в [панели чата «добавить контакт»](/api/action-bar/#add-contact).

Панель включается, только если другой пользователь [добавил нас в контакты](#adding-telegram-users-as-contacts) методом [contacts.addContact](/method/contacts.addContact/) без указания номера телефона и не установлен ни один из [флагов панели](/api/action-bar/) `add_contact`, `report_spam`, `block_contact`, а флаг `share_contact` установлен — это и означает, что мы вправе вызвать [contacts.acceptContact](/method/contacts.acceptContact/), чтобы сообщить другому пользователю свой номер телефона.

### Получение списка контактов

Схема:

```
contact#145ade0b user_id:long mutual:Bool = Contact;

user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

contacts.contacts#eae87e42 contacts:Vector<Contact> saved_count:int users:Vector<User> = contacts.Contacts;
contacts.contactsNotModified#b74ba9d2 = contacts.Contacts;

savedPhoneContact#1142bd56 phone:string first_name:string last_name:string date:int = SavedContact;

---functions---

contacts.getContacts#5dd69e12 hash:long = contacts.Contacts;

contacts.getSaved#82f1e39f = Vector<SavedContact>;

contacts.getContactIDs#7adc669d hash:long = Vector<int>;
```

Метод [contacts.getContacts](/method/contacts.getContacts/) возвращает всех участников списка контактов, у которых есть связанный аккаунт Telegram.

Метод [contacts.getContactIDs](/method/contacts.getContactIDs/) возвращает массив идентификаторов пользователей Telegram для всех контактов (для тех, у кого нет связанного аккаунта Telegram или кто скрыл свой аккаунт настройками приватности, возвращается 0).

[@term:takeout] Чтобы получить _полный_ список контактов, включая контакты без связанного аккаунта Telegram, вызовите [contacts.getSaved](/method/contacts.getSaved/) внутри [сессии выгрузки данных »](/api/takeout/) (`takeout` — особый режим сессии для массового экспорта данных аккаунта).

### Получение статусов контактов

Схема:

```
userStatusEmpty#09d05049 = UserStatus;
userStatusOnline#edb93949 expires:int = UserStatus;
userStatusOffline#008c703f was_online:int = UserStatus;
userStatusRecently#7b197dc8 flags:# by_me:flags.0?true = UserStatus;
userStatusLastWeek#541a1d1a flags:# by_me:flags.0?true = UserStatus;
userStatusLastMonth#65899777 flags:# by_me:flags.0?true = UserStatus;

contactStatus#16d9703b user_id:long status:UserStatus = ContactStatus;

---functions---

contacts.getStatuses#c4a353ee = Vector<ContactStatus>;
```

Метод [contacts.getStatuses](/method/contacts.getStatuses/) возвращает статусы присутствия в сети всех контактов, чей аккаунт Telegram доступен.

### Поиск контактов

Схема:

```
contacts.found#b3134d9d my_results:Vector<Peer> results:Vector<Peer> chats:Vector<Chat> users:Vector<User> = contacts.Found;

contacts.sponsoredPeersEmpty#ea32b4b1 = contacts.SponsoredPeers;
contacts.sponsoredPeers#eb032884 peers:Vector<SponsoredPeer> chats:Vector<Chat> users:Vector<User> = contacts.SponsoredPeers;

---functions---

contacts.search#11f812d8 q:string limit:int = contacts.Found;

contacts.getSponsoredPeers#b6c8c393 q:string = contacts.SponsoredPeers;
```

Метод [contacts.search](/method/contacts.search/) выполняет поиск внутри списка контактов.

[@term:peer] **Примечание**: при использовании этого метода в глобальном поиске следует также вызывать [contacts.getSponsoredPeers](/method/contacts.getSponsoredPeers/) — он возвращает список рекламных пиров (`peer` — собеседник: пользователь, чат или канал), которые показываются после результатов из [contacts.found](/constructor/contacts.found/).`my_results` и перед результатами из [contacts.found](/constructor/contacts.found/).`results`: подробнее [здесь »](/api/sponsored-messages/#getting-sponsored-search-results).

### Удаление контактов

Схема:

```
---functions---

contacts.deleteContacts#096a0e00 id:Vector<InputUser> = Updates;

contacts.deleteByPhones#1013fd9e phones:Vector<string> = Bool;

contacts.resetSaved#879537f1 = Bool;
```

Метод [contacts.deleteContacts](/method/contacts.deleteContacts/) удаляет контакты, у которых есть связанный аккаунт Telegram; возвращаемый [Updates](/type/Updates/) будет содержать обновлённые сведения о пользователях.

Метод [contacts.deleteByPhones](/method/contacts.deleteByPhones/) удаляет контакты по номеру телефона — даже те, у которых нет связанного аккаунта Telegram.

Метод [contacts.resetSaved](/method/contacts.resetSaved/) удаляет все контакты, у которых нет связанного аккаунта Telegram.
