// 1. 결과 데이터 세팅 (타입 a~h, 이미지명 result_a~h 로 통일)
const resultData = {
    // [a] 불도저 (기존 horse)
    "a": {
        title: "천하를 평정할<br>\"불도저 정복 군주\"", 
        img: "./images/result_a.jpg",  // 👈 파일명 변경됨
        desc: "\"내 사전에 후진은 없다!\" 목표를 향해 돌진하는 스타일이시군요. 하지만 당신이 밖에서 전쟁을 치르는 동안, 부모님의 '무릎과 허리'는 무너지고 있습니다. 정복 전쟁도 체력이 국력! 부모님께 잃어버린 '힘'을 되찾아주세요.",
        
        productSub: "활력 충전이 필요한 순간",
        productTitle: "프리미엄 녹용 처방",
        productCopy: "\"천하장사 같던 부모님께<br>잃어버린 '힘'을 되찾아주세요\"",
        productImg: "./images/product_horse.jpg", 
        productUrl: "https://thesoo.co/about/gongjindan" 
    },

    // [b] 전략가 (기존 ai)
    "b": {
        title: "차갑지만 완벽한<br>\"냉철한 전략가\"",
        img: "./images/result_b.jpg", // 👈 파일명 변경됨
        desc: "\"감성보단 이성!\" 빈틈없는 계획으로 집안을 일으킬 뇌섹 군주시군요. 하지만 당신의 비상한 두뇌를 물려주신 부모님은 요즘 총기가 예전 같지 않습니다. 전략가에게 필요한 건 맑은 정신입니다.",
        
        productSub: "흐릿해진 머리를 맑게",
        productTitle: "공진단 두뇌 처방",
        productCopy: "\"깜빡하는 부모님의 기억력,<br>맑은 정신을 선물하세요\"",
        productImg: "./images/product_ai.jpg",
        productUrl: "https://thesoo.co/about/gongjindan"
    },

    // [c] 플렉스 (기존 eagle)
    "c": {
        title: "금은보화 뿌리는<br>\"플렉스(Flex) 황제\"",
        img: "./images/result_c.jpg", // 👈 파일명 변경됨
        desc: "\"엄마 이거 사!\" 성공의 맛을 함께 나누는 효도왕이시군요. 하지만 부모님은 좋은 옷을 입고 나갈 '기운'이 없으십니다. 명품 가방보다 명품 근육! 겉치장보다 속부터 채워야 할 때입니다.",
        
        productSub: "명품 가방보다 명품 근육",
        productTitle: "관절/근육 강화 처방",
        productCopy: "\"부모님의 뼈와 근육을 채우는 것,<br>그것이 진짜 효도 플렉스입니다\"",
        productImg: "./images/product_eagle.jpg",
        productUrl: "https://thesoo.co/about/gongjindan"
    },

    // [d] 성군 (기존 turtle)
    "d": {
        title: "덕으로 다스리는<br>\"성군 세종대왕\"",
        img: "./images/result_d.jpg", // 👈 파일명 변경됨
        desc: "능력과 인성을 겸비한 완벽한 K-장녀/장남! 자식 걱정은 덜었지만, 부모님은 '노화'라는 섭리 앞에서 작아지십니다. 성군의 덕목은 평온함! 부모님의 불안한 심신을 편안하게 다스려주세요.",
        
        productSub: "불안한 심신을 편안하게",
        productTitle: "심신안정 우황 처방",
        productCopy: "\"작은 일에도 놀라시는 부모님께<br>평온한 휴식을 선물하세요\"",
        productImg: "./images/product_turtle.jpg",
        productUrl: "https://thesoo.co/about/gongjindan"
    },

    // [e] 선비 (기존 unicorn)
    "e": {
        title: "바람처럼 자유로운<br>\"독야청청 선비\"",
        img: "./images/result_e.jpg", // 👈 파일명 변경됨
        desc: "\"내 인생은 나의 것.\" 독립심 강한 마이웨이 군주시군요. 당신이 자유를 즐기는 사이, 부모님은 '노쇠'와 싸우고 계십니다. 자유롭게 다니시려면 튼튼한 다리가 필수입니다.",
        
        productSub: "여행을 위한 기초 체력",
        productTitle: "진한 쌍화/대보탕 처방",
        productCopy: "\"부모님의 여행 메이트가 되어줄<br>튼튼한 다리를 선물하세요\"",
        productImg: "./images/product_unicorn.jpg",
        productUrl: "https://thesoo.co/about/gongjindan"
    },

    // [f] 도인 (기존 sloth)
    "f": {
        title: "속세를 떠난<br>\"안빈낙도 도인\"",
        img: "./images/result_f.jpg", // 👈 파일명 변경됨
        desc: "돈보다는 워라밸, 평화주의자시군요. \"건강한 게 최고\"라지만, 부모님의 진짜 위기는 '무기력함'입니다. 도인에게 필요한 건 활기찬 에너지! 축 처진 기분에 생기를 불어넣어 주세요.",
        
        productSub: "무기력 타파, 생기 충전",
        productTitle: "활력 앰플 경옥고",
        productCopy: "\"축 처진 부모님의 하루에<br>생기 넘치는 에너지를 채워주세요\"",
        productImg: "./images/product_sloth.jpg",
        productUrl: "https://thesoo.co/about/gongjindan"
    },

    // [g] 풍류왕 (기존 zombie)
    "g": {
        title: "춤추고 노래하는<br>\"흥부자 풍류왕\"",
        img: "./images/result_g.jpg", // 👈 파일명 변경됨
        desc: "\"인생 뭐 있어? 즐겨!\" 부모님과 친구 같은 분위기 메이커시군요. 하지만 당신과 놀아주시느라 부모님 체력은 방전 직전! 노는 것도 체력전입니다.",
        
        productSub: "밤새 놀아도 지치지 않게",
        productTitle: "고농축 홍삼 에너지",
        productCopy: "\"마음은 청춘인 부모님께<br>지치지 않는 강철 체력을!\"",
        productImg: "./images/product_zombie.jpg",
        productUrl: "https://thesoo.co/about/gongjindan"
    },

    // [h] 감성군주 (기존 sunfish)
    "h": {
        title: "눈물 많은<br>\"유리멘탈 감성 군주\"",
        img: "./images/result_h.jpg", // 👈 파일명 변경됨
        desc: "부모님 흰머리만 봐도 눈물이 나는 감성파시군요. 감정을 너무 공유하다 보니 부모님의 우울감이 당신에게도 전염됩니다. 두 분 모두에게 마음의 보양이 필요합니다.",
        
        productSub: "예민해진 신경을 부드럽게",
        productTitle: "심신 위로 보양 처방",
        productCopy: "\"슬픔은 나누고 기쁨은 채우는<br>따뜻한 위로를 선물하세요\"",
        productImg: "./images/product_sunfish.jpg",
        productUrl: "https://thesoo.co/about/gongjindan"
    },

    // [기본값]
    "default": {
        title: "2026년 당신의<br>통치 스타일은?",
        img: "./images/result_a.jpg",  // 👈 기본값도 a로 변경
        desc: "테스트 결과를 불러오지 못했습니다. 다시 시도해주세요.",
        productSub: "지친 나를 위한",
        productTitle: "황제 처방",
        productCopy: "\"2026년, 당신에게 가장 귀한<br>기력을 선물하세요\"",
        productImg: "./images/product_main.jpg",
        productUrl: "https://thesoo.co/about/gongjindan"
    }
};

