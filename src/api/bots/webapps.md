---
title: "Mini Apps в Telegram"
original: "https://core.telegram.org/api/bots/webapps"
section: api
description: "Интерактивные HTML5 Mini Apps в Telegram — встроенные веб-приложения, которые открываются прямо в клиенте, — способны полностью заменить любой сайт."
layout: layout.njk
---

# Mini Apps в Telegram

[@term:Mini App] Интерактивные [HTML5 Mini Apps](https://core.telegram.org/bots/webapps) в Telegram — встроенные веб-приложения, которые открываются прямо в клиенте, — способны полностью заменить **любой сайт**.

Они поддерживают [бесшовную авторизацию](https://telegram.org/blog/privacy-discussions-web-bots#meet-seamless-web-bots), [встроенные платежи](https://core.telegram.org/bots/payments) через различных платёжных провайдеров (с поддержкой _Google Pay_ и _Apple Pay_ из коробки), отправку пользователям персонализированных push-уведомлений и [многое другое](https://core.telegram.org/bots).

Эта статья описывает клиентскую сторону реализации Mini Apps для ботов с помощью MTProto API: [обзор JS API со стороны самого Mini App смотрите здесь »](https://core.telegram.org/bots/webapps).

### Main Mini Apps

Схема:

```
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

webViewResultUrl#4d22ff98 flags:# fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?long url:string = WebViewResult;

botAppSettings#c99b1950 flags:# placeholder_path:flags.0?bytes background_color:flags.1?int background_dark_color:flags.2?int header_color:flags.3?int header_dark_color:flags.4?int = BotAppSettings;
botInfo#4d8a0299 flags:# has_preview_medias:flags.6?true user_id:flags.0?long description:flags.1?string description_photo:flags.4?Photo description_document:flags.5?Document commands:flags.2?Vector<BotCommand> menu_button:flags.3?BotMenuButton privacy_policy_url:flags.7?string app_settings:flags.8?BotAppSettings verifier_settings:flags.9?BotVerifierSettings = BotInfo;

---functions---

messages.requestMainWebView#c9e01e7b flags:# compact:flags.7?true fullscreen:flags.8?true peer:InputPeer bot:InputUser start_param:flags.1?string theme_params:flags.0?DataJSON platform:string = WebViewResult;
```

[@term:Main Mini App] Main Mini App (главное мини-приложение бота — то, которое открывается прямо со страницы его профиля) настраивается через [@botfather](https://t.me/botfather).

После включения у конструктора [user](/constructor/user/) выставляется флаг `bot_has_main_app`, и на странице профиля бота следует показать кнопку «Открыть приложение».

Нажатие на эту кнопку должно открывать Main Mini App: для этого вызывается [messages.requestMainWebView](/method/messages.requestMainWebView/). Передавать методу URL не нужно, поскольку адрес Main Mini App задаётся через [@botfather](https://t.me/botfather).

Приложения могут также задать собственный фон, цвет шапки и SVG-логотип-заглушку для экранов загрузки — их указывают в конструкторе [botAppSettings](/constructor/botAppSettings/), который вложен в конструктор [botInfo](/constructor/botInfo/), возвращаемый в [userFull](/constructor/userFull/).

Вызвав [messages.requestMainWebView](/method/messages.requestMainWebView/) и получив в ответ [webViewResultUrl](/constructor/webViewResultUrl/), клиент должен открыть веб-представление по адресу `url` из полученного [webViewResultUrl](/constructor/webViewResultUrl/).

На странице профиля бота следует также показать список фотографий и видео, демонстрирующих возможности Main Mini App; о том, как их настраивать и отображать, см. [Превью Main Mini App](#main-mini-app-previews).

Main Mini Apps также представлены во встроенном [каталоге Mini App »](/api/search/#apps-tab).

[@term:deep link] Main Mini App должен открываться напрямую и [при нажатии на глубокую ссылку на Main Mini App »](/api/links/#main-mini-app-links) (`deep link` — ссылка вида `t.me/…`, ведущая сразу к нужному объекту внутри Telegram); если параметр `mode` в ссылке задан и равен `compact`/`fullscreen`, у метода обязан быть выставлен соответствующий флаг `compact`/`fullscreen`; любое значение `start_param`, присутствующее в ссылке, тоже обязано передаваться методу.

#### Превью Main Mini App

```
botInfo#4d8a0299 flags:# has_preview_medias:flags.6?true user_id:flags.0?long description:flags.1?string description_photo:flags.4?Photo description_document:flags.5?Document commands:flags.2?Vector<BotCommand> menu_button:flags.3?BotMenuButton privacy_policy_url:flags.7?string app_settings:flags.8?BotAppSettings verifier_settings:flags.9?BotVerifierSettings = BotInfo;

user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

botPreviewMedia#23e91ba3 date:int media:MessageMedia = BotPreviewMedia;
bots.previewInfo#0ca71d64 media:Vector<BotPreviewMedia> lang_codes:Vector<string> = bots.PreviewInfo;

---functions---

bots.getPreviewMedias#a2a5594d bot:InputUser = Vector<BotPreviewMedia>;

messages.uploadMedia#14967978 flags:# business_connection_id:flags.0?string peer:InputPeer media:InputMedia = MessageMedia;

bots.getPreviewInfo#423ab3ad bot:InputUser lang_code:string = bots.PreviewInfo;
bots.addPreviewMedia#17aeb75a bot:InputUser lang_code:string media:InputMedia = BotPreviewMedia;
bots.editPreviewMedia#8525606f bot:InputUser lang_code:string media:InputMedia new_media:InputMedia = BotPreviewMedia;
bots.deletePreviewMedia#2d0135b3 bot:InputUser lang_code:string media:Vector<InputMedia> = Bool;
bots.reorderPreviewMedias#b627f3aa bot:InputUser lang_code:string order:Vector<InputMedia> = Bool;
```

После включения [Main Mini App »](#main-mini-apps) в [@botfather](https://t.me/botfather) боты получают возможность показывать на странице своего профиля **локализованные** превью (фотографии и видео) — примеры того, что умеет приложение.

Если у бота есть превью, будет установлен флаг [botInfo](/constructor/botInfo/).`has_preview_medias` ([botInfo](/constructor/botInfo/) содержится в конструкторе [userFull](/constructor/userFull/) для этого бота).  
Тогда клиентам следует вызвать [bots.getPreviewMedias](/method/bots.getPreviewMedias/), чтобы получить и скачать превью, как только пользователь откроет страницу профиля бота.  
Метод автоматически выберет правильный локализованный вариант каждого превью в соответствии с языковым кодом пользователя (тем, что был передан в [initConnection](/method/initConnection/) при первоначальной настройке клиента).

Владельцы бота могут править превью прямо через API.

Чтобы проверить, может ли текущий пользователь править превью бота, убедитесь, что в конструкторе [user](/constructor/user/) этого бота установлены оба флага — `bot_can_edit` и `bot_has_main_app`.

Далее владельцам бота следует вызвать [bots.getPreviewInfo](/method/bots.getPreviewInfo/), чтобы получить ранее настроенные превью.  
При первом вызове метода передайте в `lang_code` пустую строку: так вы получите ранее настроенные превью по умолчанию (они используются как запасной вариант, если для языка текущего пользователя превью нет) и список `lang_codes`, для которых есть локализованные превью; затем вызовите метод повторно для каждого из возвращённых `lang_codes`, чтобы получить настроенные для них превью.

(Примечание: формально [bots.getPreviewInfo](/method/bots.getPreviewInfo/) могут вызывать и не-владельцы, но тогда он ведёт себя ровно как [bots.getPreviewMedias](/method/bots.getPreviewMedias/) — возвращает только превью для текущего языка и пустой массив `lang_codes`, независимо от переданного `lang_code`, так что, если вы не владелец, используйте, пожалуйста, именно [bots.getPreviewMedias](/method/bots.getPreviewMedias/)).

Затем используйте [bots.addPreviewMedia](/method/bots.addPreviewMedia/), [bots.editPreviewMedia](/method/bots.editPreviewMedia/), [bots.reorderPreviewMedias](/method/bots.reorderPreviewMedias/), [bots.deletePreviewMedia](/method/bots.deletePreviewMedia/), загружая медиафайлы обычным образом через [messages.uploadMedia](/method/messages.uploadMedia/), чтобы настроить запасные и локализованные превью для уже имеющихся и новых языков.

Как сказано выше, у каждого языка может быть свой набор превью, который редактируется и переупорядочивается независимо от остальных. У языка по умолчанию, используемого как запасной, `lang_code` пустой.

На один ключ локализации можно добавить не более [bot\_preview\_medias\_max »](/api/config/#bot-preview-medias-max) превью.

### Mini App с кнопки клавиатуры

Схема:

```
replyKeyboardMarkup#85dd99d1 flags:# resize:flags.0?true single_use:flags.1?true selective:flags.2?true persistent:flags.4?true rows:Vector<KeyboardButtonRow> placeholder:flags.3?string = ReplyMarkup;

keyboardButtonSimpleWebView#e15c4370 flags:# style:flags.10?KeyboardButtonStyle text:string url:string = KeyboardButton;

messageActionWebViewDataSentMe#47dd8079 text:string data:string = MessageAction;
messageActionWebViewDataSent#b4c38cb5 text:string = MessageAction;

webViewResultUrl#4d22ff98 flags:# fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?long url:string = WebViewResult;

---functions---

messages.requestSimpleWebView#413a3e73 flags:# from_switch_webview:flags.1?true from_side_menu:flags.2?true compact:flags.7?true fullscreen:flags.8?true bot:InputUser url:flags.3?string start_param:flags.4?string theme_params:flags.0?DataJSON platform:string = WebViewResult;

messages.sendWebViewData#dc0242c8 bot:InputUser random_id:long button_text:string data:string = Updates;
```

Mini App с кнопки клавиатуры следует открывать, когда пользователь нажимает кнопку [keyboardButtonSimpleWebView](/constructor/keyboardButtonSimpleWebView/) в клавиатуре ответа, заданной конструктором [replyKeyboardMarkup](/constructor/replyKeyboardMarkup/): для этого вызывается [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/), а `url` кнопки передаётся в параметр `url` метода.

[@term:webview] После вызова [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/) и получения результата [webViewResultUrl](/constructor/webViewResultUrl/) клиентам следует открыть webview (встроенное окно браузера внутри клиента) по адресу `url` из возвращённого [webViewResultUrl](/constructor/webViewResultUrl/).

Mini App с кнопки клавиатуры могут отправлять данные обратно боту через MTProto API — с помощью [JS-события `web_app_data_send` »](/api/web-events/#web-app-data-send).

Получив [JS-событие `web_app_data_send` »](/api/web-events/#web-app-data-send) **только** от Mini App с кнопки клавиатуры, клиентам следует вызвать [messages.sendWebViewData](/method/messages.sendWebViewData/), передав следующие аргументы:

-   `bot` — идентификатор бота
-   `random_id` — уникальный случайный идентификатор, чтобы одно и то же событие не отправлялось повторно
-   `button_text` — текст кнопки [keyboardButtonSimpleWebView](/constructor/keyboardButtonSimpleWebView/), нажатие на которую открыло простой Mini App
-   `data` — содержимое поля `data` из JS-события.

Обязательно игнорируйте все события `web_app_data_send` после первого: [messages.sendWebViewData](/method/messages.sendWebViewData/) обязан вызываться ровно один раз. После вызова метода [messages.sendWebViewData](/method/messages.sendWebViewData/) webview необходимо закрыть.

В результате пользователь получит обновление [messageActionWebViewDataSent](/constructor/messageActionWebViewDataSent/), а бот — обновление [messageActionWebViewDataSentMe](/constructor/messageActionWebViewDataSentMe/) с данными события.

### Mini Apps в инлайн-кнопке

Схема:

```
keyboardButtonWebView#e846b1a0 flags:# style:flags.10?KeyboardButtonStyle text:string url:string = KeyboardButton;

webViewResultUrl#4d22ff98 flags:# fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?long url:string = WebViewResult;

inputBotInlineResult#88bf9319 flags:# id:string type:string title:flags.1?string description:flags.2?string url:flags.3?string thumb:flags.4?InputWebDocument content:flags.5?InputWebDocument send_message:InputBotInlineMessage = InputBotInlineResult;
inputBotInlineResultPhoto#a8d864a7 id:string type:string photo:InputPhoto send_message:InputBotInlineMessage = InputBotInlineResult;
inputBotInlineResultDocument#fff8fdc4 flags:# id:string type:string title:flags.1?string description:flags.2?string document:InputDocument send_message:InputBotInlineMessage = InputBotInlineResult;
inputBotInlineResultGame#4fa417f2 id:string short_name:string send_message:InputBotInlineMessage = InputBotInlineResult;

updateWebViewResultSent#1592b79d query_id:long = Update;
webViewMessageSent#0c94511c flags:# msg_id:flags.0?InputBotInlineMessageID = WebViewMessageSent;

---functions---

messages.requestWebView#269dc2c1 flags:# from_bot_menu:flags.4?true silent:flags.5?true compact:flags.7?true fullscreen:flags.8?true peer:InputPeer bot:InputUser url:flags.1?string start_param:flags.3?string theme_params:flags.2?DataJSON platform:string reply_to:flags.0?InputReplyTo send_as:flags.13?InputPeer = WebViewResult;

messages.prolongWebView#b0d81a83 flags:# silent:flags.5?true peer:InputPeer bot:InputUser query_id:long reply_to:flags.0?InputReplyTo send_as:flags.13?InputPeer = Bool;

messages.sendWebViewResultMessage#0a4314f5 bot_query_id:string result:InputBotInlineResult = WebViewMessageSent;
```

Mini Apps в инлайн-кнопке работают примерно так же, как [инлайн-боты »](/api/bots/inline/): они отправляют сообщения от имени пользователя в тот чат, из которого пришёл запрос.

Когда пользователь нажимает инлайн-кнопку [keyboardButtonWebView](/constructor/keyboardButtonWebView/), входящую в инлайн-клавиатуру, которая задана конструктором [replyInlineMarkup](/constructor/replyInlineMarkup/), следует вызвать [messages.requestWebView](/method/messages.requestWebView/), передав в параметр `url` метода значение [keyboardButtonWebView](/constructor/keyboardButtonWebView/).`url`.

Затем клиенту следует открыть webview по адресу `url` из возвращённого [webViewResultUrl](/constructor/webViewResultUrl/).

После загрузки webview и до тех пор, пока оно не будет закрыто [событием web\_app\_close](/api/web-events/#web-app-close), клиент пользователя обязан каждые 60 секунд вызывать [messages.prolongWebView](/method/messages.prolongWebView/): если вызов метода возвращает `QUERY_ID_INVALID`, webview необходимо закрыть.

[@term:query_id] Параметры во фрагменте открываемого URL уже содержат базовые сведения о пользователе и параметр `query_id` — идентификатор открытого сеанса Mini App, от имени которого бот потом отправит сообщение, — который доступен через [JS-библиотеку bot Mini Apps](https://core.telegram.org/bots/webapps): этот `query_id` затем можно передать боту (изнутри самого Mini App — например, AJAX-запросом или отправкой формы на сервер, где размещены Mini App и бот), и уже **бот** использует его для вызова [messages.sendWebViewResultMessage](/method/messages.sendWebViewResultMessage/), передавая конструктор [InputBotInlineResult](/type/InputBotInlineResult/), который автоматически отправит от имени пользователя сообщение — при желании с вложенным медиа и даже с инлайн-кнопками.

### Mini Apps в кнопке меню

Mini Apps в кнопке меню работают примерно так же, как [Mini Apps в инлайн-кнопке »](#inline-button-mini-apps): они отправляют сообщения от имени пользователя в тот чат, в котором была нажата [кнопка меню бота »](/api/bots/menu/).

Mini Apps в кнопке меню можно открыть из [кнопки меню »](/api/bots/menu/) [botMenuButton](/constructor/botMenuButton/): в этом случае следует установить флаг [messages.requestWebView](/method/messages.requestWebView/).`from_bot_menu`, а в параметр `url` метода обязательно передать поле [botMenuButton](/constructor/botMenuButton/).`url`.

Весь дальнейший порядок действий полностью совпадает с порядком для [Mini Apps в инлайн-кнопке »](#inline-button-mini-apps), за исключением других флагов, передаваемых в [messages.requestWebView](/method/messages.requestWebView/), как описано выше.

### Mini Apps в меню вложений

Mini Apps в меню вложений работают примерно так же, как [Mini Apps в инлайн-кнопке »](#inline-button-mini-apps): они отправляют сообщения от имени пользователя в тот чат, в котором было открыто [меню вложений »](/api/bots/attach/) бота.

Mini Apps в меню вложений можно открыть из [пункта меню вложений »](/api/bots/attach/): в этом случае при вызове [messages.requestWebView](/method/messages.requestWebView/) не нужно устанавливать никаких особых флагов.

Mini Apps в меню вложений можно открыть и по [глубокой ссылке на меню вложений бота](/api/links/#bot-attachment-or-side-menu-links); тогда в [messages.requestWebView](/method/messages.requestWebView/).`start_param` следует передать `start_parameter`, если он присутствует, а флаг `compact`/`fullscreen` обязательно установить, если задан параметр `mode` и он равен `compact`/`fullscreen`.

Весь дальнейший порядок действий полностью совпадает с порядком для [Mini Apps в инлайн-кнопке »](#inline-button-mini-apps), за исключением других флагов, передаваемых в [messages.requestWebView](/method/messages.requestWebView/), как описано выше.

### Mini Apps в инлайн-режиме

```
messages.botResults#e021f2f6 flags:# gallery:flags.0?true query_id:long next_offset:flags.1?string switch_pm:flags.2?InlineBotSwitchPM switch_webview:flags.3?InlineBotWebView results:Vector<BotInlineResult> cache_time:int users:Vector<User> = messages.BotResults;

inlineBotWebView#b57295d5 text:string url:string = InlineBotWebView;

webViewResultUrl#4d22ff98 flags:# fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?long url:string = WebViewResult;

---functions---

messages.getInlineBotResults#514e999d flags:# bot:InputUser peer:InputPeer geo_point:flags.0?InputGeoPoint query:string offset:string = messages.BotResults;

messages.requestSimpleWebView#413a3e73 flags:# from_switch_webview:flags.1?true from_side_menu:flags.2?true compact:flags.7?true fullscreen:flags.8?true bot:InputUser url:flags.3?string start_param:flags.4?string theme_params:flags.0?DataJSON platform:string = WebViewResult;
```

Не следует путать с [Mini Apps в инлайн-кнопке »](#inline-button-mini-apps).

[@term:inline query] Mini Apps в инлайн-режиме позволяют сформировать собственный набор инлайн-результатов в ответ на [инлайн-запрос »](/api/bots/inline/) пользователя (`inline query` — запрос к боту по его имени пользователя прямо из поля ввода) с помощью [JS-события `web_app_switch_inline_query` »](/api/web-events/#web-app-switch-inline-query).

Mini Apps в инлайн-режиме можно открыть нажатием на кнопку [inlineBotWebView](/constructor/inlineBotWebView/), которая возвращается в начале списка инлайн-результатов в поле [messages.botResults](/constructor/messages.botResults/).`switch_webview`, полученном от [messages.getInlineBotResults](/method/messages.getInlineBotResults/).

Передайте `url` в [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/), установив при этом флаг `from_switch_webview`.

После вызова [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/) и получения результата [webViewResultUrl](/constructor/webViewResultUrl/) клиент должен открыть webview по адресу `url` из возвращённого [webViewResultUrl](/constructor/webViewResultUrl/).

Как только пользователь завершит выбор в Mini App, должно быть сгенерировано [JS-событие `web_app_switch_inline_query` »](/api/web-events/#web-app-switch-inline-query), содержащее объект JSON со следующими полями:

-   `query` — инлайн-запрос, который будет вставлен в поле ввода чата после имени пользователя бота.  
    Может быть пустой строкой; тогда будет вставлено только имя пользователя бота, что вызовет пустой инлайн-запрос.
-   `chat_types` — массив строк, содержащий сочетание значений `users`, `bots`, `groups`, `channels`.  
    Если массив непустой, клиент должен предложить пользователю выбрать конкретный чат указанного типа (или типов), затем открыть выбранный чат и вставить в поле ввода имя пользователя бота и указанный инлайн-запрос.  
    Значения массива определяют, из чатов каких типов пользователь сможет выбирать.  
    Если массив пуст, используется текущий чат.

Получив от Mini App [JS-событие `web_app_switch_inline_query` »](/api/web-events/#web-app-switch-inline-query), клиент должен [выполнить новый инлайн-запрос »](/api/bots/inline/) к тому же боту с вновь указанным `query` — либо в текущем чате, либо во вновь выбранном чате, как задано полем `chat_types`.

### Mini Apps в боковом меню

```
webViewResultUrl#4d22ff98 flags:# fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?long url:string = WebViewResult;

---functions---

messages.requestSimpleWebView#413a3e73 flags:# from_switch_webview:flags.1?true from_side_menu:flags.2?true compact:flags.7?true fullscreen:flags.8?true bot:InputUser url:flags.3?string start_param:flags.4?string theme_params:flags.0?DataJSON platform:string = WebViewResult;
```

Mini Apps в боковом меню можно открыть нажатием на установленный [пункт бокового меню »](/api/bots/attach/).

Это действие обязано вызывать запрос [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/) с установленным флагом `from_side_menu`: клиенту следует открыть webview по адресу `url` из возвращённого [webViewResultUrl](/constructor/webViewResultUrl/).

После вызова [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/) и получения результата [webViewResultUrl](/constructor/webViewResultUrl/) клиенту следует открыть webview по адресу `url` из возвращённого [webViewResultUrl](/constructor/webViewResultUrl/).

### Mini Apps по прямой ссылке

Схема:

```
inputBotAppID#a920bd7a id:long access_hash:long = InputBotApp;
inputBotAppShortName#908c0407 bot_id:InputUser short_name:string = InputBotApp;

botAppNotModified#5da674b7 = BotApp;
botApp#95fcd1d6 flags:# id:long access_hash:long short_name:string title:string description:string photo:Photo document:flags.0?Document hash:long = BotApp;

messages.botApp#eb50adf5 flags:# inactive:flags.0?true request_write_access:flags.1?true has_settings:flags.2?true app:BotApp = messages.BotApp;

webViewResultUrl#4d22ff98 flags:# fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?long url:string = WebViewResult;

---functions---

messages.getBotApp#34fdc5c3 app:InputBotApp hash:long = messages.BotApp;

messages.requestAppWebView#53618bce flags:# write_allowed:flags.0?true compact:flags.7?true fullscreen:flags.8?true peer:InputPeer app:InputBotApp start_param:flags.1?string theme_params:flags.2?DataJSON platform:string = WebViewResult;
```

Ещё один способ открыть Mini App — воспользоваться [прямыми ссылками на Mini App »](/api/links/#direct-mini-app-links).

[@term:short_name] Эти ссылки отличаются от всех остальных ссылок на Mini App тем, что не требуют от пользователя устанавливать меню вложений, а один бот может предлагать сразу несколько Mini App, которые различаются полем `short_name` — кратким именем приложения.

Такие ссылки следует обрабатывать так:

-   Проверьте, что параметр ссылки `bot_username` действительно принадлежит боту; если это так, то

-   Вызовите [messages.getBotApp](/method/messages.getBotApp/), передав конструктор [inputBotAppShortName](/constructor/inputBotAppShortName/) с полем `short_name`, взятым из параметра строки запроса `appname`. Если клиент уже встречал приложение с таким кратким именем у того же бота, передайте в [messages.getBotApp](/method/messages.getBotApp/) поле `hash` закешированного конструктора [botApp](/constructor/botApp/).

-   Если возвращён конструктор [messages.botApp](/constructor/messages.botApp/), откройте Mini App вызовом [messages.requestAppWebView](/method/messages.requestAppWebView/), сформировав конструктор [inputBotAppID](/constructor/inputBotAppID/) из полей `id` и `access_hash` возвращённого [botApp](/constructor/botApp/) — либо из ранее закешированных сведений, если приложение бота нам уже встречалось и был возвращён [botAppNotModified](/constructor/botAppNotModified/).

    -   Если пользователь нажал на ссылку в чате Telegram, передайте в `peer` сведения о пире этого чата; иначе передайте сведения о пире самого бота.

    -   Если установлен флаг [messages.botApp](/constructor/messages.botApp/).`request_write_access`, значит, бот запрашивает разрешение отправлять пользователю сообщения: **запросите подтверждение у пользователя** — покажите диалог с флажком, и, если пользователь согласится, установите флаг `write_allowed` при вызове [messages.requestAppWebView](/method/messages.requestAppWebView/).

    -   Если установлен флаг [messages.botApp](/constructor/messages.botApp/).`inactive`, **запросите у пользователя подтверждение** перед открытием Mini App; при необходимости в этом же диалоге следует показать флажок для `request_write_access`.  
        Подтверждение необходимо запрашивать **всегда**, даже если флаг `inactive` не установлен, когда ссылка открывается оттуда, где полный её адрес не виден (то есть из текстовых ссылок [messageEntityTextUrl](/constructor/messageEntityTextUrl/), из инлайн-кнопок и тому подобного).

        Не показывайте два диалога подряд, если одновременно требуется подтверждение на открытие Mini App _и_ установлен `request_write_access`: обойдитесь одним диалогом с дополнительным флажком для `request_write_access`.  
        Боты, чьи идентификаторы перечислены в параметре конфигурации [`whitelisted_bots` »](/api/config/#whitelisted-bots), от этого диалога подтверждения освобождаются.

    -   Если присутствует параметр строки запроса `startapp`, передайте его в `start_param` при вызове [messages.requestAppWebView](/method/messages.requestAppWebView/).

Наконец, откройте webview по адресу `url` из возвращённого [webViewResultUrl](/constructor/webViewResultUrl/).

### Исходящие события: от Mini App к клиенту

Mini App может _отправлять_ веб-события, имена которых начинаются с `web_app_`; полный список событий, которые Mini App может _отправить_ клиенту, приведён в [документации по веб-событиям »](/api/web-events/).

### Входящие события: от клиента к Mini App

Mini App может и _принимать_ события — для этого он должен предоставить метод `window.Telegram.WebView.receiveEvent("event_name", params)`.

Ниже — полный список событий, которые Mini App может _получить_ от клиента, если клиент вызовет метод `receiveEvent`.

#### `main_button_pressed`

Параметры: `null`

Отправляется клиентом, когда пользователь нажимает основную кнопку в нижней части webview; обрабатывать это событие следует только в том случае, если основная кнопка была [заранее настроена событием `web_app_setup_main_button` »](/api/web-events/#web-app-setup-main-button).

#### `back_button_pressed`

Параметры: `null`

Отправляется клиентом, когда пользователь нажимает кнопку «Назад» (системную или в интерфейсе), если она была [заранее включена событием `web_app_setup_back_button` »](/api/web-events/#web-app-setup-back-button).

#### `settings_button_pressed`

Параметры: `null`

Отправляется клиентом, когда пользователь нажимает кнопку настроек, если она была [заранее включена событием `web_app_setup_settings_button` »](/api/web-events/#web-app-setup-settings-button).

#### `invoice_closed`

Параметры: JSON-объект со следующими полями:

-   `slug` — идентификатор счёта (строка)
-   `status` — одно из следующих значений (строка):
    -   `cancelled` — пользователь закрыл окно счёта, не заплатив, до вызова [payments.sendPaymentForm](/method/payments.sendPaymentForm/).
    -   `failed` — пользователь попытался заплатить, но платёж не прошёл: вызов [payments.sendPaymentForm](/method/payments.sendPaymentForm/) вернул RPC-ошибку, и окно было закрыто.
    -   `pending` — платёж ещё обрабатывается: бот получит отдельное сервисное сообщение об успешной оплате. Метод [payments.sendPaymentForm](/method/payments.sendPaymentForm/) был успешно вызван и вернул [payments.paymentVerificationNeeded](/constructor/payments.paymentVerificationNeeded/), пользователь заполнил все дополнительные формы проверки, возвращённые методом, и окно счёта было закрыто, но клиент ещё не получил сервисное сообщение [messageActionPaymentSent](/constructor/messageActionPaymentSent/).  
        Учтите, что возможные ошибки не будут отправлены как событие `failed`, если пользователь не прошёл дополнительную проверку (например, 3-D Secure), запрошенную через [payments.paymentVerificationNeeded](/constructor/payments.paymentVerificationNeeded/): состояние останется `pending`.
    -   `paid` — счёт успешно оплачен: клиент завершил [процедуру оплаты »](/api/payments/), окно счёта было закрыто, и клиент получил сервисное сообщение [messageActionPaymentSent](/constructor/messageActionPaymentSent/).

Отправляется клиентом, чтобы сообщить [статус оплаты](/api/payments/) счёта, полученного через [событие `web_app_open_invoice` »](/api/web-events/#web-app-open-invoice).

#### `viewport_changed`

Параметры: JSON-объект со следующими полями:

-   `height` — текущая высота видимой области Mini App (без учёта расположенной снизу [основной кнопки](#main-button-pressed), если она видима) (целое число)
-   `is_state_stable` — если значение истинно, размер области просмотра сейчас меняется (идёт анимация), и могут прийти новые события этого типа. (логическое значение)
-   `is_expanded` — развёрнут ли Mini App на максимальную высоту после того, как пользователь потянул экран вверх или Mini App отправил событие [web\_app\_expand](/api/web-events/#web-app-expand) (логическое значение)

Отправляется при изменении области просмотра.

#### `theme_changed`

Параметры: JSON-объект со следующими полями:

-   `theme_params` — [объект параметров темы »](#theme-parameters) (объект)

Отправляется по запросу Mini App через [событие `web_app_request_theme` »](/api/web-events/#web-app-request-theme) либо при смене темы оформления приложения.

##### Параметры темы

Mini App ботов можно оформлять в соответствии с приведёнными ниже параметрами темы, которые передаются в виде JSON-объекта в параметре `theme_params` методов [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/), [messages.requestWebView](/method/messages.requestWebView/) и [messages.requestAppWebView](/method/messages.requestAppWebView/).

Этот JSON-объект содержит перечисленные ниже ключи с информацией о цветовой схеме (шестнадцатеричная строка, RGB, без альфа-канала), которая передаётся в Mini App.

Подробнее о содержимом объекта см. [здесь »](https://core.telegram.org/bots/webapps#themeparams).

#### `popup_closed`

Параметры: JSON-объект с необязательным строковым полем `button_id`.

Отправляется, когда пользователь нажимает кнопку или закрывает всплывающее окно, вызванное предшествующим [событием `web_app_open_popup` »](/api/web-events/#web-app-open-popup).

#### `write_access_requested`

Параметры: JSON-объект со следующими полями:

-   `status` — `allowed` или `cancelled`

Используется клиентами для ответа на [событие `web_app_request_write_access` »](/api/web-events/#web-app-request-write-access) и показывает, разрешил ли пользователь боту отправлять себе сообщения (`allowed`) или нет (`cancelled`).

#### `phone_requested`

Параметры: JSON-объект со следующими полями:

-   `status` — `sent` или `cancelled`

Используется клиентами для ответа на [событие `web_app_request_phone` »](/api/web-events/#web-app-request-phone) и показывает, поделился ли пользователь своим номером телефона с ботом (`allowed`) или нет (`cancelled`).

[@note] Оригинал здесь противоречив: в описании поля указаны значения `sent` и `cancelled`, а в тексте — `allowed`. Фактическое значение при успехе — `sent`.

#### `biometry_info_received`

Параметры: JSON-объект со следующими полями:

-   `available` — логическое значение; если истинно, значит, на текущем устройстве доступна биометрическая аутентификация.
-   `type` — необязательная строка, задаётся, если `available` истинно; содержит тип биометрической аутентификации, одно из значений:
    -   `finger` — биометрия по отпечатку пальца
    -   `face` — биометрия по лицу
    -   `unknown` — биометрия неизвестного типа
-   `access_requested` — логическое значение; показывает, запрашивало ли уже приложение разрешение на использование биометрии через [событие `web_app_biometry_request_access` »](/api/web-events/#web-app-biometry-request-access)
-   `access_granted` — логическое значение; показывает, выдал ли пользователь приложению разрешение на использование биометрии в ответ на [событие `web_app_biometry_request_access` »](/api/web-events/#web-app-biometry-request-access).  
    Если значение ложно, а `access_requested` истинно, значит, пользователь отказал приложению в доступе к биометрии; в этом случае приложению следует показать сообщение о том, что для работы биометрии нужно изменить её настройки, и, если пользователь нажмёт кнопку подтверждения в приложении, отправить [событие web\_app\_biometry\_open\_settings »](/api/web-events/#web-app-biometry-open-settings).
-   `token_saved` — логическое значение; был ли токен надёжно сохранён на устройстве предшествующим [событием web\_app\_biometry\_update\_token »](/api/web-events/#web-app-biometry-update-token).
-   `device_id` — строка, уникальный идентификатор устройства, по которому можно сопоставить токен с устройством.

Используется клиентами для ответа на [событие `web_app_biometry_get_info` »](/api/web-events/#web-app-biometry-get-info) или [событие `web_app_biometry_request_access` »](/api/web-events/#web-app-biometry-request-access).

#### `biometry_token_updated`

Параметры: JSON-объект со следующими полями:

-   `status` — строка, одно из значений:
    -   `updated` — если токен был успешно обновлён.
    -   `removed` — если токен был успешно удалён.
    -   `failed` — если биометрическая аутентификация не удалась или у приложения нет разрешения на использование биометрии (при этом будет также отправлено [событие biometry\_info\_received »](#biometry-info-received), если приложение ещё не инициализировало состояние с помощью [события `web_app_biometry_get_info` »](/api/web-events/#web-app-biometry-get-info) или [события `web_app_biometry_request_access` »](/api/web-events/#web-app-biometry-request-access)).

Используется клиентами для ответа на [событие `web_app_biometry_update_token` »](/api/web-events/#web-app-biometry-update-token).

#### `biometry_auth_requested`

Параметры: JSON-объект со следующими полями:

-   `status` — строка, либо `authorized`, либо `failed`.  
    При значении `failed` будет также отправлено [событие biometry\_info\_received »](#biometry-info-received), если приложение ещё не инициализировало состояние с помощью [события `web_app_biometry_get_info` »](/api/web-events/#web-app-biometry-get-info) или [события `web_app_biometry_request_access` »](/api/web-events/#web-app-biometry-request-access).
-   `token` — необязательная строка, задаётся, если `status` равен `authorized`; содержит токен, ранее сохранённый через [событие `web_app_biometry_update_token` »](/api/web-events/#web-app-biometry-update-token).

Используется клиентами для ответа на [запрос биометрической аутентификации `web_app_biometry_request_auth` »](/api/web-events/#web-app-biometry-request-auth).

#### `custom_method_invoked`

Параметры: JSON-объект со следующими полями:

-   `req_id` — значение `req_id` из запроса `web_app_invoke_custom_method`
-   `result` — данные JSON, содержащиеся в ответе метода [bots.invokeWebViewCustomMethod](/method/bots.invokeWebViewCustomMethod/), если вызов метода прошёл успешно
-   `error` — текст ошибки RPC, если вызов метода завершился неудачей

Используется клиентами для ответа на [события `web_app_invoke_custom_method` »](/api/web-events/#web-app-invoke-custom-method).

#### `clipboard_text_received`

Параметры: JSON-объект со следующими полями:

-   `req_id` — значение `req_id` из запроса `web_app_read_text_from_clipboard`
-   `data` — строка с содержимым буфера обмена (необязательное поле; если оно не передано, запрос следует считать неудачным)

Используется клиентами для ответа на [события `web_app_read_text_from_clipboard` »](/api/web-events/#web-app-read-text-from-clipboard).

#### `qr_text_received`

Параметры: JSON-объект со следующими полями:

-   `data` — строка с содержимым отсканированного QR-кода.

Отправляется клиентами, если встроенный сканер QR-кодов, открытый [событием `web_app_open_scan_qr_popup` »](/api/web-events/#web-app-open-scan-qr-popup), считал новый QR-код.

#### `scan_qr_popup_closed`

Параметры: `null` или пустой объект

Отправляется клиентами, если окно сканера QR-кодов, открытое [событием `web_app_open_scan_qr_popup` »](/api/web-events/#web-app-open-scan-qr-popup), было закрыто пользователем или вообще не открылось из-за проблем с разрешениями.

#### `visibility_changed`

Параметры: JSON-объект с единственным логическим полем `is_visible=true|false`.

Отправляется, когда Mini App становится активным (`true`) или неактивным (`false`) — например, при разворачивании из свёрнутого состояния или сворачивании, при переключении между вкладками.

#### `secondary_button_pressed`

Параметры: `null`

Отправляется клиентом, когда пользователь нажимает вторичную кнопку, расположенную внизу webview; обрабатывать это событие следует только в том случае, если вторичная кнопка была [заранее настроена событием `web_app_setup_secondary_button` »](/api/web-events/#web-app-setup-secondary-button).

#### `fullscreen_changed`

Параметры: JSON-объект со следующими полями:

-   `is_fullscreen` — логическое значение, указывающее, находится ли Mini App в полноэкранном режиме в данный момент.
-   `blur_enabled` — необязательное логическое значение, присутствует при `is_fullscreen=true`; указывает, размывается ли фоновое содержимое в полноэкранном режиме.

Отправляется клиентом в ответ на события [web\_app\_request\_fullscreen](/api/web-events/#web-app-request-fullscreen) и [web\_app\_exit\_fullscreen](/api/web-events/#web-app-exit-fullscreen).

#### `fullscreen_failed`

Параметры: JSON-объект со следующими полями:

-   `error` — строка с указанием ошибки, одно из значений:
    -   `UNSUPPORTED` — полноэкранный режим не поддерживается на этом устройстве или платформе
    -   `ALREADY_FULLSCREEN` — Mini App уже находится в полноэкранном режиме

Отправляется клиентом, если при обработке событий [web\_app\_request\_fullscreen](/api/web-events/#web-app-request-fullscreen) и [web\_app\_exit\_fullscreen](/api/web-events/#web-app-exit-fullscreen) произошёл сбой.

#### `accelerometer_started`

Параметры: `null`

Отправляется клиентом в ответ на [событие web\_app\_start\_accelerometer »](/api/web-events/#web-app-start-accelerometer), если отслеживание акселерометра успешно запущено.

Пока Mini App не отправит [web\_app\_stop\_accelerometer](/api/web-events/#web-app-stop-accelerometer), клиент будет также отправлять [события accelerometer\_changed](#accelerometer-changed) с показаниями акселерометра — не чаще, чем раз в `refresh_rate` миллисекунд.

#### `accelerometer_failed`

Параметры: JSON-объект со следующими полями:

-   `error` — строка, одно из значений:
    -   `UNSUPPORTED` — отслеживание акселерометра не поддерживается на этом устройстве или платформе.

Отправляется клиентом в ответ на [событие web\_app\_start\_accelerometer »](/api/web-events/#web-app-start-accelerometer), если отслеживание акселерометра запустить не удалось.

#### `accelerometer_stopped`

Параметры: `null`

Отправляется клиентом в ответ на [событие web\_app\_stop\_accelerometer »](/api/web-events/#web-app-stop-accelerometer), если отслеживание акселерометра успешно остановлено.

#### `accelerometer_changed`

Параметры: JSON-объект с полями `x`, `y` и `z` типа `float`, содержащими текущее ускорение по осям X, Y и Z в м/с².

Отправляется клиентом периодически, не чаще чем раз в `refresh_rate` миллисекунд, после вызова [web\_app\_start\_accelerometer »](/api/web-events/#web-app-start-accelerometer) и до вызова [web\_app\_stop\_accelerometer](/api/web-events/#web-app-stop-accelerometer).

#### `gyroscope_started`

Параметры: `null`

Отправляется клиентом в ответ на [событие web\_app\_start\_gyroscope »](/api/web-events/#web-app-start-gyroscope), если отслеживание гироскопа успешно запущено.

Пока Mini App не отправит [web\_app\_stop\_gyroscope](/api/web-events/#web-app-stop-gyroscope), клиент будет также отправлять [события gyroscope\_changed](#gyroscope-changed) с показаниями гироскопа — не чаще, чем раз в `refresh_rate` миллисекунд.

#### `gyroscope_failed`

Параметры: JSON-объект со следующими полями:

-   `error` — строка, одно из значений:
    -   `UNSUPPORTED` — отслеживание гироскопа не поддерживается на этом устройстве или платформе.

Отправляется клиентом в ответ на [событие web\_app\_start\_gyroscope »](/api/web-events/#web-app-start-gyroscope), если отслеживание гироскопа запустить не удалось.

#### `gyroscope_stopped`

Параметры: `null`

Отправляется клиентом в ответ на [событие web\_app\_stop\_gyroscope »](/api/web-events/#web-app-stop-gyroscope), если отслеживание гироскопа успешно остановлено.

#### `gyroscope_changed`

Параметры: JSON-объект с полями `x`, `y` и `z` типа `float`, содержащими текущую угловую скорость вращения вокруг осей X, Y и Z в рад/с.

Отправляется клиентом периодически, не чаще чем раз в `refresh_rate` миллисекунд, после вызова [web\_app\_start\_gyroscope »](/api/web-events/#web-app-start-gyroscope) и до вызова [web\_app\_stop\_gyroscope](/api/web-events/#web-app-stop-gyroscope).

#### `device_orientation_started`

Параметры: `null`

Отправляется клиентом в ответ на [событие web\_app\_start\_device\_orientation »](/api/web-events/#web-app-start-device-orientation), если отслеживание ориентации устройства успешно запущено.

Пока Mini App не отправит [web\_app\_stop\_device\_orientation](/api/web-events/#web-app-stop-device-orientation), клиент будет также отправлять [события device\_orientation](#device-orientation-changed) с показаниями ориентации устройства — не чаще, чем раз в `refresh_rate` миллисекунд.

#### `device_orientation_failed`

Параметры: JSON-объект со следующими полями:

-   `error` — строка, одно из значений:
    -   `UNSUPPORTED` — отслеживание ориентации устройства не поддерживается на этом устройстве или платформе.

Отправляется клиентом в ответ на [событие web\_app\_start\_device\_orientation »](/api/web-events/#web-app-start-device-orientation), если отслеживание ориентации устройства запустить не удалось.

#### `device_orientation_stopped`

Параметры: `null`

Отправляется клиентом в ответ на [событие web\_app\_stop\_device\_orientation »](/api/web-events/#web-app-stop-device-orientation), если отслеживание ориентации устройства успешно остановлено.

#### `device_orientation_changed`

Параметры: JSON-объект со следующими полями:

-   `alpha` — поворот вокруг оси Z в радианах.
-   `beta` — поворот вокруг оси X в радианах.
-   `gamma` — поворот вокруг оси Y в радианах.
-   `absolute` — логическое значение, указывающее, передаёт ли устройство данные об ориентации в абсолютных величинах (может быть равно false даже при запросе абсолютных данных — но только в том случае, если устройство или платформа не поддерживает отслеживание абсолютной ориентации).

Отправляется клиентом периодически, не чаще чем раз в `refresh_rate` миллисекунд, после вызова [web\_app\_start\_device\_orientation »](/api/web-events/#web-app-start-device-orientation) и до вызова [web\_app\_stop\_device\_orientation](/api/web-events/#web-app-stop-device-orientation).

#### `home_screen_added`

Параметры: `null`

Отправляется клиентом в ответ на [событие web\_app\_add\_to\_home\_screen »](/api/web-events/#web-app-add-to-home-screen), если значок был (уже) успешно добавлен.

Допускается не отправлять это событие, если на текущей платформе нет способа определить, установлен ли значок.

#### `home_screen_failed`

Параметры: JSON-объект со следующими полями:

-   `error` — строка, одно из значений:
    -   `UNSUPPORTED` — значки не поддерживаются на этой платформе, либо установка значка не удалась, либо о её состоянии невозможно сообщить.

Отправляется клиентом в ответ на [событие web\_app\_add\_to\_home\_screen »](/api/web-events/#web-app-add-to-home-screen), если значок добавить не удалось.

Допускается не отправлять это событие, если на текущей платформе нет способа определить, установлен ли значок.

#### `home_screen_checked`

Параметры: JSON-объект со следующими полями:

-   `status` — строка, одно из значений:
    -   `unsupported` — возможность не поддерживается, добавить значок на домашний экран нельзя,
    -   `unknown` — возможность поддерживается и значок можно добавить, но определить, добавлен ли он уже, невозможно,
    -   `added` — значок уже добавлен на домашний экран,
    -   `missed` — значок на домашний экран не добавлен.

**Всегда** отправляется клиентом в ответ на [событие web\_app\_check\_home\_screen »](/api/web-events/#web-app-check-home-screen).

#### `emoji_status_failed`

Параметры: JSON-объект со следующими полями:

-   `error` — строка, одно из значений:
    -   `UNSUPPORTED` — возможность не поддерживается клиентом.
    -   `SUGGESTED_EMOJI_INVALID` — один или несколько идентификаторов эмодзи некорректны.
    -   `DURATION_INVALID` — указана некорректная длительность.
    -   `USER_DECLINED` — пользователь закрыл диалог, не установив статус.
    -   `SERVER_ERROR` — при попытке установить статус произошла ошибка на сервере.
    -   `UNKNOWN_ERROR` — произошла неизвестная ошибка.

Отправляется клиентом в ответ на [событие web\_app\_set\_emoji\_status »](/api/web-events/#web-app-set-emoji-status), если эмодзи-статус установить не удалось.

#### `emoji_status_set`

Параметры: `null`

Отправляется клиентом в ответ на [событие web\_app\_set\_emoji\_status »](/api/web-events/#web-app-set-emoji-status), если эмодзи-статус успешно установлен.

#### `emoji_status_access_requested`

Параметры: JSON-объект со следующими полями:

-   `status` — строка, одно из значений:
    -   `allowed` — пользователь (уже) выдал боту разрешение менять свой эмодзи-статус
    -   `cancelled` — пользователь отклонил запрос либо произошла ошибка.

Отправляется клиентом в ответ на [событие web\_app\_request\_emoji\_status\_access »](/api/web-events/#web-app-request-emoji-status-access).

#### `file_download_requested`

Параметры: JSON-объект со следующими полями:

-   `status` — либо `cancelled` (загрузка прервана пользователем или не разрешена API), либо `downloading` (загрузка успешно началась).

Отправляется клиентами в ходе сценария скачивания файла в [Mini App](/api/bots/webapps/), который начинается с события [web\_app\_request\_file\_download »](/api/web-events/#web-app-request-file-download).

#### `prepared_message_failed`

Параметры: JSON-объект со следующими полями:

-   `error` — содержит текст ошибки RPC, возвращённой методом [messages.getPreparedInlineMessage](/method/messages.getPreparedInlineMessage/), либо `USER_DECLINED`, если пользователь прервал процесс отправки, либо `MESSAGE_SEND_FAILED`, если отправка не удалась по иной причине.

Отправляется клиентами при ошибках в ходе [сценария отправки заранее подготовленных сообщений](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message), инициированного событием [web\_app\_send\_prepared\_message »](/api/web-events/#web-app-send-prepared-message).

#### `prepared_message_sent`

Параметры: `null`

Отправляется клиентами, когда [сценарий отправки заранее подготовленных сообщений](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message), инициированный событием [web\_app\_send\_prepared\_message »](/api/web-events/#web-app-send-prepared-message), успешно завершается.

#### `safe_area_changed`

Параметры: JSON-объект со следующими полями:

-   `top` — верхний отступ в пикселях, обозначающий область в верхней части экрана, которую следует не занимать (целое число).
-   `bottom` — нижний отступ в пикселях, обозначающий область в нижней части экрана, которую следует не занимать (целое число).
-   `left` — левый отступ в пикселях, обозначающий область у левого края экрана, которую следует не занимать (целое число).
-   `right` — правый отступ в пикселях, обозначающий область у левого края экрана, которую следует не занимать (целое число).

[@term:safe area] Отправляется клиентами при изменении любого из системных отступов безопасной области (`safe area` — часть экрана, не перекрытая элементами системного интерфейса), а также по явному запросу Mini App с помощью [web\_app\_request\_safe\_area](/api/web-events/#web-app-request-safe-area).

[@note] В оригинале описания полей `right` (здесь и в событии `content_safe_area_changed`) сказано «у левого края» — это опечатка исходной документации, сохранённая в переводе: `right` задаёт отступ у правого края.

Подробнее см. [здесь »](https://core.telegram.org/bots/webapps#safeareainset).

#### `content_safe_area_changed`

Параметры: JSON-объект со следующими полями:

-   `top` — верхний отступ в пикселях, обозначающий область в верхней части области содержимого, которую следует не занимать (целое число).
-   `bottom` — нижний отступ в пикселях, обозначающий область в нижней части области содержимого, которую следует не занимать (целое число).
-   `left` — левый отступ в пикселях, обозначающий область у левого края области содержимого, которую следует не занимать (целое число).
-   `right` — правый отступ в пикселях, обозначающий область у левого края области содержимого, которую следует не занимать (целое число).

Отправляется клиентами при изменении любого из отступов безопасной области, определяемых содержимым, а также по явному запросу Mini App с помощью [web\_app\_request\_content\_safe\_area](/api/web-events/#web-app-request-content-safe-area).

Подробнее см. [здесь »](https://core.telegram.org/bots/webapps#contentsafeareainset).

#### `location_requested`

Параметры: JSON-объект со следующими полями:

-   `available` — логическое значение, указывает, доступны ли данные о местоположении; если false, остальные поля устанавливать нельзя.
-   `latitude` — число с плавающей точкой, содержит широту в градусах.
-   `longitude` — число с плавающей точкой, содержит долготу в градусах.
-   `altitude` — число с плавающей точкой или null, содержит высоту над уровнем моря в метрах; обязано быть null, если устройство или платформа этого не поддерживают.
-   `course` — число с плавающей точкой или null, содержит направление движения устройства в градусах; обязано быть null, если устройство или платформа этого не поддерживают.
-   `speed` — число с плавающей точкой или null, содержит скорость устройства в м/с; обязано быть null, если устройство или платформа этого не поддерживают.
-   `horizontal_accuracy` — число с плавающей точкой или null, содержит точность значений широты и долготы в метрах; обязано быть null, если устройство или платформа этого не поддерживают.
-   `vertical_accuracy` — число с плавающей точкой или null, содержит точность значения высоты в метрах; обязано быть null, если устройство или платформа этого не поддерживают.
-   `course_accuracy` — число с плавающей точкой или null, содержит точность значения направления движения в градусах; обязано быть null, если устройство или платформа этого не поддерживают.
-   `speed_accuracy` — число с плавающей точкой или null, содержит точность значения скорости в м/с; обязано быть null, если устройство или платформа этого не поддерживают.

Отправляется в ответ на [событие web\_app\_request\_location](/api/web-events/#web-app-request-location).

#### `location_checked`

Параметры: JSON-объект со следующими полями:

-   `available` — логическое значение, указывает, доступны ли данные о местоположении на текущей платформе или устройстве.
-   `access_requested` — необязательное логическое значение, обязано быть указано, если `available` равно true; сообщает, запрашивало ли Mini App доступ к данным о местоположении.
-   `access_granted` — необязательное логическое значение; если указано и равно `true`, значит пользователь предоставил Mini App доступ к данным о местоположении.

Отправляется в ответ на [событие web\_app\_check\_location](/api/web-events/#web-app-check-location).

#### `device_storage_key_saved`

Параметры: JSON-объект со следующими полями:

-   `req_id` — строка, значение `req_id` из запросившего [события web\_app\_device\_storage\_save\_key](/api/web-events/#web-app-device-storage-save-key)

Означает, что ключ успешно сохранён или удалён.

Отправляется в ответ на [событие web\_app\_device\_storage\_save\_key](/api/web-events/#web-app-device-storage-save-key).

#### `device_storage_key_received`

Параметры: JSON-объект со следующими полями:

-   `req_id` — строка, значение `req_id` из запросившего [события web\_app\_device\_storage\_get\_key](/api/web-events/#web-app-device-storage-get-key)
-   `value` — строка или null: запрошенное значение либо отсутствие значения, если указанный ключ не задан.

Возвращает запрошенный ключ.

Отправляется в ответ на [событие web\_app\_device\_storage\_get\_key](/api/web-events/#web-app-device-storage-get-key).

#### `device_storage_cleared`

Параметры: JSON-объект со следующими полями:

-   `req_id` — строка, значение `req_id` из запросившего [события web\_app\_device\_storage\_clear](/api/web-events/#web-app-device-storage-clear)

Означает, что хранилище очищено.

Отправляется в ответ на [событие web\_app\_device\_storage\_clear](/api/web-events/#web-app-device-storage-clear).

#### `device_storage_failed`

Параметры: JSON-объект со следующими полями:

-   `req_id` — строка, значение `req_id` из запросившего события
-   `error` — строка, ошибка, из-за которой запрос не был выполнен успешно.

Отправляется в ответ на событие [web\_app\_device\_storage\_save\_key](/api/web-events/#web-app-device-storage-save-key), [web\_app\_device\_storage\_get\_key](/api/web-events/#web-app-device-storage-get-key) или [web\_app\_device\_storage\_clear](/api/web-events/#web-app-device-storage-clear).

#### `secure_storage_key_saved`

Параметры: JSON-объект со следующими полями:

-   `req_id` — строка, значение `req_id` из запросившего [события web\_app\_secure\_storage\_save\_key](/api/web-events/#web-app-secure-storage-save-key)

Означает, что ключ успешно сохранён или удалён.

Отправляется в ответ на [событие web\_app\_secure\_storage\_save\_key](/api/web-events/#web-app-secure-storage-save-key).

#### `secure_storage_key_received`

Параметры: JSON-объект со следующими полями:

-   `req_id` — строка, значение `req_id` из запросившего [события web\_app\_secure\_storage\_get\_key](/api/web-events/#web-app-secure-storage-get-key)
-   `value` — строка или null: запрошенное значение либо отсутствие значения, если указанный ключ не задан.
-   `can_restore` — логическое значение, равно true, если `value` равно null, но значение можно восстановить с помощью [события web\_app\_secure\_storage\_restore\_key](/api/web-events/#web-app-secure-storage-restore-key)

Возвращает запрошенный ключ.

Отправляется в ответ на [событие web\_app\_secure\_storage\_get\_key](/api/web-events/#web-app-secure-storage-get-key).

#### `secure_storage_key_restored`

Параметры: JSON-объект со следующими полями:

-   `req_id` — строка, значение `req_id` из запросившего [события web\_app\_secure\_storage\_restore\_key](/api/web-events/#web-app-secure-storage-restore-key)
-   `value` — строка, восстановленное значение

Восстанавливает запрошенный ключ.

Отправляется в ответ на [событие web\_app\_secure\_storage\_restore\_key](/api/web-events/#web-app-secure-storage-restore-key).

#### `secure_storage_cleared`

Параметры: JSON-объект со следующими полями:

-   `req_id` — строка, значение `req_id` из запросившего [события web\_app\_secure\_storage\_clear](/api/web-events/#web-app-secure-storage-clear)

Означает, что хранилище очищено.

Отправляется в ответ на [событие web\_app\_secure\_storage\_clear](/api/web-events/#web-app-secure-storage-clear).

#### `secure_storage_failed`

Параметры: JSON-объект со следующими полями:

-   `req_id` — строка, значение `req_id` из запросившего события
-   `error` — строка, ошибка, из-за которой запрос не был выполнен успешно; в первую очередь `UNSUPPORTED` для платформ, не поддерживающих защищённое хранилище.

Отправляется в ответ на событие [web\_app\_secure\_storage\_save\_key](/api/web-events/#web-app-secure-storage-save-key), [web\_app\_secure\_storage\_get\_key](/api/web-events/#web-app-secure-storage-get-key), [web\_app\_secure\_storage\_restore\_key](/api/web-events/#web-app-secure-storage-restore-key) или [web\_app\_secure\_storage\_clear](/api/web-events/#web-app-secure-storage-clear).

#### `oauth_supported`

Параметры: JSON-объект со следующими полями:

-   `version` — целое число, в настоящее время обязано быть равно `1`

[@term:OAuth] Означает, что текущий клиент поддерживает [вход через OAuth »](/api/url-authorization/#oauth-authorization-for-mini-apps) (OAuth — открытый протокол делегированной авторизации, позволяющий войти на сторонний сервис под учётной записью Telegram).

Отправляется безусловно в ответ на все [события oauth\_request »](/api/web-events/#oauth-request).

#### `oauth_result_confirmed`

Параметры: JSON-объект со следующими полями:

-   `result_url` — строка или null, содержит итоговый URL перенаправления

Отправляется в ответ на непустое и корректное [событие oauth\_request »](/api/web-events/#oauth-request), если [процедура входа через OAuth »](/api/url-authorization/#oauth-authorization-for-mini-apps) завершилась успешно.

#### `oauth_result_failed`

Параметры: null или пустой JSON-объект.

Отправляется в ответ на непустое и корректное [событие oauth\_request »](/api/web-events/#oauth-request), если [процедура входа через OAuth »](/api/url-authorization/#oauth-authorization-for-mini-apps) завершилась неудачей либо была явно отменена пользователем.

#### `requested_chat_sent`

Параметры: JSON-объект со следующими полями:

-   `req_id` — строка, значение `req_id` из запросившего [события web\_app\_request\_chat](/api/web-events/#web-app-request-chat)

Означает, что запрошенные пиры были отправлены боту методом [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/).

Отправляется в ответ на [событие web\_app\_request\_chat](/api/web-events/#web-app-request-chat); полное описание процедуры см. [здесь »](/api/bots/buttons/#requesting-peers-via-mini-apps).

#### `requested_chat_failed`

Параметры: JSON-объект со следующими полями:

-   `req_id` — строка, значение `req_id` из запросившего [события web\_app\_request\_chat](/api/web-events/#web-app-request-chat)
-   `error` — необязательная строка, ошибка, из-за которой запрос не был выполнен успешно.

Означает, что [запрос пиров](/api/bots/buttons/#requesting-peers-via-mini-apps) был отменён или завершился неудачей.

Отправляется в ответ на [событие web\_app\_request\_chat](/api/web-events/#web-app-request-chat); полное описание процедуры см. [здесь »](/api/bots/buttons/#requesting-peers-via-mini-apps).
