---
title: "urlAuthResultAccepted"
original: "https://core.telegram.org/constructor/urlAuthResultAccepted"
section: ref
kind: constructor
description: "Сведения о принятом запросе авторизации; подробнее см. здесь »"
layout: layout.njk
---

# urlAuthResultAccepted

Сведения о принятом запросе авторизации; подробнее [см. здесь »](/api/url-authorization/)

```
urlAuthResultAccepted#623a8fa0 flags:# url:flags.0?string = UrlAuthResult;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Если присутствует — URL, который нужно открыть во внешнем браузере (может использовать пользовательскую схему для прямого перехода в другое приложение); если отсутствует, вход выполнен успешно и клиентам следует просто показать всплывающее уведомление с подтверждением.<br>Всегда задано для <a href="/api/url-authorization#bot-button-url-authorization">авторизации по URL из кнопки бота</a> и <a href="/api/url-authorization#link-url-authorization">авторизации по URL из ссылки</a>.</td></tr></tbody></table>

### Тип

[UrlAuthResult](/type/UrlAuthResult/)

### Связанные страницы

#### [Бесшовный вход через Telegram](/api/url-authorization/)

Обработка запросов авторизации по URL через Seamless Telegram Login.
