---
title: "Help.TermsOfServiceUpdate (тип)"
original: "https://core.telegram.org/type/help.TermsOfServiceUpdate"
section: ref
kind: type
layout: layout.njk
---

# Help.TermsOfServiceUpdate

*Тип из схемы TL.*

> Update of Telegram's terms of service

## Определение TL

```
help.termsOfServiceUpdateEmpty#e3309f7f expires:int = help.TermsOfServiceUpdate;
help.termsOfServiceUpdate#28ecf961 expires:int terms_of_service:help.TermsOfService = help.TermsOfServiceUpdate;

---functions---

help.getTermsOfServiceUpdate#2ca51fd1 = help.TermsOfServiceUpdate;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [help.termsOfServiceUpdateEmpty](/constructor/help.termsOfServiceUpdateEmpty/) | No changes were made to telegram's terms of service |
| [help.termsOfServiceUpdate](/constructor/help.termsOfServiceUpdate/) | Info about an update of telegram's terms of service. If the terms of service are declined, then the [account.deleteAccount](/method/account.deleteAccount/) method should be called with the reason "Decline ToS update" |

## Методы

| Method | Описание |
|---|---|
| [help.getTermsOfServiceUpdate](/method/help.getTermsOfServiceUpdate/) | Look for updates of telegram's terms of service |
