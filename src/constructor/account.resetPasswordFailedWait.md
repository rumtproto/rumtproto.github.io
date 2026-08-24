---
title: "account.resetPasswordFailedWait"
original: "https://core.telegram.org/constructor/account.resetPasswordFailedWait"
section: ref
kind: constructor
description: "Недавно вы запросили сброс пароля, который был отменён; дождитесь указанной даты, прежде чем запрашивать новый сброс."
layout: layout.njk
---

# account.resetPasswordFailedWait

Недавно вы запросили сброс пароля, который был отменён; дождитесь указанной даты, прежде чем запрашивать новый сброс.

```
account.resetPasswordFailedWait#e3779861 retry_date:int = account.ResetPasswordResult;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>retry_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дождитесь наступления этой даты, прежде чем запрашивать новый сброс.</td></tr></tbody></table>

### Тип

[account.ResetPasswordResult](/type/account.ResetPasswordResult/)
