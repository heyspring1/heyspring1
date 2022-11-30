var changeNum = 1;

function tabChange(num) {
  $("#tab_1").attr("class", "tab");
  $("#tab_2").attr("class", "tab");
  $("#tab_3").attr("class", "tab");
  $("#tab_4").attr("class", "tab");
  $("#tab_5").attr("class", "tab");
  $("#tab_6").attr("class", "tab");
  $("#tab_7").attr("class", "tab");
  $("#tab_8").attr("class", "tab");
  $("#tab_9").attr("class", "tab");
  $("#tab_10").attr("class", "tab");
  $("#tab_" + num).attr("class", "tab_on_" + num);

  changeNum = parseInt(num);

  if (num == "1") {
    $(".tab_box_" + num).css("display", "block");
    $(".tab_box_2").css("display", "none");
    $(".tab_box_3").css("display", "none");
    $(".tab_box_4").css("display", "none");
    $(".tab_box_5").css("display", "none");
    $(".tab_box_6").css("display", "none");
    $(".tab_box_7").css("display", "none");
    $(".tab_box_8").css("display", "none");
    $(".tab_box_9").css("display", "none");
    $(".tab_box_10").css("display", "none");
  } else if (num == "2") {
    $(".tab_box_1").css("display", "none");
    $(".tab_box_" + num).css("display", "block");
    $(".tab_box_3").css("display", "none");
    $(".tab_box_4").css("display", "none");
    $(".tab_box_5").css("display", "none");
    $(".tab_box_6").css("display", "none");
    $(".tab_box_7").css("display", "none");
    $(".tab_box_8").css("display", "none");
    $(".tab_box_9").css("display", "none");
    $(".tab_box_10").css("display", "none");
    $("#tab_" + num).attr("class", "tab_on_" + num);
  } else if (num == "3") {
    $(".tab_box_1").css("display", "none");
    $(".tab_box_2").css("display", "none");
    $(".tab_box_" + num).css("display", "block");
    $(".tab_box_4").css("display", "none");
    $(".tab_box_5").css("display", "none");
    $(".tab_box_6").css("display", "none");
    $(".tab_box_7").css("display", "none");
    $(".tab_box_8").css("display", "none");
    $(".tab_box_9").css("display", "none");
    $(".tab_box_10").css("display", "none");
    $("#tab_" + num).attr("class", "tab_on_" + num);
  } else if (num == "4") {
    $(".tab_box_1").css("display", "none");
    $(".tab_box_2").css("display", "none");
    $(".tab_box_3").css("display", "none");
    $(".tab_box_" + num).css("display", "block");
    $(".tab_box_5").css("display", "none");
    $(".tab_box_6").css("display", "none");
    $(".tab_box_7").css("display", "none");
    $(".tab_box_8").css("display", "none");
    $(".tab_box_9").css("display", "none");
    $(".tab_box_10").css("display", "none");
    $("#tab_" + num).attr("class", "tab_on_" + num);
  } else if (num == "5") {
    $(".tab_box_1").css("display", "none");
    $(".tab_box_2").css("display", "none");
    $(".tab_box_3").css("display", "none");
    $(".tab_box_4").css("display", "none");
    $(".tab_box_" + num).css("display", "block");
    $(".tab_box_6").css("display", "none");
    $(".tab_box_7").css("display", "none");
    $(".tab_box_8").css("display", "none");
    $(".tab_box_9").css("display", "none");
    $(".tab_box_10").css("display", "none");
    $("#tab_" + num).attr("class", "tab_on_" + num);
  } else if (num == "6") {
    $(".tab_box_1").css("display", "none");
    $(".tab_box_2").css("display", "none");
    $(".tab_box_3").css("display", "none");
    $(".tab_box_4").css("display", "none");
    $(".tab_box_5").css("display", "none");
    $(".tab_box_" + num).css("display", "block");
    $(".tab_box_7").css("display", "none");
    $(".tab_box_8").css("display", "none");
    $(".tab_box_9").css("display", "none");
    $(".tab_box_10").css("display", "none");
    $("#tab_" + num).attr("class", "tab_on_" + num);
  } else if (num == "7") {
    $(".tab_box_1").css("display", "none");
    $(".tab_box_2").css("display", "none");
    $(".tab_box_3").css("display", "none");
    $(".tab_box_4").css("display", "none");
    $(".tab_box_5").css("display", "none");
    $(".tab_box_6").css("display", "none");
    $(".tab_box_" + num).css("display", "block");
    $(".tab_box_8").css("display", "none");
    $(".tab_box_9").css("display", "none");
    $(".tab_box_10").css("display", "none");
    $("#tab_" + num).attr("class", "tab_on_" + num);
  } else if (num == "8") {
    $(".tab_box_1").css("display", "none");
    $(".tab_box_2").css("display", "none");
    $(".tab_box_3").css("display", "none");
    $(".tab_box_4").css("display", "none");
    $(".tab_box_5").css("display", "none");
    $(".tab_box_6").css("display", "none");
    $(".tab_box_7").css("display", "none");
    $(".tab_box_" + num).css("display", "block");
    $(".tab_box_9").css("display", "none");
    $(".tab_box_10").css("display", "none");
    $("#tab_" + num).attr("class", "tab_on_" + num);
  } else if (num == "9") {
    $(".tab_box_1").css("display", "none");
    $(".tab_box_2").css("display", "none");
    $(".tab_box_3").css("display", "none");
    $(".tab_box_4").css("display", "none");
    $(".tab_box_5").css("display", "none");
    $(".tab_box_6").css("display", "none");
    $(".tab_box_7").css("display", "none");
    $(".tab_box_8").css("display", "none");
    $(".tab_box_" + num).css("display", "block");
    $(".tab_box_10").css("display", "none");
    $("#tab_" + num).attr("class", "tab_on_" + num);
  } else if (num == "10") {
    $(".tab_box_1").css("display", "none");
    $(".tab_box_2").css("display", "none");
    $(".tab_box_3").css("display", "none");
    $(".tab_box_4").css("display", "none");
    $(".tab_box_5").css("display", "none");
    $(".tab_box_6").css("display", "none");
    $(".tab_box_7").css("display", "none");
    $(".tab_box_8").css("display", "none");
    $(".tab_box_9").css("display", "none");
    $(".tab_box_" + num).css("display", "block");
    $("#tab_" + num).attr("class", "tab_on_" + num);
  }
}

function numChange(type) {
  // type , num은 변수임 암거나 해도 상관없음

  if (type == "1") {
    if (changeNum == 6) {
      // 최댓값 방지
      return;
    } else {
      num = changeNum + 1;
      tabChange(num);
    }
  } else {
    if (changeNum == 1) {
      // 0 방지
      return;
    }
    num = changeNum - 1;
    tabChange(num);
  }
}
