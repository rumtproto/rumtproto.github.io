---
title: "phone.groupParticipants"
original: "https://core.telegram.org/constructor/phone.groupParticipants"
section: ref
kind: constructor
description: "Содержит страницу списка участников группового звонка, см. получение сведений о групповом звонке »."
layout: layout.njk
---

# phone.groupParticipants

Содержит страницу списка участников группового звонка, см. [получение сведений о групповом звонке »](/api/group-calls/#getting-info-about-a-group-call).

```
phone.groupParticipants#f47751b6 count:int participants:Vector<GroupCallParticipant> next_offset:string chats:Vector<Chat> users:Vector<User> version:int = phone.GroupParticipants;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество участников</td></tr><tr><td><strong>participants</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/GroupCallParticipant">GroupCallParticipant</a>&gt;</td><td>Список участников</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:next_offset] Если поле не пусто, указанный список участников неполон, и остальных участников можно получить, передав это значение как <code>offset</code> в <a href="/method/phone.getGroupParticipants">phone.getGroupParticipants</a>.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Упомянутые чаты</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Упомянутые пользователи</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Текущая версия списка участников, используемая для применения и обнаружения пропусков в версионируемых обновлениях <a href="/constructor/updateGroupCallParticipants">updateGroupCallParticipants</a></td></tr></tbody></table>

### Тип

[phone.GroupParticipants](/type/phone.GroupParticipants/)

### Связанные страницы

#### [phone.getGroupParticipants](/method/phone.getGroupParticipants/)

Получить участников [группового звонка](/api/group-calls/#getting-info-about-a-group-call).

#### [updateGroupCallParticipants](/constructor/updateGroupCallParticipants/)

Изменился список участников [группового звонка](/api/group-calls/#applying-group-call-updates).

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
