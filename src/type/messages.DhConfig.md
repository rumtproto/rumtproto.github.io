---
title: "messages.DhConfig"
original: "https://core.telegram.org/type/messages.DhConfig"
section: ref
kind: type
description: "Содержит параметры протокола генерации ключа по схеме Диффи — Хеллмана."
layout: layout.njk
---

# Messages.DhConfig

Содержит параметры протокола генерации ключа по схеме Диффи — Хеллмана.

```
messages.dhConfigNotModified#c0e24635 random:bytes = messages.DhConfig;
messages.dhConfig#2c221edd g:int p:bytes version:int random:bytes = messages.DhConfig;

---functions---

messages.getDhConfig#26cf8950 version:int random_length:int = messages.DhConfig;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.dhConfigNotModified">messages.dhConfigNotModified</a></td><td>Параметры конфигурации не изменились.</td></tr><tr><td><a href="/constructor/messages.dhConfig">messages.dhConfig</a></td><td>Новый набор параметров настройки.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getDhConfig">messages.getDhConfig</a></td><td>Возвращает параметры конфигурации для генерации ключа по схеме Диффи — Хеллмана. Может также вернуть случайную последовательность байтов требуемой длины.</td></tr></tbody></table>
