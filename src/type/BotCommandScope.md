---
title: "BotCommandScope (тип)"
original: "https://core.telegram.org/type/BotCommandScope"
section: ref
kind: type
layout: layout.njk
---

# BotCommandScope

*Тип из схемы TL.*

> Represents a scope where the bot commands, specified using [bots.setBotCommands](/method/bots.setBotCommands/) will be valid.

## Определение TL

```
botCommandScopeDefault#2f6cb2ab = BotCommandScope;
botCommandScopeUsers#3c4f04d8 = BotCommandScope;
botCommandScopeChats#6fe1a881 = BotCommandScope;
botCommandScopeChatAdmins#b9aa606a = BotCommandScope;
botCommandScopePeer#db9d897d peer:InputPeer = BotCommandScope;
botCommandScopePeerAdmins#3fd863d1 peer:InputPeer = BotCommandScope;
botCommandScopePeerUser#a1321f3 peer:InputPeer user_id:InputUser = BotCommandScope;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [botCommandScopeDefault](/constructor/botCommandScopeDefault/) | The commands will be valid in all dialogs |
| [botCommandScopeUsers](/constructor/botCommandScopeUsers/) | The specified bot commands will only be valid in all private chats with users. |
| [botCommandScopeChats](/constructor/botCommandScopeChats/) | The specified bot commands will be valid in all [groups and supergroups](https://core.telegram.org/api/channel). |
| [botCommandScopeChatAdmins](/constructor/botCommandScopeChatAdmins/) | The specified bot commands will be valid only for chat administrators, in all [groups and supergroups](https://core.telegram.org/api/channel). |
| [botCommandScopePeer](/constructor/botCommandScopePeer/) | The specified bot commands will be valid only in a specific dialog. |
| [botCommandScopePeerAdmins](/constructor/botCommandScopePeerAdmins/) | The specified bot commands will be valid for all admins of the specified [group or supergroup](https://core.telegram.org/api/channel). |
| [botCommandScopePeerUser](/constructor/botCommandScopePeerUser/) | The specified bot commands will be valid only for a specific user in the specified [group or supergroup](https://core.telegram.org/api/channel). |

## Related pages

#### [bots.setBotCommands](/method/bots.setBotCommands/)

Set bot command list
