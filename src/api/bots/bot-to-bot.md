---
title: "Взаимодействие между ботами"
original: "https://core.telegram.org/api/bots/bot-to-bot"
section: api
description: "Взаимодействие между ботами позволяет ботам получать сообщения от других ботов в описанных ниже контекстах. За пределами этих контекстов боты, как правило, не получают сообщений…"
layout: layout.njk
---

# Взаимодействие между ботами

Взаимодействие между ботами позволяет боту получать сообщения от других ботов в описанных ниже случаях. За их пределами бот, как правило, сообщений от других ботов не получает.

[@term:Bot-to-Bot Communication Mode] Включите **Bot-to-Bot Communication Mode** (режим общения между ботами — настройка бота, без которой он не участвует в описанном здесь обмене) для каждого бота, который должен пользоваться этой возможностью, в [@BotFather »](https://t.me/BotFather).

Упрощённое описание в терминах Bot API приведено в разделе [Bot-to-Bot Communication »](https://core.telegram.org/bots/features#bot-to-bot-communication).

### Взаимодействие в групповых чатах

```
updateNewMessage#1f2b0afd message:Message pts:int pts_count:int = Update;
updateNewChannelMessage#62ba04d9 message:Message pts:int pts_count:int = Update;
```

Боты, состоящие в одной [группе или супергруппе »](/api/channel/), могут общаться обычными групповыми сообщениями.

Бот получает сообщение от другого бота, если это сообщение:

-   Содержит адресованную ему команду с упоминанием, например `/command@TargetBot`.
-   Прямо отвечает на одно из его сообщений.

Хотя бы у одного из двух ботов Bot-to-Bot Communication Mode должен быть включён.

Бот с включённым Bot-to-Bot Communication Mode может получать сообщения от других ботов в группах и без команды с упоминанием или прямого ответа, если он при этом:

-   администратор группы;
-   отключил Group Privacy Mode в [@BotFather »](https://t.me/BotFather).

[@term:Group Privacy Mode] Group Privacy Mode — это [настройка приватности бота »](https://core.telegram.org/bots/features#privacy-mode), которая оставляет боту из обычных групповых обновлений только сообщения, явно относящиеся к нему.

[@term:pts] Входящие сообщения от ботов доставляются по обычной [схеме обработки обновлений »](/api/updates/): через [updateNewMessage](/constructor/updateNewMessage/) в обычных группах и через [updateNewChannelMessage](/constructor/updateNewChannelMessage/) в супергруппах (счётчик `pts` в этих обновлениях — номер состояния, по которому клиент отслеживает пропуски).

### Взаимодействие в личных чатах

```
---functions---

messages.sendMessage#545cd15a flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
```

[@term:peer] Бот может отправить личное сообщение другому боту с помощью метода [messages.sendMessage](/method/messages.sendMessage/) и других методов отправки сообщений, передав бота-получателя в поле `peer` (пир — адресат сообщения: пользователь, чат или канал).

Bot-to-Bot Communication Mode должен быть включён и у бота-отправителя, и у бота-получателя. Если хотя бы один из них эту настройку не включил, методы вернут ошибку [`USER_BOT_TO_BOT_DISABLED`](/method/messages.sendMessage/#possible-errors).

RPC-ошибка `USER_BOT_TO_BOT_DISABLED` относится только к взаимодействию в личных чатах.

### Взаимодействие через бизнес-аккаунты

```
botBusinessConnection#8f34b2f5 flags:# disabled:flags.1?true connection_id:string user_id:long dc_id:int date:int rights:flags.2?BusinessBotRights = BotBusinessConnection;

updateBotNewBusinessMessage#9ddb347c flags:# connection_id:string message:Message reply_to_message:flags.0?Message qts:int = Update;

---functions---

invokeWithBusinessConnection#dd289f8e {X:Type} connection_id:string query:!X = X;
messages.sendMessage#545cd15a flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
```

[@term:connection_id][@term:Chat Access Mode] Chat Access Mode (режим доступа к чатам) позволяет боту получать и отправлять сообщения в чатах, доступных по конкретному `connection_id` — идентификатору бизнес-подключения, которое связывает бота с аккаунтом, — как описано в разделе о [подключённом боте »](/api/bots/connected-business-bots/). В этом режиме бот может писать другим ботам в таких чатах.

Включить Bot-to-Bot Communication Mode требуется только боту-отправителю.

Получите `connection_id` из конструктора [botBusinessConnection](/constructor/botBusinessConnection/), после чего вызовите [messages.sendMessage](/method/messages.sendMessage/) через [invokeWithBusinessConnection](/method/invokeWithBusinessConnection/). Набор доступных операций по-прежнему зависит от прав [businessBotRights](/constructor/businessBotRights/), выданных для этого подключения.

[@term:qts] Сообщения, полученные через подключение, приходят как обновления [updateBotNewBusinessMessage](/constructor/updateBotNewBusinessMessage/) и нумеруются по [последовательности обновлений »](https://core.telegram.org/api/updates#qts-secret-chats-amp-bots) `qts` — отдельному счётчику состояния для секретных чатов и ботов.

### Защита от зацикливания

Взаимодействие между ботами способно порождать бесконечные циклы ответов. Боты, использующие эту возможность, обязаны построить обработку сообщений от других ботов так, чтобы она предсказуемо завершалась.

Рекомендуемые меры предосторожности:

-   Отсеивайте повторяющиеся сообщения.
-   [@term:rate limit] Применяйте ограничение частоты запросов (`rate limit` — предельное число обращений за единицу времени) отдельно для каждого чата и для каждого бота.
-   Ограничивайте глубину взаимодействия и задавайте тайм-ауты — как общие, так и для каждой пары «отправитель — получатель».

Бот обязан оставаться устойчивым, даже если другой бот отвечает мгновенно и раз за разом.
