---
title: "pendingSuggestion (конструктор)"
original: "https://core.telegram.org/constructor/pendingSuggestion"
section: ref
kind: constructor
layout: layout.njk
---

# pendingSuggestion

*Конструктор из схемы TL.*

> Represents a [custom pending suggestion »](https://core.telegram.org/api/config#custom-suggestions).

## Определение TL

```
pendingSuggestion#e7e82e12 suggestion:string title:TextWithEntities description:TextWithEntities url:string = PendingSuggestion;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| suggestion | [string](/type/string/) | The suggestion ID, can be passed to [help.dismissSuggestion](/method/help.dismissSuggestion/). |
| title | [TextWithEntities](/type/TextWithEntities/) | Title of the suggestion. |
| description | [TextWithEntities](/type/TextWithEntities/) | Body of the suggestion. |
| url | [string](/type/string/) | URL to open when the user clicks on the suggestion. |

## Тип

[PendingSuggestion](/type/PendingSuggestion/)

## Related pages

#### [help.dismissSuggestion](/method/help.dismissSuggestion/)

Dismiss a [suggestion, see here for more info »](https://core.telegram.org/api/config#suggestions).

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
