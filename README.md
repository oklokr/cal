데어슈츠 견적 계산서 설명
=========================

# 1. 견적 계산식 수정법

## 1.1. 경로이동
js 파일 내부에 main.js파일 클릭해주세요.

## 1.2. main.js 함수 수정
main.js 파일 내용중 아래와 같은 함수를 찾아 수정해주세요.    \
※ 함수에 들어간 * / + - 는 기본 계산기에 사용되는 사칙연산 문자입니다. ※    \
    \
함수 내부에 변수설명은 1.2.1를 참조해주세요.
```
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
```

```
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
```

### 1.2.1. 해당 변수 설명
* optionPrice는 옵션 선택 시 110,000원 값이 주어지고 아니면 0을 나타내는 변수입니다.
* widthSize는 사용자가 입력한 가로 길이입니다.
* heightSize는 사용자가 입력한 세로 길이입니다.
* unitPrice계산식 중 (widthSize * heightSize) / 10000의 계산은 M2를 나타내며 단가는 210,000원 입니다.
* optionPlusPrice는 단가와 optionPrice를 합한 값을 저장하는 변수입니다.
* VAT는 세금 계산입니다.
* resultPrice 중 Math.round(VAT + optionPlusPrice)는 세금과 optionPlusPrice를 합한 값을 반올림하여 저장하는 함수입니다.
* resultPrice 중 resultPrice = 462000은 최소금액 설정값 입니다.
* calculatorPriceString는 냉 난방비 절감 후 값을 저장하는 변수입니다.

### 1.2.2. 최소금액 설정 방법
```
resultPrice < 462000 ? resultPrice = 462000 : false;

resultPrice < 최소금액 ? resultPrice = 최소금액 : false;
```
* 위와 같은 변수선언을 찾아 최소금액을 기입해주시면 됩니다.

### 1.2.3. 단가 가격 설정 방법
```
unitPrice = ((widthSize * heightSize) / 10000) * 210000;

unitPrice = ((widthSize * heightSize) / 10000) * 단가가격;
```
* 위와 같은 변수선언을 찾아 단가가격을 기입해주시면 됩니다. 

### 1.2.4. 옵션 가격 설정 방법
```
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
    
    
     const setOption = () => {
        document.querySelector('.option-text').innerHTML = el.target.innerText;

        if (el.target.getAttribute('data-img') !== "1") {
            optionPrice = 옵션가격;
            document.querySelector('.option-price').classList.add('active')
        } else {
            optionPrice = 0;
            document.querySelector('.option-price').classList.remove('active');
        }
    }
```
* 위와 같은 변수선언을 찾아 옵션가격을 기입해주시면 됩니다. 
****
# 2. 이미지 교체 방법
## 2.1. WordPress 사이트 이동과 이미지 삽입
https://www.derschutzshop.com/wp-admin 사이트로 이동합니다.    \
ID와 PassWord입력 후 미디어 > 새로추가 클릭 후 교체하고자 하는 이미지를 삽입합니다.    \
이미지 교체 시 삽입 주의는 2.1.2 파일 이름은 2.1.1 참조하여 준수해주시길 바랍니다.    \

### 2.1.1. 이미지 네이밍 주의점
이미지 네이밍은 규칙이 있으므로 다음과같이 설명합니다.
* 프레임: Warm White(1), Matte Gray(2)
* 필름: Charcoal Gray(1)
* 투과율: 2%(1), 7%(2)
* 추가옵션: 싱글(1), Dark Gray듀오(2), Beige듀오(3), White듀오(4)

예) 프레임 Matte Gray, 필름 Charcoal Gray, 투과율 7%, 추가옵션 beige듀오 선택 시 파일 이름은 1123이 됩니다.

### 2.1.2. 이미지 삽입 시 주의점
이미지 삽입 시 해당 페이지의 모든 블라인드 사진을 교체해주길 바랍니다.

## 2.2. 경로이동 및 함수 수정
js 파일 내부에 main.js파일 클릭해주세요.
```
const imgSetUrl = "https://www.derschutzshop.com/wp/wp-content/uploads/2021/02/";

const imgSetUrl = "https://www.derschutzshop.com/wp/wp-content/uploads/수정 년도/수정 월/";
```
해당 변수선언을 찾아 수정년도와 월을 입력해주시길 바랍니다.

# 3. 수정 적용방법
## 3.1. WordPress 접속
https://www.derschutzshop.com/wp-admin 사이트로 이동합니다.
## 3.2. 페이지 수정
좌측 메뉴중 페이지에 모든 페이지를 클릭합니다.    \
데어슈츠블라인드 견적에 마우스 커서를 올리고 편집을 클릭합니다.
## 3.3. 코드 넣기
3.3.1. 참조하여 파일을 열어주세요.    \
3.3.2. 참조하여 해당 양식안에 양식에 알맞게 넣은 후 복사하여 코드를 넣어줍니다.    \

### 3.3.1. 경로이동
1. css 파일안에 reset.css
2. css 파일안에 main.css
3. js 파일안에 main.js
4. index.html
### 3.3.2. 양식
```
<style>
(reset.css)
(main.css)
</style>

<div class="wrap">
    (index.html)
    
    <script type="text/javascript">Kakao.init('582340ec20c1ba4e20c3d6c9c56ec807');</script>
    <script>
        (main.js)
    </script>
</div>
```
