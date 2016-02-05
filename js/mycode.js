var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


$(document).load(function() {
   $(window).scrollTop();


   });


$(document).ready(function() {

  $('.arrow').click(function(){
    var body = $("html, body");
    body.stop().animate({scrollTop:$(window).height()}, '500', 'swing');
  });


   MiddleCenterize( $(".WordLove") , $(".WordLove .share"));
   setTimeout(function(){
      centralize( $("#TitlePic") );
      }, 100);
   
   
   $("#TopBar a img").toggle(1);
});

$(document).ready(function() {



  if(isMobile.any()){
    
$(".WordLove").click(function(){
var WordLove = $(this).attr('data-LoveWord');
      var PicturePath  = "./img/"+(WordLove.replace(/\ /g, '_'))+".jpg";
       $("#show_Card .LoveCard").attr("src", PicturePath);
        var url = document.URL ;
        url = url.substring(0, url.lastIndexOf("/") + 1);
        var CardPictUrl = url+"img/" + (WordLove.replace(/\ /g, '_'))+".jpg";
         var CardPageUrl = url + (WordLove.replace(/\ /g, '_'))+".html";
         var CardPictSocialUrl = url+"img/" + (WordLove.replace(/\ /g, '_'))+"_social.jpg";
         var Twit = "Valentine's Day Traditions From Around the World presented by @Vashiuk";
         var TwitUrl = "http://bit.ly/1L0vGe2";
        $("#show_Card .social a.twit").attr("href","https://twitter.com/intent/tweet?url="+CardPageUrl+";text="+ Twit + "&amp;");
        var Title = "Valentine's Traditions From Around The World";
        var Information ="These beautiful illustrations reveal the most unusual and romantic celebrations from around the world. by VashiDiamonds!";
           
        $("#show_Card .social a.fb").attr("href","https://www.facebook.com/dialog/feed?app_id=694165360698061&link="+ encodeURIComponent(url+"Home.html") + "&picture="+ encodeURIComponent(CardPictSocialUrl) +"&name="+ encodeURIComponent(Title) +"&caption=%20&description" +encodeURIComponent(Information) + "&redirect_uri=http%3A%2F%2Fwww.facebook.com%2F");
        $("#show_Card .social a.pin").attr("href","http://pinterest.com/pin/create/button/?url="+ encodeURIComponent(url+"Home.html")+"&media="+ encodeURIComponent(CardPictUrl) +"&description="+encodeURIComponent(Information) );
        
        $('.modal').modal('show');

  });


  }

    if ("ontouchstart" in window || navigator.msMaxTouchPoints)
    {
        $(".WordLove").attr('data-toggle', " ");
        $(".WordLove").attr('data-target', " ");
        $( ".share" ).remove();
    }
    else { };

});




$(window).resize(function() {
      centralize( $("#TitlePic") );
      MiddleCenterize( $(".WordLove") , $(".WordLove .share"));
      centralize( $("#show_Card  .modal-dialog") );
}); 

$('#show_Card ').on('shown.bs.modal', function () {
              /*  centralize( $("#show_Card  .modal-dialog") );*/
              centralize( $("#show_Card  .modal-dialog") );

});


$('#show_Card ').on('hidden.bs.modal', function () {
                centralize( $("#TitlePic") );
});


