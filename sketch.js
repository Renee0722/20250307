function setup() {  //設定函數，設定初始值的地方
  // 建立依照視窗的高與寬當作畫布的寬高
  createCanvas(windowWidth, windowHeight);
  // 設定顏色模式為HSB
  colorMode(HSB);
  // 設定不清除背景
  noFill();
}

function draw() {
  // 計算顏色，根據滑鼠的 X 軸位置
  let hue = map(mouseX, 0, windowWidth, 0, 360);
  
  // 設定填充顏色為HSB格式
  fill(hue, 100, 100, 0.5); // 設定透明度以保留軌跡
  
  // 畫圓，圓心隨滑鼠移動，寬高為200px
  ellipse(mouseX, mouseY, 200, 200);
}

