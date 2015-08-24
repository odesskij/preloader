class Preloader
  constructor: (options) ->
    @_.defaults options, {
      speed: 500
      prefix: @_.uniqueId 'preload_'
      size: 5
      color: '#FFFFFF'
    }
    {@el, @speed, @prefix} = options

    @el = @el[0]

    @styles = @$.createStyle @styles options
    @$.append document.getElementsByTagName('head')[0], @styles

    @preloader = @html options

    @el.innerHTML = @preloader

  ### show preloader ###
  show: (callback = @_.noop) ->
    @$.fadeIn @el.childNodes[0], callback

    ### hide preloader ###
  hide: (callback = @_.noop) ->
    @$.fadeOut @el.childNodes[0], callback

    ### destroy preloader ###
  destroy: () ->
    @$.remove @el.childNodes[0]
    @$.remove @styles
#    do @_styles.remove