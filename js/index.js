// $(window).load(function(){
//   $(".loader").fadeOut("slow");
// })

 $('.textwrapper').addClass('animated fadeInUp');
 $('.deck').addClass('animated fadeIn');
 $('.deskicon').addClass('animated fadeIn');

	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});

var img2 = $('.img2');
var img1 = $('.img1');
var img3 = $('.img3');
var overlay = $('.overlay');
                

overlay.mousemove(function(e){
  var amountMovedX = (e.pageX * -1 / 5);
  var amountMovedY = (e.pageY * -1 / 5);
img2.css({
  '-webkit-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  '-moz-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  '-ms-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  '-o-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
});
  
});

overlay.mousemove(function(e){
  var amountMovedX = (e.pageX * -1 / 10);
  var amountMovedY = (e.pageY * -1 / 10);
img1.css({
  '-webkit-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  '-moz-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  '-ms-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  '-o-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
});
  
});

overlay.mousemove(function(e){
  var amountMovedX = (e.pageX * -1 / 18);
  var amountMovedY = (e.pageY * -1 / 18);
img3.css({
  '-webkit-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  '-moz-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  '-ms-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  '-o-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
});
  
});


var monthName = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'September', 'Oct', 'Nov', 'Dec');
var hourap = new Array(12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
function showTime(){
    var dateObj = new Date();
    var day = dateObj.getDate(), month = dateObj.getMonth(), year = dateObj.getFullYear(), hour = dateObj.getHours(), minutes = (dateObj.getMinutes()<=9?'0'+dateObj.getMinutes():dateObj.getMinutes());
    var string  = monthName[month]+
    ' '+day+
    '/'+year+
    '  '+hourap[hour]+
    ':'+minutes+
    ' '+(hour<=11?'AM':'PM');
    var timeDiv = document.getElementById('time');
    if(timeDiv !== null) {
        timeDiv.innerHTML = string;
        timeDiv.setAttribute('datetime',year+'-'+(month+1<=9?'0'+(month+1):month+1)+day+' '+hour+':'+minutes);

    };
};
setInterval(showTime,1000);
 
$( function() {
    $( ".deskicon1, .deskicon2" ).draggable({
      containment: ".back", scroll: false
    });
  } );


$( function() {
    $( "#resizableframe, #resizableframe1, #resizableframe2, #resizableframe3, #resizableframe5, #resizableframe6, #resizableframe7, #resizableframe8, #resizableframe9, #resizableframe_1, #resizableframe_2, #resumepopup, #resizableframe1_1, #resizableframe1_2, #resizableframe1_3, #resizableframe1_4, #resizableframe3_1, #resizableframe3_2,  #resizableframe3_3, #resizableframe5_1, #resizableframe5_2, #resizableframe5_3, #resizableframe5_4, #resizableframe7_1, #resizableframe7_2, #resizableframe6_1, #resizableframe6_2" ).resizable({
      containment: ".back"
    });
  } );
$( function() {
    $( "#resizableframe, #resizableframe1, #resizableframe2, #resizableframe3, #resizableframe5, #resizableframe6, #resizableframe7, #resizableframe8, #resizableframe9, #resizableframe_1, #resizableframe_2, #resizableframe_1_1, #resizableframe_2_1, #mark, #windmill, #resumepopup, #resizableframe1_1, #resizableframe1_2, #resizableframe1_3, #resizableframe1_4, #dreamer, #dependent, #geek, #portfolio, #resizableframe3_1_1, #resizableframe3_1, #resizableframe3_1, #resizableframe3_1_1, #resizableframe3_2, #resizableframe3_2_1, #resizableframe3_3, #resizableframe3_3_1, #resizableframe5_1, #resizableframe5_2, #resizableframe5_3, #resizableframe5_4, #resizableframe7_1, #resizableframe7_2, #resizableframe6_1, #resizableframe6_2, #resizableframe6_1_1" ).draggable({
      containment: ".back", scroll: false
    });
    $( "#resizableframe" ).draggable({ handle: ".top" });
  } );

// deck_hover

$(".icon4").mouseenter(
  function(){
    $(".box4").css("opacity","1");
    $(".box4").css("transition-duration","0s");
  }
)

$(".icon4").mouseleave(
  function(){
    $(".box4").css("opacity","0");
    $(".box4").css("transition-duration","0.5s");
  }
)

$(".icon1").mouseenter(
  function(){
    $(".box1").css("opacity","1");
    $(".box1").css("transition-duration","0s");
  }
)

$(".icon1").mouseleave(
  function(){
    $(".box1").css("opacity","0");
    $(".box1").css("transition-duration","0.5s");
  }
)

$(".icon2").mouseenter(
  function(){
    $(".box2").css("opacity","1");
    $(".box2").css("transition-duration","0s");
  }
)

$(".icon2").mouseleave(
  function(){
    $(".box2").css("opacity","0");
    $(".box2").css("transition-duration","0.5s");
  }
)

$(".icon3").mouseenter(
  function(){
    $(".box3").css("opacity","1");
    $(".box3").css("transition-duration","0s");
  }
)

$(".icon3").mouseleave(
  function(){
    $(".box3").css("opacity","0");
    $(".box3").css("transition-duration","0.5s");
  }
)

$(".icon5").mouseenter(
  function(){
    $(".box5").css("opacity","1");
    $(".box5").css("transition-duration","0s");
  }
)

$(".icon5").mouseleave(
  function(){
    $(".box5").css("opacity","0");
    $(".box5").css("transition-duration","0.5s");
  }
)

$(".icon6").mouseenter(
  function(){
    $(".box6").css("opacity","1");
    $(".box6").css("transition-duration","0s");
  }
)

$(".icon6").mouseleave(
  function(){
    $(".box6").css("opacity","0");
    $(".box6").css("transition-duration","0.5s");
  }
)

$(".icon7").mouseenter(
  function(){
    $(".box7").css("opacity","1");
    $(".box7").css("transition-duration","0s");
  }
)

$(".icon7").mouseleave(
  function(){
    $(".box7").css("opacity","0");
    $(".box7").css("transition-duration","0.5s");
  }
)

$(".icon8").mouseenter(
  function(){
    $(".box8").css("opacity","1");
    $(".box8").css("transition-duration","0s");
  }
)

$(".icon8").mouseleave(
  function(){
    $(".box8").css("opacity","0");
    $(".box8").css("transition-duration","0.5s");
  }
)

$(".icon9").mouseenter(
  function(){
    $(".box9").css("opacity","1");
    $(".box9").css("transition-duration","0s");
  }
)

$(".icon9").mouseleave(
  function(){
    $(".box9").css("opacity","0");
    $(".box9").css("transition-duration","0.5s");
  }
)
// deck icons_click
$(".icon1").click(
  function(){
    $(".img11,.box1").animate({bottom: '20px'},"slow");
	$("#resizableframe1").css("opacity", "1");
    $(".img11,.box1").animate({bottom: '0px'},"slow");
    $(".main1").css("visibility","visible");
    $(".dot1").css("opacity","1");          $("#resizableframe1").css("visibility","visible");
    num = num + 1;
     $("#resizableframe1").css("z-index", num);
  $(".btn1_enlarge").css("visibility","visible"); 
  $(".btn1_enlarge").css("transition-delay","0s"); 
    $(".bottom_fixed").css("overflow-y","hidden"); 
    $(".main1, #resizableframe1").addClass("transition-delay");
    
     $("div#resizableframe1 .lazy").each(function(){
        $(this).attr("src",$(this).attr("data-original"));
    });
  }
)

$(".icon2").click(
  function(){
    $(".img22,.box2").animate({bottom: '20px'},"slow")
	$("#resizableframe2").css("opacity", "1");
    $(".img22,.box2").animate({bottom: '0px'},"slow")
    $(".main2").css("visibility","visible");
    $(".dot2").css("opacity","1");
    num = num + 1;
     $("#resizableframe2").css("z-index", num);
    $("#resizableframe2").css("visibility","visible");
    $(".bottom_fixed").css("overflow-y","hidden"); 
    $(".main2, #resizableframe2").addClass("transition-delay"); 

    $("div#resizableframe2 .lazy").each(function(){
        $(this).attr("src",$(this).attr("data-original"));
    });
  }
)

$(".icon3").click(
  function(){
    $(".img33,.box3").animate({bottom: '20px'},"slow")
	$("#resizableframe3").css("opacity", "1");
    $(".img33,.box3").animate({bottom: '0px'},"slow")
    $(".main3").css("visibility","visible");
    $(".dot3").css("opacity","1");   
    num = num + 1;
     $("#resizableframe3").css("z-index", num);
    $("#resizableframe3").css("visibility","visible");
    $(".bottom_fixed").css("overflow-y","hidden"); 
    $(".main3, #resizableframe3").addClass("transition-delay"); 

    $("div#resizableframe3 .lazy").each(function(){
        $(this).attr("src",$(this).attr("data-original"));
    });
  }
)
$(".icon4").click(
  function(){
    $(".img4,.box4").animate({bottom: '20px'},"slow")
    $(".img4,.box4").animate({bottom: '0px'},"slow")
    $(".main4").css("visibility","visible");
    $(".dot4").css("opacity","1");  
    num = num + 1;
     $("#resizableframe").css("z-index", num);
	  $("#resizableframe").css("opacity", "1");
    $("#resizableframe").css("visibility","visible");
  $(".btn4_enlarge").css("visibility","visible"); 
  $(".btn4_enlarge").css("transition-delay","1.5s"); 
    $(".bottom_fixed").css("overflow-y","hidden"); 
    $(".story, #resizableframe").addClass("transition-delay");
    
     $("div#resizableframe .lazy").each(function(){
        $(this).attr("src",$(this).attr("data-original"));
    }); 
  }
)

$(".icon5").click(
  function(){
    $(".img55,.box5").animate({bottom: '20px'},"slow")
    $(".img55,.box5").animate({bottom: '0px'},"slow")
	$("#resizableframe5").css("opacity", "1");
    $(".main5").css("visibility","visible");
    $(".dot5").css("opacity","1");          $("#resizableframe5").css("visibility","visible");
    num = num + 1;
     $("#resizableframe5").css("z-index", num);
    $(".bottom_fixed").css("overflow-y","hidden"); 
    $(".main5, #resizableframe5").addClass("transition-delay"); 

     $("div#resizableframe5 .lazy").each(function(){
        $(this).attr("src",$(this).attr("data-original"));
    });
  }
)

$(".icon6").click(
  function(){
    $(".img66,.box6").animate({bottom: '20px'},"slow")
    $(".img66,.box6").animate({bottom: '0px'},"slow")
	$("#resizableframe6").css("opacity", "1");
    $(".main6").css("visibility","visible");
    $(".dot6").css("opacity","1");          $("#resizableframe6").css("visibility","visible");
    num = num + 1;
     $("#resizableframe6").css("z-index", num);
    $(".bottom_fixed").css("overflow-y","hidden"); 
    $(".main6, #resizableframe6").addClass("transition-delay"); 

    $("div#resizableframe6 .lazy").each(function(){
        $(this).attr("src",$(this).attr("data-original"));
    });
  }
)

$(".icon7").click(
  function(){
    $(".img7,.box7").animate({bottom: '20px'},"slow")
	$("#resizableframe7").css("opacity", "1");
    $(".img7,.box7").animate({bottom: '0px'},"slow")
    $(".main7").css("visibility","visible");
    $(".dot7").css("opacity","1");          $("#resizableframe7").css("visibility","visible");
    num = num + 1;
     $("#resizableframe7").css("z-index", num);
    $(".bottom_fixed").css("overflow-y","hidden"); 
    $(".main7, #resizableframe7").addClass("transition-delay"); 

    $("div#resizableframe7 .lazy").each(function(){
        $(this).attr("src",$(this).attr("data-original"));
    });
  }
)

$(".icon8").click(
  function(){
    $(".img8,.box8").animate({bottom: '20px'},"slow")
    $(".img8,.box8").animate({bottom: '0px'},"slow")
	$("#resizableframe8").css("opacity", "1");
    $(".main8").css("visibility","visible");
    $(".dot8").css("opacity","1");          $("#resizableframe8").css("visibility","visible");
	      num = num + 1;
     $("#resizableframe8").css("z-index", num);
    $(".bottom_fixed").css("overflow-y","hidden"); 
    $(".main8, #resizableframe8").addClass("transition-delay"); 

    $("div#resizableframe8 .lazy").each(function(){
        $(this).attr("src",$(this).attr("data-original"));
        $(this).removeAttr("class");
    });
  }
)

$(".icon9").click(
  function(){
    $(".img9,.box9").animate({bottom: '20px'},"slow")
    $(".img9,.box9").animate({bottom: '0px'},"slow")
	$("#resumepopup").css("opacity", "1");
    $(".dot9").css("opacity","1");           
    $("#resumepopup").css("visibility","visible");
    $(".resumepopup").css("visibility","visible");       
    $(".bottom_fixed").css("overflow-y","hidden"); 
    num = num + 1;
     $("#resumepopup").css("z-index", num);
    $(".resumepopup, #resumepopup").addClass("transition-delay"); 
     $(".btnr_enlarge").css("visibility","visible"); 
    $(".show_info").text("Resume");

    $("div#resumepopup .lazy").each(function(){
        $(this).attr("src",$(this).attr("data-original"));
        $(this).removeAttr("class");
    });
  }
)


// transition-delay cancel

$(".main4").click(
  function(){
    $(".main4").css("transition-delay","0s");
    $("#resizableframe").css("transition-delay","0s");
    $(".btn4_enlarge").css("transition-delay","0s");
    // $("#resizableframe").css("transition-duration","0s");
  }
)

// window1_close

$(".btn4_close").click(
  function(){
    $("#resizableframe").css("visibility","hidden");
  $(".main4").css("visibility","hidden");
   $(".btn4_enlarge").css("visibility","hidden");  
    $(".dot4").css("opacity","0");
    $("#resizableframe").css("top","10%");
    $("#resizableframe").css("left","10%");
    $("#resizableframe").css("height","56%");
    $("#resizableframe").css("width","55%");
    $("#resizableframe").css("transition-duration","0s");
  
  $(".btn4_minimize").css("visibility","hidden"); 
  $(".content").css("transition-delay","0s");
  $(".content").css("transition-duration","0s");
  $(".workwrapper").css("transition-duration","0s");
  $(".workwrapper").css("transition-delay","0s");
    $(".show_info").text(" ");
  }
)

$(".btn8_close").click(
  function(){
    $("#resizableframe8").css("visibility","hidden");
  $(".main8").css("visibility","hidden");
   $(".btn8_enlarge").css("visibility","hidden");  
    $(".dot8").css("opacity","0");
    $("#resizableframe8").css("top","7%");
    $("#resizableframe8").css("left","12%");
    $("#resizableframe8").css("height","60%");
    $("#resizableframe8").css("width","65%");
    $("#resizableframe8").css("transition-duration","0s");
  
  $(".btn8_minimize").css("visibility","hidden"); 
    $(".show_info").text(" ");
  }
)

$(".btn1_close").click(
  function(){
    $("#resizableframe1").css("visibility","hidden");
  $(".main1").css("visibility","hidden");
   $(".btn1_enlarge").css("visibility","hidden");  
    $(".dot1").css("opacity","0");
    $("#resizableframe1").css("top","10%");
    $("#resizableframe1").css("left","10%");
    $("#resizableframe1").css("height","75%");
    $("#resizableframe1").css("width","55%");
    $("#resizableframe1").css("transition-duration","0s");
  
  $(".btn1_minimize").css("visibility","hidden"); 
    $(".main1").css("transition-delay","0s"); 
    $(".btn1_enlarge").css("transition-delay","0s"); 
    $(".deck").css("bottom","0px");
      $(".show_info").text(" ");
  }
)

$(".btn2_close").click(
  function(){
    $("#resizableframe2").css("visibility","hidden");
  $(".main2").css("visibility","hidden");
   $(".btn2_enlarge").css("visibility","hidden");  
    $(".dot2").css("opacity","0");
    $("#resizableframe2").css("top","9%");
    $("#resizableframe2").css("left","12%");
    $("#resizableframe2").css("height","70%");
    $("#resizableframe2").css("width","55%");
    $("#resizableframe2").css("transition-duration","0s");
      $(".show_info").text(" ");  
  $(".btn2_minimize").css("visibility","hidden"); 
  $(".workwrapper").css("transition-duration","0s");
  $(".workwrapper").css("transition-delay","0s");

  }
)

$(".btn3_close").click(
  function(){
    $("#resizableframe3").css("visibility","hidden");
  $(".main3").css("visibility","hidden");
   $(".btn3_enlarge").css("visibility","hidden");  
    $(".dot3").css("opacity","0");
    $("#resizableframe3").css("top","11%");
    $("#resizableframe3").css("left","14%");
    $("#resizableframe3").css("height","70%");
    $("#resizableframe3").css("width","55%");
    $("#resizableframe3").css("transition-duration","0s");
      $(".show_info").text(" ");  
  $(".btn3_minimize").css("visibility","hidden"); 
  $(".workwrapper").css("transition-duration","0s");
  $(".workwrapper").css("transition-delay","0s");

  }
)

$(".btn5_close").click(
  function(){
    $("#resizableframe5").css("visibility","hidden");
  $(".main5").css("visibility","hidden");
   $(".btn5_enlarge").css("visibility","hidden");  
    $(".dot5").css("opacity","0");
    $("#resizableframe5").css("top","13%");
    $("#resizableframe5").css("left","16%");
    $("#resizableframe5").css("height","70%");
    $("#resizableframe5").css("width","55%");
    $("#resizableframe5").css("transition-duration","0s");
       $(".show_info").text(" "); 
  // $(".btn5_minimize").css("visibility","hidden"); 
  $(".workwrapper").css("transition-duration","0s");
  $(".workwrapper").css("transition-delay","0s");

  }
)

$(".btn6_close").click(
  function(){
    $("#resizableframe6").css("visibility","hidden");
  $(".main6").css("visibility","hidden");
   $(".btn6_enlarge").css("visibility","hidden");  
    $(".dot6").css("opacity","0");
    $("#resizableframe6").css("top","15%");
    $("#resizableframe6").css("left","18%");
    $("#resizableframe6").css("height","56%");
    $("#resizableframe6").css("width","55%");
    $("#resizableframe6").css("transition-duration","0s");
       $(".show_info").text(""); 
  // $(".btn5_minimize").css("visibility","hidden"); 
  $(".workwrapper").css("transition-duration","0s");
  $(".workwrapper").css("transition-delay","0s");

  }
)

$(".btn7_close").click(
  function(){
    $("#resizableframe7").css("visibility","hidden");
  $(".main7").css("visibility","hidden");
   $(".btn7_enlarge").css("visibility","hidden");  
    $(".dot7").css("opacity","0");
    $("#resizableframe7").css("top","17%");
    $("#resizableframe7").css("left","20%");
    $("#resizableframe7").css("height","56%");
    $("#resizableframe7").css("width","55%");
    $("#resizableframe7").css("transition-duration","0s");
       $(".show_info").text(" "); 
  // $(".btn5_minimize").css("visibility","hidden"); 
  $(".workwrapper").css("transition-duration","0s");
  $(".workwrapper").css("transition-delay","0s");

  }
)

$(".btnr_close").click(
  function(){
    $("#resumepopup").css("visibility","hidden");
  $(".resumepopup").css("visibility","hidden");
   $(".btnr_enlarge").css("visibility","hidden");  
   $(".btnr_minimize").css("visibility","hidden");  
    $(".dot9").css("opacity","0")
    $("#resumepopup").css("top","37px");
    $("#resumepopup").css("left","20%");
    $("#resumepopup").css("height","85%");
    $("#resumepopup").css("width","55%");
    $("#resumepopup").css("transition-duration","0s");
       $(".show_info").text(" "); 
  // $(".btn5_minimize").css("visibility","hidden"); 
  $(".workwrapper").css("transition-duration","0s");
  $(".workwrapper").css("transition-delay","0s");
    $(".deck").css("bottom","0px")
  }
)



// window1_enlarge

$(".btnr_enlarge").click(
  function(){
  $("#resumepopup").css("width","100%");
    $("#resumepopup").css("z-index","99");
    $("#resumepopup.bottom.resumeframe").css("height","115%");
    $("#resumepopup").css("height","100%");
    $("#resumepopup").css("top","0%");
    $("#resumepopup").css("left","0%");
    $(".resumepopup").css("opacity","1");
    $("#resumepopup").css("transition-duration","0.5s");
$(".btnr_minimize").css("visibility","visible");  
 $(".btnr_enlarge").css("visibility","hidden");
$(".btnr_enlarge").css("transition-delay","0s");
    $(".deck").css("bottom","-78px")
  }
)

$(".btn4_enlarge").click(
  function(){
  $("#resizableframe").css("width","100%");
    $("#resizableframe").css("z-index","99");
    $("#resizableframe").css("height","100%");
    $("#resizableframe").css("top","0%");
    $("#resizableframe").css("left","0%");
    $(".main4").css("opacity","1");
    $("#resizableframe").css("transition-duration","0.5s");
$(".btn4_minimize").css("visibility","visible");  
 $(".btn4_enlarge").css("visibility","hidden");
$(".btn4_enlarge").css("transition-delay","0s");
  }
)

$(".btn1_enlarge").click(
  function(){
  $("#resizableframe1").css("width","100%");
    $("#resizableframe1").css("z-index","99");
    $("#resizableframe1").css("height","100%");
    $("#resizableframe1").css("top","0%");
    $("#resizableframe1").css("left","0%");
    $(".main1").css("opacity","1");
    $("#resizableframe1").css("transition-duration","0.5s");
$(".btn1_minimize").css("visibility","visible");  
 $(".btn1_enlarge").css("visibility","hidden");
$(".resizableframe2").css("transition-delay","0s");
    $("#resizableframe1").css("z-index","100");
  $(".deck").css("bottom","-78px");
  }
)

// window1_minimize

$(".btnr_minimize").click(
  function(){
 $("#resumepopup").css("width","55%");
    $("#resumepopup").css("height","85%");
    $("#resumepopup").css("top","37px");
    $("#resumepopup").css("left","20%");
    // $("#resizableframe").css("transition-duration","0.5s");
     $(".btnr_minimize").css("visibility","hidden");  
 $(".btnr_enlarge").css("visibility","visible");   
    $("#resumepopup").css("transition-duration","0s");
    $(".deck").css("bottom","0px")
  }
)

$(".btn4_minimize").click(
  function(){
 $("#resizableframe").css("width","750px");
    $("#resizableframe").css("height","60%");
    $("#resizableframe").css("top","10%");
    $("#resizableframe").css("left","10%");
    // $("#resizableframe").css("transition-duration","0.5s");
     $(".btn4_minimize").css("visibility","hidden");  
 $(".btn4_enlarge").css("visibility","visible");   
    $("#resizableframe").css("transition-duration","0s");
  }
)

$(".btn1_minimize").click(
  function(){
 $("#resizableframe1").css("width","750px");
    $("#resizableframe1").css("height","60%");
    $("#resizableframe1").css("top","10%");
    $("#resizableframe1").css("left","10%");
    // $("#resizableframe").css("transition-duration","0.5s");
     $(".btn1_minimize").css("visibility","hidden");  
 $(".btn1_enlarge").css("visibility","visible");   
    $("#resizableframe1").css("transition-duration","0s");
    $(".deck").css("bottom","0px");
  }
)

// z-index-big

var num = 12

$("#resizableframe, #resizableframe1, #resizableframe2, #resizableframe3, #resizableframe5, #resizableframe6, #resizableframe7, #resumepopup, #resizableframe_1, #resizableframe_2, #resizableframe_1_1, #resizableframe_2_1, #resizableframe1_1, #resizableframe1_2, #resizableframe1_3, #resizableframe1_4, #resizableframe3_1, #resizableframe3_1_1, #resizableframe3_2, #resizableframe3_2_1, #resizableframe3_3, #resizableframe3_3_1, #resizableframe5_1, #resizableframe5_2, #resizableframe5_3, #resizableframe5_4, #resizableframe5_4_1, #resizableframe7_1, #resizableframe7_2, #resizableframe6_1, #resizableframe6_2, #resizableframe6_1_1, #resizableframe8").click(
  function(){
    num = num + 1;
    $(this).css("z-index", num);    
  });


// window2_close

$(".btn4_1_close").click(
  function(){
    $("#resizableframe_1").css("visibility","hidden");
  $(".mark").css("visibility","hidden");
   $(".btn4_1_enlarge").css("visibility","hidden");  
  $(".btn4_1_minimize").css("visibility","hidden"); 
  $(".deck").css("bottom","0px");
  $(".button_view").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)

$(".btn7_1_close").click(
  function(){
    $("#resizableframe7_1").css("visibility","hidden");
  $(".art").css("visibility","hidden");
   $(".btn7_1_enlarge").css("visibility","hidden");  
  $(".btn7_1_minimize").css("visibility","hidden"); 
  $(".deck").css("bottom","0px");
  $(".button_view").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)

$(".btn6_1_close").click(
  function(){
    $("#resizableframe6_1").css("visibility","hidden");
  $(".voyeur").css("visibility","hidden");
   $(".btn6_1_enlarge").css("visibility","hidden");  
  $(".btn6_1_minimize").css("visibility","hidden"); 
  $(".deck").css("bottom","0px");
  $(".button_view").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)

$(".btn6_2_close").click(
  function(){
    $("#resizableframe6_2").css("visibility","hidden");
  $(".beijing").css("visibility","hidden");
   $(".btn6_2_enlarge").css("visibility","hidden");  
  $(".btn6_2_minimize").css("visibility","hidden"); 
  $(".deck").css("bottom","0px");
  $(".button_view").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)

$(".btn7_2_close").click(
  function(){
    $("#resizableframe7_2").css("visibility","hidden");
  $(".shanghai").css("visibility","hidden");
   $(".btn7_2_enlarge").css("visibility","hidden");  
  $(".btn7_2_minimize").css("visibility","hidden"); 
  $(".deck").css("bottom","0px");
  $(".button_view").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)

$(".btn5_1_close").click(
  function(){
    $("#resizableframe5_1").css("visibility","hidden");
  $(".trip").css("visibility","hidden");
   $(".btn5_1_enlarge").css("visibility","hidden");  
  $(".btn5_1_minimize").css("visibility","hidden"); 
  $(".deck").css("bottom","0px");
  $(".button_view").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)

$(".btn5_2_close").click(
  function(){
    $("#resizableframe5_2").css("visibility","hidden");
  $(".chunan").css("visibility","hidden");
   $(".btn5_2_enlarge").css("visibility","hidden");  
  $(".btn5_2_minimize").css("visibility","hidden"); 
  $(".deck").css("bottom","0px");
  $(".button_view").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)

$(".btn5_4_close").click(
  function(){
    $("#resizableframe5_4").css("visibility","hidden");
  $(".mkj").css("visibility","hidden");
   $(".btn5_4_enlarge").css("visibility","hidden");  
  $(".btn5_4_minimize").css("visibility","hidden"); 
  $(".deck").css("bottom","0px");
  $(".button_view").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)

$(".btn3_1_close").click(
  function(){
    $("#resizableframe3_1").css("visibility","hidden");
  $(".inside").css("visibility","hidden");
   $(".btn3_1_enlarge").css("visibility","hidden");  
  $(".btn3_1_minimize").css("visibility","hidden"); 
  $(".deck").css("bottom","0px");
  $(".button_view").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)
$(".btn3_2_close").click(
  function(){
    $("#resizableframe3_2").css("visibility","hidden");
  $(".voice").css("visibility","hidden");
   $(".btn3_2_enlarge").css("visibility","hidden");  
  $(".btn3_2_minimize").css("visibility","hidden"); 
  $(".deck").css("bottom","0px");
  $(".button_view").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)

$(".btn3_3_close").click(
  function(){
    $("#resizableframe3_3").css("visibility","hidden");
  $(".winter").css("visibility","hidden");
   $(".btn3_3_enlarge").css("visibility","hidden");  
  $(".btn3_3_minimize").css("visibility","hidden"); 
  $(".deck").css("bottom","0px");
  $(".button_view").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)

$(".btn5_3_close").click(
  function(){
    $("#resizableframe5_3").css("visibility","hidden");
  $(".game").css("visibility","hidden");
   $(".btn5_3_enlarge").css("visibility","hidden");  
  $(".btn5_3_minimize").css("visibility","hidden"); 
  $(".deck").css("bottom","0px");
  $(".button_view").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)

$(".btn1_1_close").click(
  function(){
    $("#resizableframe1_1").css("visibility","hidden");
  $(".dreamer").css("visibility","hidden");
   $(".btn1_1_enlarge").css("visibility","hidden");  
  $(".btn1_1_minimize").css("visibility","hidden"); 
  $(".deck").css("bottom","0px");
  $(".button_view").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)

$(".btn1_2_close").click(
  function(){
    $("#resizableframe1_2").css("visibility","hidden");
  $(".portfolio").css("visibility","hidden");
   $(".btn1_2_enlarge").css("visibility","hidden");  
  $(".btn1_2_minimize").css("visibility","hidden"); 
  $(".deck").css("bottom","0px");
  $(".button_view").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)

$(".btn1_3_close").click(
  function(){
    $("#resizableframe1_3").css("visibility","hidden");
  $(".geek").css("visibility","hidden");
   $(".btn1_3_enlarge").css("visibility","hidden");  
  $(".btn1_3_minimize").css("visibility","hidden"); 
  $(".deck").css("bottom","0px");
  $(".button_view").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)

$(".btn4_2_close").click(
  function(){
    $("#resizableframe_2").css("visibility","hidden");
  $(".windmill").css("visibility","hidden");
   $(".btn4_2_enlarge").css("visibility","hidden");  
  $(".btn4_2_minimize").css("visibility","hidden"); 
  $(".deck").css("bottom","0px");
  $("#view_windmill").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)

// window2_enlarge

$(".btn4_1_enlarge").click(
  function(){
    $("#resizableframe_1").css("width","100%");
    $("#resizableframe_1").css("height","100%");
    $("#resizableframe_1").css("top","0%");
    $("#resizableframe_1").css("left","0%");
// $("#resizableframe_1").css("left","0%");
// $("#resizableframe_1").css("bottom","0%");
    $(".mark").css("opacity","1");
    $("#resizableframe_1").css("transition-duration","0.5s");
$(".btn4_1_minimize").css("visibility","visible");  
 $(".btn4_1_enlarge").css("visibility","hidden");  
    $(".deck").css("bottom","-78px");  

  }
)

$(".btn6_1_enlarge").click(
  function(){
    $("#resizableframe6_1").css("width","100%");
    $("#resizableframe6_1").css("height","100%");
    $("#resizableframe6_1").css("top","0%");
    $("#resizableframe6_1").css("left","0%");
// $("#resizableframe_1").css("left","0%");
// $("#resizableframe_1").css("bottom","0%");
    $(".voyeur").css("opacity","1");
    $("#resizableframe6_1").css("transition-duration","0.5s");
$(".btn6_1_minimize").css("visibility","visible");  
 $(".btn6_1_enlarge").css("visibility","hidden");  
    $(".deck").css("bottom","-78px");  

  }
)

$(".btn7_1_enlarge").click(
  function(){
    $("#resizableframe7_1").css("width","100%");
    $("#resizableframe7_1").css("height","100%");
    $("#resizableframe7_1").css("top","0%");
    $("#resizableframe7_1").css("left","0%");
// $("#resizableframe_1").css("left","0%");
// $("#resizableframe_1").css("bottom","0%");
    $(".art").css("opacity","1");
    $("#resizableframe7_1").css("transition-duration","0.5s");
$(".btn7_1_minimize").css("visibility","visible");  
 $(".btn7_1_enlarge").css("visibility","hidden");  
    $(".deck").css("bottom","-78px");  

  }
)

$(".btn7_2_enlarge").click(
  function(){
    $("#resizableframe7_2").css("width","100%");
    $("#resizableframe7_2").css("height","100%");
    $("#resizableframe7_2").css("top","0%");
    $("#resizableframe7_2").css("left","0%");
// $("#resizableframe_1").css("left","0%");
// $("#resizableframe_1").css("bottom","0%");
    $(".shanghai").css("opacity","1");
    $("#resizableframe7_2").css("transition-duration","0.5s");
$(".btn7_2_minimize").css("visibility","visible");  
 $(".btn7_2_enlarge").css("visibility","hidden");  
    $(".deck").css("bottom","-78px");  

  }
)

$(".btn6_2_enlarge").click(
  function(){
    $("#resizableframe6_2").css("width","100%");
    $("#resizableframe6_2").css("height","100%");
    $("#resizableframe6_2").css("top","0%");
    $("#resizableframe6_2").css("left","0%");
// $("#resizableframe_1").css("left","0%");
// $("#resizableframe_1").css("bottom","0%");
    $(".beijing").css("opacity","1");
    $("#resizableframe6_2").css("transition-duration","0.5s");
$(".btn6_2_minimize").css("visibility","visible");  
 $(".btn6_2_enlarge").css("visibility","hidden");  
    $(".deck").css("bottom","-78px");  

  }
)

$(".btn5_1_enlarge").click(
  function(){
    $("#resizableframe5_1").css("width","100%");
    $("#resizableframe5_1").css("height","100%");
    $("#resizableframe5_1").css("top","0%");
    $("#resizableframe5_1").css("left","0%");
// $("#resizableframe_1").css("left","0%");
// $("#resizableframe_1").css("bottom","0%");
    $(".trip").css("opacity","1");
    $("#resizableframe5_1").css("transition-duration","0.5s");
$(".btn5_1_minimize").css("visibility","visible");  
 $(".btn5_1_enlarge").css("visibility","hidden");  
    $(".deck").css("bottom","-78px");  

  }
)

$(".btn5_2_enlarge").click(
  function(){
    $("#resizableframe5_2").css("width","100%");
    $("#resizableframe5_2").css("height","100%");
    $("#resizableframe5_2").css("top","0%");
    $("#resizableframe5_2").css("left","0%");
// $("#resizableframe_1").css("left","0%");
// $("#resizableframe_1").css("bottom","0%");
    $(".chunan").css("opacity","1");
    $("#resizableframe5_2").css("transition-duration","0.5s");
$(".btn5_2_minimize").css("visibility","visible");  
 $(".btn5_2_enlarge").css("visibility","hidden");  
    $(".deck").css("bottom","-78px");  

  }
)

$(".btn5_4_enlarge").click(
  function(){
    $("#resizableframe5_4").css("width","100%");
    $("#resizableframe5_4").css("height","100%");
    $("#resizableframe5_4").css("top","0%");
    $("#resizableframe5_4").css("left","0%");
// $("#resizableframe_1").css("left","0%");
// $("#resizableframe_1").css("bottom","0%");
    $(".mkj").css("opacity","1");
    $("#resizableframe5_4").css("transition-duration","0.5s");
$(".btn5_4_minimize").css("visibility","visible");  
 $(".btn5_4_enlarge").css("visibility","hidden");  
    $(".deck").css("bottom","-78px");  

  }
)

$(".btn5_3_enlarge").click(
  function(){
    $("#resizableframe5_3").css("width","100%");
    $("#resizableframe5_3").css("height","100%");
    $("#resizableframe5_3").css("top","0%");
    $("#resizableframe5_3").css("left","0%");
// $("#resizableframe_1").css("left","0%");
// $("#resizableframe_1").css("bottom","0%");
    $(".game").css("opacity","1");
    $("#resizableframe5_3").css("transition-duration","0.5s");
$(".btn5_3_minimize").css("visibility","visible");  
 $(".btn5_3_enlarge").css("visibility","hidden");  
    $(".deck").css("bottom","-78px");  

  }
)

$(".btn3_1_enlarge").click(
  function(){
    $("#resizableframe3_1").css("width","100%");
    $("#resizableframe3_1").css("height","100%");
    $("#resizableframe3_1").css("top","0%");
    $("#resizableframe3_1").css("left","0%");
// $("#resizableframe3_1").css("left","0%");
// $("#resizableframe3_1").css("bottom","0%");
    $(".inside").css("opacity","1");
    $("#resizableframe3_1").css("transition-duration","0.5s");
$(".btn3_1_minimize").css("visibility","visible");  
 $(".btn3_1_enlarge").css("visibility","hidden");  
    $(".deck").css("bottom","-78px");  

  }
)
$(".btn3_2_enlarge").click(
  function(){
    $("#resizableframe3_2").css("width","100%");
    $("#resizableframe3_2").css("height","100%");
    $("#resizableframe3_2").css("top","0%");
    $("#resizableframe3_2").css("left","0%");
// $("#resizableframe3_2").css("left","0%");
// $("#resizableframe3_2").css("bottom","0%");
    $(".voice").css("opacity","1");
    $("#resizableframe3_2").css("transition-duration","0.5s");
$(".btn3_2_minimize").css("visibility","visible");  
 $(".btn3_2_enlarge").css("visibility","hidden");  
    $(".deck").css("bottom","-78px");  

  }
)

$(".btn3_3_enlarge").click(
  function(){
    $("#resizableframe3_3").css("width","100%");
    $("#resizableframe3_3").css("height","100%");
    $("#resizableframe3_3").css("top","0%");
    $("#resizableframe3_3").css("left","0%");
// $("#resizableframe3_3").css("left","0%");
// $("#resizableframe3_3").css("bottom","0%");
    $(".winter").css("opacity","1");
    $("#resizableframe3_3").css("transition-duration","0.5s");
$(".btn3_3_minimize").css("visibility","visible");  
 $(".btn3_3_enlarge").css("visibility","hidden");  
    $(".deck").css("bottom","-78px");  

  }
)

$(".btn1_1_enlarge").click(
  function(){
    $("#resizableframe1_1").css("width","100%");
    $("#resizableframe1_1").css("height","100%");
    $("#resizableframe1_1").css("top","0%");
    $("#resizableframe1_1").css("left","0%");
// $("#resizableframe_1").css("left","0%");
// $("#resizableframe_1").css("bottom","0%");
    $(".dreamer").css("opacity","1");
    $("#resizableframe1_1").css("transition-duration","0.5s");
$(".btn1_1_minimize").css("visibility","visible");  
 $(".btn1_1_enlarge").css("visibility","hidden");  
    $(".deck").css("bottom","-78px");  

  }
)

$(".btn1_2_enlarge").click(
  function(){
    $("#resizableframe1_2").css("width","100%");
    $("#resizableframe1_2").css("height","100%");
    $("#resizableframe1_2").css("top","0%");
    $("#resizableframe1_2").css("left","0%");
// $("#resizableframe_1").css("left","0%");
// $("#resizableframe_1").css("bottom","0%");
    $(".portfolio").css("opacity","1");
    $("#resizableframe1_2").css("transition-duration","0.5s");
$(".btn1_2_minimize").css("visibility","visible");  
 $(".btn1_2_enlarge").css("visibility","hidden");  
    $(".deck").css("bottom","-78px");  

  }
)

$(".btn1_3_enlarge").click(
  function(){
    $("#resizableframe1_3").css("width","100%");
    $("#resizableframe1_3").css("height","100%");
    $("#resizableframe1_3").css("top","0%");
    $("#resizableframe1_3").css("left","0%");
// $("#resizableframe_1").css("left","0%");
// $("#resizableframe_1").css("bottom","0%");
    $(".geek").css("opacity","1");
    $("#resizableframe1_3").css("transition-duration","0.5s");
$(".btn1_3_minimize").css("visibility","visible");  
 $(".btn1_3_enlarge").css("visibility","hidden");  
    $(".deck").css("bottom","-78px");  

  }
)

$(".btn4_2_enlarge").click(
  function(){
    $("#resizableframe_2").css("width","100%");
    $("#resizableframe_2").css("z-index","99");
    $("#resizableframe_2").css("height","100%");
    $("#resizableframe_2").css("top","0%");
    $("#resizableframe_2").css("left","0%");
// $("#resizableframe_1").css("left","0%");
// $("#resizableframe_1").css("bottom","0%");
    $(".windmill").css("opacity","1");
    $("#resizableframe_2").css("transition-duration","0.5s");
$(".btn4_2_minimize").css("visibility","visible");  
 $(".btn4_2_enlarge").css("visibility","hidden");  
    $(".deck").css("bottom","-78px");  

  }
)

// window2_minimize

$(".btn4_1_minimize").click(
  function(){
 $("#resizableframe_1").css("width", "65%");
    $("#resizableframe_1").css("height","80%");
    $("#resizableframe_1").css("top","45px");
    $("#resizableframe_1").css("left","20%");
     $(".btn4_1_minimize").css("visibility","hidden");  
 $(".btn4_1_enlarge").css("visibility","visible");   
    $("#resizableframe_1").css("transition-duration","0s");
    $(".deck").css("bottom","0px");   
  }
)

$(".btn7_1_minimize").click(
  function(){
 $("#resizableframe7_1").css("width", "65%");
    $("#resizableframe7_1").css("height","80%");
    $("#resizableframe7_1").css("top","45px");
    $("#resizableframe7_1").css("left","20%");
     $(".btn4_1_minimize").css("visibility","hidden");  
 $(".btn7_1_enlarge").css("visibility","visible");   
    $("#resizableframe7_1").css("transition-duration","0s");
    $(".deck").css("bottom","0px");   
  }
)

$(".btn6_1_minimize").click(
  function(){
 $("#resizableframe6_1").css("width", "65%");
    $("#resizableframe6_1").css("height","80%");
    $("#resizableframe6_1").css("top","45px");
    $("#resizableframe6_1").css("left","20%");
     $(".btn6_1_minimize").css("visibility","hidden");  
 $(".btn6_1_enlarge").css("visibility","visible");   
    $("#resizableframe6_1").css("transition-duration","0s");
    $(".deck").css("bottom","0px");   
  }
)

$(".btn6_2_minimize").click(
  function(){
 $("#resizableframe6_2").css("width", "65%");
    $("#resizableframe6_2").css("height","80%");
    $("#resizableframe6_2").css("top","45px");
    $("#resizableframe6_2").css("left","20%");
     $(".btn6_2_minimize").css("visibility","hidden");  
 $(".btn6_2_enlarge").css("visibility","visible");   
    $("#resizableframe6_2").css("transition-duration","0s");
    $(".deck").css("bottom","0px");   
  }
)

$(".btn7_2_minimize").click(
  function(){
 $("#resizableframe7_2").css("width", "65%");
    $("#resizableframe7_2").css("height","80%");
    $("#resizableframe7_2").css("top","45px");
    $("#resizableframe7_2").css("left","20%");
     $(".btn7_2_minimize").css("visibility","hidden");  
 $(".btn7_2_enlarge").css("visibility","visible");   
    $("#resizableframe7_2").css("transition-duration","0s");
    $(".deck").css("bottom","0px");   
  }
)

$(".btn5_3_minimize").click(
  function(){
 $("#resizableframe5_3").css("width", "65%");
    $("#resizableframe5_3").css("height","80%");
    $("#resizableframe5_3").css("top","45px");
    $("#resizableframe5_3").css("left","20%");
     $(".btn5_3_minimize").css("visibility","hidden");  
 $(".btn5_3_enlarge").css("visibility","visible");   
    $("#resizableframe5_3").css("transition-duration","0s");
    $(".deck").css("bottom","0px");   
  }
)

$(".btn5_2_minimize").click(
  function(){
 $("#resizableframe5_2").css("width", "65%");
    $("#resizableframe5_2").css("height","80%");
    $("#resizableframe5_2").css("top","45px");
    $("#resizableframe5_2").css("left","20%");
     $(".btn5_2_minimize").css("visibility","hidden");  
 $(".btn5_2_enlarge").css("visibility","visible");   
    $("#resizableframe5_2").css("transition-duration","0s");
    $(".deck").css("bottom","0px");   
  }
)

$(".btn5_4_minimize").click(
  function(){
 $("#resizableframe5_4").css("width", "65%");
    $("#resizableframe5_4").css("height","80%");
    $("#resizableframe5_4").css("top","45px");
    $("#resizableframe5_4").css("left","20%");
     $(".btn5_4_minimize").css("visibility","hidden");  
 $(".btn5_4_enlarge").css("visibility","visible");   
    $("#resizableframe5_4").css("transition-duration","0s");
    $(".deck").css("bottom","0px");   
  }
)

$(".btn5_1_minimize").click(
  function(){
 $("#resizableframe5_1").css("width", "65%");
    $("#resizableframe5_1").css("height","80%");
    $("#resizableframe5_1").css("top","45px");
    $("#resizableframe5_1").css("left","20%");
     $(".btn5_1_minimize").css("visibility","hidden");  
 $(".btn5_1_enlarge").css("visibility","visible");   
    $("#resizableframe5_1").css("transition-duration","0s");
    $(".deck").css("bottom","0px");   
  }
)

$(".btn3_1_minimize").click(
  function(){
 $("#resizableframe3_1").css("width", "65%");
    $("#resizableframe3_1").css("height","80%");
    $("#resizableframe3_1").css("top","45px");
    $("#resizableframe3_1").css("left","20%");
     $(".btn3_1_minimize").css("visibility","hidden");  
 $(".btn3_1_enlarge").css("visibility","visible");   
    $("#resizableframe3_1").css("transition-duration","0s");
    $(".deck").css("bottom","0px");   
  }
)

$(".btn3_2_minimize").click(
  function(){
 $("#resizableframe3_2").css("width", "65%");
    $("#resizableframe3_2").css("height","80%");
    $("#resizableframe3_2").css("top","45px");
    $("#resizableframe3_2").css("left","20%");
     $(".btn3_2_minimize").css("visibility","hidden");  
 $(".btn3_2_enlarge").css("visibility","visible");   
    $("#resizableframe3_2").css("transition-duration","0s");
    $(".deck").css("bottom","0px");   
  }
)

$(".btn3_3_minimize").click(
  function(){
 $("#resizableframe3_3").css("width", "65%");
    $("#resizableframe3_3").css("height","80%");
    $("#resizableframe3_3").css("top","45px");
    $("#resizableframe3_3").css("left","20%");
     $(".btn3_3_minimize").css("visibility","hidden");  
 $(".btn3_3_enlarge").css("visibility","visible");   
    $("#resizableframe3_3").css("transition-duration","0s");
    $(".deck").css("bottom","0px");   
  }
)

$(".btn1_1_minimize").click(
  function(){
 $("#resizableframe1_1").css("width", "65%");
    $("#resizableframe1_1").css("height","80%");
    $("#resizableframe1_1").css("top","45px");
    $("#resizableframe1_1").css("left","20%");
     $(".btn1_1_minimize").css("visibility","hidden");  
 $(".btn1_1_enlarge").css("visibility","visible");   
    $("#resizableframe1_1").css("transition-duration","0s");
    $(".deck").css("bottom","0px");   
  }
)

$(".btn1_2_minimize").click(
  function(){
 $("#resizableframe1_2").css("width", "65%");
    $("#resizableframe1_2").css("height","80%");
    $("#resizableframe1_2").css("top","45px");
    $("#resizableframe1_2").css("left","20%");
     $(".btn1_2_minimize").css("visibility","hidden");  
 $(".btn1_2_enlarge").css("visibility","visible");   
    $("#resizableframe1_2").css("transition-duration","0s");
    $(".deck").css("bottom","0px");   
  }
)

$(".btn1_3_minimize").click(
  function(){
 $("#resizableframe1_3").css("width", "65%");
    $("#resizableframe1_3").css("height","80%");
    $("#resizableframe1_3").css("top","45px");
    $("#resizableframe1_3").css("left","20%");
     $(".btn1_3_minimize").css("visibility","hidden");  
 $(".btn1_3_enlarge").css("visibility","visible");   
    $("#resizableframe1_3").css("transition-duration","0s");
    $(".deck").css("bottom","0px");   
  }
)

$(".btn4_2_minimize").click(
  function(){
 $("#resizableframe_2").css("width", "65%");
    $("#resizableframe_2").css("height","80%");
    $("#resizableframe_2").css("top","45px");
    $("#resizableframe_2").css("left","20%");
     $(".btn4_2_minimize").css("visibility","hidden");  
 $(".btn4_2_enlarge").css("visibility","visible");   
    $("#resizableframe_2").css("transition-duration","0s");
    $(".deck").css("bottom","0px");   
  }
)

// window3_close
$(".btn4_1_1_close").click(
  function(){
    $("#resizableframe_1_1").css("visibility","hidden");
  $(".markvideo").css("visibility","hidden");
   $(".btn4_1_1_enlarge").css("visibility","hidden");  
  $(".btn4_1_1_minimize").css("visibility","hidden"); 
  $("#view_mark").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)

$(".btn6_2_1_close").click(
  function(){
    $("#resizableframe6_2_1").css("visibility","hidden");
  $(".beijingvideo").css("visibility","hidden");
   $(".btn6_2_1_enlarge").css("visibility","hidden");  
  $(".btn6_2_1_minimize").css("visibility","hidden"); 
  $("#view_voyeur").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)

$(".btn6_1_1_close").click(
  function(){
    $("#resizableframe6_1_1").css("visibility","hidden");
  $(".voyeurvideo").css("visibility","hidden");
   $(".btn6_1_1_enlarge").css("visibility","hidden");  
  $(".btn6_1_1_minimize").css("visibility","hidden"); 
  $("#view_voyeur").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)

$(".btn5_4_1_close").click(
  function(){
    $("#resizableframe5_4_1").css("visibility","hidden");
  $(".invisiblevideo").css("visibility","hidden");
   $(".btn5_4_1_enlarge").css("visibility","hidden");  
  $(".btn5_4_1_minimize").css("visibility","hidden"); 
  $("#view_invisible").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)


$(".btn4_2_1_close").click(
  function(){
    $("#resizableframe_2_1").css("visibility","hidden");
  $(".windmillvideo").css("visibility","hidden");
   $(".btn4_2_1_enlarge").css("visibility","hidden");  
  $(".btn4_2_1_minimize").css("visibility","hidden"); 
  $("#view_windmill").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)

$(".btn3_1_1_close").click(
  function(){
    $("#resizableframe3_1_1").css("visibility","hidden");
  $(".insidevideo").css("visibility","hidden");
  // $("#view_inside").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)

$(".btn3_2_1_close").click(
  function(){
    $("#resizableframe3_2_1").css("visibility","hidden");
  $(".voicevideo").css("visibility","hidden");
  // $("#view_inside").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)

$(".btn3_3_1_close").click(
  function(){
    $("#resizableframe3_3_1").css("visibility","hidden");
  $(".wintervideo").css("visibility","hidden");
  // $("#view_inside").css("transition-duration","0s")
  // $(".iframe1").css("display","none"); 
  }
)

// pic1_click

$("#mark").click(
  function(){
    $("#mark").css("background-color","rgba(0,0,0,0.1)");
  }
)

$("#dreamer").click(
  function(){
    $("#dreamer").css("background-color","rgba(0,0,0,0.1)");
  }
)

$("#inside").click(
  function(){
    $("#inside").css("background-color","rgba(0,0,0,0.1)");
  }
)

$("#trip").click(
  function(){
    $("#trip").css("background-color","rgba(0,0,0,0.1)");
  }
)

$("#voyeur").click(
  function(){
    $("#voyeur").css("background-color","rgba(0,0,0,0.1)");
  }
)

$("#art").click(
  function(){
    $("#art").css("background-color","rgba(0,0,0,0.1)");
  }
)

// pic2_click

$("#windmill").click(
  function(){
    $("#windmill").css("background-color","rgba(0,0,0,0.1)");
  }
)

$("#portfolio").click(
  function(){
    $("#portfolio").css("background-color","rgba(0,0,0,0.1)");
  }
)

$("#voice").click(
  function(){
    $("#voice").css("background-color","rgba(0,0,0,0.1)");
  }
)

$("#chunan").click(
  function(){
    $("#chunan").css("background-color","rgba(0,0,0,0.1)");
  }
)

$("#beijing").click(
  function(){
    $("#beijing").css("background-color","rgba(0,0,0,0.1)");
  }
)

$("#shanghai").click(
  function(){
    $("#shanghai").css("background-color","rgba(0,0,0,0.1)");
  }
)
// pic3_click

$("#geek").click(
  function(){
    $("#geek").css("background-color","rgba(0,0,0,0.1)");
  }
)

$("#winter").click(
  function(){
    $("#winter").css("background-color","rgba(0,0,0,0.1)");
  }
)

$("#game").click(
  function(){
    $("#game").css("background-color","rgba(0,0,0,0.1)");
  }
)

// pic4_click

// $("#dependent").click(
//   function(){
//     $("#dependent").css("background-color","rgba(0,0,0,0.1)");
//   }
// )

$("#invisible").click(
  function(){
    $("#invisible").css("background-color","rgba(0,0,0,0.1)");
  }
)


// pic1_double click

$("#mark").dblclick(function(){
  $("#resizableframe_1").css("visibility","visible");
   $(".btn4_1_enlarge").css("visibility","visible"); 
  $(".mark").css("visibility","visible");
	$("#resizableframe_1").css("opacity", "1");
  $(".story").css("transition-delay","0s");
  $("#view_mark").css("transition-duration","0.5s");
  num = num + 1
  $("#resizableframe_1").css("z-index", num);
});


$("#beijing").dblclick(function(){
  $("#resizableframe6_2").css("visibility","visible");
   $(".btn6_2_enlarge").css("visibility","visible"); 
  $(".beijing").css("visibility","visible");
  $(".story").css("transition-delay","0s");
	$("#resizableframe6_2").css("opacity", "1");
  $("#view_beijing").css("transition-duration","0.5s");
  num = num + 1
  $("#resizableframe6_2").css("z-index", num);
});

$("#voyeur").dblclick(function(){
  $("#resizableframe6_1").css("visibility","visible");
   $(".btn6_1_enlarge").css("visibility","visible");
	$("#resizableframe6_1").css("opacity", "1");
  $(".voyeur").css("visibility","visible");
  $(".story").css("transition-delay","0s");
  $("#view_voyeur").css("transition-duration","0.5s");
  num = num + 1
  $("#resizableframe6_1").css("z-index", num);
});

$("#chunan").dblclick(function(){
  $("#resizableframe5_2").css("visibility","visible");
   $(".btn5_2_enlarge").css("visibility","visible"); 
	$("#resizableframe5_2").css("opacity", "1");
  $(".chunan").css("visibility","visible");
  $(".story").css("transition-delay","0s");
  $("#view_chunan").css("transition-duration","0.5s");
  num = num + 1
  $("#resizableframe5_2").css("z-index", num);
});

$("#shanghai").dblclick(function(){
  $("#resizableframe7_2").css("visibility","visible");
   $(".btn7_2_enlarge").css("visibility","visible"); 
  $(".shanghai").css("visibility","visible");
	$("#resizableframe7_2").css("opacity", "1");
  $(".story").css("transition-delay","0s");
  $("#view_shanghai").css("transition-duration","0.5s");
  num = num + 1
  $("#resizableframe7_2").css("z-index", num);
});

$("#art").dblclick(function(){
  $("#resizableframe7_1").css("visibility","visible");
	$("#resizableframe7_1").css("opacity", "1");
   $(".btn7_1_enlarge").css("visibility","visible"); 
  $(".art").css("visibility","visible");
  $(".story").css("transition-delay","0s");
  $("#view_art").css("transition-duration","0.5s");
  num = num + 1
  $("#resizableframe7_1").css("z-index", num);
});

$("#trip").dblclick(function(){
  $("#resizableframe5_1").css("visibility","visible");
	$("#resizableframe5_1").css("opacity", "1");
   $(".btn5_1_enlarge").css("visibility","visible"); 
  $(".trip").css("visibility","visible");
  $(".story").css("transition-delay","0s");
  $("#view_trip").css("transition-duration","0.5s");
  num = num + 1
  $("#resizableframe5_1").css("z-index", num);
});

$("#dreamer").dblclick(function(){
  $("#resizableframe1_1").css("visibility","visible");
	$("#resizableframe1_1").css("opacity", "1");
  // $(".top").css("visibility","visible");
   $(".btn1_1_enlarge").css("visibility","visible"); 
  $(".dreamer").css("visibility","visible");
  $(".dreamer").css("transition-delay","0s");
  // $(".bottom").css("visibility","visible")
  // $("#view_dreamer").css("transition-duration","0.5s");
  num = num + 1
  $("#resizableframe1_1").css("z-index", num);
});

$("#inside").dblclick(function(){
  $("#resizableframe3_1").css("visibility","visible");
	$("#resizableframe3_1").css("opacity", "1");
   $(".btn3_1_enlarge").css("visibility","visible"); 
  $(".inside").css("visibility","visible");
  $(".story").css("transition-delay","0s");
  $("#view_inside").css("transition-duration","0.5s");
  num = num + 1
  $("#resizableframe3_1").css("z-index", num);
});

// pic2_double click

$("#windmill").dblclick(function(){
  $("#resizableframe_2").css("visibility","visible");
	$("#resizableframe_2").css("opacity", "1");
  $("#resizableframe_2").css("visibility","visible");
   $(".btn4_2_enlarge").css("visibility","visible"); 
  $(".windmill").css("visibility","visible");
  $(".story").css("transition-delay","0s");
  num = num + 1
  $("#resizableframe_2").css("z-index", num);
  $("#view_windmill").css("transition-duration","0.5s");
});

$("#voice").dblclick(function(){
  $("#resizableframe3_2").css("visibility","visible");
	$("#resizableframe3_2").css("opacity", "1");
  $("#resizableframe3_2").css("visibility","visible");
   $(".btn3_2_enlarge").css("visibility","visible"); 
  $(".voice").css("visibility","visible");
  $(".story").css("transition-delay","0s");
  num = num + 1
  $("#resizableframe3_2").css("z-index", num);
  $("#view_voice").css("transition-duration","0.5s");
});

$("#winter").dblclick(function(){
  $("#resizableframe3_3").css("visibility","visible");
	$("#resizableframe3_3").css("opacity", "1");
  $("#resizableframe3_3").css("visibility","visible");
   $(".btn3_3_enlarge").css("visibility","visible"); 
  $(".winter").css("visibility","visible");
  $(".story").css("transition-delay","0s");
  num = num + 1
  $("#resizableframe3_3").css("z-index", num);
  $("#view_winter").css("transition-duration","0.5s");
});

$("#portfolio").dblclick(function(){
  $("#resizableframe1_2").css("visibility","visible");
	$("#resizableframe1_2").css("opacity", "1");
  $("#resizableframe1_2").css("visibility","visible");
   $(".btn1_2_enlarge").css("visibility","visible"); 
  $(".portfolio").css("visibility","visible");
  $(".story").css("transition-delay","0s");
  num = num + 1
  $("#resizableframe1_2").css("z-index", num);
  $("#view_portfolio").css("transition-duration","0.5s");
});

// pic3_double click
$("#geek").dblclick(function(){
  $("#resizableframe1_3").css("visibility","visible");
	$("#resizableframe1_3").css("opacity", "1");
  $("#resizableframe1_3").css("visibility","visible");
   $(".btn1_3_enlarge").css("visibility","visible"); 
  $(".geek").css("visibility","visible");
  $(".story").css("transition-delay","0s");
  num = num + 1
  $("#resizableframe1_3").css("z-index", num);
});

$("#game").dblclick(function(){
  $("#resizableframe5_3").css("visibility","visible");
	$("#resizableframe5_3").css("opacity", "1");
  $("#resizableframe5_3").css("visibility","visible");
   $(".btn5_3_enlarge").css("visibility","visible"); 
  $(".game").css("visibility","visible");
  $(".story").css("transition-delay","0s");
  num = num + 1
  $("#resizableframe5_3").css("z-index", num);
});

$("#invisible").dblclick(function(){
  $("#resizableframe5_4").css("visibility","visible");
	$("#resizableframe5_4").css("opacity", "1");
   $(".btn5_4_enlarge").css("visibility","visible"); 
  $(".mkj").css("visibility","visible");
  $(".story").css("transition-delay","0s");
  num = num + 1
  $("#resizableframe5_4").css("z-index", num);
});


// pic1_slection cancel

$(".bottom.bottom_fixed.overlay, .workwrapper.overlay, .work1.overlay, .storytitle, .work2, .work3, .work4").click(
  function(){
    $("#mark, #dreamer, #inside, #trip, #voyeur, #art").css("background-color","transparent");
  }
)

// pic2_slection cancel

$(".bottom.bottom_fixed.overlay, .workwrapper.overlay, .work2.overlay, .storytitle, .work1, .work3, .work4").click(
  function(){
    $("#windmill, #portfolio, #voice, #chunan, #beijing, #shanghai").css("background-color","transparent");
  }
)

// pic3_slection cancel

$(".bottom.bottom_fixed.overlay, .workwrapper.overlay, .work2.overlay, .storytitle, .work1, .work2, .work4").click(
  function(){
    $("#geek, #winter, #game").css("background-color","transparent");
  }
)

// pic4_slection cancel

$(".bottom.bottom_fixed.overlay, .workwrapper.overlay, .work2.overlay, .storytitle, .work1, .work2, .work3").click(
  function(){
    $("#dependent, #invisible").css("background-color","transparent");
  }
)

// desktop icons

$(".click1").click(
  function(){
    $(".img5").addClass("imgclick")
    $(".name1").addClass("nameclick")
    $(".img6").removeClass("imgclick")
    $(".name2").removeClass("nameclick")
  }
)

$(".click1").dblclick(function(){
  $("#resumepopup").css("visibility","visible");
    $(".resumepopup").css("visibility","visible");       
    $(".bottom_fixed").css("overflow-y","hidden"); 
    $(".resumepopup, #resumepopup").addClass("transition-delay"); 
     $(".btnr_enlarge").css("visibility","visible"); 
    $(".show_info").text("Resume");
});

$(".click2").click(
  function(){
    $(".img6").addClass("imgclick")
    $(".name2").addClass("nameclick")
    $(".img5").removeClass("imgclick")
    $(".name1").removeClass("nameclick")
  }
)

$(".back").click(
  function(){
    $(".img5,.img6").removeClass("imgclick");
    $(".name1,.name2").removeClass("nameclick");
    $(".show_info").text("");
	$(".connection").css("visibility","hidden");
	$("#wifi").css("visibility","visible");
	$("#wifi2").css("visibility","hidden");
  }
)

// desktop nav
$("#wifi").click(function(){
	$("#wifi").css("visibility","hidden");
	$("#wifi2").css("visibility","visible");
	$(".desktop .nav .connection").css("visibility","visible");
})

$("#wifi2").click(function(){
	$("#wifi").css("visibility","visible");
	$("#wifi2").css("visibility","hidden");
	$(".desktop .nav .connection").css("visibility","hidden");
})
 $(".logo").click(
   function(){
     $("#resizableframe, #resizableframe1, #resizableframe2, #resizableframe3, #resizableframe5, #resizableframe6, #resizableframe7, #resumepopup, #resizableframe_1, #resizableframe_2, #resizableframe_1_1, #resizableframe_2_1, #resizableframe1_1, #resizableframe1_2, #resizableframe1_3, #resizableframe1_4, #resizableframe3_1, #resizableframe3_1_1, #resizableframe3_2, #resizableframe3_2_1, #resizableframe3_3, #resizableframe3_3_1, #resizableframe5_1, #resizableframe5_2, #resizableframe5_3, #resizableframe5_4, #resizableframe5_4_1, #resizableframe7_1, #resizableframe7_2, #resizableframe6_1, #resizableframe6_2, #resizableframe6_1_1, #resizableframe8").css("opacity","0");
	 $(".deck").css("bottom","0px")
	 $(".show_info").text(" ");
 })

$(".icon1, #resizableframe1 .bottom").click(
  function(){
    $(".show_info").text("Who I Am");
})

$(".icon2, #resizableframe2 .bottom").click(
  function(){
    $(".show_info").text("Websites");
})

$(".icon3, #resizableframe3 .bottom").click(
  function(){
    $(".show_info").text("Videos");
})

$(".icon4, #resizableframe .bottom").click(
  function(){
    $(".show_info").text("Stories");
})

$(".icon5, #resizableframe5 .bottom").click(
  function(){
    $(".show_info").text("Experience");
})

$(".icon6, #resizableframe6 .bottom").click(
  function(){
    $(".show_info").text("Animations");
})

$(".icon7, #resizableframe7 .bottom").click(
  function(){
    $(".show_info").text("Photos");
})

$(".icon8, #resizableframe8 .bottom").click(
  function(){
    $(".show_info").text("Contact");
})

$(".icon, #resizableframe9 .bottom").click(
  function(){
    $(".show_info").text("Resume");
})




// viewvideo
$("#view_mark").click(
  function(){
    $("#resizableframe_1_1").css("visibility","visible"); 
	  $("#resizableframe_1_1").css("opacity", "1");
    $(".markvideo").css("visibility","visible");
    $("#resizableframe_1_1").css("z-index", 9999);
    // $(".button_view").css("transition-duration","0.5s");
  }
)

$("#view_beijing").click(
  function(){
    $("#resizableframe6_2_1").css("visibility","visible"); 
	  $("#resizableframe6_2_1").css("opacity", "1");
    $(".beijingvideo").css("visibility","visible");
    $("#resizableframe6_2_1").css("z-index", 9999);
    // $(".button_view").css("transition-duration","0.5s");
  }
)

$("#view_voyeur").click(
  function(){
    $("#resizableframe6_1_1").css("visibility","visible"); 
	  $("#resizableframe6_1_1").css("opacity", "1");
    $(".voyeurvideo").css("visibility","visible");
    $("#resizableframe6_1_1").css("z-index", 9999);
    // $(".button_view").css("transition-duration","0.5s");
  }
)

$("#view_invisible").click(
  function(){
    $("#resizableframe5_4_1").css("visibility","visible"); 
	  $("#resizableframe5_4_1").css("opacity", "1");
    $(".invisiblevideo").css("visibility","visible");
    $("#resizableframe5_4_1").css("z-index", 9999);
    // $(".button_view").css("transition-duration","0.5s");
  }
)

$("#view_windmill").click(
  function(){
    $("#resizableframe_2_1").css("visibility","visible");
	  $("#resizableframe_2_1").css("opacity", "1");
    $("#resizableframe_2_1").css("z-index", 9999);
     $(".btn4_2_1_enlarge").css("visibility","visible"); 
    $(".windmillvideo").css("visibility","visible");
    $(".story").css("transition-delay","0s");
    // $(".button_view").css("transition-duration","0.5s");
  }
)

$("#view_voice").click(
  function(){
    $("#resizableframe3_2_1").css("visibility","visible");
	  $("#resizableframe3_2_1").css("opacity", "1");
    $("#resizableframe3_2_1").css("z-index", 9999);
     $(".btn3_2_1_enlarge").css("visibility","visible"); 
    $(".voicevideo").css("visibility","visible");
    $(".story").css("transition-delay","0s");
    // $(".button_view").css("transition-duration","0.5s");
  }
)

$("#view_winter").click(
  function(){
    $("#resizableframe3_3_1").css("visibility","visible");
	  $("#resizableframe3_3_1").css("opacity", "1");
    $("#resizableframe3_3_1").css("z-index", 9999);
     $(".btn3_3_1_enlarge").css("visibility","visible"); 
    $(".wintervideo").css("visibility","visible");
    $(".story").css("transition-delay","0s");
    // $(".button_view").css("transition-duration","0.5s");
  }
)

$("#view_inside").click(
  function(){
    $("#resizableframe3_1_1").css("visibility","visible");
	  $("#resizableframe3_1_1").css("opacity", "1");
    $("#resizableframe3_1_1").css("z-index", 9999);
     $(".btn3_1_1_enlarge").css("visibility","visible"); 
    $(".winsidelvideo").css("visibility","visible");
    $(".story").css("transition-delay","0s");
    // $(".button_view").css("transition-duration","0.5s");
  }
)

// viewsite
$('#view_dreamer').click(function() {
window.open("http://dreamadream.site/");
  });

$('.fbh').click(function() {
window.open("https://www.facebook.com/profile.php?id=100009776596276");
  });

$('.insh').click(function() {
window.open("https://www.instagram.com/faneeee_030");
  });

$('.linkh').click(function() {
window.open("https://www.linkedin.com/in/ruofan-gu-046b67123");
  });

$('#view_trip').click(function() {
window.open("https://v.interlude.fm/v/V2GYJM/v/");
  });


// toggle

function toggleVideo(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("popupvideo");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}

function toggleVideo1(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("popupvideo1");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}

function toggleVideo2(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("popupvideo2");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}

function toggleVideo3(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("popupvideo3");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}

function toggleVideo4(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("popupvideo4");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}

function toggleVideo5(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("popupvideo5");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}

function toggleVideo6(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("popupvideo6");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}

function toggleVideo7(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("popupvideo7");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}

// type
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #CE1050}";
        document.body.appendChild(css);
    };

//
//jQuery(function () {
//	"use strict";
//    
//    /*global jQuery $*/ 
//	//Slider 
//	$(document).ready(function(){
//		
//		jQuery('.skillbar').each(function() {
//			jQuery(this).appear(function() {
//				jQuery(this).find('.count-bar').animate({
//					width:jQuery(this).attr('data-percent')
//				},3000);
//				var percent = jQuery(this).attr('data-percent');
//				jQuery(this).find('.count').html('<span>' + percent + '</span>');
//			});
//		});	
//	});
//	
//}());
