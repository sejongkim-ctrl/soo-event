// 1. 결과 데이터 세팅 (디자인이 적용된 텍스트)
const resultData = {
    // [Type 1] 불도저 (a)
    "a": {
        title: "천하를 평정할<br>\"불도저 정복 군주\"", 
        img: "./images/result_a.jpg",
        
        // 결과 카드 하단 내용
        desc: "당신의 관상은 목표를 향해 거침없이 돌진하는 <span class='highlight-txt'>'뭐든 밀어붙이는 상'</span>입니다.<br><br>2026년은 야망이 폭발하는 해이나, 과도한 열정으로 <span class='highlight-txt'>'엔진 과열'</span>이 우려됩니다. 천하를 얻으려면 무엇보다 <span class='highlight-txt'>'압도적인 에너지'</span>가 뒷받침되어야 합니다.",
        
        productSub: "지친 나를 위한",
        productTitle: "원방공진단 수[壽]", // 닥터 수 처방 제품명
        
        // 닥터 수의 처방
        productCopy: "당신의 지칠 줄 모르는 에너지는 부모님께 물려받은 유산이나, 정작 부모님의 엔진은 서서히 식어가고 있습니다.<br><br>부모님의 체력을 <span class='highlight-txt'>강력하게 끌어올릴 준비</span>를 해보세요.",
        
        productImg: "./images/product_horse.jpg", 
        productUrl: "https://thesoo.co/promotion/26seol" 
    },

    // [Type 2] 전략가 (b)
    "b": {
        title: "차갑지만 완벽한<br>\"냉철한 전략가\"",
        img: "./images/result_b.jpg",
        
        desc: "당신의 관상은 예리하고 지적인 책사이며, <span class='highlight-txt'>'가슴보다 머리가 지배하는 상'</span>입니다.<br><br>2026년은 두뇌 회전이 빨라지는 만큼 <span class='highlight-txt'>'뇌 과부하'</span>가 우려됩니다. 머리로 쏠린 열을 내리고 <span class='highlight-txt'>'흐트러짐 없는 총기'</span>를 유지하는 것이 만사형통의 열쇠입니다.",
        
        productSub: "흐릿해진 머리를 맑게",
        productTitle: "사향공진단 수[壽]",
        
        productCopy: "비상한 두뇌로 당신의 전략이 빛을 발하는 지금, 부모님의 기억은 세월 탓에 점차 흐릿해지고 있습니다.<br><br>막힌 기운을 뚫어주는 <span class='highlight-txt'>'사향'의 힘</span>을 선물해보세요.",
        
        productImg: "./images/product_ai.jpg",
        productUrl: "https://thesoo.co/promotion/26seol"
    },

    // [Type 3] 플렉스 (c)
    "c": {
        title: "금은보화 뿌리는<br>\"플렉스(Flex) 황제\"",
        img: "./images/result_c.jpg",
        
        desc: "당신의 관상은 재물복이 타고난 <span class='highlight-txt'>'돈도 정, 사람도 정인 상'</span>입니다.<br><br>2026년은 더 높은 곳으로 비상할 기회이나, 화려한 겉모습 속에 내실을 놓칠 수 있습니다. <span class='highlight-txt'>'가장 근본적이고 귀한 것'</span>을 챙겨야 롱런할 수 있음을 명심하세요.",
        
        productSub: "가장 귀한 것을 선물하세요",
        productTitle: "원방공진단 수[壽]",
        
        productCopy: "당신의 귀티 나는 아우라는 부모님의 정성 덕분이나, 정작 부모님의 건강은 세월의 무게로 인해 약해지고 있습니다.<br><br>황제에게 진상하던 <span class='highlight-txt'>최고급 원료의 결정체</span>를 선물해보세요.",
        
        productImg: "./images/product_eagle.jpg",
        productUrl: "https://thesoo.co/promotion/26seol"
    },

    // [Type 4] 성군 (d)
    "d": {
        title: "덕으로 다스리는<br>\"성군 세종대왕\"",
        img: "./images/result_d.jpg",
        
        desc: "당신의 관상은 인자하고 덕이 넘치며 <span class='highlight-txt'>'사람을 편하게 만드는 상'</span>입니다.<br><br>허나 모든 짐을 혼자 짊어지려는 책임감 때문에 2026년에는 <span class='highlight-txt'>'속앓이'</span>를 할 수 있습니다. 답답한 흐름을 뚫고 <span class='highlight-txt'>'마음의 평안'</span>을 찾는 것이 건강의 핵심입니다.",
        
        productSub: "답답한 속을 편안하게",
        productTitle: "녹용경옥고 수[壽]",
        
        productCopy: "타인을 배려하는 당신의 따뜻한 마음씨는 부모님을 닮았으나, 자식 걱정뿐인 부모님의 속은 지금 까맣게 타들어가고 있을 수 있어요.<br><br>녹용 성분으로 부모님의 <span class='highlight-txt'>꽉 막힌 기운을 부드럽게 순환</span>시켜 드려보세요.",
        
        productImg: "./images/product_turtle.jpg",
        productUrl: "https://thesoo.co/promotion/26seol"
    },

    // [Type 5] 선비 (e)
    "e": {
        title: "바람처럼 자유로운<br>\"독야청청 선비\"",
        img: "./images/result_e.jpg",
        
        desc: "당신의 관상은 구속받지 않는 고고하며 <span class='highlight-txt'>'속세에 발 안 담그는 상'</span>입니다.<br><br>2026년에는 역마살과 함께 이동수가 많습니다. 낯선 환경에서도 탈이 나지 않으려면, 외부 풍파를 막아내는 <span class='highlight-txt'>'단단한 방어막(면역)'</span>이 필수입니다.",
        
        productSub: "면역력과 기초체력",
        productTitle: "녹용경옥고 수[壽]",
        
        productCopy: "자유로운 영혼은 부모님을 닮았으나, 당신이 밖을 누비는 동안 부모님의 몸은 찬 바람을 막아낼 힘을 잃어가고 있어요.<br><br>양기를 북돋우고 근골을 튼튼하게 하는 <span class='highlight-txt'>힘의 상징 '녹용'</span>을 부모님에게 선물해보세요.",
        
        productImg: "./images/product_unicorn.jpg",
        productUrl: "https://thesoo.co/promotion/26seol"
    },

    // [Type 6] 도인 (f)
    "f": {
        title: "속세를 떠난<br>\"안빈낙도 도인\"",
        img: "./images/result_f.jpg",
        
        desc: "당신의 관상은 욕심 없이 평화로우며 <span class='highlight-txt'>'욕심이 빠진 평온한 상'</span>입니다.<br><br>다 좋으나 2026년에는 물 흐르듯 살다 자칫 활력이 떨어질 수 있습니다. 고인 물이 되지 않으려면 <span class='highlight-txt'>'마르지 않는 진액'</span>과 <span class='highlight-txt'>'생기'</span>를 채우는 것이 급선무입니다.",
        
        productSub: "마르지 않는 활력 충전",
        productTitle: "녹용경옥고 수[壽]",
        
        productCopy: "당신의 평온함은 부모님 덕분이나, 노화로 몸속 진액이 마른 부모님의 일상은 평화가 아닌 무기력함일 수 있습니다.<br><br>몸속 부족해진 진액을 보충하여, 메마른 부모님의 건강을 <span class='highlight-txt'>활력으로 채워주세요.</span>",
        
        productImg: "./images/product_sloth.jpg",
        productUrl: "https://thesoo.co/promotion/26seol"
    },

    // [Type 7] 풍류왕 (g)
    "g": {
        title: "춤추고 노래하는<br>\"흥부자 풍류왕\"",
        img: "./images/result_g.jpg",
        
        desc: "당신의 관상은 사람을 끌어당기는 도화살 가득한 <span class='highlight-txt'>'기운이 새어나오는 상'</span>입니다.<br><br>2026년에도 모임이 끊이지 않겠으나, 간과 체력이 비명을 지를 수 있습니다. <span class='highlight-txt'>노는 것도 집중력이 필수</span>입니다.",
        
        productSub: "번아웃 없는 집중력",
        productTitle: "총명공진단 수[壽]", // 텍스트 내용에 맞춰 제품명 변경
        
        productCopy: "업무도 노는 것도 '집중력'이 필요할 때!<br><br>피로회복 뿐만 아니라 작업기억 향상에 도움되는 <span class='highlight-txt'>총명공진단</span>을 스스로에게 선물하고 매일 아침 달라지는 가뿐함을 경험해보세요.",
        
        productImg: "./images/product_zombie.jpg",
        productUrl: "https://thesoo.co/promotion/26seol"
    },

    // [Type 8] 감성군주 (h)
    "h": {
        title: "눈물 많은<br>\"유리멘탈 감성 군주\"",
        img: "./images/result_h.jpg",
        
        desc: "당신의 관상은 감수성이 풍부한 <span class='highlight-txt'>'마음이 먼저 움직이는 상'</span>입니다.<br><br>2026년, 섬세한 감각으로 성취를 얻겠으나 감정 기복으로 기운이 약해질 수 있습니다. 강한 자극보다는 <span class='highlight-txt'>'부드럽게 스며드는 힘'</span>으로 몸을 보양해야 합니다.",
        
        productSub: "부드럽게 스며드는 보양",
        productTitle: "부드러운 공진단 처방", // 상세 텍스트 맥락 반영
        
        productCopy: "섬세한 감수성은 부모님을 닮았으나, 자식 걱정에 입맛마저 잃으신 부모님의 속은 지금 부드러운 위로가 필요합니다.<br><br>쓴맛은 줄이고 효능은 높여, <span class='highlight-txt'>입맛 없는 부모님도 부담 없이</span> 드실 수 있는 건강을 선물해보세요.",
        
        productImg: "./images/product_sunfish.jpg",
        productUrl: "https://thesoo.co/promotion/26seol"
    },

    // [기본값]
    "default": {
        title: "2026년 당신의<br>통치 스타일은?",
        img: "./images/result_a.jpg",
        desc: "테스트 결과를 불러오지 못했습니다. 다시 시도해주세요.",
        productSub: "지친 나를 위한",
        productTitle: "황제 처방",
        productCopy: "\"2026년, 당신에게 가장 귀한<br>기력을 선물하세요\"",
        productImg: "./images/product_main.jpg",
        productUrl: "https://thesoo.co/promotion/26seol"
    }
};

