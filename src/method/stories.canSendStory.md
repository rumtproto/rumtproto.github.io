---
title: "stories.canSendStory (метод)"
original: "https://core.telegram.org/method/stories.canSendStory"
section: ref
kind: method
layout: layout.njk
---

# stories.canSendStory

*Метод из схемы TL.*

> Check whether we can post stories as the specified peer.

## Определение TL

```
stories.canSendStoryCount#c387c04e count_remains:int = stories.CanSendStoryCount;
---functions---
stories.canSendStory#30eb63f0 peer:InputPeer = stories.CanSendStoryCount;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The peer from which we wish to post stories. |

## Результат

[stories.CanSendStoryCount](/type/stories.CanSendStoryCount/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOOSTS_REQUIRED | The specified channel must first be [boosted by its users](https://core.telegram.org/api/boost) in order to perform this action. |
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | PREMIUM_ACCOUNT_REQUIRED | A premium account is required to execute this action. |
| 400 | STORIES_TOO_MUCH | You have hit the maximum active stories limit as specified by the [story_expiring_limit_* client configuration parameters](https://core.telegram.org/api/config#story-expiring-limit-default): you should buy a [Premium](https://core.telegram.org/api/premium) subscription, delete an active story, or wait for the oldest story to expire. |
| 400 | STORY_SEND_FLOOD_MONTHLY_%d | You've hit the monthly story limit as specified by the [stories_sent_monthly_limit_* client configuration parameters](https://core.telegram.org/api/config#stories-sent-monthly-limit-default): wait %d seconds before posting a new story. |
| 400 | STORY_SEND_FLOOD_WEEKLY_%d | You've hit the weekly story limit as specified by the [stories_sent_weekly_limit_* client configuration parameters](https://core.telegram.org/api/config#stories-sent-weekly-limit-default): wait for %d seconds before posting a new story. |

## Related pages

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.
