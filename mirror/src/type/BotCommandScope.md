---
title: "BotCommandScope"
original: "https://core.telegram.org/type/BotCommandScope"
section: ref
description: "Represents a scope where the bot commands, specified using bots.setBotCommands will be valid."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"BotCommandScope","url":"/type/BotCommandScope/"}]
layout: layout.njk
---

# BotCommandScope

Represents a scope where the bot commands, specified using [bots.setBotCommands](/method/bots.setBotCommands/) will be valid.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/botCommandScopeDefault/">botCommandScopeDefault</a>#2f6cb2ab = <a href="/type/BotCommandScope/" class="current_page_link">BotCommandScope</a>;
<a href="/constructor/botCommandScopeUsers/">botCommandScopeUsers</a>#3c4f04d8 = <a href="/type/BotCommandScope/" class="current_page_link">BotCommandScope</a>;
<a href="/constructor/botCommandScopeChats/">botCommandScopeChats</a>#6fe1a881 = <a href="/type/BotCommandScope/" class="current_page_link">BotCommandScope</a>;
<a href="/constructor/botCommandScopeChatAdmins/">botCommandScopeChatAdmins</a>#b9aa606a = <a href="/type/BotCommandScope/" class="current_page_link">BotCommandScope</a>;
<a href="/constructor/botCommandScopePeer/">botCommandScopePeer</a>#db9d897d peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/BotCommandScope/" class="current_page_link">BotCommandScope</a>;
<a href="/constructor/botCommandScopePeerAdmins/">botCommandScopePeerAdmins</a>#3fd863d1 peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/BotCommandScope/" class="current_page_link">BotCommandScope</a>;
<a href="/constructor/botCommandScopePeerUser/">botCommandScopePeerUser</a>#a1321f3 peer:<a href="/type/InputPeer/">InputPeer</a> user_id:<a href="/type/InputUser/">InputUser</a> = <a href="/type/BotCommandScope/" class="current_page_link">BotCommandScope</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/botCommandScopeDefault/">botCommandScopeDefault</a></td><td>The commands will be valid in all dialogs</td></tr><tr><td><a href="/constructor/botCommandScopeUsers/">botCommandScopeUsers</a></td><td>The specified bot commands will only be valid in all private chats with users.</td></tr><tr><td><a href="/constructor/botCommandScopeChats/">botCommandScopeChats</a></td><td>The specified bot commands will be valid in all <a href="/api/channel/">groups and supergroups</a>.</td></tr><tr><td><a href="/constructor/botCommandScopeChatAdmins/">botCommandScopeChatAdmins</a></td><td>The specified bot commands will be valid only for chat administrators, in all <a href="/api/channel/">groups and supergroups</a>.</td></tr><tr><td><a href="/constructor/botCommandScopePeer/">botCommandScopePeer</a></td><td>The specified bot commands will be valid only in a specific dialog.</td></tr><tr><td><a href="/constructor/botCommandScopePeerAdmins/">botCommandScopePeerAdmins</a></td><td>The specified bot commands will be valid for all admins of the specified <a href="/api/channel/">group or supergroup</a>.</td></tr><tr><td><a href="/constructor/botCommandScopePeerUser/">botCommandScopePeerUser</a></td><td>The specified bot commands will be valid only for a specific user in the specified <a href="/api/channel/">group or supergroup</a>.</td></tr></tbody></table>

### Related pages

#### [bots.setBotCommands](/method/bots.setBotCommands/)

Set bot command list
