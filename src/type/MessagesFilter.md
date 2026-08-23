---
title: "MessagesFilter (тип)"
original: "https://core.telegram.org/type/MessagesFilter"
section: ref
kind: type
layout: layout.njk
---

# MessagesFilter

*Тип из схемы TL.*

> Object describes message filter.

## Определение TL

```
inputMessagesFilterEmpty#57e2f66c = MessagesFilter;
inputMessagesFilterPhotos#9609a51c = MessagesFilter;
inputMessagesFilterVideo#9fc00e65 = MessagesFilter;
inputMessagesFilterPhotoVideo#56e9f0e4 = MessagesFilter;
inputMessagesFilterDocument#9eddf188 = MessagesFilter;
inputMessagesFilterUrl#7ef0dd87 = MessagesFilter;
inputMessagesFilterGif#ffc86587 = MessagesFilter;
inputMessagesFilterVoice#50f5c392 = MessagesFilter;
inputMessagesFilterMusic#3751b49e = MessagesFilter;
inputMessagesFilterChatPhotos#3a20ecb8 = MessagesFilter;
inputMessagesFilterPhoneCalls#80c99768 flags:# missed:flags.0?true = MessagesFilter;
inputMessagesFilterRoundVoice#7a7c17a4 = MessagesFilter;
inputMessagesFilterRoundVideo#b549da53 = MessagesFilter;
inputMessagesFilterMyMentions#c1f8e69a = MessagesFilter;
inputMessagesFilterGeo#e7026d0d = MessagesFilter;
inputMessagesFilterContacts#e062db83 = MessagesFilter;
inputMessagesFilterPinned#1bb00451 = MessagesFilter;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputMessagesFilterEmpty](/constructor/inputMessagesFilterEmpty/) | Filter is absent. |
| [inputMessagesFilterPhotos](/constructor/inputMessagesFilterPhotos/) | Filter for messages containing photos. |
| [inputMessagesFilterVideo](/constructor/inputMessagesFilterVideo/) | Filter for messages containing videos. |
| [inputMessagesFilterPhotoVideo](/constructor/inputMessagesFilterPhotoVideo/) | Filter for messages containing photos or videos. |
| [inputMessagesFilterDocument](/constructor/inputMessagesFilterDocument/) | Filter for messages containing documents. |
| [inputMessagesFilterUrl](/constructor/inputMessagesFilterUrl/) | Return only messages containing URLs |
| [inputMessagesFilterGif](/constructor/inputMessagesFilterGif/) | Return only messages containing gifs |
| [inputMessagesFilterVoice](/constructor/inputMessagesFilterVoice/) | Return only messages containing voice notes |
| [inputMessagesFilterMusic](/constructor/inputMessagesFilterMusic/) | Return only messages containing audio files |
| [inputMessagesFilterChatPhotos](/constructor/inputMessagesFilterChatPhotos/) | Return only chat photo changes |
| [inputMessagesFilterPhoneCalls](/constructor/inputMessagesFilterPhoneCalls/) | Return only phone calls |
| [inputMessagesFilterRoundVoice](/constructor/inputMessagesFilterRoundVoice/) | Return only round videos and voice notes |
| [inputMessagesFilterRoundVideo](/constructor/inputMessagesFilterRoundVideo/) | Return only round videos |
| [inputMessagesFilterMyMentions](/constructor/inputMessagesFilterMyMentions/) | Return only messages where the current user was [mentioned](https://core.telegram.org/api/mentions). |
| [inputMessagesFilterGeo](/constructor/inputMessagesFilterGeo/) | Return only messages containing geolocations |
| [inputMessagesFilterContacts](/constructor/inputMessagesFilterContacts/) | Return only messages containing contacts |
| [inputMessagesFilterPinned](/constructor/inputMessagesFilterPinned/) | Fetch only pinned messages |
| [inputMessagesFilterPoll](https://core.telegram.org/constructor/inputMessagesFilterPoll) | Filter for poll messages, see [searching for polls »](https://core.telegram.org/api/poll#searching-for-polls) |
