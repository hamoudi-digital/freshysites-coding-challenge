!function(){"use strict";var e,t={156:function(){var e=window.wp.element,t=window.wp.blocks,r=window.wp.blockEditor,n=window.wp.components,l=JSON.parse('{"u2":"create-block/read-more-challenge"}');(0,t.registerBlockType)(l.u2,{attributes:{url:{type:"string"},text:{type:"string"}},edit(t){let{className:l,attributes:o,setAttributes:a}=t;const[u,c]=(0,e.useState)(!1),i=()=>c(!0);return(0,e.createElement)("div",null,null==o.url||null==o.text?(0,e.createElement)(n.Button,{variant:"secondary",onClick:i},"Select Post"):(0,e.createElement)("p",{onClick:i},"Read More: ",(0,e.createElement)("a",{href:o.url},o.text)),u&&(0,e.createElement)(n.Modal,{title:"Select Post:",onRequestClose:()=>c(!1)},(0,e.createElement)(r.URLInput,{className:l,value:o.url,onChange:(e,t)=>a({url:e,text:t&&t.title||"Click here"})})))},save(t){let{attributes:r}=t;return(0,e.createElement)("p",null,"Read More: ",(0,e.createElement)("a",{href:r.url},r.text))}})}},r={};function n(e){var l=r[e];if(void 0!==l)return l.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=function(t,r,l,o){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],l=e[s][1],o=e[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,o<a&&(a=o));if(u){e.splice(s--,1);var i=l();void 0!==i&&(t=i)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,l,o]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var l,o,a=r[0],u=r[1],c=r[2],i=0;if(a.some((function(t){return 0!==e[t]}))){for(l in u)n.o(u,l)&&(n.m[l]=u[l]);if(c)var s=c(n)}for(t&&t(r);i<a.length;i++)o=a[i],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(s)},r=self.webpackChunkread_more_challenge=self.webpackChunkread_more_challenge||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var l=n.O(void 0,[431],(function(){return n(156)}));l=n.O(l)}();