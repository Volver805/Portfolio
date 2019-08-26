let i;
let state = 'home';
let x =  document.body.offsetHeight;
let y = document.body.offsetWidth;
const shape = document.querySelector('.shape');
const size = $('.about-button').css('font-size');
const updateColors = ()=> {
    let color;
    if(i == 1) {
        color = "#F96566";
        $('.line').css('display','none');
        $('.arrow-down').fadeIn();
    }
    else if(i == 2) {
        color = '#56CCF2';
        $('.line').css('display','none');
        $('.arrow-down').fadeIn();
    }
    else {
        color = '#0059d1';
        $('.arrow-down').css('display','none');
        $('.line').fadeIn();
    }
        setTimeout(() => {
            $('.text-content h2').css('color',color)
        }, 200);
        $('.view-source').animate({backgroundColor:color});
        $('.arrow-down').animate({borderColor:color});
        $('.view-source').attr('onclick',`openLink(${i})`);
}
const openLink = (project)=> {
    if(project == 1) {
        window.open('https://github.com/Volver805', '_blank');

    }
    else if (project == 2) {
        window.open('https://github.com/Volver805/ems', '_blank');

    }
    else {
        window.open('https://github.com/Volver805/Social-Media-Website', '_blank');

    }


}
const updateButtons = ()=> {
    $('.about-button')  .stop(true,true).animate({
        paddingTop:'20px',
    },200);
    $('.portfolio-button').stop(true,true).animate({
        paddingTop:'20px',
        top:'0px',
    },200);
    $('.background').stop(true,true).animate({
        fontSize:'0.7em'
    })
    $('#about-paragraph').css('display','none');
    $("#portfolio-paragraph").css('display','none');
    $('.about-button').css('height','5%');
    $('.portfolio-button').css('height','5%');
}
const init = () => {
    $('.navbar h1').animate({
        fontSize:'24px'
    },400);
    state = 'home';
    $('.about-content').fadeOut(100);
    setTimeout( () => {
    colorChange('twitter','black');
    $('#github-icon').attr('src','github.png');
    $('#email-icon').attr('src','email-black.png');
    $('#about-paragraph').css('display','block');
    $("#portfolio-paragraph").css('display','block');
    $('.about-button').css('height','40%');
    $('.portfolio-button').css('height','40%');
    $('.portfolio-button').css('color','black');
    $('.about-button').css('color','white');
    $('nav').css('color','white');
    hideProject(i);
    $('.bottom-bar').css('height','64px');

    $('.about-button')  .stop(true,true).animate({
        paddingTop:'160px',
    },400);
    $('.portfolio-button').stop(true,true).animate({
        paddingTop:'160px',
        top:'240px',
    },400);
    $('.background').stop(true,true).animate({
        fontSize:size
    },400);
    $('.shape').stop(true,true).animate({
        borderWidth:`${x}px`,
        borderLeftWidth:`${y}px`
    },300);

    },150);

    $('.portfolio-content').fadeOut(100);
    window.removeEventListener('wheel',changeProject,true);
    $('.contact-form').fadeOut();

}

const updateShape = ()=> {
    x =  document.body.offsetHeight;
    y = document.body.offsetWidth;  
    if(state == 'home') {
        shape.style.borderBottom = `${x}px solid #f3f3f3`;
        shape.style.borderLeft = `${y}px solid transparent`;
    }
    else if(state == 'portfolio') {
        shape.style.borderBottom = `${x*2}px solid #f3f3f3`;
        shape.style.borderLeft = `${y*2}px solid transparent`;
    }

}

const hoverListener = el => {
    $(`.${el}-button`).hover(
    ()=> {
        $(`#${el}-paragraph`).stop(true,true).animate({
            top:'-40px',
            opacity:'1'
        },1000);
    },
    ()=> {
        $(`#${el}-paragraph`).stop(true,true).animate({
            opacity:0,
            top:'0'
        })
    }
    )
}

const colorChange = (el,color) => {
        $(`#${el}-icon`).attr('src',`${el}-${color}.png`);
    }


const changeProject = (e)=> {
        if (e.deltaY < 0) {
            if (i > 1) {
            hideProjectReversed(i);
            i--;
            updateColors();
            showProject(i);
            window.removeEventListener('wheel',changeProject,true);
            setTimeout(()=>{window.addEventListener('wheel',changeProject,true);},1000);
            }
        }
        if (e.deltaY > 0) {
            if(i < 3) {
            hideProject(i);
            i++;
            updateColors();
            showProject(i);
            window.removeEventListener('wheel',changeProject,true);
            setTimeout(()=>{window.addEventListener('wheel',changeProject,true);},1000);
            }
        }
    }

