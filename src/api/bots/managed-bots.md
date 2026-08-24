---
title: "Управляемые боты"
original: "https://core.telegram.org/api/bots/managed-bots"
section: api
description: "Как создавать аккаунты ботов через MTProto API."
layout: layout.njk
---

# Управляемые боты

Как создавать аккаунты ботов через MTProto API.

[@term:managed bot] Пользователи могут создавать **управляемых** ботов (`managed bot` — бот, которым управляет назначенный ему бот-менеджер) прямо через MTProto API, не обращаясь к [@BotFather](https://t.me/botfather).

### Создание управляемого бота

```
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

---functions---

bots.checkUsername#87f2219b username:string = Bool;
bots.createBot#e5b17f2b flags:# via_deeplink:flags.0?true name:string username:string manager_id:InputUser = User;
```

**Управляемый бот** — это бот, которым полностью владеет пользователь, создавший его через [bots.createBot](/method/bots.createBot/).

Им может управлять сам пользователь через [@BotFather](https://t.me/BotFather), как и всеми принадлежащими ему ботами, но, кроме того, им может управлять **бот-менеджер**, указанный в параметре `manager_id` метода [bots.createBot](/method/bots.createBot/).

У бота-менеджера обязан быть выставлен флаг [user](/constructor/user/).`bot_can_manage_bots`: он означает, что бот может управлять ботами, созданными пользователями по этой схеме, и переключается через [@BotFather](https://t.me/BotFather).

[@term:username] Чтобы создать управляемого бота, сначала проверьте, свободно ли выбранное пользователем имя (`username` — публичное имя-псевдоним, по которому пир доступен в Telegram) и можно ли задействовать его для управляемого бота, — вызовите [bots.checkUsername](/method/bots.checkUsername/), который при успехе вернёт [boolTrue](/constructor/boolTrue/), а иначе — ошибку RPC (перечень возможных ошибок и их значения приведены на странице метода).

Как и у всех ботов, `username` **обязан** оканчиваться на `bot`.

Клиентам, где `username` проверяется на лету, следует сначала проверять его локально, до вызова [bots.checkUsername](/method/bots.checkUsername/): допускаются только буквы, цифры и подчёркивания, а полная длина имени вместе с суффиксом `bot` должна составлять 5–32 символа.

[@term:debounce] Вызовы [bots.checkUsername](/method/bots.checkUsername/) следует выполнять с подавлением дребезга (`debounce` — приём, при котором запрос уходит только после того, как ввод не менялся заданное время) и задержкой 200 миллисекунд.

Затем вызовите [bots.createBot](/method/bots.createBot/), передав следующие параметры:

-   `name` — отображаемое имя бота, 1–64 символа.
-   `username` — проверенное имя, включая суффикс `bot`.
-   `manager_id` — бот-менеджер.
-   [@term:deep link] Флаг `via_deeplink` выставляйте только в том случае, если окно создания было открыто по [глубокой ссылке на создание управляемого бота »](/api/links/#managed-bot-creation-request-links) (`deep link` — ссылка, которая открывает приложение сразу на нужном экране с заданными параметрами).

Возвращённый [user](/constructor/user/) и есть созданный бот.

Вместо него метод может вернуть и одну из следующих ошибок:

-   `BOT_CREATE_LIMIT_EXCEEDED` — если текущему пользователю уже принадлежит максимально допустимое число собственных ботов.

    Ограничение на число собственных ботов публикуется через ключи конфигурации [`bots_create_limit_default` »](/api/config/#bots-create-limit-default) и [`bots_create_limit_premium` »](/api/config/#bots-create-limit-premium), а также как лимит Premium [`double_limits__bots_create` »](/api/premium/#double-limits-bots-create).

    Если текущий пользователь не имеет Premium, то при получении этой ошибки клиенту следует предложить оформить [подписку Premium](/api/premium/); если подписка Premium уже есть, клиентам следует предложить открыть `https://t.me/BotFather?start=deletebot`, чтобы пользователь мог удалить одного из своих ботов.

-   `MANAGER_PERMISSION_MISSING` — если у бота, переданного в `manager_id`, не выставлен флаг [user](/constructor/user/).`bot_can_manage_bots` (то есть он не является **ботом-менеджером**).

-   `USERNAME_OCCUPIED` — если `username` успели занять в промежутке между вызовами [bots.checkUsername](/method/bots.checkUsername/) и [bots.createBot](/method/bots.createBot/)

[@term:Mini App] [@term:peer] Вызывать [bots.checkUsername](/method/bots.checkUsername/) и [bots.createBot](/method/bots.createBot/) могут только пользователи: боты и Mini App (мини-приложения, работающие внутри Telegram) могут запросить создание управляемого бота с помощью [запросов пиров »](/api/bots/buttons/#requesting-a-managed-bot) (`peer` — пир, то есть адресат: пользователь, чат или канал).

Запросить создание управляемого бота можно и через [глубокие ссылки на запрос создания управляемого бота »](/api/links/#managed-bot-creation-request-links) — точно так же, как через [запросы пиров »](/api/bots/buttons/#requesting-a-managed-bot): обрабатывайте такие ссылки, запуская обычную [процедуру создания управляемого бота »](/api/bots/managed-bots/#creating-a-managed-bot) с указанными в ссылке аргументами и дополнительно выставляя флаг `via_deeplink` при итоговом вызове [bots.createBot](/method/bots.createBot/).

### Управление управляемым ботом

```
updateManagedBot#4880ed9a user_id:long bot_id:long qts:int = Update;

bots.exportedBotToken#3c60b621 token:string = bots.ExportedBotToken;

bots.accessSettings#dd1fbf93 flags:# restricted:flags.0?true add_users:flags.1?Vector<User> = bots.AccessSettings;

---functions---

bots.exportBotToken#bd0d99eb bot:InputUser revoke:Bool = bots.ExportedBotToken;
bots.getAccessSettings#213853a3 bot:InputUser = bots.AccessSettings;
bots.editAccessSettings#31813cd8 flags:# restricted:flags.0?true bot:InputUser add_users:flags.1?Vector<InputUser> = Bool;
```

В профиле управляемого бота идентификатор его менеджера доступен в поле [userFull](/constructor/userFull/).`bot_manager_id`, подробнее об этом — [здесь »](/api/profile/#managed-bot-manager).

Когда управляемый бот создан или изменён, обновление [updateManagedBot](/constructor/updateManagedBot/) получает (только) бот-менеджер.

[@term:bot token] После этого бот-менеджер может вызвать [bots.exportBotToken](/method/bots.exportBotToken/) для `bot_id` и получить [токен](/api/bots/) управляемого бота (`bot token` — секретная строка, по которой бот входит в аккаунт). Выставьте `revoke`, чтобы заменить текущий токен.

Боты-менеджеры также могут использовать [bots.getAccessSettings](/method/bots.getAccessSettings/) и [bots.editAccessSettings](/method/bots.editAccessSettings/), чтобы просматривать и изменять настройки ограничения доступа к управляемому боту.

Если выставлен флаг [bots.accessSettings](/constructor/bots.accessSettings/).`restricted`, доступ к управляемому боту будет только у его владельца.

Дополнительно — и только если выставлен `restricted` — поле [bots.accessSettings](/constructor/bots.accessSettings/).`add_users` может содержать список дополнительных пользователей (не более 10, не считая владельца), которые получат доступ к управляемому боту наряду с владельцем.
