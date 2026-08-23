---
title: "messages.translateText (метод)"
original: "https://core.telegram.org/method/messages.translateText"
section: ref
kind: method
layout: layout.njk
---

# messages.translateText

*Метод из схемы TL.*

> Translate a given text.
> [Styled text entities](https://core.telegram.org/api/entities) will only be preserved for [Telegram Premium](https://core.telegram.org/api/premium) users.

## Определение TL

```
messages.translateResult#33db32f8 result:Vector<TextWithEntities> = messages.TranslatedText;
---functions---
messages.translateText#63183030 flags:# peer:flags.0?InputPeer id:flags.0?Vector<int> text:flags.1?Vector<TextWithEntities> to_lang:string = messages.TranslatedText;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputPeer](/type/InputPeer/) | If the text is a chat message, the peer ID |
| id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | A list of message IDs to translate |
| text | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[TextWithEntities](/type/TextWithEntities/)> | A list of styled messages to translate |
| to_lang | [string](/type/string/) | Two-letter ISO 639-1 language code of the language to which the message is translated |
| tone | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | If set, rephrases the translation using the specified [AI composer tone »](https://core.telegram.org/api/ai#ai-compose-tones) (pass the tone identifier) |

## Результат

[messages.TranslatedText](/type/messages.TranslatedText/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | INPUT_TEXT_EMPTY | The specified text is empty. |
| 400 | INPUT_TEXT_TOO_LONG | The specified text is too long. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | TO_LANG_INVALID | The specified destination language is invalid. |
| 500 | TRANSLATE_REQ_FAILED | Translation failed, please try again later. |
| 400 | TRANSLATE_REQ_QUOTA_EXCEEDED | Translation is currently unavailable due to a temporary server-side lack of resources. |
| 406 | TRANSLATIONS_DISABLED | Translations are unavailable, a detailed and localized description for the error will be emitted via an [updateServiceNotification as specified here »](https://core.telegram.org/api/errors/#406-not-acceptable). |
| 500 | TRANSLATION_TIMEOUT | A timeout occurred while translating the specified text. |

## Related pages

#### [AI features](https://core.telegram.org/api/ai)

Telegram offers many AI features powered by Cocoon — a decentralized network designed to maximize privacy.

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Error handling](/api/errors/)

How to handle API return errors correctly.
