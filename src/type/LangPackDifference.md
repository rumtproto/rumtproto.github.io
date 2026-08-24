---
title: "LangPackDifference"
original: "https://core.telegram.org/type/LangPackDifference"
section: ref
kind: type
description: "Изменения языкового пакета"
layout: layout.njk
---

# LangPackDifference

Изменения языкового пакета

```
langPackDifference#f385c1f6 lang_code:string from_version:int version:int strings:Vector<LangPackString> = LangPackDifference;

---functions---

langpack.getLangPack#f2f2330a lang_pack:string lang_code:string = LangPackDifference;
langpack.getDifference#cd984aa5 lang_pack:string lang_code:string from_version:int = LangPackDifference;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/langPackDifference">langPackDifference</a></td><td>Изменения в языковом пакете приложения</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/langpack.getLangPack">langpack.getLangPack</a></td><td>Получить строки пакета локализации</td></tr><tr><td><a href="/method/langpack.getDifference">langpack.getDifference</a></td><td>Получить новые строки языкового пакета</td></tr></tbody></table>
