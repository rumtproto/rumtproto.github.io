---
title: "GlobalPrivacySettings"
original: "https://core.telegram.org/type/GlobalPrivacySettings"
section: ref
kind: type
description: "Глобальные настройки приватности"
layout: layout.njk
---

# GlobalPrivacySettings

Глобальные настройки приватности

```
globalPrivacySettings#fe41b34f flags:# archive_and_mute_new_noncontact_peers:flags.0?true keep_archived_unmuted:flags.1?true keep_archived_folders:flags.2?true hide_read_marks:flags.3?true new_noncontact_peers_require_premium:flags.4?true display_gifts_button:flags.7?true noncontact_peers_paid_stars:flags.5?long disallowed_gifts:flags.6?DisallowedGiftsSettings = GlobalPrivacySettings;

---functions---

account.getGlobalPrivacySettings#eb2b4cf6 = GlobalPrivacySettings;
account.setGlobalPrivacySettings#1edaaac2 settings:GlobalPrivacySettings = GlobalPrivacySettings;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/globalPrivacySettings">globalPrivacySettings</a></td><td>Глобальные настройки приватности</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.getGlobalPrivacySettings">account.getGlobalPrivacySettings</a></td><td>Получить глобальные настройки приватности</td></tr><tr><td><a href="/method/account.setGlobalPrivacySettings">account.setGlobalPrivacySettings</a></td><td>Задать глобальные настройки приватности</td></tr></tbody></table>
