(window.webpackJsonp=window.webpackJsonp||[]).push([[13,7],{237:function(t,e,n){"use strict";n.r(e);var o={name:"optionUncheck"},r=n(48),l=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"#6B7280","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])}),[],!1,null,"561f3cdc",null).exports,c={name:"optionChecked"},m={name:"formatType",components:{OptionChecked:Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M21.0999 12.0004C21.0999 17.0262 17.0257 21.1004 11.9999 21.1004C6.97411 21.1004 2.8999 17.0262 2.8999 12.0004C2.8999 6.9746 6.97411 2.90039 11.9999 2.90039C17.0257 2.90039 21.0999 6.9746 21.0999 12.0004ZM16.802 10.8025C17.4659 10.1386 17.4659 9.0622 16.802 8.39831C16.1381 7.73442 15.0617 7.73442 14.3978 8.39831L10.7999 11.9962L9.60198 10.7983C8.93809 10.1344 7.86171 10.1344 7.19782 10.7983C6.53393 11.4622 6.53393 12.5386 7.19782 13.2025L9.59782 15.6025C10.2617 16.2664 11.3381 16.2664 12.002 15.6025L16.802 10.8025Z",fill:"#27AE60",stroke:"#27AE60"}})])}),[],!1,null,"6cb46e02",null).exports,OptionUncheck:l},props:["item"],data:function(){return{}},methods:{selectItem:function(){this.$emit("selectItem",this.item)}}},d=Object(r.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"\n    flex\n    justify-between\n    items-center\n    md:items-end\n    space-x-10\n    py-5\n    cursor-pointer\n    select-none\n  ",on:{click:t.selectItem}},[n("div",{staticClass:"md:w-[400px]"},[n("p",{staticClass:"\n        font-semibold font-inter\n        text-grey-900\n        tracking-[3px]\n        leading-[150%]\n        text-sm\n      "},[t._t("title")],2),t._v(" "),n("p",{staticClass:"\n        text-grey-600\n        font-inter font-medium\n        leading-[150%]\n        text-xs\n        w-[80%]\n      "},[t._t("subtitle")],2)]),t._v(" "),n("div",{staticClass:"flex space-x-3 items-center"},[n("p",{staticClass:"font-inter text-grey-600 text-sm font-medium"},[t._t("price")],2),t._v(" "),t.item.selected?n("OptionChecked"):n("OptionUncheck")],1)])}),[],!1,null,"189f243d",null);e.default=d.exports},264:function(t,e,n){"use strict";n.r(e);n(13),n(29);var o={name:"OptionModal",components:{FormatType:n(237).default},props:["format","types"],computed:{},methods:{selectFormat:function(t){this.types.forEach((function(e){e.selected=e===t})),this.$emit("selectItem",t)}}},r=n(48),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    modal\n    fixed\n    bg-[rgba(0,0,0,.7)]\n    text-white\n    top-0\n    bottom-0\n    right-0\n    left-0\n    flex\n    justify-center\n    items-center\n    px-4\n    md:px-0\n  "},[n("div",{staticClass:"modal-box bg-white py-8 md:py-20 px-6 md:px-10"},[n("h2",{staticClass:"\n        uppercase\n        text-primary\n        font-inter\n        text-xl\n        md:text-2xl\n        font-bold\n        mb-6\n      "},[t._v("\n      Select preferred format\n    ")]),t._v(" "),n("ul",{staticClass:"divide-y divide-solid divide-[rgba(0,0,0,.1)]"},t._l(t.types,(function(e){return n("FormatType",{key:e.id,attrs:{item:e},on:{selectItem:function(e){return t.selectFormat(e)}},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(e.title))]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(t._s(e.subTitle))]},proxy:!0},{key:"price",fn:function(){return[t._v(t._s(e.price))]},proxy:!0}],null,!0)})})),1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatType:n(237).default})}}]);