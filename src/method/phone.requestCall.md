---
title: "phone.requestCall"
original: "https://core.telegram.org/method/phone.requestCall"
section: ref
kind: method
description: "Начать телефонный звонок Telegram; подробнее о полном сценарии см. здесь »."
layout: layout.njk
---

# phone.requestCall

Начать телефонный звонок Telegram; подробнее о полном сценарии см. [здесь »](/api/calls/#one-to-one-calls).

```
phone.phoneCall#ec82e140 phone_call:PhoneCall users:Vector<User> = phone.PhoneCall;
---functions---
phone.requestCall#42ff96ed flags:# video:flags.0?true user_id:InputUser random_id:int g_a_hash:bytes protocol:PhoneCallProtocol = phone.PhoneCall;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Следует ли начать видеозвонок</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Назначение телефонного звонка</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:random_id] Случайный идентификатор, позволяющий избежать повторной отправки того же объекта. Подробнее о дедупликации по случайному идентификатору и о сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>g_a_hash</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td><a href="/api/end-to-end/voice-calls">Параметр для обмена ключами сквозного шифрования »</a></td></tr><tr><td><strong>protocol</strong></td><td style="text-align: center;"><a href="/type/PhoneCallProtocol">PhoneCallProtocol</a></td><td>Настройки телефонного звонка</td></tr></tbody></table>

### Результат

[phone.PhoneCall](/type/phone.PhoneCall/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CALL_PROTOCOL_FLAGS_INVALID</td><td>Недействительные флаги протокола звонка.</td></tr><tr><td>400</td><td>CALL_PROTOCOL_LAYER_INVALID</td><td>Указанный диапазон версий слоя протокола недействителен.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>Указанный пользователь был удалён.</td></tr><tr><td>400</td><td>PARTICIPANT_VERSION_OUTDATED</td><td>У другого участника установлен устаревший клиент Telegram без поддержки звонков.</td></tr><tr><td>500</td><td>RANDOM_ID_DUPLICATE</td><td>Вы передали случайный идентификатор, который уже использовался.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr><tr><td>403</td><td>USER_IS_BLOCKED</td><td>Этот пользователь вас заблокировал.</td></tr><tr><td>403</td><td>USER_PRIVACY_RESTRICTED</td><td>Настройки приватности пользователя не позволяют вам это сделать.</td></tr></tbody></table>

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Сквозное шифрование голосовых звонков](/api/end-to-end/voice-calls/)

Устаревшее описание шифрования в голосовых звонках, как оно было реализовано в приложениях Telegram до версии 7.0.

#### [Звонки](/api/calls/)

Telegram поддерживает голосовые и видеозвонки один на один со сквозным шифрованием.
