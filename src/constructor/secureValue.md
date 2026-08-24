---
title: "secureValue"
original: "https://core.telegram.org/constructor/secureValue"
section: ref
kind: constructor
description: "Защищённое значение"
layout: layout.njk
---

# secureValue

Защищённое значение

```
secureValue#187fa0ca flags:# type:SecureValueType data:flags.0?SecureData front_side:flags.1?SecureFile reverse_side:flags.2?SecureFile selfie:flags.3?SecureFile translation:flags.6?Vector<SecureFile> files:flags.4?Vector<SecureFile> plain_data:flags.5?SecurePlainData hash:bytes = SecureValue;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/SecureValueType">SecureValueType</a></td><td>Тип защищённого значения <a href="/passport">passport</a></td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/SecureData">SecureData</a></td><td>Зашифрованные данные элемента <a href="/passport">Telegram Passport</a></td></tr><tr><td><strong>front_side</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/SecureFile">SecureFile</a></td><td>Зашифрованный файл <a href="/passport">passport</a> с лицевой стороной документа</td></tr><tr><td><strong>reverse_side</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/SecureFile">SecureFile</a></td><td>Зашифрованный файл <a href="/passport">passport</a> с обратной стороной документа</td></tr><tr><td><strong>selfie</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/SecureFile">SecureFile</a></td><td>Зашифрованный файл <a href="/passport">passport</a> с селфи пользователя, держащего документ</td></tr><tr><td><strong>translation</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SecureFile">SecureFile</a>&gt;</td><td>Массив зашифрованных файлов <a href="/passport">passport</a> с переводами предоставленных документов</td></tr><tr><td><strong>files</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SecureFile">SecureFile</a>&gt;</td><td>Массив зашифрованных файлов <a href="/passport">passport</a> с фотографиями документов</td></tr><tr><td><strong>plain_data</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/SecurePlainData">SecurePlainData</a></td><td>Проверенные данные <a href="/passport">passport</a> в открытом виде</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>[@term:hash] Хеш данных</td></tr></tbody></table>

### Тип

[SecureValue](/type/SecureValue/)

### Связанные страницы

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.
