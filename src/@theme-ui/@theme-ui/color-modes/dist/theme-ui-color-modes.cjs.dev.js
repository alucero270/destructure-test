'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@theme-ui/core');
var css = require('@theme-ui/css');
var react = require('@emotion/react');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const toVarName = key => `--theme-ui-${key.replace('-__default', '')}`;

const toVarValue = key => `var(${toVarName(key)})`;

const join = (...args) => args.filter(Boolean).join('-');

const reservedKeys = new Set(['useCustomProperties', 'initialColorModeName', 'printColorModeName', 'initialColorMode', 'useLocalStorage', 'config']); // convert theme values to custom properties

const toCustomProperties = (obj, parent) => {
  const next = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];
    const name = join(parent, key);

    if (value && typeof value === 'object') {
      next[key] = toCustomProperties(value, name);
      continue;
    }

    if (reservedKeys.has(key)) {
      next[key] = value;
      continue;
    }

    next[key] = toVarValue(name);
  }

  return next;
};
/**
 * @internal
 * Recursively transforms an object into CSS variables excluding "modes" key.
 */

const __objectToVars = (parent, obj) => {
  let vars = {};

  for (let key in obj) {
    if (key === 'modes') continue;
    const name = join(parent, key);
    const value = obj[key];

    if (value && typeof value === 'object') {
      vars = { ...vars,
        ...__objectToVars(name, value)
      };
    } else {
      vars[toVarName(name)] = value;
    }
  }

  return vars;
};
/**
 * @internal
 * Creates root styles for color modes.
 * - Transforms color scale into CSS variables.
 * - Sets background and text color.
 */

const __createColorStyles = (theme = {}) => {
  const {
    useCustomProperties,
    initialColorModeName,
    printColorModeName,
    useRootStyles
  } = theme.config || theme || {};
  const colors = theme.rawColors || theme.colors;
  if (!colors || useRootStyles === false) return {};

  if (useCustomProperties === false) {
    return css.css({
      color: 'text',
      bg: 'background'
    })(theme);
  }

  const modes = colors.modes || {};

  const styles = __createColorProperties(colors, modes);

  if (printColorModeName) {
    const mode = printColorModeName === 'initial' || printColorModeName === initialColorModeName ? colors : modes[printColorModeName];
    styles['@media print'] = __objectToVars('colors', mode);
  }

  const colorToVarValue = color => toVarValue(`colors-${color}`);

  return css.css({ ...styles,
    color: colorToVarValue('text'),
    bg: colorToVarValue('background')
  })(theme);
};
/**
 * @internal
 * Returns an object with colors turned into Custom CSS Properties and
 * .theme-ui-<colormode> classes used for no-flash serverside rendering.
 */

function __createColorProperties(colors, modes) {
  const styles = __objectToVars('colors', colors);

  Object.keys(modes).forEach(mode => {
    const className = `.theme-ui-${mode}`;
    const key = `&${className}, ${className} &`;
    styles[key] = __objectToVars('colors', modes[mode]);
  });
  return styles;
}

const STORAGE_KEY = 'theme-ui-color-mode';
const DARK_QUERY = '(prefers-color-scheme: dark)';
const LIGHT_QUERY = '(prefers-color-scheme: light)';
const storage = {
  get: () => {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (err) {
      console.warn('localStorage is disabled and color mode might not work as expected.', 'Please check your Site Settings.', err);
    }
  },
  set: value => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (err) {
      console.warn('localStorage is disabled and color mode might not work as expected.', 'Please check your Site Settings.', err);
    }
  }
};

const getPreferredColorScheme = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    if (window.matchMedia(DARK_QUERY).matches) {
      return 'dark';
    }

    if (window.matchMedia(LIGHT_QUERY).matches) {
      return 'light';
    }
  }

  return null;
};

const useClientsideEffect = typeof window === 'undefined' ? () => {} : React.useLayoutEffect;

