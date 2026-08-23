---
title: "TopPeerCategory (тип)"
original: "https://core.telegram.org/type/TopPeerCategory"
section: ref
kind: type
layout: layout.njk
---

# TopPeerCategory

*Тип из схемы TL.*

> Top peer category

## Определение TL

```
topPeerCategoryBotsPM#ab661b5b = TopPeerCategory;
topPeerCategoryBotsInline#148677e2 = TopPeerCategory;
topPeerCategoryCorrespondents#637b7ed = TopPeerCategory;
topPeerCategoryGroups#bd17a14a = TopPeerCategory;
topPeerCategoryChannels#161d9628 = TopPeerCategory;
topPeerCategoryPhoneCalls#1e76a78c = TopPeerCategory;
topPeerCategoryForwardUsers#a8406ca9 = TopPeerCategory;
topPeerCategoryForwardChats#fbeec0f0 = TopPeerCategory;
topPeerCategoryBotsApp#fd9e7bec = TopPeerCategory;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [topPeerCategoryBotsPM](/constructor/topPeerCategoryBotsPM/) | Most used bots |
| [topPeerCategoryBotsInline](/constructor/topPeerCategoryBotsInline/) | Most used inline bots |
| [topPeerCategoryCorrespondents](/constructor/topPeerCategoryCorrespondents/) | Users we've chatted most frequently with |
| [topPeerCategoryGroups](/constructor/topPeerCategoryGroups/) | Often-opened groups and supergroups |
| [topPeerCategoryChannels](/constructor/topPeerCategoryChannels/) | Most frequently visited channels |
| [topPeerCategoryPhoneCalls](/constructor/topPeerCategoryPhoneCalls/) | Most frequently called users |
| [topPeerCategoryForwardUsers](/constructor/topPeerCategoryForwardUsers/) | Users to which the users often forwards messages to |
| [topPeerCategoryForwardChats](/constructor/topPeerCategoryForwardChats/) | Chats to which the users often forwards messages to |
| [topPeerCategoryBotsApp](/constructor/topPeerCategoryBotsApp/) | Most frequently used [Main Mini Bot Apps](https://core.telegram.org/api/bots/webapps#main-mini-apps). |
| [topPeerCategoryBotsGuestChat](https://core.telegram.org/constructor/topPeerCategoryBotsGuestChat) | Top [guest bots »](https://core.telegram.org/api/bots/guest-mode), i.e. bots most frequently invoked as guests in chats. |
