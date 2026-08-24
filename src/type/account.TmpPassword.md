---
title: "account.TmpPassword"
original: "https://core.telegram.org/type/account.TmpPassword"
section: ref
kind: type
description: "Временный пароль"
layout: layout.njk
---

# Account.TmpPassword

Временный пароль

```
account.tmpPassword#db64fd34 tmp_password:bytes valid_until:int = account.TmpPassword;

---functions---

account.getTmpPassword#449e0b51 password:InputCheckPasswordSRP period:int = account.TmpPassword;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/account.tmpPassword">account.tmpPassword</a></td><td>Временный платёжный пароль</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.getTmpPassword">account.getTmpPassword</a></td><td>Получить временный платёжный пароль</td></tr></tbody></table>
