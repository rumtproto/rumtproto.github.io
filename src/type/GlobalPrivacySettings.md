---
title: "GlobalPrivacySettings (тип)"
original: "https://core.telegram.org/type/GlobalPrivacySettings"
section: ref
kind: type
layout: layout.njk
---

# GlobalPrivacySettings

*Тип из схемы TL.*

> Global privacy settings

## Определение TL

```
globalPrivacySettings#fe41b34f flags:# archive_and_mute_new_noncontact_peers:flags.0?true keep_archived_unmuted:flags.1?true keep_archived_folders:flags.2?true hide_read_marks:flags.3?true new_noncontact_peers_require_premium:flags.4?true display_gifts_button:flags.7?true noncontact_peers_paid_stars:flags.5?long disallowed_gifts:flags.6?DisallowedGiftsSettings = GlobalPrivacySettings;

---functions---

account.getGlobalPrivacySettings#eb2b4cf6 = GlobalPrivacySettings;
account.setGlobalPrivacySettings#1edaaac2 settings:GlobalPrivacySettings = GlobalPrivacySettings;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [globalPrivacySettings](/constructor/globalPrivacySettings/) | Global privacy settings |

## Методы

| Method | Описание |
|---|---|
| [account.getGlobalPrivacySettings](/method/account.getGlobalPrivacySettings/) | Get global privacy settings |
| [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/) | Set global privacy settings |
