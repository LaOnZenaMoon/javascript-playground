var x = 0;  // x는 전역으로 선언되었고, 0으로 할당됩니다.

console.log(typeof z); // undefined, z는 아직 존재하지 않습니다.

function a() { // a 함수를 호출했을 때,
  var y = 2;   // y는 함수 a에서 지역변수로 선언되었으며, 2로 할당됩니다.

  console.log(x, y);   // 0 2

  function b() {       // b 함수를 호출하였을때,
    x = 3;  // 존재하는 전역 x값에 3을 할당, 새로운 전역 var 변수를 만들지 않습니다.
    y = 4;  // 존재하는 외부 y값에 4를 할당, 새로운 전역 var 변수를 만들지 않습니다.
    z = 5;  // 새로운 전역 z 변수를 생성하고 5를 할당 합니다.
  }         // (strict mode에서는 ReferenceError를 출력합니다.)

  b();     // 호출되는 b는 전역 변수로 z를 생성합니다.
  console.log(x, y, z);  // 3 4 5
}

a();                   // 호출되는 a는 또한 b를 호출합니다.
console.log(x, z);     // 3 5
console.log(typeof y); // undefined y는 function a에서 지역 변수입니다.
