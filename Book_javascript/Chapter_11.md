11장

- strict 모드
    
    “use strict”; → strict모드 동작.
    
    1. 변수는 모두 선언해야만 한다. 선언되지 않은 변수, 함수, 함수의 인자에 값을 대입하면 ReferenceError가 발생한다.
    2. 함수를 직접 호출할 때, 함수 안의 this 값이 undefined가 된다. 비 Strict 모드에서는 함수 안의 this 값이 전역 객체의 참조가 된다.
    3. with 문은 사용할 수 없다.
    4. 함수 정의문에 같은 이름의 인수가 있으면 문법 오류가 발생한다.
    5. 객체에 같은 이름의 프로퍼티가 있으면 문법 오류가 발생한다.
    6. NaN, Infinity, undefined를 표기하면 TypeError가 발생한다.
    7. arguments[i]는 호출되었을 때의 인수 값을 유지한다. 비 Strict 모드에서는 arguments[i] 가 인자의 별명이다. 따라서 한쪽을 수정하면 다른 쪽도 바뀐다.
    8. arguments.callee를 읽을 수 없다. 읽기를 시도하면 TypeError가 발생한다.
    9. eval로 실행한 코드는 호출자의 유효 범위 안에 새로운 변수나 함수를 선언할 수 없다.
    
    console.trace가 함수 h에서 실행되었고, 함수 h는 함수 g가 호출했으며, 함수 g는 함수 f가 호출했고, 함수 f는 익명 함수가 호출했다고 보여 주고 있습니다.
    
    예외를 표현하는 내장 객체의 생성자
    Error : 범용적인 예외 객체
    EvalError : eval 함수와 관련해서 발생한 예외 객체
    RangeError : 숫자 값이 허용 범위를 벗어났을 때 발생하는 예외 객체
    ReferenceError : 잘못된 참조를 만났을 때 발생하는 예외 객체
    SyntaxError : 자바스크립트 문법에 어긋나는 구문을 만났을 때 발생하는 예외 객체
    TypeError : 변수 및 인수 타입이 유효하지 않을 때 발생하는 예외 객체
    URIError : encodeURI와 decodeURI 메서드에 잘못된 인수가 전달되었을 때 발생하는 예외 객체
