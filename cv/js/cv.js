 $(document).ready(function(){
    'use strict';
     
     $('.tab-overview ul li').on('click' , function (){
         $(this).addClass('active').siblings().removeClass('active');
     });

     
     
     $('.PERSONAL-PROFILE-click').click(function(){
         $('.PERSONAL-PROFILE').fadeIn();
         $('.CONTACT').fadeOut(500);
         $('.SKILLS').fadeOut(500);
         $('.EXPERIENCE').fadeOut(500);
     });
     
     $('.SKILLS-click').click(function(){
         $('.PERSONAL-PROFILE').fadeOut();
         $('.SKILLS').fadeIn(1000);
         $('.CONTACT').fadeOut(500);
         $('.EXPERIENCE').fadeOut(500);
     });
     
     $('.CONTACT-click').click(function(){
         $('.CONTACT').fadeIn();
         $('.PERSONAL-PROFILE').fadeOut(500);
         $('.SKILLS').fadeOut(500);
         $('.EXPERIENCE').fadeOut(500);
     });
     
     $('.EXPERIENCE-click').click(function(){
         $('.EXPERIENCE').fadeIn();
         $('.PERSONAL-PROFILE').fadeOut(500);
         $('.CONTACT').fadeOut(500);
         $('.SKILLS').fadeOut(500);
     });


    });
    
});     