---
title: "messages.getFactCheck"
original: "https://core.telegram.org/method/messages.getFactCheck"
section: ref
kind: method
description: "Получить одну или несколько проверок фактов; полное описание процесса см. здесь »."
layout: layout.njk
---

# messages.getFactCheck

Получить одну или несколько [проверок фактов; полное описание процесса см. здесь »](/api/factcheck/).

```
---functions---
messages.getFactCheck#b9cdc5ee peer:InputPeer msg_id:Vector<int> = Vector<FactCheck>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, в который были отправлены сообщения.</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>[@term:msg_id] Сообщения, с которыми связаны конструкторы <a href="/constructor/factCheck">factCheck</a> с установленным флагом <code>need_check</code>.</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[FactCheck](/type/FactCheck/)\>

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [factCheck](/constructor/factCheck/)

Представляет [проверку фактов »](/api/factcheck/), выполненную независимым фактчекером.

#### [Проверки фактов](/api/factcheck/)

Клиенты Telegram поддерживают отображение проверок фактов, добавленных к сообщениям независимыми фактчекерами.
