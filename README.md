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

### 1.2.1 해당 변수 설명
widthSize는 사용자가 입력한 가로 길이입니다.    \
heightSize는 사용자가 입력한 세로 길이입니다.    \
unitPrice계산식 중 (widthSize * heightSize) / 10000의 계산은 M2를 나타내며 단가는 210,000원 입니다.    \
optionPlusPrice중 optionPrice는 옵션 선택 시 110,00원 값이 주어지고 아니면 0을 나타내는 변수입니다.    \
VAT는 세금 계산입니다    \
resultPrice 중 Math.round(VAT + optionPlusPrice)는 세금과     \

### 1.2.1. 장점
	1. 간결하다.
	2. 별도의 도구없이 작성가능하다.
	3. 다양한 형태로 변환이 가능하다.
	4. 텍스트(Text)로 저장되기 때문에 용량이 적어 보관이 용이하다.
	5. 텍스트파일이기 때문에 버전관리시스템을 이용하여 변경이력을 관리할 수 있다.
	6. 지원하는 프로그램과 플랫폼이 다양하다.

### 1.2.2. 단점
	1. 표준이 없다.
	2. 표준이 없기 때문에 도구에 따라서 변환방식이나 생성물이 다르다.
	3. 모든 HTML 마크업을 대신하지 못한다.

****
# 2. 이미지 교체 방법
## 2.1. 헤더Headers
* 큰제목: 문서 제목
    ```
    This is an H1
    =============
    ```
    This is an H1
    =============

* 작은제목: 문서 부제목
    ```
    This is an H2
    -------------
    ```
    This is an H2
    -------------

* 글머리: 1~6까지만 지원
```
# This is a H1
## This is a H2
### This is a H3
#### This is a H4
##### This is a H5
###### This is a H6
```
# This is a H1
## This is a H2
### This is a H3
#### This is a H4
##### This is a H5
###### This is a H6
####### This is a H7(지원하지 않음)