const TopLevelColorModeProvider = ({
  outerCtx,
  children
}) => {
  const outerTheme = outerCtx.theme || {};
  const {
    initialColorModeName,
    useColorSchemeMediaQuery,
    useLocalStorage
  } = outerTheme.config || outerTheme;
  let [colorMode, setColorMode] = React.useState(() => {
    const preferredMode = useColorSchemeMediaQuery !== false && getPreferredColorScheme();
    return preferredMode || initialColorModeName;
  }); // on first render, we read the color mode from localStorage and
  // clear the class on document element body

  useClientsideEffect(() => {
    const stored = useLocalStorage !== false && storage.get();

    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('theme-ui-' + stored);
    }

    if (useColorSchemeMediaQuery !== 'system' && stored && stored !== colorMode) {
      colorMode = stored;
      setColorMode(stored);
    }
  }, []); // when mode changes, we save it to localStorage

  React.useEffect(() => {
    if (colorMode && useLocalStorage !== false) {
      storage.set(colorMode);
    }
  }, [colorMode, useLocalStorage]);
  const setPreferredColorScheme = React.useCallback(() => {
    const preferredColorScheme = getPreferredColorScheme();
    setColorMode(preferredColorScheme || initialColorModeName);
  }, [initialColorModeName]);
  React.useEffect(() => {
    if (useColorSchemeMediaQuery === 'system' && window.matchMedia) {
      // It doesn't matter if we add the listener only to the dark media query
      // Because in our callback function we'll check for both media queries (light and dark).
      const darkMQL = window.matchMedia(DARK_QUERY);

      if (typeof darkMQL.addEventListener === 'function') {
        darkMQL.addEventListener('change', setPreferredColorScheme);
      } else if (typeof darkMQL.addListener === 'function') {
        darkMQL.addListener(setPreferredColorScheme);
      }
    }

    return () => {
      if (useColorSchemeMediaQuery === 'system' && window.matchMedia) {
        const darkMQL = window.matchMedia(DARK_QUERY);

        if (typeof darkMQL.removeEventListener === 'function') {
          darkMQL.removeEventListener('change', setPreferredColorScheme);
        } else if (typeof darkMQL.removeListener === 'function') {
          darkMQL.removeListener(setPreferredColorScheme);
        }
      }
    };
  }, [useColorSchemeMediaQuery, setPreferredColorScheme]);

  if (process.env.NODE_ENV !== 'production') {
    var _outerTheme$colors;

    if ((_outerTheme$colors = outerTheme.colors) != null && _outerTheme$colors.modes && initialColorModeName && Object.keys(outerTheme.colors.modes).indexOf(initialColorModeName) > -1) {
      console.warn('[theme-ui] The `initialColorModeName` value should be a unique name' + ' and cannot reference a key in `theme.colors.modes`.');
    }
  }

  const newTheme = useThemeWithAppliedColorMode({
    colorMode,
    outerTheme
  });
  const newCtx = { ...outerCtx,
    theme: newTheme,
    colorMode,
    setColorMode
  };
  return /*#__PURE__*/React__default['default'].createElement(core.__ThemeUIInternalBaseThemeProvider, {
    context: newCtx
  }, /*#__PURE__*/React__default['default'].createElement(GlobalColorStyles, {
    theme: newTheme
  }), children);
};

function useColorMode() {
  const {
    colorMode,
    setColorMode
  } = core.useThemeUI();

  if (typeof setColorMode !== 'function') {
    throw new Error(`[useColorMode] requires the ColorModeProvider component`);
  } // We're allowing the user to specify a narrower type for its color mode name.


  return [colorMode, setColorMode];
}

const omitModes = colors => {
  const res = { ...colors
  };
  delete res.modes;
  return res;
};

function copyRawColors(colors, outerThemeRawColors) {
  for (const [key, value] of Object.entries(colors)) {
    if (typeof value === 'string' && !value.startsWith('var(')) {
      outerThemeRawColors[key] = value;
    } else if (typeof value === 'object') {
      const newValue = { ...outerThemeRawColors[key]
      };
      copyRawColors(value, newValue);
      outerThemeRawColors[key] = newValue;
    }
  }
}

