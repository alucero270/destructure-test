(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@theme-ui/css'), require('@styled-system/should-forward-prop'), require('@styled-system/space'), require('@styled-system/color'), require('@emotion/styled'), require('@emotion/core'), require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', '@theme-ui/css', '@styled-system/should-forward-prop', '@styled-system/space', '@styled-system/color', '@emotion/styled', '@emotion/core', 'react'], factory) :
  (factory((global.components = {}),global.css,global.shouldForwardProp,global.space,global.color,global.styled,global.core,global.react));
}(this, (function (exports,css,shouldForwardProp,space,color,styled,core,React) {
  space = space && space.hasOwnProperty('default') ? space['default'] : space;
  color = color && color.hasOwnProperty('default') ? color['default'] : color;
  styled = styled && styled.hasOwnProperty('default') ? styled['default'] : styled;
  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  var shouldForwardProp$1 = shouldForwardProp.createShouldForwardProp(( space.propNames ).concat( color.propNames));

  var sx = function (props) { return css.css(props.sx)(props.theme); };

  var base = function (props) { return css.css(props.__css)(props.theme); };

  var variant = function (ref) {
    var theme = ref.theme;
    var variant = ref.variant;
    var __themeKey = ref.__themeKey; if ( __themeKey === void 0 ) __themeKey = 'variants';

    return css.css(css.get(theme, __themeKey + '.' + variant, css.get(theme, variant)));
  };

  var Box = styled('div', {
    shouldForwardProp: shouldForwardProp$1
  })({
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0
  }, base, variant, space, color, sx, function (props) { return props.css; });

  var Flex = styled(Box)({
    display: 'flex'
  });

  function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

  var px = function (n) { return typeof n === 'number' ? n + 'px' : n; };

  var widthToColumns = function (width) { return Array.isArray(width) ? width.map(widthToColumns) : !!width && ("repeat(auto-fit, minmax(" + (px(width)) + ", 1fr))"); };

  var countToColumns = function (n) { return Array.isArray(n) ? n.map(countToColumns) : !!n && (typeof n === 'number' ? ("repeat(" + n + ", 1fr)") : n); };

  var Grid = React.forwardRef(function (ref$1, ref) {
    var width = ref$1.width;
    var columns = ref$1.columns;
    var gap = ref$1.gap; if ( gap === void 0 ) gap = 3;
    var rest = objectWithoutProperties( ref$1, ["width", "columns", "gap"] );
    var props = rest;

    var gridTemplateColumns = !!width ? widthToColumns(width) : countToColumns(columns);
    return React.createElement( Box, Object.assign({}, { ref: ref }, props, { __themeKey: "grids", __css: {
      display: 'grid',
      gridGap: gap,
      gridTemplateColumns: gridTemplateColumns
    } }));
  });

  var Button = React.forwardRef(function (props, ref) { return React.createElement( Box, Object.assign({}, { ref: ref, as: "button", variant: "primary" }, props, { __themeKey: "buttons", __css: {
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
    fontSize: 'inherit',
    px: 3,
    py: 2,
    color: 'white',
    bg: 'primary',
    border: 0,
    borderRadius: 4
  } })); });

  var Link = React.forwardRef(function (props, ref) { return React.createElement( Box, Object.assign({}, { ref: ref, as: "a", variant: "styles.a" }, props, { __themeKey: "links" })); });

  var Text = React.forwardRef(function (props, ref) { return React.createElement( Box, Object.assign({}, { ref: ref, variant: "default" }, props, { __themeKey: "text" })); });

  var Heading = React.forwardRef(function (props, ref) { return React.createElement( Box, Object.assign({}, { ref: ref, as: "h2", variant: "heading" }, props, { __themeKey: "text", __css: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading'
  } })); });

  var Image = React.forwardRef(function (props, ref) { return React.createElement( Box, Object.assign({}, { ref: ref, as: "img" }, props, { __themeKey: "images", __css: Object.assign({}, {maxWidth: '100%',
    height: 'auto'},
    props.__css) })); });

  var Card = React.forwardRef(function (props, ref) { return React.createElement( Box, Object.assign({}, { ref: ref, variant: "primary" }, props, { __themeKey: "cards" })); });

  var Label = React.forwardRef(function (props, ref) { return React.createElement( Box, Object.assign({}, { ref: ref, as: "label", variant: "label" }, props, { __themeKey: "forms", __css: {
    width: '100%',
    display: 'flex'
  } })); });

  var Input = React.forwardRef(function (props, ref) { return React.createElement( Box, Object.assign({}, { ref: ref, as: "input", variant: "input" }, props, { __themeKey: "forms", __css: {
    display: 'block',
    width: '100%',
    p: 2,
    appearance: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: '1px solid',
    borderRadius: 4,
    color: 'inherit',
    bg: 'transparent'
  } })); });

  function objectWithoutProperties$1 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
  var SVG = (function (ref) {
    var size = ref.size; if ( size === void 0 ) size = 24;
    var rest = objectWithoutProperties$1( ref, ["size"] );
    var props = rest;

    return React.createElement( Box, Object.assign({}, { as: "svg", xmlns: "http://www.w3.org/2000/svg", width: size + '', height: size + '', viewBox: "0 0 24 24", fill: "currentcolor" }, props));
  });

  var getProps = function (test) { return function (props) {
    var next = {};

    for (var key in props) {
      if (test(key || '')) { next[key] = props[key]; }
    }

    return next;
  }; };
  var MRE = /^m[trblxy]?$/;
  var getMargin = getProps(function (k) { return MRE.test(k); });
  var omitMargin = getProps(function (k) { return !MRE.test(k); });

  var DownArrow = function (props) { return React.createElement( SVG, props,
      React.createElement( 'path', { d: "M7 10l5 5 5-5z" })
    ); };

  var Select = React.forwardRef(function (props, ref) { return React.createElement( Box, Object.assign({}, getMargin(props), { sx: {
    display: 'flex'
  } }),
      React.createElement( Box, Object.assign({}, { ref: ref, as: "select", variant: "select" }, omitMargin(props), { __themeKey: "forms", __css: {
      display: 'block',
      width: '100%',
      p: 2,
      appearance: 'none',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      border: '1px solid',
      borderRadius: 4,
      color: 'inherit',
      bg: 'transparent'
    } })),
      React.createElement( DownArrow, { sx: {
      ml: -28,
      alignSelf: 'center',
      pointerEvents: 'none'
    } })
    ); });

  var Textarea = React.forwardRef(function (props, ref) { return React.createElement( Box, Object.assign({}, { ref: ref, as: "textarea", variant: "textarea" }, props, { __themeKey: "forms", __css: {
    display: 'block',
    width: '100%',
    p: 2,
    appearance: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: '1px solid',
    borderRadius: 4,
    color: 'inherit',
    bg: 'transparent'
  } })); });

  function objectWithoutProperties$2 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

  var RadioChecked = function (props) { return React.createElement( SVG, props,
      React.createElement( 'path', { d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" })
    ); };

  var RadioUnchecked = function (props) { return React.createElement( SVG, props,
      React.createElement( 'path', { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" })
    ); };

  var RadioIcon = function (props) { return React.createElement( React.Fragment, null,
      React.createElement( RadioChecked, Object.assign({}, props, { __css: {
      display: 'none',
      'input:checked ~ &': {
        display: 'block'
      }
    } })),
      React.createElement( RadioUnchecked, Object.assign({}, props, { __css: {
      display: 'block',
      'input:checked ~ &': {
        display: 'none'
      }
    } }))
    ); };

  var Radio = React.forwardRef(function (ref$1, ref) {
    var className = ref$1.className;
    var sx = ref$1.sx;
    var variant = ref$1.variant; if ( variant === void 0 ) variant = 'radio';
    var rest = objectWithoutProperties$2( ref$1, ["className", "sx", "variant"] );
    var props = rest;

    return React.createElement( Box, null,
        React.createElement( Box, Object.assign({}, { ref: ref, as: "input", type: "radio" }, props, { sx: {
      position: 'absolute',
      opacity: 0,
      zIndex: -1,
      width: 1,
      height: 1,
      overflow: 'hidden'
    } })),
        React.createElement( Box, { as: RadioIcon, 'aria-hidden': "true", __themeKey: "forms", variant: variant, className: className, sx: sx, __css: {
      // todo: system props??
      mr: 2,
      borderRadius: 9999,
      color: 'gray',
      'input:checked ~ &': {
        color: 'primary'
      },
      'input:focus ~ &': {
        bg: 'highlight'
      }
    } })
      );
  });

  function objectWithoutProperties$3 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

  var CheckboxChecked = function (props) { return React.createElement( SVG, props,
      React.createElement( 'path', { d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })
    ); };

  var CheckboxUnchecked = function (props) { return React.createElement( SVG, props,
      React.createElement( 'path', { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" })
    ); };

  var CheckboxIcon = function (props) { return React.createElement( React.Fragment, null,
      React.createElement( CheckboxChecked, Object.assign({}, props, { __css: {
      display: 'none',
      'input:checked ~ &': {
        display: 'block'
      }
    } })),
      React.createElement( CheckboxUnchecked, Object.assign({}, props, { __css: {
      display: 'block',
      'input:checked ~ &': {
        display: 'none'
      }
    } }))
    ); };

  var Checkbox = React.forwardRef(function (ref$1, ref) {
    var className = ref$1.className;
    var sx = ref$1.sx;
    var variant = ref$1.variant; if ( variant === void 0 ) variant = 'checkbox';
    var rest = objectWithoutProperties$3( ref$1, ["className", "sx", "variant"] );
    var props = rest;

    return React.createElement( Box, null,
        React.createElement( Box, Object.assign({}, { ref: ref, as: "input", type: "checkbox" }, props, { sx: {
      position: 'absolute',
      opacity: 0,
      zIndex: -1,
      width: 1,
      height: 1,
      overflow: 'hidden'
    } })),
        React.createElement( Box, { as: CheckboxIcon, 'aria-hidden': "true", __themeKey: "forms", variant: variant, className: className, sx: sx, __css: {
      mr: 2,
      borderRadius: 4,
      color: 'gray',
      'input:checked ~ &': {
        color: 'primary'
      },
      'input:focus ~ &': {
        color: 'primary',
        bg: 'highlight'
      }
    } })
      );
  });

  var thumb = {
    appearance: 'none',
    width: 16,
    height: 16,
    bg: 'currentcolor',
    border: 0,
    borderRadius: 9999,
    variant: 'forms.slider.thumb'
  };
  var Slider = React.forwardRef(function (props, ref) { return React.createElement( Box, Object.assign({}, { ref: ref, as: "input", type: "range", variant: "slider" }, props, { __themeKey: "forms", __css: {
    display: 'block',
    width: '100%',
    height: 4,
    my: 2,
    cursor: 'pointer',
    appearance: 'none',
    borderRadius: 9999,
    color: 'inherit',
    bg: 'gray',
    ':focus': {
      outline: 'none',
      color: 'primary'
    },
    '&::-webkit-slider-thumb': thumb,
    '&::-moz-range-thumb': thumb,
    '&::-ms-thumb': thumb
  } })); });

  function objectWithoutProperties$4 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
  var Field = React.forwardRef(function (ref$1, ref) {
    var Control = ref$1.as; if ( Control === void 0 ) Control = Input;
    var label = ref$1.label;
    var name = ref$1.name;
    var rest = objectWithoutProperties$4( ref$1, ["as", "label", "name"] );
    var props = rest;

    return React.createElement( Box, getMargin(props),
          React.createElement( Label, { htmlFor: name }, label),
          React.createElement( Control, Object.assign({}, { ref: ref, id: name, name: name }, omitMargin(props)))
        );
  });

  var Progress = React.forwardRef(function (props, ref) { return React.createElement( Box, Object.assign({}, { ref: ref, as: "progress", variant: "styles.progress" }, props, { __css: {
    display: 'block',
    width: '100%',
    height: '4px',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    appearance: 'none',
    color: 'primary',
    bg: 'gray',
    borderRadius: 9999,
    border: 'none',
    '&::-webkit-progress-bar': {
      bg: 'transparent'
    },
    '&::-webkit-progress-value': {
      bg: 'currentcolor'
    },
    '&::-moz-progress-bar': {
      bg: 'currentcolor'
    }
  } })); });

  function objectWithoutProperties$5 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
  var Donut = React.forwardRef(function (ref$1, ref) {
    var size = ref$1.size; if ( size === void 0 ) size = 128;
    var strokeWidth = ref$1.strokeWidth; if ( strokeWidth === void 0 ) strokeWidth = 2;
    var value = ref$1.value; if ( value === void 0 ) value = 0;
    var min = ref$1.min; if ( min === void 0 ) min = 0;
    var max = ref$1.max; if ( max === void 0 ) max = 1;
    var title = ref$1.title;
    var rest = objectWithoutProperties$5( ref$1, ["size", "strokeWidth", "value", "min", "max", "title"] );
    var props = rest;

    var r = 16 - strokeWidth;
    var C = 2 * r * Math.PI;
    var offset = C - (value - min) / (max - min) * C;
    return React.createElement( Box, Object.assign({}, { ref: ref, as: "svg", viewBox: "0 0 32 32", width: size, height: size, strokeWidth: strokeWidth, fill: "none", stroke: "currentcolor", role: "img", 'aria-valuenow': value, 'aria-valuemin': min, 'aria-valuemax': max }, props, { __css: {
      color: 'primary'
    } }),
          title && React.createElement( 'title', null, title ),
          React.createElement( 'circle', { cx: 16, cy: 16, r: r, opacity: 1 / 8 }),
          React.createElement( 'circle', { cx: 16, cy: 16, r: r, strokeDasharray: C, strokeDashoffset: offset, transform: "rotate(-90 16 16)" })
        );
  });

  function objectWithoutProperties$6 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
  var spin = core.keyframes({
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    }
  });
  var Spinner = React.forwardRef(function (ref$1, ref) {
    var size = ref$1.size; if ( size === void 0 ) size = 48;
    var strokeWidth = ref$1.strokeWidth; if ( strokeWidth === void 0 ) strokeWidth = 4;
    var title = ref$1.title; if ( title === void 0 ) title = 'Loading...';
    var duration = ref$1.duration; if ( duration === void 0 ) duration = 500;
    var rest = objectWithoutProperties$6( ref$1, ["size", "strokeWidth", "max", "title", "duration"] );
    var props = rest;

    var r = 16 - strokeWidth;
    var C = 2 * r * Math.PI;
    var offset = C - 1 / 4 * C;
    return React.createElement( Box, Object.assign({}, { ref: ref, as: "svg", viewBox: "0 0 32 32", width: size, height: size, strokeWidth: strokeWidth, fill: "none", stroke: "currentcolor", role: "img" }, props, { __css: {
      color: 'primary',
      overflow: 'visible'
    } }),
          React.createElement( 'title', null, title ),
          React.createElement( 'circle', { cx: 16, cy: 16, r: r, opacity: 1 / 8 }),
          React.createElement( Box, { as: "circle", cx: 16, cy: 16, r: r, strokeDasharray: C, strokeDashoffset: offset, __css: {
        transformOrigin: '50% 50%',
        animationName: spin.toString(),
        animationTimingFunction: 'linear',
        animationDuration: duration + 'ms',
        animationIterationCount: 'infinite'
      } })
        );
  });

  function objectWithoutProperties$7 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
  var Avatar = React.forwardRef(function (ref$1, ref) {
    var size = ref$1.size; if ( size === void 0 ) size = 48;
    var rest = objectWithoutProperties$7( ref$1, ["size"] );
    var props = rest;

    return React.createElement( Image, Object.assign({}, { ref: ref, width: size, height: size, variant: "avatar" }, props, { __css: {
    borderRadius: 9999
  } }));
  });

  var Badge = React.forwardRef(function (props, ref) { return React.createElement( Box, Object.assign({}, { ref: ref, variant: "primary" }, props, { __themeKey: "badges", __css: {
    display: 'inline-block',
    verticalAlign: 'baseline',
    fontSize: 0,
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    px: 1,
    borderRadius: 2,
    color: 'white',
    bg: 'primary'
  } })); });

  function objectWithoutProperties$8 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
  var IconButton = React.forwardRef(function (ref$1, ref) {
    var size = ref$1.size; if ( size === void 0 ) size = 32;
    var rest = objectWithoutProperties$8( ref$1, ["size"] );
    var props = rest;

    return React.createElement( Box, Object.assign({}, { ref: ref, as: "button", variant: "icon" }, props, { __themeKey: "buttons", __css: {
    appearance: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    width: size,
    height: size,
    color: 'inherit',
    bg: 'transparent',
    border: 'none',
    borderRadius: 4
  } }));
  });

  function objectWithoutProperties$9 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
  var x = React.createElement( 'svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "currentcolor", viewBox: "0 0 24 24" },
      React.createElement( 'path', { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
    );
  var Close = React.forwardRef(function (ref$1, ref) {
    var rest = objectWithoutProperties$9( ref$1, ["size"] );
    var props = rest;

    return React.createElement( IconButton, Object.assign({}, { ref: ref, title: "Close", 'aria-label': "Close", variant: "close" }, props, { children: x }));
  });

  var Alert = React.forwardRef(function (props, ref) { return React.createElement( Box, Object.assign({}, { ref: ref, variant: "primary" }, props, { __themeKey: "alerts", __css: {
    display: 'flex',
    alignItems: 'center',
    px: 3,
    py: 2,
    fontWeight: 'bold',
    color: 'white',
    bg: 'primary',
    borderRadius: 4
  } })); });

  var Divider = React.forwardRef(function (props, ref) { return React.createElement( Box, Object.assign({}, { ref: ref, as: "hr", variant: "styles.hr" }, props, { __css: {
    color: 'gray',
    m: 0,
    my: 2,
    border: 0,
    borderBottom: '1px solid'
  } })); });

  function objectWithoutProperties$a (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
  var Embed = React.forwardRef(function (ref$1, ref) {
    var ratio = ref$1.ratio; if ( ratio === void 0 ) ratio = 16 / 9;
    var src = ref$1.src;
    var frameBorder = ref$1.frameBorder; if ( frameBorder === void 0 ) frameBorder = 0;
    var allowFullScreen = ref$1.allowFullScreen; if ( allowFullScreen === void 0 ) allowFullScreen = true;
    var width = ref$1.width; if ( width === void 0 ) width = 560;
    var height = ref$1.height; if ( height === void 0 ) height = 315;
    var allow = ref$1.allow;
    var rest = objectWithoutProperties$a( ref$1, ["ratio", "src", "frameBorder", "allowFullScreen", "width", "height", "allow"] );
    var props = rest;

    return React.createElement( Box, Object.assign({}, props, { __css: {
    width: '100%',
    height: 0,
    paddingBottom: 100 / ratio + '%',
    position: 'relative',
    overflow: 'hidden'
  } }),
        React.createElement( Box, { ref: ref, as: "iframe", src: src, width: width, height: height, frameBorder: frameBorder, allowFullScreen: allowFullScreen, allow: allow, __css: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      bottom: 0,
      left: 0,
      border: 0
    } })
      );
  });

  function objectWithoutProperties$b (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
  var AspectRatio = React.forwardRef(function (ref$1, ref) {
    var ratio = ref$1.ratio; if ( ratio === void 0 ) ratio = 4 / 3;
    var children = ref$1.children;
    var rest = objectWithoutProperties$b( ref$1, ["ratio", "children"] );
    var props = rest;

    return React.createElement( Box, { ref: ref, sx: {
    position: 'relative',
    overflow: 'hidden'
  } },
        React.createElement( Box, { sx: {
      width: '100%',
      height: 0,
      paddingBottom: 100 / ratio + '%'
    } }),
        React.createElement( Box, Object.assign({}, props, { __css: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    } }),
          children
        )
      );
  });

  function objectWithoutProperties$c (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
  var AspectImage = React.forwardRef(function (ref$1, ref) {
    var ratio = ref$1.ratio;
    var rest = objectWithoutProperties$c( ref$1, ["ratio"] );
    var props = rest;

    return React.createElement( AspectRatio, { ratio: ratio },
      React.createElement( Image, Object.assign({}, { ref: ref }, props, { __css: {
      objectFit: 'cover'
    } }))
    );
  });

  var Container = React.forwardRef(function (props, ref) { return React.createElement( Box, Object.assign({}, { ref: ref, variant: "container" }, props, { __themeKey: "layout", __css: {
    width: '100%',
    maxWidth: 'container',
    mx: 'auto'
  } })); });

  var NavLink = React.forwardRef(function (props, ref) { return React.createElement( Link, Object.assign({}, { ref: ref, variant: "nav" }, props, { __css: {
    color: 'inherit',
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'inline-block',
    '&:hover, &:focus, &.active': {
      color: 'primary'
    }
  } })); });

  var Message = React.forwardRef(function (props, ref) { return React.createElement( Box, Object.assign({}, { ref: ref }, props, { __themeKey: "messages", __css: {
    padding: 3,
    paddingLeft: function (t) { return t.space[3] - t.space[1]; },
    borderLeftWidth: function (t) { return t.space[1]; },
    borderLeftStyle: 'solid',
    borderLeftColor: 'primary',
    borderRadius: 4,
    bg: 'highlight'
  } })); });

  var MenuIcon = function (ref) {
    var size = ref.size; if ( size === void 0 ) size = 24;

    return React.createElement( Box, { as: "svg", xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "currentcolor", viewBox: "0 0 24 24", sx: {
    display: 'block',
    margin: 0
  } },
      React.createElement( 'path', { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" })
    );
  };
  var MenuButton = React.forwardRef(function (props, ref) { return React.createElement( IconButton, Object.assign({}, { ref: ref, title: "Menu", 'aria-label': "Toggle Menu", variant: "menu" }, props),
      React.createElement( MenuIcon, null )
    ); });

  exports.Box = Box;
  exports.Flex = Flex;
  exports.Grid = Grid;
  exports.Button = Button;
  exports.Link = Link;
  exports.Text = Text;
  exports.Heading = Heading;
  exports.Image = Image;
  exports.Card = Card;
  exports.Label = Label;
  exports.Input = Input;
  exports.Select = Select;
  exports.Textarea = Textarea;
  exports.Radio = Radio;
  exports.Checkbox = Checkbox;
  exports.Slider = Slider;
  exports.Field = Field;
  exports.Progress = Progress;
  exports.Donut = Donut;
  exports.Spinner = Spinner;
  exports.Avatar = Avatar;
  exports.Badge = Badge;
  exports.Close = Close;
  exports.Alert = Alert;
  exports.Divider = Divider;
  exports.Embed = Embed;
  exports.AspectRatio = AspectRatio;
  exports.AspectImage = AspectImage;
  exports.Container = Container;
  exports.NavLink = NavLink;
  exports.Message = Message;
  exports.IconButton = IconButton;
  exports.MenuButton = MenuButton;

})));
//# sourceMappingURL=index.umd.js.map
