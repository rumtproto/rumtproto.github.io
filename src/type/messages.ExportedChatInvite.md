---
title: "messages.ExportedChatInvite"
original: "https://core.telegram.org/type/messages.ExportedChatInvite"
section: ref
kind: type
description: "Содержит информацию о приглашении в чат и, возможно, указатель на самое новое приглашение в чат."
layout: layout.njk
---

# messages.ExportedChatInvite

Содержит информацию о приглашении в чат и, возможно, указатель на самое новое приглашение в чат.

```
messages.exportedChatInvite#1871be50 invite:ExportedChatInvite users:Vector<User> = messages.ExportedChatInvite;
messages.exportedChatInviteReplaced#222600ef invite:ExportedChatInvite new_invite:ExportedChatInvite users:Vector<User> = messages.ExportedChatInvite;

---functions---

messages.getExportedChatInvite#73746f5c peer:InputPeer link:string = messages.ExportedChatInvite;
messages.editExportedChatInvite#bdca2f75 flags:# revoked:flags.2?true peer:InputPeer link:string expire_date:flags.0?int usage_limit:flags.1?int request_needed:flags.3?Bool title:flags.4?string = messages.ExportedChatInvite;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.exportedChatInvite">messages.exportedChatInvite</a></td><td>Информация о приглашении в чат</td></tr><tr><td><a href="/constructor/messages.exportedChatInviteReplaced">messages.exportedChatInviteReplaced</a></td><td>Указанная пригласительная ссылка на чат была заменена другой</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getExportedChatInvite">messages.getExportedChatInvite</a></td><td>Получить информацию о приглашении в чат</td></tr><tr><td><a href="/method/messages.editExportedChatInvite">messages.editExportedChatInvite</a></td><td>Изменить экспортированное приглашение в чат</td></tr></tbody></table>
