const result = {
    "message": {
        "@type": "response",
        "@service": "naverservice.nmt.proxy",
        "@version": "1.0.0",
        "result": {
            "srcLangType": "en",
            "tarLangType": "ko",
            "translatedText": "가레스 사우스게이트가 14골을 넣으며 3승째를 거두며 내년 여름의 쇼프로 가는 길에 또 다른 장애물을 여유있게 걷어냈기 때문에 땀을 흘릴 필요가 거의 없었다.\n\n케인과 라힘 스털링은 영국이 불가리아를 제쳐놓기 위해 처음 45분 동안 낮은 키로 탄력을 쌓으면서 다시 한번 치명적이었다.\n\n스털링이 전반 24분 불가리아 골키퍼 플라멩 일리예프의 실책을 받아쳐 전반 24분 잉글랜드에 선제골을 내주며 케인을 선취시켰다.\n\n케인은 후반 4분 니콜라이 보두로프가 마르쿠스 래쉬포드에 파울을 범한 페널티킥을 성공시킨 뒤 후반 55분 스털링을 상대로 골을 성공시켰다.\n\n토트넘의 케인은 크리스티안 디미트로프에게 끌려가 40경기 만에 25골로 세계 신기록을 수립한 뒤 또 다른 스폿킥으로 트레블을 완성했다.\n\n사우스게이트는 잉글랜드가 22일(현지시간) 사우샘프턴에서 열리는 코소보와의 예선전을 완벽하게 준비했기 때문에 첼시의 메이슨 마운트에 시니어 데뷔전을 치를 수 있었다."
        } 
    }
}

console.log(result.message.result.translatedText);
console.log(result['message']['result']['translatedText'])
