---
title: "messages.AffectedHistory"
original: "https://core.telegram.org/type/messages.AffectedHistory"
section: ref
kind: type
description: "Объект содержит информацию о затронутой части истории переписки с пользователем или в чате."
layout: layout.njk
---

# messages.AffectedHistory

Объект содержит информацию о затронутой части истории переписки с пользователем или в чате.

```
messages.affectedHistory#b45c69d1 pts:int pts_count:int offset:int = messages.AffectedHistory;

---functions---

messages.deleteHistory#b08f922a flags:# just_clear:flags.0?true revoke:flags.1?true peer:InputPeer max_id:int min_date:flags.2?int max_date:flags.3?int = messages.AffectedHistory;
messages.readMentions#36e5bf4d flags:# peer:InputPeer top_msg_id:flags.0?int = messages.AffectedHistory;
messages.unpinAllMessages#62dd747 flags:# peer:InputPeer top_msg_id:flags.0?int saved_peer_id:flags.1?InputPeer = messages.AffectedHistory;
messages.readReactions#9ec44f93 flags:# peer:InputPeer top_msg_id:flags.0?int saved_peer_id:flags.1?InputPeer = messages.AffectedHistory;
messages.deleteSavedHistory#4dc5085f flags:# parent_peer:flags.0?InputPeer peer:InputPeer max_id:int min_date:flags.2?int max_date:flags.3?int = messages.AffectedHistory;
messages.deleteTopicHistory#d2816f10 peer:InputPeer top_msg_id:int = messages.AffectedHistory;

channels.deleteParticipantHistory#367544db channel:InputChannel participant:InputPeer = messages.AffectedHistory;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.affectedHistory">messages.affectedHistory</a></td><td>Затронутая часть истории переписки с пользователем или в чате.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.deleteHistory">messages.deleteHistory</a></td><td>Удаляет историю переписки.</td></tr><tr><td><a href="/method/messages.readMentions">messages.readMentions</a></td><td>Отметить упоминания как прочитанные; может использоваться в <a href="/api/forum">форумах</a>, но <strong>не может</strong> использоваться в <a href="/api/monoforum">монофорумах</a>.</td></tr><tr><td><a href="/method/messages.unpinAllMessages">messages.unpinAllMessages</a></td><td><a href="/api/pin">Открепить</a> все закреплённые сообщения</td></tr><tr><td><a href="/method/messages.readReactions">messages.readReactions</a></td><td>Отметить <a href="/api/reactions">реакции на сообщения »</a> как прочитанные</td></tr><tr><td><a href="/method/messages.deleteSavedHistory">messages.deleteSavedHistory</a></td><td>Удаляет сообщения из <a href="/api/monoforum">темы монофорума »</a> либо удаляет сообщения, пересланные от определённого пира в <a href="/api/saved-messages">избранное »</a>.</td></tr><tr><td><a href="/method/messages.deleteTopicHistory">messages.deleteTopicHistory</a></td><td>Удалить историю сообщений <a href="/api/forum">темы форума</a></td></tr><tr><td><a href="/method/messages.readPollVotes">messages.readPollVotes</a></td><td>Отметить все <a href="/api/poll#unread-poll-votes">непрочитанные голоса в опросах »</a> в чате как прочитанные</td></tr><tr><td><a href="/method/channels.deleteParticipantHistory">channels.deleteParticipantHistory</a></td><td>Удалить все сообщения, отправленные определённым участником заданной супергруппы</td></tr></tbody></table>
