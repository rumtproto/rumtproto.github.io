---
title: "messageReactions"
original: "https://core.telegram.org/constructor/messageReactions"
section: ref
kind: constructor
description: "Реакции на сообщения »"
layout: layout.njk
---

# messageReactions

[Реакции на сообщения »](/api/reactions/)

```
messageReactions#a339f0b flags:# min:flags.0?true can_see_list:flags.2?true reactions_as_tags:flags.3?true results:Vector<ReactionCount> recent_reactions:flags.1?Vector<MessagePeerReaction> top_reactors:flags.4?Vector<MessageReactor> = MessageReactions;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>min</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>[@term:min] Аналогично <a href="/api/min">min</a>-объектам, используется для конструкторов <a href="/api/reactions">реакций на сообщения »</a>, одинаковых для всех пользователей, поэтому в них нет реакций, отправленных текущим пользователем (получить полную информацию о реакциях можно с помощью <a href="/method/messages.getMessagesReactions">messages.getMessagesReactions</a>).</td></tr><tr><td><strong>can_see_list</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Можно ли с помощью <a href="/method/messages.getMessageReactionsList">messages.getMessageReactionsList</a> узнать, как на сообщение отреагировал каждый конкретный пир</td></tr><tr><td><strong>reactions_as_tags</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Если установлено или если реакций нет, все текущие и будущие реакции следует рассматривать как <a href="/api/saved-messages#tags">теги сообщений, подробнее см. здесь »</a>.</td></tr><tr><td><strong>results</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/ReactionCount">ReactionCount</a>&gt;</td><td>Реакции</td></tr><tr><td><strong>recent_reactions</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessagePeerReaction">MessagePeerReaction</a>&gt;</td><td>Список недавних пиров и их реакций</td></tr><tr><td><strong>top_reactors</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageReactor">MessageReactor</a>&gt;</td><td><a href="/api/reactions#paid-reactions">Таблица лидеров платных реакций за Telegram Stars »</a> для этого сообщения.</td></tr></tbody></table>

### Тип

[MessageReactions](/type/MessageReactions/)

### Связанные страницы

#### [Конструкторы min](/api/min/)

В некоторых случаях в конструкторах пользователя и канала присутствует сокращённый набор полей (хотя id есть всегда) и установлен флаг min.

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.

#### [messages.getMessagesReactions](/method/messages.getMessagesReactions/)

Получить [реакции на сообщения »](/api/reactions/)

#### [messages.getMessageReactionsList](/method/messages.getMessageReactionsList/)

Получить список [реакций на сообщение](/api/reactions/) вместе с отправителем каждой реакции.

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.
