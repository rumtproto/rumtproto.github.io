---
title: "updates.ChannelDifference"
original: "https://core.telegram.org/type/updates.ChannelDifference"
section: ref
kind: type
description: "Содержит разницу (новые сообщения) между нашим локальным состоянием канала и состоянием на сервере"
layout: layout.njk
---

# updates.ChannelDifference

Содержит разницу (новые сообщения) между нашим локальным состоянием канала и состоянием на сервере

```
updates.channelDifferenceEmpty#3e11affb flags:# final:flags.0?true pts:int timeout:flags.1?int = updates.ChannelDifference;
updates.channelDifferenceTooLong#a4bcc6fe flags:# final:flags.0?true timeout:flags.1?int dialog:Dialog messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = updates.ChannelDifference;
updates.channelDifference#2064674e flags:# final:flags.0?true pts:int timeout:flags.1?int new_messages:Vector<Message> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> = updates.ChannelDifference;

---functions---

updates.getChannelDifference#3173d78 flags:# force:flags.0?true channel:InputChannel filter:ChannelMessagesFilter pts:int limit:int = updates.ChannelDifference;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/updates.channelDifferenceEmpty">updates.channelDifferenceEmpty</a></td><td>Новых обновлений нет</td></tr><tr><td><a href="/constructor/updates.channelDifferenceTooLong">updates.channelDifferenceTooLong</a></td><td>[@term:pts] Переданное значение <code>pts</code> слишком старое: одно или несколько обновлений, начиная с указанного PTS, были удалены из ящика сообщений этого канала.<br><br>Для супергрупп и каналов это обычно происходит с обновлениями старше <code>latestPts - 100000</code> (однако не полагайтесь на это значение: это деталь серверной реализации, которая может измениться, и клиентам не следует использовать её никаким образом).</td></tr><tr><td><a href="/constructor/updates.channelDifference">updates.channelDifference</a></td><td>Новые обновления</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/updates.getChannelDifference">updates.getChannelDifference</a></td><td>Возвращает разницу между текущим состоянием обновлений определённого канала и переданным состоянием.</td></tr></tbody></table>
