---
title: "phoneCallWaiting"
original: "https://core.telegram.org/constructor/phoneCallWaiting"
section: ref
kind: constructor
description: "Входящий телефонный звонок; подробнее о полном процессе см. здесь »."
layout: layout.njk
---

# phoneCallWaiting

Входящий телефонный звонок; подробнее о полном процессе см. [здесь »](/api/calls/).

```
phoneCallWaiting#c5226f17 flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long protocol:PhoneCallProtocol receive_date:flags.0?int = PhoneCall;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Является ли это видеозвонком</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор звонка</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] Хеш доступа</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата</td></tr><tr><td><strong>admin_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор администратора</td></tr><tr><td><strong>participant_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор участника</td></tr><tr><td><strong>protocol</strong></td><td style="text-align: center;"><a href="/type/PhoneCallProtocol">PhoneCallProtocol</a></td><td>Сведения о протоколе телефонного звонка</td></tr><tr><td><strong>receive_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Когда звонок был получен</td></tr></tbody></table>

### Тип

[PhoneCall](/type/PhoneCall/)

### Связанные страницы

#### [Звонки](/api/calls/)

Telegram поддерживает голосовые и видеозвонки один на один со сквозным шифрованием.
