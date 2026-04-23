'use client';

const RAF_MS = 12;
const TIMEOUT_MS = 25;
let hooksInstalled = false;
let consoleApiRegistered = false;

function readFlag(name) {
  if (typeof window === 'undefined') return false;
  try {
    return window.localStorage.getItem(name) === '1';
  } catch {
    return false;
  }
}

function statusTable() {
  return {
    DEBUG_PERF: readFlag('DEBUG_PERF') ? 'ON (patches rAF + setTimeout)' : 'off',
    DEBUG_GLOSSARY_PERF: readFlag('DEBUG_GLOSSARY_PERF') ? 'ON (GlossaryList internals)' : 'off',
    hooksPatched: hooksInstalled,
  };
}

function printPerfDebugHelp() {
  const h = 'line-height:1.45;font-size:12px;';
  const box = 'background:#0d1117;color:#c9d1d9;padding:10px 12px;border-left:4px solid #238636;font-family:ui-monospace,monospace;';
  const cmd = 'color:#79c0ff;font-weight:bold;';

  console.log(
    '%c[perf] Violations: what / why / how to trace',
    'background:#1f6feb;color:#fff;padding:4px 8px;font-size:13px;font-weight:bold;'
  );
  console.log(
    '%cChrome [Violation] = the browser saying a rAF, setTimeout, click, or React scheduler task took too long. The app does not emit those lines; you cannot remove them without faster code or muting the console (DevTools → Console → settings → turn off violation messages, wording varies).',
    h + box
  );
  console.log(
    '%cTo see which code scheduled a slow rAF or setTimeout: run %cenablePerfDebug()%c in this console, press Enter, reload. Then open the groups labeled [perf-debug] SLOW … — the stack is “scheduled from” (source).',
    h + box,
    cmd,
    h + box
  );
  console.log(
    '%cGlossary heavy work: the scroll handler measures many list items (layout). Run %cenableGlossaryPerfDebug()%c, reload, for timings. Click handlers are not wrapped — use React Profiler for “[Violation] click”.',
    h + box,
    cmd,
    h + box
  );
  console.log(
    '%cGlossary scroll “jumping”: this project sets glossary html/body to scroll-behavior: auto, programmatic scroll to behavior: auto, and skips URL hash replace while data-restoring-scroll is on — so restore should not smooth-scroll or fight the hash.',
    h + box
  );
  console.log('%cStatus (DEBUG_PERF = hooks; reload after enable)', 'font-size:12px;font-weight:bold;margin-top:8px;');
  console.table(statusTable());
  console.log('%cCommands:', h);
  console.log('  %cenablePerfDebug() %c— then reload; traces rAF + setTimeout', h, cmd, h);
  console.log('  %cdisablePerfDebug() %c— clear flags, reload', h, cmd, h);
  console.log('  %cenableGlossaryPerfDebug() %c— then reload; glossary internals', h, cmd, h);
  console.log('  %cprintPerfDebugHelp() %c— show this help again', h, cmd, h);
}

export function registerPerfDebugConsole() {
  if (typeof window === 'undefined' || process.env.NODE_ENV === 'production') return;
  if (consoleApiRegistered) return;
  consoleApiRegistered = true;

  window.printPerfDebugHelp = printPerfDebugHelp;
  window.enablePerfDebug = () => {
    try {
      localStorage.setItem('DEBUG_PERF', '1');
    } catch {
      return;
    }
    window.location.reload();
  };
  window.disablePerfDebug = () => {
    try {
      localStorage.removeItem('DEBUG_PERF');
      localStorage.removeItem('DEBUG_GLOSSARY_PERF');
    } catch {
      return;
    }
    window.location.reload();
  };
  window.enableGlossaryPerfDebug = () => {
    try {
      localStorage.setItem('DEBUG_GLOSSARY_PERF', '1');
    } catch {
      return;
    }
    window.location.reload();
  };
  window.__PERF_DEBUG__ = {
    version: 1,
    printHelp: printPerfDebugHelp,
    status: statusTable,
  };

  try {
    if (!sessionStorage.getItem('__perf_debug_full_help_once')) {
      printPerfDebugHelp();
      sessionStorage.setItem('__perf_debug_full_help_once', '1');
    } else {
      console.log(
        '%c[perf]',
        'background:#238636;color:#fff;padding:3px 8px;font-weight:bold',
        'Hooks off until you run enablePerfDebug() + reload. printPerfDebugHelp() for full story.'
      );
    }
  } catch {
    printPerfDebugHelp();
  }
}

export function initPerfDebugHooks() {
  if (typeof window === 'undefined' || hooksInstalled) return;
  if (process.env.NODE_ENV === 'production') return;
  if (!readFlag('DEBUG_PERF')) {
    return;
  }

  hooksInstalled = true;
  const w = window;
  const origRaf = w.requestAnimationFrame.bind(w);
  const origSt = w.setTimeout.bind(w);

  let rafLogCount = 0;
  let stLogCount = 0;
  const logCap = 80;

  console.info(
    '%c[perf-debug] Hooks ACTIVE',
    'background:#238636;color:#fff;padding:2px 6px',
    'rAF >',
    RAF_MS,
    'ms · setTimeout fn >',
    TIMEOUT_MS,
    'ms · logs capped at',
    logCap
  );

  w.requestAnimationFrame = function requestAnimationFramePatched(cb) {
    if (typeof cb !== 'function') {
      return origRaf(cb);
    }
    const scheduleStack = new Error('[perf-debug] rAF schedule trace').stack;
    return origRaf((time) => {
      const t0 = performance.now();
      try {
        return cb(time);
      } catch (e) {
        throw e;
      } finally {
        const ms = performance.now() - t0;
        if (ms > RAF_MS && rafLogCount < logCap) {
          rafLogCount += 1;
          console.groupCollapsed(
            `%c[perf-debug] SLOW rAF %c${ms.toFixed(1)}ms`,
            'color:#f85149;font-weight:bold',
            'color:#ffb657'
          );
          console.log('Scheduled from:\n', scheduleStack);
          console.groupEnd();
        }
      }
    });
  };

  if (typeof PerformanceObserver !== 'undefined') {
    try {
      const po = new PerformanceObserver((list) => {
        for (const e of list.getEntries()) {
          if (e.duration < 50) continue;
          console.warn(
            '%c[perf-debug] longtask',
            'color:#db61a2;font-weight:bold',
            { durationMs: e.duration.toFixed(0), name: e.name }
          );
        }
      });
      po.observe({ entryTypes: ['longtask'] });
    } catch {
      // longtask not supported
    }
  }

  w.setTimeout = function setTimeoutPatched(fn, delay, ...args) {
    if (typeof fn !== 'function') {
      return origSt(fn, delay, ...args);
    }
    const scheduleStack = new Error('[perf-debug] setTimeout schedule trace').stack;
    return origSt(
      function setTimeoutPatchedRun() {
        const t0 = performance.now();
        try {
          return fn.apply(this, arguments);
        } catch (e) {
          throw e;
        } finally {
          const ms = performance.now() - t0;
          if (ms > TIMEOUT_MS && stLogCount < logCap) {
            stLogCount += 1;
            console.groupCollapsed(
              `%c[perf-debug] SLOW setTimeout %c${ms.toFixed(1)}ms %c(delay=${delay})`,
              'color:#f85149;font-weight:bold',
              'color:#ffb657',
              'color:#8b949e'
            );
            console.log('Scheduled from:\n', scheduleStack);
            console.groupEnd();
          }
        }
      },
      delay,
      ...args
    );
  };
}
