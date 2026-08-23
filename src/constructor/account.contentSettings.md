---
title: "account.contentSettings (конструктор)"
original: "https://core.telegram.org/constructor/account.contentSettings"
section: ref
kind: constructor
layout: layout.njk
---

# account.contentSettings

*Конструктор из схемы TL.*

> Sensitive content settings

## Определение TL

```
account.contentSettings#57e28221 flags:# sensitive_enabled:flags.0?true sensitive_can_change:flags.1?true = account.ContentSettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| sensitive_enabled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether viewing of sensitive (NSFW) content is enabled |
| sensitive_can_change | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the current client can change the sensitive content settings to view NSFW content |

## Тип

[account.ContentSettings](/type/account.ContentSettings/)
