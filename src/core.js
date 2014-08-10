(function (jQuery) {

"use strict";

var Ease;

/*
 *
 * Fail if if jQuery is missing
 *
 */
if (!jQuery) {
    throw new Error('Cubic Bezier is dependant on jQuery.');
}

/*
 *
 * Fail if namespace is already taken.
 *
 */
if (typeof jQuery.cubicBezier !== 'undefined') {
    throw new Error('Namespace \'cubicBezier\' on jQuery object is already taken.');
}

/*
 *
 * Ease costructor.
 *
 */
Ease = function (x1, y1, x2, y2) {
    this.va = 1 - 3 * x2 + 3 * x1;
    this.vb = 3 * x2 - 6 * x1;
    this.vc = 3 * x1;
    this.y1x3 = y1 * 3;
    this.y2x3 = y2 * 3;
};

/*
 *
 * Getting value for easing.
 *
 */
Ease.prototype.getValue = function (offset) {

    var y1x3 = this.y1x3,
        y2x3 = this.y2x3,
        va = this.va,
        vb = this.vb,
        vc = this.vc,
        x = offset,
        slope,
        cx,
        i;

    i = 0;

    for (i; i < 3; i++) {
        slope = 3 * va * x * x + 2 * vb * x + vc;

        if (!slope) {
            return x;
        }

        cx = ((va * x + vb) * x + vc) * x - offset;
        x -= (cx / slope);
    }

    return (((1 - y2x3 + y1x3) * x + (y2x3 - 2 * y1x3)) * x + y1x3) * x;
};

/*
 *
 * Extending jQuery.
 *
 */
jQuery.extend({

    cubicBezier: function (x1, y1, x2, y2) {

        var name = 'cubicbezier_' + [x1, y2, x2, y2].join('_'),
            ease;

        if (typeof jQuery.easing[name] === 'undefined') {
            ease = new Ease(x1, y1, x2, y2);

            jQuery.easing[name] = function (x) {
                return ease.getValue(x);
            };
        }

        return name;
    }
});

/*
 *
 * Adding basic CSS transition easings.
 *
 */
jQuery.easing.cubicBezierEase = jQuery.easing[jQuery.cubicBezier(0.25, 0.1, 0.25, 1)];
jQuery.easing.cubicBezierEaseIn = jQuery.easing[jQuery.cubicBezier(0.42, 0, 1, 1)];
jQuery.easing.cubicBezierEaseOut = jQuery.easing[jQuery.cubicBezier(0, 0, 0.58, 1)];
jQuery.easing.cubicBezierEaseInOut = jQuery.easing[jQuery.cubicBezier(0.42, 0, 0.58, 1)];
jQuery.easing.cubicBezierLinear = jQuery.easing[jQuery.cubicBezier(0, 0, 1, 1)];  // just to be exact

}(window.jQuery));