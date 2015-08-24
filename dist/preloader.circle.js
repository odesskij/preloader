define([], function(){

    var Preloader;

Preloader = (function() {
  function Preloader(options) {
    this._.defaults(options, {
      speed: 500,
      prefix: this._.uniqueId('preload_'),
      size: 5,
      color: '#FFFFFF'
    });
    this.el = options.el, this.speed = options.speed, this.prefix = options.prefix;
    this.el = this.el[0];
    this.styles = this.$.createStyle(this.styles(options));
    this.$.append(document.getElementsByTagName('head')[0], this.styles);
    this.preloader = this.html(options);
    this.el.innerHTML = this.preloader;
  }


  /* show preloader */

  Preloader.prototype.show = function(callback) {
    if (callback == null) {
      callback = this._.noop;
    }
    return this.$.fadeIn(this.el.childNodes[0], callback);

    /* hide preloader */
  };

  Preloader.prototype.hide = function(callback) {
    if (callback == null) {
      callback = this._.noop;
    }
    return this.$.fadeOut(this.el.childNodes[0], callback);

    /* destroy preloader */
  };

  Preloader.prototype.destroy = function() {
    this.$.remove(this.el.childNodes[0]);
    return this.$.remove(this.styles);
  };

  return Preloader;

})();


    (function(Preloader){
        Preloader.prototype.styles = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '.' +
((__t = ( prefix )) == null ? '' : __t) +
'wrapper {\n    z-index: 9999;\n    top: 50%;\n    left: 50%;\n    position: fixed;\n    margin-top: -' +
((__t = ( size/2 )) == null ? '' : __t) +
'em;\n    margin-left: -' +
((__t = ( size/2 )) == null ? '' : __t) +
'em;\n    opacity: 0;\n}\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle {\n  width: ' +
((__t = ( size )) == null ? '' : __t) +
'em;\n  height: ' +
((__t = ( size )) == null ? '' : __t) +
'em;\n  position: relative;\n}\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-child {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-child:before {\n  content: \'\';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: ' +
((__t = ( color )) == null ? '' : __t) +
';\n  border-radius: 100%;\n  -webkit-animation: ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circleBounceDelay 1.2s infinite ease-in-out both;\n          animation: ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circleBounceDelay 1.2s infinite ease-in-out both;\n}\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle2 {\n  -webkit-transform: rotate(30deg);\n      -ms-transform: rotate(30deg);\n          transform: rotate(30deg); }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle3 {\n  -webkit-transform: rotate(60deg);\n      -ms-transform: rotate(60deg);\n          transform: rotate(60deg); }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle4 {\n  -webkit-transform: rotate(90deg);\n      -ms-transform: rotate(90deg);\n          transform: rotate(90deg); }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle5 {\n  -webkit-transform: rotate(120deg);\n      -ms-transform: rotate(120deg);\n          transform: rotate(120deg); }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle6 {\n  -webkit-transform: rotate(150deg);\n      -ms-transform: rotate(150deg);\n          transform: rotate(150deg); }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle7 {\n  -webkit-transform: rotate(180deg);\n      -ms-transform: rotate(180deg);\n          transform: rotate(180deg); }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle8 {\n  -webkit-transform: rotate(210deg);\n      -ms-transform: rotate(210deg);\n          transform: rotate(210deg); }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle9 {\n  -webkit-transform: rotate(240deg);\n      -ms-transform: rotate(240deg);\n          transform: rotate(240deg); }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle10 {\n  -webkit-transform: rotate(270deg);\n      -ms-transform: rotate(270deg);\n          transform: rotate(270deg); }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle11 {\n  -webkit-transform: rotate(300deg);\n      -ms-transform: rotate(300deg);\n          transform: rotate(300deg); }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle12 {\n  -webkit-transform: rotate(330deg);\n      -ms-transform: rotate(330deg);\n          transform: rotate(330deg); }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s; }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle3:before {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s; }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s; }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s; }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s; }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s; }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s; }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s; }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s; }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s; }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n          animation-delay: -0.1s; }\n\n@-webkit-keyframes ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circleBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  } 40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@keyframes ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circleBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  } 40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}';

}
return __p
};
    })(Preloader);

    (function(Preloader){
        Preloader.prototype.html = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'wrapper">\n  <div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle">\n    <div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle1 ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-child"></div>\n    <div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle2 ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-child"></div>\n    <div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle3 ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-child"></div>\n    <div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle4 ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-child"></div>\n    <div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle5 ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-child"></div>\n    <div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle6 ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-child"></div>\n    <div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle7 ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-child"></div>\n    <div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle8 ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-child"></div>\n    <div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle9 ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-child"></div>\n    <div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle10 ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-child"></div>\n    <div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle11 ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-child"></div>\n    <div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-circle12 ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-child"></div>\n  </div>\n</div>';

}
return __p
};
    })(Preloader);

    (function(Preloader){
        var _,
  slice = [].slice;

_ = Preloader.prototype._ = {};

_.noop = function() {};

_.uniqueId = (function() {
  var idCounter;
  idCounter = 0;
  return function(prefix) {
    var id;
    id = ++idCounter;

    /*TODO: */
    return "" + prefix + id + (Date.now());
  };
})();

_.defaults = function() {
  var args, i, len, obj, prop, source;
  obj = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
  for (i = 0, len = args.length; i < len; i++) {
    source = args[i];
    if (source != null) {
      for (prop in source) {
        if (obj[prop] === void 0) {
          obj[prop] = source[prop];
        }
      }
    }
  }
  return obj;
};

    })(Preloader);

    (function(Preloader){
        var $, FX;

$ = Preloader.prototype.$ = {};

$.append = function(el, child) {
  return el.appendChild(child);
};

$.remove = function(el) {
  return el.parentNode.removeChild(el);
};

$.createStyle = function(styles) {
  var style;
  style = document.createElement('style');
  style.innerHTML = styles;
  style.type = 'text/css';
  return style;
};

$.fadeIn = function(element, callback) {
  return FX.fadeIn(element, {
    duration: 500,
    complete: callback
  });
};

$.fadeOut = function(element, callback) {
  return FX.fadeOut(element, {
    duration: 500,
    complete: callback
  });
};

FX = (function() {
  return FX = {
    easing: {
      linear: function(progress) {
        return progress;
      },
      quadratic: function(progress) {
        return Math.pow(progress, 2);
      },
      swing: function(progress) {
        return 0.5 - (Math.cos(progress * Math.PI) / 2);
      },
      circ: function(progress) {
        return 1 - Math.sin(Math.acos(progress));
      },
      back: function(progress, x) {
        return Math.pow(progress, 2) * ((x + 1) * progress - x);
      },
      bounce: function(progress) {
        var a, b, result;
        a = 0;
        b = 1;
        result = void 0;
        while (true) {
          if (progress >= (7 - (4 * a)) / 11) {
            return -(Math.pow((11 - (6 * a) - (11 * progress)) / 4, 2)) + Math.pow(b, 2);
          }
          a += b;
          b /= 2;
        }
      },
      elastic: function(progress, x) {
        return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress);
      }
    },
    animate: function(options) {
      var id, start;
      start = new Date;
      id = setInterval((function() {
        var delta, progress, timePassed;
        timePassed = new Date - start;
        progress = timePassed / options.duration;
        if (progress > 1) {
          progress = 1;
        }
        options.progress = progress;
        delta = options.delta(progress);
        options.step(delta);
        if (progress === 1) {
          clearInterval(id);
          options.complete();
        }
      }), options.delay || 10);
    },
    fadeOut: function(element, options) {
      var to;
      to = 1;
      this.animate({
        duration: options.duration,
        delta: function(progress) {
          progress = this.progress;
          return FX.easing.swing(progress);
        },
        complete: options.complete,
        step: function(delta) {
          element.style.opacity = to - delta;
        }
      });
    },
    fadeIn: function(element, options) {
      var to;
      to = 0;
      this.animate({
        duration: options.duration,
        delta: function(progress) {
          progress = this.progress;
          return FX.easing.swing(progress);
        },
        complete: options.complete,
        step: function(delta) {
          element.style.opacity = to + delta;
        }
      });
    }
  };
})();

    })(Preloader);


    return Preloader;
})
