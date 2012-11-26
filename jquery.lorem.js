/*
 * Date: Nov 26 2012
 * Source: www.bondarewicz.com
 * Author:Lukasz Bondarewicz (lukasz@bondarewicz.com)
 */
(function(window, $){
  var Lorem = function(elem, options){
      this.elem = elem;
      this.$elem = $(elem);
      this.options = options;
      this.metadata = this.$elem.data('lorem-options');
    };

  Lorem.prototype = {
    defaults: {
      length: 'full',
    },
    init: function() {
      this.config = $.extend({}, this.defaults, this.options, this.metadata);

      this.displayLorem(this.defaults.length);

      return this;
    },
    displayLorem: function(length) {
      
      if (this.config.length === 'one') $(this.elem).html("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
      if (this.config.length === 'two') $(this.elem).html("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
      if (this.config.length === 'three') $(this.elem).html("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.");
      if (this.config.length === 'full') $(this.elem).html("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

    }
  }

  Lorem.defaults = Lorem.prototype.defaults;

  $.fn.Lorem = function(options) {
    return this.each(function() {
      new Lorem(this, options).init();
    });
  };

  window.Lorem = Lorem;
})(window, jQuery);