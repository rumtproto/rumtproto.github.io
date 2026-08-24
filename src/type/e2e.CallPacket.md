---
title: "e2e.CallPacket"
original: "https://core.telegram.org/type/e2e.CallPacket"
section: ref
kind: type
description: "Конструктор-маркер, идентификатор которого (CRC32) используется при выработке и аутентификации зашифрованных пакетов группового звонка."
layout: layout.njk
---

# E2e.CallPacket

Конструктор-маркер, идентификатор которого (CRC32) используется при выработке и аутентификации [зашифрованных пакетов группового звонка](/api/end-to-end/group-calls/#packet-encryption).

```
e2e.callPacket#40a6bee9 = e2e.CallPacket;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/e2e.callPacket">e2e.callPacket</a></td><td>Конструктор-маркер, идентификатор которого (CRC32) используется при выработке и аутентификации <a href="/api/end-to-end/group-calls#packet-encryption">зашифрованных пакетов группового звонка</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.
