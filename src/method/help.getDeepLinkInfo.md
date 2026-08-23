---
title: "help.getDeepLinkInfo (метод)"
original: "https://core.telegram.org/method/help.getDeepLinkInfo"
section: ref
kind: method
layout: layout.njk
---

# help.getDeepLinkInfo

*Метод из схемы TL.*

> Get info about an unsupported deep link, see [here for more info »](https://core.telegram.org/api/links#unsupported-links).

## Определение TL

```
help.deepLinkInfoEmpty#66afa166 = help.DeepLinkInfo;
help.deepLinkInfo#6a4ee832 flags:# update_app:flags.0?true message:string entities:flags.1?Vector<MessageEntity> = help.DeepLinkInfo;
---functions---
help.getDeepLinkInfo#3fedc75f path:string = help.DeepLinkInfo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| path | [string](/type/string/) | Path component of a tg: link |

## Результат

[help.DeepLinkInfo](/type/help.DeepLinkInfo/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
