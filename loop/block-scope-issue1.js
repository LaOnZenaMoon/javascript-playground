function findUser(id) {
  if (id > 0) {
    var successMsg = "사용자를 조회하였습니다.";
    console.log(successMsg);
    console.log({ id: id, name: "사용자 #" + id });
  } else {
    var failureMsg = "잘못된 아이디입니다!";
    console.log(failureMsg);
  }
  console.log("실패 메세지:", failureMsg);
}

findUser(1);
