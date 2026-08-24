---
title: "decryptedMessage"
original: "https://core.telegram.org/constructor/decryptedMessage"
section: ref
kind: constructor
description: "Содержимое зашифрованного сообщения."
layout: layout.njk
---

# decryptedMessage

Содержимое зашифрованного сообщения.

```
===8===
decryptedMessage#1f814f1f random_id:long random_bytes:bytes message:string media:DecryptedMessageMedia = DecryptedMessage;

===17===
decryptedMessage#204d3878 random_id:long ttl:int message:string media:DecryptedMessageMedia = DecryptedMessage;

===45===
decryptedMessage#36b091de flags:# random_id:long ttl:int message:string media:flags.9?DecryptedMessageMedia entities:flags.7?Vector<MessageEntity> via_bot_name:flags.11?string reply_to_random_id:flags.3?long = DecryptedMessage;

===73===
decryptedMessage#91cc4674 flags:# no_webpage:flags.1?true silent:flags.5?true random_id:long ttl:int message:string media:flags.9?DecryptedMessageMedia entities:flags.7?Vector<MessageEntity> via_bot_name:flags.11?string reply_to_random_id:flags.3?long grouped_id:flags.17?long = DecryptedMessage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:random_id] Случайный идентификатор сообщения, назначенный автором сообщения.<br>Должен совпадать с идентификатором, переданным методу отправки. Подробнее о дедупликации по случайному идентификатору и о сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>random_bytes</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Случайные байты, удалено в слое 17.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Текст сообщения</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/type/DecryptedMessageMedia">DecryptedMessageMedia</a></td><td>Содержимое медиа</td></tr><tr><td><strong>ttl</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Время жизни сообщения. Имеет более высокий приоритет, чем <a href="/constructor/decryptedMessageActionSetMessageTTL">decryptedMessageActionSetMessageTTL</a>.<br>Параметр добавлен в слое 17.</td></tr><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a> (добавлено в слое 45)</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления</a> сообщения для форматированного текста (параметр добавлен в слое 45)</td></tr><tr><td><strong>via_bot_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/type/string">string</a></td><td>Указывает идентификатор инлайн-бота, создавшего сообщение (параметр добавлен в слое 45)</td></tr><tr><td><strong>reply_to_random_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/long">long</a></td><td>Случайный идентификатор сообщения, на которое отвечает данное сообщение (параметр добавлен в слое 45)</td></tr><tr><td><strong>grouped_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.17?<a href="/type/long">long</a></td><td>Случайный идентификатор группы, назначенный автором сообщения.<br>Несколько зашифрованных сообщений с прикреплённой фотографией и одинаковым идентификатором группы обозначают <a href="/api/files#albums-grouped-media">альбом или сгруппированные медиафайлы</a> (параметр добавлен в слое 45)</td></tr></tbody></table>

### Тип

[DecryptedMessage](/type/DecryptedMessage/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [decryptedMessageActionSetMessageTTL](/constructor/decryptedMessageActionSetMessageTTL/)

Установка времени жизни сообщения после прочтения.

[@term:TTL] При получении такого сообщения клиенту следует начать удаление всех сообщений секретного чата через **ttl\_seconds** секунд после того, как пользователь их прочитает.

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.
