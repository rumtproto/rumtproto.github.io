---
title: "channelAdminLogEventActionToggleSlowMode"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionToggleSlowMode"
section: ref
kind: constructor
description: "Изменена настройка медленного режима для супергрупп"
layout: layout.njk
---

# channelAdminLogEventActionToggleSlowMode

[Изменена настройка медленного режима для супергрупп](/method/channels.toggleSlowMode/)

```
channelAdminLogEventActionToggleSlowMode#53909779 prev_value:int new_value:int = ChannelAdminLogEventAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>prev_value</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Предыдущее значение медленного режима</td></tr><tr><td><strong>new_value</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Новое значение медленного режима</td></tr></tbody></table>

### Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

### Связанные страницы

#### [channels.toggleSlowMode](/method/channels.toggleSlowMode/)

Переключить медленный режим в супергруппе: если он включён, пользователи смогут отправлять только одно сообщение каждые `seconds` секунд
