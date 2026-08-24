---
title: "messageReactor"
original: "https://core.telegram.org/constructor/messageReactor"
section: ref
kind: constructor
description: "Информация о пользователе в таблице лидеров платных реакций за Telegram Stars для сообщения."
layout: layout.njk
---

# messageReactor

Информация о пользователе в [таблице лидеров платных реакций за Telegram Stars](/api/reactions/#paid-reactions) для сообщения.

```
messageReactor#4ba3a95a flags:# top:flags.0?true my:flags.1?true anonymous:flags.2?true peer_id:flags.3?Peer count:int = MessageReactor;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>top</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, автор реакции входит в число самых активных; может быть не установлено, если автор реакции — текущий пользователь.</td></tr><tr><td><strong>my</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, автор этой реакции — текущий пользователь.</td></tr><tr><td><strong>anonymous</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Если установлено, автор реакции анонимен.</td></tr><tr><td><strong>peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Peer">Peer</a></td><td>Идентификатор пира, поставившего реакцию: может быть не задан для анонимных авторов реакций, отличных от текущего пользователя (то есть если анонимную реакцию отправил текущий пользователь, будет установлен флаг <code>anonymous</code>, но это поле тоже будет заполнено).</td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество отправленных Telegram Stars.</td></tr></tbody></table>

### Тип

[MessageReactor](/type/MessageReactor/)

### Связанные страницы

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.
