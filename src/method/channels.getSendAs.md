---
title: "channels.getSendAs"
original: "https://core.telegram.org/method/channels.getSendAs"
section: ref
kind: method
description: "Получает список пиров, которые могут отображаться в качестве отправителя в определённом контексте. С флагом for_live_stories возвращает пиров, которые могут быть авторами…"
layout: layout.njk
---

# channels.getSendAs

Получает список пиров, которые могут отображаться в качестве отправителя в определённом контексте. С флагом `for_live_stories` возвращает пиров, которые могут быть авторами [сообщений во время прямого эфира »](/api/group-calls/#in-call-messages).

```
channels.sendAsPeers#f496b0c6 peers:Vector<SendAsPeer> chats:Vector<Chat> users:Vector<User> = channels.SendAsPeers;
---functions---
channels.getSendAs#e785a43f flags:# for_paid_reactions:flags.0?true for_live_stories:flags.1?true peer:InputPeer = channels.SendAsPeers;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>for_paid_reactions</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, получает список пиров, от имени которых можно отправлять <a href="/api/reactions#paid-reactions">платные реакции</a> на сообщения определённого пира.</td></tr><tr><td><strong>for_live_stories</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Получить пиров, которых можно передать в <a href="/method/phone.sendGroupCallMessage">phone.sendGroupCallMessage</a>.<code>send_as</code>, чтобы комментировать <a href="/api/group-calls#in-call-messages">прямую историю »</a> или ставить в ней реакции.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Целевой пир; если установлен флаг <code>for_live_stories</code> — пир, которому принадлежит прямая история.</td></tr></tbody></table>

### Результат

[channels.SendAsPeers](/type/channels.SendAsPeers/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>Указанный идентификатор чата недействителен.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.

#### [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/)

Отправить сообщение внутри звонка всем участникам видеочата, трансляции или прямой истории, в том числе в режиме RTMP; подробнее см. [здесь »](/api/group-calls/#in-call-messages).

Поле `send_as` можно заполнять только для прямых историй, где оно необязательно задаёт отображаемого автора. Если оно не задано, сервер выбирает подходящего автора автоматически. Не заполняйте его для видеочатов и трансляций.

Видеочаты, трансляции и прямые истории поддерживают [анимированные эмодзи-реакции »](/api/group-calls/#in-call-reactions), закодированные как сообщения, содержащие только стандартный доступный эмодзи реакции или одну сущность пользовательского эмодзи.

Для платного комментария к прямой истории передайте подтверждённую пользователем сумму пожертвования в `allow_paid_stars`. Для всех комментаторов, кроме владельца прямой истории, эта сумма должна быть не меньше текущего минимума, заданного в [groupCall](/constructor/groupCall/).`send_paid_messages_stars`. Чтобы выделить комментарий, можно пожертвовать большую сумму. Владелец прямой истории может комментировать, не заполняя `allow_paid_stars`. Чтобы отправить отдельное платное пожертвование прямой истории, передайте положительное значение `allow_paid_stars` и пустое поле `message`; полный порядок действий см. [здесь »](/api/group-calls/#paid-live-story-donations).

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
