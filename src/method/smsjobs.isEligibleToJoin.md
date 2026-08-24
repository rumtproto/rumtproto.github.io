---
title: "smsjobs.isEligibleToJoin"
original: "https://core.telegram.org/method/smsjobs.isEligibleToJoin"
section: ref
kind: method
description: "Проверить, можем ли мы обрабатывать задания на отправку SMS (только для официальных клиентов)."
layout: layout.njk
---

# smsjobs.isEligibleToJoin

Проверить, можем ли мы обрабатывать задания на отправку SMS (только для официальных клиентов).

```
smsjobs.eligibleToJoin#dc8b44cf terms_url:string monthly_sent_sms:int = smsjobs.EligibilityToJoin;
---functions---
smsjobs.isEligibleToJoin#edc39d0 = smsjobs.EligibilityToJoin;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[smsjobs.EligibilityToJoin](/type/smsjobs.EligibilityToJoin/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>403</td><td>NOT_ELIGIBLE</td><td>Текущий пользователь не может присоединиться к Peer-to-Peer Login Program.</td></tr></tbody></table>
