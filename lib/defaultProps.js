export default function () {
    return {
        baseOn: {
            // "left/center/right top/center/bottom"
            el: 'left top',
            // "left/center/right top/center/bottom"
            target: 'left bottom'
        },
        onPosition: function (position, el, target, offsetParent) {
            return {
                x:0,
                y:0
            }
        },
        useCssTransform: true,
    }
}
