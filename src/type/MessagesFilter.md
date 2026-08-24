---
title: "MessagesFilter"
original: "https://core.telegram.org/type/MessagesFilter"
section: ref
kind: type
description: "Объект описывает фильтр сообщений."
layout: layout.njk
---

# MessagesFilter

Объект описывает фильтр сообщений.

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

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputMessagesFilterEmpty">inputMessagesFilterEmpty</a></td><td>Фильтр отсутствует.</td></tr><tr><td><a href="/constructor/inputMessagesFilterPhotos">inputMessagesFilterPhotos</a></td><td>Фильтр для сообщений, содержащих фотографии.</td></tr><tr><td><a href="/constructor/inputMessagesFilterVideo">inputMessagesFilterVideo</a></td><td>Фильтр для сообщений, содержащих видео.</td></tr><tr><td><a href="/constructor/inputMessagesFilterPhotoVideo">inputMessagesFilterPhotoVideo</a></td><td>Фильтр для сообщений, содержащих фотографии или видео.</td></tr><tr><td><a href="/constructor/inputMessagesFilterDocument">inputMessagesFilterDocument</a></td><td>Фильтр для сообщений, содержащих документы.</td></tr><tr><td><a href="/constructor/inputMessagesFilterUrl">inputMessagesFilterUrl</a></td><td>Возвращать только сообщения со ссылками</td></tr><tr><td><a href="/constructor/inputMessagesFilterGif">inputMessagesFilterGif</a></td><td>Возвращать только сообщения с GIF</td></tr><tr><td><a href="/constructor/inputMessagesFilterVoice">inputMessagesFilterVoice</a></td><td>Возвращать только сообщения с голосовыми сообщениями</td></tr><tr><td><a href="/constructor/inputMessagesFilterMusic">inputMessagesFilterMusic</a></td><td>Возвращать только сообщения с аудиофайлами</td></tr><tr><td><a href="/constructor/inputMessagesFilterChatPhotos">inputMessagesFilterChatPhotos</a></td><td>Возвращать только изменения фотографии чата</td></tr><tr><td><a href="/constructor/inputMessagesFilterPhoneCalls">inputMessagesFilterPhoneCalls</a></td><td>Возвращать только телефонные звонки</td></tr><tr><td><a href="/constructor/inputMessagesFilterRoundVoice">inputMessagesFilterRoundVoice</a></td><td>Возвращать только видеосообщения и голосовые сообщения</td></tr><tr><td><a href="/constructor/inputMessagesFilterRoundVideo">inputMessagesFilterRoundVideo</a></td><td>Возвращать только видеосообщения</td></tr><tr><td><a href="/constructor/inputMessagesFilterMyMentions">inputMessagesFilterMyMentions</a></td><td>Возвращать только сообщения, в которых <a href="/api/mentions">упомянут</a> текущий пользователь.</td></tr><tr><td><a href="/constructor/inputMessagesFilterGeo">inputMessagesFilterGeo</a></td><td>Возвращать только сообщения с геолокациями</td></tr><tr><td><a href="/constructor/inputMessagesFilterContacts">inputMessagesFilterContacts</a></td><td>Возвращать только сообщения с контактами</td></tr><tr><td><a href="/constructor/inputMessagesFilterPinned">inputMessagesFilterPinned</a></td><td>Получить только закреплённые сообщения</td></tr><tr><td><a href="/constructor/inputMessagesFilterPoll">inputMessagesFilterPoll</a></td><td>Фильтр для сообщений с опросами, см. <a href="/api/poll#searching-for-polls">поиск опросов »</a></td></tr></tbody></table>
