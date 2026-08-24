---
title: "messageActionSuggestedPostRefund"
original: "https://core.telegram.org/constructor/messageActionSuggestedPostRefund"
section: ref
kind: constructor
description: "Предлагаемый пост » был принят и опубликован или запланирован, но либо канал удалил опубликованный/запланированный пост до того, как прошло stars\\_suggested\\_post\\_age\\_min…"
layout: layout.njk
---

# messageActionSuggestedPostRefund

[Предлагаемый пост »](/api/suggested-posts/) был принят и опубликован или запланирован, но либо канал удалил опубликованный/запланированный пост до того, как прошло [stars\_suggested\_post\_age\_min](/api/config/#stars-suggested-post-age-min) секунд, либо пользователь вернул платёж за звёзды, которыми был оплачен предлагаемый пост.

```
messageActionSuggestedPostRefund#69f916f8 flags:# payer_initiated:flags.0?true = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>payer_initiated</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, пользователь вернул платёж за stars, использованные для оплаты предлагаемого поста.</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [Предлагаемые посты](/api/suggested-posts/)

Telegram предлагает администраторам каналов мощный инструмент монетизации — предлагаемые посты.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
