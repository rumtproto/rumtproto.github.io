---
title: "account.getPrivacy"
original: "https://core.telegram.org/method/account.getPrivacy"
section: ref
kind: method
description: "Получить настройки приватности текущего аккаунта"
layout: layout.njk
---

# account.getPrivacy

Получить настройки приватности текущего аккаунта

```
account.privacyRules#50a04e45 rules:Vector<PrivacyRule> chats:Vector<Chat> users:Vector<User> = account.PrivacyRules;
---functions---
account.getPrivacy#dadbc950 key:InputPrivacyKey = account.PrivacyRules;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>key</strong></td><td style="text-align: center;"><a href="/type/InputPrivacyKey">InputPrivacyKey</a></td><td>Категория пиров, настройки приватности которой следует получить</td></tr></tbody></table>

### Результат

[account.PrivacyRules](/type/account.PrivacyRules/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PRIVACY_KEY_INVALID</td><td>Указанный ключ приватности недействителен.</td></tr></tbody></table>
