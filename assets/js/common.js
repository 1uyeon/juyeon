
document.addEventListener('DOMContentLoaded', () => { 
    // 로딩 화면
    setTimeout(function () {
        $("html").css("overflow",'auto'); 
        $(".loading").addClass("disable")
     }, 1300);

    // px -> rem 변환
    const fontResponsive = () => {
        let bodyFontSize = 16;
        let maxWidth = 1920;
        let calc = 0;
        let currentWidth = window.innerWidth;
        let rootHtml = document.querySelector('html');

        if (currentWidth > maxWidth) { 
            rootHtml.style.fontSize = bodyFontSize + 'px';
        } else {
            calc = (currentWidth / maxWidth) * 16; 
            rootHtml.style.fontSize = calc + 'px';
        } 
    };
    fontResponsive(); 
    window.addEventListener('resize', fontResponsive);

    // 🍅 움직이기
    const draggable = ($target) => {
        let isPress = false,
            prevPosX = 0,
            prevPosY = 0;
        
        // 마우스 눌림 시작
        window.onmousedown = start;
        // 마우스 버튼을 떼면 드래그 종료
        window.onmouseup = end;
        // 마우스 이동 중
        window.onmousemove = move;
          
       
        function start(e) {
          prevPosX = e.clientX;
          prevPosY = e.clientY;
      
          isPress = true;
        }
      
        function move(e) {
          if (!isPress) return;
      
          const posX = prevPosX - e.clientX; 
          const posY = prevPosY - e.clientY; 
          
          prevPosX = e.clientX; 
          prevPosY = e.clientY;
          
          $target.style.left = ($target.offsetLeft - posX) + "px";
          $target.style.top = ($target.offsetTop - posY) + "px";
        }
      
        function end() {
          isPress = false;
        }
      }
      
      window.onload = () => {
        const $target = document.querySelector(".tomato");
        
        draggable($target);
      }
});