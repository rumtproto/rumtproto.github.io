---
title: "account.setPrivacy"
original: "https://core.telegram.org/method/account.setPrivacy"
section: ref
kind: method
description: "Изменить настройки приватности текущего аккаунта"
layout: layout.njk
---

# account.setPrivacy

Изменить настройки приватности текущего аккаунта

```
account.privacyRules#50a04e45 rules:Vector<PrivacyRule> chats:Vector<Chat> users:Vector<User> = account.PrivacyRules;
---functions---
account.setPrivacy#c9f81ce8 key:InputPrivacyKey rules:Vector<InputPrivacyRule> = account.PrivacyRules;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>key</strong></td><td style="text-align: center;"><a href="/type/InputPrivacyKey">InputPrivacyKey</a></td><td>Новое правило приватности</td></tr><tr><td><strong>rules</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPrivacyRule">InputPrivacyRule</a>&gt;</td><td>Пиры, к которым будет применяться правило приватности.</td></tr></tbody></table>

### Результат

[account.PrivacyRules](/type/account.PrivacyRules/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PRIVACY_KEY_INVALID</td><td>Указанный ключ приватности недействителен.</td></tr><tr><td>400</td><td>PRIVACY_TOO_LONG</td><td>Указано слишком много правил приватности, текущий предел — 1000.</td></tr><tr><td>400</td><td>PRIVACY_VALUE_INVALID</td><td>Указанное сочетание правил приватности недопустимо.</td></tr></tbody></table>
