---
title: "help.premiumPromo"
original: "https://core.telegram.org/constructor/help.premiumPromo"
section: ref
kind: constructor
description: "Сведения о рекламной кампании Telegram Premium"
layout: layout.njk
---

# help.premiumPromo

Сведения о рекламной кампании Telegram Premium

Обратите внимание, что поля `video_sections`+`videos` представляют собой список видео и соответствующих им идентификаторов возможностей Premium.  
Они равносильны словарю «раздел => видео», ключи которого берутся из `video_section`, а значения — из `videos`.  
Ключи в `video_sections` соответствуют конкретному идентификатору возможности; связанное с ним рекламное видео следует показывать при нажатии на строку соответствующей возможности.

```
help.premiumPromo#5334759c status_text:string status_entities:Vector<MessageEntity> video_sections:Vector<string> videos:Vector<Document> period_options:Vector<PremiumSubscriptionOption> users:Vector<User> = help.PremiumPromo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>status_text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Описание текущего состояния подписки Telegram Premium пользователя</td></tr><tr><td><strong>status_entities</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления для форматированного текста</a></td></tr><tr><td><strong>video_sections</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/string">string</a>&gt;</td><td>Список <a href="/api/premium">идентификаторов возможностей Premium »</a>, соответствующих каждому видео</td></tr><tr><td><strong>videos</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Document">Document</a>&gt;</td><td>Список видео</td></tr><tr><td><strong>period_options</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/PremiumSubscriptionOption">PremiumSubscriptionOption</a>&gt;</td><td>Варианты подписки Telegram Premium</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Сведения о связанном пользователе</td></tr></tbody></table>

### Тип

[help.PremiumPromo](/type/help.PremiumPromo/)

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.
