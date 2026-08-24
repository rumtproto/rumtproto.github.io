---
title: "messages.dhConfig"
original: "https://core.telegram.org/constructor/messages.dhConfig"
section: ref
kind: constructor
description: "Новый набор параметров настройки."
layout: layout.njk
---

# messages.dhConfig

Новый набор параметров настройки.

```
messages.dhConfig#2c221edd g:int p:bytes version:int random:bytes = messages.DhConfig;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" align="center">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>g</strong></td><td align="center"><a href="/type/int">int</a></td><td>Новое значение <strong>первообразного корня</strong>, см. <a href="https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange">Википедию</a></td></tr><tr><td><strong>p</strong></td><td align="center"><a href="/type/bytes">bytes</a></td><td>Новое значение <strong>простого числа</strong>, см. <a href="https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange">Википедию</a></td></tr><tr><td><strong>version</strong></td><td align="center"><a href="/type/int">int</a></td><td>Версия набора параметров</td></tr><tr><td><strong>random</strong></td><td align="center"><a href="/type/bytes">bytes</a></td><td>Случайная последовательность байт заданной длины</td></tr></tbody></table>

### Тип

[messages.DhConfig](/type/messages.DhConfig/)
