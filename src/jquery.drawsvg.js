/*! jQuery DrawSVG v1.1.0 (2016-10-05) - git.io/vGFa5 - Copyright (c) 2016 Leonardo Santos - MIT License */
!(function (t) {
  'function' == typeof define && define.amd
    ? define(['jquery'], t)
    : 'object' == typeof module && module.exports
    ? (module.exports = function (e, n) {
        return (
          void 0 === n &&
            (n =
              'undefined' != typeof window
                ? require('jquery')
                : require('jquery')(e)),
          t(n),
          n
        )
      })
    : t(jQuery)
})(function (t) {
  'use strict'
  var e = 'drawsvg',
    n = {
      duration: 1e3,
      stagger: 200,
      easing: 'swing',
      reverse: !1,
      callback: t.noop,
    },
    a = (function () {
      var a = function (a, o) {
        var i = this,
          r = t.extend(n, o)
        ;(i.$elm = t(a)),
          i.$elm.is('svg') &&
            ((i.options = r),
            (i.$paths = i.$elm.find('path')),
            (i.totalDuration = r.duration + r.stagger * i.$paths.length),
            (i.duration = r.duration / i.totalDuration),
            i.$paths.each(function (t, e) {
              var n = e.getTotalLength()
              ;(e.pathLen = n),
                (e.delay = (r.stagger * t) / i.totalDuration),
                (e.style.strokeDasharray = [n, n].join(' ')),
                (e.style.strokeDashoffset = n)
            }),
            i.$elm.attr('class', function (t, n) {
              return [n, e + '-initialized'].join(' ')
            }))
      }
      return (
        (a.prototype.getVal = function (e, n) {
          return 1 - t.easing[n](e, e, 0, 1, 1)
        }),
        (a.prototype.progress = function (t) {
          var e = this,
            n = e.options,
            a = e.duration
          e.$paths.each(function (o, i) {
            var r = i.style
            if (1 === t) r.strokeDashoffset = 0
            else if (0 === t) r.strokeDashoffset = i.pathLen + 'px'
            else if (t >= i.delay && t <= a + i.delay) {
              var s = (t - i.delay) / a
              r.strokeDashoffset =
                e.getVal(s, n.easing) * i.pathLen * (n.reverse ? -1 : 1) + 'px'
            }
          })
        }),
        (a.prototype.animate = function () {
          var n = this
          n.$elm.attr('class', function (t, n) {
            return [n, e + '-animating'].join(' ')
          }),
            t({ len: 0 }).animate(
              { len: 1 },
              {
                easing: 'linear',
                duration: n.totalDuration,
                step: function (t, e) {
                  n.progress.call(n, t / e.end)
                },
                complete: function () {
                  n.options.callback.call(this),
                    n.$elm.attr('class', function (t, n) {
                      return n.replace(e + '-animating', '')
                    })
                },
              }
            )
        }),
        a
      )
    })()
  t.fn[e] = function (n, o) {
    return this.each(function () {
      var i = t.data(this, e)
      i && '' + n === n && i[n] ? i[n](o) : t.data(this, e, new a(this, n))
    })
  }
})
