---
title: "upload.reuploadCdnFile (метод)"
original: "https://core.telegram.org/method/upload.reuploadCdnFile"
section: ref
kind: method
layout: layout.njk
---

# upload.reuploadCdnFile

*Метод из схемы TL.*

> Request a reupload of a certain file to a [CDN DC](https://core.telegram.org/cdn).

## Определение TL

```
---functions---
upload.reuploadCdnFile#9b2754a8 file_token:bytes request_token:bytes = Vector<FileHash>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| file_token | [bytes](/type/bytes/) | File token |
| request_token | [bytes](/type/bytes/) | Request token |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[FileHash](/type/FileHash/)\>

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CDN_METHOD_INVALID | You can't call this method in a CDN DC. |
| 500 | CDN_UPLOAD_TIMEOUT | A server-side timeout occurred while reuploading the file to the CDN DC. |
| 400 | FILE_TOKEN_INVALID | The master DC did not accept the file_token (e.g., the token has expired). Continue downloading the file from the master DC using upload.getFile. |
| 400 | LOCATION_INVALID | The provided location is invalid. |
| 400 | REQUEST_TOKEN_INVALID | The master DC did not accept the request_token from the CDN DC. Continue downloading the file from the master DC using upload.getFile. |
| 400 | RSA_DECRYPT_FAILED | Internal RSA decryption failed. |

## Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.
