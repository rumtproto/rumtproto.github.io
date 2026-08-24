---
title: "e2e.callPacket"
original: "https://core.telegram.org/constructor/e2e.callPacket"
section: ref
kind: constructor
description: "Конструктор-маркер, идентификатор которого (CRC32) используется при выработке и аутентификации зашифрованных пакетов группового звонка."
layout: layout.njk
---

# e2e.callPacket

Конструктор-маркер, идентификатор которого (CRC32) используется при выработке и аутентификации [зашифрованных пакетов группового звонка](/api/end-to-end/group-calls/#packet-encryption).

```
e2e.callPacket#40a6bee9 = e2e.CallPacket;
```

### Параметры

Этот конструктор не требует параметров.

### Тип

[e2e.CallPacket](/type/e2e.CallPacket/)

### Связанные страницы

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.
