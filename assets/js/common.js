
document.addEventListener('DOMContentLoaded', () => { 
  AOS.init();

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
});