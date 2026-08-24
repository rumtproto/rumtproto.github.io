---
title: "MessageExtendedMedia"
original: "https://core.telegram.org/type/MessageExtendedMedia"
section: ref
kind: type
description: "Платное медиа, подробнее см. здесь »."
layout: layout.njk
---

# MessageExtendedMedia

[Платное медиа, подробнее см. здесь »](/api/paid-media/).

```
messageExtendedMediaPreview#ad628cc8 flags:# w:flags.0?int h:flags.0?int thumb:flags.1?PhotoSize video_duration:flags.2?int = MessageExtendedMedia;
messageExtendedMedia#ee479c64 media:MessageMedia = MessageExtendedMedia;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messageExtendedMediaPreview">messageExtendedMediaPreview</a></td><td>Предпросмотр платных медиа, которые ещё не куплены, подробнее <a href="/api/paid-media">см. здесь »</a>.</td></tr><tr><td><a href="/constructor/messageExtendedMedia">messageExtendedMedia</a></td><td>Уже оплаченные платные медиафайлы; подробнее <a href="/api/paid-media">см. здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Платные медиа](/api/paid-media/)

Авторы контента могут принимать Stars, публикуя в своих каналах платные фотографии и видео. Подписчики смогут просмотреть такие посты, только заплатив автору за их разблокировку.
