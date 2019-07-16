var post_request = {
    "headers": {
        "content-type": "application/json; charset=UTF-8",
        "Authorization": "Bearer " + "{LINEで生成するアクセストークン}"
    },
    "payload": {
        "replyToken": flow.get("replyToken"),
        "messages": [
            {
                "type": "text",
                "text": msg.payload.output.text[0]
            }
        ]
    }
};
return post_request;