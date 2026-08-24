---
title: "contacts.SponsoredPeers"
original: "https://core.telegram.org/type/contacts.SponsoredPeers"
section: ref
kind: type
description: "Список спонсируемых пиров."
layout: layout.njk
---

# contacts.SponsoredPeers

Список спонсируемых пиров.

```
contacts.sponsoredPeersEmpty#ea32b4b1 = contacts.SponsoredPeers;
contacts.sponsoredPeers#eb032884 peers:Vector<SponsoredPeer> chats:Vector<Chat> users:Vector<User> = contacts.SponsoredPeers;

---functions---

contacts.getSponsoredPeers#b6c8c393 q:string = contacts.SponsoredPeers;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/contacts.sponsoredPeersEmpty">contacts.sponsoredPeersEmpty</a></td><td>Для этого запроса нет рекламируемых пиров.</td></tr><tr><td><a href="/constructor/contacts.sponsoredPeers">contacts.sponsoredPeers</a></td><td>Спонсируемые пиры.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/contacts.getSponsoredPeers">contacts.getSponsoredPeers</a></td><td>Получить список рекламных результатов поиска пиров по заданному запросу</td></tr></tbody></table>
