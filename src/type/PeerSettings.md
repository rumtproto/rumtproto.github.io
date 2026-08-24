---
title: "PeerSettings"
original: "https://core.telegram.org/type/PeerSettings"
section: ref
kind: type
description: "Список действий, доступных при взаимодействии с этим пользователем; отображаются как предлагаемые действия в панели чата"
layout: layout.njk
---

# PeerSettings

Список действий, доступных при взаимодействии с этим пользователем; отображаются как предлагаемые действия в панели чата

```
peerSettings#f47741f7 flags:# report_spam:flags.0?true add_contact:flags.1?true block_contact:flags.2?true share_contact:flags.3?true need_contacts_exception:flags.4?true report_geo:flags.5?true autoarchived:flags.7?true invite_members:flags.8?true request_chat_broadcast:flags.10?true business_bot_paused:flags.11?true business_bot_can_reply:flags.12?true geo_distance:flags.6?int request_chat_title:flags.9?string request_chat_date:flags.9?int business_bot_id:flags.13?long business_bot_manage_url:flags.13?string charge_paid_message_stars:flags.14?long registration_month:flags.15?string phone_country:flags.16?string name_change_date:flags.17?int photo_change_date:flags.18?int = PeerSettings;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/peerSettings">peerSettings</a></td><td>Список действий, доступных при взаимодействии с этим пользователем; они показываются как предлагаемые действия в <a href="/api/action-bar">панели действий чата »</a>, подробнее <a href="/api/action-bar">см. здесь »</a>.</td></tr></tbody></table>
