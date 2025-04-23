function setup() {  //設定函數，設定初始值的地方
    // 建立依照視窗的高與寬當作畫布的寬高
   createCanvas(windowWidth, windowHeight);
    // 設定背景顏色為edafb8 
    background(237, 218, 184);
  }
  
  function draw() {
    background(237, 218, 184);
    //在視窗的中間畫一個圓，圓的寬高為200，圓的顏色為d8e2dc
   // ellipse(windowWidth/2, windowHeight/2, 200, 200);
    //fill(216, 226, 220);
    //依照上面的圓顏色與框線的顏色畫圓，從視窗最左，產生連續的圓，到視窗的最右邊
    for(let i = 0; i < windowWidth; i+=200){
      ellipse(i, windowHeight/2, 200, 200);
      fill(216, 226, 220);
    }
  
  }
  