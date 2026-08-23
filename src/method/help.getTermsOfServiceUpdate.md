---
title: "help.getTermsOfServiceUpdate (метод)"
original: "https://core.telegram.org/method/help.getTermsOfServiceUpdate"
section: ref
kind: method
layout: layout.njk
---

# help.getTermsOfServiceUpdate

*Метод из схемы TL.*

> Look for updates of telegram's terms of service

## Определение TL

```
help.termsOfServiceUpdateEmpty#e3309f7f expires:int = help.TermsOfServiceUpdate;
help.termsOfServiceUpdate#28ecf961 expires:int terms_of_service:help.TermsOfService = help.TermsOfServiceUpdate;
---functions---
help.getTermsOfServiceUpdate#2ca51fd1 = help.TermsOfServiceUpdate;
```

## Параметры

This constructor does not require any parameters.

## Результат

[help.TermsOfServiceUpdate](/type/help.TermsOfServiceUpdate/)

## Only users can use this method
