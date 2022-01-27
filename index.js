//navbar background color change section starts here
$(window).scroll(function(){
    $(".navbar").toggleClass('scrolled',$(this).scrollTop()>80);
});
//navbar background color change section ends here 

//text effect starts here
var typed = new Typed('.title',{
    strings: ["learn with Mostafa","web developer","software Engineering"],
    typeSpeed:100,
    loop:true
});
//text effect starts here

//todo app starts here
$(".btn").click(function(){
    var input = $(".input").val();
    var NewText = $("#ul").append('<p>'+input+'<i class="fas fa-trash-alt"></i>'+'</p>')
});
$("#ul").on('click','.fas',function(){
    $(this).parent().hide();
});
//todo app ends here

//chart section starts here
window.onload = function(){
    var option = {
        title:{
            text:"bar chart last 10 years"
        },
        axisY:{
            title:"Yearly value parseint %"
        },
        axisX:{
            title:"Year with month"
        },
        data:[
            {
                type:"column",
                dataPoints:[
                    {label:"january 2010",y:60},
                    {label:"january 2011",y:90},
                    {label:"january 2012",y:80},
                    {label:"january 2013",y:85},
                    {label:"january 2014",y:93},
                    {label:"january 2015",y:82},
                    {label:"january 2016",y:70},
                    {label:"january 2017",y:40},
                    {label:"january 2018",y:65},
                    {label:"january 2019",y:85},
                    {label:"january 2020",y:95},
                    {label:"january 2021",y:90},
                ]
            }
        ]
    }
    $("#barchartContainer").CanvasJSChart(option);
}

//chart section ends here

//counter js starts here
    $(".count").counterUp({
        time:2000,
        delay:10
    })
//counter js ends here 

//carousel starts here
 
 $(".owl-carousel").owlCarousel({

     loop:true,
     autoplayTimeout:1000,
     autoplay:true,
     padding:10,
     margin:10,
     autoplayHoverPause:true,
     animateOut:'slideOutUp',
     animateIn:'slideInUp',
     nav:true,

     responsive :{
         0:{
             items:1
         },
         600:{
             items:3
         },
         1000:{
             items:4
         }
     }
 });
//carousel ends here

//animation section starts here
$(".part1").waypoint(function(){
    $(".part1").addClass('animated fadeInLeft')
},{
    offset:'50%'
});

$(".part2").waypoint(function(){
    $(".part2").addClass('animated fadeInRight')
},{
    offset:'50%'
});

$(".part3").waypoint(function(){
    $(".part3").addClass('animated bounceInDown')
},{
    offset:'50%'
});


//animation section ends here