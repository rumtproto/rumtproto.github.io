---
title: "CodeSettings (тип)"
original: "https://core.telegram.org/type/CodeSettings"
section: ref
kind: type
layout: layout.njk
---

# CodeSettings

*Тип из схемы TL.*

> Settings for the code type to send

## Определение TL

```
codeSettings#ad253d78 flags:# allow_flashcall:flags.0?true current_number:flags.1?true allow_app_hash:flags.4?true allow_missed_call:flags.5?true allow_firebase:flags.7?true unknown_number:flags.9?true logout_tokens:flags.6?Vector<bytes> token:flags.8?string app_sandbox:flags.8?Bool = CodeSettings;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [codeSettings](/constructor/codeSettings/) | Settings used by telegram servers for sending the confirm code. Example implementations: [telegram for android](https://github.com/DrKLO/Telegram/blob/master/TMessagesProj/src/main/java/org/telegram/ui/LoginActivity.java), [tdlib](https://github.com/tdlib/td/tree/master/td/telegram/SendCodeHelper.cpp). |
