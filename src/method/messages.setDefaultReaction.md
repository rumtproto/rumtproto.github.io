---
title: "messages.setDefaultReaction"
original: "https://core.telegram.org/method/messages.setDefaultReaction"
section: ref
kind: method
description: "Изменить эмодзи-реакцию по умолчанию, используемую в меню быстрых реакций: значение синхронизируется между устройствами и может быть получено через help.getConfig, поле…"
layout: layout.njk
---

# messages.setDefaultReaction

Изменить эмодзи-реакцию по умолчанию, используемую в меню быстрых реакций: значение синхронизируется между устройствами и может быть получено через [help.getConfig, поле `reactions_default`](/method/help.getConfig/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.setDefaultReaction#4f47a016 reaction:Reaction = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/type/Reaction">Reaction</a></td><td>Новая реакция эмодзи</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>REACTION_INVALID</td><td>Указанная реакция недействительна.</td></tr></tbody></table>

### Связанные страницы

#### [help.getConfig](/method/help.getConfig/)

Возвращает текущую конфигурацию, включая конфигурацию дата-центров.
