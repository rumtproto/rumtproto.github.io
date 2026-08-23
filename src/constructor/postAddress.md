---
title: "postAddress (конструктор)"
original: "https://core.telegram.org/constructor/postAddress"
section: ref
kind: constructor
layout: layout.njk
---

# postAddress

*Конструктор из схемы TL.*

> Shipping address

## Определение TL

```
postAddress#1e8caaeb street_line1:string street_line2:string city:string state:string country_iso2:string post_code:string = PostAddress;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| street_line1 | [string](/type/string/) | First line for the address |
| street_line2 | [string](/type/string/) | Second line for the address |
| city | [string](/type/string/) | City |
| state | [string](/type/string/) | State, if applicable (empty otherwise) |
| country_iso2 | [string](/type/string/) | ISO 3166-1 alpha-2 country code |
| post_code | [string](/type/string/) | Address post code |

## Тип

[PostAddress](/type/PostAddress/)