const showProject = (el)=>{
        $(`#${el}`).css('display','block');
        $(`#${el}`).stop(true,true).animate({
        top:'0',
        opacity:1
    },800);
        setTimeout(() => {
            $(`#${el} .image-content`).animate({
            opacity:1,
            top:'10%'
        },800)
        }, 500);
}
const hideProjectReversed = (el) => {
    $(`#${el}`).css('display','block');
        $(`#${el}`).stop(true,true).animate({
        top:'100%',
        opacity:0
    },800);
}
const hideProject = (el)=> {
        $(`#${el}`).animate({
            top:'-100%'
            },400);
}

shape.style.borderBottom = `${x}px solid #f3f3f3`;
shape.style.borderLeft = `${y}px solid transparent`;

const fun_1 = ()=> {
    updateButtons();
    state = 'about';
    hideProject(i);
    $('.portfolio-button').css('color','white');
    $('.about-button').css('color','white');
    $('nav').css('color','white');

    $('.shape').animate({
        borderWidth:'0px'
    },'slow');      
  
    colorChange('github','white');
    colorChange('email','white');
    colorChange('twitter','white');
    $('.portfolio-content').fadeOut(100);

    window.removeEventListener('wheel',changeProject,true);
}

$('.about-button').click(()=> {
    fun_1();
    $('.bottom-bar').css('height','64px');
    $('.navbar h1').animate({
        fontSize:'24px'
    },400);
    setTimeout(()=> {
        $('.about-content').fadeIn();
    },650);
    $('.contact-form').fadeOut();

});
$('.portfolio-button').click(()=> {
    i = 1;
    $('.project').css('top','100%');
    updateColors();
    state = 'portfolio';    
    $('.about-content').fadeOut(100);
    colorChange('twitter','black');
    $('#github-icon').attr('src','github.png');
    $('#email-icon').attr('src','email-black.png');
    updateButtons();
    $('.about-button').css('color','black');
    $('.portfolio-button').css('color','black');
    $('nav').css('color','black');
    $('.shape').animate({
        borderLeftWidth:`${y*2}px`,
        borderBottomWidth:`${x*2}px`
    },100);
    $('.portfolio-content').fadeIn('slow');
    window.addEventListener('wheel',changeProject,true);
    setTimeout(showProject(i),500);
    $('.bottom-bar').css('height','64px');
    $('.navbar h1').animate({
        fontSize:'24px'
    },400);
    $('.contact-form').fadeOut();
    
})

$('.navbar h1').click(()=>
{
    init();

})
const emailValidation = (email)=> {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const sendMessage = ()=> {
    const email = $("#contact-email").val();
    const sub = $('#contact-subject').val();
    const message = $('#contact-message').val();
    if(emailValidation(email)) {
        if(sub) {
       
            $.ajax({
                type:'POST',
                url:'mail.php',
                data:`email=${email}&sub=${sub}&message=${message}`,
                success : result => {
                    if(result == 'success') {
                    $('#contact-email').val('');
                    $('#contact-subject').val('');
                    $('#contact-message').val('');
                    $('#message-send').val('Message Sent!');
                     $('#message-send').addClass('email-sent');
                     setTimeout(() => {
                         $('#message-send').val('send message');
                         $('#message-send').removeClass('email-sent');
                     },2000);
                    }
                }
            });
        }
        else {
            $('#contact-subject').val();
            $('#contact-subject').css('border','1px solid #F96566');
        }
    }
    else {
        $('#contact-email').val();
        $('#contact-email').css('border','1px solid #F96566');
    }

}
const contactForm = ()=> {
    $('.about-content').fadeOut();
    $('.bottom-bar').css('height','120px');
    $('.navbar h1').animate({
        fontSize:'50px'
    },400);
    fun_1();
    $('.contact-form').fadeIn();
};

$('.contact-button').click(contactForm);  
$('#send-link').click(contactForm);
$('#message-send').click(sendMessage);
$('#contact-email,#contact-subject').click(()=>{
    $('.contact-element').css('border','0');
})
hoverListener('about');
hoverListener('portfolio');