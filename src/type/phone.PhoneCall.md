---
title: "phone.PhoneCall"
original: "https://core.telegram.org/type/phone.PhoneCall"
section: ref
kind: type
description: "Телефонный звонок"
layout: layout.njk
---

# Phone.PhoneCall

Телефонный звонок

```
phone.phoneCall#ec82e140 phone_call:PhoneCall users:Vector<User> = phone.PhoneCall;

---functions---

phone.requestCall#42ff96ed flags:# video:flags.0?true user_id:InputUser random_id:int g_a_hash:bytes protocol:PhoneCallProtocol = phone.PhoneCall;
phone.acceptCall#3bd2b4a0 peer:InputPhoneCall g_b:bytes protocol:PhoneCallProtocol = phone.PhoneCall;
phone.confirmCall#2efe1722 peer:InputPhoneCall g_a:bytes key_fingerprint:long protocol:PhoneCallProtocol = phone.PhoneCall;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/phone.phoneCall">phone.phoneCall</a></td><td>Телефонный звонок VoIP</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/phone.requestCall">phone.requestCall</a></td><td>Начать телефонный звонок Telegram; подробнее о полном сценарии см. <a href="/api/calls#one-to-one-calls">здесь »</a>.</td></tr><tr><td><a href="/method/phone.acceptCall">phone.acceptCall</a></td><td>Принять входящий звонок; подробнее о полном порядке действий см. <a href="/api/calls#one-to-one-calls">здесь »</a>.</td></tr><tr><td><a href="/method/phone.confirmCall">phone.confirmCall</a></td><td><a href="/api/end-to-end/voice-calls">Завершить обмен ключами сквозного шифрования для звонка »</a>; подробнее о полном процессе см. <a href="/api/calls#one-to-one-calls">здесь »</a>.</td></tr></tbody></table>
