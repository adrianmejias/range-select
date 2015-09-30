;
(function($) {
    $.fn.rangeSelect = function(options) {
        var settings = $.extend({}, $.fn.rangeSelect.defaults, options);
        return $(this).each(function() {
            var self = $(this),
                prev_index = -1;
            self.find(settings.selector).click(function(e) {
                e.preventDefault();
                var index = $(this).index();
                $(this).toggleClass('active');
                if (typeof settings.toggle == 'function') {
                    settings.toggle.call(self, this, index, prev_index);
                }
                if ($(this).hasClass('active')) {
                    if (self.find(settings.selector + '.active').length == 2) {
                        var min = self.find(settings.selector + '.active:first').index(),
                            max = self.find(settings.selector + '.active:last').index();
                        self.find(settings.selector + ':not(.active)').each(function() {
                            var _index = $(this).index();
                            if (_index > min && _index < max && _index != index) {
                                $(this).addClass('active');
                                if (typeof settings.activate == 'function') {
                                    settings.activate.call(self, this, index, prev_index);
                                }
                            }
                        });
                    }
                    prev_index = index;
                } else {
                    prev_index = self.find(settings.selector + '.active:first').index();
                }
                if (!self.find('.active').length) {
                    prev_index = -1;
                }
                self.find('.highlight').removeClass('highlight');
            }).hover(function() {
                var index = $(this).index();
                if (prev_index != -1) {
                    if (self.find(settings.selector + '.active').length == 1) {
                        self.find(settings.selector + ':not(.active)').each(function() {
                            var _index = $(this).index();
                            if (_index > prev_index && _index <= index) {
                                $(this).addClass('highlight');
                            } else if (_index < prev_index && _index >= index) {
                                $(this).addClass('highlight');
                            } else {
                                $(this).removeClass('highlight');
                            }
                        });
                    }
                }
            }, function() {
                self.find('.highlight').removeClass('highlight');
            });
        });
    };
    $.fn.rangeSelect.defaults = {
        selector: '.range-item',
        toggle: null,
        activate: null
    };
})(jQuery);