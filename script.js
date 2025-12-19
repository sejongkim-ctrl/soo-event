// 1. 결과 데이터 세팅
const resultData = {
    "horse": {
        title: "폭주하는 2026 적토마",
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
    // 나머지 유형이 없다면 기본값
    "default": {
        title: "2026년 당신의 운세는?",
        img: "./images/result_horse.jpg",
        desc: "테스트 결과를 불러오지 못했습니다. 다시 시도해주세요."
    }
};

// 2. 페이지 로드 시 콘텐츠 교체
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type'); 
    const data = resultData[type] || resultData["default"];

    if (data) {
        document.getElementById('result-title').innerText = data.title;
        document.getElementById('result-img').src = data.img;
        document.getElementById('result-desc').innerText = data.desc;
    }
};

// 3. 제품 힌트 보기 (상세페이지 이동)
function openProductPage() {
    window.open("https://thesoo.co/products/65b9a9544e7738001aa0370b", "_blank");
}

// 4. [수정됨] 카카오 채널로 이동 (이벤트 응모)
function goToKakaoChannel() {
    // 👇 아래 주소를 실제 수 브랜드 카카오 채널 링크(http://pf.kakao.com/...)로 바꾸세요!
    const kakaoChannelLink = "http://pf.kakao.com/_JReVG/friend"; 
    
    // 새 창으로 열기
    window.open(kakaoChannelLink, "_blank");
}

// 5. 카카오 공유하기 (단순 안내)
function shareKakao() {
    alert("링크가 복사되었습니다. 친구에게 공유하세요!");
}