// 1. 결과 데이터 세팅 (8가지 유형 완벽 정리)
const resultData = {
    // 1. 적토마 (Horse)
    "horse": {
        title: "폭주하는 2026 적토마",
        img: "./images/result_horse.jpg",
        desc: "브레이크 고장 난 트럭처럼 달리시네요! 열정은 넘치지만 엔진 과열(방전)이 우려됩니다. 잠시 멈춰서 최고급 연료를 채워주세요."
    },
    
    // 2. AI (Robot/AI)
    "ai": {
        title: "배터리 3% 남은 AI",
        img: "./images/result_ai.jpg",
        desc: "머리는 알파고인데 몸은 고철이네요. 과부하 걸리기 직전입니다! 효율적인 에너지 공급으로 시스템 종료를 막아야 합니다."
    },

    // 3. 개복치 (Sunfish) - 파라미터명: sunfish
    "sunfish": {
        title: "바사삭 쿠크다스 개복치",
        img: "./images/result_sunfish.jpg",
        desc: "작은 스트레스에도 파사삭! 유리멘탈과 저질 체력을 동시에 가지셨군요. 당신에겐 아주 강력하고 단단한 기력 보호막이 필요합니다."
    },

    // 4. 나무늘보 (Sloth) - 파라미터명: sloth
    "sloth": {
        title: "이불 밖은 위험한 나무늘보",
        img: "./images/result_sloth.jpg",
        desc: "'다음 생에 할게...' 만사가 귀찮은 건 게으름이 아니라 체력 부족입니다. 누워만 있기엔 2026년이 너무 아깝지 않나요?"
    },

    // 5. 거북이 (Turtle)
    "turtle": {
        title: "뚝심 있는 황금 거북이",
        img: "./images/result_turtle.jpg",
        desc: "느리지만 확실하게! 꾸준함은 당신의 무기지만, 버티는 것만으로는 한계가 옵니다. 끝까지 완주할 수 있는 은은한 힘을 보충하세요."
    },

    // 6. 맹수/독수리 (Eagle) - 파라미터명: eagle
    "eagle": {
        title: "노리는 게 많은 야망 맹수",
        img: "./images/result_eagle.jpg",
        desc: "목표를 향해 돌진하는 최상위 포식자! 하지만 사냥하느라 기력을 다 쓰셨군요. 재충전 없는 사냥은 실패할 뿐입니다."
    },

    // 7. 좀비 (Zombie)
    "zombie": {
        title: "카페인 중독 좀비",
        img: "./images/result_zombie.jpg",
        desc: "오늘만 사시는군요. 내일의 체력까지 가불해 쓴 당신, 카페인으로는 버틸 수 없습니다. 이제 진짜 '피(기력)'가 필요합니다."
    },

    // 8. 유니콘 (Unicorn) - 파라미터명: unicorn
    "unicorn": {
        title: "갓생 사는 유니콘",
        img: "./images/result_unicorn.jpg",
        desc: "일도 취미도 완벽! 남들이 볼 땐 환상적이지만, 속은 텅 비어가고 있진 않나요? 빛나는 겉모습만큼 속도 꽉 채워야 할 때입니다."
    },

    // 기본값 (에러 방지용)
    "default": {
        title: "2026년 당신의 운세는?",
        img: "./images/result_horse.jpg", 
        desc: "테스트 결과를 불러오지 못했습니다. 다시 시도해주세요."
    }
};

// 2. 페이지 로드 시 URL 파라미터 확인 및 콘텐츠 교체
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type'); 

    // 데이터 가져오기
    const data = resultData[type] || resultData["default"];

    // 화면 업데이트
    if (data) {
        document.getElementById('result-title').innerText = data.title;
        document.getElementById('result-img').src = data.img;
        document.getElementById('result-desc').innerText = data.desc;
    }
};

// 3. 힌트 보기 (제품 상세페이지 이동)
function openProductPage() {
    window.open("https://thesoo.co.kr/product/detail.html", "_blank");
}

// 4. 카카오 채널로 이동 (이벤트 응모)
function goToKakaoChannel() {
    // 👇 실제 카카오 채널 링크로 꼭 수정해주세요!
    const kakaoChannelLink = "https://pf.kakao.com/_xxxxxx"; 
    window.open(kakaoChannelLink, "_blank");
}

// 5. 결과 공유하기
function shareKakao() {
    alert("링크가 복사되었습니다. 가족과 친구들에게 공유해보세요!");
}
