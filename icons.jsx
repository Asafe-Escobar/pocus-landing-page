/* Shared helpers: Icon (Lucide), Reveal wrapper, scroll-reveal observer */

function Icon({ name, size = 24, strokeWidth = 2, style = {}, className }) {
  const L = window.lucide || {};
  const spec = L[name];
  // lucide UMD shape: [tag, attrs, [ [childTag, childAttrs], ... ]]
  const children = Array.isArray(spec) && Array.isArray(spec[2]) ? spec[2] : null;
  if (!children) {
    return React.createElement('svg', {
      width: size, height: size, viewBox: '0 0 24 24', style, className, 'aria-hidden': true
    });
  }
  return React.createElement(
    'svg',
    {
      width: size, height: size, viewBox: '0 0 24 24',
      fill: 'none', stroke: 'currentColor',
      strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round',
      style, className, 'aria-hidden': true
    },
    children.map((child, i) => React.createElement(child[0], { key: i, ...child[1] }))
  );
}

/* Scroll-position based reveal system (robust across preview environments
   where IntersectionObserver mis-reports initial intersection). */
const _revealEls = new Set();
let _revealScheduled = false;
function _checkReveals() {
  _revealScheduled = false;
  const vh = window.innerHeight || document.documentElement.clientHeight;
  _revealEls.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < vh * 0.9 && r.bottom > 0) {
      el.setAttribute('data-in', 'true');
      _revealEls.delete(el);
    }
  });
}
function _scheduleReveal() {
  if (_revealScheduled) return;
  _revealScheduled = true;
  requestAnimationFrame(_checkReveals);
}
if (typeof window !== 'undefined' && !window.__revealInit) {
  window.__revealInit = true;
  window.addEventListener('scroll', _scheduleReveal, { passive: true });
  window.addEventListener('resize', _scheduleReveal);
}

/* Reveal: wraps children, fades/slides in when scrolled into view */
function Reveal({ children, as = 'div', delay = 0, className = '', style = {}, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.setAttribute('data-in', 'true');
      return;
    }
    _revealEls.add(el);
    _scheduleReveal();
    // failsafe passes in case layout/scroll events are delayed
    const t1 = setTimeout(_checkReveals, 120);
    const t2 = setTimeout(_checkReveals, 600);
    return () => { clearTimeout(t1); clearTimeout(t2); _revealEls.delete(el); };
  }, []);
  return React.createElement(
    as,
    {
      ref,
      className: ('reveal ' + className).trim(),
      style: { transitionDelay: delay ? delay + 'ms' : undefined, ...style },
      ...rest
    },
    children
  );
}

/* Resolve an asset to its inlined blob URL in a standalone bundle,
   falling back to the on-disk relative path during normal dev. */
function asset(id, path) {
  return (window.__resources && window.__resources[id]) || path;
}

Object.assign(window, { Icon, Reveal, asset });
