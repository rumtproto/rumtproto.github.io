---
title: "Рейтинг популярных пиров"
original: "https://core.telegram.org/api/top-rating"
section: api
description: "Если рейтинг включён, значение рейтинга популярных пиров (top peers — часто используемые собеседники, боты и чаты) показывает, насколько значим часто используемый пир в той или…"
layout: layout.njk
---

# Рейтинг популярных пиров

[@term:top peers] Если рейтинг [включён](/method/contacts.toggleTopPeers/), рейтинг [популярных пиров](/constructor/topPeer/) (`top peers` — пиры, к которым пользователь обращается чаще всего) показывает, насколько значим часто используемый пир в той или иной [категории](/type/TopPeerCategory/) (пользователи, которым часто пишут, часто используемые боты, инлайн-боты, часто посещаемые каналы и так далее).

Схема:

```
topPeerCategoryBotsPM#ab661b5b = TopPeerCategory;
topPeerCategoryBotsInline#148677e2 = TopPeerCategory;
topPeerCategoryCorrespondents#0637b7ed = TopPeerCategory;
topPeerCategoryGroups#bd17a14a = TopPeerCategory;
topPeerCategoryChannels#161d9628 = TopPeerCategory;
topPeerCategoryPhoneCalls#1e76a78c = TopPeerCategory;
topPeerCategoryForwardUsers#a8406ca9 = TopPeerCategory;
topPeerCategoryForwardChats#fbeec0f0 = TopPeerCategory;
topPeerCategoryBotsApp#fd9e7bec = TopPeerCategory;
topPeerCategoryBotsGuestChat#6c24f3dd = TopPeerCategory;

topPeer#edcdc05b peer:Peer rating:double = TopPeer;

topPeerCategoryPeers#fb834291 category:TopPeerCategory count:int peers:Vector<TopPeer> = TopPeerCategoryPeers;

contacts.topPeersNotModified#de266ef5 = contacts.TopPeers;
contacts.topPeers#70b772a8 categories:Vector<TopPeerCategoryPeers> chats:Vector<Chat> users:Vector<User> = contacts.TopPeers;
contacts.topPeersDisabled#b52c939d = contacts.TopPeers;

---functions---

contacts.toggleTopPeers#8514bdda enabled:Bool = Bool;
contacts.getTopPeers#973478b6 flags:# correspondents:flags.0?true bots_pm:flags.1?true bots_inline:flags.2?true phone_calls:flags.3?true forward_users:flags.4?true forward_chats:flags.5?true groups:flags.10?true channels:flags.15?true bots_app:flags.16?true bots_guestchat:flags.17?true offset:int limit:int hash:long = contacts.TopPeers;
contacts.resetTopPeerRating#1ae373ac category:TopPeerCategory peer:InputPeer = Bool;
```

Приращение рейтинга вычисляется так: берётся разница во времени между последним обращением пользователя к некоторому пиру и последним получением рейтинга этого пира через [contacts.getTopPeers](/method/contacts.getTopPeers/), после чего эта разница делится на [коэффициент экспоненциального затухания из конфигурации](/constructor/config/).

В частности, клиенту следует:

1.  При запуске вызвать [contacts.getTopPeers](/method/contacts.getTopPeers/) для всех нужных категорий рейтинга пиров, получив и сохранив рейтинги всех популярных пиров в локальной базе данных.
2.  Каждый раз, когда пользователь открывает (например) чат `123456789`, над закешированными сведениями о популярных пирах обязательно выполняется следующая операция.  
       
    `dateOpened` — момент, когда пользователь обратился к пиру.  
    `normalizeRate` — произвольный момент в недавнем прошлом (когда рейтинги получены с сервера через [contacts.getTopPeers](/method/contacts.getTopPeers/) по описанной выше схеме, это момент их получения).  
    `config.rating_e_decay` — [коэффициент экспоненциального затухания из конфигурации](/constructor/config/).

```
topPeer.rating += e^((dateOpened - normalizeRate) / config.rating_e_decay)
```

3.  [@term:Mini App] Каждый раз, когда клиенту нужно показать список часто используемых ботов, пользователей, приложений Mini App (веб-приложений, встроенных в интерфейс Telegram), адресатов звонков и тому подобного (например, для [вкладки глобального поиска](/api/search/#global-search)), следует сортировать пиры по полю `rating` для указанной категории.

[@note] Приращение экспоненциально зависит от давности обращения: чем позже произошло обращение относительно `normalizeRate`, тем больше слагаемое, поэтому недавние обращения весят во много раз больше давних, а сам рейтинг накапливается сложением таких слагаемых.

Чтобы включить или отключить рейтинги популярных пиров, используйте [contacts.toggleTopPeers](/method/contacts.toggleTopPeers/).  
Чтобы сбросить рейтинг определённого пира в определённой категории, используйте [contacts.resetTopPeerRating](/method/contacts.resetTopPeerRating/).
