---
title: "inlineBotWebView (конструктор)"
original: "https://core.telegram.org/constructor/inlineBotWebView"
section: ref
kind: constructor
layout: layout.njk
---

# inlineBotWebView

*Конструктор из схемы TL.*

> Specifies an [inline mode mini app](https://core.telegram.org/api/bots/webapps#inline-mode-mini-apps) button, shown on top of the inline query results list.

## Определение TL

```
inlineBotWebView#b57295d5 text:string url:string = InlineBotWebView;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| text | [string](/type/string/) | Text of the button |
| url | [string](/type/string/) | Webapp URL |

## Тип

[InlineBotWebView](/type/InlineBotWebView/)

## Related pages

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.
