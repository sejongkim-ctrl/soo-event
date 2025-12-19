// 1. 결과 데이터 세팅 (여기의 멘트가 화면에 나옵니다)
const resultData = {
    "horse": {
        title: "폭주하는 2026 적토마",  // 👈 요청하신대로 수정완료!
        img: "./images/result_horse.jpg",
        desc: "브레이크 고장 난 트럭처럼 달리시네요! 열정은 좋지만 엔진 과열(방전)이 우려됩니다."
    },
    "turtle": {
        title: "뚝심 있는 황금 거북이",
        img: "./images/result_turtle.jpg",
        desc: "느리지만 확실하게! 당신의 꾸준함을 지켜줄 은은한 체력이 필요한 시점입니다."
    },
    "zombie": {
        title: "카페인 중독 좀비",
        img: "./images/result_zombie.jpg",
        desc: "오늘만 사시는군요. 내일의 체력까지 가불해 쓴 당신, 긴급 수혈이 필요합니다."
    },
    "ai": {
        title: "배터리 3% 남은 AI",
        img: "./images/result_ai.jpg",
        desc: "머리는 알파고인데 몸은 고철이네요. 효율적인 에너지 공급이 시급합니다."
    },
    // 나머지 유형들도 필요하면 여기에 추가 (예: 'sloth', 'unicorn' 등)
    
    // 만약 주소에 이상한 말이 들어오면 보여줄 기본값
    "default": {
        title: "2026년 당신의 운세는?",
        img: "./images/result_horse.jpg", // 기본 이미지는 적토마로 설정
        desc: "테스트 결과를 불러오지 못했습니다. 다시 시도해주세요."
    }
};

// 2. 페이지 로드 시 URL 파라미터 확인 및 콘텐츠 교체
window.onload = function() {
    // 주소창의 ?type=... 부분을 읽어옵니다.
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type'); 

    // 데이터가 없으면 기본값(default) 사용
    const data = resultData[type] || resultData["default"];

    // 화면 글씨와 이미지를 갈아끼우는 작업
    if (data) {
        document.getElementById('result-title').innerText = data.title;
        document.getElementById('result-img').src = data.img;
        document.getElementById('result-desc').innerText = data.desc;
    }
};

// 3. 힌트 보기 (제품 상세페이지 이동)
function openProductPage() {
    // 실제 제품 링크로 수정하세요
    window.open("https://thesoo.co.kr/product/detail.html", "_blank");
}

// 4. 카카오 채널로 이동 (이벤트 응모)
function goToKakaoChannel() {
    // 👇 실제 수 브랜드 카카오 채널 링크로 수정하세요!
    const kakaoChannelLink = "https://pf.kakao.com/_xxxxxx"; 
    window.open(kakaoChannelLink, "_blank");
}

// 5. 카카오 공유하기
function shareKakao() {
    alert("링크가 복사되었습니다. 친구에게 공유하세요!");
}
