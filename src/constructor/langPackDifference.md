---
title: "langPackDifference"
original: "https://core.telegram.org/constructor/langPackDifference"
section: ref
kind: constructor
description: "Изменения в языковом пакете приложения"
layout: layout.njk
---

# langPackDifference

Изменения в языковом пакете приложения

```
langPackDifference#f385c1f6 lang_code:string from_version:int version:int strings:Vector<LangPackString> = LangPackDifference;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Код языка</td></tr><tr><td><strong>from_version</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Предыдущий номер версии</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Новый номер версии</td></tr><tr><td><strong>strings</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/LangPackString">LangPackString</a>&gt;</td><td>Локализованные строки</td></tr></tbody></table>

### Тип

[LangPackDifference](/type/LangPackDifference/)
