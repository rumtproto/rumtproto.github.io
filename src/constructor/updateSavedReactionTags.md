---
title: "updateSavedReactionTags (конструктор)"
original: "https://core.telegram.org/constructor/updateSavedReactionTags"
section: ref
kind: constructor
layout: layout.njk
---

# updateSavedReactionTags

*Конструктор из схемы TL.*

> The list of [reaction tag »](https://core.telegram.org/api/saved-messages#tags) names assigned by the user has changed and should be refetched using [messages.getSavedReactionTags »](/method/messages.getSavedReactionTags/).

## Определение TL

```
updateSavedReactionTags#39c67432 = Update;
```

## Параметры

This constructor does not require any parameters.

## Тип

[Update](/type/Update/)

## Related pages

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.

#### [messages.getSavedReactionTags](/method/messages.getSavedReactionTags/)

Fetch the full list of [saved message tags](https://core.telegram.org/api/saved-messages#tags) created by the user.
