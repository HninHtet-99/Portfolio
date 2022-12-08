/* navbar fixed */
let screenHeight = $(window).height();
$(window).scroll(function(){
    let currentPosition = $(this).scrollTop();
    if (currentPosition >= screenHeight-100) {
        $('.top-nav').addClass('top-nav-scroll');
    }else{
        $('.top-nav').removeClass('top-nav-scroll');
        setActive("home")
    }
})
/* chg icon in nav */
// $('.navbar-toggler').click(function(){
//     let result = $(".navbar-collapse").hasClass('show');
//     console.log(result);
//     if (result) {
//         $('.menu-icon').addClass('fa-bars').removeClass('fa-xmark')
//     }else{
//         $('.menu-icon').addClass('fa-xmark').removeClass('fa-bars')

//     }
// })

/* set avtive */
function setActive(current) {
    $('.nav-link').removeClass('current-page');
    $(`.nav-link[href="#${current}"]`).addClass("current-page");
    
}
function navScroll() {
    let currentSection = $('section[id]');
    currentSection.waypoint(function(direction){
        if (direction == "down") {
            let currentId = $(this.element).attr('id');
            setActive(currentId);
            
        }
        
    },{
        offset:100
    });
    currentSection.waypoint(function(direction){
        if (direction == "up") {
            let currentId = $(this.element).attr('id');
            setActive(currentId);
            
        }
    },{
        offset:-150
    })
}
navScroll();
/* draw svg */
let $doc = $(document),
        $win = $(window),
        $svg = $('#drawSvg').drawsvg({
            duration: 2000,
        }),
        max= $doc.height() - $win.height();
        $win.on('scroll',function(){
            var p = $win.scrollTop() / max;
            $svg.drawsvg('progress',p);
        })

/* wow */
wow = new WOW(
    {
    boxClass:     'wow',     
    animateClass: 'animate__animated',
    offset:       0,         
    mobile:       true,      
    live:         true       
  }
  )
  wow.init();

/* rotate intro text */
$('.intro-txt').on('mousemove',function(e){
    centerX = $(this).width()/2;
    let moveX = centerX - e.offsetX;
    $(this).css({
        'transform': "perspective(500px) rotateY("+moveX/30+"deg)"
    })
    
})
/* svg tag cloud */
var entries = [ 
   
    { image: 'img/logos/bootstrap.png',url: '#projects',  width: '50', height: '50', target: '_top', tooltip: 'Bootstrap' },
    { image: 'img/logos/css-3.png',url: '#projects',  width: '50', height: '50', target: '_top', tooltip: 'CSS' },
    { image: 'img/logos/html-5.png',url: '#projects',  width: '50', height: '50', target: '_top', tooltip: 'HTML' },
    { image: 'img/logos/illustrator.png',url: '#projects',  width: '50', height: '50', target: '_top', tooltip: 'Illustrator' },
    { image: 'img/logos/jquery.png',url: '#projects',  width: '50', height: '50', target: '_top', tooltip: 'jQuery' },
    { image: 'img/logos/js.png',url: '#projects',  width: '50', height: '50', target: '_top', tooltip: 'javascript' },
    { image: 'img/logos/mysql.png',url: '#projects',  width: '50', height: '50', target: '_top', tooltip: 'MySQL' },
    { image: 'img/logos/php.png',url: '#projects',  width: '50', height: '50', target: '_top', tooltip: 'php' },
    { image: 'img/logos/sass.png',url: '#projects',  width: '50', height: '50', target: '_top', tooltip: 'SASS' },
    { image: 'img/logos/vue.png',url: '#projects',  width: '50', height: '50', target: '_top', tooltip: 'Vue' },
    { image: 'img/logos/xd.png',url: '#projects',  width: '50', height: '50', target: '_top', tooltip: 'XD' },
    { image: 'img/logos/laravel.svg',url: '#projects',  width: '50', height: '50', target: '_top', tooltip: 'Laravel' }
]

var settings = {
    entries: entries,
    width: 400,
    height: 400,
    radius: '80%',
    radiusMin: 60,
    bgDraw: true,
    opacityOver: 1.00,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 1,
    tooltipFontFamily: 'Oswald, Arial, sans-serif',
    tooltipFontSize: '11',
    tooltipFontColor: '#fff',
    tooltipFontWeight: 'normal',
    tooltipFontStyle: 'normal',
    tooltipFontStretch: 'ultra-condensed',
    tooltipFontToUpperCase: false,
    tooltipTextAnchor: 'left',
    tooltipDiffX: 0,
    tooltipDiffY: 10,
    animatingSpeed: 0.01,
    animatingRadiusLimit: 1.3

};
$( '#skills' ).svg3DTagCloud( settings );

/* flying text */
LettersRandomPlaces({
    element: ".about-text",
    start_delay_time: 80,	
    delay_type: "sequential",	
    animation_duration: 1000,	
    force: 100,	
    direction: ['x', 'y'],	
    random_scale: true,	
    rotate: -1
})

/* parallel */
document.addEventListener('mousemove',parallax);
function parallax(e){
    document.querySelectorAll(".object").forEach(function(move){
        let moving_value = move.getAttribute("data-value");
        let x = (e.clientX * moving_value)/250;
        let y = (e.clientY * moving_value/250);
        move.style.transform = "translateX("+ x + "px) translateY(" + y + "px)";
    })
}