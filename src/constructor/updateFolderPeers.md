---
title: "updateFolderPeers"
original: "https://core.telegram.org/constructor/updateFolderPeers"
section: ref
kind: constructor
description: "Обновлён список пиров в папке пиров"
layout: layout.njk
---

# updateFolderPeers

Обновлён список пиров в [папке пиров](/api/folders/#peer-folders)

```
updateFolderPeers#19360dc0 folder_peers:Vector<FolderPeer> pts:int pts_count:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>folder_peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/FolderPeer">FolderPeer</a>&gt;</td><td>Новый список пиров</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:pts] <a href="/api/updates">Число событий после генерации</a></td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/updates">Число сгенерированных событий</a></td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Папки диалогов](/api/folders/)

Telegram позволяет раскладывать чаты по папкам в зависимости от их типа, состояния уведомлений или других произвольных критериев — благодаря чёрным и белым спискам папок.
