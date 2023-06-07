const card_check_1 = document.getElementById("card-check-1");
const card_check_2 = document.getElementById("card-check-2");
const card_check_3 = document.getElementById("card-check-3");
const card_check_4 = document.getElementById("card-check-4");

const card_points_1 = document.getElementById("card-points-1");
const card_points_2 = document.getElementById("card-points-2");
const card_points_3 = document.getElementById("card-points-3");
const card_points_4 = document.getElementById("card-points-4");

var flag1 = true;
var flag2 = true;
var flag3 = true;
var flag4 = true;

card_check_1.addEventListener(
  "change",
  (rotatePoints = () => {
    if (flag1) {
      card_points_1.style.transform = "rotate(90deg)";
      card_points_1.style.transition = "all 500ms";
      flag1 = !flag1;
    } else {
      card_points_1.style.transform = "rotate(0deg)";
      card_points_1.style.transition = "all 500ms";
      flag1 = !flag1;
    }
  })
);

card_check_2.addEventListener(
  "change",
  (rotatePoints = () => {
    if (flag2) {
      card_points_2.style.transform = "rotate(90deg)";
      card_points_2.style.transition = "all 500ms";
      flag2 = !flag2;
    } else {
      card_points_2.style.transform = "rotate(0deg)";
      card_points_2.style.transition = "all 500ms";
      flag2 = !flag2;
    }
  })
);

card_check_3.addEventListener(
  "change",
  (rotatePoints = () => {
    if (flag3) {
      card_points_3.style.transform = "rotate(90deg)";
      card_points_3.style.transition = "all 500ms";
      flag3 = !flag3;
    } else {
      card_points_3.style.transform = "rotate(0deg)";
      card_points_3.style.transition = "all 500ms";
      flag3 = !flag3;
    }
  })
);

card_check_4.addEventListener(
  "change",
  (rotatePoints = () => {
    if (flag4) {
      card_points_4.style.transform = "rotate(90deg)";
      card_points_4.style.transition = "all 500ms";
      flag4 = !flag4;
    } else {
      card_points_4.style.transform = "rotate(0deg)";
      card_points_4.style.transition = "all 500ms";
      flag4 = !flag4;
    }
  })
);
