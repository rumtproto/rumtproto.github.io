---
title: "help.PremiumPromo"
original: "https://core.telegram.org/type/help.PremiumPromo"
section: ref
kind: type
description: "Сведения о рекламной кампании Telegram Premium"
layout: layout.njk
---

# help.PremiumPromo

Сведения о рекламной кампании Telegram Premium

```
help.premiumPromo#5334759c status_text:string status_entities:Vector<MessageEntity> video_sections:Vector<string> videos:Vector<Document> period_options:Vector<PremiumSubscriptionOption> users:Vector<User> = help.PremiumPromo;

---functions---

help.getPremiumPromo#b81b93d4 = help.PremiumPromo;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/help.premiumPromo">help.premiumPromo</a></td><td>Сведения о рекламной кампании Telegram Premium<br><br>Обратите внимание, что поля <code>video_sections</code>+<code>videos</code> — это список видео и соответствующих им идентификаторов возможностей Premium.<br>Они равнозначны словарю «раздел =&gt; видео», ключи которого берутся из <code>video_section</code>, а значения — из <code>videos</code>.<br>Ключи в <code>video_sections</code> соответствуют конкретному идентификатору возможности, и при нажатии на строку этой возможности следует показать связанный с ней рекламный ролик.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/help.getPremiumPromo">help.getPremiumPromo</a></td><td>Получить сведения о рекламной кампании Telegram Premium</td></tr></tbody></table>
