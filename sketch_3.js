function setup() {  //設定函數，設定初始值的地方
    // 建立依照視窗的高與寬當作畫布的寬高
    createCanvas(windowWidth, windowHeight);
    // 設定顏色模式為HSB
    colorMode(HSB);
    // 設定背景顏色為HSB格式
    background(30, 30, 93);
  }
  
  function draw() {
    // 設定背景顏色為HSB格式
    background(30, 30, 93);
    
    // 計算方形和圓形的大小，根據滑鼠的 X 軸位置
    let size = map(mouseX, 0, windowWidth, 100, 500);
    
    // 設定每個形狀之間的間距
    let spacing = size + 20;
    
    // 使用雙重迴圈產生填滿畫面的方形和圓形
    for (let x = spacing / 2; x < windowWidth; x += spacing) {
      for (let y = spacing / 2; y < windowHeight; y += spacing) {
        // 畫方形
        rectMode(CENTER);
        fill(200, 100, 94); // 使用HSB格式設定顏色
        rect(x, y, size, size);
        
        // 畫圓形
        fill(150, 30, 87); // 使用HSB格式設定顏色
        ellipse(x, y, size, size);
      }
    }
  }
  
  