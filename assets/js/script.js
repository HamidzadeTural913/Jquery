$(document).ready(function(){
  $(".beyan").hide();
  $(".balans").hide();
  $(".about").click(function(){
    $(".balans").hide();
    $(".beyan").hide();
   $(".sifaris").show();
  })
  $(".aboutt").click(function(){
    $(".balans").hide();
    $(".sifaris").hide();
    $(".beyan").show();
  })
  $(".abouttt").click(function(){
    $(".beyan").hide();
    $(".sifaris").hide();
    $(".balans").show();

  })
  $(".tittle").click(function(){
      if($(this).hasClass("active")){
         $(this).removeClass("active");
         $(this)
           .siblings(".content")
           .slideUp(400);
           $(this).children("i").removeClass("fa-arrow-down")
           .addClass("fa-arrow-up");
        } 
      else{
         $(".tittle").removeClass("active");
         $(this).addClass("active");
         $(".content").slideUp(400);
         $(this)
           .siblings(".content")
           .slideDown(400);
           $(this).children("i").removeClass("fa-arrow-up")
           .addClass("fa-arrow-down");
        }

    })

})



