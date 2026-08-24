---
title: "stories.canSendStory"
original: "https://core.telegram.org/method/stories.canSendStory"
section: ref
kind: method
description: "Проверить, можем ли мы публиковать истории от имени указанного пира."
layout: layout.njk
---

# stories.canSendStory

Проверить, можем ли мы публиковать истории от имени указанного пира.

```
stories.canSendStoryCount#c387c04e count_remains:int = stories.CanSendStoryCount;
---functions---
stories.canSendStory#30eb63f0 peer:InputPeer = stories.CanSendStoryCount;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, от имени которого мы хотим публиковать истории.</td></tr></tbody></table>

### Результат

[stories.CanSendStoryCount](/type/stories.CanSendStoryCount/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOOSTS_REQUIRED</td><td>Чтобы выполнить это действие, указанный канал должен быть сначала <a href="/api/boost">забустен своими пользователями</a>.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>Для выполнения этого действия требуется аккаунт Premium.</td></tr><tr><td>400</td><td>STORIES_TOO_MUCH</td><td>Вы достигли предельного числа активных историй, заданного <a href="/api/config#story-expiring-limit-default">параметрами клиентской конфигурации <code>story_expiring_limit_*</code></a>: следует приобрести подписку <a href="/api/premium">Premium</a>, удалить одну из активных историй или дождаться истечения срока самой старой из них.</td></tr><tr><td>400</td><td>STORY_SEND_FLOOD_MONTHLY_%d</td><td>Вы достигли месячного лимита историй, заданного <a href="/api/config#stories-sent-monthly-limit-default">параметрами клиентской конфигурации <code>stories_sent_monthly_limit_*</code></a>: подождите %d секунд перед публикацией новой истории.</td></tr><tr><td>400</td><td>STORY_SEND_FLOOD_WEEKLY_%d</td><td>Вы достигли недельного лимита историй, заданного <a href="/api/config#stories-sent-weekly-limit-default">параметрами клиентской конфигурации <code>stories_sent_weekly_limit_*</code></a>: подождите %d секунд перед публикацией новой истории.</td></tr></tbody></table>

### Связанные страницы

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.
