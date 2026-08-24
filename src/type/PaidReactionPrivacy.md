---
title: "PaidReactionPrivacy"
original: "https://core.telegram.org/type/PaidReactionPrivacy"
section: ref
kind: type
description: "Настройки приватности платных реакций »"
layout: layout.njk
---

# PaidReactionPrivacy

[Настройки приватности платных реакций »](/api/reactions/#paid-reactions)

```
paidReactionPrivacyDefault#206ad49e = PaidReactionPrivacy;
paidReactionPrivacyAnonymous#1f0c1ad9 = PaidReactionPrivacy;
paidReactionPrivacyPeer#dc6cfcf0 peer:InputPeer = PaidReactionPrivacy;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/paidReactionPrivacyDefault">paidReactionPrivacyDefault</a></td><td>Используется настройка приватности реакций по умолчанию, заданная методом <a href="/method/messages.togglePaidReactionPrivacy">messages.togglePaidReactionPrivacy</a>.</td></tr><tr><td><a href="/constructor/paidReactionPrivacyAnonymous">paidReactionPrivacyAnonymous</a></td><td>Отправить платные реакции анонимно.</td></tr><tr><td><a href="/constructor/paidReactionPrivacyPeer">paidReactionPrivacyPeer</a></td><td>Отправлять платные реакции от имени указанного пира, полученного через <a href="/method/channels.getSendAs">channels.getSendAs</a> с установленным флагом <code>for_paid_reactions</code>.</td></tr></tbody></table>

### Связанные страницы

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.
