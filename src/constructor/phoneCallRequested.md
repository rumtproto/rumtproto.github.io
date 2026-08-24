---
title: "phoneCallRequested"
original: "https://core.telegram.org/constructor/phoneCallRequested"
section: ref
kind: constructor
description: "Запрошенный телефонный звонок; подробнее о полном порядке действий см. здесь »."
layout: layout.njk
---

# phoneCallRequested

Запрошенный телефонный звонок; подробнее о полном порядке действий см. [здесь »](/api/calls/).

```
phoneCallRequested#14b0ed0c flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long g_a_hash:bytes protocol:PhoneCallProtocol = PhoneCall;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Является ли это видеозвонком</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор звонка</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] Хеш доступа</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда звонок был создан</td></tr><tr><td><strong>admin_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор инициатора телефонного звонка</td></tr><tr><td><strong>participant_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор второго участника телефонного звонка</td></tr><tr><td><strong>g_a_hash</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td><a href="/api/end-to-end/voice-calls">Параметр для обмена ключами</a></td></tr><tr><td><strong>protocol</strong></td><td style="text-align: center;"><a href="/type/PhoneCallProtocol">PhoneCallProtocol</a></td><td>Сведения о протоколе звонка, передаваемые в libtgvoip</td></tr></tbody></table>

### Тип

[PhoneCall](/type/PhoneCall/)

### Связанные страницы

#### [Сквозное шифрование голосовых звонков](/api/end-to-end/voice-calls/)

Устаревшее описание шифрования в голосовых звонках, как оно было реализовано в приложениях Telegram до версии 7.0.

#### [Звонки](/api/calls/)

Telegram поддерживает голосовые и видеозвонки один на один со сквозным шифрованием.
