---
title: "contacts.setBlocked"
original: "https://core.telegram.org/method/contacts.setBlocked"
section: ref
kind: method
description: "Заменить содержимое всего списка заблокированных, подробнее см. здесь »."
layout: layout.njk
---

# contacts.setBlocked

Заменить содержимое всего [списка заблокированных, подробнее см. здесь »](/api/block/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
contacts.setBlocked#94c65c76 flags:# my_stories_from:flags.0?true id:Vector<InputPeer> limit:int = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>my_stories_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Изменять ли список заблокированных для историй; если флаг не установлен, будет изменён основной список заблокированных. Различия между ними см. <a href="/api/block">здесь »</a>.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPeer">InputPeer</a>&gt;</td><td>Полное содержимое списка заблокированных.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное число возвращаемых результатов, <a href="/api/offsets">см. постраничную выборку</a></td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Заблокированные пользователи](/api/block/)

Работа со списком заблокированных.

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
