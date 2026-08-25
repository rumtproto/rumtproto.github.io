---
title: "Telegram Gateway API"
original: "https://core.telegram.org/gateway/api"
section: other
description: "All queries to the Telegram Gateway API must be served over HTTPS and need to be presented in this form: https://gatewayapi.telegram.org/METHOD_NAME. Like this for example:"
crumbs: []
layout: layout.njk
---

# Telegram Gateway API

> The Gateway API is an HTTP-based interface created for developers looking to deliver automated messages, such as verification codes, to users who registered their phone number on Telegram.
> 
> This page outlines the full API documentation for developers. For more information on the API and the features it offers, see our [Verification Platform Overview](/gateway/) and [Gateway API Tutorial](/gateway/verification-tutorial/).

### Recent changes

#### February 26, 2025

-   Updated the possible values for _ttl_ in [sendVerificationMessage](#sendverificationmessage). The supported range is now 30 to 3600 seconds.
-   Clarified the behavior of _ttl_:
    -   If a message is **not** delivered within the specified _ttl_, the request **fee will be refunded** automatically.
    -   If a message is successfully delivered within the _ttl_, it will not be refunded.
    -   If you were already using _ttl_ before this update, you do not need to change anything to receive refunds.
-   Updated [revokeVerificationMessage](#revokeverificationmessage) to specify that a message will not be removed if it has already been delivered or read.
-   Added the optional field _is\_refunded_ to [RequestStatus](#requeststatus), which indicates whether the request fee was refunded.
-   Added new possible statuses **delivered** and **expired** to the field _status_ in [DeliveryStatus](#deliverystatus).

### Making requests

All queries to the Telegram Gateway API must be served over HTTPS and need to be presented in this form: `https://gatewayapi.telegram.org/METHOD_NAME`. Like this for example:

```
https://gatewayapi.telegram.org/sendVerificationMessage
```

We support **GET** and **POST** HTTP methods. We support three ways of passing parameters in Gateway API requests:

-   [URL query string](https://en.wikipedia.org/wiki/Query_string)
-   application/x-www-form-urlencoded
-   application/json

The response contains a JSON object, which always has a Boolean field `ok`. If `ok` equals _true_, the request was successful, and the result of the query can be found in the `result` field. In case of an unsuccessful request, `ok` equals _false_, and the error is explained in the `error` field (e.g. ACCESS\_TOKEN\_INVALID).

-   All methods in the Gateway API are case-insensitive.
-   All queries must be made using UTF-8.

### Authorization

Before invoking API methods, you must obtain an access token in the Telegram Gateway account settings.

The token must be passed in every request in one of two ways:

-   in the HTTP header: `Authorization: Bearer <token>`
-   as the `access_token` parameter.

### Available methods

> We support **GET** and **POST** HTTP methods. Use either [URL query string](https://en.wikipedia.org/wiki/Query_string) or _application/json_ or _application/x-www-form-urlencoded_ for passing parameters in Telegram Gateway API requests.  
> On successful call, a JSON object containing the result will be returned.

#### sendVerificationMessage

Use this method to send a verification message. Charges will apply according to the pricing plan for each successful message delivery. Note that this method is always free of charge when used to send codes to your own phone number. On success, returns a [RequestStatus](#requeststatus) object.

> [See the tutorial for examples >](/gateway/verification-tutorial/#sending-auth-codes)

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>phone_number</td><td>String</td><td>Yes</td><td>The phone number to which you want to send a verification message, in the <a href="https://en.wikipedia.org/wiki/E.164">E.164</a> format.</td></tr><tr><td>request_id</td><td>String</td><td>Optional</td><td>The unique identifier of a previous request from <a href="#checksendability">checkSendAbility</a>. If provided, this request will be free of charge.</td></tr><tr><td>sender_username</td><td>String</td><td>Optional</td><td>Username of the Telegram channel from which the code will be sent. The specified channel, if any, must be <a href="/verify/">verified</a> and owned by the same account who owns the Gateway API token.</td></tr><tr><td>code</td><td>String</td><td>Optional</td><td>The verification code. Use this parameter if you want to set the verification code yourself. Only fully numeric strings between 4 and 8 characters in length are supported. If this parameter is set, <em>code_length</em> is ignored.</td></tr><tr><td>code_length</td><td>Integer</td><td>Optional</td><td>The length of the verification code if Telegram needs to generate it for you. Supported values are from 4 to 8. This is only relevant if you are not using the <em>code</em> parameter to set your own code. Use the <a href="#checkverificationstatus">checkVerificationStatus</a> method with the <em>code</em> parameter to verify the code entered by the user.</td></tr><tr><td>callback_url</td><td>String</td><td>Optional</td><td>An HTTPS URL where you want to receive <a href="#report-delivery">delivery reports</a> related to the sent message, 0-256 bytes.</td></tr><tr><td>payload</td><td>String</td><td>Optional</td><td>Custom payload, 0-128 bytes. This will not be displayed to the user, use it for your internal processes.</td></tr><tr><td>ttl</td><td>Integer</td><td>Optional</td><td>Time-to-live (in seconds) before the message expires. If the message is not delivered or read within this time, the request fee will be refunded. Supported values are from 30 to 3600.</td></tr></tbody></table>

#### checkSendAbility

Use this method to optionally check the ability to send a verification message to the specified phone number. If the ability to send is confirmed, a fee will apply according to the pricing plan. After checking, you can send a verification message using the [sendVerificationMessage](#sendverificationmessage) method, providing the _request\_id_ from this response.

Within the scope of a _request\_id_, only one fee can be charged. Calling [sendVerificationMessage](#sendverificationmessage) once with the returned _request\_id_ will be free of charge, while repeated calls will result in an error. Conversely, calls that don't include a _request\_id_ will spawn new requests and incur the respective fees accordingly. Note that this method is always free of charge when used to send codes to your own phone number.

In case the message can be sent, returns a [RequestStatus](#requeststatus) object. Otherwise, an appropriate error will be returned.

> [See the tutorial for examples >](/gateway/verification-tutorial/#checking-that-codes-can-be-delivered)

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>phone_number</td><td>String</td><td>Yes</td><td>The phone number for which you want to check our ability to send a verification message, in the <a href="https://en.wikipedia.org/wiki/E.164">E.164</a> format.</td></tr></tbody></table>

#### checkVerificationStatus

Use this method to check the status of a verification message that was sent previously. If the code was generated by Telegram for you, you can also verify the correctness of the code entered by the user using this method. Even if you set the code yourself, it is recommended to call this method after the user has successfully entered the code, passing the correct code in the _code_ parameter, so that we can track the conversion rate of your verifications. On success, returns a [RequestStatus](#requeststatus) object.

> [See the tutorial for examples >](/gateway/verification-tutorial/#checking-the-authorization-status)

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>request_id</td><td>String</td><td>Yes</td><td>The unique identifier of the verification request whose status you want to check.</td></tr><tr><td>code</td><td>String</td><td>Optional</td><td>The code entered by the user. If provided, the method checks if the code is valid for the relevant request.</td></tr></tbody></table>

#### revokeVerificationMessage

Use this method to revoke a verification message that was sent previously. Returns _True_ if the revocation request was received. However, this does not guarantee that the message will be deleted. For example, if the message has already been delivered or read, it will not be removed.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>request_id</td><td>String</td><td>Yes</td><td>The unique identifier of the request whose verification message you want to revoke.</td></tr></tbody></table>

### Available types

All types used in Telegram Gateway API responses are represented as JSON objects.

It is safe to use 32-bit signed integers for storing all **Integer** fields unless otherwise noted.

> **Optional** fields may be not returned when irrelevant.

#### RequestStatus

This object represents the status of a verification message request.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>request_id</td><td>String</td><td>Unique identifier of the verification request.</td></tr><tr><td>phone_number</td><td>String</td><td>The phone number to which the verification code was sent, in the <a href="https://en.wikipedia.org/wiki/E.164">E.164</a> format.</td></tr><tr><td>request_cost</td><td>Float</td><td>Total request cost incurred by either <a href="#checksendability">checkSendAbility</a> or <a href="#sendverificationmessage">sendVerificationMessage</a>.</td></tr><tr><td>is_refunded</td><td>Boolean</td><td><em>Optional.</em> If <em>True</em>, the request fee was refunded.</td></tr><tr><td>remaining_balance</td><td>Float</td><td><em>Optional.</em> Remaining balance in credits. Returned only in response to a request that incurs a charge.</td></tr><tr><td>delivery_status</td><td><a href="#deliverystatus">DeliveryStatus</a></td><td><em>Optional.</em> The current message delivery status. Returned only if a verification message was sent to the user.</td></tr><tr><td>verification_status</td><td><a href="#verificationstatus">VerificationStatus</a></td><td><em>Optional.</em> The current status of the verification process.</td></tr><tr><td>payload</td><td>String</td><td><em>Optional.</em> Custom payload if it was provided in the request, 0-256 bytes.</td></tr></tbody></table>

#### DeliveryStatus

This object represents the delivery status of a message.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>status</td><td>String</td><td>The current status of the message. One of the following:<br>- <strong>sent</strong> – the message has been sent to the recipient's device(s),<br>- <strong>delivered</strong> – the message has been delivered to the recipient's device(s),<br>- <strong>read</strong> – the message has been read by the recipient,<br>- <strong>expired</strong> – the message has expired without being delivered or read,<br>- <strong>revoked</strong> – the message has been revoked.</td></tr><tr><td>updated_at</td><td>Integer</td><td>The timestamp when the status was last updated.</td></tr></tbody></table>

#### VerificationStatus

This object represents the verification status of a code.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>status</td><td>String</td><td>The current status of the verification process. One of the following:<br>- <strong>code_valid</strong> – the code entered by the user is correct,<br>- <strong>code_invalid</strong> – the code entered by the user is incorrect,<br>- <strong>code_max_attempts_exceeded</strong> – the maximum number of attempts to enter the code has been exceeded,<br>- <strong>expired</strong> – the code has expired and can no longer be used for verification.</td></tr><tr><td>updated_at</td><td>Integer</td><td>The timestamp for this particular status. Represents the time when the status was last updated.</td></tr><tr><td>code_entered</td><td>String</td><td><em>Optional.</em> The code entered by the user.</td></tr></tbody></table>

### Report delivery

The Telegram Gateway API can send delivery reports to a user-specified callback URL. When you include a `callback_url` parameter in your request, the API will send an HTTP POST request to that URL containing the delivery report for the message. The payload of the POST request will be a JSON object representing the [RequestStatus](#requeststatus) object.

Your URL must respond with HTTP status code `200` to acknowledge receipt of the report. Any other status code will be considered a failure, and the service will retry sending the same report up to 10 times with increasing delays between attempts. If all retries fail, the report will be considered lost.

#### Checking report integrity

All reports submitted to your `callback_url`, if you provided one, will also contain the following headers:

-   `X-Request-Timestamp` – A Unix timestamp indicating when the server submitted the report.
-   `X-Request-Signature` – A server-generated signature needed to authenticate the report on your end.

You can confirm the origin and verify the integrity of the reports you receive by comparing the signature contained in the `X-Request-Signature` header with the hexadecimal representation of the [HMAC-SHA-256](https://en.wikipedia.org/wiki/Hash-based_message_authentication_code) signature of the **data-check-string** with the [SHA256](https://en.wikipedia.org/wiki/SHA-2) hash of the API token shown in your Gateway account settings.

The **data-check-string** is a concatenation of the report timestamp as provided by the `X-Request-Timestamp` header, a [line feed character](https://en.wikipedia.org/wiki/Newline) ('\\n', 0x0A) used as separator and the raw post body of the HTTP request.

Example:

```
data_check_string = X-Request-Timestamp + '\n' + post_body
secret_key = SHA256(api_token)
if (hex(HMAC_SHA256(data_check_string, secret_key)) == X-Request-Signature) {
  // data is from Telegram
}
```

> To prevent the use of outdated data, you should additionally check the `X-Request-Timestamp` header, which contains a Unix timestamp of when the relevant report was submitted by the server.
