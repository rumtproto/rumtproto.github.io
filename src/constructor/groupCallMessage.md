---
title: "groupCallMessage"
original: "https://core.telegram.org/constructor/groupCallMessage"
section: ref
kind: constructor
description: "Представляет сообщение во время звонка », реакцию эмодзи, платный комментарий к прямой трансляции истории или отдельное платное пожертвование в прямой трансляции истории."
layout: layout.njk
---

# groupCallMessage

Представляет [сообщение во время звонка »](/api/group-calls/#in-call-messages), реакцию эмодзи, платный комментарий к прямой трансляции истории или отдельное платное пожертвование в прямой трансляции истории.

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===216===
groupCallMessage#907ce88e random_id:long message:TextWithEntities = GroupCallMessage;
```

#### Схема API

```
groupCallMessage#1a8afc7e flags:# from_admin:flags.1?true id:int from_id:Peer date:int message:TextWithEntities paid_message_stars:flags.0?long = GroupCallMessage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>from_admin</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Было ли сообщение отправлено администратором группового звонка</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор сообщения</td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>Отображаемый автор сообщения</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата сообщения</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities">TextWithEntities</a></td><td>Текст сообщения или эмодзи реакции; пустой для отдельных платных пожертвований прямым историям.<br>Длина не должна превышать <a href="/api/config#group-call-message-length-limit"><code>group_call_message_length_limit</code> »</a> символов UTF-8.<br>Для платных чатов вместо этого используйте <a href="/api/config#stars-groupcall-message-limits"><code>stars_groupcall_message_limits</code> »</a>, чтобы получить ограничения, соответствующие переданному значению <code>paid_message_stars</code>.</td></tr><tr><td><strong>paid_message_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Количество Telegram Stars, отправленных вместе с сообщением или отдельным пожертвованием</td></tr></tbody></table>

### Тип

[GroupCallMessage](/type/GroupCallMessage/)

### Связанные страницы

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
