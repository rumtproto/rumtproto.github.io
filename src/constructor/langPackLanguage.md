---
title: "langPackLanguage"
original: "https://core.telegram.org/constructor/langPackLanguage"
section: ref
kind: constructor
description: "Определяет пакет локализации"
layout: layout.njk
---

# langPackLanguage

Определяет пакет локализации

```
langPackLanguage#eeca5ce3 flags:# official:flags.0?true rtl:flags.2?true beta:flags.3?true name:string native_name:string lang_code:string base_lang_code:flags.1?string plural_code:string strings_count:int translated_count:int translations_url:string = LangPackLanguage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>official</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Является ли языковой пакет официальным</td></tr><tr><td><strong>rtl</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Является ли это пакетом локализации для языка с письмом справа налево</td></tr><tr><td><strong>beta</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Является ли этот пакет локализации бета-версией?</td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название языка</td></tr><tr><td><strong>native_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название языка на самом этом языке</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Код языка (идентификатор пакета)</td></tr><tr><td><strong>base_lang_code</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Идентификатор базового языкового пакета; может быть пустым. Если строка отсутствует в языковом пакете, её следует получить из базового языкового пакета. Не поддерживается в пользовательских языковых пакетах</td></tr><tr><td><strong>plural_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Код языка, который следует использовать для применения форм множественного числа. Подробнее см. <a href="https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html">https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html</a></td></tr><tr><td><strong>strings_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число неудалённых строк языкового пакета</td></tr><tr><td><strong>translated_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число переведённых строк языкового пакета</td></tr><tr><td><strong>translations_url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Ссылка на интерфейс перевода языка; пуста для пользовательских локальных языковых пакетов</td></tr></tbody></table>

### Тип

[LangPackLanguage](/type/LangPackLanguage/)
