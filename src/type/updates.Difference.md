---
title: "updates.Difference"
original: "https://core.telegram.org/type/updates.Difference"
section: ref
kind: type
description: "Произошедшие изменения."
layout: layout.njk
---

# updates.Difference

Произошедшие изменения.

```
updates.differenceEmpty#5d75a138 date:int seq:int = updates.Difference;
updates.difference#f49ca0 new_messages:Vector<Message> new_encrypted_messages:Vector<EncryptedMessage> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> state:updates.State = updates.Difference;
updates.differenceSlice#a8fb1981 new_messages:Vector<Message> new_encrypted_messages:Vector<EncryptedMessage> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> intermediate_state:updates.State = updates.Difference;
updates.differenceTooLong#4afe8f6d pts:int = updates.Difference;

---functions---

updates.getDifference#19c2f763 flags:# pts:int pts_limit:flags.1?int pts_total_limit:flags.0?int date:int qts:int qts_limit:flags.2?int = updates.Difference;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/updates.differenceEmpty">updates.differenceEmpty</a></td><td>Событий нет.</td></tr><tr><td><a href="/constructor/updates.difference">updates.difference</a></td><td>Полный список произошедших событий.</td></tr><tr><td><a href="/constructor/updates.differenceSlice">updates.differenceSlice</a></td><td>Неполный список произошедших событий.</td></tr><tr><td><a href="/constructor/updates.differenceTooLong">updates.differenceTooLong</a></td><td>Разница <a href="/api/updates#recovering-gaps">слишком велика</a>, и для повторного получения обновлений следует использовать указанное состояние.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/updates.getDifference">updates.getDifference</a></td><td>Получить новые <a href="/api/updates">обновления</a>.</td></tr></tbody></table>
