// $Id: views_nivo_slider.js,v 1.1.2.5.2.2 2010/06/18 15:04:17 pedrofaria Exp $ 
Drupal.behaviors.views_nivo_sliderBehavior = function (context) {
  $('.views-nivo-slider').each(function() {
    var id = $(this).attr('id');
    var vns = $(this);
    var cfg = Drupal.settings.views_nivo_slider[id];

    // Fix sizes
    vns.data('hmax', 0).data('wmax', 0);
    $('img', vns).each(function () {
      hmax =  (vns.data('hmax') > $(this).height()) ? vns.data('hmax') : $(this).height();
      wmax =  (vns.data('wmax') > $(this).width()) ? vns.data('hmax') : $(this).width();

      vns.width(wmax).height(hmax).data('hmax', hmax).data('wmax', wmax);
    });

    vns.nivoSlider(cfg);
  });
};
