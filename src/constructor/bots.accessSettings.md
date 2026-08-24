---
title: "bots.accessSettings"
original: "https://core.telegram.org/constructor/bots.accessSettings"
section: ref
kind: constructor
description: "Настройки ограничения доступа для управляемого бота »."
layout: layout.njk
---

# bots.accessSettings

Настройки ограничения доступа для [управляемого бота »](/api/bots/managed-bots/#managing-a-managed-bot).

```
Constructor schema is available as of layer 225. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>restricted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, доступ к управляемому боту есть только у владельца и у пользователей из <code>add_users</code></td></tr><tr><td><strong>add_users</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Дополнительные пользователи (не более 10, не считая владельца), которые могут получить доступ к управляемому боту; присутствует, только когда установлен флаг <code>restricted</code></td></tr></tbody></table>

### Тип

[bots.AccessSettings](/type/bots.AccessSettings/)

### Связанные страницы

#### [Управляемые боты](/api/bots/managed-bots/)

Пользователи могут создавать **управляемых** ботов (которыми управляет определённый бот-менеджер) прямо через MTProto API, не обращаясь к [@BotFather](https://t.me/botfather).
