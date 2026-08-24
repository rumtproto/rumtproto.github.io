---
title: "UrlAuthResult"
original: "https://core.telegram.org/type/UrlAuthResult"
section: ref
kind: type
description: "Результат авторизации по URL"
layout: layout.njk
---

# UrlAuthResult

Результат авторизации по URL

```
urlAuthResultRequest#f8f8eb1e flags:# request_write_access:flags.0?true request_phone_number:flags.1?true match_codes_first:flags.5?true bot:User domain:string browser:flags.2?string platform:flags.2?string ip:flags.2?string region:flags.2?string match_codes:flags.3?Vector<string> user_id_hint:flags.4?long = UrlAuthResult;
urlAuthResultAccepted#623a8fa0 flags:# url:flags.0?string = UrlAuthResult;
urlAuthResultDefault#a9d6db1f = UrlAuthResult;

---functions---

messages.requestUrlAuth#894cc99c flags:# peer:flags.1?InputPeer msg_id:flags.1?int button_id:flags.1?int url:flags.2?string in_app_origin:flags.3?string = UrlAuthResult;
messages.acceptUrlAuth#67a3f0de flags:# write_allowed:flags.0?true share_phone_number:flags.3?true peer:flags.1?InputPeer msg_id:flags.1?int button_id:flags.1?int url:flags.2?string match_code:flags.4?string = UrlAuthResult;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/urlAuthResultRequest">urlAuthResultRequest</a></td><td>Сведения о запросе авторизации; подробнее <a href="/api/url-authorization">см. здесь »</a></td></tr><tr><td><a href="/constructor/urlAuthResultAccepted">urlAuthResultAccepted</a></td><td>Сведения о принятом запросе авторизации; подробнее <a href="/api/url-authorization">см. здесь »</a></td></tr><tr><td><a href="/constructor/urlAuthResultDefault">urlAuthResultDefault</a></td><td>Сведения о принятом запросе авторизации; подробнее <a href="/api/url-authorization">см. здесь »</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.requestUrlAuth">messages.requestUrlAuth</a></td><td>Получить дополнительную информацию о запросе авторизации Seamless Telegram Login, подробнее <a href="/api/url-authorization">см. здесь »</a></td></tr><tr><td><a href="/method/messages.acceptUrlAuth">messages.acceptUrlAuth</a></td><td>Используйте это, чтобы подтвердить запрос авторизации Seamless Telegram Login; подробнее <a href="/api/url-authorization">см. здесь »</a></td></tr></tbody></table>
