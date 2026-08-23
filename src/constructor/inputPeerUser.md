---
title: "inputPeerUser (конструктор)"
original: "https://core.telegram.org/constructor/inputPeerUser"
section: ref
kind: constructor
layout: layout.njk
---

# inputPeerUser

*Конструктор из схемы TL.*

> Defines a user for further interaction.

## Определение TL

```
inputPeerUser#dde8a54c user_id:long access_hash:long = InputPeer;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [long](/type/long/) | User identifier |
| access_hash | [long](/type/long/) | access_hash value from the [user](/constructor/user/) constructor |

## Тип

[InputPeer](/type/InputPeer/)

## Related pages

#### [user](/constructor/user/)

Indicates info about a certain user.

Unless specified otherwise, when updating the [local peer database](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

See [here »](https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L3106) for an implementation of the logic to use when updating the [local user peer database](https://core.telegram.org/api/peers).
