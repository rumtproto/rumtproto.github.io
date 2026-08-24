---
title: "messages.reportMusicListen"
original: "https://core.telegram.org/method/messages.reportMusicListen"
section: ref
kind: method
description: "Сообщить о длительности прослушивания музыкального трека (аудиодокумента без флага voice); подробнее обо всём процессе см. здесь »."
layout: layout.njk
---

# messages.reportMusicListen

Сообщить о длительности прослушивания музыкального трека (аудиодокумента без флага `voice`); подробнее обо всём процессе см. [здесь »](/api/views/#music-listens).

```
 Method schema is available as of layer 224. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputDocument">InputDocument</a></td><td><a href="/type/InputDocument">InputDocument</a> прослушанной песни</td></tr><tr><td><strong>listened_duration</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Суммарное время воспроизведения в целых секундах</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [InputDocument](/type/InputDocument/)

Определяет документ для дальнейшего взаимодействия.

#### [Просмотры и метрики прочтения](/api/views/)

Клиентам следует сообщать о состоянии прочтения, просмотрах сообщений и прослушиваниях музыки с помощью специального набора методов.
