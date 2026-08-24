---
title: "e2e.chain.groupParticipant"
original: "https://core.telegram.org/constructor/e2e.chain.groupParticipant"
section: ref
kind: constructor
description: "Участник и его права в групповом состоянии конференц-звонка со сквозным шифрованием »."
layout: layout.njk
---

# e2e.chain.groupParticipant

Участник и его права в [групповом состоянии конференц-звонка со сквозным шифрованием »](/api/end-to-end/group-calls/#participants-and-permissions).

```
e2e.chain.groupParticipant#28852f20 user_id:long public_key:int256 flags:# add_users:flags.0?true remove_users:flags.1?true set_value:flags.2?true version:int = e2e.chain.GroupParticipant;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор участника в Telegram.</td></tr><tr><td><strong>public_key</strong></td><td style="text-align: center;"><a href="/type/int256">int256</a></td><td>Открытый ключ, используемый для проверки блоков и расшифровки общего ключевого материала этого участника.</td></tr><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>add_users</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Может ли этот участник добавлять новых участников.</td></tr><tr><td><strong>remove_users</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Может ли этот участник удалять существующих участников.</td></tr><tr><td><strong>set_value</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Может ли этот участник изменять префиксное дерево «ключ-значение»</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальная версия протокола E2E-групповых звонков, поддерживаемая этим участником; звонок использует наименьшую версию среди участников, ограниченную диапазоном <code>0...255</code>.</td></tr></tbody></table>

### Тип

[e2e.chain.GroupParticipant](/type/e2e.chain.GroupParticipant/)

### Связанные страницы

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.
