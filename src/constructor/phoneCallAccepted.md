---
title: "phoneCallAccepted"
original: "https://core.telegram.org/constructor/phoneCallAccepted"
section: ref
kind: constructor
description: "Принятый звонок; подробнее о полном процессе см. здесь »."
layout: layout.njk
---

# phoneCallAccepted

Принятый звонок; подробнее о полном процессе см. [здесь »](/api/calls/).

```
phoneCallAccepted#3660c311 flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long g_b:bytes protocol:PhoneCallProtocol = PhoneCall;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Является ли это видеозвонком</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор принятого звонка</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] Хеш доступа звонка</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда звонок был принят</td></tr><tr><td><strong>admin_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор создателя звонка</td></tr><tr><td><strong>participant_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор второго пользователя в звонке</td></tr><tr><td><strong>g_b</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Параметр B для <a href="/api/end-to-end/voice-calls">защищённого обмена ключами сквозного шифрования звонка</a></td></tr><tr><td><strong>protocol</strong></td><td style="text-align: center;"><a href="/type/PhoneCallProtocol">PhoneCallProtocol</a></td><td>Протокол, используемый для телефонного звонка</td></tr></tbody></table>

### Тип

[PhoneCall](/type/PhoneCall/)

### Связанные страницы

#### [Сквозное шифрование голосовых звонков](/api/end-to-end/voice-calls/)

Устаревшее описание шифрования в голосовых звонках, как оно было реализовано в приложениях Telegram до версии 7.0.

#### [Звонки](/api/calls/)

Telegram поддерживает голосовые и видеозвонки один на один со сквозным шифрованием.