// 전역 변수로 현재 데이터를 저장
let currentData = null;

// 2. 페이지 로드 시 콘텐츠 교체
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type'); 
    
    // 데이터 찾기
    currentData = resultData[type] || resultData["default"];

    if (currentData) {
        // [섹션 1] 결과 화면 교체
        const resultTitle = document.getElementById('result-title');
        const resultImg = document.getElementById('result-img');
        const resultDesc = document.getElementById('result-desc');

        // innerHTML 사용 (<br> 줄바꿈 적용)
        if(resultTitle) resultTitle.innerHTML = currentData.title; 
        if(resultImg) resultImg.src = currentData.img;
        if(resultDesc) resultDesc.innerText = currentData.desc;

        // [섹션 2] 처방전 화면 교체
        const productSub = document.getElementById('product-sub');
        const productTitle = document.getElementById('product-title');
        const productCopy = document.getElementById('product-copy');
        const productImgEl = document.getElementById('recommend-img'); 

        if(productSub) productSub.innerText = currentData.productSub;
        if(productTitle) productTitle.innerHTML = currentData.productTitle;
        if(productCopy) productCopy.innerHTML = currentData.productCopy;
        
        // 제품 이미지 교체
        if(productImgEl) {
            productImgEl.src = currentData.productImg;
        }
    }
};

// 3. 제품 보러가기 링크 이동
function openProductPage() {
    if (currentData && currentData.productUrl) {
        window.open(currentData.productUrl, "_blank");
    } else {
        window.open("https://thesoo.co/about/gongjindan", "_blank");
    }
}

// 4. 카카오 채널 이동
function goToKakaoChannel() {
    const kakaoChannelLink = "http://pf.kakao.com/_JReVG/friend"; 
    window.open(kakaoChannelLink, "_blank");
}

// 5. 공유하기 (현재 보고 있는 페이지 주소 복사)
function shareKakao() {
    const shareUrl = window.location.href; 

    navigator.clipboard.writeText(shareUrl)
        .then(() => {
            alert("링크가 복사되었습니다! \n가족, 친구에게 공유해보세요 🔗");
        })
        .catch(err => {
            alert("링크 복사에 실패했습니다. URL을 직접 복사해주세요.");
            console.error('URL 복사 실패:', err);
        });
}
