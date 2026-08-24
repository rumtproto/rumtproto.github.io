---
title: "phone.acceptCall"
original: "https://core.telegram.org/method/phone.acceptCall"
section: ref
kind: method
description: "Принять входящий звонок; подробнее о полном процессе см. здесь »."
layout: layout.njk
---

# phone.acceptCall

Принять входящий звонок; подробнее о полном процессе см. [здесь »](/api/calls/#one-to-one-calls).

```
phone.phoneCall#ec82e140 phone_call:PhoneCall users:Vector<User> = phone.PhoneCall;
---functions---
phone.acceptCall#3bd2b4a0 peer:InputPhoneCall g_b:bytes protocol:PhoneCallProtocol = phone.PhoneCall;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPhoneCall">InputPhoneCall</a></td><td>[@term:peer] Звонок, который требуется принять</td></tr><tr><td><strong>g_b</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td><a href="/api/end-to-end/voice-calls">Параметр для обмена ключами сквозного шифрования »</a></td></tr><tr><td><strong>protocol</strong></td><td style="text-align: center;"><a href="/type/PhoneCallProtocol">PhoneCallProtocol</a></td><td>Настройки телефонного звонка</td></tr></tbody></table>

### Результат

[phone.PhoneCall](/type/phone.PhoneCall/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CALL_ALREADY_ACCEPTED</td><td>Звонок уже был принят.</td></tr><tr><td>400</td><td>CALL_ALREADY_DECLINED</td><td>Звонок уже был отклонён.</td></tr><tr><td>500</td><td>CALL_OCCUPY_FAILED</td><td>Звонок не удался, так как пользователь уже участвует в другом звонке.</td></tr><tr><td>400</td><td>CALL_PEER_INVALID</td><td>Указанный объект пира звонка недействителен.</td></tr><tr><td>406</td><td>CALL_PROTOCOL_COMPAT_LAYER_INVALID</td><td>Другая сторона звонка не поддерживает ни один из протоколов VoIP, поддерживаемых локальным клиентом, согласно полям <code>protocol.layer</code> и <code>protocol.library_versions</code>.</td></tr><tr><td>400</td><td>CALL_PROTOCOL_FLAGS_INVALID</td><td>Недействительные флаги протокола звонка.</td></tr><tr><td>400</td><td>CALL_PROTOCOL_LAYER_INVALID</td><td>Указанный диапазон версий слоя протокола недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Сквозное шифрование голосовых звонков](/api/end-to-end/voice-calls/)

Устаревшее описание шифрования в голосовых звонках, как оно было реализовано в приложениях Telegram до версии 7.0.

#### [Звонки](/api/calls/)

Telegram поддерживает голосовые и видеозвонки один на один со сквозным шифрованием.
