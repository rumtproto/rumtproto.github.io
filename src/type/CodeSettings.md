---
title: "CodeSettings"
original: "https://core.telegram.org/type/CodeSettings"
section: ref
kind: type
description: "Настройки типа отправляемого кода"
layout: layout.njk
---

# CodeSettings

Настройки типа отправляемого кода

```
codeSettings#ad253d78 flags:# allow_flashcall:flags.0?true current_number:flags.1?true allow_app_hash:flags.4?true allow_missed_call:flags.5?true allow_firebase:flags.7?true unknown_number:flags.9?true logout_tokens:flags.6?Vector<bytes> token:flags.8?string app_sandbox:flags.8?Bool = CodeSettings;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/codeSettings">codeSettings</a></td><td>Настройки, используемые серверами Telegram для отправки кода подтверждения.<br><br>Примеры реализации: <a href="https://github.com/DrKLO/Telegram/blob/master/TMessagesProj/src/main/java/org/telegram/ui/LoginActivity.java">Telegram для Android</a>, <a href="https://github.com/tdlib/td/tree/master/td/telegram/SendCodeHelper.cpp">TDLib</a>.</td></tr></tbody></table>
