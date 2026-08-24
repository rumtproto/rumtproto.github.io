---
title: "inputBotInlineMessageID"
original: "https://core.telegram.org/constructor/inputBotInlineMessageID"
section: ref
kind: constructor
description: "Представляет отправленное инлайн-сообщение с точки зрения бота (устаревший конструктор)"
layout: layout.njk
---

# inputBotInlineMessageID

Представляет отправленное инлайн-сообщение с точки зрения бота (устаревший конструктор)

```
inputBotInlineMessageID#890c3d89 dc_id:int id:long access_hash:long = InputBotInlineMessageID;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор DC, который следует использовать при работе с этим инлайн-сообщением</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор сообщения; содержит одновременно (32-битный, устаревший) идентификатор владельца и идентификатор сообщения, используется только для обратной совместимости с 32-битными идентификаторами пользователей в Bot API.</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] Хеш доступа сообщения</td></tr></tbody></table>

### Тип

[InputBotInlineMessageID](/type/InputBotInlineMessageID/)
