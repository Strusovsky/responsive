//= require jquery.easings.min
//= require jquery.fullPage
//= require jquery.slimscroll.min

$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['top', 'about', 'step-1', 'step-2', 'step-3', 'step-4', 'step-5', 'step-6'],
    menu: '#menu'
  });
});