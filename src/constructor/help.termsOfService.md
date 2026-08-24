---
title: "help.termsOfService"
original: "https://core.telegram.org/constructor/help.termsOfService"
section: ref
kind: constructor
description: "Информация о последних условиях использования Telegram"
layout: layout.njk
---

# help.termsOfService

Информация о последних условиях использования Telegram

```
help.termsOfService#780a0310 flags:# popup:flags.0?true id:DataJSON text:string entities:Vector<MessageEntity> min_age_confirm:flags.1?int = help.TermsOfService;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>popup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Требуется ли показать пользователю запрос на принятие новых условий.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/DataJSON">DataJSON</a></td><td>Идентификатор новых условий использования</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Текст новых условий</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления для форматированного текста</a></td></tr><tr><td><strong>min_age_confirm</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Минимальный возраст для регистрации в Telegram; пользователь обязан подтвердить, что он старше этого возраста.</td></tr></tbody></table>

### Тип

[help.TermsOfService](/type/help.TermsOfService/)

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления
