---
title: "account.getContentSettings (метод)"
original: "https://core.telegram.org/method/account.getContentSettings"
section: ref
kind: method
layout: layout.njk
---

# account.getContentSettings

*Метод из схемы TL.*

> Get sensitive content settings

## Определение TL

```
account.contentSettings#57e28221 flags:# sensitive_enabled:flags.0?true sensitive_can_change:flags.1?true = account.ContentSettings;
---functions---
account.getContentSettings#8b9b4dae = account.ContentSettings;
```

## Параметры

This constructor does not require any parameters.

## Результат

[account.ContentSettings](/type/account.ContentSettings/)

## Only users can use this method
