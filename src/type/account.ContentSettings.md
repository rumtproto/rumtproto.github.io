---
title: "account.ContentSettings (тип)"
original: "https://core.telegram.org/type/account.ContentSettings"
section: ref
kind: type
layout: layout.njk
---

# account.ContentSettings

*Тип из схемы TL.*

> Sensitive content settings

## Определение TL

```
account.contentSettings#57e28221 flags:# sensitive_enabled:flags.0?true sensitive_can_change:flags.1?true = account.ContentSettings;

---functions---

account.getContentSettings#8b9b4dae = account.ContentSettings;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.contentSettings](/constructor/account.contentSettings/) | Sensitive content settings |

## Методы

| Method | Описание |
|---|---|
| [account.getContentSettings](/method/account.getContentSettings/) | Get sensitive content settings |
