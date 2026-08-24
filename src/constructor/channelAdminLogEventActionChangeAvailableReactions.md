---
title: "channelAdminLogEventActionChangeAvailableReactions"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionChangeAvailableReactions"
section: ref
kind: constructor
description: "Набор разрешённых реакций на сообщения » для этого канала изменился"
layout: layout.njk
---

# channelAdminLogEventActionChangeAvailableReactions

Набор разрешённых [реакций на сообщения »](/api/reactions/) для этого канала изменился

```
channelAdminLogEventActionChangeAvailableReactions#be4e0ef8 prev_value:ChatReactions new_value:ChatReactions = ChannelAdminLogEventAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>prev_value</strong></td><td style="text-align: center;"><a href="/type/ChatReactions">ChatReactions</a></td><td>Ранее разрешённые эмодзи-реакции</td></tr><tr><td><strong>new_value</strong></td><td style="text-align: center;"><a href="/type/ChatReactions">ChatReactions</a></td><td>Новые разрешённые эмодзи реакций</td></tr></tbody></table>

### Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

### Связанные страницы

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.
