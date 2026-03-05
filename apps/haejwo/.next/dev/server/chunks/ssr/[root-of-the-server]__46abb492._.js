module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/apps/haejwo/src/app/register-sw.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RegisterSW",
    ()=>RegisterSW
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
/** @format */ 'use client';
;
function RegisterSW() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        navigator.serviceWorker.register('/sw.js');
    }, []);
    return null;
}
}),
"[project]/apps/haejwo/src/app/install-btn.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InstallButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
/** @format */ 'use client';
;
;
function InstallButton() {
    const [deferred, setDeferred] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = (e)=>{
            e.preventDefault(); // ✅ 브라우저 기본 미니바 UI를 막고, 우리가 버튼으로 설치
            setDeferred(e);
            console.log('[PWA] beforeinstallprompt fired');
        };
        window.addEventListener('beforeinstallprompt', handler);
        return ()=>window.removeEventListener('beforeinstallprompt', handler);
    }, []);
    if (!deferred) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/packages/design-system/button/btn.token.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/packages/design-system/button/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$button$2f$btn$2e$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/button/btn.token.ts [app-ssr] (ecmascript)");
/** @format */ 'use client';
;
;
const Button = ({ variants, size, status, children, className, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$button$2f$btn$2e$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeBtnFn"])({
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
const __TURBOPACK__default__export__ = Button;
}),
"[project]/packages/design-system/typography/typo.token.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/packages/design-system/typography/typography.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$typography$2f$typo$2e$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/typography/typo.token.ts [app-ssr] (ecmascript)");
/** @format */ 'use client';
;
;
const Typography = ({ children, variants, className = '', color = 'core-typo-primary', as: Component = 'div' })=>{
    const finalClassName = [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$typography$2f$typo$2e$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["variant"][variants],
        color,
        className
    ].join(' ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        className: finalClassName,
        children: children
    }, void 0, false, {
        fileName: "[project]/packages/design-system/typography/typography.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Typography;
}),
"[project]/packages/design-system/tags/tags.token.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/packages/design-system/tags/tags.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$tags$2f$tags$2e$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/design-system/tags/tags.token.ts [app-ssr] (ecmascript)");
/** @format */ 'use client';
;
;
const Tags = ({ tagTxt, icon, type, size, variants })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$design$2d$system$2f$tags$2f$tags$2e$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeTagFn"])({
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
const __TURBOPACK__default__export__ = Tags;
}),
"[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__46abb492._.js.map