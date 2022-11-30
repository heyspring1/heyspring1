var changeNum = 1; // 증가, 감소 버튼 위한 전역변수 선언 (int)

function tabChange(num) {
  $("#tab_1").attr("class", "tab_first");
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

  changeNum = parseInt(num); // 여기서 num이 (string) 이여서 변수 대입이 안되므로 (int)로 형변환

  if (num == "1") {
    $(".tab_box" + num).css("display", "block");
    $(".tab_box2").css("display", "none");
    $(".tab_box3").css("display", "none");
    $(".tab_box4").css("display", "none");
    $(".tab_box5").css("display", "none");
    $(".tab_box6").css("display", "none");
    $(".tab_box7").css("display", "none");
    $(".tab_box8").css("display", "none");
    $(".tab_box9").css("display", "none");
    $(".tab_box10").css("display", "none");
  } else if (num == "2") {
    $(".tab_box" + num).css("display", "block");
    $(".tab_1").css("border-right", "1px solid #dae1e6");
    $(".tab_box1").css("display", "none");
    $(".tab_box3").css("display", "none");
    $(".tab_box4").css("display", "none");
    $(".tab_box5").css("display", "none");
    $(".tab_box6").css("display", "none");
    $(".tab_box7").css("display", "none");
    $(".tab_box8").css("display", "none");
    $(".tab_box9").css("display", "none");
    $(".tab_box10").css("display", "none");
    {
      muCenter(target);
    }
  } else if (num == "3") {
    $(".tab_box" + num).css("display", "block");

    $(".tab_box2").css("display", "none");
    $(".tab_box1").css("display", "none");
    $(".tab_box4").css("display", "none");
    $(".tab_box5").css("display", "none");
    $(".tab_box6").css("display", "none");
    $(".tab_box7").css("display", "none");
    $(".tab_box8").css("display", "none");
    $(".tab_box9").css("display", "none");
    $(".tab_box10").css("display", "none");
  } else if (num == "4") {
    $(".tab_box" + num).css("display", "block");

    $(".tab_box2").css("display", "none");
    $(".tab_box3").css("display", "none");
    $(".tab_box1").css("display", "none");
    $(".tab_box5").css("display", "none");
    $(".tab_box6").css("display", "none");
    $(".tab_box7").css("display", "none");
    $(".tab_box8").css("display", "none");
    $(".tab_box9").css("display", "none");
    $(".tab_box10").css("display", "none");
  } else if (num == "5") {
    $(".tab_box" + num).css("display", "block");

    $(".tab_box2").css("display", "none");
    $(".tab_box3").css("display", "none");
    $(".tab_box4").css("display", "none");
    $(".tab_box1").css("display", "none");
    $(".tab_box6").css("display", "none");
    $(".tab_box7").css("display", "none");
    $(".tab_box8").css("display", "none");
    $(".tab_box9").css("display", "none");
    $(".tab_box10").css("display", "none");
  } else if (num == "6") {
    $(".tab_box" + num).css("display", "block");

    $(".tab_box2").css("display", "none");
    $(".tab_box3").css("display", "none");
    $(".tab_box4").css("display", "none");
    $(".tab_box5").css("display", "none");
    $(".tab_box1").css("display", "none");
    $(".tab_box7").css("display", "none");
    $(".tab_box8").css("display", "none");
    $(".tab_box9").css("display", "none");
    $(".tab_box10").css("display", "none");
  } else if (num == "7") {
    $(".tab_box" + num).css("display", "block");

    $(".tab_box2").css("display", "none");
    $(".tab_box3").css("display", "none");
    $(".tab_box4").css("display", "none");
    $(".tab_box5").css("display", "none");
    $(".tab_box1").css("display", "none");
    $(".tab_box6").css("display", "none");
    $(".tab_box8").css("display", "none");
    $(".tab_box9").css("display", "none");
    $(".tab_box10").css("display", "none");
  } else if (num == "8") {
    $(".tab_box" + num).css("display", "block");

    $(".tab_box2").css("display", "none");
    $(".tab_box3").css("display", "none");
    $(".tab_box4").css("display", "none");
    $(".tab_box5").css("display", "none");
    $(".tab_box1").css("display", "none");
    $(".tab_box7").css("display", "none");
    $(".tab_box6").css("display", "none");
    $(".tab_box9").css("display", "none");
    $(".tab_box10").css("display", "none");
  } else if (num == "9") {
    $(".tab_box" + num).css("display", "block");

    $(".tab_box2").css("display", "none");
    $(".tab_box3").css("display", "none");
    $(".tab_box4").css("display", "none");
    $(".tab_box5").css("display", "none");
    $(".tab_box1").css("display", "none");
    $(".tab_box7").css("display", "none");
    $(".tab_box8").css("display", "none");
    $(".tab_box6").css("display", "none");
    $(".tab_box10").css("display", "none");
  } else if (num == "10") {
    $(".tab_box" + num).css("display", "block");

    $(".tab_box2").css("display", "none");
    $(".tab_box3").css("display", "none");
    $(".tab_box4").css("display", "none");
    $(".tab_box5").css("display", "none");
    $(".tab_box1").css("display", "none");
    $(".tab_box7").css("display", "none");
    $(".tab_box8").css("display", "none");
    $(".tab_box9").css("display", "none");
    $(".tab_box6").css("display", "none");
  }
}

