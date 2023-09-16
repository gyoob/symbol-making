// feature1(전공 학과), feature2(선택/필수), feature3(이론/이론&필수) 라디오버튼 클릭이벤트
$(function(){
    $('.feature1 .content div .radio').click(function(){
        $(this).children().addClass('selected');
        $(this).parent().siblings().find('.radio').children().removeClass('selected');
    
        let DE = $('#major1 .radio div')
        let ME = $('#major2 .radio div')
        let NSE = $('#major3 .radio div')
        
        if( DE.hasClass('selected') ){
            hue1 = 225, hue2 = 184;
        }
        if( ME.hasClass('selected') ){
            hue1 = 50, hue2 = 20;
        }
        if( NSE.hasClass('selected') ){
            hue1 = 190, hue2 = 164;
        }

        if($('#opt .radio div').hasClass('selected')){
            hue1 = hue1-20, hue2 = hue2-20
        }
    })

    $('.feature2 div .radio').click(function(){
        if( $(this).children().hasClass('selected') ) return null;

        $(this).children().addClass('selected');
        $(this).parent().siblings().find('.radio').children().removeClass('selected');
    
        let OPT = $('#opt .radio div')
        let ESSEN = $('#essen .radio div')
        
        if( OPT.hasClass('selected') ){
            hue1 = hue1-20, hue2 = hue2-20, sat = sat-10, bri = bri-10;
        }else if( ESSEN.hasClass('selected') ){
            hue1 = hue1+20, hue2 = hue2+20, sat = sat+10, bri = bri+10;
        }
    })

    $(function(){
        $('.feature3 div .radio').click(function(){
            $(this).children().addClass('selected');
            $(this).parent().siblings().find('.radio').children().removeClass('selected');
        
            let THEO = $('#theo .radio div')
            let THEO_PRAC = $('#theo_prac .radio div')
            
            if( THEO.hasClass('selected') ){
                leftMirror = true;
            }
            if( THEO_PRAC.hasClass('selected') ){
                leftMirror = false;
            }
        })
    })
})

// feature4(학점) 라디오버튼 클릭이벤트
$(function(){
    $('.feature4 .content div .radio').click(function(){
        $(this).children().addClass('selected');
        $(this).parent().siblings().find('.radio').children().removeClass('selected');
    
        let ONE = $('#one .radio div')
        let TWO = $('#two .radio div')
        let THREE = $('#three .radio div')
        
        if( ONE.hasClass('selected') ){
            addLine = 0;
        }
        if( TWO.hasClass('selected') ){
            addLine = 1;
        }
        if( THREE.hasClass('selected') ){
            addLine = 2
        }
    })
})