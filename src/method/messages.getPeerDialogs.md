---
title: "messages.getPeerDialogs"
original: "https://core.telegram.org/method/messages.getPeerDialogs"
section: ref
kind: method
description: "Получить сведения о диалогах указанных пиров"
layout: layout.njk
---

# messages.getPeerDialogs

Получить сведения о диалогах указанных пиров

```
messages.peerDialogs#3371c354 dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> state:updates.State = messages.PeerDialogs;
---functions---
messages.getPeerDialogs#e470bcfd peers:Vector<InputDialogPeer> = messages.PeerDialogs;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputDialogPeer">InputDialogPeer</a>&gt;</td><td>Пиры</td></tr></tbody></table>

### Результат

[messages.PeerDialogs](/type/messages.PeerDialogs/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>FROZEN_PARTICIPANT_MISSING</td><td>Текущий аккаунт <a href="/api/auth#frozen-accounts">заморожен</a> и не может обращаться к указанному пиру.</td></tr><tr><td>400</td><td>INPUT_PEERS_EMPTY</td><td>Указанный массив пиров пуст.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.
