---
title: "restrictionReason"
original: "https://core.telegram.org/constructor/restrictionReason"
section: ref
kind: constructor
description: "Причина ограничения."
layout: layout.njk
---

# restrictionReason

Причина ограничения.

Полный порядок действий для контента с ограничениями или возрастным ограничением см. [здесь »](/api/age-verification/).

```
restrictionReason#d072acb4 platform:string reason:string text:string = RestrictionReason;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>platform</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор платформы (ios, android, wp, all и т. п.); значения можно объединять через дефис (<code>android-ios</code>, <code>ios-wp</code> и т. п.)</td></tr><tr><td><strong>reason</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Причина ограничения (<code>porno</code>, <code>terms</code> и так далее). Игнорируйте эту причину ограничения, если она содержится в параметре клиентской конфигурации <a href="/api/config#ignore-restriction-reasons">ignore_restriction_reasons »</a>.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Сообщение об ошибке, которое нужно показать пользователю</td></tr></tbody></table>

### Тип

[RestrictionReason](/type/RestrictionReason/)

### Связанные страницы

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Проверка возраста](/api/age-verification/)

[@term:Mini App] Законодательство некоторых стран требует проверки возраста для просмотра контента с ограничениями: Telegram реализует её через Main Mini App специального бота.
