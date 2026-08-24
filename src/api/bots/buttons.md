---
title: "Кнопки ботов"
original: "https://core.telegram.org/api/bots/buttons"
section: api
description: "Пользователи могут взаимодействовать с вашим ботом через кнопки и даже инлайн-кнопки — прямо из инлайн-сообщений в любом чате. В этой статье описан полный цикл работы с кнопками…"
layout: layout.njk
---

# Кнопки ботов

Пользователи могут взаимодействовать с вашим ботом через **кнопки** и даже **инлайн-кнопки** — прямо из инлайн-**сообщений** в **любом** чате.  
В этой статье описан полный цикл работы с кнопками средствами MTProto API.

Упрощённое описание для HTTP bot API см. [здесь »](https://core.telegram.org/bots/features#keyboards).

### Кнопки

```
keyboardButtonRow#77608b83 buttons:Vector<KeyboardButton> = KeyboardButtonRow;

replyKeyboardHide#a03e5b85 flags:# selective:flags.2?true = ReplyMarkup;
replyKeyboardForceReply#86b40b08 flags:# single_use:flags.1?true selective:flags.2?true placeholder:flags.3?string = ReplyMarkup;
replyKeyboardMarkup#85dd99d1 flags:# resize:flags.0?true single_use:flags.1?true selective:flags.2?true persistent:flags.4?true rows:Vector<KeyboardButtonRow> placeholder:flags.3?string = ReplyMarkup;
replyInlineMarkup#48a30254 rows:Vector<KeyboardButtonRow> = ReplyMarkup;

message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;

---functions---

messages.sendMessage#545cd15a flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
```

Боты могут прикреплять к исходящим сообщениям конструктор [ReplyMarkup](/type/ReplyMarkup/), чтобы добавить [инлайн-клавиатуру](https://core.telegram.org/bots/features#inline-keyboards) или [пользовательскую клавиатуру ответов](https://core.telegram.org/bots/features#keyboards):

-   [replyKeyboardMarkup](/constructor/replyKeyboardMarkup/) — отправляет [пользовательскую клавиатуру ответов](https://core.telegram.org/bots/features#keyboards).  
    Клиенты, получившие такой конструктор, должны показать [специальную клавиатуру](https://core.telegram.org/bots/features#keyboards) с заданными вариантами ответа.
-   [replyKeyboardHide](/constructor/replyKeyboardHide/) — скрывает [пользовательскую клавиатуру ответов](https://core.telegram.org/bots/features#keyboards).  
    Клиенты, получившие этот конструктор, должны скрыть [пользовательскую клавиатуру ответов](https://core.telegram.org/bots/features#keyboards), открытую конструктором [replyKeyboardMarkup](/constructor/replyKeyboardMarkup/)
-   [replyKeyboardForceReply](/constructor/replyKeyboardForceReply/) — отправляет конструктор [принудительного ответа](https://core.telegram.org/bots/api#forcereply)  
    Клиенты, получившие сообщение с этим конструктором, должны повести себя так, как если бы пользователь нажал кнопку ответа на сообщение, и показать интерфейс ответа.
-   [replyInlineMarkup](/constructor/replyInlineMarkup/) — прикрепляет к сообщению [инлайн-клавиатуру](https://core.telegram.org/bots/features#inline-keyboards), позволяя пользователям отправлять боту callback-данные, не отправляя настоящих сообщений в текущий чат.

#### Стили кнопок

```
keyboardButtonStyle#4fdd3430 flags:# bg_primary:flags.0?true bg_danger:flags.1?true bg_success:flags.2?true icon:flags.3?long = KeyboardButtonStyle;
```

Кнопкам допускается дополнительно задать оформление конструктором [keyboardButtonStyle](/constructor/keyboardButtonStyle/), который можно прикрепить к любой кнопке через флаг `style`.

Этот конструктор позволяет сменить цвет фона кнопки на один из предопределённых цветов — для этого достаточно выставить соответствующий флаг:

-   `bg_primary` — тёмно-синий цвет, рекомендуется для основных действий.
-   `bg_danger` — красный цвет, рекомендуется для разрушительных действий.
-   `bg_success` — зелёный цвет, рекомендуется для положительных действий.
-   Если не выставлен ни один из перечисленных флагов, используется фон по умолчанию — прозрачный (для инлайн-клавиатур) или белый (для клавиатур ответов); он рекомендуется для нейтральных действий.

Указанные выше цвета следует отрисовывать надлежащим образом — при необходимости инвертируя — в соответствии с текущей [темой](/api/themes/) (например, для тёмного режима).

Одновременно допускается выставить только один флаг цвета фона (или ни одного, но лишь при условии, что дополнительно задан `icon`).

Кроме того, в поле `icon` можно передать [идентификатор пользовательского эмодзи](/api/custom-emoji/), чтобы показать его перед текстом кнопки.

Поле `icon` можно использовать как вместе с пользовательскими цветами фона кнопки, так и без них.

Значки из пользовательских эмодзи допускаются в кнопках только при условии, что бот приобрёл дополнительные имена на [Fragment](https://fragment.com/) либо у владельца бота есть активная подписка [Telegram Premium](/api/premium/).

### Нажатие кнопок

Как [клавиатуры ответов](https://core.telegram.org/bots/features#keyboards), так и [инлайн-клавиатуры](https://core.telegram.org/bots/features#inline-keyboards) состоят из вектора [рядов](/constructor/keyboardButtonRow/), а каждый ряд содержит вектор [кнопок](/type/KeyboardButton/) — по одной на столбец. В разных рядах может быть разное число столбцов, и клиентам следует корректно обрабатывать нажатие кнопок любого типа.

Для каждого конструктора [KeyboardButton](/type/KeyboardButton/) смотрите, где он применим и что клиенты обязаны делать при его нажатии.

### Запрос пиров

```
inputKeyboardButtonRequestPeer#02b78156 flags:# name_requested:flags.0?true username_requested:flags.1?true photo_requested:flags.2?true style:flags.10?KeyboardButtonStyle text:string button_id:int peer_type:RequestPeerType max_quantity:int = KeyboardButton;
keyboardButtonRequestPeer#5b0f15f5 flags:# style:flags.10?KeyboardButtonStyle text:string button_id:int peer_type:RequestPeerType max_quantity:int = KeyboardButton;
```

[@term:peer] Конструктор [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) используется ботами, чтобы запросить у пользователя пир (`peer` — собеседник: пользователь, чат или канал). Чтобы отправить [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/), используйте парный ему [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/).

#### Запрос существующих пиров

```
requestPeerTypeUser#5f3b8a00 flags:# bot:flags.0?Bool premium:flags.1?Bool = RequestPeerType;
requestPeerTypeChat#c9f06e1b flags:# creator:flags.0?true bot_participant:flags.5?true has_username:flags.3?Bool forum:flags.4?Bool user_admin_rights:flags.1?ChatAdminRights bot_admin_rights:flags.2?ChatAdminRights = RequestPeerType;
requestPeerTypeBroadcast#339bef6c flags:# creator:flags.0?true has_username:flags.3?Bool user_admin_rights:flags.1?ChatAdminRights bot_admin_rights:flags.2?ChatAdminRights = RequestPeerType;

inputKeyboardButtonRequestPeer#02b78156 flags:# name_requested:flags.0?true username_requested:flags.1?true photo_requested:flags.2?true style:flags.10?KeyboardButtonStyle text:string button_id:int peer_type:RequestPeerType max_quantity:int = KeyboardButton;
keyboardButtonRequestPeer#5b0f15f5 flags:# style:flags.10?KeyboardButtonStyle text:string button_id:int peer_type:RequestPeerType max_quantity:int = KeyboardButton;

messageActionRequestedPeer#31518e9b button_id:int peers:Vector<Peer> = MessageAction;

---functions---

messages.sendBotRequestedPeer#6c5cf2a7 flags:# peer:InputPeer msg_id:flags.0?int webapp_req_id:flags.1?string button_id:int requested_peers:Vector<InputPeer> = Updates;
```

При нажатии клиенты предлагают пользователю выбрать и передать боту не более [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/).`max_quantity` пиров, отвечающих условиям, которые заданы в [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/).`peer_type` — конструкторе [RequestPeerType](/type/RequestPeerType/).

После выбора пиров клиенты вызывают [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/), передавая [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/).`button_id` в [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/).`button_id`.

Бот получает выбранный пир и `button_id` в сервисном сообщении [messageActionRequestedPeer](/constructor/messageActionRequestedPeer/).

[@term:Mini App] Этот сценарий допускается использовать и в Mini Apps (Mini App — веб-приложение, встроенное в клиент Telegram и работающее внутри него) — так, как описано [здесь »](#requesting-peers-via-mini-apps).

#### Запрос управляемого бота

```
requestPeerTypeCreateBot#3e81e078 flags:# bot_managed:flags.0?true suggested_name:flags.1?string suggested_username:flags.2?string = RequestPeerType;

inputKeyboardButtonRequestPeer#02b78156 flags:# name_requested:flags.0?true username_requested:flags.1?true photo_requested:flags.2?true style:flags.10?KeyboardButtonStyle text:string button_id:int peer_type:RequestPeerType max_quantity:int = KeyboardButton;
keyboardButtonRequestPeer#5b0f15f5 flags:# style:flags.10?KeyboardButtonStyle text:string button_id:int peer_type:RequestPeerType max_quantity:int = KeyboardButton;

messageActionManagedBotCreated#16605e3e bot_id:long = MessageAction;

---functions---

messages.sendBotRequestedPeer#6c5cf2a7 flags:# peer:InputPeer msg_id:flags.0?int webapp_req_id:flags.1?string button_id:int requested_peers:Vector<InputPeer> = Updates;
```

[Бот-менеджер](/api/bots/managed-bots/#creating-a-managed-bot) может попросить пользователя создать управляемого бота, отправив [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/), у которого [RequestPeerType](/type/RequestPeerType/) равен [requestPeerTypeCreateBot](/constructor/requestPeerTypeCreateBot/). Клиенты получают эту кнопку в виде [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/).

При создании [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/) типа [requestPeerTypeCreateBot](/constructor/requestPeerTypeCreateBot/) не выставляйте ни один из флагов `name_requested`, `username_requested`, `photo_requested`.

Когда пользователь нажимает кнопку, покажите [процесс создания управляемого бота](/api/bots/managed-bots/#creating-a-managed-bot), используя:

-   `suggested_name`, если задано, — как начальное имя бота.
-   `suggested_username`, если задано, — как начальное имя пользователя бота.

После успешного выполнения [bots.createBot](/method/bots.createBot/) вызовите [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/):

-   `peer` — это бот-менеджер.
-   `msg_id` — идентификатор сообщения, содержащего [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/).
-   `button_id` — это [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/).`button_id`.
-   `requested_peers` содержит только вновь созданного бота — и ничего больше.

Если [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/) указывает на [requestPeerTypeCreateBot](/constructor/requestPeerTypeCreateBot/), порождается сервисное сообщение [messageActionManagedBotCreated](/constructor/messageActionManagedBotCreated/), которое пользователь отправляет боту-менеджеру; в нём содержится ID только что созданного бота.

Конструктор [messageActionManagedBotCreated](/constructor/messageActionManagedBotCreated/) порождается только при вызове [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/), но не при вызове [bots.createBot](/method/bots.createBot/).

Этот сценарий допускается использовать и в Mini Apps — так, как описано [здесь »](#requesting-peers-via-mini-apps).

#### Запрос пиров через Mini Apps

```
inputKeyboardButtonRequestPeer#02b78156 flags:# name_requested:flags.0?true username_requested:flags.1?true photo_requested:flags.2?true style:flags.10?KeyboardButtonStyle text:string button_id:int peer_type:RequestPeerType max_quantity:int = KeyboardButton;
keyboardButtonRequestPeer#5b0f15f5 flags:# style:flags.10?KeyboardButtonStyle text:string button_id:int peer_type:RequestPeerType max_quantity:int = KeyboardButton;

bots.requestedButton#f13bbcd7 webapp_req_id:string = bots.RequestedButton;

---functions---

bots.requestWebViewButton#31a2a35e user_id:InputUser button:KeyboardButton = bots.RequestedButton;

bots.getRequestedWebViewButton#bf25b7f3 bot:InputUser webapp_req_id:string = KeyboardButton;

messages.sendBotRequestedPeer#6c5cf2a7 flags:# peer:InputPeer msg_id:flags.0?int webapp_req_id:flags.1?string button_id:int requested_peers:Vector<InputPeer> = Updates;
```

Бот может заранее подготовить кнопку запроса пира для [Mini App](/api/bots/webapps/): для этого он вызывает [bots.requestWebViewButton](/method/bots.requestWebViewButton/), передавая [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/) с любым [RequestPeerType](/type/RequestPeerType/) и целевого пользователя, который будет пользоваться указанной кнопкой.

Затем боту следует передать в Mini App значение [bots.requestedButton](/constructor/bots.requestedButton/).`webapp_req_id`, полученное в ответе.

Когда Mini App генерирует событие [`web_app_request_chat`](/api/web-events/#web-app-request-chat), клиент пользователя обязан вызвать [bots.getRequestedWebViewButton](/method/bots.getRequestedWebViewButton/), передав бота и полученный в событии `req_id` в качестве [bots.getRequestedWebViewButton](/method/bots.getRequestedWebViewButton/).`webapp_req_id`.

Если [bots.getRequestedWebViewButton](/method/bots.getRequestedWebViewButton/) возвращает [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/), покажите подходящий сценарий запроса пира, заданный полем [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/).`peer_type` (доступные сценарии перечислены [выше &raqo;](#peer-requests)).

После того как пользователь выберет или создаст запрошенный пир, вызовите [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/):

-   `peer` обязан содержать бота.
-   `webapp_req_id` обязан содержать ID запроса Mini App.
-   `button_id` обязан содержать возвращённое значение [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/).`button_id`.
-   `requested_peers` обязан содержать пиры, выбранные или созданные пользователем.

Уведомьте Mini App событием [`requested_chat_sent` »](/api/bots/webapps/#requested-chat-sent) после успешного выполнения [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/) — либо событием [`requested_chat_failed` »](/api/bots/webapps/#requested-chat-failed), если пользователь отменил операцию или запрос завершился ошибкой.

### Callback-запросы

Кнопки [keyboardButtonCallback](/constructor/keyboardButtonCallback/) позволяют отправить боту заданные данные `data` при нажатии на них.

Кроме того, бот может удостовериться в личности пользователя, потребовав подтвердить пароль двухфакторной аутентификации по протоколу [SRP](/api/srp/).

#### Отправка callback-запроса

```
keyboardButtonGame#89c590f9 flags:# style:flags.10?KeyboardButtonStyle text:string = KeyboardButton;
keyboardButtonCallback#e62bc960 flags:# requires_password:flags.0?true style:flags.10?KeyboardButtonStyle text:string data:bytes = KeyboardButton;

messages.botCallbackAnswer#36585ea4 flags:# alert:flags.1?true has_url:flags.3?true native_ui:flags.4?true message:flags.0?string url:flags.2?string cache_time:int = messages.BotCallbackAnswer;

---functions---

messages.getBotCallbackAnswer#9342ca07 flags:# game:flags.1?true peer:InputPeer msg_id:int data:flags.0?bytes password:flags.2?InputCheckPasswordSRP = messages.BotCallbackAnswer;
```

[@term:inline query] Когда пользователь нажимает [keyboardButtonCallback](/constructor/keyboardButtonCallback/) в сообщении, отправленном ботом или порождённом [инлайн-запросом](/api/bots/inline/) (`inline query` — запрос к боту прямо из строки ввода), следует вызвать [messages.getBotCallbackAnswer](/method/messages.getBotCallbackAnswer/), передав пир и ID сообщения.  
То же самое должно происходить при нажатии на кнопки [keyboardButtonGame](/constructor/keyboardButtonGame/) — с той разницей, что вместо параметра `data` обязан быть установлен флаг `game`.

Обязательно корректно обрабатывайте таймауты бота, приходящие в виде RPC-ошибок `BOT_RESPONSE_TIMEOUT`: бот может быть недоступен и не в состоянии ответить.

Возвращаемый конструктор [messages.botCallbackAnswer](/constructor/messages.botCallbackAnswer/) содержит:

-   `message` — если задано, сообщение, которое следует показать в неблокирующем всплывающем уведомлении (toast)
-   `alert` — указывает, следует ли показать `message` в виде закрываемого пользователем диалога, а не простого всплывающего уведомления
-   `has_url` — присутствует ли URL
-   `url` — если задано, клиенту следует открыть этот URL без запроса подтверждения.  
    Так делать безопасно и допустимо, потому что здесь бот может вернуть только:
    -   [глубокие ссылки на самого себя »](/api/links/#bot-links)
    -   [глубокие ссылки на действительную игру, которой он владеет »](/api/links/#game-links) — если бот вручную настроил игры и нажатая кнопка была [keyboardButtonGame](/constructor/keyboardButtonGame/).
-   `native_ui` — открывать ли ссылки на игры в WebView или в нативном интерфейсе.
-   `cache_time` — задаёт, как долго клиенту следует кешировать этот ответ

##### Проверка через SRP

Если установлен флаг `requires_password`, дополнительно обязан быть сформирован и приложен к запросу [пакет данных SRP для двухфакторной аутентификации](/api/srp/), подтверждающий личность пользователя.

**Обратите внимание: бот НЕ получит доступ ни к вашему паролю, ни к данным SRP**.

Данные SRP обрабатываются исключительно на серверах Telegram: если проверка не проходит, сервер просто возвращает RPC-ошибку и не передаёт запрос боту.  
Это лишь способ удостоверить личность пользователя; в основном он применяется официальным ботом [@botfather](https://t.me/botfather), чтобы безопасно передавать права владения ботом другому пользователю.

#### Ответ на callback-запрос

```
updateBotCallbackQuery#b9cfc48d flags:# query_id:long user_id:long peer:Peer msg_id:int chat_instance:long data:flags.0?bytes game_short_name:flags.1?string = Update;

updateInlineBotCallbackQuery#691e9052 flags:# query_id:long user_id:long msg_id:InputBotInlineMessageID chat_instance:long data:flags.0?bytes game_short_name:flags.1?string = Update;

updateBusinessBotCallbackQuery#1ea2fda7 flags:# query_id:long user_id:long connection_id:string message:Message reply_to_message:flags.2?Message chat_instance:long data:flags.0?bytes = Update;

---functions---

messages.setBotCallbackAnswer#d58f130a flags:# alert:flags.1?true query_id:long message:flags.0?string url:flags.2?string cache_time:int = Bool;
```

После того как пользователь вызовет [messages.getBotCallbackAnswer](/method/messages.getBotCallbackAnswer/), боту отправляется обновление [updateBotCallbackQuery](/constructor/updateBotCallbackQuery/), [updateInlineBotCallbackQuery](/constructor/updateInlineBotCallbackQuery/) или [updateBusinessBotCallbackQuery](/constructor/updateBusinessBotCallbackQuery/) — в зависимости от того, откуда пришёл запрос: из обычного сообщения, отправленного ботом, из сообщения, порождённого [инлайн-запросом](/api/bots/inline/), или из сообщения, отправленного через [бизнес-подключение](/api/bots/connected-business-bots/).

В любом случае бот обязан ответить на запрос как можно быстрее с помощью [messages.setBotCallbackAnswer](/method/messages.setBotCallbackAnswer/):

-   `query_id` — это `query_id` из [messages.getBotCallbackAnswer](/method/messages.getBotCallbackAnswer/), [updateBotCallbackQuery](/constructor/updateBotCallbackQuery/), [updateInlineBotCallbackQuery](/constructor/updateInlineBotCallbackQuery/) или [updateBusinessBotCallbackQuery](/constructor/updateBusinessBotCallbackQuery/)
-   `message`, `alert`, `url` могут содержать сообщения и URL, вызывающие разное поведение клиента, как [описано выше »](#sending-a-callback-query)
-   `cache_time` указывает максимальное время в секундах, в течение которого результат callback-запроса может кешироваться **клиентом**.

Если в обновлении присутствует `game_short_name`, боту следует вернуть URL игры с указанным именем.  
Метод [messages.setBotCallbackAnswer](/method/messages.setBotCallbackAnswer/) следует вызывать в любом случае — даже если ни `message`, ни `url` не возвращаются, — чтобы у клиента не истекло время ожидания.
