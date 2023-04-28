(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{534:function(e,v,_){"use strict";_.r(v);var r=_(34),a=Object(r.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[e._v("#")]),e._v(" 属性")]),e._v(" "),v("h2",{attrs:{id:"gridlayout"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gridlayout"}},[e._v("#")]),e._v(" GridLayout")]),e._v(" "),v("h3",{attrs:{id:"layout"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#layout"}},[e._v("#")]),e._v(" layout")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Array")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("这是栅格的初始布局。")]),e._v(" "),v("p",[e._v("数据源。值必须为 "),v("code",[e._v("Array")]),e._v("，其数据项为 "),v("code",[e._v("Object")]),e._v("。 每条数据项必须有 "),v("code",[e._v("i, x, y, w 和 h")]),e._v(" 属性。 请参考下面的 "),v("code",[e._v("GridItem")]),e._v("。")]),e._v(" "),v("h3",{attrs:{id:"responsivelayouts"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#responsivelayouts"}},[e._v("#")]),e._v(" responsiveLayouts")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Object")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default : "),v("code",[e._v("{}")])])]),e._v(" "),v("p",[e._v("如果 "),v("code",[e._v("responsive")]),e._v(" 设置为 "),v("code",[e._v("true")]),e._v("，该配置将作为栅格中每个断点的初始布局。键值是断点名称，每项的值都是类似 "),v("code",[e._v("layout")]),e._v(" 属性定义的数据结构，值必须为 "),v("code",[e._v("Array")]),e._v("，其数据项为 "),v("code",[e._v("Object")]),e._v("。例如： "),v("code",[e._v("{lg: [layout items], md: [layout items]}")]),e._v("。需要注意的是，在创建栅格布局后设置该属性无效。\n在创建GridLayout之后设置prop无效。")]),e._v(" "),v("p",[e._v("可以查看 "),v("a",{attrs:{href:"#responsive"}},[e._v("responsive")]),e._v(", "),v("a",{attrs:{href:"#breakpoints"}},[e._v("breakpoints")]),e._v(" 和 "),v("a",{attrs:{href:"#cols"}},[e._v("cols")])]),e._v(" "),v("h3",{attrs:{id:"colnum"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#colnum"}},[e._v("#")]),e._v(" colNum")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Number")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("12")])])]),e._v(" "),v("p",[e._v("定义栅格系统的列数，其值需为自然数。")]),e._v(" "),v("h3",{attrs:{id:"rowheight"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rowheight"}},[e._v("#")]),e._v(" rowHeight")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Number")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("150")])])]),e._v(" "),v("p",[e._v("每行的高度，单位像素。")]),e._v(" "),v("h3",{attrs:{id:"maxrows"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#maxrows"}},[e._v("#")]),e._v(" maxRows")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Number")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("Infinity")])])]),e._v(" "),v("p",[e._v("定义最大行数。")]),e._v(" "),v("h3",{attrs:{id:"margin"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#margin"}},[e._v("#")]),e._v(" margin")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Array")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("[10, 10]")])])]),e._v(" "),v("p",[e._v("定义栅格中的元素边距。")]),e._v(" "),v("p",[e._v("值必须是包含两个 "),v("code",[e._v("Number")]),e._v("的数组，数组中第一个元素表示水平边距，第二个表示垂直边距，单位为像素。")]),e._v(" "),v("h3",{attrs:{id:"isdraggable"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#isdraggable"}},[e._v("#")]),e._v(" isDraggable")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("标识栅格中的元素是否可拖拽。")]),e._v(" "),v("h3",{attrs:{id:"isresizable"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#isresizable"}},[e._v("#")]),e._v(" isResizable")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("标识栅格中的元素是否可调整大小。")]),e._v(" "),v("h3",{attrs:{id:"ismirrored"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ismirrored"}},[e._v("#")]),e._v(" isMirrored")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("false")])])]),e._v(" "),v("p",[e._v("标识栅格中的元素是否可镜像反转。")]),e._v(" "),v("h3",{attrs:{id:"autosize"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#autosize"}},[e._v("#")]),e._v(" autoSize")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("标识容器是否自动调整大小。")]),e._v(" "),v("h3",{attrs:{id:"verticalcompact"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#verticalcompact"}},[e._v("#")]),e._v(" verticalCompact")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("标识布局是否垂直压缩。")]),e._v(" "),v("h3",{attrs:{id:"preventcollision"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#preventcollision"}},[e._v("#")]),e._v(" preventCollision")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("false")])])]),e._v(" "),v("p",[e._v("防止碰撞属性，值设置为"),v("code",[e._v("ture")]),e._v("时，栅格只能拖动至空白处。")]),e._v(" "),v("h3",{attrs:{id:"usecsstransforms"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#usecsstransforms"}},[e._v("#")]),e._v(" useCssTransforms")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("标识是否使用CSS属性 "),v("code",[e._v("transition-property: transform;")]),e._v("。")]),e._v(" "),v("h3",{attrs:{id:"responsive"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#responsive"}},[e._v("#")]),e._v(" responsive")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("false")])])]),e._v(" "),v("p",[e._v("标识布局是否为响应式。")]),e._v(" "),v("p",[e._v("可以查看 "),v("a",{attrs:{href:"#responsivelayouts"}},[e._v("responsiveLayouts")]),e._v("、"),v("a",{attrs:{href:"#breakpoints"}},[e._v("breakpoints")]),e._v("和 "),v("a",{attrs:{href:"#cols"}},[e._v("cols")])]),e._v(" "),v("h3",{attrs:{id:"breakpoints"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#breakpoints"}},[e._v("#")]),e._v(" breakpoints")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Object")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }")])]),e._v(" "),v("p",[e._v("为响应式布局设置断点。")]),e._v(" "),v("p",[e._v("可以查看 "),v("a",{attrs:{href:"#responsivelayouts"}},[e._v("responsiveLayouts")]),e._v(" 和 "),v("a",{attrs:{href:"#cols"}},[e._v("cols")])]),e._v(" "),v("h3",{attrs:{id:"cols"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cols"}},[e._v("#")]),e._v(" cols")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Object")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }")])]),e._v(" "),v("p",[e._v("设置每个断点对应的列数。")]),e._v(" "),v("h3",{attrs:{id:"usestylecursor"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#usestylecursor"}},[e._v("#")]),e._v(" useStyleCursor")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("标识是否使用动态鼠标指针样式。当拖动出现卡顿时，将此值设为 "),v("code",[e._v("false")]),e._v("也许可以缓解布局问题。\n"),v("strong",[e._v("此属性无效")])]),e._v(" "),v("h2",{attrs:{id:"griditem"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#griditem"}},[e._v("#")]),e._v(" GridItem")]),e._v(" "),v("h3",{attrs:{id:"i"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#i"}},[e._v("#")]),e._v(" i")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("String")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("栅格中元素的ID。")]),e._v(" "),v("h3",{attrs:{id:"x"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#x"}},[e._v("#")]),e._v(" x")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Number")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("标识栅格元素位于第几列，需为自然数。")]),e._v(" "),v("h3",{attrs:{id:"y"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#y"}},[e._v("#")]),e._v(" y")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Number")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("标识栅格元素位于第几行，需为自然数。")]),e._v(" "),v("h3",{attrs:{id:"w"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#w"}},[e._v("#")]),e._v(" w")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Number")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("标识栅格元素的初始宽度，值为"),v("code",[e._v("colWidth")]),e._v("的倍数。")]),e._v(" "),v("h3",{attrs:{id:"h"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#h"}},[e._v("#")]),e._v(" h")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Number")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("标识栅格元素的初始高度，值为"),v("code",[e._v("rowHeight")]),e._v("的倍数。")]),e._v(" "),v("h3",{attrs:{id:"minw"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#minw"}},[e._v("#")]),e._v(" minW")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Number")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("1")])])]),e._v(" "),v("p",[e._v("栅格元素的最小宽度，值为"),v("code",[e._v("colWidth")]),e._v("的倍数。")]),e._v(" "),v("p",[e._v("如果"),v("code",[e._v("w")]),e._v("小于"),v("code",[e._v("minW")]),e._v("，则"),v("code",[e._v("minW")]),e._v("的值会被"),v("code",[e._v("w")]),e._v("覆盖。")]),e._v(" "),v("h3",{attrs:{id:"minh"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#minh"}},[e._v("#")]),e._v(" minH")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Number")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("1")])])]),e._v(" "),v("p",[e._v("栅格元素的最小高度，值为"),v("code",[e._v("rowHeight")]),e._v("的倍数。")]),e._v(" "),v("p",[e._v("如果"),v("code",[e._v("h")]),e._v("小于"),v("code",[e._v("minH")]),e._v("，则"),v("code",[e._v("minH")]),e._v("的值会被h覆盖。")]),e._v(" "),v("h3",{attrs:{id:"maxw"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#maxw"}},[e._v("#")]),e._v(" maxW")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Number")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("Infinity")])])]),e._v(" "),v("p",[e._v("栅格元素的最大宽度，值为"),v("code",[e._v("colWidth")]),e._v("的倍数。")]),e._v(" "),v("p",[e._v("如果"),v("code",[e._v("w")]),e._v("大于"),v("code",[e._v("maxW")]),e._v("，则"),v("code",[e._v("maxW")]),e._v("的值会被"),v("code",[e._v("w")]),e._v("覆盖。")]),e._v(" "),v("h3",{attrs:{id:"maxh"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#maxh"}},[e._v("#")]),e._v(" maxH")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Number")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("Infinity")])])]),e._v(" "),v("p",[e._v("栅格元素的最大高度，值为"),v("code",[e._v("rowHeight")]),e._v("的倍数。")]),e._v(" "),v("p",[e._v("如果"),v("code",[e._v("h")]),e._v("大于"),v("code",[e._v("maxH")]),e._v("，则"),v("code",[e._v("maxH")]),e._v("的值会被"),v("code",[e._v("h")]),e._v("覆盖。")]),e._v(" "),v("h3",{attrs:{id:"isdraggable-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#isdraggable-2"}},[e._v("#")]),e._v(" isDraggable")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("null")])])]),e._v(" "),v("p",[e._v("标识栅格元素是否可拖拽。如果值为"),v("code",[e._v("null")]),e._v("则取决于父容器。")]),e._v(" "),v("h3",{attrs:{id:"isresizable-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#isresizable-2"}},[e._v("#")]),e._v(" isResizable")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("null")])])]),e._v(" "),v("p",[e._v("标识栅格元素是否可调整大小。如果值为"),v("code",[e._v("null")]),e._v("则取决于父容器。")]),e._v(" "),v("h3",{attrs:{id:"static"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#static"}},[e._v("#")]),e._v(" static")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("false")])])]),e._v(" "),v("p",[e._v("标识栅格元素是否为静态的（无法拖拽、调整大小或被其他元素移动）。")]),e._v(" "),v("h3",{attrs:{id:"dragignorefrom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dragignorefrom"}},[e._v("#")]),e._v(" dragIgnoreFrom")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("String")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("'a, button'")])])]),e._v(" "),v("p",[e._v("标识栅格元素中哪些子元素无法触发拖拽事件，值为"),v("code",[e._v("css-like")]),e._v("选择器。")]),e._v(" "),v("p",[e._v("请参考"),v("a",{attrs:{href:"http://interactjs.io/docs/#ignorable-selectors",target:"_blank",rel:"noopener noreferrer"}},[e._v("interact.js docs"),v("OutboundLink")],1),e._v("中的"),v("code",[e._v("ignoreFrom")]),e._v("。")]),e._v(" "),v("h3",{attrs:{id:"dragallowfrom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dragallowfrom"}},[e._v("#")]),e._v(" dragAllowFrom")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("String")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("null")])])]),e._v(" "),v("p",[e._v("标识栅格元素中哪些子元素可以触发拖拽事件，值为"),v("code",[e._v("css-like")]),e._v("选择器。")]),e._v(" "),v("p",[e._v("如果值为"),v("code",[e._v("null")]),e._v("则表示所有子元素（"),v("code",[e._v("dragIgnoreFrom")]),e._v("的除外）。")]),e._v(" "),v("p",[e._v("请参考"),v("a",{attrs:{href:"http://interactjs.io/docs/#ignorable-selectors",target:"_blank",rel:"noopener noreferrer"}},[e._v("interact.js docs"),v("OutboundLink")],1),e._v("中的"),v("code",[e._v("allowFrom")]),e._v("。")]),e._v(" "),v("h3",{attrs:{id:"resizeignorefrom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#resizeignorefrom"}},[e._v("#")]),e._v(" resizeIgnoreFrom")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("String")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("'a, button'")])])]),e._v(" "),v("p",[e._v("标识栅格元素中哪些子元素无法触发调整大小的事件，值为"),v("code",[e._v("css-like")]),e._v("选择器。")]),e._v(" "),v("p",[e._v("请参考"),v("a",{attrs:{href:"http://interactjs.io/docs/#ignorable-selectors",target:"_blank",rel:"noopener noreferrer"}},[e._v("interact.js docs"),v("OutboundLink")],1),e._v("中的"),v("code",[e._v("ignoreFrom")]),e._v("。")])])}),[],!1,null,null,null);v.default=a.exports}}]);