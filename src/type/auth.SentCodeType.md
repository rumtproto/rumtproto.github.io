---
title: "auth.SentCodeType"
original: "https://core.telegram.org/type/auth.SentCodeType"
section: ref
kind: type
description: "Тип отправленного кода подтверждения"
layout: layout.njk
---

# auth.SentCodeType

Тип отправленного кода подтверждения

```
auth.sentCodeTypeApp#3dbb5986 length:int = auth.SentCodeType;
auth.sentCodeTypeSms#c000bba2 length:int = auth.SentCodeType;
auth.sentCodeTypeCall#5353e5a7 length:int = auth.SentCodeType;
auth.sentCodeTypeFlashCall#ab03c6d9 pattern:string = auth.SentCodeType;
auth.sentCodeTypeMissedCall#82006484 prefix:string length:int = auth.SentCodeType;
auth.sentCodeTypeEmailCode#f450f59b flags:# apple_signin_allowed:flags.0?true google_signin_allowed:flags.1?true email_pattern:string length:int reset_available_period:flags.3?int reset_pending_date:flags.4?int = auth.SentCodeType;
auth.sentCodeTypeSetUpEmailRequired#a5491dea flags:# apple_signin_allowed:flags.0?true google_signin_allowed:flags.1?true = auth.SentCodeType;
auth.sentCodeTypeFragmentSms#d9565c39 url:string length:int = auth.SentCodeType;
auth.sentCodeTypeFirebaseSms#9fd736 flags:# nonce:flags.0?bytes play_integrity_project_id:flags.2?long play_integrity_nonce:flags.2?bytes receipt:flags.1?string push_timeout:flags.1?int length:int = auth.SentCodeType;
auth.sentCodeTypeSmsWord#a416ac81 flags:# beginning:flags.0?string = auth.SentCodeType;
auth.sentCodeTypeSmsPhrase#b37794af flags:# beginning:flags.0?string = auth.SentCodeType;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/auth.sentCodeTypeApp">auth.sentCodeTypeApp</a></td><td>Код был отправлен через приложение Telegram</td></tr><tr><td><a href="/constructor/auth.sentCodeTypeSms">auth.sentCodeTypeSms</a></td><td>Код был отправлен по SMS</td></tr><tr><td><a href="/constructor/auth.sentCodeTypeCall">auth.sentCodeTypeCall</a></td><td>Код будет передан телефонным звонком: синтезированный голос продиктует пользователю код подтверждения, который нужно ввести.</td></tr><tr><td><a href="/constructor/auth.sentCodeTypeFlashCall">auth.sentCodeTypeFlashCall</a></td><td>Код будет отправлен сбросом звонка, который сразу же завершится. Кодом при этом будет сам номер телефона — достаточно убедиться, что номер соответствует указанному шаблону.</td></tr><tr><td><a href="/constructor/auth.sentCodeTypeMissedCall">auth.sentCodeTypeMissedCall</a></td><td>Код будет отправлен сбросом звонка, который сразу же завершится. Код — это последние цифры номера, с которого поступил звонок; пользователь должен ввести их вручную.</td></tr><tr><td><a href="/constructor/auth.sentCodeTypeEmailCode">auth.sentCodeTypeEmailCode</a></td><td>Код был отправлен на <a href="/api/auth#email-verification">ранее заданный адрес электронной почты для входа »</a></td></tr><tr><td><a href="/constructor/auth.sentCodeTypeSetUpEmailRequired">auth.sentCodeTypeSetUpEmailRequired</a></td><td>Для входа пользователь должен добавить и подтвердить адрес электронной почты, как описано <a href="/api/auth#email-verification">здесь »</a>.</td></tr><tr><td><a href="/constructor/auth.sentCodeTypeFragmentSms">auth.sentCodeTypeFragmentSms</a></td><td>Код был доставлен через <a href="https://fragment.com">fragment.com</a>.</td></tr><tr><td><a href="/constructor/auth.sentCodeTypeFirebaseSms">auth.sentCodeTypeFirebaseSms</a></td><td>Код аутентификации должен быть доставлен по SMS после аттестации Firebase, как описано в <a href="/api/auth">документации по авторизации »</a>.</td></tr><tr><td><a href="/constructor/auth.sentCodeTypeSmsWord">auth.sentCodeTypeSmsWord</a></td><td>Код был отправлен по SMS в виде секретного слова, начинающегося с буквы, указанной в <code>beginning</code></td></tr><tr><td><a href="/constructor/auth.sentCodeTypeSmsPhrase">auth.sentCodeTypeSmsPhrase</a></td><td>Код был отправлен по SMS в виде секретной фразы, начинающейся со слова, указанного в <code>beginning</code></td></tr></tbody></table>
