---
title: "DataJSON (тип)"
original: "https://core.telegram.org/type/DataJSON"
section: ref
kind: type
layout: layout.njk
---

# DataJSON

*Тип из схемы TL.*

> Represent a JSON-encoded object

## Определение TL

```
dataJSON#7d748d04 data:string = DataJSON;

---functions---

bots.sendCustomRequest#aa2769ed custom_method:string params:DataJSON = DataJSON;
bots.invokeWebViewCustomMethod#87fc5e7 bot:InputUser custom_method:string params:DataJSON = DataJSON;

phone.getCallConfig#55451fa9 = DataJSON;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [dataJSON](/constructor/dataJSON/) | Represents a json-encoded object |

## Методы

| Method | Описание |
|---|---|
| [bots.sendCustomRequest](/method/bots.sendCustomRequest/) | Sends a custom request; for bots only |
| [bots.invokeWebViewCustomMethod](/method/bots.invokeWebViewCustomMethod/) | Send a custom request from a [mini bot app](https://core.telegram.org/api/bots/webapps), triggered by a [web_app_invoke_custom_method event »](https://core.telegram.org/api/web-events#web-app-invoke-custom-method). The response should be sent using a [custom_method_invoked](https://core.telegram.org/api/bots/webapps#custom-method-invoked) event, [see here »](https://core.telegram.org/api/web-events#web-app-invoke-custom-method) for more info on the flow. |
| [phone.getCallConfig](/method/phone.getCallConfig/) | DEPRECATED: Get phone call configuration to be passed to the libtgvoip (deprecated) shared config. |
