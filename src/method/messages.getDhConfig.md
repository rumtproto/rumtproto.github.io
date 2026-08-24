---
title: "messages.getDhConfig"
original: "https://core.telegram.org/method/messages.getDhConfig"
section: ref
kind: method
description: "Возвращает параметры конфигурации для генерации ключа по схеме Диффи — Хеллмана. Может также вернуть случайную последовательность байтов требуемой длины."
layout: layout.njk
---

# messages.getDhConfig

Возвращает параметры конфигурации для генерации ключа по схеме Диффи — Хеллмана. Может также вернуть случайную последовательность байтов требуемой длины.

```
messages.dhConfigNotModified#c0e24635 random:bytes = messages.DhConfig;
messages.dhConfig#2c221edd g:int p:bytes version:int random:bytes = messages.DhConfig;
---functions---
messages.getDhConfig#26cf8950 version:int random_length:int = messages.DhConfig;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Значение параметра <strong>version</strong> из <a href="/constructor/messages.dhConfig">messages.dhConfig</a>, имеющееся у клиента</td></tr><tr><td><strong>random_length</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длина требуемой случайной последовательности</td></tr></tbody></table>

### Результат

[messages.DhConfig](/type/messages.DhConfig/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>RANDOM_LENGTH_INVALID</td><td>Недопустимая длина случайной последовательности.</td></tr></tbody></table>

### Связанные страницы

#### [messages.dhConfig](/constructor/messages.dhConfig/)

Новый набор параметров настройки.
