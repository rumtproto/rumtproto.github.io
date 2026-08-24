---
title: "SecureValueError"
original: "https://core.telegram.org/type/SecureValueError"
section: ref
kind: type
description: "Ошибка защищённого значения"
layout: layout.njk
---

# SecureValueError

Ошибка защищённого значения

```
secureValueErrorData#e8a40bd9 type:SecureValueType data_hash:bytes field:string text:string = SecureValueError;
secureValueErrorFrontSide#be3dfa type:SecureValueType file_hash:bytes text:string = SecureValueError;
secureValueErrorReverseSide#868a2aa5 type:SecureValueType file_hash:bytes text:string = SecureValueError;
secureValueErrorSelfie#e537ced6 type:SecureValueType file_hash:bytes text:string = SecureValueError;
secureValueErrorFile#7a700873 type:SecureValueType file_hash:bytes text:string = SecureValueError;
secureValueErrorFiles#666220e9 type:SecureValueType file_hash:Vector<bytes> text:string = SecureValueError;
secureValueError#869d758f type:SecureValueType hash:bytes text:string = SecureValueError;
secureValueErrorTranslationFile#a1144770 type:SecureValueType file_hash:bytes text:string = SecureValueError;
secureValueErrorTranslationFiles#34636dd8 type:SecureValueType file_hash:Vector<bytes> text:string = SecureValueError;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/secureValueErrorData">secureValueErrorData</a></td><td>Представляет проблему в одном из полей данных, предоставленных пользователем. Ошибка считается устранённой, когда значение поля меняется.</td></tr><tr><td><a href="/constructor/secureValueErrorFrontSide">secureValueErrorFrontSide</a></td><td>Представляет проблему с лицевой стороной документа. Ошибка считается устранённой, когда файл с лицевой стороной документа меняется.</td></tr><tr><td><a href="/constructor/secureValueErrorReverseSide">secureValueErrorReverseSide</a></td><td>Представляет проблему с обратной стороной документа. Ошибка считается устранённой, когда файл с обратной стороной документа меняется.</td></tr><tr><td><a href="/constructor/secureValueErrorSelfie">secureValueErrorSelfie</a></td><td>Представляет проблему с селфи с документом. Ошибка считается устранённой, когда файл с селфи меняется.</td></tr><tr><td><a href="/constructor/secureValueErrorFile">secureValueErrorFile</a></td><td>Представляет проблему со сканом документа. Ошибка считается устранённой, когда файл со сканом документа меняется.</td></tr><tr><td><a href="/constructor/secureValueErrorFiles">secureValueErrorFiles</a></td><td>Представляет проблему со списком сканов. Ошибка считается устранённой, когда список файлов со сканами меняется.</td></tr><tr><td><a href="/constructor/secureValueError">secureValueError</a></td><td>Ошибка защищённого значения</td></tr><tr><td><a href="/constructor/secureValueErrorTranslationFile">secureValueErrorTranslationFile</a></td><td>Представляет проблему с одним из файлов, составляющих перевод документа. Ошибка считается устранённой, когда файл меняется.</td></tr><tr><td><a href="/constructor/secureValueErrorTranslationFiles">secureValueErrorTranslationFiles</a></td><td>Представляет проблему с переведённой версией документа. Ошибка считается устранённой, когда файл с переводом документа меняется.</td></tr></tbody></table>
