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
$('.navbar-toggler').click(function(){
    let result = $(".navbar-toggler").hasClass('collapsed');
    if (result) {
        $('.menu-icon').addClass('fa-bars').removeClass('fa-xmark')
    }else{
        $('.menu-icon').addClass('fa-xmark').removeClass('fa-bars')

    }
})

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

/* home section img */
let homeImg = document.querySelector(".home-img");
let layer = document.querySelectorAll(".layer");
homeImg.onmousemove = function(e){
    let x = e.pageX;
    let y = e.pageY;
    layer[0].style.transform = 'translate('+x/100*-7+'px,'+y/100*-7+'px)';
    layer[1].style.transform = 'translate('+x/100*-6+'px,'+y/100*-6+'px)';
    layer[2].style.transform = 'translate('+x/100*-3+'px,'+y/100*-3+'px)';
    layer[3].style.transform = 'translate('+x/100*-1+'px,'+y/100*-1+'px)';
    layer[4].style.transform = 'translate('+x/100*4+'px,'+y/100*4+'px)';
    layer[5].style.transform = 'translate('+x/100*7+'px,'+y/100*7+'px)';
    layer[6].style.transform = 'translate('+x/100*11+'px,'+y/100*11+'px)';
}


/* svg tag cloud */
var entries = [ 
   
    { image: 'img/logos/bootstrap.png',url: '#projects',  width: '50', height: '50', target: '_top', tooltip: 'Bootstrap' },
    { image: 'img/logos/css-3.png',url: '#projects',  width: '50', height: '50', target: '_top', tooltip: 'CSS' },
    { image: 'img/logos/html-5.png',url: '#projects',  width: '50', height: '50', target: '_top', tooltip: 'HTML' },
    { image: 'img/logos/illustrator.png',url: '#projects',  width: '50', height: '50', target: '_top', tooltip: 'Illustrator' },
    { image: 'img/logos/jquery.png',url: '#projects',  width: '50', height: '50', target: '_top', tooltip: 'jQuery' },
    { image: 'img/logos/js.png',url: '#projects',  width: '50', height: '50', target: '_top', tooltip: 'javascript' },
    { image: 'img/logos/sass.png',url: '#projects',  width: '50', height: '50', target: '_top', tooltip: 'SASS' },
    { image: 'img/logos/vue.png',url: '#projects',  width: '50', height: '50', target: '_top', tooltip: 'Vue' },
    { image: 'img/logos/xd.png',url: '#projects',  width: '50', height: '50', target: '_top', tooltip: 'XD' },
]

var settings = {
    entries: entries,
    width: 350,
    height: 350,
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

/* hover img in project section */
const{ gsap } = window;
        gsap
        .timeline()
        .set(".menu",{ autoAlpha: 1})
        .from(".menu__item-innertext",{
            delay: 1,
            duration: 0.85,
            xPercent: 25,
            yPercent: 125,
            stagger: 0.095,
            skewY: gsap.utils.wrap([-8,8]),
            ease: "expo.out"
        })
        .set(".menu",{
            pointerEvent:"all"
        });
        gsap.defaults({
            duration : 0.55,
            ease: "expo.out",
        });
        const menuItems = document.querySelectorAll(".menu__item");
        menuItems.forEach((item)=>{
            const imgWrapper = item.querySelector(".menu__item-img_wrapper");
            let itemBounds = item.getBoundingClientRect();
            const onMouseEnter = () =>{
                gsap.set(imgWrapper, {
                    scale: 0.8,
                    xPercent: 25,
                    yPercent: 50,
                    rotation: -15,
                })
                gsap.to(imgWrapper, {opacity:1,scale:1,yPercent: 0,rotation: 0})
            };
            const onMouseLeave = ()=>{
                gsap.to(imgWrapper,{
                    opacity: 0,
                    scale: 0.8,
                    xPercent: 25,
                    yPercent: -50,
                    rotation: -15,
                })
            };
            item.addEventListener("mouseenter",onMouseEnter);
            item.addEventListener("mouseleave",onMouseLeave);
            window.addEventListener("resize",()=>{
                itemBounds = item.getBoundingClientRect();
            })
        });

