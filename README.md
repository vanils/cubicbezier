# Callbacks

jQuery plugin for cubic bezier easings.

## Quick start

    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="jquery.cubicbezier.js"></script>
    <script type="text/javascript">
    
    var x1 = 0.41,
        y1 = 0.175,
        x2 = 0.345,
        y2 = 0.920;

    jQuery('#my-element').animate({
        width: '400px'
    }, {
        easing: $.cubicBezier(x1, y1, x2, y2)
    });

    </script>

## Predefined easings

All regular CSS transition easings are predefined. Names for those easings are `cubicBezierEase`, `cubicBezierEaseIn`, `cubicBezierEaseOut`, `cubicBezierEaseInOut` and `cubicBezierLinear`.

#### Using predefined easings

    jQuery('#my-element').animate({
        width: '400px'
    }, {
        easing: 'cubicBezierEase'
    });