var visible = false;
$(window).scroll( function() {

    if (  ($(window).scrollTop() > 10) && (visible == false)  ) {
        $( "#TopBar a img" ).toggle(1000);
                visible = true;}
        if (  ($(window).scrollTop() < 10) && (visible == true)  ){
        $( "#TopBar a img" ).toggle(1000);
                visible = false;}

    });



 $(".WordLove").each( function() {
    $(this).click(function() {     
    var WordLove = $(this).attr('data-LoveWord');
      var PicturePath  = "./img/"+(WordLove.replace(/\ /g, '_'))+".jpg";
        $("#show_Card .LoveCard").attr("src", PicturePath);
        var url = document.URL ;
        url = url.substring(0, url.lastIndexOf("/") + 1);
        var CardPictUrl = url+"img/" + (WordLove.replace(/\ /g, '_'))+".jpg";
         var CardPageUrl = url + (WordLove.replace(/\ /g, '_'))+".html";
         var CardPictSocialUrl = url+"img/" + (WordLove.replace(/\ /g, '_'))+"_social.jpg";
         var Twit = "Valentine's Day Traditions From Around the World presented by @Vashiuk";
         var TwitUrl = "http://bit.ly/1L0vGe2";
        $("#show_Card .social a.twit").attr("href","https://twitter.com/intent/tweet?url="+CardPageUrl+";text="+ Twit + "&amp;");
        var Title = "Valentine's Traditions From Around The World";
        var Information ="These beautiful illustrations reveal the most unusual and romantic celebrations from around the world. by VashiDiamonds!"; 
        
        $("#show_Card .social a.fb").attr("href","https://www.facebook.com/dialog/feed?app_id=694165360698061&link="+ encodeURIComponent(url+"Home.html") + "&picture="+ encodeURIComponent(CardPictSocialUrl) +"&name="+ encodeURIComponent(Title) +"&caption=%20&description" +encodeURIComponent(Information) + "&redirect_uri=http%3A%2F%2Fwww.facebook.com%2F");
        $("#show_Card .social a.pin").attr("href","http://pinterest.com/pin/create/button/?url="+ encodeURIComponent(url+"Home.html")+"&media="+ encodeURIComponent(CardPictUrl) +"&description="+encodeURIComponent(Information) );
        });
    
    });
 
 $("#show_Card .social a.mail").click(function() {
      var EmailBox = $("#MailForm").css("display");
      if ( EmailBox == "block") {
          $("#MailForm").css("display", "none");
      }
      else {
        TirdIze($("#show_Card  .modal-dialog  .modal-body"),$("#MailForm"));
         $("#MailForm").css("display", "block");
         };
      
     });

 $("#show_Card .close").click(function() {
           
          $("#MailForm").css("display", "none");  
      
     });
 
 
 $('.WordLove').hover(function() {
$(this).css('cursor','pointer');

});
 
$("#show_Card .social a.mail").hover(function() {
$(this).css('cursor','pointer');
}); 
 
 $(".WordLove").each( function() {
    $(this).mouseover(function() {
      MiddleCenterize( $(".WordLove") , $(".WordLove .share"));
      $(this ).children(".share").css("display", "block");
      var WordLove = $(this).attr('data-LoveWord');
    var Description = $(this).children(" p ").text();
      var PicturePath  = "./img/"+(WordLove.replace(/\ /g, '_'))+".jpg";
        $("#PreRederingImg > img").attr("src", PicturePath);
      
      });
    $(this).mouseout(function() {
      MiddleCenterize( $(".WordLove") , $(".WordLove .share"));
      $(this ).children(".share").css("display", "none");   
      });
});
 



 function centralize(element) {
    var PageH = $(window).height();
    var ElemH = element.height();
    var TopDist = (PageH - ElemH)/2;
    if (PageH > ElemH) {
      element.css("top",TopDist + "px");
      };
   
 };

 
 function MiddleCenterize(ParentEl,ChildEl) {
   var PEH = ParentEl.height();
    var CEH = ChildEl.height();
    var PEW = ParentEl.width();
    var CEW = ChildEl.width();
    var TopDist = (PEH - CEH)/2;
    var LeftDist = (PEW - CEW)/2;;
    ChildEl.css("top",TopDist + "px");
    ChildEl.css("left",LeftDist + "px");
 };
 
 function TirdIze(ParentEl,ChildEl) {
  /* var PEH = ParentEl.height();
    var CEH = ChildEl.height();
    var PageH = $(window).height();
    var TopDist = ((PEH - CEH)/2 ) - ((PageH / PEH)*2);
    ChildEl.css("top",TopDist + "px");*/
 };
 
 function windowSize(when,element) {
   var PageH = $(window).height();
   var ElemH = element.height();
   window.alert(PageH + "-->" + ElemH + ":------:" +when)
 }
 
 $(window).scroll(function(){
         var st = $(window).scrollTop();
         $("body").css({'background-position':(st*0.5)+"px " + "top"});
   
   
       $(".WordLove").each( function() {
         var WordLove = $(this).attr('data-LoveWord');
               if (isScrolledIntoView($(this),$(window),500))
                  {
                     var PicturePath  = "./img/"+(WordLove.replace(/\ /g, '_'))+".jpg";
                     $("#PreRederingImg > img").attr("src", PicturePath);
                     centralize( $("#show_Card  .modal-dialog") );

                     };
         
         });
       

})
 
 
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop(),
    	docViewBottom = docViewTop + $(window).height(),
    	elemTop = $(elem).offset().top,
     elemBottom = elemTop + $(elem).height();
   //Is more than half of the element visible
   return ((elemTop + ((elemBottom - elemTop)/2)) >= docViewTop && ((elemTop + ((elemBottom - elemTop)/2)) <= docViewBottom));
}
 
 
 


