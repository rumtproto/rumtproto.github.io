---
title: "factCheck"
original: "https://core.telegram.org/constructor/factCheck"
section: ref
kind: constructor
description: "Представляет проверку фактов », выполненную независимым фактчекером."
layout: layout.njk
---

# factCheck

Представляет [проверку фактов »](/api/factcheck/), выполненную независимым фактчекером.

```
factCheck#b89bfccf flags:# need_check:flags.0?true country:flags.1?string text:flags.1?TextWithEntities hash:long = FactCheck;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>need_check</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>[@term:hash] Если установлено, поля <code>country</code> и <code>text</code> заданы <strong>не</strong> будут, и клиент обязан получить проверку фактов вручную (если она ещё не закеширована с ключом, указанным в <code>hash</code>) с помощью объединённых в пакет запросов <a href="/method/messages.getFactCheck">messages.getFactCheck</a>, когда сообщение с проверкой фактов попадает в область видимости.</td></tr><tr><td><strong>country</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Двухбуквенный код страны по стандарту ISO 3166-1 alpha-2, определяющий страну, для которой должна показываться проверка фактов.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/TextWithEntities">TextWithEntities</a></td><td>Проверка достоверности.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a></td></tr></tbody></table>

### Тип

[FactCheck](/type/FactCheck/)

### Связанные страницы

#### [messages.getFactCheck](/method/messages.getFactCheck/)

Получить одну или несколько [проверок фактов; полное описание процесса см. здесь »](/api/factcheck/).

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Проверки фактов](/api/factcheck/)

Клиенты Telegram поддерживают отображение проверок фактов, добавленных к сообщениям независимыми фактчекерами.
