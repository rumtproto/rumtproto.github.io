---
title: "messageEntityFormattedDate"
original: "https://core.telegram.org/constructor/messageEntityFormattedDate"
section: ref
kind: constructor
description: "Представляет конкретный момент времени, отображаемый так, как указано здесь »"
layout: layout.njk
---

# messageEntityFormattedDate

Представляет конкретный момент времени, отображаемый так, как указано [здесь »](/api/entities/#date-entities)

Все флаги необязательны, со следующими ограничениями:

-   `relative` нельзя сочетать ни с каким другим флагом
-   `short_time` и `long_time` нельзя сочетать друг с другом
-   `short_date` и `long_date` нельзя сочетать друг с другом

Если несколько флагов заданы одновременно, порядок их применения к тексту следующий:

-   `day_of_week`
-   `short_time`/`long_time`
-   `short_date`/`long_date`

```
messageEntityFormattedDate#904ac7c7 flags:# relative:flags.0?true short_time:flags.1?true long_time:flags.2?true short_date:flags.3?true long_date:flags.4?true day_of_week:flags.5?true offset:int length:int date:int = MessageEntity;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>relative</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, отображает относительную дату, подробнее <a href="/api/entities#date-entities">см. здесь »</a>. Не может сочетаться ни с одним из остальных флагов.</td></tr><tr><td><strong>short_time</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Отображает время в кратком формате: часы и минуты, согласно языковым настройкам пользователя; нельзя сочетать с <code>long_time</code>.</td></tr><tr><td><strong>long_time</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Отображает время в полном формате: часы, минуты, секунды и, возможно, часовой пояс, согласно языковым настройкам пользователя; нельзя сочетать с <code>short_time</code>.</td></tr><tr><td><strong>short_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Отображает время в кратком формате: месяц, число (и год, если он отличается от текущего), всё согласно языковым настройкам пользователя; нельзя сочетать с <code>long_date</code>.</td></tr><tr><td><strong>long_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Отображает время в полном формате: всегда месяц, число и год, всё согласно языковым настройкам пользователя; нельзя сочетать с <code>short_date</code>.</td></tr><tr><td><strong>day_of_week</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Отображает день недели согласно языковым настройкам пользователя.</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Смещение сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длина сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата в виде метки времени UNIX: допустимые значения — от <code>0</code> до текущей даты плюс 1098 дней (<code>time()+1098*86400</code>).</td></tr></tbody></table>

### Тип

[MessageEntity](/type/MessageEntity/)

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления
