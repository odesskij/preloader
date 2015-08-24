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
'sk-cube-grid {\n  width: ' +
((__t = ( size )) == null ? '' : __t) +
'em;\n  height: ' +
((__t = ( size )) == null ? '' : __t) +
'em;\n}\n\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube-grid .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube {\n  width: 33%;\n  height: 33%;\n  background-color: ' +
((__t = ( color )) == null ? '' : __t) +
';\n  float: left;\n  -webkit-animation: ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n          animation: ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n}\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube-grid .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube1 {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s; }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube-grid .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube2 {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s; }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube-grid .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube3 {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s; }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube-grid .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube4 {\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s; }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube-grid .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube5 {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s; }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube-grid .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube6 {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s; }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube-grid .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube7 {\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s; }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube-grid .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube8 {\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s; }\n.' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube-grid .' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube9 {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s; }\n\n@-webkit-keyframes sk-cubeGridScaleDelay {\n  0%, 70%, 100% {\n    -webkit-transform: scale3D(1, 1, 1);\n            transform: scale3D(1, 1, 1);\n  } 35% {\n    -webkit-transform: scale3D(0, 0, 1);\n            transform: scale3D(0, 0, 1); \n  }\n}\n\n@keyframes ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cubeGridScaleDelay {\n  0%, 70%, 100% {\n    -webkit-transform: scale3D(1, 1, 1);\n            transform: scale3D(1, 1, 1);\n  } 35% {\n    -webkit-transform: scale3D(0, 0, 1);\n            transform: scale3D(0, 0, 1);\n  } \n}';

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
'sk-cube-grid">\n    <div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube1"></div>\n    <div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube2"></div>\n    <div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube3"></div>\n    <div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube4"></div>\n    <div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube5"></div>\n    <div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube6"></div>\n    <div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube7"></div>\n    <div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube8"></div>\n    <div class="' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube ' +
((__t = ( prefix )) == null ? '' : __t) +
'sk-cube9"></div>\n  </div>\n</div>';

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
