---
title: "Черновики сообщений"
original: "https://core.telegram.org/api/drafts"
section: api
description: "Черновики сообщений в Telegram позволяют синхронизировать между устройствами текст, набранный в поле ввода сообщения."
layout: layout.njk
---

# Черновики сообщений

[Черновики](https://telegram.org/blog/drafts) сообщений в Telegram позволяют синхронизировать между устройствами текст, набранный в поле ввода сообщения.

### Черновики

[@term:peer] Черновики представлены конструкторами [DraftMessage](/type/DraftMessage/). Параметры черновика, привязанного к конкретному пиру (`peer` — собеседник, группа или канал, которому адресовано сообщение), следует использовать как значения по умолчанию при составлении сообщения этому пиру (в случае медиа тот же черновик всё равно берётся за основу, а сообщение становится подписью). Если пользователь закрывает приложение, не отправив сообщение, сообщение следует сохранить как черновик:

### Сохранение черновиков

Сохранить черновик можно методом [messages.saveDraft](/method/messages.saveDraft/).

### Получение черновиков

Новые черновики автоматически рассылаются на все устройства обновлениями [updateDraftMessage](/constructor/updateDraftMessage/).

Объекты [Dialog](/constructor/dialog/), получаемые через API, также содержат черновик, связанный с диалогом.

### Очистка черновиков

Черновик можно очистить, установив флаг `clear_draft` при отправке сообщений или медиа методами [messages.sendMessage](/method/messages.sendMessage/), [messages.sendMedia](/method/messages.sendMedia/), [messages.sendMultiMedia](/method/messages.sendMultiMedia/), [messages.sendInlineBotResult](/method/messages.sendInlineBotResult/) и подобными — либо вручную, передав пустые значения в [messages.saveDraft](/method/messages.saveDraft/).
