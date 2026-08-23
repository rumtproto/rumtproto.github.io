---
title: "auth.SentCode (тип)"
original: "https://core.telegram.org/type/auth.SentCode"
section: ref
kind: type
layout: layout.njk
---

# auth.SentCode

*Тип из схемы TL.*

> Contains info on a confirmation code message sent via SMS, phone call or Telegram.

## Определение TL

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;

---functions---

auth.sendCode#a677244f phone_number:string api_id:int api_hash:string settings:CodeSettings = auth.SentCode;
auth.resendCode#cae47523 flags:# phone_number:string phone_code_hash:string reason:flags.0?string = auth.SentCode;
auth.resetLoginEmail#7e960193 phone_number:string phone_code_hash:string = auth.SentCode;
auth.checkPaidAuth#56e59f9c phone_number:string phone_code_hash:string form_id:long = auth.SentCode;

account.sendChangePhoneCode#82574ae5 phone_number:string settings:CodeSettings = auth.SentCode;
account.sendConfirmPhoneCode#1b3faa88 hash:string settings:CodeSettings = auth.SentCode;
account.sendVerifyPhoneCode#a5a356f9 phone_number:string settings:CodeSettings = auth.SentCode;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [auth.sentCode](/constructor/auth.sentCode/) | Contains info about a sent verification code. |
| [auth.sentCodeSuccess](/constructor/auth.sentCodeSuccess/) | The user successfully authorized using [future auth tokens](https://core.telegram.org/api/auth/#future-auth-tokens) |
| [auth.sentCodePaymentRequired](/constructor/auth.sentCodePaymentRequired/) | Official apps may receive this constructor, indicating that due to the high cost of SMS verification codes for the user's country/provider, the user must purchase a [Telegram Premium](https://core.telegram.org/api/premium) subscription in order to proceed with the login/signup, see [here »](https://core.telegram.org/api/auth/#paid-auth) for more info. |

## Методы

| Method | Описание |
|---|---|
| [auth.sendCode](/method/auth.sendCode/) | Send the verification code for login |
| [auth.resendCode](/method/auth.resendCode/) | Resend the login code via another medium, the phone code type is determined by the return value of the previous auth.sendCode/auth.resendCode: see [login](/api/auth/) for more info. |
| [auth.resetLoginEmail](/method/auth.resetLoginEmail/) | Reset the [login email »](https://core.telegram.org/api/auth#email-verification). |
| [auth.checkPaidAuth](/method/auth.checkPaidAuth/) | Checks the status of a [login payment](https://core.telegram.org/api/auth/#paid-auth). |
| [account.sendChangePhoneCode](/method/account.sendChangePhoneCode/) | Verify a new phone number to associate to the current account |
| [account.sendConfirmPhoneCode](/method/account.sendConfirmPhoneCode/) | Send confirmation code to cancel account deletion, for more info [click here »](https://core.telegram.org/api/account-deletion) |
| [account.sendVerifyPhoneCode](/method/account.sendVerifyPhoneCode/) | Send the verification phone code for telegram [passport](https://core.telegram.org/passport). |
