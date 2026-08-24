---
title: "help.getPromoData"
original: "https://core.telegram.org/method/help.getPromoData"
section: ref
kind: method
description: "Возвращает набор полезных подсказок и рекламные пиры PSA/MTProxy; подробнее см. здесь »."
layout: layout.njk
---

# help.getPromoData

Возвращает набор полезных подсказок и рекламные пиры PSA/MTProxy; подробнее см. [здесь »](/api/config/#suggestions).

```
help.promoDataEmpty#98f6ac75 expires:int = help.PromoData;
help.promoData#8a4d87a flags:# proxy:flags.0?true expires:int peer:flags.3?Peer psa_type:flags.1?string psa_message:flags.2?string pending_suggestions:Vector<string> dismissed_suggestions:Vector<string> custom_pending_suggestion:flags.4?PendingSuggestion chats:Vector<Chat> users:Vector<User> = help.PromoData;
---functions---
help.getPromoData#c0977421 = help.PromoData;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[help.PromoData](/type/help.PromoData/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
