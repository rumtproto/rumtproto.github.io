---
title: "ReportResult"
original: "https://core.telegram.org/type/ReportResult"
section: ref
kind: type
description: "Представляет меню жалобы или её результат"
layout: layout.njk
---

# ReportResult

Представляет меню жалобы или её результат

```
reportResultChooseOption#f0e4e0b6 title:string options:Vector<MessageReportOption> = ReportResult;
reportResultAddComment#6f09ac31 flags:# optional:flags.0?true option:bytes = ReportResult;
reportResultReported#8db33c4b = ReportResult;

---functions---

messages.report#fc78af9b peer:InputPeer id:Vector<int> option:bytes message:string = ReportResult;

stories.report#19d8eb45 peer:InputPeer id:Vector<int> option:bytes message:string = ReportResult;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/reportResultChooseOption">reportResultChooseOption</a></td><td>Пользователь должен выбрать один из следующих вариантов, после чего необходимо повторно вызвать <a href="/method/messages.report">messages.report</a>, передав идентификатор <code>option</code> выбранного варианта в <a href="/method/messages.report">messages.report</a>.<code>option</code>.</td></tr><tr><td><a href="/constructor/reportResultAddComment">reportResultAddComment</a></td><td>Пользователь должен ввести дополнительный комментарий для модераторов, после чего необходимо повторно вызвать <a href="/method/messages.report">messages.report</a>, передав комментарий в <a href="/method/messages.report">messages.report</a>.<code>message</code>.</td></tr><tr><td><a href="/constructor/reportResultReported">reportResultReported</a></td><td>Жалоба успешно отправлена, дальнейшие действия не требуются.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.report">messages.report</a></td><td>Пожаловаться на сообщение в чате за нарушение условий использования Telegram</td></tr><tr><td><a href="/method/stories.report">stories.report</a></td><td>Пожаловаться на историю.</td></tr></tbody></table>
