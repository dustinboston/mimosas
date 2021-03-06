{ViewObserver} = require './view_observer'
{ControllerContext} = require './controller_context'
{ControllerStrategy} = require './controller_strategy'

class ViewComponent extends ViewObserver

  defaultControllerClass: ControllerStrategy

  constructor: (@element) ->
    super
    throw new ReferenceError 'element is not defined' unless @element
    @setController new @defaultControllerClass()

  setModel: (@model) ->
    @model.attach @
    @controller.setModel @model

  getModel: () ->
    @model

  setController: (controller) ->
    @controller = new ControllerContext controller
    @controller.setView @
    @controller.setModel(@model) if @model?

  addEvent: (type, method, selector) ->
    handler = @dispatchEvent.bind @, method, selector
    if @element.on
      @element.on type, handler
    else if @element.addEventListener
      @element.addEventListener type, handler, false
    else if @element.addListener
      @element.addListener type, handler

  dispatchEvent: (method, selector, e) ->
    if arguments.length is 3 and selector
      return unless @elementMatchesSelector e.target, selector
    else if arguments.length is 2
      e = selector
    @controller.trigger method, e

  elementMatchesSelector: (element, selector) ->
    matches = element.matches or element.matchesSelector or
    element.msMatchesSelector or element.mozMatchesSelector or
    element.webkitMatchesSelector or element.oMatchesSelector

    matches.call element, selector

  getElement: () ->
    @element

  display: () ->
    @displayView()

  displayView: ->
    @element.style.display = '';
    
  displaySuperView: (viewPointer, callerPointer) ->
    @callOnSuperView 'displaySuperView', viewPointer, @__POINTER__
    
  hide: ->
    @hideView()

  hideView: ->
    @element.style.display = 'none';

  hideSuperView: (viewPointer, callerPointer) ->
    @callOnSuperView 'hideSuperView', viewPointer, @__POINTER__

  release: ->
    @releaseView()

  releaseView: ->
    @superView = undefined
    @element.parentNode.removeChild @element

  callOnSuperView: (fn, viewPointer, callerPointer) ->
    if @superView?[fn]?
      @superView[fn] viewPointer, @__POINTER__

  closest: (element, selector) ->
    return element if element is @element
    return element if @elementMatchesSelector element, selector
    parent = element.parentNode
    @closest parent, selector

  # Opt for simplicity over efficiency and compatibility
  getElementFromSelector: (selector) ->
    # After the element is set all calls will be scoped to it
    scope = @element or document
    nodes = scope.querySelectorAll selector
    return nodes[0] if nodes.length > 0
    return

exports.ViewComponent = ViewComponent
