---
title: "account.autoSaveSettings"
original: "https://core.telegram.org/constructor/account.autoSaveSettings"
section: ref
kind: constructor
description: "Содержит настройки автосохранения медиафайлов"
layout: layout.njk
---

# account.autoSaveSettings

Содержит настройки автосохранения медиафайлов

```
account.autoSaveSettings#4c3e069d users_settings:AutoSaveSettings chats_settings:AutoSaveSettings broadcasts_settings:AutoSaveSettings exceptions:Vector<AutoSaveException> chats:Vector<Chat> users:Vector<User> = account.AutoSaveSettings;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>users_settings</strong></td><td style="text-align: center;"><a href="/type/AutoSaveSettings">AutoSaveSettings</a></td><td>Настройки автосохранения медиафайлов по умолчанию для личных чатов</td></tr><tr><td><strong>chats_settings</strong></td><td style="text-align: center;"><a href="/type/AutoSaveSettings">AutoSaveSettings</a></td><td>Настройки автосохранения медиафайлов по умолчанию для <a href="/api/channel">групп и супергрупп</a></td></tr><tr><td><strong>broadcasts_settings</strong></td><td style="text-align: center;"><a href="/type/AutoSaveSettings">AutoSaveSettings</a></td><td>Настройки автосохранения медиафайлов по умолчанию для <a href="/api/channel">каналов</a></td></tr><tr><td><strong>exceptions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/AutoSaveException">AutoSaveException</a>&gt;</td><td>Детальные настройки автосохранения для конкретного пира</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Чаты, упомянутые в настройках автосохранения для отдельных пиров</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Пользователи, упомянутые в детальных настройках автосохранения для отдельных пиров</td></tr></tbody></table>

### Тип

[account.AutoSaveSettings](/type/account.AutoSaveSettings/)

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
