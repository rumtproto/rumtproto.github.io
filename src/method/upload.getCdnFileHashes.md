---
title: "upload.getCdnFileHashes (метод)"
original: "https://core.telegram.org/method/upload.getCdnFileHashes"
section: ref
kind: method
layout: layout.njk
---

# upload.getCdnFileHashes

*Метод из схемы TL.*

> Get SHA256 hashes for verifying downloaded [CDN](https://core.telegram.org/cdn) files

## Определение TL

```
---functions---
upload.getCdnFileHashes#91dc3f31 file_token:bytes offset:long = Vector<FileHash>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| file_token | [bytes](/type/bytes/) | File |
| offset | [long](/type/long/) | Offset from which to start getting hashes |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[FileHash](/type/FileHash/)\>

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CDN_METHOD_INVALID | You can't call this method in a CDN DC. |
| 400 | FILE_TOKEN_INVALID | The master DC did not accept the file_token (e.g., the token has expired). Continue downloading the file from the master DC using upload.getFile. |
| 400 | RSA_DECRYPT_FAILED | Internal RSA decryption failed. |

## Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.
