---
title: "phoneCallDiscarded"
original: "https://core.telegram.org/constructor/phoneCallDiscarded"
section: ref
kind: constructor
description: "Обозначает завершённый звонок; подробнее о полном процессе см. здесь »."
layout: layout.njk
---

# phoneCallDiscarded

Обозначает завершённый звонок; подробнее о полном процессе см. [здесь »](/api/calls/).

```
phoneCallDiscarded#50ca4de1 flags:# need_rating:flags.2?true need_debug:flags.3?true video:flags.6?true id:long reason:flags.0?PhoneCallDiscardReason duration:flags.1?int = PhoneCall;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>need_rating</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Потребовал ли сервер от пользователя <a href="/method/phone.setCallRating">оценить</a> звонок</td></tr><tr><td><strong>need_debug</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Потребовал ли сервер от клиента <a href="/method/phone.saveCallDebug">отправить</a> отладочные данные звонка libtgvoip</td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Был ли звонок видеозвонком</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор звонка</td></tr><tr><td><strong>reason</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/PhoneCallDiscardReason">PhoneCallDiscardReason</a></td><td>Почему звонок был завершён</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Длительность телефонного звонка в секундах</td></tr></tbody></table>

### Тип

[PhoneCall](/type/PhoneCall/)

### Связанные страницы

#### [phone.setCallRating](/method/phone.setCallRating/)

Оценить звонок; возвращает сведения о сообщении с оценкой, отправленном официальному VoIP-боту; подробнее обо всём процессе см. [здесь »](/api/calls/#call-rating).

#### [phone.saveCallDebug](/method/phone.saveCallDebug/)

Отправить на сервер отладочные данные [звонка](/api/calls/#call-debug).

#### [Звонки](/api/calls/)

Telegram поддерживает голосовые и видеозвонки один на один со сквозным шифрованием.
