---
title: "bots.invokeWebViewCustomMethod (метод)"
original: "https://core.telegram.org/method/bots.invokeWebViewCustomMethod"
section: ref
kind: method
layout: layout.njk
---

# bots.invokeWebViewCustomMethod

*Метод из схемы TL.*

> Send a custom request from a [mini bot app](https://core.telegram.org/api/bots/webapps), triggered by a [web\_app\_invoke\_custom\_method event »](https://core.telegram.org/api/web-events#web-app-invoke-custom-method).
> The response should be sent using a [custom\_method\_invoked](https://core.telegram.org/api/bots/webapps#custom-method-invoked) event, [see here »](https://core.telegram.org/api/web-events#web-app-invoke-custom-method) for more info on the flow.

## Определение TL

```
dataJSON#7d748d04 data:string = DataJSON;
---functions---
bots.invokeWebViewCustomMethod#87fc5e7 bot:InputUser custom_method:string params:DataJSON = DataJSON;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| bot | [InputUser](/type/InputUser/) | Identifier of the bot associated to the [mini bot app](https://core.telegram.org/api/bots/webapps) |
| custom_method | [string](/type/string/) | Identifier of the custom method to invoke |
| params | [DataJSON](/type/DataJSON/) | Method parameters |

## Результат

[DataJSON](/type/DataJSON/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |
| 400 | DATA_JSON_INVALID | The provided JSON data is invalid. |
| 400 | METHOD_INVALID | The specified method is invalid. |

## Related pages

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Web events](https://core.telegram.org/api/web-events)

How telegram apps interact with webpages
