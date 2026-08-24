---
title: "BotCommandScope"
original: "https://core.telegram.org/type/BotCommandScope"
section: ref
kind: type
description: "Представляет область видимости, в которой будут действовать команды бота, заданные с помощью bots.setBotCommands."
layout: layout.njk
---

# BotCommandScope

Представляет область видимости, в которой будут действовать команды бота, заданные с помощью [bots.setBotCommands](/method/bots.setBotCommands/).

```
botCommandScopeDefault#2f6cb2ab = BotCommandScope;
botCommandScopeUsers#3c4f04d8 = BotCommandScope;
botCommandScopeChats#6fe1a881 = BotCommandScope;
botCommandScopeChatAdmins#b9aa606a = BotCommandScope;
botCommandScopePeer#db9d897d peer:InputPeer = BotCommandScope;
botCommandScopePeerAdmins#3fd863d1 peer:InputPeer = BotCommandScope;
botCommandScopePeerUser#a1321f3 peer:InputPeer user_id:InputUser = BotCommandScope;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/botCommandScopeDefault">botCommandScopeDefault</a></td><td>Команды будут действовать во всех диалогах</td></tr><tr><td><a href="/constructor/botCommandScopeUsers">botCommandScopeUsers</a></td><td>Указанные команды бота будут действовать только во всех личных чатах с пользователями.</td></tr><tr><td><a href="/constructor/botCommandScopeChats">botCommandScopeChats</a></td><td>Указанные команды бота будут действовать во всех <a href="/api/channel">группах и супергруппах</a>.</td></tr><tr><td><a href="/constructor/botCommandScopeChatAdmins">botCommandScopeChatAdmins</a></td><td>Указанные команды бота будут действовать только для администраторов чатов во всех <a href="/api/channel">группах и супергруппах</a>.</td></tr><tr><td><a href="/constructor/botCommandScopePeer">botCommandScopePeer</a></td><td>Указанные команды бота будут действовать только в конкретном диалоге.</td></tr><tr><td><a href="/constructor/botCommandScopePeerAdmins">botCommandScopePeerAdmins</a></td><td>Указанные команды бота будут действовать для всех администраторов указанной <a href="/api/channel">группы или супергруппы</a>.</td></tr><tr><td><a href="/constructor/botCommandScopePeerUser">botCommandScopePeerUser</a></td><td>Указанные команды бота будут действовать только для конкретного пользователя в указанной <a href="/api/channel">группе или супергруппе</a>.</td></tr></tbody></table>

### Связанные страницы

#### [bots.setBotCommands](/method/bots.setBotCommands/)

Задать список команд бота