// 2. 페이지 로드 시 콘텐츠 교체 (HTML 태그 적용을 위해 innerHTML 사용 필수!)
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

        // innerHTML 사용! (<br>, <span> 태그 적용됨)
        if(resultTitle) {
                resultTitle.style.display = 'none'; 
            }
            
        if(resultImg) resultImg.src = currentData.img;
        if(resultDesc) resultDesc.innerHTML = currentData.desc; // 👈 여기 innerHTML 확인 필수

        // [섹션 2] 처방전 화면 교체
        const productSub = document.getElementById('product-sub');
        const productTitle = document.getElementById('product-title');
        const productCopy = document.getElementById('product-copy');
        const productImgEl = document.getElementById('recommend-img'); 

        if(productSub) productSub.innerText = currentData.productSub;
        if(productTitle) productTitle.innerHTML = currentData.productTitle;
        if(productCopy) productCopy.innerHTML = currentData.productCopy; // 👈 여기도 innerHTML
        
        // 제품 이미지 교체
        if(productImgEl) {
            productImgEl.src = currentData.productImg;
        }
    }
};
// 처방전 자세히 보기 버튼 클릭 시 실행되는 함수
function openProductPage() {
    // 1. 현재 데이터(currentData)가 있고, 그 안에 설정된 URL이 있는지 확인합니다.
    if (currentData && currentData.productUrl) {
        // 2. 데이터에 지정된 URL(https://thesoo.co/promotion/26seol)로 새 창을 엽니다.
        window.open(currentData.productUrl, "_blank");
    } else {
        // 3. 만약 데이터가 없는 예외 상황이라면 기본 주소로 이동합니다.
        window.open("https://thesoo.co/promotion/26seol", "_blank");
    }
}
// 순금 1돈 이벤트 응모 버튼 클릭 시 실행되는 함수
function goToKakaoChannel() {
    // 카카오톡 채널 친구추가 주소
    const kakaoChannelLink = "http://pf.kakao.com/_JReVG/friend"; 
    
    // 새 창으로 열기
    window.open(kakaoChannelLink, "_blank");
}
// ... 기존 함수들 (openProductPage, goToKakaoChannel, shareKakao) 그대로 유지 ...
