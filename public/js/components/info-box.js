!function(f){"use strict";Berserk.behaviors.info_box_init={attach:function(e,n){var a=f(e).parent().find(".wave-hover:not(.rendered)").addClass("rendered");a.length&&a.each(function(){var e,a,n=f(this),r=1e3*n.data("wh-delay"),t=1e3*n.data("wh-speed");e=isNaN(parseFloat(r))?1e3:r,a=isNaN(parseFloat(t))?1e3:t;var i=n.data("wh-repeat"),o=n.find(".wpb_column"),d=o.length,s=0;function c(){var n=setInterval(function(){var e=o.eq(s);o.removeClass("current"),e.addClass("current"),d<++s&&(s=0,clearInterval(n))},a)}!0===i&&setInterval(function(){c()},e+d*a),n.waypoint({handler:function(e){c()},offset:"70%"})}),f(e).parent().find(".info-box__wrapper-icon:not(.rendered)").length&&f(".info-box__wrapper-icon").each(function(){f(this).addClass("rendered");var e=f(this),n=e.find("svg").clone();e.find(".icon-after").append(n)})}}}(jQuery);