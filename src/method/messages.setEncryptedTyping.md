---
title: "messages.setEncryptedTyping"
original: "https://core.telegram.org/method/messages.setEncryptedTyping"
section: ref
kind: method
description: "Отправить событие набора текста текущим пользователем в секретный чат."
layout: layout.njk
---

# messages.setEncryptedTyping

Отправить событие набора текста текущим пользователем в секретный чат.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.setEncryptedTyping#791451ed peer:InputEncryptedChat typing:Bool = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputEncryptedChat">InputEncryptedChat</a></td><td>[@term:peer] Идентификатор секретного чата</td></tr><tr><td><strong>typing</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Набор текста.<br><strong>Возможные значения</strong>:<br><a href="/constructor/boolTrue">(boolTrue)</a>, если пользователь начал набирать текст и с момента последнего запроса прошло более <strong>5 секунд</strong><br><a href="/constructor/boolFalse">(boolFalse)</a>, если пользователь перестал набирать текст</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_INVALID</td><td>Указанный идентификатор чата недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [boolTrue](/constructor/boolTrue/)

Конструктор можно трактовать как **логическое** значение `true`.

#### [boolFalse](/constructor/boolFalse/)

Конструктор может интерпретироваться как **логическое**`false`-значение.
