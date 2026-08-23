---
title: "urlAuthResultAccepted (конструктор)"
original: "https://core.telegram.org/constructor/urlAuthResultAccepted"
section: ref
kind: constructor
layout: layout.njk
---

# urlAuthResultAccepted

*Конструктор из схемы TL.*

> Details about an accepted authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization)

## Определение TL

```
urlAuthResultAccepted#623a8fa0 flags:# url:flags.0?string = UrlAuthResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | If present, the URL to open in the external browser (may use a custom scheme for direct switching to another app); if absent, the login succeeded and clients should simply show a confirmation toast. Always set for [bot button URL authorization](https://core.telegram.org/api/url-authorization#bot-button-url-authorization) and [link URL authorization](https://core.telegram.org/api/url-authorization#link-url-authorization). |

## Тип

[UrlAuthResult](/type/UrlAuthResult/)

## Related pages

#### [Seamless Telegram Login](https://core.telegram.org/api/url-authorization)

Handle Seamless Telegram Login URL authorization requests.
