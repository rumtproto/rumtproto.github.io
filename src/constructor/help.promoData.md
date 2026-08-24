---
title: "help.promoData"
original: "https://core.telegram.org/constructor/help.promoData"
section: ref
kind: constructor
description: "Набор полезных подсказок и рекламный пир PSA/MTProxy; подробнее см. здесь »."
layout: layout.njk
---

# help.promoData

Набор полезных подсказок и рекламный пир PSA/MTProxy; подробнее см. [здесь »](/api/config/#suggestions).

```
help.promoData#8a4d87a flags:# proxy:flags.0?true expires:int peer:flags.3?Peer psa_type:flags.1?string psa_message:flags.2?string pending_suggestions:Vector<string> dismissed_suggestions:Vector<string> custom_pending_suggestion:flags.4?PendingSuggestion chats:Vector<Chat> users:Vector<User> = help.PromoData;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>proxy</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>[@term:peer] Устанавливается при подключении через MTProxy, для которого настроен связанный пир (он будет передан в <code>peer</code>, то есть канал, спонсировавший MTProxy), закрепляемый вверху списка чатов.</td></tr><tr><td><strong>expires</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Время в формате unixtime, когда следует повторно вызвать <a href="/method/help.getPromoData">help.getPromoData</a>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Peer">Peer</a></td><td>Пир MTProxy или PSA</td></tr><tr><td><strong>psa_type</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Для <code>peer</code>ов социальной рекламы (PSA) указывает тип PSA.</td></tr><tr><td><strong>psa_message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Для <code>peer</code>ов социальной рекламы (PSA) содержит сам текст PSA.</td></tr><tr><td><strong>pending_suggestions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/string">string</a>&gt;</td><td>Содержит список <a href="/api/config#basic-suggestions">ожидающих подсказок »</a>.</td></tr><tr><td><strong>dismissed_suggestions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/string">string</a>&gt;</td><td>Содержит список <a href="/api/config#inverted-suggestions">инвертированных подсказок »</a>.</td></tr><tr><td><strong>custom_pending_suggestion</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/PendingSuggestion">PendingSuggestion</a></td><td>Содержит список <a href="/api/config#custom-suggestions">пользовательских ожидающих подсказок »</a>.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Информация о чате</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Информация о пользователе</td></tr></tbody></table>

### Тип

[help.PromoData](/type/help.PromoData/)

### Связанные страницы

#### [help.getPromoData](/method/help.getPromoData/)

Возвращает набор полезных подсказок и рекламные пиры PSA/MTProxy; подробнее см. [здесь »](/api/config/#suggestions).

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
