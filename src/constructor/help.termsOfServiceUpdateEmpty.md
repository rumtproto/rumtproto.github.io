---
title: "help.termsOfServiceUpdateEmpty (конструктор)"
original: "https://core.telegram.org/constructor/help.termsOfServiceUpdateEmpty"
section: ref
kind: constructor
layout: layout.njk
---

# help.termsOfServiceUpdateEmpty

*Конструктор из схемы TL.*

> No changes were made to telegram's terms of service

## Определение TL

```
help.termsOfServiceUpdateEmpty#e3309f7f expires:int = help.TermsOfServiceUpdate;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| expires | [int](/type/int/) | New TOS updates will have to be queried using [help.getTermsOfServiceUpdate](/method/help.getTermsOfServiceUpdate/) in expires seconds |

## Тип

[help.TermsOfServiceUpdate](/type/help.TermsOfServiceUpdate/)

## Related pages

#### [help.getTermsOfServiceUpdate](/method/help.getTermsOfServiceUpdate/)

Look for updates of telegram's terms of service
