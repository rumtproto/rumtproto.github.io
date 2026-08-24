---
title: "InputPaymentCredentials"
original: "https://core.telegram.org/type/InputPaymentCredentials"
section: ref
kind: type
description: "Платёжные реквизиты"
layout: layout.njk
---

# InputPaymentCredentials

Платёжные реквизиты

```
inputPaymentCredentialsSaved#c10eb2cf id:string tmp_password:bytes = InputPaymentCredentials;
inputPaymentCredentials#3417d728 flags:# save:flags.0?true data:DataJSON = InputPaymentCredentials;
inputPaymentCredentialsApplePay#aa1c39f payment_data:DataJSON = InputPaymentCredentials;
inputPaymentCredentialsGooglePay#8ac32801 payment_token:DataJSON = InputPaymentCredentials;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputPaymentCredentialsSaved">inputPaymentCredentialsSaved</a></td><td>Сохранённые платёжные реквизиты</td></tr><tr><td><a href="/constructor/inputPaymentCredentials">inputPaymentCredentials</a></td><td>Платёжные реквизиты</td></tr><tr><td><a href="/constructor/inputPaymentCredentialsApplePay">inputPaymentCredentialsApplePay</a></td><td>Платёжные реквизиты Apple Pay</td></tr><tr><td><a href="/constructor/inputPaymentCredentialsGooglePay">inputPaymentCredentialsGooglePay</a></td><td>Платёжные данные Google Pay</td></tr></tbody></table>
