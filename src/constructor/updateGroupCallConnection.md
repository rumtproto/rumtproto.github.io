---
title: "updateGroupCallConnection"
original: "https://core.telegram.org/constructor/updateGroupCallConnection"
section: ref
kind: constructor
description: "Параметры подключения, возвращаемые после присоединения к групповому звонку, см. презентации » и режим трансляции »."
layout: layout.njk
---

# updateGroupCallConnection

Параметры подключения, возвращаемые после присоединения к групповому звонку, см. [презентации »](/api/group-calls/#presentations) и [режим трансляции »](/api/group-calls/#stream-mode).

Если задан флаг `presentation`, параметры относятся к отдельному [соединению для демонстрации](/api/group-calls/#presentations); иначе они относятся к основному соединению.

Для обычного соединения WebRTC передайте `params` локальному движку групповых звонков tgcalls в качестве полезной нагрузки ответа на присоединение.

Для [звонков в режиме трансляции](/api/group-calls/#detecting-stream-mode), где клиент воспроизводит звонок, [загружая фрагменты медиа »](/api/group-calls/#downloading-media-chunks), а не через WebRTC, поле `params` вместо этого имеет один из следующих видов:

```
{
  "stream": true
}
```

для звонка, перешедшего в [режим трансляции](/api/group-calls/#stream-mode), либо

```
{
  "stream": true,
  "rtmp": true
}
```

для [звонка в режиме RTMP](/api/group-calls/#creating-and-publishing-an-rtmp-livestream).

```
updateGroupCallConnection#b783982 flags:# presentation:flags.0?true params:DataJSON = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>presentation</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Относятся ли эти параметры к отдельному соединению презентации, а не к основному соединению</td></tr><tr><td><strong>params</strong></td><td style="text-align: center;"><a href="/type/DataJSON">DataJSON</a></td><td>Параметры ответа на подключение по RTC или метаданные широковещательного потока, как описано выше</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
