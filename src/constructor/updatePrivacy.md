---
title: "updatePrivacy"
original: "https://core.telegram.org/constructor/updatePrivacy"
section: ref
kind: constructor
description: "Правила приватности были изменены"
layout: layout.njk
---

# updatePrivacy

Правила приватности были изменены

```
updatePrivacy#ee3b272a key:PrivacyKey rules:Vector<PrivacyRule> = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>key</strong></td><td style="text-align: center;"><a href="/type/PrivacyKey">PrivacyKey</a></td><td>Пиры, к которым применяются правила приватности</td></tr><tr><td><strong>rules</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/PrivacyRule">PrivacyRule</a>&gt;</td><td>Новые правила приватности</td></tr></tbody></table>

### Тип

[Update](/type/Update/)
