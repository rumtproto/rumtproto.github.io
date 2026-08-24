---
title: "phone.getGroupCallJoinAs"
original: "https://core.telegram.org/method/phone.getGroupCallJoinAs"
section: ref
kind: method
description: "Получить список пиров, от имени которых можно присоединиться к видеочату или трансляции », представившись определённым пользователем или каналом."
layout: layout.njk
---

# phone.getGroupCallJoinAs

Получить список пиров, от имени которых можно присоединиться к [видеочату или трансляции »](/api/group-calls/#joining-a-group-call-on-behalf-of-owned-channels), представившись определённым пользователем или каналом.

Этот метод нельзя использовать для прямых историй и конференций. Чтобы комментировать прямую историю или ставить в ней реакции от имени другого пира, вызовите [channels.getSendAs](/method/channels.getSendAs/) с установленным `for_live_stories` и передайте один из возвращённых пиров в [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/).`send_as`.

```
phone.joinAsPeers#afe5623f peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = phone.JoinAsPeers;
---functions---
phone.getGroupCallJoinAs#ef7c213a peer:InputPeer = phone.JoinAsPeers;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Обычная группа, супергруппа или канал, к видеочату или трансляции которых мы пытаемся присоединиться; не может указывать на прямой эфир в историях.</td></tr></tbody></table>

### Результат

[phone.JoinAsPeers](/type/phone.JoinAsPeers/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.

#### [channels.getSendAs](/method/channels.getSendAs/)

Получает список пиров, которые могут отображаться в качестве отправителя в определённом контексте. С флагом `for_live_stories` возвращает пиров, которые могут быть авторами [сообщений во время прямого эфира »](/api/group-calls/#in-call-messages).

#### [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/)

Отправить сообщение внутри звонка всем участникам видеочата, трансляции или прямой истории, в том числе в режиме RTMP; подробнее см. [здесь »](/api/group-calls/#in-call-messages).

Поле `send_as` можно заполнять только для прямых историй, где оно необязательно задаёт отображаемого автора. Если оно не задано, сервер выбирает подходящего автора автоматически. Не заполняйте его для видеочатов и трансляций.

Видеочаты, трансляции и прямые истории поддерживают [анимированные эмодзи-реакции »](/api/group-calls/#in-call-reactions), закодированные как сообщения, содержащие только стандартный доступный эмодзи реакции или одну сущность пользовательского эмодзи.

Для платного комментария к прямой истории передайте подтверждённую пользователем сумму пожертвования в `allow_paid_stars`. Для всех комментаторов, кроме владельца прямой истории, эта сумма должна быть не меньше текущего минимума, заданного в [groupCall](/constructor/groupCall/).`send_paid_messages_stars`. Чтобы выделить комментарий, можно пожертвовать большую сумму. Владелец прямой истории может комментировать, не заполняя `allow_paid_stars`. Чтобы отправить отдельное платное пожертвование прямой истории, передайте положительное значение `allow_paid_stars` и пустое поле `message`; полный порядок действий см. [здесь »](/api/group-calls/#paid-live-story-donations).
