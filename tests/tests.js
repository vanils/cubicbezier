
$(function () {

    var tests = {};

    tests.custom = {
        el: $('#custom-block'),
        easing: $.cubicBezier(0.405, -0.555, 0.665, 1.650)
    };

    tests.ease = {
        el: $('#ease-block'),
        easing: 'cubicBezierEase'
    };

    tests.easeIn = {
        el: $('#ease-in-block'),
        easing: 'cubicBezierEaseIn'
    };

    tests.easeOut = {
        el: $('#ease-out-block'),
        easing: 'cubicBezierEaseOut'
    };

    tests.easeInOut = {
        el: $('#ease-in-out-block'),
        easing: 'cubicBezierEaseInOut'
    };

    tests.linear = {
        el: $('#linear-block'),
        easing: 'cubicBezierLinear'
    };

    $.each(tests, function (name) {

        var test = this,
            inAnim,
            outAnim;

        inAnim = function () {
            test.el.animate({
                width: '400px'
            }, {
                easing: test.easing,
                complete: outAnim,
                duration: 1000
            });
        };

        outAnim = function () {
            test.el.animate({
                width: '100px'
            }, {
                easing: test.easing,
                complete: inAnim,
                duration: 1000
            });
        };

        inAnim();
    });

});