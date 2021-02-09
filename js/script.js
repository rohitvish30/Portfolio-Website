var $ = jQuery.noConflict();

$(document).ready(function() {
//mobile search bar
  $('.menu-icon').click(
    function(){
      $(this).toggleClass("open");
      if($(this).hasClass('open')) {
        $('.nav-bar .links').addClass('show');
      }else{
        $('.nav-bar .links').removeClass('show');
      }
    }
  );

  $('.labels .system-design').click(
    function(){
      $('.lists .list').removeClass('show');
      $('.labels .title').removeClass('active');
      $(this).addClass('active')
      $('.lists .system-design').addClass('show');
    }
  )
  $('.labels .web-design').click(
    function(){
      $('.lists .list').removeClass('show');
      $('.labels .title').removeClass('active');
      $(this).addClass('active')
      $('.lists .web-design').addClass('show');
    }
  )
  $('.labels .nlp-engg').click(
    function(){
      $('.lists .list').removeClass('show');
      $('.labels .title').removeClass('active');
      $(this).addClass('active')
      $('.lists .nlp-engg').addClass('show');
    }
  )
  $('.labels .data-analyst').click(
    function(){
      $('.lists .list').removeClass('show');
      $('.labels .title').removeClass('active');
      $(this).addClass('active')
      $('.lists .data-analyst').addClass('show');
    }
  )
});




const progBar=document.querySelector('.bar-prog')
const htmlBar=document.querySelector('.bar-html')
const nlpBar=document.querySelector('.bar-nlp')
const dataBar=document.querySelector('.bar-data')

var t1=new TimelineLite()

t1.fromTo(progBar, .75,{width:`calc(0% - 6px)`},{width:`calc(90% - 6px)`,ease: Power4.easeOut})
    .fromTo(htmlBar, .75,{width:`calc(0% - 6px)`},{width:`calc(75% - 6px)`,ease: Power4.easeOut})
    .fromTo(nlpBar, .75,{width:`calc(0% - 6px)`},{width:`calc(65% - 6px)`,ease: Power4.easeOut})
    .fromTo(dataBar, .75,{width:`calc(0% - 6px)`},{width:`calc(85% - 6px)`,ease: Power4.easeOut})

const controller=new ScrollMagic.Controller();
const scene=new ScrollMagic.Scene({
    triggerElement:'.skill',
    triggerHook:0
})
.setTween(t1)
.addTo(controller)



