---
title: "paidReactionPrivacyPeer"
original: "https://core.telegram.org/constructor/paidReactionPrivacyPeer"
section: ref
kind: constructor
description: "Отправлять платные реакции от имени указанного пира, полученного с помощью channels.getSendAs с установленным флагом for_paid_reactions."
layout: layout.njk
---

# paidReactionPrivacyPeer

Отправлять платные реакции от имени указанного пира, полученного с помощью [channels.getSendAs](/method/channels.getSendAs/) с установленным флагом `for_paid_reactions`.

```
paidReactionPrivacyPeer#dc6cfcf0 peer:InputPeer = PaidReactionPrivacy;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, от имени которого отправляются реакции.</td></tr></tbody></table>

### Тип

[PaidReactionPrivacy](/type/PaidReactionPrivacy/)

### Связанные страницы

#### [channels.getSendAs](/method/channels.getSendAs/)

Получает список пиров, которые могут отображаться в качестве отправителя в определённом контексте. С флагом `for_live_stories` возвращает пиров, которые могут быть авторами [сообщений во время прямого эфира »](/api/group-calls/#in-call-messages).
