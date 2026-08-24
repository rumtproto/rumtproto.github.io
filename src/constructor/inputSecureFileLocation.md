---
title: "inputSecureFileLocation"
original: "https://core.telegram.org/constructor/inputSecureFileLocation"
section: ref
kind: constructor
description: "Расположение зашифрованного файла telegram passport."
layout: layout.njk
---

# inputSecureFileLocation

Расположение зашифрованного файла telegram [passport](https://core.telegram.org/passport).

```
inputSecureFileLocation#cbc7ee28 id:long access_hash:long = InputFileLocation;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор файла, значение параметра <strong>id</strong> из <a href="/constructor/secureFile">secureFile</a></td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] Контрольная сумма, значение параметра <strong>access_hash</strong> из <a href="/constructor/secureFile">secureFile</a></td></tr></tbody></table>

### Тип

[InputFileLocation](/type/InputFileLocation/)

### Связанные страницы

#### [secureFile](/constructor/secureFile/)

Защищённый файл [passport](https://core.telegram.org/passport); подробнее [см. документацию по Telegram Passport »](https://core.telegram.org/passport/encryption#inputsecurefile)

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.
