---
title: "Phone.PhoneCall (тип)"
original: "https://core.telegram.org/type/phone.PhoneCall"
section: ref
kind: type
layout: layout.njk
---

# Phone.PhoneCall

*Тип из схемы TL.*

> Phone call

## Определение TL

```
phone.phoneCall#ec82e140 phone_call:PhoneCall users:Vector<User> = phone.PhoneCall;

---functions---

phone.requestCall#42ff96ed flags:# video:flags.0?true user_id:InputUser random_id:int g_a_hash:bytes protocol:PhoneCallProtocol = phone.PhoneCall;
phone.acceptCall#3bd2b4a0 peer:InputPhoneCall g_b:bytes protocol:PhoneCallProtocol = phone.PhoneCall;
phone.confirmCall#2efe1722 peer:InputPhoneCall g_a:bytes key_fingerprint:long protocol:PhoneCallProtocol = phone.PhoneCall;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [phone.phoneCall](/constructor/phone.phoneCall/) | A VoIP phone call |

## Методы

| Method | Описание |
|---|---|
| [phone.requestCall](/method/phone.requestCall/) | Start a telegram phone call, see [here »](https://core.telegram.org/api/calls#one-to-one-calls) for more info on the full flow. |
| [phone.acceptCall](/method/phone.acceptCall/) | Accept incoming call, see [here »](https://core.telegram.org/api/calls#one-to-one-calls) for more info on the full flow. |
| [phone.confirmCall](/method/phone.confirmCall/) | [Complete phone call E2E encryption key exchange »](https://core.telegram.org/api/end-to-end/voice-calls), see [here »](https://core.telegram.org/api/calls#one-to-one-calls) for more info on the full flow. |
