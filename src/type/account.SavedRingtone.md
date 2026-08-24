---
title: "account.SavedRingtone"
original: "https://core.telegram.org/type/account.SavedRingtone"
section: ref
kind: type
description: "Содержит информацию о сохранённом звуке уведомления"
layout: layout.njk
---

# account.SavedRingtone

Содержит информацию о сохранённом звуке уведомления

```
account.savedRingtone#b7263f6d = account.SavedRingtone;
account.savedRingtoneConverted#1f307eb7 document:Document = account.SavedRingtone;

---functions---

account.saveRingtone#3dea5b03 id:InputDocument unsave:Bool = account.SavedRingtone;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/account.savedRingtone">account.savedRingtone</a></td><td>Звук уведомления уже был в формате MP3 и был сохранён без изменений</td></tr><tr><td><a href="/constructor/account.savedRingtoneConverted">account.savedRingtoneConverted</a></td><td>Звук уведомления был не в формате MP3, он был успешно преобразован и сохранён; в дальнейшем для обращения к этому звуку уведомления используйте возвращённый <a href="/type/Document">Document</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.saveRingtone">account.saveRingtone</a></td><td>Сохранить или удалить сохранённый звук уведомления.<br><br>Если звук уведомления уже в формате MP3, будет возвращён <a href="/constructor/account.savedRingtone">account.savedRingtone</a>.<br>Иначе он будет автоматически преобразован и будет возвращён <a href="/constructor/account.savedRingtoneConverted">account.savedRingtoneConverted</a>, содержащий новый объект <a href="/constructor/document">document</a>, который следует использовать для обращения к звуку впредь (то есть при его удалении с помощью параметра <code>unsave</code> или при его скачивании).</td></tr></tbody></table>
