---
title: "phone.confirmCall"
original: "https://core.telegram.org/method/phone.confirmCall"
section: ref
kind: method
description: "Завершить обмен ключами сквозного шифрования для звонка »; подробнее о полном порядке действий см. здесь »."
layout: layout.njk
---

# phone.confirmCall

[Завершить обмен ключами сквозного шифрования для звонка »](/api/end-to-end/voice-calls/); подробнее о полном порядке действий см. [здесь »](/api/calls/#one-to-one-calls).

```
phone.phoneCall#ec82e140 phone_call:PhoneCall users:Vector<User> = phone.PhoneCall;
---functions---
phone.confirmCall#2efe1722 peer:InputPhoneCall g_a:bytes key_fingerprint:long protocol:PhoneCallProtocol = phone.PhoneCall;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPhoneCall">InputPhoneCall</a></td><td>[@term:peer] Телефонный звонок</td></tr><tr><td><strong>g_a</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td><a href="/api/end-to-end/voice-calls">Параметр для обмена ключами сквозного шифрования »</a></td></tr><tr><td><strong>key_fingerprint</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Отпечаток ключа</td></tr><tr><td><strong>protocol</strong></td><td style="text-align: center;"><a href="/type/PhoneCallProtocol">PhoneCallProtocol</a></td><td>Настройки телефонного звонка</td></tr></tbody></table>

### Результат

[phone.PhoneCall](/type/phone.PhoneCall/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CALL_ALREADY_DECLINED</td><td>Звонок уже был отклонён.</td></tr><tr><td>400</td><td>CALL_PEER_INVALID</td><td>Указанный объект пира звонка недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Сквозное шифрование голосовых звонков](/api/end-to-end/voice-calls/)

Устаревшее описание шифрования в голосовых звонках, как оно было реализовано в приложениях Telegram до версии 7.0.

#### [Звонки](/api/calls/)

Telegram поддерживает голосовые и видеозвонки один на один со сквозным шифрованием.
