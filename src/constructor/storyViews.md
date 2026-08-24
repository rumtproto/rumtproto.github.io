---
title: "storyViews"
original: "https://core.telegram.org/constructor/storyViews"
section: ref
kind: constructor
description: "Сводные сведения о просмотрах и реакциях истории."
layout: layout.njk
---

# storyViews

Сводные сведения о просмотрах и реакциях [истории](/api/stories/).

```
storyViews#8d595cd6 flags:# has_viewers:flags.1?true views_count:int forwards_count:flags.2?int reactions:flags.3?Vector<ReactionCount> reactions_count:flags.4?int recent_viewers:flags.0?Vector<long> = StoryViews;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>has_viewers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, указывает, что список просмотревших сейчас доступен для просмотра и ещё не был удалён из-за того, что история истекла, пока у пользователя не было аккаунта <a href="/api/premium">Premium</a>.</td></tr><tr><td><strong>views_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Счётчик просмотров истории</td></tr><tr><td><strong>forwards_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Счётчик пересылок истории</td></tr><tr><td><strong>reactions</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/ReactionCount">ReactionCount</a>&gt;</td><td>Все реакции, отправленные на эту историю</td></tr><tr><td><strong>reactions_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Количество реакций, добавленных к истории</td></tr><tr><td><strong>recent_viewers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Идентификаторы пользователей из числа недавних зрителей истории</td></tr></tbody></table>

### Тип

[StoryViews](/type/StoryViews/)

### Связанные страницы

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
