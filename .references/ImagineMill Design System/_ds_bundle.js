/* @ds-bundle: {"format":4,"namespace":"ImagineMillDesignSystem_ef9c8c","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Callout","sourcePath":"components/content/Callout.jsx"},{"name":"CodeBlock","sourcePath":"components/content/CodeBlock.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"4c5419b615c3","components/actions/IconButton.jsx":"842f884da7c2","components/content/Callout.jsx":"2bc48cd7da50","components/content/CodeBlock.jsx":"55cabc2c373f","components/data-display/Avatar.jsx":"e1f9c00f4676","components/data-display/Badge.jsx":"e7b4a9ee724c","components/data-display/Card.jsx":"ebc9c65153ab","components/data-display/Tag.jsx":"e6d9f6dc207e","components/forms/Input.jsx":"89a4edada925","components/forms/Select.jsx":"da298e6ea854","components/navigation/Tabs.jsx":"6649a3678fe0","ui_kits/website/App.jsx":"7ad7e0ee2a0b","ui_kits/website/ArticleScreen.jsx":"6aca881d5fcc","ui_kits/website/CoachingScreen.jsx":"b33cda9fac30","ui_kits/website/HomeScreen.jsx":"b6ef33b8ed69","ui_kits/website/SiteChrome.jsx":"47e2095464f1","ui_kits/website/VideosScreen.jsx":"cdc6cb88d14a","ui_kits/website/data.js":"9b4f72d3d887","ui_kits/website/helpers.jsx":"1416f940bd21"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ImagineMillDesignSystem_ef9c8c = window.ImagineMillDesignSystem_ef9c8c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ImagineMill primary action button.
 * Renders a <button> by default, or an <a> when `href` is provided.
 */
function Button({
  variant = 'primary',
  size = 'md',
  href,
  iconLeft,
  iconRight,
  block = false,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['im-btn', `im-btn--${variant}`, `im-btn--${size}`, block ? 'im-btn--block' : '', className].filter(Boolean).join(' ');
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft ? /*#__PURE__*/React.createElement("span", {
    className: "im-btn__icon",
    "aria-hidden": "true",
    style: {
      display: 'inline-flex'
    }
  }, iconLeft) : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "im-btn__icon",
    "aria-hidden": "true",
    style: {
      display: 'inline-flex'
    }
  }, iconRight) : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled,
    "aria-disabled": disabled || undefined
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Compact square button for a single icon. Provide an accessible `label`.
 */
function IconButton({
  variant = 'plain',
  size = 'md',
  label,
  href,
  className = '',
  children,
  ...rest
}) {
  const cls = ['im-iconbtn', `im-iconbtn--${size}`, variant !== 'plain' ? `im-iconbtn--${variant}` : '', className].filter(Boolean).join(' ');
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls,
      "aria-label": label,
      title: label
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/content/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_ICONS = {
  info: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4M12 8h.01"
  })),
  tip: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 14c.2-1 .7-1.7 1.5-2.5C17.7 10.2 18 9 18 8a6 6 0 0 0-12 0c0 1 .3 2.2 1.5 3.5.8.8 1.3 1.5 1.5 2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 18h6M10 22h4"
  })),
  warning: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01"
  })),
  danger: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.9 2h8.2L22 7.9v8.2L16.1 22H7.9L2 16.1V7.9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v4M12 16h.01"
  }))
};

