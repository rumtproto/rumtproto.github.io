---
title: "stories.exportStoryLink"
original: "https://core.telegram.org/method/stories.exportStoryLink"
section: ref
kind: method
description: "Создать глубокую ссылку на историю для конкретной истории"
layout: layout.njk
---

# stories.exportStoryLink

Создать [глубокую ссылку на историю](/api/links/#story-links) для конкретной истории

```
exportedStoryLink#3fc9053b link:string = ExportedStoryLink;
---functions---
stories.exportStoryLink#7b8def20 peer:InputPeer id:int = ExportedStoryLink;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, в котором была опубликована история</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор истории</td></tr></tbody></table>

### Результат

[ExportedStoryLink](/type/ExportedStoryLink/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>STORY_ID_EMPTY</td><td>Вы не указали ни одного идентификатора истории.</td></tr><tr><td>400</td><td>USER_PUBLIC_MISSING</td><td>Невозможно сформировать ссылку на истории, опубликованные пиром без имени пользователя.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
