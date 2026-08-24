---
title: "messages.getMyStickers"
original: "https://core.telegram.org/method/messages.getMyStickers"
section: ref
kind: method
description: "Получить все наборы стикеров », принадлежащие текущему пользователю."
layout: layout.njk
---

# messages.getMyStickers

Получить все [наборы стикеров »](/api/stickers/), принадлежащие текущему пользователю.

```
messages.myStickers#faff629d count:int sets:Vector<StickerSetCovered> = messages.MyStickers;
---functions---
messages.getMyStickers#d0b5e1fc offset_id:long limit:int = messages.MyStickers;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>offset_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/offsets">Смещения для постраничной выборки, подробнее см. здесь</a></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное число возвращаемых результатов, <a href="/api/offsets">см. постраничную выборку</a></td></tr></tbody></table>

### Результат

[messages.MyStickers](/type/messages.MyStickers/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Стикеры и маски](/api/stickers/)

Клиенты Telegram поддерживают отображение статических и анимированных стикеров.
