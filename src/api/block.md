---
title: "Заблокированные пользователи"
original: "https://core.telegram.org/api/block"
section: api
description: "Работа со списком блокировки."
layout: layout.njk
---

# Заблокированные пользователи

Работа со списком блокировки.

Схема:

```
peerBlocked#e8fd8014 peer_id:Peer date:int = PeerBlocked;

contacts.blocked#0ade1591 blocked:Vector<PeerBlocked> chats:Vector<Chat> users:Vector<User> = contacts.Blocked;

updatePeerBlocked#ebe07752 flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true peer_id:Peer = Update;

---functions---

contacts.block#2e2e8734 flags:# my_stories_from:flags.0?true id:InputPeer = Bool;
contacts.unblock#b550d328 flags:# my_stories_from:flags.0?true id:InputPeer = Bool;

contacts.getBlocked#9a868f80 flags:# my_stories_from:flags.0?true offset:int limit:int = contacts.Blocked;
contacts.setBlocked#94c65c76 flags:# my_stories_from:flags.0?true id:Vector<InputPeer> limit:int = Bool;
```

[@term:peer] Для блокировки и разблокировки пиров (`peer` — собеседник: пользователь, чат или канал) используйте [contacts.block](/method/contacts.block/) и [contacts.unblock](/method/contacts.unblock/).

Если установлен флаг `my_stories_from`, пиры будут добавлены только в список блокировки историй или удалены только из него; иначе их добавят в основной список блокировки или удалят из него.

Пиры из списка блокировки историй не смогут просматривать ваши [истории](/api/stories/).  
Пиры из основного списка блокировки не смогут писать вам сообщения, а также видеть ваш статус, фотографию и истории.

Добавление пира в список блокировки или его удаление оттуда порождает обновление [updatePeerBlocked](/constructor/updatePeerBlocked/), которое рассылается во все активные сессии (сам заблокированный или разблокированный пир _не_ получит никакого обновления).

Чтобы получить список заблокированных пиров, используйте [contacts.getBlocked](/method/contacts.getBlocked/); как обычно, флаг `my_stories_from` позволяет выбрать, какой список запрашивается — список блокировки историй или основной, а параметры `offset` и `limit` служат для [постраничной выборки »](/api/offsets/).

Метод [contacts.setBlocked](/method/contacts.setBlocked/) можно использовать и для того, чтобы разом полностью заменить содержимое целого списка блокировки: достаточно передать тип списка в `my_stories_from`, полный перечень идентификаторов для блокировки в `id`, а длину переданного в `id` списка — в `limit`; сервер полностью заменит указанный список блокировки.
