---
title: "account.PrivacyRules"
original: "https://core.telegram.org/type/account.PrivacyRules"
section: ref
kind: type
description: "Правила приватности"
layout: layout.njk
---

# Account.PrivacyRules

Правила приватности

```
account.privacyRules#50a04e45 rules:Vector<PrivacyRule> chats:Vector<Chat> users:Vector<User> = account.PrivacyRules;

---functions---

account.getPrivacy#dadbc950 key:InputPrivacyKey = account.PrivacyRules;
account.setPrivacy#c9f81ce8 key:InputPrivacyKey rules:Vector<InputPrivacyRule> = account.PrivacyRules;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/account.privacyRules">account.privacyRules</a></td><td>Правила приватности</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.getPrivacy">account.getPrivacy</a></td><td>Получить настройки приватности текущего аккаунта</td></tr><tr><td><a href="/method/account.setPrivacy">account.setPrivacy</a></td><td>Изменить настройки приватности текущего аккаунта</td></tr></tbody></table>
