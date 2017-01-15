'use strict';
$(function () {
  var $accordionLink    = $('.js-accordion-link');

  //accordion for ui-page (global)
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

  /*accordion primary slideToggle siblings blocks variant 1*/
  $('.js-accordion-link-primary').on('click', function(e){
    e.preventDefault();
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
  });
  /*accordion primary slideToggle siblings blocks variant 1.1
  $('.js-accordion-link-primary').click(function(e){
    e.preventDefault();
    var $this = $(this),
        duration = 300;
    $this.parent().toggleClass('active').siblings('.accordion__head').removeClass('active');
    $this.parent().siblings('.accordion__block').stop(true,true).slideUp(duration);
    $this.parent().next().not(':visible').stop(true,true).slideDown(duration);
  });*/

  //ui-accordion  variant 2
  $('.js-ui-accordion .ui-accordion__link').on('click', function(e){
    e.preventDefault();
    var $this = $(this),
      $itemAccordion = $this.closest('.ui-accordion__item'),
      $listAccordion = $this.closest('.ui-accordion__list'),
      $itemsAccordion = $listAccordion.find('.ui-accordion__item'),
      $contentAccordion = $itemAccordion.find('.ui-accordion__inner-list'),
      $contentsAccordion = $listAccordion.find('.ui-accordion__inner-list'),
      duration = 300;
      if(!$itemAccordion.hasClass('active')) {
        $itemsAccordion.removeClass('active');
        $itemAccordion.addClass('active');
        $contentsAccordion.stop(true,true).slideUp(duration);
        $contentAccordion.stop(true,true).slideDown(duration);
      } else {
        $contentAccordion.stop(true,true).slideUp(duration);
        $itemAccordion.removeClass('active');
      }
  });


  //custom tabs variant1
  var $tabWrapper = $('.js-tab'),
    $allTabs = $tabWrapper.find('.ui-tab__content .ui-tab__section'),
    $tabMenu = $tabWrapper.find('.ui-tab__nav .ui-tab__control'),
    $line = $('<div class="line"></div>').appendTo($tabMenu);
  //hide content tabs (not first)
  $allTabs.not(':first-of-type').hide();
  $tabMenu.filter(':first-of-type').find(':first').width('100%');
  //data ettribute for tabs control and tabs content section
  $tabMenu.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });
  $allTabs.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });
  $tabMenu.on('click', function(e) {
    e.preventDefault();
    var tabPosition = $(this).data('tab'),
      $getWrapper = $(this).closest($tabWrapper);
    $getWrapper.find($tabMenu).removeClass('active');
    $(this).addClass('active');
    $getWrapper.find('.line').width(0);
    $(this).find($line).animate({'width':'100%'}, 'fast');
    $getWrapper.find($allTabs).removeClass('fadeIn').hide();
    $getWrapper.find($allTabs).filter('[data-tab='+tabPosition+']').addClass('fadeIn').show();
  });

  //custom tabs variant2
  var $uiTabsWrapper = $('.js-tabs'),
    $uiTabs = $uiTabsWrapper.find('.ui-tabs__content .ui-tabs__section'),
    $uiTabsMenu = $uiTabsWrapper.find('.ui-tabs__nav .ui-tabs__control'),
    $uiTabsLink = $uiTabsWrapper.find('.ui-tabs__nav .ui-tabs__link');
  $uiTabsMenu.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });
  $uiTabs.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });

  $uiTabsLink.on('click', function(e){
    e.preventDefault();
    var $itemUiTabs = $(this).closest('.ui-tabs__control'),
      uiTabsPosition = $itemUiTabs.data('tab');
    $uiTabs.filter('[data-tab='+uiTabsPosition+']').addClass('active fadeIn').siblings().removeClass('active fadeIn');
    $itemUiTabs.addClass('active').siblings().removeClass('active');
  });

  //custom input number btn
  //number input change on button quantity down click
  var $btnQuantityDown                = $('.js-quantity-down'), //number input quantity-down button
      $btnQuantityUp                  = $('.js-quantity-up'); //number input quantity-up button
  //number input change on button quantity down click
  $btnQuantityDown.on('click', function(){
    var $numberInput = $(this).next();
    if ($numberInput.val() > 0) {
      $numberInput.val($numberInput.val() - 1);
    }
  });
  //number input change on button quantity up click
  $btnQuantityUp.on('click', function(){
    var $numberInput = $(this).prev();
    $numberInput.val(+$numberInput.val() + 1);
  });

  //custom select list
  var $selectList                     = $('.js-select-list'), //ui-select list
      $selectMenu                     = $('.js-select-menu'), //ui-select list menu
      $selectLink                     = $('.js-select-link'); //ui-select list link open
  //ui-select functional
  $selectList.on('click', function (e) {
    e.preventDefault();
    var $currentList =  $(this);
    $currentList.addClass('is-current');
    $selectList.each(function(){
      if(!$(this).hasClass('is-current')) {
        $(this).removeClass('active');
      }
    });
    $currentList.toggleClass('active');
    $currentList.removeClass('is-current');
    return false;
  });

  $selectLink.on('click', function(e){
    e.preventDefault();
    var $currentLink = $(this),
      typeMenu = $currentLink.parent().parent().data('type'),
      currentSelectText = $currentLink.text(),
      $selectTextElement = $('[data-select='+ typeMenu + ']'),
      $inputElement = $selectTextElement.find('.js-select-value ').children();
    $selectTextElement.children().children('.js-select-text').text(currentSelectText);
    $inputElement.val(currentSelectText);
  });


});