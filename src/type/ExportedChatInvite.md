---
title: "ExportedChatInvite"
original: "https://core.telegram.org/type/ExportedChatInvite"
section: ref
kind: type
description: "Экспортированное приглашение в чат"
layout: layout.njk
---

# ExportedChatInvite

Экспортированное приглашение в чат

```
chatInviteExported#a22cbd96 flags:# revoked:flags.0?true permanent:flags.5?true request_needed:flags.6?true link:string admin_id:long date:int start_date:flags.4?int expire_date:flags.1?int usage_limit:flags.2?int usage:flags.3?int requested:flags.7?int subscription_expired:flags.10?int title:flags.8?string subscription_pricing:flags.9?StarsSubscriptionPricing = ExportedChatInvite;
chatInvitePublicJoinRequests#ed107ab7 = ExportedChatInvite;

---functions---

messages.exportChatInvite#a455de90 flags:# legacy_revoke_permanent:flags.2?true request_needed:flags.3?true peer:InputPeer expire_date:flags.0?int usage_limit:flags.1?int title:flags.4?string subscription_pricing:flags.5?StarsSubscriptionPricing = ExportedChatInvite;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/chatInviteExported">chatInviteExported</a></td><td>Экспортированное приглашение в чат</td></tr><tr><td><a href="/constructor/chatInvitePublicJoinRequests">chatInvitePublicJoinRequests</a></td><td>Используется в обновлениях и в журнале канала, чтобы указать, что пользователь подаёт заявку на вступление в <a href="/api/discussion#requiring-users-to-join-the-group">группу обсуждения</a> или уже вступил в неё</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.exportChatInvite">messages.exportChatInvite</a></td><td>Экспортировать пригласительную ссылку для чата</td></tr></tbody></table>
