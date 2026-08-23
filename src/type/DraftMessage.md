---
title: "DraftMessage (тип)"
original: "https://core.telegram.org/type/DraftMessage"
section: ref
kind: type
layout: layout.njk
---

# DraftMessage

*Тип из схемы TL.*

> Represents a message [draft](https://core.telegram.org/api/drafts).

## Определение TL

```
draftMessageEmpty#1b0c841a flags:# date:flags.0?int = DraftMessage;
draftMessage#96eaa5eb flags:# no_webpage:flags.1?true invert_media:flags.6?true reply_to:flags.4?InputReplyTo message:string entities:flags.3?Vector<MessageEntity> media:flags.5?InputMedia date:int effect:flags.7?long suggested_post:flags.8?SuggestedPost = DraftMessage;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [draftMessageEmpty](/constructor/draftMessageEmpty/) | Empty draft |
| [draftMessage](/constructor/draftMessage/) | Represents a message [draft](https://core.telegram.org/api/drafts). |

## Related pages

#### [Message drafts](https://core.telegram.org/api/drafts)

How to handle message drafts
