---
title: "InputPrivacyKey"
original: "https://core.telegram.org/type/InputPrivacyKey"
section: ref
kind: type
description: "**Ключи** приватности вместе с правилами приватности » определяют, _что_ кому разрешено или запрещено делать; они задаются конструктором PrivacyKey и его входным аналогом…"
layout: layout.njk
---

# InputPrivacyKey

**Ключи** приватности вместе с [правилами приватности »](/api/privacy/#privacy-rules) определяют, _что_ кому разрешено или запрещено делать; они задаются конструктором [PrivacyKey](/type/PrivacyKey/) и его входным аналогом [InputPrivacyKey](/type/InputPrivacyKey/).

Подробнее см. [документацию по приватности »](/api/privacy/).

```
inputPrivacyKeyStatusTimestamp#4f96cb18 = InputPrivacyKey;
inputPrivacyKeyChatInvite#bdfb0426 = InputPrivacyKey;
inputPrivacyKeyPhoneCall#fabadc5f = InputPrivacyKey;
inputPrivacyKeyPhoneP2P#db9e70d2 = InputPrivacyKey;
inputPrivacyKeyForwards#a4dd4c08 = InputPrivacyKey;
inputPrivacyKeyProfilePhoto#5719bacc = InputPrivacyKey;
inputPrivacyKeyPhoneNumber#352dafa = InputPrivacyKey;
inputPrivacyKeyAddedByPhone#d1219bdd = InputPrivacyKey;
inputPrivacyKeyVoiceMessages#aee69d68 = InputPrivacyKey;
inputPrivacyKeyAbout#3823cc40 = InputPrivacyKey;
inputPrivacyKeyBirthday#d65a11cc = InputPrivacyKey;
inputPrivacyKeyStarGiftsAutoSave#e1732341 = InputPrivacyKey;
inputPrivacyKeyNoPaidMessages#bdc597b4 = InputPrivacyKey;
inputPrivacyKeySavedMusic#4dbe9226 = InputPrivacyKey;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputPrivacyKeyStatusTimestamp">inputPrivacyKeyStatusTimestamp</a></td><td>Смогут ли другие видеть точное время нашего последнего пребывания в сети.<br><br>Учтите: если <em>мы</em> решим скрыть точное время своего последнего пребывания в сети от кого-либо (то есть от пользователей A, B, C или от всех пользователей) <strong>и</strong> у нас нет подписки <a href="/api/premium">Premium</a>, мы не сможем видеть точное время последнего пребывания в сети этих пользователей (A, B, C или всех пользователей), даже если они <em>действительно</em> делятся им с нами.<br><br>Если эти пользователи <em>действительно</em> делятся с нами своим точным статусом в сети, но мы не видим его по указанной выше причине, будет установлен флаг <code>by_me</code> в конструкторах <a href="/constructor/userStatusRecently">userStatusRecently</a>, <a href="/constructor/userStatusLastWeek">userStatusLastWeek</a>, <a href="/constructor/userStatusLastMonth">userStatusLastMonth</a>.</td></tr><tr><td><a href="/constructor/inputPrivacyKeyChatInvite">inputPrivacyKeyChatInvite</a></td><td>Смогут ли другие приглашать вас в чаты</td></tr><tr><td><a href="/constructor/inputPrivacyKeyPhoneCall">inputPrivacyKeyPhoneCall</a></td><td>Будете ли вы принимать звонки</td></tr><tr><td><a href="/constructor/inputPrivacyKeyPhoneP2P">inputPrivacyKeyPhoneP2P</a></td><td>Разрешать ли P2P-связь во время VoIP-звонков</td></tr><tr><td><a href="/constructor/inputPrivacyKeyForwards">inputPrivacyKeyForwards</a></td><td>Будут ли сообщения, пересланные от вас, <a href="https://telegram.org/blog/unsend-privacy-emoji#anonymous-forwarding">анонимными</a></td></tr><tr><td><a href="/constructor/inputPrivacyKeyProfilePhoto">inputPrivacyKeyProfilePhoto</a></td><td>Смогут ли другие видеть вашу фотографию профиля</td></tr><tr><td><a href="/constructor/inputPrivacyKeyPhoneNumber">inputPrivacyKeyPhoneNumber</a></td><td>Смогут ли другие видеть ваш номер телефона</td></tr><tr><td><a href="/constructor/inputPrivacyKeyAddedByPhone">inputPrivacyKeyAddedByPhone</a></td><td>Могут ли другие добавить вас в список контактов по номеру телефона</td></tr><tr><td><a href="/constructor/inputPrivacyKeyVoiceMessages">inputPrivacyKeyVoiceMessages</a></td><td>Могут ли другие отправлять вам голосовые сообщения или видеосообщения (только для пользователей <a href="/api/premium">Premium</a>).</td></tr><tr><td><a href="/constructor/inputPrivacyKeyAbout">inputPrivacyKeyAbout</a></td><td>Могут ли другие видеть вашу биографию</td></tr><tr><td><a href="/constructor/inputPrivacyKeyBirthday">inputPrivacyKeyBirthday</a></td><td>Может ли пользователь видеть наш день рождения.</td></tr><tr><td><a href="/constructor/inputPrivacyKeyStarGiftsAutoSave">inputPrivacyKeyStarGiftsAutoSave</a></td><td>Будут ли полученные <a href="/api/gifts">подарки</a> автоматически отображаться в нашем профиле</td></tr><tr><td><a href="/constructor/inputPrivacyKeyNoPaidMessages">inputPrivacyKeyNoPaidMessages</a></td><td>Кто может писать вам без оплаты, если включены <a href="/api/paid-messages">платные сообщения »</a>.</td></tr><tr><td><a href="/constructor/inputPrivacyKeySavedMusic">inputPrivacyKeySavedMusic</a></td><td>Может ли пользователь видеть <a href="/api/profile#music">композиции, закреплённые в нашем профиле »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Настройки приватности](/api/privacy/)

Telegram позволяет пользователям задавать детальные настройки приватности, выбирая, кто может и кто не может взаимодействовать с ними тем или иным способом.

#### [PrivacyKey](/type/PrivacyKey/)

**Ключи** приватности вместе с [правилами приватности »](/api/privacy/#privacy-rules) определяют, _что_ кому разрешено или запрещено делать; они задаются конструктором [PrivacyKey](/type/PrivacyKey/) и его входным аналогом [InputPrivacyKey](/type/InputPrivacyKey/).

Подробнее см. [документацию по приватности »](/api/privacy/).

#### [InputPrivacyKey](/type/InputPrivacyKey/)

**Ключи** приватности вместе с [правилами приватности »](/api/privacy/#privacy-rules) определяют, _что_ кому разрешено или запрещено делать; они задаются конструктором [PrivacyKey](/type/PrivacyKey/) и его входным аналогом [InputPrivacyKey](/type/InputPrivacyKey/).

Подробнее см. [документацию по приватности »](/api/privacy/).
