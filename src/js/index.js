import "../scss/index.scss";

$(document).ready(function() {
  // spring tabs
  (function() {
    let $tabs = $(".spring-tabs-container .spring-tab");
    let $navs = $(".spring-tabs-container .spring-tabs-nav");
    function initSpringTabs(index = 0) {
      $navs.each(function(i, nav) {
        $(nav).removeClass("spring-active-tab");
      });
      $tabs.each(function(i, tab) {
        $(tab).css("display", "none");
        $tabs.eq(index).css("display", "");
        $navs.eq(index).addClass("spring-active-tab");
      });
    }
    initSpringTabs();
    $navs.each(function(i, _nav) {
      let nav = $(_nav);
      nav.click(function(e) {
        e.preventDefault();
        let index = nav.attr("data-index");
        initSpringTabs(index);
      });
    });
  })();
});
