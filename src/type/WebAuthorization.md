---
title: "WebAuthorization (тип)"
original: "https://core.telegram.org/type/WebAuthorization"
section: ref
kind: type
layout: layout.njk
---

# WebAuthorization

*Тип из схемы TL.*

> Web authorization

## Определение TL

```
webAuthorization#a6f8f452 hash:long bot_id:long domain:string browser:string platform:string date_created:int date_active:int ip:string region:string = WebAuthorization;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [webAuthorization](/constructor/webAuthorization/) | Represents a bot logged in using the [Telegram login widget](https://core.telegram.org/widgets/login) |
