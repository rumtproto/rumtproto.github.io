---
title: "messagePeerReaction"
original: "https://core.telegram.org/constructor/messagePeerReaction"
section: ref
kind: constructor
description: "Как определённый пир отреагировал на сообщение"
layout: layout.njk
---

# messagePeerReaction

Как определённый пир отреагировал на сообщение

```
messagePeerReaction#8c79b63c flags:# big:flags.0?true unread:flags.1?true my:flags.2?true peer_id:Peer date:int reaction:Reaction = MessagePeerReaction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>big</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Должна ли указанная <a href="/api/reactions">реакция на сообщение »</a> вызывать более крупную и длительную анимацию</td></tr><tr><td><strong>unread</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Не была ли реакция ещё отмечена текущим пользователем как прочитанная</td></tr><tr><td><strong>my</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>[@term:peer] Начиная со слоя 159 метод <a href="/method/messages.sendReaction">messages.sendReaction</a> отправляет реакции от имени пира (пользователя или канала), указанного через <a href="/method/messages.saveDefaultSendAs">messages.saveDefaultSendAs</a>.<br>Если флаг установлен, он означает, что эта реакция отправлена нами, даже если <code>peer</code> не указывает на текущую учётную запись.</td></tr><tr><td><strong>peer_id</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>Пир, отреагировавший на сообщение</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда была добавлена эта реакция</td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/type/Reaction">Reaction</a></td><td>Эмодзи реакции</td></tr></tbody></table>

### Тип

[MessagePeerReaction](/type/MessagePeerReaction/)

### Связанные страницы

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.

#### [messages.sendReaction](/method/messages.sendReaction/)

Поставить реакцию на сообщение.

Начиная со слоя 159 реакция отправляется от имени пира, указанного через [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/).

#### [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/)

Изменить пир по умолчанию, используемый при отправке сообщений, реакций и голосов в опросах в определённую группу
