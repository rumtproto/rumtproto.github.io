---
title: "documentAttributeAudio"
original: "https://core.telegram.org/constructor/documentAttributeAudio"
section: ref
kind: constructor
description: "Представляет аудиофайл"
layout: layout.njk
---

# documentAttributeAudio

Представляет аудиофайл

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===23===
documentAttributeAudio#051448e5 duration:int = DocumentAttribute;

===45===
documentAttributeAudio#ded218e0 duration:int title:string performer:string = DocumentAttribute;

===46===
documentAttributeAudio#9852f9c6 flags:# duration:int title:flags.0?string performer:flags.1?string waveform:flags.2?bytes = DocumentAttribute;
```

#### Схема API

```
documentAttributeAudio#9852f9c6 flags:# voice:flags.10?true duration:int title:flags.0?string performer:flags.1?string waveform:flags.2?bytes = DocumentAttribute;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>voice</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/constructor/true">true</a></td><td>Является ли это голосовым сообщением</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длительность в секундах</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Название композиции</td></tr><tr><td><strong>performer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Исполнитель</td></tr><tr><td><strong>waveform</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/bytes">bytes</a></td><td>Форма волны: последовательность упакованных по битам 5-битных значений.<br>Пример реализации: <a href="https://github.com/DrKLO/Telegram/blob/4d7a3a40c88ce28a211aa2814e9569389fc40567/TMessagesProj/jni/audio.c#L562">android</a>.</td></tr></tbody></table>

### Тип

[DocumentAttribute](/type/DocumentAttribute/)
