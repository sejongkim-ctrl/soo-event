// 1. 결과 데이터 세팅 (8가지 유형 + 개별 구매 링크)
const resultData = {
    // 🐴 1. 적토마
    "horse": {
        title: "폭주하는 2026 적토마",
        img: "./images/result_horse.jpg",
        desc: "브레이크 고장 난 트럭처럼 달리시네요! 열정은 넘치지만 엔진 과열(방전)이 우려됩니다. 잠시 멈춰서 최고급 연료를 채워주세요.",
        
        // 처방전 섹션 멘트
        productSub: "지친 나, 그리고 부모님을 위한",
        productTitle: "황제 처방",
        productCopy: "\"폭주하는 적토마에게 필요한 건<br>황제의 '브레이크' 공진단입니다\"",
        
        // 👇 [중요] 적토마용 제품 구매 링크 (수정해주세요)
        productUrl: "https://thesoo.co/about/gongjindan" 
    },

    // 🐢 2. 거북이
    "turtle": {
        title: "뚝심 있는 황금 거북이",
        img: "./images/result_turtle.jpg",
        desc: "느리지만 확실하게! 꾸준함은 당신의 무기지만, 버티는 것만으로는 한계가 옵니다. 끝까지 완주할 수 있는 은은한 힘을 보충하세요.",
        
        productSub: "꾸준한 당신을 지켜줄",
        productTitle: "지속가능 처방",
        productCopy: "\"오래가는 거북이처럼,<br>끝까지 지치지 않는 힘을 선물하세요\"",
        
        // 👇 거북이용 제품 구매 링크
        productUrl: "https://thesoo.co/about/gongjindan"
    },

    // 🧟‍♂️ 3. 좀비
    "zombie": {
        title: "카페인 중독 좀비",
        img: "./images/result_zombie.jpg",
        desc: "오늘만 사시는군요. 내일의 체력까지 가불해 쓴 당신, 카페인으로는 버틸 수 없습니다. 이제 진짜 '피(기력)'가 필요합니다.",
        
        productSub: "방전된 당신을 살려낼",
        productTitle: "생존 처방",
        productCopy: "\"내일의 체력을 당겨쓴 당신,<br>이제 진짜 '원기'를 채워넣을 때입니다\"",
        
        // 👇 좀비용 제품 구매 링크
        productUrl: "https://thesoo.co/about/gongjindan"
    },

    // 🤖 4. AI
    "ai": {
        title: "배터리 3% 남은 AI",
        img: "./images/result_ai.jpg",
        desc: "머리는 알파고인데 몸은 고철이네요. 과부하 걸리기 직전입니다! 효율적인 에너지 공급으로 시스템 종료를 막아야 합니다.",
        
        productSub: "과부하 걸린 뇌를 위한",
        productTitle: "에너지 처방",
        productCopy: "\"스마트한 당신의 머리에<br>강력한 '사향'의 에너지를 공급하세요\"",
        
        // 👇 AI용 제품 구매 링크
        productUrl: "https://thesoo.co/about/gongjindan"
    },

    // 🐟 5. 개복치
    "sunfish": {
        title: "바사삭 쿠크다스 개복치",
        img: "./images/result_sunfish.jpg",
        desc: "작은 스트레스에도 파사삭! 유리멘탈과 저질 체력을 동시에 가지셨군요. 당신에겐 아주 강력하고 단단한 기력 보호막이 필요합니다.",
        
        productSub: "자주 아픈 당신을 위한",
        productTitle: "강철 처방",
        productCopy: "\"유리 같은 체력을 강철처럼!<br>면역력을 위한 최고의 선택입니다\"",
        
        // 👇 개복치용 제품 구매 링크
        productUrl: "https://thesoo.co/about/gongjindan"
    },

    // 🦥 6. 나무늘보
    "sloth": {
        title: "이불 밖은 위험한 나무늘보",
        img: "./images/result_sloth.jpg",
        desc: "'다음 생에 할게...' 만사가 귀찮은 건 게으름이 아니라 체력 부족입니다. 누워만 있기엔 2026년이 너무 아깝지 않나요?",
        
        productSub: "무기력한 당신을 깨울",
        productTitle: "활력 처방",
        productCopy: "\"귀찮음을 이기는 힘,<br>단 한 알로 활력을 깨워보세요\"",
        
        // 👇 나무늘보용 제품 구매 링크
        productUrl: "https://thesoo.co/about/gongjindan"
    },

    // 🦅 7. 맹수(독수리)
    "eagle": {
        title: "노리는 게 많은 야망 맹수",
        img: "./images/result_eagle.jpg",
        desc: "목표를 향해 돌진하는 최상위 포식자! 하지만 사냥하느라 기력을 다 쓰셨군요. 재충전 없는 사냥은 실패할 뿐입니다.",
        
        productSub: "성공을 노리는 당신께",
        productTitle: "집중 처방",
        productCopy: "\"목표를 쟁취하는 힘,<br>흐트러짐 없는 집중력을 선물합니다\"",
        
        // 👇 맹수용 제품 구매 링크
        productUrl: "https://thesoo.co/about/gongjindan"
    },

    // 🦄 8. 유니콘
    "unicorn": {
        title: "갓생 사는 유니콘",
        img: "./images/result_unicorn.jpg",
        desc: "일도 취미도 완벽! 남들이 볼 땐 환상적이지만, 속은 텅 비어가고 있진 않나요? 빛나는 겉모습만큼 속도 꽉 채워야 할 때입니다.",
        
        productSub: "완벽한 당신을 유지할",
        productTitle: "완벽 처방",
        productCopy: "\"빛나는 갓생을 위해,<br>속부터 꽉 채우는 프리미엄을 더하세요\"",
        
        // 👇 유니콘용 제품 구매 링크
        productUrl: "https://thesoo.co/about/gongjindan"
    },

    // 기본값 (에러 방지용)
    "default": {
        title: "2026년 당신의 운세는?",
        img: "./images/result_horse.jpg", 
        desc: "테스트 결과를 불러오지 못했습니다. 다시 시도해주세요.",
        productSub: "지친 나를 위한",
        productTitle: "황제 처방",
        productCopy: "\"2026년, 당신에게 가장 귀한<br>기력을 선물하세요\"",
        productUrl: "https://thesoo.co/about/gongjindan" // 기본 몰 주소
    }
};

