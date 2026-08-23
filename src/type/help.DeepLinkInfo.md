---
title: "Help.DeepLinkInfo (тип)"
original: "https://core.telegram.org/type/help.DeepLinkInfo"
section: ref
kind: type
layout: layout.njk
---

# Help.DeepLinkInfo

*Тип из схемы TL.*

> Contains information about an unsupported [deep link »](https://core.telegram.org/api/links#unsupported-links)

## Определение TL

```
help.deepLinkInfoEmpty#66afa166 = help.DeepLinkInfo;
help.deepLinkInfo#6a4ee832 flags:# update_app:flags.0?true message:string entities:flags.1?Vector<MessageEntity> = help.DeepLinkInfo;

---functions---

help.getDeepLinkInfo#3fedc75f path:string = help.DeepLinkInfo;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [help.deepLinkInfoEmpty](/constructor/help.deepLinkInfoEmpty/) | Deep link info empty |
| [help.deepLinkInfo](/constructor/help.deepLinkInfo/) | Deep link info, see [the here for more details](https://core.telegram.org/api/links#unsupported-links) |

## Методы

| Method | Описание |
|---|---|
| [help.getDeepLinkInfo](/method/help.getDeepLinkInfo/) | Get info about an unsupported deep link, see [here for more info »](https://core.telegram.org/api/links#unsupported-links). |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
