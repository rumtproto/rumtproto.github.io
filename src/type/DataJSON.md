---
title: "DataJSON"
original: "https://core.telegram.org/type/DataJSON"
section: ref
kind: type
description: "Представляет объект в формате JSON"
layout: layout.njk
---

# DataJSON

Представляет объект в формате JSON

```
dataJSON#7d748d04 data:string = DataJSON;

---functions---

bots.sendCustomRequest#aa2769ed custom_method:string params:DataJSON = DataJSON;
bots.invokeWebViewCustomMethod#87fc5e7 bot:InputUser custom_method:string params:DataJSON = DataJSON;

phone.getCallConfig#55451fa9 = DataJSON;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/dataJSON">dataJSON</a></td><td>Представляет объект в формате JSON</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/bots.sendCustomRequest">bots.sendCustomRequest</a></td><td>Отправляет произвольный запрос; только для ботов</td></tr><tr><td><a href="/method/bots.invokeWebViewCustomMethod">bots.invokeWebViewCustomMethod</a></td><td>Отправить произвольный запрос от <a href="/api/bots/webapps">mini bot app</a>, инициированный <a href="/api/web-events#web-app-invoke-custom-method">событием web_app_invoke_custom_method »</a>.<br><br>Ответ следует отправить с помощью события <a href="/api/bots/webapps#custom-method-invoked">custom_method_invoked</a>; подробнее о порядке действий см. <a href="/api/web-events#web-app-invoke-custom-method">здесь »</a>.</td></tr><tr><td><a href="/method/phone.getCallConfig">phone.getCallConfig</a></td><td>УСТАРЕЛО: получить конфигурацию звонков для передачи в общую конфигурацию libtgvoip (устаревшей библиотеки).</td></tr></tbody></table>
