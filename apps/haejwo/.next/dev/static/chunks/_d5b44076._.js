(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/haejwo/src/app/register-sw.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RegisterSW",
    ()=>RegisterSW
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
/** @format */ 'use client';
;
function RegisterSW() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RegisterSW.useEffect": ()=>{
            navigator.serviceWorker.register('/sw.js');
        }
    }["RegisterSW.useEffect"], []);
    return null;
}
_s(RegisterSW, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = RegisterSW;
var _c;
__turbopack_context__.k.register(_c, "RegisterSW");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/haejwo/src/app/install-btn.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InstallButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/** @format */ 'use client';
;
function InstallButton() {
    _s();
    const [deferred, setDeferred] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InstallButton.useEffect": ()=>{
            const handler = {
                "InstallButton.useEffect.handler": (e)=>{
                    e.preventDefault(); // ✅ 브라우저 기본 미니바 UI를 막고, 우리가 버튼으로 설치
                    setDeferred(e);
                    console.log('[PWA] beforeinstallprompt fired');
                }
            }["InstallButton.useEffect.handler"];
            window.addEventListener('beforeinstallprompt', handler);
            return ({
                "InstallButton.useEffect": ()=>window.removeEventListener('beforeinstallprompt', handler)
            })["InstallButton.useEffect"];
        }
    }["InstallButton.useEffect"], []);
    if (!deferred) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: async ()=>{
            await deferred.prompt();
            const choice = await deferred.userChoice;
            console.log('[PWA] userChoice', choice.outcome);
            setDeferred(null);
        },
        style: {
            position: 'fixed',
            right: 16,
            bottom: 16,
            zIndex: 9999,
            padding: '10px 14px',
            borderRadius: 10,
            border: '1px solid #ddd',
            background: 'white'
        },
        children: "Install haejwo"
    }, void 0, false, {
        fileName: "[project]/apps/haejwo/src/app/install-btn.tsx",
        lineNumber: 29,
        columnNumber: 3
    }, this);
}
_s(InstallButton, "KAgKgZSNWPVmknT/Inp9gkBQHYA=");
_c = InstallButton;
var _c;
__turbopack_context__.k.register(_c, "InstallButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/button/btn.token.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "btnBgColor",
    ()=>btnBgColor,
    "btnBorder",
    ()=>btnBorder,
    "btnColor",
    ()=>btnColor,
    "btnSize",
    ()=>btnSize,
    "makeBtnFn",
    ()=>makeBtnFn
]);
const makeBtnFn = ({ variants, size, status, className = '' })=>{
    return [
        'hover: cursor-pointer',
        btnSize[`${size}`],
        btnBorder[`${variants}`][`${status}`],
        btnColor[`${variants}`]?.[`${status}`],
        btnBgColor[`${variants}`]?.[`${status}`],
        className
    ].join(' ');
};
const btnSize = {
    xlarge: 'px-6 text-label-xl h-13',
    large: 'px-5 text-label-l h-12',
    default: 'px-4 text-label-m h-10',
    small: 'px-2 text-label-s h-8',
    xsmall: 'px-2 text-body-xs-strong h-6'
};
const btnBorder = {
    primary: {
        default: 'rounded-[8px]',
        active: 'rounded-[8px]',
        disabled: 'rounded-[8px]'
    },
    secondary: {
        default: 'rounded-[8px]',
        active: 'rounded-[8px]',
        disabled: 'rounded-[8px]'
    },
    teriary: {
        default: 'rounded-[8px]',
        active: 'rounded-[8px]',
        disabled: 'rounded-[8px]'
    },
    negative: {
        default: 'rounded-[8px]',
        active: 'rounded-[8px]',
        disabled: 'rounded-[8px]'
    },
    neutral: {
        default: 'rounded-[8px]',
        active: 'rounded-[8px]',
        disabled: 'rounded-[8px]'
    },
    outline: {
        default: 'rounded-[8px] border-[1px] border-solid border-core-gray-200',
        active: 'rounded-[8px] border-[1px] border-solid border-core-gray-200',
        disabled: 'rounded-[8px] border-[1px] border-solid border-core-gray-200'
    },
    chips: {
        default: 'rounded-[30px]',
        active: 'rounded-[30px]',
        disabled: 'rounded-[30px]'
    },
    chipsOutline: {
        default: 'rounded-[30px] border-[1px] border-solid border-core-green-500 hover:bg-core-green-50 hover:cursor-pointer',
        active: 'rounded-[30px] border-[1px] border-core-green-500',
        disabled: 'rounded-[30px] border-[1px] border-solid border-core-gray-200'
    },
    liquidChips: {
        default: 'rounded-[30px]',
        active: 'rounded-[30px]',
        disabled: 'rounded-[30px]'
    }
};
const btnColor = {
    primary: {
        default: 'text-white',
        active: 'text-white',
        disabled: 'text-core-green-200'
    },
    secondary: {
        default: 'text-core-green-300',
        active: 'text-core-green-300',
        disabled: 'text-core-green-200'
    },
    teriary: {
        default: 'text-white',
        active: 'text-white',
        disabled: 'text-core-neutral-200'
    },
    negative: {
        default: 'text-white',
        active: 'text-white',
        disabled: 'text-core-red-200'
    },
    neutral: {
        default: 'text-core-neutral-600',
        active: 'text-core-neutral-600',
        disabled: 'text-core-neutral-200'
    },
    outline: {
        default: 'text-core-green-300',
        active: 'text-core-green-300',
        disabled: 'text-core-typo-third'
    },
    chips: {
        default: 'text-core-typo-primary',
        active: 'text-core-typo-normal',
        disabled: 'text-core-typo-third'
    },
    chipsOutline: {
        default: 'text-core-typo-normal',
        active: 'text-core-typo-normal',
        disabled: 'text-core-typo-third'
    },
    liquidChips: {
        default: 'text-white',
        active: 'text-white',
        disabled: 'text-typo-third'
    }
};
const btnBgColor = {
    primary: {
        default: 'bg-core-green-500',
        active: 'bg-core-green-600',
        disabled: 'bg-core-green-300'
    },
    secondary: {
        default: 'bg-core-green-100',
        active: 'bg-core-green-200',
        disabled: 'bg-core-green-50'
    },
    teriary: {
        default: 'bg-core-neutral-800',
        active: 'bg-core-neutral-800',
        disabled: 'bg-core-neutral-400'
    },
    negative: {
        default: 'bg-core-red-500',
        active: 'bg-core-red-600',
        disabled: 'bg-core-red-300'
    },
    neutral: {
        default: 'bg-core-neutral-100',
        active: 'bg-core-neutral-200',
        disabled: 'bg-core-neutral-50'
    },
    outline: {
        default: 'bg-transparents',
        active: 'bg-transparents',
        disabled: 'bg-transparents'
    },
    chips: {
        default: 'bg-core-neutral-50/50',
        active: 'bg-core-green-200',
        disabled: 'bg-core-neutral-50'
    },
    chipsOutline: {
        default: 'bg-transparents',
        active: 'bg-transparents',
        disabled: 'bg-transparents'
    },
    liquidChips: {
        default: 'overflow-hidden pointer-events-auto bg-[radial-gradient(180px_290px_at_-28%_-126%,rgba(10,180,255,1),transparent_38%),radial-gradient(350px_450px_at_0%_10%,rgba(120,180,255,0.48),rgba(120,180,255,0)_60%),linear-gradient(90deg,rgba(10,180,255,0.48),transparent_1%),linear-gradient(180deg,rgba(10,180,255,0.48),transparent_5%)] [background-position:0%_0%,left,top] [background-size:auto,0px_100%,100%_5px] bg-no-repeat shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_5px_9px_rgba(0,0,0,0.35)] backdrop-blur-[5px] backdrop-brightness-[1.2]',
        active: 'overflow-hidden pointer-events-auto bg-[radial-gradient(180px_290px_at_-28%_-126%,rgba(10,180,255,1),transparent_38%),radial-gradient(350px_450px_at_0%_10%,rgba(120,180,255,0.48),rgba(120,180,255,0)_60%),linear-gradient(90deg,rgba(10,180,255,0.48),transparent_1%),linear-gradient(180deg,rgba(10,180,255,0.48),transparent_5%)] [background-position:0%_0%,left,top] [background-size:auto,0px_100%,100%_5px] bg-no-repeat shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_5px_9px_rgba(0,0,0,0.35)] backdrop-blur-[5px] backdrop-brightness-[1.2]',
        disabled: 'overflow-hidden pointer-events-auto bg-[radial-gradient(180px_290px_at_-28%_-126%,rgba(10,180,255,1),transparent_38%),radial-gradient(350px_450px_at_0%_10%,rgba(120,180,255,0.48),rgba(120,180,255,0)_60%),linear-gradient(90deg,rgba(10,180,255,0.48),transparent_1%),linear-gradient(180deg,rgba(10,180,255,0.48),transparent_5%)] [background-position:0%_0%,left,top] [background-size:auto,0px_100%,100%_5px] bg-no-repeat shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_5px_9px_rgba(0,0,0,0.35)] backdrop-blur-[5px] backdrop-brightness-[1.2]'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/button/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$button$2f$btn$2e$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/button/btn.token.ts [app-client] (ecmascript)");
/** @format */ 'use client';
;
;
const Button = ({ variants, size, status, children, className, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$button$2f$btn$2e$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeBtnFn"])({
                variants,
                size,
                status,
                className
            }),
            onClick: onClick,
            children: children
        }, void 0, false, {
            fileName: "[project]/packages/design-system/button/button.tsx",
            lineNumber: 18,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
_c = Button;
const __TURBOPACK__default__export__ = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/typography/typo.token.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "variant",
    ()=>variant
]);
const variant = {
    'display-extra': 'text-display-extra font-extrabold',
    'display-l': 'text-display-l font-extrabold',
    'display-m': 'text-display-m font-extrabold',
    'display-s': 'text-display-s font-extrabold',
    'heading-l': 'text-heading-l font-extrabold',
    'heading-m': 'text-heading-m font-extrabold',
    'heading-s': 'text-heading-s font-extrabold',
    'body-l-strong': 'text-body-l-strong font-semibold',
    'body-l': 'text-body-l font-regular',
    'body-m-strong': 'text-body-m-strong font-semibold',
    'body-m': 'text-body-m font-regular',
    'body-s-strong': 'text-body-s-strong font-extrabold',
    'body-s': 'text-body-s font-regular',
    'body-xs-strong': 'text-body-xs-strong font-semibold',
    'body-xs': 'text-body-xs-strong font-regular',
    'label-xl': 'text-label-xl font-semibold',
    'label-l': 'text-label-l font-semibold',
    'label-m': 'text-label-m font-semibold',
    'label-s': 'text-label-s font-semibold'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/typography/typography.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$typography$2f$typo$2e$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/typography/typo.token.ts [app-client] (ecmascript)");
/** @format */ 'use client';
;
;
const Typography = ({ children, variants, className = '', color = 'core-typo-primary', as: Component = 'div' })=>{
    const finalClassName = [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$typography$2f$typo$2e$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variant"][variants],
        color,
        className
    ].join(' ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        className: finalClassName,
        children: children
    }, void 0, false, {
        fileName: "[project]/packages/design-system/typography/typography.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Typography;
const __TURBOPACK__default__export__ = Typography;
var _c;
__turbopack_context__.k.register(_c, "Typography");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/tags/tags.token.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "makeTagFn",
    ()=>makeTagFn
]);
const tagSize = {
    default: 'px-1.5 py-0.5 h-[22px] text-[12px] w-fit font-bold',
    large: 'px-1.5 py-0.5 h-[24px] text-label-s w-fit'
};
const tagBorder = {
    normal: {
        primary: '',
        secondary: '',
        outline: 'border-[1px] border-solid border-core-green-500',
        liquidChips: ''
    },
    negative: {
        primary: 'text-white',
        secondary: 'text-core-red-500',
        outline: 'border-[1px] border-solid border-core-red-500',
        liquidChips: ''
    }
};
const tagTxtColor = {
    normal: {
        primary: 'text-white',
        secondary: 'text-core-green-500',
        outline: 'text-core-green-500',
        liquidChips: 'text-core-green-300 font-semibold'
    },
    negative: {
        primary: 'text-white',
        secondary: 'text-core-red-500',
        outline: 'text-core-red-500',
        liquidChips: 'text-core-red-500'
    }
};
const tagBgColor = {
    normal: {
        primary: 'bg-core-green-500',
        secondary: 'bg-core-green-100',
        outline: 'bg-transparents',
        liquidChips: 'bg-core-green-600/40 rounded-[30px]'
    },
    negative: {
        primary: 'bg-core-red-500',
        secondary: 'bg-core-red-100',
        outline: 'bg-transparents',
        liquidChips: 'rounded-[30px] bg-core-red-600/40'
    }
};
const makeTagFn = ({ size, type, variants })=>{
    return [
        'rounded-[4px]',
        tagSize[size],
        tagTxtColor[`${type}`][`${variants}`],
        tagBgColor[`${type}`][`${variants}`],
        tagBorder[`${type}`][`${variants}`]
    ].join(' ');
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/design-system/tags/tags.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$tags$2f$tags$2e$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/tags/tags.token.ts [app-client] (ecmascript)");
/** @format */ 'use client';
;
;
const Tags = ({ tagTxt, icon, type, size, variants })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$tags$2f$tags$2e$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeTagFn"])({
                size,
                type,
                variants
            }),
            children: tagTxt
        }, void 0, false, {
            fileName: "[project]/packages/design-system/tags/tags.tsx",
            lineNumber: 21,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
_c = Tags;
const __TURBOPACK__default__export__ = Tags;
var _c;
__turbopack_context__.k.register(_c, "Tags");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_d5b44076._.js.map