---
title: "help.termsOfServiceUpdate (конструктор)"
original: "https://core.telegram.org/constructor/help.termsOfServiceUpdate"
section: ref
kind: constructor
layout: layout.njk
---

# help.termsOfServiceUpdate

*Конструктор из схемы TL.*

> Info about an update of telegram's terms of service. If the terms of service are declined, then the [account.deleteAccount](/method/account.deleteAccount/) method should be called with the reason "Decline ToS update"

## Определение TL

```
help.termsOfServiceUpdate#28ecf961 expires:int terms_of_service:help.TermsOfService = help.TermsOfServiceUpdate;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| expires | [int](/type/int/) | New TOS updates will have to be queried using [help.getTermsOfServiceUpdate](/method/help.getTermsOfServiceUpdate/) in expires seconds |
| terms_of_service | [help.TermsOfService](/type/help.TermsOfService/) | New terms of service |

## Тип

[help.TermsOfServiceUpdate](/type/help.TermsOfServiceUpdate/)

## Related pages

#### [help.getTermsOfServiceUpdate](/method/help.getTermsOfServiceUpdate/)

Look for updates of telegram's terms of service

#### [account.deleteAccount](/method/account.deleteAccount/)

Delete the user's account from the telegram servers.

Can also be used to delete the account of a user that provided the login code, but forgot the 2FA password and no recovery method is configured, see [here »](https://core.telegram.org/api/srp/#password-recovery) for more info on password recovery, and [here »](https://core.telegram.org/api/account-deletion) for more info on account deletion.
