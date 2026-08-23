---
title: "webAuthorization (конструктор)"
original: "https://core.telegram.org/constructor/webAuthorization"
section: ref
kind: constructor
layout: layout.njk
---

# webAuthorization

*Конструктор из схемы TL.*

> Represents a bot logged in using the [Telegram login widget](https://core.telegram.org/widgets/login)

## Определение TL

```
webAuthorization#a6f8f452 hash:long bot_id:long domain:string browser:string platform:string date_created:int date_active:int ip:string region:string = WebAuthorization;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | Authorization hash |
| bot_id | [long](/type/long/) | Bot ID |
| domain | [string](/type/string/) | The domain name of the website on which the user has logged in. |
| browser | [string](/type/string/) | Browser user-agent |
| platform | [string](/type/string/) | Platform |
| date_created | [int](/type/int/) | When was the web session created |
| date_active | [int](/type/int/) | When was the web session last active |
| ip | [string](/type/string/) | IP address |
| region | [string](/type/string/) | Region, determined from IP address |

## Тип

[WebAuthorization](/type/WebAuthorization/)

## Related pages

#### [Telegram Login Widget](https://core.telegram.org/widgets/login)
