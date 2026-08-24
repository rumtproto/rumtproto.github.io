---
title: "contacts.addContact"
original: "https://core.telegram.org/method/contacts.addContact"
section: ref
kind: method
description: "Добавить существующего пользователя Telegram в контакты."
layout: layout.njk
---

# contacts.addContact

Добавить существующего пользователя Telegram в контакты.

Чтобы добавить контакты по номеру телефона, не зная их идентификатора в Telegram, используйте [contacts.importContacts](/method/contacts.importContacts/).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
contacts.addContact#d9ba2e54 flags:# add_phone_privacy_exception:flags.0?true id:InputUser first_name:string last_name:string phone:string note:flags.1?TextWithEntities = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>add_phone_privacy_exception</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Разрешить другому пользователю видеть наш номер телефона?</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Идентификатор другого пользователя в Telegram</td></tr><tr><td><strong>first_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Имя</td></tr><tr><td><strong>last_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Фамилия</td></tr><tr><td><strong>phone</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Номер телефона пользователя; может быть опущен, чтобы просто добавить пользователя в список контактов без номера телефона.</td></tr><tr><td><strong>note</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/TextWithEntities">TextWithEntities</a></td><td>Личная заметка об этом контакте, видимая только нам; подробнее о заметках о контактах см. <a href="/api/contacts#private-notes-for-contacts">здесь »</a>.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>CONTACT_ID_INVALID</td><td>Указанный идентификатор контакта недействителен.</td></tr><tr><td>400</td><td>CONTACT_NAME_EMPTY</td><td>Не указано имя контакта.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr></tbody></table>

### Связанные страницы

#### [Список контактов](/api/contacts/)

Работа с контактами.

#### [contacts.importContacts](/method/contacts.importContacts/)

Импортирует контакты: сохраняет полный список на сервере, добавляет уже зарегистрированных контактов в список контактов, возвращает добавленные контакты и сведения о них.

Используйте [contacts.addContact](/method/contacts.addContact/), чтобы добавлять контакты Telegram, не используя их номер телефона.
