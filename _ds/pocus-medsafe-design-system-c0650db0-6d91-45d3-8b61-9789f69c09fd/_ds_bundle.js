/* @ds-bundle: {"format":3,"namespace":"POCUSMedsafeDesignSystem_c0650d","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Progress","sourcePath":"components/navigation/Progress.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"736746e52578","components/buttons/IconButton.jsx":"a061bd017ecd","components/display/Avatar.jsx":"058f45c40f38","components/display/Card.jsx":"985383f0df18","components/display/Stat.jsx":"e1f6f3c6608d","components/feedback/Alert.jsx":"62476153bd7e","components/feedback/Badge.jsx":"cabf68a92e60","components/feedback/Tag.jsx":"a3450bdb942c","components/forms/Checkbox.jsx":"9b9894bfd0b3","components/forms/Field.jsx":"f5b72c97c86d","components/forms/Input.jsx":"25c5b64e6320","components/forms/Radio.jsx":"4034d6eede0c","components/forms/Select.jsx":"dc1972b3363d","components/forms/Switch.jsx":"cb2dd4dc5e08","components/navigation/Progress.jsx":"cdb2f5861c11","components/navigation/Tabs.jsx":"8e32390abca9","ui_kits/plataforma/AppShell.jsx":"c1894372f07d","ui_kits/plataforma/DashboardScreen.jsx":"d24c18c5c595","ui_kits/plataforma/Icon.jsx":"e4b4ca7ec281","ui_kits/plataforma/LessonScreen.jsx":"b9550ed56cda","ui_kits/plataforma/LoginScreen.jsx":"6e21a322a6e4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.POCUSMedsafeDesignSystem_c0650d = window.POCUSMedsafeDesignSystem_c0650d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 'var(--fs-sm)',
      padding: '7px 14px',
      gap: '6px',
      minHeight: '34px'
    },
    md: {
      fontSize: 'var(--fs-body)',
      padding: '10px 20px',
      gap: '8px',
      minHeight: '44px'
    },
    lg: {
      fontSize: 'var(--fs-lg)',
      padding: '13px 26px',
      gap: '10px',
      minHeight: '52px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--pocus-blue)',
      color: '#fff',
      border: '1.5px solid var(--pocus-blue)'
    },
    secondary: {
      background: 'var(--surface-tint)',
      color: 'var(--pocus-blue)',
      border: '1.5px solid var(--blue-100)'
    },
    accent: {
      background: 'var(--tech-blue)',
      color: '#fff',
      border: '1.5px solid var(--tech-blue)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--pocus-blue)',
      border: '1.5px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--tech-blue)',
      border: '1.5px solid transparent'
    }
  };
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--fw-semibold)',
    fontSize: sizes[size].fontSize,
    lineHeight: 1,
    letterSpacing: 'var(--ls-snug)',
    padding: sizes[size].padding,
    minHeight: sizes[size].minHeight,
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
    whiteSpace: 'nowrap',
    ...variants[variant],
    ...style
  };
  const hoverMap = {
    primary: 'var(--blue-800)',
    accent: 'var(--accent-hover)',
    secondary: 'var(--blue-100)',
    outline: 'var(--surface-sunken)',
    ghost: 'var(--surface-tint)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = hoverMap[variant];
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.background = variants[variant].background;
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
    },
    onMouseUp: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(0)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  label,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 34,
    md: 44,
    lg: 52
  };
  const dim = sizes[size];
  const variants = {
    primary: {
      background: 'var(--pocus-blue)',
      color: '#fff',
      border: '1.5px solid var(--pocus-blue)'
    },
    accent: {
      background: 'var(--tech-blue)',
      color: '#fff',
      border: '1.5px solid var(--tech-blue)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--pocus-blue)',
      border: '1.5px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--tech-blue)',
      border: '1.5px solid transparent'
    }
  };
  const hoverMap = {
    primary: 'var(--blue-800)',
    accent: 'var(--accent-hover)',
    outline: 'var(--surface-sunken)',
    ghost: 'var(--surface-tint)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-base) var(--ease-standard)',
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = hoverMap[variant];
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.background = variants[variant].background;
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function Avatar({
  name = '',
  src,
  size = 'md',
  style = {}
}) {
  const sizes = {
    sm: 32,
    md: 40,
    lg: 52,
    xl: 72
  };
  const dim = sizes[size] || sizes.md;
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      flexShrink: 0,
      borderRadius: '50%',
      overflow: 'hidden',
      background: 'var(--blue-100)',
      color: 'var(--blue-700)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: dim * 0.36,
      letterSpacing: '0.02em',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  variant = 'default',
  padding = 'md',
  interactive = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-body)'
    },
    tint: {
      background: 'var(--surface-tint)',
      border: '1px solid var(--blue-100)',
      color: 'var(--text-body)'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      border: '1px solid transparent',
      color: 'var(--text-on-dark)'
    },
    outline: {
      background: 'transparent',
      border: '1.5px solid var(--border-default)',
      color: 'var(--text-body)'
    }
  };
  const pads = {
    none: '0',
    sm: 'var(--space-4)',
    md: 'var(--space-5)',
    lg: 'var(--space-6)'
  };
  const v = variants[variant] || variants.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-card)',
      padding: pads[padding],
      boxShadow: interactive ? hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)' : 'var(--shadow-xs)',
      transform: interactive && hover ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : 'default',
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
function Stat({
  value,
  label,
  sublabel,
  icon = null,
  align = 'left',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--tech-blue)',
      marginBottom: 4
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-h1)',
      color: 'var(--text-strong)',
      lineHeight: 1,
      letterSpacing: 'var(--ls-tight)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)'
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, sublabel));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function Alert({
  children,
  title,
  variant = 'info',
  icon = null,
  onClose,
  style = {}
}) {
  const variants = {
    info: {
      bg: 'var(--info-soft)',
      border: 'var(--clinical-blue)',
      fg: 'var(--blue-700)'
    },
    success: {
      bg: 'var(--success-soft)',
      border: 'var(--success)',
      fg: 'var(--success)'
    },
    warning: {
      bg: 'var(--warning-soft)',
      border: 'var(--warning)',
      fg: 'var(--warning)'
    },
    danger: {
      bg: 'var(--danger-soft)',
      border: 'var(--danger)',
      fg: 'var(--danger)'
    }
  };
  const v = variants[variant] || variants.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: '12px',
      background: v.bg,
      borderLeft: `3px solid ${v.border}`,
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: v.border,
      flexShrink: 0,
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-strong)',
      marginBottom: title && children ? 3 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      lineHeight: 1.5
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Fechar",
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      padding: 2,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.5 3.5L10.5 10.5M10.5 3.5L3.5 10.5",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  dot = false,
  style = {}
}) {
  const variants = {
    neutral: {
      bg: 'var(--grey-100)',
      fg: 'var(--grey-700)',
      dotc: 'var(--grey-500)'
    },
    brand: {
      bg: 'var(--surface-tint)',
      fg: 'var(--blue-700)',
      dotc: 'var(--tech-blue)'
    },
    accent: {
      bg: 'var(--tech-blue)',
      fg: '#fff',
      dotc: '#fff'
    },
    success: {
      bg: 'var(--success-soft)',
      fg: 'var(--success)',
      dotc: 'var(--success)'
    },
    warning: {
      bg: 'var(--warning-soft)',
      fg: 'var(--warning)',
      dotc: 'var(--warning)'
    },
    danger: {
      bg: 'var(--danger-soft)',
      fg: 'var(--danger)',
      dotc: 'var(--danger)'
    }
  };
  const v = variants[variant] || variants.neutral;
  const sizes = {
    sm: {
      fontSize: '11px',
      padding: dot ? '3px 9px 3px 7px' : '3px 9px'
    },
    md: {
      fontSize: '12px',
      padding: dot ? '4px 11px 4px 9px' : '4px 11px'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: sizes[size].fontSize,
      lineHeight: 1.4,
      letterSpacing: '0.01em',
      color: v.fg,
      background: v.bg,
      padding: sizes[size].padding,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: v.dotc,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  icon = null,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-subtle)',
      padding: '5px 10px',
      borderRadius: 'var(--radius-sm)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--tech-blue)'
    }
  }, icon), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    "aria-label": "Remover",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 16,
      height: 16,
      padding: 0,
      border: 'none',
      background: 'transparent',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      borderRadius: 'var(--radius-xs)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${checked ? 'var(--tech-blue)' : 'var(--border-default)'}`,
      background: checked ? 'var(--tech-blue)' : 'var(--surface-card)',
      transition: 'background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2L5 8.5L9.5 3.5",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger)',
      marginLeft: 3
    }
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  value,
  onChange,
  placeholder,
  type = 'text',
  size = 'md',
  disabled = false,
  invalid = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const sizes = {
    sm: {
      fontSize: 'var(--fs-sm)',
      padding: '8px 12px',
      minHeight: '36px'
    },
    md: {
      fontSize: 'var(--fs-body)',
      padding: '11px 14px',
      minHeight: '46px'
    },
    lg: {
      fontSize: 'var(--fs-lg)',
      padding: '14px 16px',
      minHeight: '54px'
    }
  };
  const borderColor = invalid ? 'var(--danger)' : focused ? 'var(--clinical-blue)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: sizes[size].padding,
      minHeight: sizes[size].minHeight,
      transition: 'border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
      boxShadow: focused && !invalid ? 'var(--shadow-focus)' : 'none',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)',
      flexShrink: 0
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: sizes[size].fontSize,
      color: 'var(--text-body)',
      lineHeight: 1.4
    }
  }, rest)), iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)',
      flexShrink: 0
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  checked = false,
  onChange,
  label,
  name,
  value,
  disabled = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(value !== undefined ? value : !checked),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: '50%',
      border: `1.5px solid ${checked ? 'var(--tech-blue)' : 'var(--border-default)'}`,
      background: 'var(--surface-card)',
      transition: 'border-color var(--dur-base) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--tech-blue)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  value,
  onChange,
  options = [],
  placeholder = 'Selecione…',
  size = 'md',
  disabled = false,
  invalid = false,
  style = {}
}) {
  const [focused, setFocused] = React.useState(false);
  const sizes = {
    sm: {
      fontSize: 'var(--fs-sm)',
      padding: '8px 36px 8px 12px',
      minHeight: '36px'
    },
    md: {
      fontSize: 'var(--fs-body)',
      padding: '11px 38px 11px 14px',
      minHeight: '46px'
    },
    lg: {
      fontSize: 'var(--fs-lg)',
      padding: '14px 40px 14px 16px',
      minHeight: '54px'
    }
  };
  const borderColor = invalid ? 'var(--danger)' : focused ? 'var(--clinical-blue)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: sizes[size].fontSize,
      color: value ? 'var(--text-body)' : 'var(--text-subtle)',
      padding: sizes[size].padding,
      minHeight: sizes[size].minHeight,
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focused && !invalid ? 'var(--shadow-focus)' : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color var(--dur-base) var(--ease-standard)'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.5 5L7 8.5L10.5 5",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      position: 'relative',
      width: 42,
      height: 24,
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--tech-blue)' : 'var(--grey-300)',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 20 : 2,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Progress.jsx
try { (() => {
function Progress({
  value = 0,
  max = 100,
  label,
  showValue = false,
  size = 'md',
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const heights = {
    sm: 6,
    md: 8,
    lg: 12
  };
  const h = heights[size] || heights.md;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)'
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: h,
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: 'var(--tech-blue)',
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Progress.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  variant = 'underline',
  style = {}
}) {
  const isUnderline = variant === 'underline';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: isUnderline ? 'var(--space-5)' : '4px',
      padding: isUnderline ? '0' : '4px',
      background: isUnderline ? 'transparent' : 'var(--surface-sunken)',
      borderRadius: isUnderline ? '0' : 'var(--radius-md)',
      borderBottom: isUnderline ? '1.5px solid var(--border-subtle)' : 'none',
      ...style
    }
  }, tabs.map(t => {
    const val = typeof t === 'string' ? t : t.value;
    const lbl = typeof t === 'string' ? t : t.label;
    const active = val === value;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(val),
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-semibold)',
        fontSize: 'var(--fs-sm)',
        cursor: 'pointer',
        border: 'none',
        transition: 'color var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)',
        ...(isUnderline ? {
          background: 'transparent',
          color: active ? 'var(--text-strong)' : 'var(--text-muted)',
          padding: '10px 2px',
          borderBottom: `2px solid ${active ? 'var(--tech-blue)' : 'transparent'}`,
          marginBottom: '-1.5px'
        } : {
          background: active ? 'var(--surface-card)' : 'transparent',
          color: active ? 'var(--text-strong)' : 'var(--text-muted)',
          padding: '8px 16px',
          borderRadius: 'var(--radius-sm)',
          boxShadow: active ? 'var(--shadow-xs)' : 'none'
        })
      }
    }, lbl);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/AppShell.jsx
try { (() => {
/* Top app bar + page frame for the POCUS Medsafe platform. */
function AppShell({
  active,
  onNavigate,
  children,
  user = 'Ana Lima'
}) {
  const DS = window.POCUSMedsafeDesignSystem_c0650d;
  const {
    Avatar
  } = DS;
  const nav = [{
    id: 'dashboard',
    label: 'Meus cursos'
  }, {
    id: 'catalog',
    label: 'Catálogo'
  }, {
    id: 'lesson',
    label: 'Em andamento'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--surface-page)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      height: 68,
      padding: '0 var(--space-7)',
      background: 'var(--pocus-blue)',
      color: '#fff',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-pocus-white.png",
    alt: "POCUS",
    style: {
      height: 26,
      cursor: 'pointer'
    },
    onClick: () => onNavigate('dashboard')
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginLeft: 'var(--space-4)'
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => onNavigate(n.id),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: active === n.id ? '#fff' : 'var(--mist-blue)',
      background: active === n.id ? 'rgba(255,255,255,0.10)' : 'transparent',
      border: 'none',
      padding: '8px 14px',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      transition: 'color var(--dur-base), background var(--dur-base)'
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'rgba(255,255,255,0.08)',
      borderRadius: 'var(--radius-md)',
      padding: '9px 14px',
      width: 240
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Search",
    size: 16,
    color: "var(--mist-blue)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--mist-blue)'
    }
  }, "Buscar janela, protocolo\u2026")), /*#__PURE__*/React.createElement(Icon, {
    name: "Bell",
    size: 20,
    color: "var(--mist-blue)"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: user,
    size: "sm"
  }))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, children));
}
Object.assign(window, {
  AppShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/DashboardScreen.jsx
try { (() => {
/* Dashboard — "Meus cursos": greeting, continue card, course grid. */
function DashboardScreen({
  onOpenLesson
}) {
  const DS = window.POCUSMedsafeDesignSystem_c0650d;
  const {
    Card,
    Badge,
    Progress,
    Button,
    Stat
  } = DS;
  const courses = [{
    id: 1,
    area: 'Pulmão',
    title: 'Ultrassom pulmonar à beira-leito',
    author: 'Dr. Marco Reis',
    lessons: 9,
    dur: '3h10',
    progress: 68,
    tone: 'var(--deep-blue)'
  }, {
    id: 2,
    area: 'Cardíaco',
    title: 'Avaliação cardíaca focada (FoCUS)',
    author: 'Dra. Júlia Tavares',
    lessons: 12,
    dur: '4h25',
    progress: 32,
    tone: 'var(--pocus-blue)'
  }, {
    id: 3,
    area: 'FAST',
    title: 'Protocolo FAST no trauma',
    author: 'Dr. Pedro Nunes',
    lessons: 8,
    dur: '2h40',
    progress: 0,
    tone: 'var(--blue-700)'
  }, {
    id: 4,
    area: 'Vascular',
    title: 'Acessos vasculares guiados',
    author: 'Dra. Ana Lima',
    lessons: 7,
    dur: '2h05',
    progress: 100,
    tone: 'var(--deep-blue)'
  }];
  function Thumb({
    tone,
    area
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: 116,
        background: tone,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/grafismo-rings.png",
      alt: "",
      style: {
        position: 'absolute',
        right: -28,
        top: -18,
        height: 168,
        opacity: 0.4,
        filter: 'brightness(2.4)'
      }
    }), /*#__PURE__*/React.createElement(Badge, {
      variant: "accent",
      style: {
        position: 'relative'
      }
    }, area));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-7) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pocus-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Bem-vinda de volta"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 34,
      color: 'var(--text-strong)',
      margin: 0,
      letterSpacing: '-0.02em'
    }
  }, "Ol\xE1, Ana"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 15,
      margin: '6px 0 0'
    }
  }, "Continue de onde parou e avance do exame ao racioc\xEDnio.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      paddingBottom: 4
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "3",
    label: "Em andamento"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "1",
    label: "Conclu\xEDdo"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "24h",
    label: "Estudadas"
  }))), /*#__PURE__*/React.createElement(Card, {
    variant: "inverse",
    padding: "none",
    style: {
      overflow: 'hidden',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "accent"
  }, "Continuar assistindo"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      color: '#fff',
      margin: '14px 0 6px',
      letterSpacing: '-0.01em'
    }
  }, "Ultrassom pulmonar \xE0 beira-leito"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--mist-blue)',
      fontSize: 14,
      margin: '0 0 6px'
    }
  }, "Aula 6 \xB7 Linhas B e s\xEDndrome intersticial"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320,
      margin: '20px 0 22px'
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    value: 68,
    showValue: true,
    label: "",
    style: {
      ['--surface-sunken']: 'rgba(255,255,255,0.16)'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Play",
      size: 18
    }),
    onClick: onOpenLesson
  }, "Retomar aula")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--deep-blue)',
      minHeight: 220,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/grafismo-beam.png",
    alt: "",
    style: {
      position: 'absolute',
      right: -40,
      top: '50%',
      transform: 'translateY(-50%)',
      height: 320,
      opacity: 0.55,
      filter: 'brightness(2.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.14)',
      backdropFilter: 'blur(2px)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Play",
    size: 26,
    color: "#fff"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Seus cursos"), /*#__PURE__*/React.createElement("a", {
    className: "pocus-link",
    href: "#",
    style: {
      fontSize: 14
    }
  }, "Ver cat\xE1logo completo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-5)'
    }
  }, courses.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.id,
    variant: "default",
    padding: "none",
    interactive: true,
    onClick: onOpenLesson,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Thumb, {
    tone: c.tone,
    area: c.area
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15.5,
      color: 'var(--text-strong)',
      margin: '0 0 4px',
      lineHeight: 1.3
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      margin: '0 0 14px'
    }
  }, c.author, " \xB7 ", c.lessons, " aulas \xB7 ", c.dur), c.progress === 100 ? /*#__PURE__*/React.createElement(Badge, {
    variant: "success",
    dot: true
  }, "Conclu\xEDdo") : c.progress === 0 ? /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral"
  }, "N\xE3o iniciado") : /*#__PURE__*/React.createElement(Progress, {
    value: c.progress,
    showValue: true,
    size: "sm"
  }))))));
}
Object.assign(window, {
  DashboardScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/Icon.jsx
try { (() => {
/* Shared icon helper for the POCUS Medsafe UI kit. Uses Lucide (technical
   line icons matching the brandbook's "ícones simples e técnicos"). */
function Icon({
  name,
  size = 20,
  stroke = 2,
  color = 'currentColor',
  style = {}
}) {
  const html = React.useMemo(() => {
    const node = window.lucide && window.lucide[name] ? window.lucide.createElement(window.lucide[name]) : null;
    if (!node) return '';
    node.setAttribute('width', size);
    node.setAttribute('height', size);
    node.setAttribute('stroke-width', stroke);
    return node.outerHTML;
  }, [name, size, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}
Object.assign(window, {
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/LessonScreen.jsx
try { (() => {
/* Lesson player — video stage, tabs, and module/lesson list. */
function LessonScreen({
  onBack
}) {
  const DS = window.POCUSMedsafeDesignSystem_c0650d;
  const {
    Tabs,
    Badge,
    Button,
    Progress,
    Alert,
    Avatar
  } = DS;
  const [tab, setTab] = React.useState('Visão geral');
  const lessons = [{
    n: 1,
    t: 'Janela e técnica de aquisição',
    dur: '14:20',
    done: true
  }, {
    n: 2,
    t: 'Padrão A e deslizamento pleural',
    dur: '11:05',
    done: true
  }, {
    n: 3,
    t: 'Linhas B e síndrome intersticial',
    dur: '16:48',
    done: false,
    active: true
  }, {
    n: 4,
    t: 'Derrame e consolidação',
    dur: '12:30',
    done: false
  }, {
    n: 5,
    t: 'Integração clínica e conduta',
    dur: '18:02',
    done: false
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: 'var(--space-6) var(--space-7) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: 14,
      fontWeight: 600,
      fontFamily: 'var(--font-display)',
      padding: '4px 0',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronLeft",
    size: 18
  }), " Voltar aos cursos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 360px',
      gap: 'var(--space-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 9',
      background: 'var(--pocus-blue)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/grafismo-beam.png",
    alt: "",
    style: {
      position: 'absolute',
      right: -30,
      top: '50%',
      transform: 'translateY(-50%)',
      height: '120%',
      opacity: 0.28,
      filter: 'brightness(2.6)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 78,
      height: 78,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.16)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Play",
    size: 32,
    color: "#fff"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '18px 18px 14px',
      background: 'linear-gradient(transparent, rgba(6,15,34,0.85))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: 'rgba(255,255,255,0.25)',
      borderRadius: 99
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '38%',
      height: '100%',
      background: 'var(--clinical-blue)',
      borderRadius: 99
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginTop: 12,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Play",
    size: 18,
    color: "#fff"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "SkipForward",
    size: 18,
    color: "#fff"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "Volume2",
    size: 18,
    color: "#fff"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontFamily: 'var(--font-mono)',
      color: 'var(--mist-blue)'
    }
  }, "06:24 / 16:48"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Settings",
    size: 18,
    color: "#fff"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "Maximize",
    size: 18,
    color: "#fff"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "brand"
  }, "Pulm\xE3o \xB7 Aula 3"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 28,
      color: 'var(--text-strong)',
      margin: '12px 0 6px',
      letterSpacing: '-0.01em'
    }
  }, "Linhas B e s\xEDndrome intersticial"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Marco Reis",
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "Dr. Marco Reis \xB7 Medicina intensiva")), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Visão geral', 'Transcrição', 'Materiais'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'var(--space-5)'
    }
  }, tab === 'Visão geral' && /*#__PURE__*/React.createElement("div", {
    className: "pocus-prose"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-body)',
      lineHeight: 1.65
    }
  }, "Reconhe\xE7a o padr\xE3o de linhas B, diferencie congest\xE3o de fibrose e relacione o achado ao quadro cl\xEDnico do paciente. A aula percorre a sequ\xEAncia ", /*#__PURE__*/React.createElement("strong", null, "ver \u2192 interpretar \u2192 agir"), " com casos reais \xE0 beira-leito."), /*#__PURE__*/React.createElement(Alert, {
    variant: "warning",
    title: "Aten\xE7\xE3o ao escopo do m\xE9todo",
    style: {
      marginTop: 18
    }
  }, "O POCUS complementa \u2014 n\xE3o substitui \u2014 a avalia\xE7\xE3o cl\xEDnica. Confirme limites e necessidade de exames adicionais antes de decidir.")), tab === 'Transcrição' && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14,
      lineHeight: 1.7
    }
  }, "00:00 \u2014 Nesta janela, observe primeiro o deslizamento pleural\u2026", /*#__PURE__*/React.createElement("br", null), "00:42 \u2014 Tr\xEAs ou mais linhas B em um espa\xE7o sugerem\u2026"), tab === 'Materiais' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ['Resumo — padrões pulmonares.pdf', 'Checklist de aquisição.pdf'].map(m => /*#__PURE__*/React.createElement("div", {
    key: m,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "FileText",
    size: 18,
    color: "var(--tech-blue)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-body)',
      flex: 1
    }
  }, m), /*#__PURE__*/React.createElement(Icon, {
    name: "Download",
    size: 16,
    color: "var(--text-muted)"
  }))))))), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xs)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-5) var(--space-4)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--text-strong)',
      margin: '0 0 12px'
    }
  }, "Ultrassom pulmonar"), /*#__PURE__*/React.createElement(Progress, {
    value: 40,
    label: "2 de 5 aulas",
    showValue: true,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", null, lessons.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '13px var(--space-5)',
      borderBottom: '1px solid var(--grey-100)',
      background: l.active ? 'var(--surface-tint)' : 'transparent',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 26,
      height: 26,
      borderRadius: '50%',
      flexShrink: 0,
      background: l.done ? 'var(--success)' : l.active ? 'var(--tech-blue)' : 'var(--grey-100)',
      color: l.done || l.active ? '#fff' : 'var(--text-muted)'
    }
  }, l.done ? /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 15,
    color: "#fff"
  }) : l.active ? /*#__PURE__*/React.createElement(Icon, {
    name: "Play",
    size: 13,
    color: "#fff"
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600
    }
  }, l.n)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: l.active ? 600 : 500,
      color: l.active ? 'var(--text-strong)' : 'var(--text-body)',
      lineHeight: 1.3
    }
  }, l.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-subtle)',
      fontFamily: 'var(--font-mono)',
      marginTop: 2
    }
  }, l.dur))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 18
    })
  }, "Pr\xF3xima aula")))));
}
Object.assign(window, {
  LessonScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/LessonScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/LoginScreen.jsx
try { (() => {
/* Login / enrollment screen — navy brand panel + white form. */
function LoginScreen({
  onLogin
}) {
  const DS = window.POCUSMedsafeDesignSystem_c0650d;
  const {
    Button,
    Input,
    Field,
    Checkbox
  } = DS;
  const [email, setEmail] = React.useState('ana.lima@hospital.br');
  const [pwd, setPwd] = React.useState('••••••••');
  const [remember, setRemember] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      minHeight: 'calc(100vh - 0px)',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--pocus-blue)',
      color: '#fff',
      padding: 'var(--space-10) var(--space-9)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/grafismo-beam.png",
    alt: "",
    style: {
      position: 'absolute',
      right: -80,
      top: '50%',
      transform: 'translateY(-50%)',
      height: 560,
      opacity: 0.18,
      filter: 'brightness(2.6)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-pocus-white.png",
    alt: "POCUS",
    style: {
      height: 30,
      position: 'relative'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 40,
      lineHeight: 1.1,
      letterSpacing: '-0.02em'
    }
  }, "Ver. Interpretar. Agir."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--mist-blue)',
      fontSize: 17,
      maxWidth: 380,
      marginTop: 16,
      lineHeight: 1.55
    }
  }, "Conhecimento \xE0 beira-leito para decis\xF5es mais seguras. Reconhe\xE7a achados, interprete no contexto e defina o pr\xF3ximo passo.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontSize: 12,
      color: 'var(--mist-blue)',
      letterSpacing: '0.04em'
    }
  }, "POCUS \xB7 Medsafe \xB7 Point-of-Care Ultrasound")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pocus-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Acesso \xE0 plataforma"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 30,
      color: 'var(--text-strong)',
      margin: '0 0 28px'
    }
  }, "Entrar"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "E-mail"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Senha"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "password",
    value: pwd,
    onChange: e => setPwd(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: remember,
    onChange: setRemember,
    label: "Manter conectado"
  }), /*#__PURE__*/React.createElement("a", {
    className: "pocus-link",
    style: {
      fontSize: 13
    },
    href: "#"
  }, "Esqueci a senha")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    onClick: onLogin
  }, "Entrar na plataforma")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 22,
      textAlign: 'center'
    }
  }, "Ainda n\xE3o tem acesso? ", /*#__PURE__*/React.createElement("a", {
    className: "pocus-link",
    href: "#"
  }, "Conhe\xE7a os cursos")))));
}
Object.assign(window, {
  LoginScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/LoginScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
