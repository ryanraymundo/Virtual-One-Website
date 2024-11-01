$(function () {

    var $hamburger = $('header .fa-bars'),
        $mainNav = $('header .main-nav'),
        $loginIcon = $('header .fa-user'),
        $subNav = $('header .sub-nav');

    $hamburger.click(function () {
        $mainNav.toggleClass('open');
        if ($subNav.hasClass('open')) {
            $subNav.toggleClass('open');
        }
    });

    $loginIcon.click(function () {
        $subNav.toggleClass('open');
        if ($mainNav.hasClass('open')) {
            $mainNav.toggleClass('open');
        }
    });

    //$('video#loader.intro-video').remove();

     
    $( "#but1" ).click(function() {
         
        var val1 = $("#person1").val(); //nana tay value from textfield
        //formula
        var sum1 = val1 * 10;
        //we will place the value to total field
        $("#total1").val(sum1);


    });
    $( "#but2" ).click(function() {
          var val2 = $("#person2").val(); //nana tay value from textfield
        //formula
        var sum2 = val2 * 15;
        //we will place the value to total field
        $("#total2").val(sum2);

    });
    $( "#but3" ).click(function() {
          var val3 = $("#person3").val(); //nana tay value from textfield
        //formula
        var sum3 = val3 * 25;
        //we will place the value to total field
        $("#total3").val(sum3);
    });
    


});
