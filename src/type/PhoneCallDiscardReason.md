---
title: "PhoneCallDiscardReason"
original: "https://core.telegram.org/type/PhoneCallDiscardReason"
section: ref
kind: type
description: "Почему звонок был завершён?"
layout: layout.njk
---

# PhoneCallDiscardReason

Почему звонок был завершён?

```
phoneCallDiscardReasonMissed#85e42301 = PhoneCallDiscardReason;
phoneCallDiscardReasonDisconnect#e095c1a0 = PhoneCallDiscardReason;
phoneCallDiscardReasonHangup#57adc690 = PhoneCallDiscardReason;
phoneCallDiscardReasonBusy#faf7e8c9 = PhoneCallDiscardReason;
phoneCallDiscardReasonMigrateConferenceCall#9fbbf1f7 slug:string = PhoneCallDiscardReason;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/phoneCallDiscardReasonMissed">phoneCallDiscardReasonMissed</a></td><td>Звонок был пропущен; подробнее см. <a href="/api/calls">здесь »</a>.</td></tr><tr><td><a href="/constructor/phoneCallDiscardReasonDisconnect">phoneCallDiscardReasonDisconnect</a></td><td>Звонок был разорван; подробнее см. <a href="/api/calls">здесь »</a>.</td></tr><tr><td><a href="/constructor/phoneCallDiscardReasonHangup">phoneCallDiscardReasonHangup</a></td><td>Звонок завершился штатно; подробнее см. <a href="/api/calls">здесь »</a>.</td></tr><tr><td><a href="/constructor/phoneCallDiscardReasonBusy">phoneCallDiscardReasonBusy</a></td><td>Звонок был отклонён, потому что пользователь занят другим звонком; подробнее см. <a href="/api/calls">здесь »</a>.</td></tr><tr><td><a href="/constructor/phoneCallDiscardReasonMigrateConferenceCall">phoneCallDiscardReasonMigrateConferenceCall</a></td><td>Этот звонок был переведён в <a href="/api/end-to-end/group-calls">конференц-звонок</a>.</td></tr></tbody></table>
