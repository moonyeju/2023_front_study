- let
    
    let으로 선언한 변수의 유효범위는 블록안이다.
    
    유효범위 밖에서 따로 선언 안하면 오류뜸
    
    let→ 변수 선언 끌어올림x, 여러번 선언시 오류
    
- const
    
    유효범위를 가짐.
    
    반드시 초기화 해야함!!
    
    이미 선언한 변수에 다시 대입시 오류.
    
    객체나 배열일 경우는 수정가능
    
- Date
    
    now.getFullYear() // → 2016(연도를 뜻하는 숫자 값)
    
    now.getMonth() // → 4(월을 뜻하는 숫자 값. 0부터 시작하므로 이 경우에는 5월을 뜻함) 
    
    now.getDate() // → 17(날짜를 뜻하는 숫자 값)
    
    now.getDay() // → 4(요일을 뜻하는 숫자 값. 일요일이 0이므로 이 경우에는 수요일을 뜻함) 
    
    now.getHours() // → 16(시각의 시간을 뜻하는 숫자 값) 
    
    now.getMinutes() // → 50(시각의 분을 뜻하는 숫자 값) 
    
    now.getSeconds() // → 55(시각의 초를 뜻하는 숫자 값) 
    
    now.getMilliseconds() // → 257(시각의 밀리초를 뜻하는 숫자 값) 
    
    now.toString() // → "Thu Mar 17 2016 16:50:55 GMT+0900(KST)" 
    
    now.toLocaleString() // → "2016/3/17 16:50:55"(지역화된 시간과 날짜 정보) 
    
    now.toLocaleDateString() // → "2016. 3. 17."(지역화된 날짜 정보) 
    
    now.toLocaleTimeString() // → "오후 4:50:55"(지역화된 시간 정보) 
    
    now.getUTCHours() // → 7(UTC(협정 세계 시) 시각의 시간을 뜻하는 숫자 값) 
    
    now.toUTCString() // → "Sun, 17 Apr 2016 07:50:55 GMT"(UTC 시간과 날짜 정보)
    
- 자바스크립트 객체의 분류
    
    <img src=img/js_object.png></img>
    
- 희소배열
    
    <img src=img/sparse_array.png></img>
    - var a 에 배열 요소가 들어있는지 확인하려면?
        
        → a.hasOwnProperty(”2”);  // true or false
        
