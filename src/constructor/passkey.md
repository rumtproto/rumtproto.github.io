---
title: "passkey"
original: "https://core.telegram.org/constructor/passkey"
section: ref
kind: constructor
description: "Понятные человеку сведения о ключе доступа, привязанном к аккаунту; возвращаются при создании ключа доступа » или получении списка ключей доступа »."
layout: layout.njk
---

# passkey

Понятные человеку сведения о ключе доступа, привязанном к аккаунту; возвращаются при [создании ключа доступа »](/api/passkeys/#creating-a-passkey) или [получении списка ключей доступа »](/api/passkeys/#list-passkeys).

```
passkey#98613ebf flags:# id:string name:string date:int software_emoji_id:flags.0?long last_usage_date:flags.1?int = Passkey;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Уникальный идентификатор passkey, применимый, например, в <a href="/method/account.deletePasskey">account.deletePasskey</a>.</td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Понятное человеку название ключа доступа</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата создания ключа доступа</td></tr><tr><td><strong>software_emoji_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Идентификатор <a href="/api/custom-emoji">пользовательского эмодзи</a>, используемого как значок программы или менеджера паролей, создавшего ключ доступа</td></tr><tr><td><strong>last_usage_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Дата последнего входа с использованием этого ключа доступа</td></tr></tbody></table>

### Тип

[Passkey](/type/Passkey/)

### Связанные страницы

#### [account.deletePasskey](/method/account.deletePasskey/)

Удалить ключ доступа, привязанный к текущему аккаунту; подробнее см. [здесь »](/api/passkeys/#delete-passkeys).

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.

#### [Вход по passkey](/api/passkeys/)

Мгновенный вход в Telegram с помощью passkey — по PIN-коду или биометрии вместо SMS-кода.
