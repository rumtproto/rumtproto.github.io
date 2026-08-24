---
title: "account.getGlobalPrivacySettings"
original: "https://core.telegram.org/method/account.getGlobalPrivacySettings"
section: ref
kind: method
description: "Получить глобальные настройки приватности"
layout: layout.njk
---

# account.getGlobalPrivacySettings

Получить глобальные настройки приватности

```
globalPrivacySettings#fe41b34f flags:# archive_and_mute_new_noncontact_peers:flags.0?true keep_archived_unmuted:flags.1?true keep_archived_folders:flags.2?true hide_read_marks:flags.3?true new_noncontact_peers_require_premium:flags.4?true display_gifts_button:flags.7?true noncontact_peers_paid_stars:flags.5?long disallowed_gifts:flags.6?DisallowedGiftsSettings = GlobalPrivacySettings;
---functions---
account.getGlobalPrivacySettings#eb2b4cf6 = GlobalPrivacySettings;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[GlobalPrivacySettings](/type/GlobalPrivacySettings/)

### Этот метод доступен только пользователям
