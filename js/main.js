const widthSizeElement = document.querySelector('.size-width-input');       // 가로 입력창 element 저장 변수
const heightSizeElement = document.querySelector('.size-height-input');     // 세로 입력창 element 저장 변수
const clickItem = document.querySelectorAll('.click-item');                 // 옵션들 element 저장 변수

let widthSize = 0;      // 가로 입력 값
let heightSize = 0;     // 세로 입력 값
let frame = "1";        // 프레임 선택 번호
let film = "1";         // 필름 선택 번호
let opacity = "1";      // 투명도 선택 번호
let option = "1";       // 옵션 선택 번호

let unitPrice = 0;          // 가로 세로 계산 값
let optionPrice = 0;        // 옵션 가격 값
let optionPlusPrice = 0;    // 옵션 + (가로, 세로) 계산 값
let resultPrice = 462000;   // 기본가격 설정
let VAT = 0;                // 세금가격 값


// 클릭 이벤트 함수
const clickItemEvent = (el) => {
    const btnParent = el.target.parentNode;                                                 // 클릭 element 부모 저장 변수
    const items = el.target.parentNode.querySelectorAll('button');                          // 클릭 element 부모의 자식들 저장 변수
    const selectorText = el.target.parentNode.parentNode.querySelector('.selector');        // 클릭 element 부모의 부모 노드 안 selector 저장 변수
    const filmFrameImg = document.querySelector('.film-frame-img');                         // 필름-프레임 이미지 element 저장 변수
    const opacityImg = document.querySelector('.opacity-img');                              // 투명도 이미지 element 저장 변수
    const optionImg = document.querySelector('.option-img');                                // 옵션 이미지 element 저장 변수
    const resultImg = document.querySelector('.result-img');                                // 결과 이미지 element 저장 변수
    const imgSetUrl = "https://www.derschutzshop.com/wp/wp-content/uploads/2021/02/";       // 이미지 링크 앞부분 저장 변수 || 이미지 교체 시 (2021/02) 날자 해당 년.월 수정 바람
    
    // 이미지 링크 저장 함수
    const setImgsSrc = (filmFrameSet, opacitySet, optionSet, resultSet) => {
        filmFrameSet.src = imgSetUrl + (frame + film + "1" + "1") + ".jpg";
        opacitySet.src = imgSetUrl + (frame + film + opacity + "1") + ".jpg"; 
        optionSet.src = imgSetUrl + (frame + film + opacity + option) + ".jpg";
        resultSet.src = imgSetUrl + (frame + film + opacity + option) + ".jpg";
    }

    // 추가 옵션 클릭 시 설정 함수
    const setOption = () => {
        document.querySelector('.option-text').innerHTML = el.target.innerText;

        if (el.target.getAttribute('data-img') !== "1") {
            optionPrice = 110000;
            document.querySelector('.option-price').classList.add('active')
        } else {
            optionPrice = 0;
            document.querySelector('.option-price').classList.remove('active');
        }
    }

    // 클릭 데이터 유효성 검사 || 이미지 교체
    switch (btnParent.getAttribute('data-name')) {
        case "frame":
            console.log("프레임");
            frame = el.target.getAttribute('data-img');
            setImgsSrc(filmFrameImg, opacityImg, optionImg, resultImg);
            document.querySelector('.frame-text').innerHTML = el.target.innerText;
            break;
        
        case "film":
            console.log("필름");
            film = el.target.getAttribute('data-img');
            setImgsSrc(filmFrameImg, opacityImg, optionImg, resultImg);
            document.querySelector('.film-text').innerHTML = el.target.innerText;
            break;
        
        case "opacity":
            console.log("투과율");
            opacity = el.target.getAttribute('data-img'); imgSetUrl;
            setImgsSrc(false, opacityImg, optionImg, resultImg);
            document.querySelector('.opacity-text').innerHTML = el.target.innerText + "%";
            break;
        
        case "option":
            console.log("옵션");
            option = el.target.getAttribute('data-img'); imgSetUrl;
            setImgsSrc(false, false, optionImg, resultImg);
            setOption();
            priceSum();
            break;
        
        default: console.log('Data Erorr 입니다.'); break;
    }

    for (let i = 0; i < items.length; i++) { items[i].classList.remove('active') }

    el.target.classList.add('active');
    selectorText.innerHTML = el.target.innerText;
}

// 상품 가격 계산식 함수
const priceSum = () => {
    unitPrice = ((widthSize * heightSize) / 10000) * 210000;
    optionPlusPrice = unitPrice + optionPrice;
    VAT = optionPlusPrice * 0.1;
    resultPrice = Math.round(VAT + optionPlusPrice);
    resultPrice < 462000 ? resultPrice = 462000 : false;
    let priceString = "￦" + resultPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let calculatorPriceString = "￦" + (resultPrice - 5005000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    document.querySelectorAll('.calculator-price').forEach(item => item.innerHTML = calculatorPriceString)
    document.querySelectorAll('.price-result').forEach(item => item.innerHTML = priceString)
}


// 사이즈 입력 시 DOM수정 함수
const sizeInputEvnet = (el) => {

    switch (el.target.classList.value) {
        case "size-width-input":
            widthSize = el.target.value;
            document.querySelector('.width-size-text').innerHTML = widthSize+"cm";
            break;
        case "size-height-input":
            heightSize = el.target.value;
            document.querySelector('.height-size-text').innerHTML = heightSize+"cm";
            break;
        default: break;
    }
    priceSum()
}

// 절감비용 팝업박스 active, remove 설정 함수
function calculatorOpenCloseEvent(el) {
    const calculatorWrap =  document.querySelector('.calculator-wrap')
    switch (el.classList.value) {
        case "calculator-open-btn": calculatorWrap.classList.add('active'); break;
        case "close-btn": calculatorWrap.classList.remove('active'); break;
        default: console.log("클레스 오류입니다."); break;
    }
}

// 카카오톡 공유하기 설정 함수
function deskTopSendLink() {
    const getImgVal = document.querySelector('.result-img').src;
    const optionText = document.querySelector('.option-text');
    const opacityText = document.querySelector('.opacity-text')
    
    console.log(resultPrice);
    Kakao.Link.sendDefault({
      objectType: 'commerce',
      content: {
        title: '가로: '+String(widthSize)+', 세로: '+String(heightSize)+', 추가옵션: '+optionText.innerText+', 투과율: '+opacityText.innerText+'',
        imageUrl:
          ''+getImgVal+'',
        link: {
          mobileWebUrl: 'https://derschutzshop.com/mainblind/',
          webUrl: 'https://derschutzshop.com/mainblind/',
        },
      },
      commerce: {
        productName: '선택 옵션 총 가격',
        regularPrice: resultPrice,
      },
      buttons: [
        {
          title: '상품 더 보기',
          link: {
            mobileWebUrl: 'https://derschutzshop.com/mainblind/',
            webUrl: 'https://derschutzshop.com/mainblind/',
          },
        },
      ],
    })
}

// 키 입력 시 이벤트
widthSizeElement.addEventListener("keyup", sizeInputEvnet);
heightSizeElement.addEventListener("keyup", sizeInputEvnet);

// 옵션들 클릭 이벤트
clickItem.forEach(item => item.addEventListener('click', clickItemEvent));