// 전역 변수로 현재 데이터를 저장 (버튼 클릭 시 사용)
let currentData = null;

// 2. 페이지 로드 시 URL 파라미터 확인 및 콘텐츠 교체
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type'); 
    
    // 데이터 찾아서 전역 변수에 저장
    currentData = resultData[type] || resultData["default"];

    if (currentData) {
        // [섹션 1] 결과 화면 교체
        document.getElementById('result-title').innerText = currentData.title;
        document.getElementById('result-img').src = currentData.img;
        document.getElementById('result-desc').innerText = currentData.desc;

        // [섹션 2] 처방전 멘트 교체
        document.getElementById('product-sub').innerText = currentData.productSub;
        document.getElementById('product-title').innerHTML = currentData.productTitle;
        document.getElementById('product-copy').innerHTML = currentData.productCopy;
    }
};

// 3. [업그레이드] 처방전 제품 보러가기 (동적 링크 이동)
function openProductPage() {
    if (currentData && currentData.productUrl) {
        // 현재 결과에 맞는 제품 링크로 이동
        window.open(currentData.productUrl, "_blank");
    } else {
        // 만약 데이터가 없으면 기본 쇼핑몰로 이동
        window.open("https://thesoo.co/about/gongjindan", "_blank");
    }
}

// 4. 카카오 채널로 이동 (이벤트 응모)
function goToKakaoChannel() {
    // 👇 실제 카카오 채널 링크로 수정 필수!
    const kakaoChannelLink = "http://pf.kakao.com/_JReVG/friend"; 
    window.open(kakaoChannelLink, "_blank");
}

// 5. 공유하기
function shareKakao() {
    alert("링크가 복사되었습니다!");
}
