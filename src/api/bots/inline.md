---
title: "Инлайн-запросы"
original: "https://core.telegram.org/api/bots/inline"
section: api
description: "Пользователи могут взаимодействовать с вашим ботом через инлайн-запросы (inline query — запрос к боту, набираемый прямо в строке ввода), не выходя из поля ввода текста в любом…"
layout: layout.njk
---

# Инлайн-запросы

[@term:inline query] Пользователи могут взаимодействовать с вашим ботом через [**инлайн-запросы**](https://core.telegram.org/bots/features#inline-requests) (`inline query` — запрос к боту, который набирают прямо в поле ввода, не открывая чат с самим ботом), прямо из **поля ввода текста** в **любом** чате.  
В этой статье описан полный сценарий работы инлайн-бота через MTProto API.

Упрощённое описание на основе HTTP bot API приведено [здесь »](https://core.telegram.org/bots/features#inline-requests).

### 1\. Отправка инлайн-запроса

```
messages.botResults#e021f2f6 flags:# gallery:flags.0?true query_id:long next_offset:flags.1?string switch_pm:flags.2?InlineBotSwitchPM switch_webview:flags.3?InlineBotWebView results:Vector<BotInlineResult> cache_time:int users:Vector<User> = messages.BotResults;

---functions---

messages.getInlineBotResults#514e999d flags:# bot:InputUser peer:InputPeer geo_point:flags.0?InputGeoPoint query:string offset:string = messages.BotResults;
```

Когда в графическом клиенте пользователь начинает сообщение с `@`, клиенту следует поступать так:

-   По закешированному [рейтингу популярных пиров для инлайн-ботов](/api/top-rating/) показать список часто используемых инлайн-ботов.
-   Если пользователь выбирает бота из списка недавних либо:
-   Дописывает полный `@username` и ставит пробел, и этот `@username` [разрешается](/method/contacts.resolveUsername/) в корректного бота
-   Вызывается [messages.getInlineBotResults](/method/messages.getInlineBotResults/) со следующими параметрами:
    -   `bot` — пир бота
    -   `peer` — чат, в котором пользователь сделал запрос (или [inputPeerEmpty](/constructor/inputPeerEmpty/) для [поиска GIF](/api/gifs/) и других запросов к встроенным ботам, указанным в [конфигурации](/constructor/config/))
    -   `geo_point` — текущее местоположение пользователя, если боту нужны [инлайн-результаты с привязкой к местоположению](https://core.telegram.org/bots/inline#location-based-results) (у такого бота в [конструкторе user](/constructor/user/) выставлен флаг `bot_inline_geo`)
    -   `query` — то, что пользователь набрал после `@username` бота
    -   `offset` — если пользователь прокручивает список дальше первых `len(results)` результатов и при этом задано поле `next_offset`, инлайн-запрос следует повторить с этим смещением.

### 2\. Ответ на инлайн-запрос

```
inputBotInlineMessageMediaAuto#3380c786 flags:# invert_media:flags.3?true message:string entities:flags.1?Vector<MessageEntity> reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;
inputBotInlineMessageText#3dcd7a87 flags:# no_webpage:flags.0?true invert_media:flags.3?true message:string entities:flags.1?Vector<MessageEntity> reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;
inputBotInlineMessageMediaGeo#96929a85 flags:# geo_point:InputGeoPoint heading:flags.0?int period:flags.1?int proximity_notification_radius:flags.3?int reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;
inputBotInlineMessageMediaVenue#417bbf11 flags:# geo_point:InputGeoPoint title:string address:string provider:string venue_id:string venue_type:string reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;
inputBotInlineMessageMediaContact#a6edbffd flags:# phone_number:string first_name:string last_name:string vcard:string reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;
inputBotInlineMessageGame#4b425864 flags:# reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;

inputBotInlineResult#88bf9319 flags:# id:string type:string title:flags.1?string description:flags.2?string url:flags.3?string thumb:flags.4?InputWebDocument content:flags.5?InputWebDocument send_message:InputBotInlineMessage = InputBotInlineResult;
inputBotInlineResultPhoto#a8d864a7 id:string type:string photo:InputPhoto send_message:InputBotInlineMessage = InputBotInlineResult;
inputBotInlineResultDocument#fff8fdc4 flags:# id:string type:string title:flags.1?string description:flags.2?string document:InputDocument send_message:InputBotInlineMessage = InputBotInlineResult;
inputBotInlineResultGame#4fa417f2 id:string short_name:string send_message:InputBotInlineMessage = InputBotInlineResult;

updateBotInlineQuery#496f379c flags:# query_id:long user_id:long query:string geo:flags.0?GeoPoint peer_type:flags.1?InlineQueryPeerType offset:string = Update;

---functions---

messages.setInlineBotResults#bb12a419 flags:# gallery:flags.0?true private:flags.1?true query_id:long results:Vector<InputBotInlineResult> cache_time:int next_offset:flags.2?string switch_pm:flags.3?InlineBotSwitchPM switch_webview:flags.4?InlineBotWebView = Bool;
```

Боты могут отвечать на входящие обновления [updateBotInlineQuery](/constructor/updateBotInlineQuery/) методом [messages.setInlineBotResults](/method/messages.setInlineBotResults/).  
Как и его [аналог в bot API](https://core.telegram.org/bots/api#answerinlinequery), этот метод позволяет отправить пользователю набор инлайн-результатов; см. [страницу конструктора, где подробно описаны параметры метода MTProto »](/method/messages.setInlineBotResults/).

В общем случае метод принимает вектор конструкторов [InputBotInlineResult](/type/InputBotInlineResult/), каждый из которых при [выборе](#3-sending-the-inline-query-result) порождает сообщение — при необходимости с прикреплённым медиа и даже с инлайн-кнопками.

### 2.1. Использование заранее подготовленного инлайн-сообщения

```
inlineQueryPeerTypeSameBotPM#3081ed9d = InlineQueryPeerType;
inlineQueryPeerTypePM#833c0fac = InlineQueryPeerType;
inlineQueryPeerTypeChat#d766c50a = InlineQueryPeerType;
inlineQueryPeerTypeMegagroup#5ec4be43 = InlineQueryPeerType;
inlineQueryPeerTypeBroadcast#6334ee9a = InlineQueryPeerType;
inlineQueryPeerTypeBotPM#0e3b2d0c = InlineQueryPeerType;

messages.botPreparedInlineMessage#8ecf0511 id:string expire_date:int = messages.BotPreparedInlineMessage;

messages.preparedInlineMessage#ff57708d query_id:long result:BotInlineResult peer_types:Vector<InlineQueryPeerType> cache_time:int users:Vector<User> = messages.PreparedInlineMessage;

---functions---

messages.savePreparedInlineMessage#f21f7f2f flags:# result:InputBotInlineResult user_id:InputUser peer_types:flags.0?Vector<InlineQueryPeerType> = messages.BotPreparedInlineMessage;

messages.getPreparedInlineMessage#857ebdb8 bot:InputUser id:string = messages.PreparedInlineMessage;
```

[@term:Mini App] Инлайн-результат может заранее подготовить и [Mini App](/api/bots/webapps/) — веб-приложение, которое открывается прямо внутри клиента Telegram.

1.  Сначала бот, которому принадлежит Mini App, сохраняет подготовленное сообщение через [messages.savePreparedInlineMessage](/method/messages.savePreparedInlineMessage/), указывая само сообщение, ID пользователя, который им воспользуется (то есть того, кто сейчас открыл веб-приложение), и типы пиров, куда это сообщение разрешено отправлять.
2.  Затем ID подготовленного инлайн-сообщения передаётся клиенту пользователя через [веб-событие web\_app\_send\_prepared\_message »](/api/web-events/#web-app-send-prepared-message).
3.  Этот ID вместе с идентификатором бота, которому принадлежит веб-приложение, передаётся в [messages.getPreparedInlineMessage](/method/messages.getPreparedInlineMessage/), чтобы получить подготовленное инлайн-сообщение  
    3.1) Если метод возвращает какую-либо ошибку RPC, следует сгенерировать [событие prepared\_message\_failed](/api/bots/webapps/#prepared-message-failed), записав в `error` текст ошибки RPC, и прервать процесс.  
    3.2) Если метод отработал успешно, пользователю показывается предварительный просмотр и предлагается выбрать чат-получатель.
4.  Если пользователь прерывает процесс, следует сгенерировать [событие prepared\_message\_failed](/api/bots/webapps/#prepared-message-failed) со значением `USER_DECLINED` в поле `error`.
5.  Если пользователь выбрал чат, сообщение отправляется [как описано здесь »](#3-sending-the-inline-query-result).  
    5.1) Если отправка не удалась, следует сгенерировать [событие prepared\_message\_failed](/api/bots/webapps/#prepared-message-failed) со значением `MESSAGE_SEND_FAILED` в поле `error`.  
    5.2) Если отправка прошла успешно, следует сгенерировать [событие prepared\_message\_sent](/api/bots/webapps/#prepared-message-sent).

### 3\. Отправка результата инлайн-запроса

```
botInlineMessageMediaAuto#764cf810 flags:# invert_media:flags.3?true message:string entities:flags.1?Vector<MessageEntity> reply_markup:flags.2?ReplyMarkup = BotInlineMessage;
botInlineMessageText#8c7f65e2 flags:# no_webpage:flags.0?true invert_media:flags.3?true message:string entities:flags.1?Vector<MessageEntity> reply_markup:flags.2?ReplyMarkup = BotInlineMessage;
botInlineMessageMediaGeo#051846fd flags:# geo:GeoPoint heading:flags.0?int period:flags.1?int proximity_notification_radius:flags.3?int reply_markup:flags.2?ReplyMarkup = BotInlineMessage;
botInlineMessageMediaVenue#8a86659c flags:# geo:GeoPoint title:string address:string provider:string venue_id:string venue_type:string reply_markup:flags.2?ReplyMarkup = BotInlineMessage;
botInlineMessageMediaContact#18d1cdc2 flags:# phone_number:string first_name:string last_name:string vcard:string reply_markup:flags.2?ReplyMarkup = BotInlineMessage;

botInlineResult#11965f3a flags:# id:string type:string title:flags.1?string description:flags.2?string url:flags.3?string thumb:flags.4?WebDocument content:flags.5?WebDocument send_message:BotInlineMessage = BotInlineResult;
botInlineMediaResult#17db940b flags:# id:string type:string photo:flags.0?Photo document:flags.1?Document title:flags.2?string description:flags.3?string send_message:BotInlineMessage = BotInlineResult;

messages.botResults#e021f2f6 flags:# gallery:flags.0?true query_id:long next_offset:flags.1?string switch_pm:flags.2?InlineBotSwitchPM switch_webview:flags.3?InlineBotWebView results:Vector<BotInlineResult> cache_time:int users:Vector<User> = messages.BotResults;

---functions---

messages.sendInlineBotResult#c0cf7646 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true hide_via:flags.11?true peer:InputPeer reply_to:flags.0?InputReplyTo random_id:long query_id:long id:string schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut allow_paid_stars:flags.21?long = Updates;
```

Клиенту пользователя следует показывать [messages.botResults](/constructor/messages.botResults/).`results`, полученные [при выполнении запроса](#1-making-an-inline-query), в виде списка, не забывая обрабатывать возможные таймауты бота, которые приходят в виде RPC-ошибки `BOT_RESPONSE_TIMEOUT`, — в этом случае достаточно просто ничего не показывать.

Если заполнен флаг [messages.botResults](/constructor/messages.botResults/).`switch_pm` или [messages.botResults](/constructor/messages.botResults/).`switch_webview`, над списком результатов следует показать кнопку, которая по нажатию не отправляет инлайн-результат в чат, а переключает пользователя в личный чат с ботом (`switch_pm`) или в [Mini App в инлайн-режиме](/api/bots/webapps/#inline-mode-mini-apps) (`switch_webview`).

Если же пользователь выбирает конкретный `BotInlineResult` из обычного списка `results`, следует вызвать метод [messages.sendInlineBotResult](/method/messages.sendInlineBotResult/), передав:

-   `query_id` из `messages.botResults` или `messages.preparedInlineMessage`
-   `id` выбранного результата
-   `peer`, куда следует отправить выбранный результат

В получившемся [сообщении](/constructor/message/) будет заполнено поле `via_bot_id` — оно указывает, что результат сформирован ботом, выдавшим инлайн-результат.  
Графическим клиентам следует показывать `@username` бота в заголовке сообщения и позволять пользователю нажать на него, чтобы автоматически начать инлайн-запрос, подставив `@username` в строку ввода.

### 4\. Обратная связь по инлайн-результатам

```
inputBotInlineMessageID#890c3d89 dc_id:int id:long access_hash:long = InputBotInlineMessageID;

updateBotInlineSend#12f12a07 flags:# user_id:long query:string geo:flags.0?GeoPoint id:string msg_id:flags.1?InputBotInlineMessageID = Update;
```

Если [сбор обратной связи](https://core.telegram.org/bots/inline#collecting-feedback) включён, бот может получить [updateBotInlineSend](/constructor/updateBotInlineSend/), когда пользователь [выбирает и отправляет](#3-sending-the-inline-query-result) инлайн-результат.

Даже если [вероятность выставлена в 100 %](https://core.telegram.org/bots/inline#collecting-feedback), из-за кеширования сообщения приходят не обо всех инлайн-результатах (см. параметр `cache_time` в разделе [Ответ на callback-запрос](/api/bots/buttons/#answering-a-callback-query)).  
[Сбор обратной связи](https://core.telegram.org/bots/inline#collecting-feedback) может также создавать проблемы с нагрузкой у популярных ботов, поэтому в таких случаях вероятность стоит понизить.

В любом случае обратную связь следует использовать только для статистики, а не для работы самой логики бота.

[updateBotInlineSend](/constructor/updateBotInlineSend/) содержит:

-   `id` — идентификатор выбранного результата
-   `msg_id` — идентификатор отправленного инлайн-сообщения
-   `user_id` — идентификатор пользователя, выбравшего результат
-   `query` — строка запроса, по которой был получен результат
-   `geo` — для ботов, которым нужны [инлайн-результаты с привязкой к местоположению](https://core.telegram.org/bots/inline#location-based-results), — местоположение пользователя

### 5\. Редактирование отправленных инлайн-сообщений

```
updateInlineBotCallbackQuery#691e9052 flags:# query_id:long user_id:long msg_id:InputBotInlineMessageID chat_instance:long data:flags.0?bytes game_short_name:flags.1?string = Update;

inputBotInlineMessageID#890c3d89 dc_id:int id:long access_hash:long = InputBotInlineMessageID;

---functions---

messages.editInlineBotMessage#83557dba flags:# no_webpage:flags.1?true invert_media:flags.16?true id:InputBotInlineMessageID message:flags.11?string media:flags.14?InputMedia reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> = Bool;
```

Отправленные инлайн-сообщения бот может редактировать — например, в ответ на [callback-запрос от нажатия кнопки](/constructor/keyboardButtonCallback/).

Достаточно передать [inputBotInlineMessageID](/constructor/inputBotInlineMessageID/), указанный в [updateInlineBotCallbackQuery](/constructor/updateInlineBotCallbackQuery/), в [messages.editInlineBotMessage](/method/messages.editInlineBotMessage/) вместе с новым сообщением, не забыв отправить запрос в [дата-центр](/api/datacenter/), указанный в `inputBotInlineMessageID.dc_id`.
