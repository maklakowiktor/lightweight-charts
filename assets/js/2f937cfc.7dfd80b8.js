"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2612],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),g=r,u=c["".concat(s,".").concat(g)]||c[g]||h[g]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(58168),r=(n(96540),n(15680));const i={id:"android",description:"You can use Lightweight Charts\u2122 inside an Android application. To use Lightweight Charts\u2122 in that context, you can use our Android wrapper, which will allow you to interact with Lightweight Charts\u2122 library, which will be rendered in a web view.",keywords:["charts","android","canvas","charting library","charting","html5 charts","financial charting library"],sidebar_position:7},o="Android wrapper",l={unversionedId:"android",id:"version-4.1/android",title:"Android wrapper",description:"You can use Lightweight Charts\u2122 inside an Android application. To use Lightweight Charts\u2122 in that context, you can use our Android wrapper, which will allow you to interact with Lightweight Charts\u2122 library, which will be rendered in a web view.",source:"@site/versioned_docs/version-4.1/android.md",sourceDirName:".",slug:"/android",permalink:"/lightweight-charts/docs/android",draft:!1,tags:[],version:"4.1",sidebarPosition:7,frontMatter:{id:"android",description:"You can use Lightweight Charts\u2122 inside an Android application. To use Lightweight Charts\u2122 in that context, you can use our Android wrapper, which will allow you to interact with Lightweight Charts\u2122 library, which will be rendered in a web view.",keywords:["charts","android","canvas","charting library","charting","html5 charts","financial charting library"],sidebar_position:7},sidebar:"docsSidebar",previous:{title:"iOS wrapper",permalink:"/lightweight-charts/docs/ios"},next:{title:"Release Notes",permalink:"/lightweight-charts/docs/release-notes"}},s={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"How to run the provided example",id:"how-to-run-the-provided-example",level:2}],p={toc:d},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"android-wrapper"},"Android wrapper"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"You can find the source code of the Lightweight Charts\u2122 Android wrapper in ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/tradingview/lightweight-charts-android"},"this repository"),".")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"This wrapper is currently still using ",(0,r.yg)("inlineCode",{parentName:"p"},"v3.8.0"),". This will be updated to ",(0,r.yg)("inlineCode",{parentName:"p"},"v4.0.0")," in the near future.")),(0,r.yg)("p",null,"You can use Lightweight Charts\u2122 inside an Android application. To use Lightweight Charts\u2122 in that context, you can use our Android wrapper, which will allow you to interact with Lightweight Charts\u2122 library, which will be rendered in a web view."),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Requires minSdkVersion 21, and installed WebView with support of ES6")),(0,r.yg)("p",null,"In ",(0,r.yg)("inlineCode",{parentName:"p"},"/build.gradle")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-groovy"},"allprojects {\n    repositories {\n        google()\n        mavenCentral()\n    }\n}\n")),(0,r.yg)("p",null,"In ",(0,r.yg)("inlineCode",{parentName:"p"},"/gradle_module/build.gradle")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    //...\n    implementation 'com.tradingview:lightweightcharts:3.8.0'\n}\n")),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("p",null,"Add view to the layout."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},'<androidx.constraintlayout.widget.ConstraintLayout\n        android:layout_width="match_parent"\n        android:layout_height="match_parent">\n\n        <com.tradingview.lightweightcharts.view.ChartsView\n            android:id="@+id/charts_view"\n            android:layout_width="0dp"\n            android:layout_height="0dp"\n            app:layout_constraintBottom_toBottomOf="parent"\n            app:layout_constraintLeft_toLeftOf="parent"\n            app:layout_constraintRight_toRightOf="parent"\n            app:layout_constraintTop_toTopOf="parent" />\n\n</androidx.constraintlayout.widget.ConstraintLayout>\n')),(0,r.yg)("p",null,"Configure the chart layout."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-kotlin"},'charts_view.api.applyOptions {\n    layout = layoutOptions {\n        background = SolidColor(Color.LTGRAY)\n        textColor = Color.BLACK.toIntColor()\n    }\n    localization = localizationOptions {\n        locale = "ru-RU"\n        priceFormatter = PriceFormatter(template = "{price:#2:#3}$")\n        timeFormatter = TimeFormatter(\n            locale = "ru-RU",\n            dateTimeFormat = DateTimeFormat.DATE_TIME\n        )\n    }\n}\n')),(0,r.yg)("p",null,"Add any series to the chart and store a reference to it."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-kotlin"},"lateinit var histogramSeries: SeriesApi\ncharts_view.api.addHistogramSeries(\n    onSeriesCreated = { series ->\n        histogramSeries = series\n    }\n)\n")),(0,r.yg)("p",null,"Add data to the series."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-kotlin"},"val data = listOf(\n    HistogramData(Time.BusinessDay(2019, 6, 11), 40.01f),\n    HistogramData(Time.BusinessDay(2019, 6, 12), 52.38f),\n    HistogramData(Time.BusinessDay(2019, 6, 13), 36.30f),\n    HistogramData(Time.BusinessDay(2019, 6, 14), 34.48f),\n    WhitespaceData(Time.BusinessDay(2019, 6, 15)),\n    WhitespaceData(Time.BusinessDay(2019, 6, 16)),\n    HistogramData(Time.BusinessDay(2019, 6, 17), 41.50f),\n    HistogramData(Time.BusinessDay(2019, 6, 18), 34.82f)\n)\nhistogramSeries.setData(data)\n")),(0,r.yg)("h2",{id:"how-to-run-the-provided-example"},"How to run the provided example"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/tradingview/lightweight-charts-android"},"GitHub repository")," for lightweight-charts-android contains an example of the library in action.\nYou can run the example (LighweightCharts.app) by cloning the repository and opening it in Android Studio. You will need to have ",(0,r.yg)("a",{parentName:"p",href:"https://nodejs.org/"},"NodeJS/NPM")," installed."))}h.isMDXComponent=!0}}]);