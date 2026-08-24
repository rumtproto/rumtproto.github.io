---
title: "help.PromoData"
original: "https://core.telegram.org/type/help.PromoData"
section: ref
kind: type
description: "Информация о закреплённых пирах MTProxy или общественных объявлений."
layout: layout.njk
---

# help.PromoData

Информация о закреплённых пирах MTProxy или общественных объявлений.

```
help.promoDataEmpty#98f6ac75 expires:int = help.PromoData;
help.promoData#8a4d87a flags:# proxy:flags.0?true expires:int peer:flags.3?Peer psa_type:flags.1?string psa_message:flags.2?string pending_suggestions:Vector<string> dismissed_suggestions:Vector<string> custom_pending_suggestion:flags.4?PendingSuggestion chats:Vector<Chat> users:Vector<User> = help.PromoData;

---functions---

help.getPromoData#c0977421 = help.PromoData;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/help.promoDataEmpty">help.promoDataEmpty</a></td><td>Сведения о PSA/MTProxy недоступны</td></tr><tr><td><a href="/constructor/help.promoData">help.promoData</a></td><td>Набор полезных подсказок и рекламный пир PSA/MTProxy; подробнее см. <a href="/api/config#suggestions">здесь »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/help.getPromoData">help.getPromoData</a></td><td>Возвращает набор полезных рекомендаций, а также спонсорских пиров PSA и MTProxy; подробнее см. <a href="/api/config#suggestions">здесь »</a>.</td></tr></tbody></table>
