---
title: "updateMessageExtendedMedia"
original: "https://core.telegram.org/constructor/updateMessageExtendedMedia"
section: ref
kind: constructor
description: "Вы купили платное медиа »: это обновление содержит раскрытое медиа."
layout: layout.njk
---

# updateMessageExtendedMedia

Вы [купили платное медиа »](/api/paid-media/): это обновление содержит раскрытое медиа.

```
updateMessageExtendedMedia#d5a41724 peer:Peer msg_id:int extended_media:Vector<MessageExtendedMedia> = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Пир, в котором было опубликовано платное медиа</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения, содержащего платное медиа</td></tr><tr><td><strong>extended_media</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageExtendedMedia">MessageExtendedMedia</a>&gt;</td><td>Раскрытое медиа, содержит только конструкторы <a href="/constructor/messageExtendedMedia">messageExtendedMedia</a>.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [messageExtendedMedia](/constructor/messageExtendedMedia/)

Уже оплаченное платное медиа; подробнее [см. здесь »](/api/paid-media/).

#### [Платные медиа](/api/paid-media/)

Авторы контента могут принимать Stars, публикуя в своих каналах платные фотографии и видео. Подписчики смогут просмотреть такие посты, только заплатив автору за их разблокировку.
