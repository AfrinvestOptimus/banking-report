(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{237:function(t,e,n){"use strict";n.r(e);var c={name:"optionUncheck"},o=n(48),l=Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"#6B7280","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])}),[],!1,null,"561f3cdc",null).exports,r={name:"optionChecked"},m={name:"formatType",components:{OptionChecked:Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M21.0999 12.0004C21.0999 17.0262 17.0257 21.1004 11.9999 21.1004C6.97411 21.1004 2.8999 17.0262 2.8999 12.0004C2.8999 6.9746 6.97411 2.90039 11.9999 2.90039C17.0257 2.90039 21.0999 6.9746 21.0999 12.0004ZM16.802 10.8025C17.4659 10.1386 17.4659 9.0622 16.802 8.39831C16.1381 7.73442 15.0617 7.73442 14.3978 8.39831L10.7999 11.9962L9.60198 10.7983C8.93809 10.1344 7.86171 10.1344 7.19782 10.7983C6.53393 11.4622 6.53393 12.5386 7.19782 13.2025L9.59782 15.6025C10.2617 16.2664 11.3381 16.2664 12.002 15.6025L16.802 10.8025Z",fill:"#27AE60",stroke:"#27AE60"}})])}),[],!1,null,"6cb46e02",null).exports,OptionUncheck:l},props:["item"],data:function(){return{}},methods:{selectItem:function(){this.$emit("selectItem",this.item)}}},d=Object(o.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"\n    flex\n    justify-between\n    items-center\n    md:items-end\n    space-x-10\n    py-5\n    cursor-pointer\n    select-none\n  ",on:{click:t.selectItem}},[n("div",{staticClass:"md:w-[400px]"},[n("p",{staticClass:"\n        font-semibold font-inter\n        text-grey-900\n        tracking-[3px]\n        leading-[150%]\n        text-sm\n      "},[t._t("title")],2),t._v(" "),n("p",{staticClass:"\n        text-grey-600\n        font-inter font-medium\n        leading-[150%]\n        text-xs\n        w-[80%]\n      "},[t._t("subtitle")],2)]),t._v(" "),n("div",{staticClass:"flex space-x-3 items-center"},[n("p",{staticClass:"font-inter text-grey-600 text-sm font-medium"},[t._t("price")],2),t._v(" "),t.item.selected?n("OptionChecked"):n("OptionUncheck")],1)])}),[],!1,null,"189f243d",null);e.default=d.exports}}]);