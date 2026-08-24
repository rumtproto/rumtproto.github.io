---
title: "Кнопка меню бота"
original: "https://core.telegram.org/api/bots/menu"
section: api
description: "Боты могут выбирать поведение кнопки меню, которая показывается рядом с полем ввода текста."
layout: layout.njk
---

# Кнопка меню бота

Боты могут выбирать поведение кнопки меню, которая показывается рядом с полем ввода текста.

Упрощённое описание с использованием HTTP bot API приведено [здесь »](https://core.telegram.org/bots/api).

### Установка кнопки меню

Схема:

```
botMenuButtonDefault#7533a588 = BotMenuButton;
botMenuButtonCommands#4258c205 = BotMenuButton;
botMenuButton#c7b57ce6 text:string url:string = BotMenuButton;

inputUserEmpty#b98886cf = InputUser;
inputUser#f21158c6 user_id:long access_hash:long = InputUser;

---functions---

bots.setBotMenuButton#4504d54f user_id:InputUser button:BotMenuButton = Bool;
```

Боты могут использовать [bots.setBotMenuButton](/method/bots.setBotMenuButton/), чтобы изменить кнопку меню для конкретного пользователя или для всех пользователей.

#### Установка области действия: все пользователи

Чтобы изменить кнопку меню для всех пользователей, используйте следующие параметры:

-   `user_id` — [inputUserEmpty](/constructor/inputUserEmpty/)
-   `button` — один из следующих конструкторов:
    -   [@term:Mini App] [botMenuButton](/constructor/botMenuButton/) — при нажатии открывает [Mini App бота](/api/bots/webapps/) (веб-приложение, которое запускается прямо внутри клиента Telegram).
    -   [botMenuButtonCommands](/constructor/botMenuButtonCommands/) — при нажатии открывает список команд бота.

[botMenuButtonDefault](/constructor/botMenuButton/) использовать не следует: он ни на что не влияет и сохраняет ранее установленную кнопку меню (либо [botMenuButton](/constructor/botMenuButton/), либо [botMenuButtonCommands](/constructor/botMenuButtonCommands/)).

#### Установка области действия: конкретные пользователи

Чтобы изменить кнопку меню для конкретного пользователя, используйте следующие параметры:

-   [@term:access_hash] `user_id` — [inputUser](/constructor/inputUser/) с идентификатором пользователя и его `access_hash` (хеш доступа — значение, которое сервер выдаёт вместе с идентификатором и без которого обратиться к пиру нельзя)
-   `button` — один из следующих конструкторов:
    -   [botMenuButton](/constructor/botMenuButton/) — при нажатии открывает [Mini App бота](/api/bots/webapps/).
    -   [botMenuButtonCommands](/constructor/botMenuButtonCommands/) — при нажатии открывает список команд бота.
    -   [botMenuButtonDefault](/constructor/botMenuButton/) — возвращает поведение кнопки к [области действия по умолчанию (все пользователи)](#set-scope-all-users).

### Получение кнопки меню

#### Боты

```
botMenuButtonDefault#7533a588 = BotMenuButton;
botMenuButtonCommands#4258c205 = BotMenuButton;
botMenuButton#c7b57ce6 text:string url:string = BotMenuButton;

inputUserEmpty#b98886cf = InputUser;
inputUser#f21158c6 user_id:long access_hash:long = InputUser;

---functions---

bots.getBotMenuButton#9c60eb28 user_id:InputUser = BotMenuButton;
```

Боту может потребоваться узнать, какой тип кнопки сейчас используется в конкретном чате или во всех чатах: для этого предназначен метод [bots.getBotMenuButton](/method/bots.getBotMenuButton/).

Пользователям этот метод недоступен — вместо него им следует использовать [метод для пользователей](#users).

##### Получение области действия: все пользователи

Чтобы узнать, какая кнопка меню используется для всех пользователей, укажите следующий параметр:

-   `user_id` — [inputUserEmpty](/constructor/inputUserEmpty/)

Будет возвращён один из следующих конструкторов:

-   [botMenuButton](/constructor/botMenuButton/) — при нажатии открывает [Mini App бота](/api/bots/webapps/).
-   [botMenuButtonCommands](/constructor/botMenuButtonCommands/) — при нажатии открывает список команд бота.

[botMenuButtonDefault](/constructor/botMenuButton/) в этом случае не возвращается никогда.

##### Получение области действия: конкретные пользователи

Чтобы узнать, какая кнопка меню используется для конкретного пользователя, укажите следующий параметр:

-   `user_id` — [inputUser](/constructor/inputUser/) с идентификатором пользователя и его `access_hash`

Будет возвращён один из следующих конструкторов:

-   [botMenuButton](/constructor/botMenuButton/) — при нажатии открывает [Mini App бота](/api/bots/webapps/).
-   [botMenuButtonCommands](/constructor/botMenuButtonCommands/) — при нажатии открывает список команд бота.
-   [botMenuButtonDefault](/constructor/botMenuButton/) — [используется поведение кнопки из области действия по умолчанию (все пользователи)](#get-scope-all-users).

#### Пользователи

```
updateBotMenuButton#14b85813 bot_id:long button:BotMenuButton = Update;

botMenuButtonCommands#4258c205 = BotMenuButton;
botMenuButton#c7b57ce6 text:string url:string = BotMenuButton;

botInfo#4d8a0299 flags:# has_preview_medias:flags.6?true user_id:flags.0?long description:flags.1?string description_photo:flags.4?Photo description_document:flags.5?Document commands:flags.2?Vector<BotCommand> menu_button:flags.3?BotMenuButton privacy_policy_url:flags.7?string app_settings:flags.8?BotAppSettings verifier_settings:flags.9?BotVerifierSettings = BotInfo;

userFull#06cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;

---functions---

users.getFullUser#b60f5918 id:InputUser = users.UserFull;
```

Когда бот меняет поведение кнопки меню глобально или в личном чате с пользователем, пользователи получают обновление [updateBotMenuButton](/constructor/updateBotMenuButton/).

Для новых ботов можно вызвать [users.getFullUser](/method/users.getFullUser/) и получить относящийся к боту конструктор [userFull](/constructor/userFull/): он содержит конструктор [botInfo](/constructor/botInfo/) с различными сведениями о боте, в том числе с поведением кнопки меню.

[botMenuButtonDefault](/constructor/botMenuButton/) никогда не возвращается ни в [updateBotMenuButton](/constructor/updateBotMenuButton/), ни в [botInfo](/constructor/botInfo/) (но если это всё же произойдёт, его следует трактовать как [botMenuButtonCommands](/constructor/botMenuButtonCommands/)).

Ботам же следует использовать [метод для ботов](#bots).