function useThemeWithAppliedColorMode({
  outerTheme,
  colorMode
}) {
  const theme = React.useMemo(() => {
    const res = { ...outerTheme
    };
    const modes = css.get(res, 'colors.modes', {});
    const currentColorMode = css.get(modes, colorMode, {});

    if (colorMode) {
      res.colors = { ...res.colors,
        ...currentColorMode
      };
    }

    const {
      useCustomProperties,
      initialColorModeName = '__default'
    } = outerTheme.config || outerTheme;
    let outerThemeRawColors = outerTheme.rawColors || outerTheme.colors || {};

    if (useCustomProperties !== false) {
      const alreadyHasRawColors = res.rawColors != null;
      const colors = res.colors || {};

      if (alreadyHasRawColors) {
        outerThemeRawColors = { ...outerThemeRawColors
        };
        copyRawColors(colors, outerThemeRawColors);

        if (outerThemeRawColors.modes) {
          outerThemeRawColors.modes[initialColorModeName] = omitModes(outerThemeRawColors);
        }

        res.rawColors = outerThemeRawColors;
      } else {
        if (!('modes' in outerThemeRawColors)) {
          res.rawColors = colors;
        } else {
          const modes = {
            [initialColorModeName]: omitModes(outerThemeRawColors),
            ...outerThemeRawColors.modes
          };
          res.rawColors = { ...colors,
            modes
          };
          /* modes doesn't match index signature by design */
        }
      }

      res.colors = toCustomProperties(omitModes(outerThemeRawColors), 'colors');
    }

    return res;
  }, [colorMode, outerTheme]);
  return theme;
}

function GlobalColorStyles({
  theme
}) {
  return core.jsx(react.Global, {
    styles: () => {
      return {
        html: __createColorStyles(theme)
      };
    }
  });
}

function NestedColorModeProvider({
  outerCtx,
  children
}) {
  var _newTheme$config2;

  const newTheme = useThemeWithAppliedColorMode({
    outerTheme: outerCtx.theme,
    colorMode: outerCtx.colorMode
  }); // Nested theme providers need to be rerendered after hydration for the correct
  // color mode to apply.

  const [needsRerender, setNeedsRerender] = React.useState( // Note: we could also check some "ssr-enabled" flag as an optimization for
  // SPAs, as deeply nested theme providers will also pay a performance penalty
  // for this SSR bug fix
  () => {
    var _newTheme$config;

    return ((_newTheme$config = newTheme.config) == null ? void 0 : _newTheme$config.useLocalStorage) !== false;
  });
  useClientsideEffect(() => void setNeedsRerender(false), []);
  const themeColors = newTheme.rawColors || newTheme.colors;
  const useCustomProperties = (_newTheme$config2 = newTheme.config) == null ? void 0 : _newTheme$config2.useCustomProperties;
  const colorVars = React.useMemo(() => {
    if (useCustomProperties === false) {
      return {};
    }

    const colors = themeColors || {};
    return css.css(__createColorProperties(colors, colors.modes || {}))(newTheme);
  }, [newTheme, themeColors, useCustomProperties]);
  return /*#__PURE__*/React__default['default'].createElement(core.__ThemeUIInternalBaseThemeProvider, {
    context: { ...outerCtx,
      theme: newTheme
    }
  }, core.jsx('div', {
    'data-themeui-nested-provider': true,
    // the key here ensures that children will be rerendered after color
    // mode is read from localStorage
    key: Number(needsRerender),
    suppressHydrationWarning: true,
    css: colorVars,
    children
  }));
}

const ColorModeProvider = ({
  children
}) => {
  const outerCtx = core.useThemeUI();
  const isTopLevelColorModeProvider = typeof outerCtx.setColorMode !== 'function';
  return isTopLevelColorModeProvider ? /*#__PURE__*/React__default['default'].createElement(TopLevelColorModeProvider, {
    outerCtx: outerCtx
  }, children) : /*#__PURE__*/React__default['default'].createElement(NestedColorModeProvider, {
    outerCtx: outerCtx
  }, children);
};
const noflash = `(function() { try {
  var mode = localStorage.getItem('theme-ui-color-mode');
  if (!mode) return
  document.documentElement.classList.add('theme-ui-' + mode);
} catch (e) {} })();`;
const InitializeColorMode = () => core.jsx('script', {
  key: 'theme-ui-no-flash',
  dangerouslySetInnerHTML: {
    __html: noflash
  }
});

exports.ColorModeProvider = ColorModeProvider;
exports.InitializeColorMode = InitializeColorMode;
exports.useColorMode = useColorMode;