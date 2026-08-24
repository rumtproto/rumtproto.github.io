---
title: "smsjobs.EligibilityToJoin"
original: "https://core.telegram.org/type/smsjobs.EligibilityToJoin"
section: ref
kind: type
description: "Допуск к SMS-заданиям"
layout: layout.njk
---

# smsjobs.EligibilityToJoin

Допуск к SMS-заданиям

```
smsjobs.eligibleToJoin#dc8b44cf terms_url:string monthly_sent_sms:int = smsjobs.EligibilityToJoin;

---functions---

smsjobs.isEligibleToJoin#edc39d0 = smsjobs.EligibilityToJoin;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/smsjobs.eligibleToJoin">smsjobs.eligibleToJoin</a></td><td>Допуск к SMS-заданиям</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/smsjobs.isEligibleToJoin">smsjobs.isEligibleToJoin</a></td><td>Проверить, можем ли мы обрабатывать задания на отправку SMS (только для официальных клиентов).</td></tr></tbody></table>
