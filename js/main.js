'use strict';
$(function () {
  var $accordionLink    = $('.js-accordion-link');

  //accordion for ui-page
  $accordionLink.on('click', function(){
    $(this).parent().toggleClass('active');
    $(this).parent().next().stop().slideToggle(100);
    //e.stopPropagation();
    return false;
  });
  //show accordion block on load
  $accordionLink.parent().addClass('active');
  $accordionLink.parent().next().slideDown(0);
  $('.js-accordion-primary .accordion__head').eq(0).addClass('active');
  $('.js-accordion-primary .accordion__block').eq(0).slideDown(0);

  //accordion primary slideToggle siblings blocks
  $('.js-accordion-link-primary').on('click', function(){
    var currrentBlock = $(this).parent().next();
    var accordion = $(this).closest('.js-accordion-primary');
    if (currrentBlock.is(':visible')) {
      currrentBlock.slideUp('fast');
      $(this).parent().removeClass('active');
    }
    else {
      accordion.find('.accordion__block').slideUp('fast');
      accordion.find('.accordion__link').parent().removeClass('active');
      currrentBlock.slideDown('fast');
      $(this).parent().addClass('active');
    }
    return false;
  });


  //custom tabs

  var $tabWrapper = $('.js-tab'),
    $allTabs = $tabWrapper.find('.ui-tab__content .ui-tab__section'),
    $tabMenu = $tabWrapper.find('.ui-tab__nav .ui-tab__control'),
    $line = $('<div class="line"></div>').appendTo($tabMenu);

  $allTabs.not(':first-of-type').hide();
  $tabMenu.filter(':first-of-type').find(':first').width('100%');

  $tabMenu.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });

  $allTabs.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });

  $tabMenu.on('click', function() {

    var dataTab = $(this).data('tab'),
      $getWrapper = $(this).closest($tabWrapper);

    $getWrapper.find($tabMenu).removeClass('active');
    $(this).addClass('active');

    $getWrapper.find('.line').width(0);
    $(this).find($line).animate({'width':'100%'}, 'fast');
    $getWrapper.find($allTabs).hide();
    $getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').show();
  });

});