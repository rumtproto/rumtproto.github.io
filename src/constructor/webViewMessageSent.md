---
title: "webViewMessageSent (конструктор)"
original: "https://core.telegram.org/constructor/webViewMessageSent"
section: ref
kind: constructor
layout: layout.njk
---

# webViewMessageSent

*Конструктор из схемы TL.*

> Info about a sent inline webview message

## Определение TL

```
webViewMessageSent#c94511c flags:# msg_id:flags.0?InputBotInlineMessageID = WebViewMessageSent;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputBotInlineMessageID](/type/InputBotInlineMessageID/) | Message ID |

## Тип

[WebViewMessageSent](/type/WebViewMessageSent/)
