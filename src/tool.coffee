_ = Preloader::_ = {}

_.noop = () ->

_.uniqueId = do () ->
  idCounter = 0
  (prefix) ->
    id = ++idCounter
    ###TODO: ###
    "#{prefix}#{id}#{Date.now()}"

_.defaults = (obj, args...) ->
  for source in args
    if source?
      for prop of source
        if obj[prop] == undefined then obj[prop] = source[prop]

  obj

