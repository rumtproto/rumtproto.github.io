---
title: "help.TermsOfServiceUpdate"
original: "https://core.telegram.org/type/help.TermsOfServiceUpdate"
section: ref
kind: type
description: "Обновление условий использования Telegram"
layout: layout.njk
---

# Help.TermsOfServiceUpdate

Обновление условий использования Telegram

```
help.termsOfServiceUpdateEmpty#e3309f7f expires:int = help.TermsOfServiceUpdate;
help.termsOfServiceUpdate#28ecf961 expires:int terms_of_service:help.TermsOfService = help.TermsOfServiceUpdate;

---functions---

help.getTermsOfServiceUpdate#2ca51fd1 = help.TermsOfServiceUpdate;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/help.termsOfServiceUpdateEmpty">help.termsOfServiceUpdateEmpty</a></td><td>Условия использования Telegram не изменились</td></tr><tr><td><a href="/constructor/help.termsOfServiceUpdate">help.termsOfServiceUpdate</a></td><td>Информация об обновлении условий использования Telegram. Если условия использования отклонены, следует вызвать метод <a href="/method/account.deleteAccount">account.deleteAccount</a> с причиной «Decline ToS update»</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/help.getTermsOfServiceUpdate">help.getTermsOfServiceUpdate</a></td><td>Проверить наличие обновлений условий использования Telegram</td></tr></tbody></table>
