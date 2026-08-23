---
title: "messages.summarizeText (метод)"
original: "https://core.telegram.org/method/messages.summarizeText"
section: ref
kind: method
layout: layout.njk
---

# messages.summarizeText

*Метод из схемы TL.*

> Summarize the contents of a message with AI, see [here »](https://core.telegram.org/api/ai#summarize-messages) for more info.
> Clients should use [message](/constructor/message/).`summary_from_language` as a hint for showing a summarization button; its absence does not forbid invoking this method.

## Определение TL

```
textWithEntities#751f3146 text:string entities:Vector<MessageEntity> = TextWithEntities;
---functions---
messages.summarizeText#9d4104e2 flags:# peer:InputPeer id:int to_lang:flags.0?string = TextWithEntities;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [InputPeer](/type/InputPeer/) | The peer where the message is located. |
| id | [int](/type/int/) | Message ID. |
| to_lang | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | If set, generates the summary in the specified target language (two-letter ISO 639-1 language code) instead of the message's language. |
| tone | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | If set, rephrases the summary using the specified [AI composer tone »](https://core.telegram.org/api/ai#ai-compose-tones) (pass the tone identifier) |

## Результат

[TextWithEntities](/type/TextWithEntities/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | INPUT_TEXT_TOO_LONG | The specified text is too long. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [AI features](https://core.telegram.org/api/ai)

Telegram offers many AI features powered by Cocoon — a decentralized network designed to maximize privacy.

#### [message](/constructor/message/)

A message
