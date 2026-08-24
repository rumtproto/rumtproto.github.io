---
title: "PrivacyKey"
original: "https://core.telegram.org/type/PrivacyKey"
section: ref
kind: type
description: "**Ключи** приватности вместе с правилами приватности » определяют, _что_ кому разрешено или запрещено делать; они задаются конструктором PrivacyKey и его входным аналогом…"
layout: layout.njk
---

# PrivacyKey

**Ключи** приватности вместе с [правилами приватности »](/api/privacy/#privacy-rules) определяют, _что_ кому разрешено или запрещено делать; они задаются конструктором [PrivacyKey](/type/PrivacyKey/) и его входным аналогом [InputPrivacyKey](/type/InputPrivacyKey/).

Подробнее см. [документацию по приватности »](/api/privacy/).

```
privacyKeyStatusTimestamp#bc2eab30 = PrivacyKey;
privacyKeyChatInvite#500e6dfa = PrivacyKey;
privacyKeyPhoneCall#3d662b7b = PrivacyKey;
privacyKeyPhoneP2P#39491cc8 = PrivacyKey;
privacyKeyForwards#69ec56a3 = PrivacyKey;
privacyKeyProfilePhoto#96151fed = PrivacyKey;
privacyKeyPhoneNumber#d19ae46d = PrivacyKey;
privacyKeyAddedByPhone#42ffd42b = PrivacyKey;
privacyKeyVoiceMessages#697f414 = PrivacyKey;
privacyKeyAbout#a486b761 = PrivacyKey;
privacyKeyBirthday#2000a518 = PrivacyKey;
privacyKeyStarGiftsAutoSave#2ca4fdf8 = PrivacyKey;
privacyKeyNoPaidMessages#17d348d2 = PrivacyKey;
privacyKeySavedMusic#ff7a571b = PrivacyKey;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/privacyKeyStatusTimestamp">privacyKeyStatusTimestamp</a></td><td>Можем ли мы видеть время последнего посещения этого пользователя.<br><br>Обратите внимание: если <em>мы</em> решили скрыть своё точное время последнего посещения от кого-либо (то есть от пользователей A, B, C или от всех пользователей) <strong>и</strong> у нас нет подписки <a href="/api/premium">Premium</a>, мы не сможем видеть точное время последнего посещения этих пользователей (A, B, C или всех пользователей), даже если эти пользователи <em>действительно</em> показывают его нам.<br><br>Если эти пользователи <em>действительно</em> показывают нам своё точное время последнего посещения, но мы не можем его видеть по указанной выше причине, то будет установлен флаг <code>by_me</code> у конструкторов <a href="/constructor/userStatusRecently">userStatusRecently</a>, <a href="/constructor/userStatusLastWeek">userStatusLastWeek</a>, <a href="/constructor/userStatusLastMonth">userStatusLastMonth</a>.</td></tr><tr><td><a href="/constructor/privacyKeyChatInvite">privacyKeyChatInvite</a></td><td>Можно ли приглашать пользователя в чаты</td></tr><tr><td><a href="/constructor/privacyKeyPhoneCall">privacyKeyPhoneCall</a></td><td>Принимает ли пользователь звонки</td></tr><tr><td><a href="/constructor/privacyKeyPhoneP2P">privacyKeyPhoneP2P</a></td><td>Разрешены ли P2P-соединения при звонках с этим пользователем</td></tr><tr><td><a href="/constructor/privacyKeyForwards">privacyKeyForwards</a></td><td>Будут ли сообщения, пересланные от этого пользователя, <a href="https://telegram.org/blog/unsend-privacy-emoji#anonymous-forwarding">пересылаться анонимно</a></td></tr><tr><td><a href="/constructor/privacyKeyProfilePhoto">privacyKeyProfilePhoto</a></td><td>Видна ли фотография профиля пользователя</td></tr><tr><td><a href="/constructor/privacyKeyPhoneNumber">privacyKeyPhoneNumber</a></td><td>Разрешает ли пользователь нам видеть его номер телефона</td></tr><tr><td><a href="/constructor/privacyKeyAddedByPhone">privacyKeyAddedByPhone</a></td><td>Можно ли добавить этого пользователя в наш список контактов по номеру телефона</td></tr><tr><td><a href="/constructor/privacyKeyVoiceMessages">privacyKeyVoiceMessages</a></td><td>Принимает ли пользователь голосовые сообщения</td></tr><tr><td><a href="/constructor/privacyKeyAbout">privacyKeyAbout</a></td><td>Могут ли другие видеть вашу биографию</td></tr><tr><td><a href="/constructor/privacyKeyBirthday">privacyKeyBirthday</a></td><td>Может ли пользователь видеть наш день рождения.</td></tr><tr><td><a href="/constructor/privacyKeyStarGiftsAutoSave">privacyKeyStarGiftsAutoSave</a></td><td>Будут ли полученные <a href="/api/gifts">подарки</a> автоматически отображаться в нашем профиле</td></tr><tr><td><a href="/constructor/privacyKeyNoPaidMessages">privacyKeyNoPaidMessages</a></td><td>Кто может писать вам без оплаты, если включены <a href="/api/paid-messages">платные сообщения »</a>.</td></tr><tr><td><a href="/constructor/privacyKeySavedMusic">privacyKeySavedMusic</a></td><td>Может ли пользователь видеть <a href="/api/profile#music">композиции, закреплённые в нашем профиле »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Настройки приватности](/api/privacy/)

Telegram позволяет пользователям задавать детальные настройки приватности, выбирая, кто может и кто не может взаимодействовать с ними тем или иным способом.

#### [PrivacyKey](/type/PrivacyKey/)

**Ключи** приватности вместе с [правилами приватности »](/api/privacy/#privacy-rules) определяют, _что_ кому разрешено или запрещено делать; они задаются конструктором [PrivacyKey](/type/PrivacyKey/) и его входным аналогом [InputPrivacyKey](/type/InputPrivacyKey/).

Подробнее см. [документацию по приватности »](/api/privacy/).

#### [InputPrivacyKey](/type/InputPrivacyKey/)

**Ключи** приватности вместе с [правилами приватности »](/api/privacy/#privacy-rules) определяют, _что_ кому разрешено или запрещено делать; они задаются конструктором [PrivacyKey](/type/PrivacyKey/) и его входным аналогом [InputPrivacyKey](/type/InputPrivacyKey/).

Подробнее см. [документацию по приватности »](/api/privacy/).
