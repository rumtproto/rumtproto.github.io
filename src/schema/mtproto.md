---
title: "Схема слоя MTProto"
original: "https://core.telegram.org/schema/mtproto"
section: schema
layout: layout.njk
---

# Схема слоя MTProto

Слой схемы, описывающий сам протокол обмена: сообщения, контейнеры, подтверждения, пинги, генерацию ключа. Эти конструкторы используются внутри зашифрованных сообщений, в отличие от «пользовательских» конструкторов основной схемы.

Справочник сгенерирован из оригинала; определения сохранены без изменений.

Ключевые группы:

- **Результаты запросов:** [`rpc_result`](https://core.telegram.org/constructor/rpc_result/), [`rpc_error`](https://core.telegram.org/constructor/rpc_error/), [`rpc_answer`](https://core.telegram.org/constructor/rpc_answer/).
- **Доставка и подтверждения:** [`msgs_ack`](https://core.telegram.org/constructor/msgs_ack/), [`msg_resend_req`](https://core.telegram.org/constructor/msg_resend_req/), [`msg_detailed_info`](https://core.telegram.org/constructor/msg_detailed_info/), [`msgs_state_req`](https://core.telegram.org/constructor/msgs_state_req/), [`msgs_state_info`](https://core.telegram.org/constructor/msgs_state_info/), [`msgs_all_info`](https://core.telegram.org/constructor/msgs_all_info/).
- **Упаковка:** [`msg_container`](https://core.telegram.org/constructor/msg_container/), [`msg_copy`](https://core.telegram.org/constructor/msg_copy/), [`gzip_packed`](https://core.telegram.org/constructor/gzip_packed/).
- **Сессии и время:** [`new_session_created`](https://core.telegram.org/constructor/new_session_created/), [`future_salts`](https://core.telegram.org/constructor/future_salts/), [`get_future_salts`](https://core.telegram.org/constructor/get_future_salts/), [`ping`](https://core.telegram.org/constructor/ping/), [`pong`](https://core.telegram.org/constructor/pong/), [`ping_delay_disconnect`](https://core.telegram.org/constructor/ping_delay_disconnect/), [`http_wait`](https://core.telegram.org/constructor/http_wait/).
- **Генерация ключа:** [`req_pq_multi`](https://core.telegram.org/constructor/req_pq_multi/), [`resPQ`](https://core.telegram.org/constructor/resPQ/), [`req_DH_params`](https://core.telegram.org/constructor/req_DH_params/), [`server_DH_params_ok`](https://core.telegram.org/constructor/server_DH_params_ok/), [`server_DH_params_fail`](https://core.telegram.org/constructor/server_DH_params_fail/), [`set_client_DH_params`](https://core.telegram.org/constructor/set_client_DH_params/), [`dh_gen_ok`](https://core.telegram.org/constructor/dh_gen_ok/), [`dh_gen_retry`](https://core.telegram.org/constructor/dh_gen_retry/), [`dh_gen_fail`](https://core.telegram.org/constructor/dh_gen_fail/).
- **Управление ключами и сессиями:** [`destroy_session`](https://core.telegram.org/constructor/destroy_session/), [`destroy_sessions`](https://core.telegram.org/constructor/destroy_sessions/), [`destroy_auth_key`](https://core.telegram.org/constructor/destroy_auth_key/).

Пояснения к каждому конструктору — по ссылкам; общий смысл обмена — в [подробном описании протокола](/mtproto/description/) и [сервисных сообщениях](/mtproto/service_messages/).

Машиночитаемая версия слоя: [схема MTProto в JSON](/schema/mtproto-json/).