function numChange(type) {
  // type , num은 변수임 암거나 해도 상관없음

  if (type == "1") {
    if (changeNum == 10) {
      // 최댓값 방지
      return;
    } else {
      num = changeNum + 1;
      tabChange(num);
      nextel;
    }
  } else {
    if (changeNum == 1) {
      // 0 방지
      return;
    }
    num = changeNum - 1;
    tabChange(num);
    nextel;
  }
}

// 스와이프
var swiper = new Swiper(".societyGroupTab .snbSwiper", {
  slidesPerView: "auto",
  preventClicks: true,
  preventClicksPropagation: false,
  observer: true,
  observeParents: true,
  nextButton: ".societyGroupTab__next",
  prevButton: ".societyGroupTab__prev",
  nextel: ".swiper-button-next",
  prevel: ".swiper-button-prev",
});

var $lankTitle = $(".societyGroupTab .swiper-slide a");

$lankTitle.click(function () {
  var target = $(this).parent();
  $lankTitle.parent().removeClass("on");
  target.addClass("on");
  muCenter(target);
});

// 클릭요소 중앙정렬
function muCenter(target) {
  var snbwrap = $(".societyGroupTab .swiper-wrapper");
  var targetPos = target.position();
  var boxWidth = $(".societyGroupTab").width();
  var wrapWidth = 0;
  snbwrap.find(".swiper-slide").each(function () {
    wrapWidth += $(this).outerWidth();
  });

  var selectTargetPos = targetPos.left + target.outerWidth() / 2;
  var pos;
  if (selectTargetPos <= boxWidth / 2) {
    pos = 0;
    $(".societyGroupTab__prev").addClass("swiper-button-disabled"); // 사이드 그라데이션
  } else if (wrapWidth - selectTargetPos <= boxWidth / 2) {
    pos = wrapWidth - boxWidth;
    $(".societyGroupTab__next").addClass("swiper-button-disabled"); // 사이드 그라데이션
  } else {
    pos = targetPos.left - boxWidth / 2 + target.outerWidth() / 2;
    $(".societyGroupTab__prev, .societyGroupTab__next").removeClass(
      "swiper-button-disabled"
    ); // 사이드 그라데이션
  }

  if (wrapWidth > boxWidth) {
    setTimeout(function () {
      snbwrap.css({
        transform: "translate3d(" + pos * -1 + "px, 0, 0)",
        "transition-duration": "500ms",
      });
    }, 200);
  }
}