/** Highlighted note block for tutorials — tip, info, warning, danger. */
function Callout({
  type = 'info',
  title,
  icon,
  className = '',
  children,
  ...rest
}) {
  const cls = ['im-callout', `im-callout--${type}`, className].filter(Boolean).join(' ');
  const glyph = icon !== undefined ? icon : DEFAULT_ICONS[type];
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "note"
  }, rest), glyph ? /*#__PURE__*/React.createElement("span", {
    className: "im-callout__icon",
    "aria-hidden": "true"
  }, glyph) : null, /*#__PURE__*/React.createElement("div", {
    className: "im-callout__content"
  }, title ? /*#__PURE__*/React.createElement("p", {
    className: "im-callout__title"
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    className: "im-callout__body"
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Callout.jsx", error: String((e && e.message) || e) }); }

// components/content/CodeBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Dark terminal-style code block with a title bar and language label. */
function CodeBlock({
  code,
  language = 'powershell',
  filename,
  className = '',
  children,
  ...rest
}) {
  const cls = ['im-code', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "im-code__bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "im-code__dots"
  }, /*#__PURE__*/React.createElement("span", {
    className: "im-code__dot",
    style: {
      background: 'var(--red-500)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "im-code__dot",
    style: {
      background: 'var(--green-500)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "im-code__dot",
    style: {
      background: 'var(--blue-400)'
    }
  })), filename ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 4
    }
  }, filename) : null, /*#__PURE__*/React.createElement("span", {
    className: "im-code__lang"
  }, language)), /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", null, code != null ? code : children)));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Circular avatar. Shows an image, or initials over the brand gradient. */
function Avatar({
  src,
  name = '',
  size = 'md',
  ring = false,
  className = '',
  ...rest
}) {
  const cls = ['im-avatar', `im-avatar--${size}`, ring ? 'im-avatar--ring' : '', className].filter(Boolean).join(' ');
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    title: name || undefined
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : /*#__PURE__*/React.createElement("span", null, initials));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status/label pill in the display typeface. */
function Badge({
  variant = 'neutral',
  dot = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['im-badge', `im-badge--${variant}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "im-badge__dot"
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Content card for blog articles and YouTube videos.
 * Composable via props; renders as a link when `href` is set.
 */
function Card({
  media,
  kind = 'article',
  // 'article' | 'video'
  badge,
  // React node rendered top-left over media
  title,
  excerpt,
  meta,
  // React node rendered in the footer
  href,
  interactive = true,
  className = '',
  children,
  ...rest
}) {
  const Root = href ? 'a' : 'div';
  const cls = ['im-card', interactive || href ? 'im-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Root, _extends({
    href: href,
    className: cls,
    style: href ? {
      color: 'inherit'
    } : undefined
  }, rest), media !== undefined && /*#__PURE__*/React.createElement("div", {
    className: "im-card__media"
  }, typeof media === 'string' ? /*#__PURE__*/React.createElement("img", {
    src: media,
    alt: title || ''
  }) : media, badge ? /*#__PURE__*/React.createElement("div", {
    className: "im-card__media-badge"
  }, badge) : null, kind === 'video' ? /*#__PURE__*/React.createElement("div", {
    className: "im-card__play",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5v14l11-7z"
  }))) : null), /*#__PURE__*/React.createElement("div", {
    className: "im-card__body"
  }, children ? children : /*#__PURE__*/React.createElement(React.Fragment, null, title ? /*#__PURE__*/React.createElement("h3", {
    className: "im-card__title"
  }, title) : null, excerpt ? /*#__PURE__*/React.createElement("p", {
    className: "im-card__excerpt"
  }, excerpt) : null, meta ? /*#__PURE__*/React.createElement("div", {
    className: "im-card__meta"
  }, meta) : null)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Topic / category chip. Renders an <a> when `href` is set, else a <span>. */
function Tag({
  variant = 'blue',
  node = true,
  href,
  className = '',
  children,
  ...rest
}) {
  const cls = ['im-tag', variant !== 'blue' ? `im-tag--${variant}` : '', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, node ? /*#__PURE__*/React.createElement("span", {
    className: "im-tag__node",
    "aria-hidden": "true"
  }) : null, children);
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: cls
  }, rest), inner);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), inner);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labelled text input. Wraps label, field, hint and error state. */
function Input({
  label,
  hint,
  error,
  id,
  className = '',
  containerClassName = '',
  ...rest
}) {
  const inputId = id || (label ? `im-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const inputCls = ['im-input', error ? 'im-input--error' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: ['im-field', containerClassName].filter(Boolean).join(' ')
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "im-field__label",
    htmlFor: inputId
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: inputCls,
    "aria-invalid": !!error || undefined
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "im-field__hint",
    style: {
      color: 'var(--red-600)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "im-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labelled dropdown select. Pass `options` as strings or {value,label}. */
function Select({
  label,
  hint,
  error,
  id,
  options = [],
  placeholder,
  className = '',
  containerClassName = '',
  children,
  ...rest
}) {
  const selId = id || (label ? `im-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const selCls = ['im-input', error ? 'im-input--error' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: ['im-field', containerClassName].filter(Boolean).join(' ')
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "im-field__label",
    htmlFor: selId
  }, label) : null, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    className: selCls,
    "aria-invalid": !!error || undefined
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, children ? children : options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), error ? /*#__PURE__*/React.createElement("span", {
    className: "im-field__hint",
    style: {
      color: 'var(--red-600)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "im-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Underline tab bar. Controlled via `value`/`onChange`, or uncontrolled with `defaultValue`. */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  className = '',
  ...rest
}) {
  const first = items[0] && (typeof items[0] === 'string' ? items[0] : items[0].value);
  const [internal, setInternal] = React.useState(defaultValue ?? first);
  const active = value !== undefined ? value : internal;
  const select = val => {
    if (value === undefined) setInternal(val);
    if (onChange) onChange(val);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['im-tabs', className].filter(Boolean).join(' '),
    role: "tablist"
  }, rest), items.map(it => {
    const val = typeof it === 'string' ? it : it.value;
    const lab = typeof it === 'string' ? it : it.label;
    const isActive = val === active;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      "aria-selected": isActive,
      className: ['im-tab', isActive ? 'im-tab--active' : ''].filter(Boolean).join(' '),
      onClick: () => select(val)
    }, lab);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
// Router for the ImagineMill website UI kit.
function App() {
  const [screen, setScreen] = React.useState('home');
  const nav = id => {
    setScreen(id);
    window.scrollTo({
      top: 0
    });
  };
  const openArticle = () => nav('article');
  let body;
  if (screen === 'home' || screen === 'articles') body = /*#__PURE__*/React.createElement(HomeScreen, {
    onOpen: openArticle
  });else if (screen === 'article') body = /*#__PURE__*/React.createElement(ArticleScreen, {
    onBack: () => nav('home')
  });else if (screen === 'videos') body = /*#__PURE__*/React.createElement(VideosScreen, {
    onOpen: openArticle
  });else if (screen === 'coaching') body = /*#__PURE__*/React.createElement(CoachingScreen, null);
  const headerCurrent = screen === 'article' ? 'articles' : screen;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    current: headerCurrent,
    onNav: nav
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, body), /*#__PURE__*/React.createElement(Footer, {
    onNav: nav
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ArticleScreen.jsx
try { (() => {
// Blog article reading view.
const {
  Tag: ATag,
  Avatar: AAvatar,
  Callout,
  CodeBlock,
  Button: AButton,
  Badge: ABadge
} = window.ImagineMillDesignSystem_ef9c8c;
function ArticleScreen({
  onBack
}) {
  const a = window.IM.ARTICLE;
  return /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gradient-screen-soft)',
      borderBottom: '1px solid var(--blue-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-md)',
      margin: '0 auto',
      padding: '32px var(--gutter) 44px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--blue-700)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      padding: 0,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "ArrowLeft",
    s: 16,
    c: "var(--blue-700)"
  }), " All articles"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(ATag, {
    variant: a.topicVariant
  }, a.topic), /*#__PURE__*/React.createElement(AedgeReading, null)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 44,
      lineHeight: 1.08,
      margin: '0 0 16px',
      color: 'var(--navy-800)'
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      color: 'var(--text-body)',
      margin: '0 0 28px',
      lineHeight: 1.5
    }
  }, a.dek), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(AAvatar, {
    name: a.author,
    size: "md",
    ring: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--navy-800)'
    }
  }, a.author), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, a.role, " \xB7 ", a.date, " \xB7 ", a.read)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(AButton, {
    variant: "secondary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "Bookmark",
      s: 16,
      c: "var(--navy-800)"
    })
  }, "Save"), /*#__PURE__*/React.createElement(AButton, {
    variant: "ghost",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "Share2",
      s: 16,
      c: "var(--navy-700)"
    })
  }, "Share"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-md)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/7',
      marginTop: -20,
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(GradientMedia, {
    i: a.grad
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-md)',
      margin: '0 auto',
      padding: '44px var(--gutter) 0',
      fontSize: 18,
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      float: 'left',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 62,
      lineHeight: 0.8,
      color: 'var(--blue-500)',
      margin: '6px 12px 0 0'
    }
  }, "C"), "opilot is not a switch you flip on a Friday afternoon. It is a change to how people write, meet, and make decisions \u2014 and like any change, it lands best when it is planned, paced, and explained."), /*#__PURE__*/React.createElement("p", null, "Below is the same three-phase approach we walk through with every coaching client. It keeps IT in control, gives leadership the reporting they want, and \u2014 most importantly \u2014 leaves users feeling helped rather than surprised."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      marginTop: 40
    }
  }, "Phase 1 \u2014 Prepare the ground"), /*#__PURE__*/React.createElement("p", null, "Before a single license is assigned, get your data house in order. Copilot can only surface what a user already has permission to see, so oversharing becomes visible fast."), /*#__PURE__*/React.createElement(Callout, {
    type: "tip",
    title: "Start here"
  }, "Run a sharing audit before you assign any Copilot licenses. It is the single highest-leverage hour you will spend in the whole rollout."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24
    }
  }, "Use this to tighten tenant-wide sharing to a sensible default:"), /*#__PURE__*/React.createElement(CodeBlock, {
    language: "PowerShell",
    filename: "Prep-Copilot.ps1",
    code: `Connect-SPOService -Url https://contoso-admin.sharepoint.com\n\n# Restrict external sharing to existing guests only\nSet-SPOTenant -SharingCapability ExistingExternalUserSharingOnly\n\n# Surface files shared with 'Everyone' for review\nGet-SPOSite -Limit All | Where-Object { $_.SharingCapability -eq 'ExternalUserSharingOnly' }`
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      marginTop: 40
    }
  }, "Phase 2 \u2014 Pilot with real work"), /*#__PURE__*/React.createElement("p", null, "Pick fifteen to twenty people across three teams \u2014 not just the enthusiasts. Give them real tasks, a shared channel to compare notes, and a weekly 30-minute clinic."), /*#__PURE__*/React.createElement(Callout, {
    type: "warning",
    title: "Avoid the demo trap"
  }, "Impressive demos do not predict daily value. Measure whether pilot users reach for Copilot unprompted in week three. That is your real signal."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      marginTop: 40
    }
  }, "Phase 3 \u2014 Scale with confidence"), /*#__PURE__*/React.createElement("p", null, "Roll out by team, not by headcount. Pair every wave with a short live session and a one-page cheat sheet, and keep the clinic running for a month after each wave."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      margin: '40px 0 8px',
      paddingTop: 28,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(ATag, {
    variant: "red"
  }, "AI"), /*#__PURE__*/React.createElement(ATag, null, "Copilot"), /*#__PURE__*/React.createElement(ATag, {
    variant: "green"
  }, "Rollout"), /*#__PURE__*/React.createElement(ATag, {
    variant: "blue"
  }, "Admin"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-md)',
      margin: '32px auto 0',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'center',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 24,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(AAvatar, {
    name: a.author,
    size: "lg",
    ring: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--navy-800)'
    }
  }, a.author), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, a.role, " at PortalSpark. Jordan helps modern-work teams adopt Microsoft 365 and AI without the drama.")), /*#__PURE__*/React.createElement(AButton, {
    variant: "ink",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "Calendar",
      s: 16,
      c: "#fff"
    })
  }, "Book a session"))));
}
function AedgeReading() {
  return /*#__PURE__*/React.createElement(ABadge, {
    variant: "neutral"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "Clock",
    s: 12,
    c: "var(--gray-500)"
  }), " 9 min read");
}
Object.assign(window, {
  ArticleScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ArticleScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CoachingScreen.jsx
try { (() => {
// PortalSpark coaching services screen (the commercial side).
const {
  Button: CButton,
  Badge: CBadge,
  Callout: CCallout,
  Avatar: CAvatar
} = window.ImagineMillDesignSystem_ef9c8c;
function PlanCard({
  featured,
  name,
  price,
  unit,
  blurb,
  features,
  cta
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: featured ? 'var(--navy-800)' : 'var(--surface-card)',
      color: featured ? 'var(--text-on-navy)' : 'var(--text-body)',
      border: featured ? '1px solid var(--navy-700)' : '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      padding: 30,
      boxShadow: featured ? 'var(--shadow-xl)' : 'var(--shadow-sm)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }
  }, featured ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 20,
      right: 20
    }
  }, /*#__PURE__*/React.createElement(CBadge, {
    variant: "info"
  }, "Most popular")) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: featured ? '#fff' : 'var(--navy-800)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '14px 0 6px',
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 42,
      color: featured ? '#fff' : 'var(--navy-800)'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      color: featured ? 'var(--text-on-navy-muted)' : 'var(--text-muted)',
      fontSize: 14
    }
  }, unit)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: featured ? 'var(--text-on-navy-muted)' : 'var(--text-muted)',
      margin: '0 0 20px'
    }
  }, blurb), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "Check",
    s: 18,
    c: featured ? 'var(--green-400)' : 'var(--green-600)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: featured ? '#dbe6fb' : 'var(--text-body)'
    }
  }, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(CButton, {
    variant: featured ? 'green' : 'secondary',
    block: true
  }, cta)));
}
function CoachingScreen() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "im-circuit-bg",
    style: {
      color: 'var(--text-on-navy)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: '64px var(--gutter)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/imaginemill-icon.png",
    alt: "",
    style: {
      height: 52,
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "im-eyebrow",
    style: {
      color: 'var(--blue-300)'
    }
  }, "PortalSpark Coaching"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 46,
      lineHeight: 1.1,
      margin: '14px auto 16px',
      maxWidth: '18ch'
    }
  }, "Guidance that turns overwhelm into momentum"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-navy-muted)',
      fontSize: 19,
      maxWidth: '54ch',
      margin: '0 auto 30px'
    }
  }, "The blog and videos are free, forever. When your team needs hands-on help, PortalSpark coaching takes you the rest of the way."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(CButton, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      n: "ArrowRight",
      s: 18,
      c: "#fff"
    })
  }, "Book a discovery call"), /*#__PURE__*/React.createElement(CButton, {
    variant: "secondary",
    size: "lg"
  }, "See how it works")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: '56px var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      margin: '0 0 10px'
    }
  }, "Ways to work together"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 17,
      margin: 0
    }
  }, "Every engagement starts with a free call. No pressure, ever.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(PlanCard, {
    name: "Office Hours",
    price: "$180",
    unit: "/ session",
    blurb: "A focused hour to unblock a specific problem.",
    features: ['60-minute live video call', 'Screen-share troubleshooting', 'Written follow-up notes', 'Recording to keep'],
    cta: "Book an hour"
  }), /*#__PURE__*/React.createElement(PlanCard, {
    featured: true,
    name: "Adoption Sprint",
    price: "$2,400",
    unit: "/ month",
    blurb: "Hands-on partnership through a rollout.",
    features: ['Weekly working sessions', 'Custom rollout playbook', 'Admin + end-user training', 'Slack access between calls', 'Leadership reporting pack'],
    cta: "Start a sprint"
  }), /*#__PURE__*/React.createElement(PlanCard, {
    name: "Team Workshop",
    price: "$1,200",
    unit: "/ workshop",
    blurb: "A half-day, tailored to your stack.",
    features: ['Up to 25 attendees', 'Tailored to your tenant', 'Hands-on exercises', 'Cheat sheets for everyone'],
    cta: "Plan a workshop"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      maxWidth: 'var(--container-md)',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, /*#__PURE__*/React.createElement(CCallout, {
    type: "info",
    title: "Not sure which fits?"
  }, "Most teams start with a single Office Hours session, then move into a Sprint once we have found the real bottleneck together. Book the call and we will figure it out.")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '48px auto 0',
      maxWidth: 'var(--container-md)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("hr", {
    className: "im-signal-rule",
    style: {
      width: 54,
      margin: '0 auto 24px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 1.4,
      color: 'var(--navy-800)',
      margin: '0 0 20px'
    }
  }, "\"We went from dreading Copilot to leading with it. PortalSpark gave us a plan our whole leadership team could get behind.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(CAvatar, {
    name: "Dana Reyes",
    size: "md",
    ring: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontFamily: 'var(--font-display)',
      color: 'var(--navy-800)'
    }
  }, "Dana Reyes"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "IT Director, Northwind Traders"))))));
}
Object.assign(window, {
  CoachingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CoachingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// Home / landing screen for ImagineMill.
const {
  Card,
  Badge,
  Tag,
  Tabs,
  Avatar,
  Button: HButton
} = window.ImagineMillDesignSystem_ef9c8c;
function MetaRow({
  author,
  date,
  read
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Avatar, {
    name: author,
    size: "xs"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)',
      fontWeight: 600
    }
  }, author), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gray-300)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, date), read ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gray-300)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, read)) : null);
}
function PostCard({
  p
}) {
  return /*#__PURE__*/React.createElement(Card, {
    href: "#",
    kind: p.kind,
    media: /*#__PURE__*/React.createElement(GradientMedia, {
      i: p.grad
    }),
    badge: /*#__PURE__*/React.createElement(Badge, {
      variant: p.kind === 'video' ? 'navy' : 'info'
    }, p.badge),
    title: p.title,
    excerpt: p.excerpt,
    meta: /*#__PURE__*/React.createElement(MetaRow, {
      author: p.author,
      date: p.date,
      read: p.read
    })
  });
}
function Hero({
  f,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--gradient-screen-soft)',
      borderBottom: '1px solid var(--blue-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '48px var(--gutter) 56px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "im-eyebrow",
    style: {
      color: 'var(--red-500)'
    }
  }, "Featured \xB7 ", f.topic), /*#__PURE__*/React.createElement("span", {
    className: "im-node",
    style: {
      color: 'var(--green-500)',
      width: 12,
      height: 12
    }
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 46,
      lineHeight: 1.08,
      margin: '0 0 18px',
      color: 'var(--navy-800)'
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--text-body)',
      maxWidth: '52ch',
      margin: '0 0 26px'
    }
  }, f.excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(HButton, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      n: "ArrowRight",
      s: 18,
      c: "#fff"
    }),
    onClick: onOpen
  }, "Read the guide"), /*#__PURE__*/React.createElement(HButton, {
    variant: "secondary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "Youtube",
      s: 18,
      c: "var(--navy-800)"
    }),
    onClick: onOpen
  }, "Watch series")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 28,
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: f.author,
    size: "sm",
    ring: true
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--navy-800)'
    }
  }, f.author), " \xB7 ", f.role), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gray-300)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, f.read))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-xl)',
      cursor: 'pointer'
    },
    onClick: onOpen
  }, /*#__PURE__*/React.createElement(GradientMedia, {
    i: f.grad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      margin: 'auto',
      width: 72,
      height: 72,
      borderRadius: 999,
      background: 'rgba(16,24,64,0.72)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "Play",
    s: 28,
    c: "#fff"
  }))))));
}
function Newsletter() {
  return /*#__PURE__*/React.createElement("section", {
    className: "im-circuit-bg",
    style: {
      borderRadius: 'var(--radius-2xl)',
      margin: '64px 0 0',
      padding: '52px 48px',
      textAlign: 'center',
      color: 'var(--text-on-navy)'
    }
  }, /*#__PURE__*/React.createElement("hr", {
    className: "im-signal-rule",
    style: {
      width: 60,
      margin: '0 auto 22px'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 32,
      margin: '0 0 12px'
    }
  }, "One clear email a week."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-navy-muted)',
      maxWidth: '46ch',
      margin: '0 auto 26px',
      fontSize: 17
    }
  }, "The best of ImagineMill \u2014 new guides, videos, and the M365 changes that actually matter. No noise."), /*#__PURE__*/React.createElement("form", {
    onClick: e => e.preventDefault(),
    style: {
      display: 'flex',
      gap: 10,
      maxWidth: 440,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "im-input",
    placeholder: "you@company.com",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(HButton, {
    variant: "green",
    size: "md"
  }, "Subscribe")));
}
function HomeScreen({
  onOpen
}) {
  const [topic, setTopic] = React.useState('Latest');
  const posts = topic === 'Latest' ? window.IM.POSTS : window.IM.POSTS.filter(p => p.topic === topic);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    f: window.IM.FEATURED,
    onOpen: onOpen
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '48px var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 28
    }
  }, "Fresh from the mill"), /*#__PURE__*/React.createElement(Tabs, {
    items: window.IM.TOPICS,
    value: topic,
    onChange: setTopic
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, (posts.length ? posts : window.IM.POSTS).map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: onOpen,
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(PostCard, {
    p: p
  })))), /*#__PURE__*/React.createElement(Newsletter, null)));
}
Object.assign(window, {
  HomeScreen,
  PostCard,
  MetaRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
// Header + Footer chrome for the ImagineMill site.
const {
  Button,
  IconButton,
  Tag
} = window.ImagineMillDesignSystem_ef9c8c;
function Header({
  current,
  onNav
}) {
  const links = [['home', 'Home'], ['articles', 'Articles'], ['videos', 'Videos'], ['coaching', 'Coaching']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(255,255,255,0.86)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 68,
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/imaginemill-suitebar.png",
    alt: "ImagineMill",
    style: {
      height: 30
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 8
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(id);
    },
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      letterSpacing: '0.02em',
      padding: '8px 12px',
      borderRadius: 8,
      color: current === id ? 'var(--blue-700)' : 'var(--navy-700)',
      background: current === id ? 'var(--blue-050)' : 'transparent'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Search"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "Search",
    s: 19
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "Bell",
      s: 16,
      c: "#fff"
    }),
    onClick: () => onNav('home')
  }, "Subscribe"))));
}
function Footer({
  onNav
}) {
  const cols = [['Learn', ['Articles', 'Video library', 'Guides', 'Glossary']], ['Topics', ['Microsoft 365', 'Cloud', 'AI & Copilot', 'Security']], ['PortalSpark', ['Coaching', 'Workshops', 'About', 'Contact']]];
  return /*#__PURE__*/React.createElement("footer", {
    className: "im-circuit-bg",
    style: {
      marginTop: 80,
      color: 'var(--text-on-navy)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '56px var(--gutter) 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/imaginemill-icon.png",
    alt: "",
    style: {
      height: 44,
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-navy-muted)',
      fontSize: 14,
      maxWidth: 260,
      margin: 0,
      lineHeight: 1.6
    }
  }, "Modern workplace understanding \u2014 free guidance on Microsoft 365, cloud, and AI. A PortalSpark resource."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 18
    }
  }, ['Youtube', 'Linkedin', 'Rss'].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      width: 38,
      height: 38,
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(255,255,255,0.06)',
      color: 'var(--blue-200)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: n,
    s: 18,
    c: "var(--blue-200)"
  }))))), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--blue-300)',
      marginBottom: 14
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('coaching');
    },
    style: {
      color: 'var(--text-on-navy-muted)',
      fontSize: 14
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 44,
      paddingTop: 22,
      borderTop: '1px solid rgba(255,255,255,0.08)',
      fontSize: 13,
      color: 'var(--text-on-navy-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 ImagineMill \xB7 Owned by PortalSpark"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, "Privacy \xB7 Terms"))));
}
Object.assign(window, {
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/VideosScreen.jsx
try { (() => {
// Video library screen with a featured player and grid.
const {
  Card: VCard,
  Badge: VBadge,
  Tag: VTag,
  Avatar: VAvatar,
  Button: VButton,
  IconButton: VIconBtn
} = window.ImagineMillDesignSystem_ef9c8c;
function VideosScreen({
  onOpen
}) {
  const vids = window.IM.POSTS.filter(p => p.kind === 'video').concat(window.IM.POSTS.filter(p => p.kind === 'article').map(p => ({
    ...p,
    kind: 'video',
    badge: 'Video'
  })));
  const feat = window.IM.POSTS.find(p => p.kind === 'video');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '40px var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "im-eyebrow",
    style: {
      color: 'var(--red-500)'
    }
  }, "Video Library")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 40,
      margin: '0 0 8px'
    }
  }, "Watch & learn"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--text-muted)',
      maxWidth: '56ch',
      margin: '0 0 32px'
    }
  }, "Short, practical walkthroughs for Microsoft 365, cloud, and AI. New videos every week."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 28,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/9',
      position: 'relative',
      cursor: 'pointer'
    },
    onClick: onOpen
  }, /*#__PURE__*/React.createElement(GradientMedia, {
    i: feat.grad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      margin: 'auto',
      width: 80,
      height: 80,
      borderRadius: 999,
      background: 'rgba(16,24,64,0.75)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "Play",
    s: 32,
    c: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 12,
      right: 12,
      background: 'rgba(10,15,46,0.85)',
      color: '#fff',
      padding: '3px 8px',
      borderRadius: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 12
    }
  }, "6:24"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 16px',
      background: 'var(--navy-900)'
    }
  }, /*#__PURE__*/React.createElement(VIconBtn, {
    label: "Play",
    variant: "solid"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "Play",
    s: 16,
    c: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 5,
      borderRadius: 3,
      background: 'rgba(255,255,255,0.15)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '34%',
      borderRadius: 3,
      background: 'var(--gradient-signal)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-on-navy-muted)'
    }
  }, "2:11 / 6:24"), /*#__PURE__*/React.createElement(Icon, {
    n: "Volume2",
    s: 18,
    c: "var(--text-on-navy-muted)"
  }), /*#__PURE__*/React.createElement(Icon, {
    n: "Maximize2",
    s: 17,
    c: "var(--text-on-navy-muted)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(VBadge, {
    variant: "danger",
    dot: true
  }, "Now playing"), /*#__PURE__*/React.createElement(VTag, {
    variant: feat.topicVariant,
    node: false
  }, feat.topic)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26,
      margin: '0 0 12px'
    }
  }, feat.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      margin: '0 0 20px'
    }
  }, feat.excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 22,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(VAvatar, {
    name: feat.author,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--navy-800)'
    }
  }, feat.author), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gray-300)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "12k views")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(VButton, {
    variant: "green",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "Bell",
      s: 16,
      c: "#fff"
    })
  }, "Subscribe"), /*#__PURE__*/React.createElement(VButton, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "ListPlus",
      s: 16,
      c: "var(--navy-800)"
    })
  }, "Add to list")))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      margin: '0 0 20px'
    }
  }, "Up next"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 22
    }
  }, vids.slice(0, 4).map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: onOpen,
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(VCard, {
    href: "#",
    kind: "video",
    media: /*#__PURE__*/React.createElement(GradientMedia, {
      i: p.grad
    }),
    badge: /*#__PURE__*/React.createElement(VBadge, {
      variant: "navy"
    }, "Video"),
    title: p.title,
    meta: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VAvatar, {
      name: p.author,
      size: "xs"
    }), /*#__PURE__*/React.createElement("span", null, p.author))
  })))));
}
Object.assign(window, {
  VideosScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/VideosScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Sample content for the ImagineMill website UI kit.
// Thumbnails use brand gradients (no stock photography in the system yet).
window.IM = {
  GRADIENTS: [['#1080c0', '#38b0e8'], ['#101840', '#26326e'], ['#0a5c94', '#1e96d8'], ['#101840', '#0f74b4'], ['#1888c8', '#8fd4f2'], ['#1a2456', '#37458a']],
  TOPICS: ['Latest', 'Microsoft 365', 'Cloud', 'AI', 'Security', 'Admin'],
  FEATURED: {
    kind: 'article',
    topic: 'AI',
    topicVariant: 'red',
    badge: 'Featured',
    title: 'Rolling out Copilot without the chaos',
    excerpt: 'AI is arriving in every Microsoft 365 app whether you plan for it or not. Here is a calm, staged playbook for admins bringing Copilot to real people — with the guardrails that keep leadership comfortable.',
    author: 'Jordan Vale',
    role: 'Modern Work Lead',
    date: 'Jun 24, 2026',
    read: '9 min read',
    grad: 0
  },
  POSTS: [{
    kind: 'video',
    topic: 'Microsoft 365',
    topicVariant: 'blue',
    badge: 'Video',
    title: 'Teams channels vs. chats: when to use which',
    excerpt: 'A 6-minute tour that finally makes the difference click for your whole team.',
    author: 'Priya Shah',
    date: 'Jun 21',
    read: '6 min',
    grad: 4
  }, {
    kind: 'article',
    topic: 'Security',
    topicVariant: 'red',
    badge: 'Guide',
    title: 'Tenant-wide sharing settings, explained',
    excerpt: 'What each toggle really does — and the safe defaults we recommend for most organizations.',
    author: 'Marcus Lee',
    date: 'Jun 18',
    read: '11 min',
    grad: 1
  }, {
    kind: 'article',
    topic: 'Cloud',
    topicVariant: 'green',
    badge: 'Guide',
    title: 'SharePoint or OneDrive? A decision map',
    excerpt: 'Stop guessing where files should live. One flowchart your users will actually follow.',
    author: 'Ada Okoro',
    date: 'Jun 15',
    read: '7 min',
    grad: 2
  }, {
    kind: 'video',
    topic: 'AI',
    topicVariant: 'red',
    badge: 'Video',
    title: 'Writing prompts that Copilot understands',
    excerpt: 'The four-part prompt formula we teach in every coaching session.',
    author: 'Jordan Vale',
    date: 'Jun 12',
    read: '8 min',
    grad: 3
  }, {
    kind: 'article',
    topic: 'Admin',
    topicVariant: 'blue',
    badge: 'How-to',
    title: 'Automating onboarding with Power Automate',
    excerpt: 'Give every new hire a perfect first day — without touching a checklist yourself.',
    author: 'Priya Shah',
    date: 'Jun 9',
    read: '10 min',
    grad: 5
  }, {
    kind: 'article',
    topic: 'Microsoft 365',
    topicVariant: 'blue',
    badge: 'Guide',
    title: 'The admin center tour every new admin needs',
    excerpt: 'Where everything lives, what to touch first, and what to leave alone.',
    author: 'Marcus Lee',
    date: 'Jun 5',
    read: '9 min',
    grad: 0
  }],
  ARTICLE: {
    topic: 'AI',
    topicVariant: 'red',
    title: 'Rolling out Copilot without the chaos',
    dek: 'A calm, staged playbook for bringing AI into Microsoft 365 — with the guardrails that keep leadership comfortable and users excited.',
    author: 'Jordan Vale',
    role: 'Modern Work Lead',
    date: 'June 24, 2026',
    read: '9 min read',
    grad: 0
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/helpers.jsx
try { (() => {
// Shared helpers for the ImagineMill website UI kit.

// Lucide icon renderer. Usage: <Icon n="Play" s={18} c="var(--blue-500)" />
function Icon({
  n,
  s = 20,
  c = 'currentColor',
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide && window.lucide[n]) {
      ref.current.innerHTML = '';
      const el = window.lucide.createElement(window.lucide[n]);
      el.setAttribute('width', s);
      el.setAttribute('height', s);
      el.setAttribute('stroke', c);
      ref.current.appendChild(el);
    }
  }, [n, s, c]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      ...style
    },
    "aria-hidden": "true"
  });
}

// Gradient media panel used as a thumbnail / hero art placeholder.
function GradientMedia({
  i = 0,
  children,
  style
}) {
  const [from, to] = window.IM.GRADIENTS[i % window.IM.GRADIENTS.length];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: `linear-gradient(135deg, ${from}, ${to})`,
      position: 'relative',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.5,
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)',
      backgroundSize: '26px 26px'
    }
  }), children);
}
Object.assign(window, {
  Icon,
  GradientMedia
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/helpers.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
