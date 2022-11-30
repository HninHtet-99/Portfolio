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