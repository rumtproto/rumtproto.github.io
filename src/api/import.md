---
title: "Импортированные сообщения"
original: "https://core.telegram.org/api/import"
section: api
description: "Telegram позволяет импортировать сообщения и медиафайлы из сторонних мессенджеров."
layout: layout.njk
---

# Импортированные сообщения

Telegram позволяет импортировать сообщения и медиафайлы из сторонних мессенджеров.

> Примечание: эта статья предназначена для разработчиков, работающих с MTProto API. Если вы ищете способ перенести переписку из других мессенджеров в Telegram, ознакомьтесь с соответствующей [записью в блоге Telegram](https://telegram.org/blog/move-history).

### 1\. Проверка файла экспорта переписки

```
messages.historyImportParsed#5e0fb7b9 flags:# pm:flags.0?true group:flags.1?true title:flags.2?string = messages.HistoryImportParsed;

---functions---

messages.checkHistoryImport#43fe19f3 import_head:string = messages.HistoryImportParsed;
```

Процесс импорта начинается с вызова [messages.checkHistoryImport](/method/messages.checkHistoryImport/): в параметре `import_head` передаётся до 100 строк файла экспорта переписки, считая от начала файла.

Возвращённый конструктор содержит сведения об экспортированном чате, включая его название или тип. Если установлен флаг `pm`, файл экспорта сформирован из личной переписки. Если установлен флаг `group`, файл экспорта сформирован из группового чата. Если не установлен ни флаг `pm`, ни флаг `group`, указанный экспорт сформирован из чата неизвестного типа.

### 2\. Выбор целевого чата в Telegram

```
messages.checkedHistoryImportPeer#a24de717 confirm_text:string = messages.CheckedHistoryImportPeer;

---functions---

messages.checkHistoryImportPeer#5dc60f03 peer:InputPeer = messages.CheckedHistoryImportPeer;
```

[@term:peer] С помощью [messages.checkHistoryImportPeer](/method/messages.checkHistoryImportPeer/) следует проверить, можно ли импортировать историю переписки, выгруженную из другого мессенджера, в выбранный пользователем пир (`peer` — адресат в Telegram: пользователь, группа или канал).  
Как правило, импорт истории разрешён в личные переписки со взаимным контактом и в [супергруппы](/api/channel/), где у вас есть [право администратора `change_info` »](/api/rights/).

Если проверка прошла успешно и RPC-ошибок не вернулось, придёт конструктор [messages.CheckedHistoryImportPeer](/type/messages.CheckedHistoryImportPeer/) с текстом подтверждения, который нужно показать пользователю в диалоге подтверждения.  
После окончательного подтверждения пользователем [начинается инициализация импорта](#3-initialize-the-import).

### 3\. Инициализация импорта

```
messages.historyImport#1662af0b id:long = messages.HistoryImport;

---functions---

messages.initHistoryImport#34090c3b peer:InputPeer file:InputFile media_count:int = messages.HistoryImport;
```

Процесс импорта инициализируется методом [messages.initHistoryImport](/method/messages.initHistoryImport/), которому передаются следующие параметры:

-   `peer` — чат в Telegram, куда следует импортировать историю.
-   `file` — файл экспорта переписки.
-   `media_count` — количество связанных с экспортом медиафайлов, которые будут загружены [на следующем шаге](#4-uploading-media).

### 4\. Загрузка медиафайлов

```
---functions---

messages.uploadImportedMedia#2a862092 peer:InputPeer import_id:long file_name:string media:InputMedia = MessageMedia;
```

Медиафайлы, которые могут быть связаны с экспортом переписки, загружаются методом [messages.uploadImportedMedia](/method/messages.uploadImportedMedia/).  
`import_id` — это значение поля `id` из конструктора [messages.historyImport](/constructor/messages.historyImport/), возвращённого методом [messages.initHistoryImport](/method/messages.initHistoryImport/) [на предыдущем шаге](#3-initialize-the-import).

### 5\. Завершение импорта

```
message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;

messageFwdHeader#4e4df4bb flags:# imported:flags.7?true saved_out:flags.11?true from_id:flags.0?Peer from_name:flags.5?string date:int channel_post:flags.2?int post_author:flags.3?string saved_from_peer:flags.4?Peer saved_from_msg_id:flags.4?int saved_from_id:flags.8?Peer saved_from_name:flags.9?string saved_date:flags.10?int psa_type:flags.6?string = MessageFwdHeader;

---functions---

messages.startHistoryImport#b43df344 peer:InputPeer import_id:long = Bool;
```

Наконец, вызов [messages.startHistoryImport](/method/messages.startHistoryImport/) завершает [процесс импорта истории](/api/import/), перенося все сообщения в чат.  
Как и прежде, `import_id` — это `id` из конструктора [messages.historyImport](/constructor/messages.historyImport/), возвращённого методом [messages.initHistoryImport](/method/messages.initHistoryImport/).

Импортированные сообщения появятся в истории чата как [сообщения](/constructor/message/), у которых поле `fwd_from` содержит конструктор [messageFwdHeader](/constructor/messageFwdHeader/) с флагом `imported`; в интерфейсе их следует соответствующим образом помечать как сообщения, импортированные из стороннего мессенджера.
