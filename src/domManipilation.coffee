#http://youmightnotneedjquery.com/
$ = Preloader::$ = {}

$.append = (el, child) ->
  el.appendChild child

$.remove = (el) ->
  el.parentNode.removeChild(el)

$.createStyle = (styles) ->
  style = document.createElement('style')
  style.innerHTML = styles
  style.type = 'text/css'
  return style

$.fadeIn = (element, callback) ->
  FX.fadeIn element, {
    duration: 500
    complete: callback
  }
$.fadeOut = (element, callback) ->
  FX.fadeOut element, {
    duration: 500
    complete: callback
  }


FX = do ->
  FX =
    easing:
      linear: (progress) ->
        progress
      quadratic: (progress) ->
        progress ** 2
      swing: (progress) ->
        0.5 - (Math.cos(progress * Math.PI) / 2)
      circ: (progress) ->
        1 - Math.sin(Math.acos(progress))
      back: (progress, x) ->
        progress ** 2 * ((x + 1) * progress - x)
      bounce: (progress) ->
        a = 0
        b = 1
        result = undefined
        loop
          if progress >= (7 - (4 * a)) / 11
            return -((11 - (6 * a) - (11 * progress)) / 4) ** 2 + b ** 2
          a += b
          b /= 2
        return
      elastic: (progress, x) ->
        2 ** (10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress)
    animate: (options) ->
      start = new Date
      id = setInterval((->
        timePassed = new Date - start
        progress = timePassed / options.duration
        if progress > 1
          progress = 1
        options.progress = progress
        delta = options.delta(progress)
        options.step delta
        if progress == 1
          clearInterval id
          options.complete()
        return
      ), options.delay or 10)
      return
    fadeOut: (element, options) ->
      to = 1
      @animate
        duration: options.duration
        delta: (progress) ->
          progress = @progress
          FX.easing.swing progress
        complete: options.complete
        step: (delta) ->
          element.style.opacity = to - delta
          return
      return
    fadeIn: (element, options) ->
      to = 0
      @animate
        duration: options.duration
        delta: (progress) ->
          progress = @progress
          FX.easing.swing progress
        complete: options.complete
        step: (delta) ->
          element.style.opacity = to + delta
          return
      return