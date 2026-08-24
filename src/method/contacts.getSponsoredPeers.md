---
title: "contacts.getSponsoredPeers"
original: "https://core.telegram.org/method/contacts.getSponsoredPeers"
section: ref
kind: method
description: "Получить список рекламных результатов поиска пиров по заданному запросу"
layout: layout.njk
---

# contacts.getSponsoredPeers

Получить список рекламных результатов поиска пиров по заданному запросу

```
contacts.sponsoredPeersEmpty#ea32b4b1 = contacts.SponsoredPeers;
contacts.sponsoredPeers#eb032884 peers:Vector<SponsoredPeer> chats:Vector<Chat> users:Vector<User> = contacts.SponsoredPeers;
---functions---
contacts.getSponsoredPeers#b6c8c393 q:string = contacts.SponsoredPeers;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Запрос</td></tr></tbody></table>

### Результат

[contacts.SponsoredPeers](/type/contacts.SponsoredPeers/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>SEARCH_QUERY_EMPTY</td><td>Поисковый запрос пуст.</td></tr></tbody></table>
