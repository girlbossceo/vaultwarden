/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#bs5/dt-1.13.6
 *
 * Included libraries:
 *   DataTables 1.13.6
 */
!function(t){"use strict"
if("function"==typeof define&&define.amd)define(["jquery"],function(e){return t(e,window,document)})
else if("object"==typeof exports){var e=require("jquery")
if("undefined"!=typeof window)return t(e,window,window.document)
module.exports=function(n,a){return n||(n=window),a||(a=e(n)),t(a,n,n.document)}}else window.DataTable=t(jQuery,window,document)}(function(t,e,n,a){"use strict"
function r(e){var n,a,o="a aa ai ao as b fn i m o s ",i={}
t.each(e,function(t,l){(n=t.match(/^([^A-Z]+?)([A-Z])/))&&-1!==o.indexOf(n[1]+" ")&&(a=t.replace(n[0],n[2].toLowerCase()),i[a]=t,"o"===n[1]&&r(e[t]))}),e._hungarianMap=i}function o(e,n,i){e._hungarianMap||r(e)
var l
t.each(n,function(r,s){(l=e._hungarianMap[r])===a||!i&&n[l]!==a||("o"===l.charAt(0)?(n[l]||(n[l]={}),t.extend(!0,n[l],n[r]),o(e[l],n[l],i)):n[l]=n[r])})}function i(t){var e=Zt.defaults.oLanguage,n=e.sDecimal
if(n&&Ut(n),t){var a=t.sZeroRecords
!t.sEmptyTable&&a&&"No data available in table"===e.sEmptyTable&&jt(t,t,"sZeroRecords","sEmptyTable"),!t.sLoadingRecords&&a&&"Loading..."===e.sLoadingRecords&&jt(t,t,"sZeroRecords","sLoadingRecords"),t.sInfoThousands&&(t.sThousands=t.sInfoThousands)
var r=t.sDecimal
r&&n!==r&&Ut(r)}}function l(t){Se(t,"ordering","bSort"),Se(t,"orderMulti","bSortMulti"),Se(t,"orderClasses","bSortClasses"),Se(t,"orderCellsTop","bSortCellsTop"),Se(t,"order","aaSorting"),Se(t,"orderFixed","aaSortingFixed"),Se(t,"paging","bPaginate"),Se(t,"pagingType","sPaginationType"),Se(t,"pageLength","iDisplayLength"),Se(t,"searching","bFilter"),"boolean"==typeof t.sScrollX&&(t.sScrollX=t.sScrollX?"100%":""),"boolean"==typeof t.scrollX&&(t.scrollX=t.scrollX?"100%":"")
var e=t.aoSearchCols
if(e)for(var n=0,a=e.length;n<a;n++)e[n]&&o(Zt.models.oSearch,e[n])}function s(t){Se(t,"orderable","bSortable"),Se(t,"orderData","aDataSort"),Se(t,"orderSequence","asSorting"),Se(t,"orderDataType","sortDataType")
var e=t.aDataSort
"number"!=typeof e||Array.isArray(e)||(t.aDataSort=[e])}function u(n){if(!Zt.__browser){var a={}
Zt.__browser=a
var r=t("<div/>").css({position:"fixed",top:0,left:-1*t(e).scrollLeft(),height:1,width:1,overflow:"hidden"}).append(t("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(t("<div/>").css({width:"100%",height:10}))).appendTo("body"),o=r.children(),i=o.children()
a.barWidth=o[0].offsetWidth-o[0].clientWidth,a.bScrollOversize=100===i[0].offsetWidth&&100!==o[0].clientWidth,a.bScrollbarLeft=1!==Math.round(i.offset().left),a.bBounding=!!r[0].getBoundingClientRect().width,r.remove()}t.extend(n.oBrowser,Zt.__browser),n.oScroll.iBarWidth=Zt.__browser.barWidth}function c(t,e,n,r,o,i){var l,s=r,u=!1
for(n!==a&&(l=n,u=!0);s!==o;)t.hasOwnProperty(s)&&(l=u?e(l,t[s],s,t):t[s],u=!0,s+=i)
return l}function f(e,a){var r=Zt.defaults.column,o=e.aoColumns.length,i=t.extend({},Zt.models.oColumn,r,{nTh:a||n.createElement("th"),sTitle:r.sTitle?r.sTitle:a?a.innerHTML:"",aDataSort:r.aDataSort?r.aDataSort:[o],mData:r.mData?r.mData:o,idx:o})
e.aoColumns.push(i)
var l=e.aoPreSearchCols
l[o]=t.extend({},Zt.models.oSearch,l[o]),d(e,o,t(a).data())}function d(e,n,r){var i=e.aoColumns[n],l=e.oClasses,u=t(i.nTh)
if(!i.sWidthOrig){i.sWidthOrig=u.attr("width")||null
var c=(u.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/)
c&&(i.sWidthOrig=c[1])}if(r!==a&&null!==r){s(r),o(Zt.defaults.column,r,!0),r.mDataProp===a||r.mData||(r.mData=r.mDataProp),r.sType&&(i._sManualType=r.sType),r.className&&!r.sClass&&(r.sClass=r.className),r.sClass&&u.addClass(r.sClass)
var f=i.sClass
t.extend(i,r),jt(i,r,"sWidth","sWidthOrig"),f!==i.sClass&&(i.sClass=f+" "+i.sClass),r.iDataSort!==a&&(i.aDataSort=[r.iDataSort]),jt(i,r,"aDataSort"),i.ariaTitle||(i.ariaTitle=u.attr("aria-label"))}var d=i.mData,h=_e(d),p=i.mRender?_e(i.mRender):null,g=function(t){return"string"==typeof t&&-1!==t.indexOf("@")}
i._bAttrSrc=t.isPlainObject(d)&&(g(d.sort)||g(d.type)||g(d.filter)),i._setter=null,i.fnGetData=function(t,e,n){var r=h(t,e,a,n)
return p&&e?p(r,e,t,n):r},i.fnSetData=function(t,e,n){return we(d)(t,e,n)},"number"==typeof d||i._isArrayHost||(e._rowReadObject=!0),e.oFeatures.bSort||(i.bSortable=!1,u.addClass(l.sSortableNone))
var b=-1!==t.inArray("asc",i.asSorting),v=-1!==t.inArray("desc",i.asSorting)
i.bSortable&&(b||v)?b&&!v?(i.sSortingClass=l.sSortableAsc,i.sSortingClassJUI=l.sSortJUIAscAllowed):!b&&v?(i.sSortingClass=l.sSortableDesc,i.sSortingClassJUI=l.sSortJUIDescAllowed):(i.sSortingClass=l.sSortable,i.sSortingClassJUI=l.sSortJUI):(i.sSortingClass=l.sSortableNone,i.sSortingClassJUI="")}function h(t){if(!1!==t.oFeatures.bAutoWidth){var e=t.aoColumns
bt(t)
for(var n=0,a=e.length;n<a;n++)e[n].nTh.style.width=e[n].sWidth}var r=t.oScroll
""===r.sY&&""===r.sX||pt(t),kt(t,null,"column-sizing",[t])}function p(t,e){var n=v(t,"bVisible")
return"number"==typeof n[e]?n[e]:null}function g(e,n){var a=v(e,"bVisible"),r=t.inArray(n,a)
return-1!==r?r:null}function b(e){var n=0
return t.each(e.aoColumns,function(e,a){a.bVisible&&"none"!==t(a.nTh).css("display")&&n++}),n}function v(e,n){var a=[]
return t.map(e.aoColumns,function(t,e){t[n]&&a.push(e)}),a}function m(t){var e,n,r,o,i,l,s,u,c,f=t.aoColumns,d=t.aoData,h=Zt.ext.type.detect
for(e=0,n=f.length;e<n;e++)if(s=f[e],c=[],!s.sType&&s._sManualType)s.sType=s._sManualType
else if(!s.sType){for(r=0,o=h.length;r<o;r++){for(i=0,l=d.length;i<l&&(c[i]===a&&(c[i]=T(t,i,e,"type")),(u=h[r](c[i],t))||r===h.length-1)&&("html"!==u||re(c[i]));i++);if(u){s.sType=u
break}}s.sType||(s.sType="string")}}function S(e,n,r,o){var i,l,s,u,c,d,h,p=e.aoColumns
if(n)for(i=n.length-1;i>=0;i--){h=n[i]
var g=h.target!==a?h.target:h.targets!==a?h.targets:h.aTargets
for(Array.isArray(g)||(g=[g]),s=0,u=g.length;s<u;s++)if("number"==typeof g[s]&&g[s]>=0){for(;p.length<=g[s];)f(e)
o(g[s],h)}else if("number"==typeof g[s]&&g[s]<0)o(p.length+g[s],h)
else if("string"==typeof g[s])for(c=0,d=p.length;c<d;c++)("_all"==g[s]||t(p[c].nTh).hasClass(g[s]))&&o(c,h)}if(r)for(i=0,l=r.length;i<l;i++)o(i,r[i])}function y(e,n,r,o){var i=e.aoData.length,l=t.extend(!0,{},Zt.models.oRow,{src:r?"dom":"data",idx:i})
l._aData=n,e.aoData.push(l)
for(var s=e.aoColumns,u=0,c=s.length;u<c;u++)s[u].sType=null
e.aiDisplayMaster.push(i)
var f=e.rowIdFn(n)
return f!==a&&(e.aIds[f]=l),!r&&e.oFeatures.bDeferRender||P(e,i,r,o),i}function D(e,n){var a
return n instanceof t||(n=t(n)),n.map(function(t,n){return a=R(e,n),y(e,a.data,n,a.cells)})}function _(t,e){return e._DT_RowIndex!==a?e._DT_RowIndex:null}function w(e,n,a){return t.inArray(a,e.aoData[n].anCells)}function T(t,e,n,r){"search"===r?r="filter":"order"===r&&(r="sort")
var o=t.iDraw,i=t.aoColumns[n],l=t.aoData[e]._aData,s=i.sDefaultContent,u=i.fnGetData(l,r,{settings:t,row:e,col:n})
if(u===a)return t.iDrawError!=o&&null===s&&(Pt(t,0,"Requested unknown parameter "+("function"==typeof i.mData?"{function}":"'"+i.mData+"'")+" for row "+e+", column "+n,4),t.iDrawError=o),s
if(u!==l&&null!==u||null===s||r===a){if("function"==typeof u)return u.call(l)}else u=s
if(null===u&&"display"===r)return""
if("filter"===r){var c=Zt.ext.type.search
c[i.sType]&&(u=c[i.sType](u))}return u}function C(t,e,n,a){var r=t.aoColumns[n],o=t.aoData[e]._aData
r.fnSetData(o,a,{settings:t,row:e,col:n})}function x(e){return t.map(e.match(/(\\.|[^\.])+/g)||[""],function(t){return t.replace(/\\\./g,".")})}function A(t){return ce(t.aoData,"_aData")}function I(t){t.aoData.length=0,t.aiDisplayMaster.length=0,t.aiDisplay.length=0,t.aIds={}}function F(t,e,n){for(var r=-1,o=0,i=t.length;o<i;o++)t[o]==e?r=o:t[o]>e&&t[o]--;-1!=r&&n===a&&t.splice(r,1)}function L(t,e,n,r){var o,i,l=t.aoData[e],s=function(n,a){for(;n.childNodes.length;)n.removeChild(n.firstChild)
n.innerHTML=T(t,e,a,"display")}
if("dom"!==n&&(n&&"auto"!==n||"dom"!==l.src)){var u=l.anCells
if(u)if(r!==a)s(u[r],r)
else for(o=0,i=u.length;o<i;o++)s(u[o],o)}else l._aData=R(t,l,r,r===a?a:l._aData).data
l._aSortData=null,l._aFilterData=null
var c=t.aoColumns
if(r!==a)c[r].sType=null
else{for(o=0,i=c.length;o<i;o++)c[o].sType=null
j(t,l)}}function R(t,e,n,r){var o,i,l,s=[],u=e.firstChild,c=0,f=t.aoColumns,d=t._rowReadObject
r=r!==a?r:d?{}:[]
var h=function(t,e){if("string"==typeof t){var n=t.indexOf("@")
if(-1!==n){var a=t.substring(n+1)
we(t)(r,e.getAttribute(a))}}},p=function(t){if(n===a||n===c)if(i=f[c],l=t.innerHTML.trim(),i&&i._bAttrSrc){var e=we(i.mData._)
e(r,l),h(i.mData.sort,t),h(i.mData.type,t),h(i.mData.filter,t)}else d?(i._setter||(i._setter=we(i.mData)),i._setter(r,l)):r[c]=l
c++}
if(u)for(;u;)o=u.nodeName.toUpperCase(),"TD"!=o&&"TH"!=o||(p(u),s.push(u)),u=u.nextSibling
else{s=e.anCells
for(var g=0,b=s.length;g<b;g++)p(s[g])}var v=e.firstChild?e:e.nTr
if(v){var m=v.getAttribute("id")
m&&we(t.rowId)(r,m)}return{data:r,cells:s}}function P(e,a,r,o){var i,l,s,u,c,f,d=e.aoData[a],h=d._aData,p=[]
if(null===d.nTr){for(i=r||n.createElement("tr"),d.nTr=i,d.anCells=p,i._DT_RowIndex=a,j(e,d),u=0,c=e.aoColumns.length;u<c;u++)s=e.aoColumns[u],f=!r,l=f?n.createElement(s.sCellType):o[u],l||Pt(e,0,"Incorrect column count",18),l._DT_CellIndex={row:a,column:u},p.push(l),!f&&(!s.mRender&&s.mData===u||t.isPlainObject(s.mData)&&s.mData._===u+".display")||(l.innerHTML=T(e,a,u,"display")),s.sClass&&(l.className+=" "+s.sClass),s.bVisible&&!r?i.appendChild(l):!s.bVisible&&r&&l.parentNode.removeChild(l),s.fnCreatedCell&&s.fnCreatedCell.call(e.oInstance,l,T(e,a,u),h,a,u)
kt(e,"aoRowCreatedCallback",null,[i,h,a,p])}}function j(e,n){var a=n.nTr,r=n._aData
if(a){var o=e.rowIdFn(r)
if(o&&(a.id=o),r.DT_RowClass){var i=r.DT_RowClass.split(" ")
n.__rowc=n.__rowc?be(n.__rowc.concat(i)):i,t(a).removeClass(n.__rowc.join(" ")).addClass(r.DT_RowClass)}r.DT_RowAttr&&t(a).attr(r.DT_RowAttr),r.DT_RowData&&t(a).data(r.DT_RowData)}}function H(e){var n,a,r,o,i,l=e.nTHead,s=e.nTFoot,u=0===t("th, td",l).length,c=e.oClasses,f=e.aoColumns
for(u&&(o=t("<tr/>").appendTo(l)),n=0,a=f.length;n<a;n++)i=f[n],r=t(i.nTh).addClass(i.sClass),u&&r.appendTo(o),e.oFeatures.bSort&&(r.addClass(i.sSortingClass),!1!==i.bSortable&&(r.attr("tabindex",e.iTabIndex).attr("aria-controls",e.sTableId),Ct(e,i.nTh,n))),i.sTitle!=r[0].innerHTML&&r.html(i.sTitle),Wt(e,"header")(e,r,i,c)
if(u&&W(e.aoHeader,l),t(l).children("tr").children("th, td").addClass(c.sHeaderTH),t(s).children("tr").children("th, td").addClass(c.sFooterTH),null!==s){var d=e.aoFooter[0]
for(n=0,a=d.length;n<a;n++)i=f[n],i?(i.nTf=d[n].cell,i.sClass&&t(i.nTf).addClass(i.sClass)):Pt(e,0,"Incorrect column count",18)}}function N(e,n,r){var o,i,l,s,u,c,f,d,h,p=[],g=[],b=e.aoColumns.length
if(n){for(r===a&&(r=!1),o=0,i=n.length;o<i;o++){for(p[o]=n[o].slice(),p[o].nTr=n[o].nTr,l=b-1;l>=0;l--)e.aoColumns[l].bVisible||r||p[o].splice(l,1)
g.push([])}for(o=0,i=p.length;o<i;o++){if(f=p[o].nTr)for(;c=f.firstChild;)f.removeChild(c)
for(l=0,s=p[o].length;l<s;l++)if(d=1,h=1,g[o][l]===a){for(f.appendChild(p[o][l].cell),g[o][l]=1;p[o+d]!==a&&p[o][l].cell==p[o+d][l].cell;)g[o+d][l]=1,d++
for(;p[o][l+h]!==a&&p[o][l].cell==p[o][l+h].cell;){for(u=0;u<d;u++)g[o+u][l+h]=1
h++}t(p[o][l].cell).attr("rowspan",d).attr("colspan",h)}}}}function O(e,n){B(e)
var a=kt(e,"aoPreDrawCallback","preDraw",[e])
if(-1!==t.inArray(!1,a))return void dt(e,!1)
var r=[],o=0,i=e.asStripeClasses,l=i.length,s=e.oLanguage,u="ssp"==Et(e),c=e.aiDisplay,f=e._iDisplayStart,d=e.fnDisplayEnd()
if(e.bDrawing=!0,e.bDeferLoading)e.bDeferLoading=!1,e.iDraw++,dt(e,!1)
else if(u){if(!e.bDestroying&&!n)return void V(e)}else e.iDraw++
if(0!==c.length)for(var h=u?0:f,p=u?e.aoData.length:d,g=h;g<p;g++){var v=c[g],m=e.aoData[v]
null===m.nTr&&P(e,v)
var S=m.nTr
if(0!==l){var y=i[o%l]
m._sRowStripe!=y&&(t(S).removeClass(m._sRowStripe).addClass(y),m._sRowStripe=y)}kt(e,"aoRowCallback",null,[S,m._aData,o,g,v]),r.push(S),o++}else{var D=s.sZeroRecords
1==e.iDraw&&"ajax"==Et(e)?D=s.sLoadingRecords:s.sEmptyTable&&0===e.fnRecordsTotal()&&(D=s.sEmptyTable),r[0]=t("<tr/>",{class:l?i[0]:""}).append(t("<td />",{valign:"top",colSpan:b(e),class:e.oClasses.sRowEmpty}).html(D))[0]}kt(e,"aoHeaderCallback","header",[t(e.nTHead).children("tr")[0],A(e),f,d,c]),kt(e,"aoFooterCallback","footer",[t(e.nTFoot).children("tr")[0],A(e),f,d,c])
var _=t(e.nTBody)
_.children().detach(),_.append(t(r)),kt(e,"aoDrawCallback","draw",[e]),e.bSorted=!1,e.bFiltered=!1,e.bDrawing=!1}function k(t,e){var n=t.oFeatures,a=n.bSort,r=n.bFilter
a&&_t(t),r?G(t,t.oPreviousSearch):t.aiDisplay=t.aiDisplayMaster.slice(),!0!==e&&(t._iDisplayStart=0),t._drawHold=e,O(t),t._drawHold=!1}function M(e){var n=e.oClasses,a=t(e.nTable),r=t("<div/>").insertBefore(a),o=e.oFeatures,i=t("<div/>",{id:e.sTableId+"_wrapper",class:n.sWrapper+(e.nTFoot?"":" "+n.sNoFooter)})
e.nHolding=r[0],e.nTableWrapper=i[0],e.nTableReinsertBefore=e.nTable.nextSibling
for(var l,s,u,c,f,d,h=e.sDom.split(""),p=0;p<h.length;p++){if(l=null,"<"==(s=h[p])){if(u=t("<div/>")[0],"'"==(c=h[p+1])||'"'==c){for(f="",d=2;h[p+d]!=c;)f+=h[p+d],d++
if("H"==f?f=n.sJUIHeader:"F"==f&&(f=n.sJUIFooter),-1!=f.indexOf(".")){var g=f.split(".")
u.id=g[0].substr(1,g[0].length-1),u.className=g[1]}else"#"==f.charAt(0)?u.id=f.substr(1,f.length-1):u.className=f
p+=d}i.append(u),i=t(u)}else if(">"==s)i=i.parent()
else if("l"==s&&o.bPaginate&&o.bLengthChange)l=st(e)
else if("f"==s&&o.bFilter)l=$(e)
else if("r"==s&&o.bProcessing)l=ft(e)
else if("t"==s)l=ht(e)
else if("i"==s&&o.bInfo)l=nt(e)
else if("p"==s&&o.bPaginate)l=ut(e)
else if(0!==Zt.ext.feature.length)for(var b=Zt.ext.feature,v=0,m=b.length;v<m;v++)if(s==b[v].cFeature){l=b[v].fnInit(e)
break}if(l){var S=e.aanFeatures
S[s]||(S[s]=[]),S[s].push(l),i.append(l)}}r.replaceWith(i),e.nHolding=null}function W(e,n){var a,r,o,i,l,s,u,c,f,d,h,p=t(n).children("tr")
for(e.splice(0,e.length),o=0,s=p.length;o<s;o++)e.push([])
for(o=0,s=p.length;o<s;o++)for(a=p[o],c=0,r=a.firstChild;r;){if("TD"==r.nodeName.toUpperCase()||"TH"==r.nodeName.toUpperCase())for(f=1*r.getAttribute("colspan"),d=1*r.getAttribute("rowspan"),f=f&&0!==f&&1!==f?f:1,d=d&&0!==d&&1!==d?d:1,u=function(t,e,n){for(var a=t[e];a[n];)n++
return n}(e,o,c),h=1===f,l=0;l<f;l++)for(i=0;i<d;i++)e[o+i][u+l]={cell:r,unique:h},e[o+i].nTr=a
r=r.nextSibling}}function E(t,e,n){var a=[]
n||(n=t.aoHeader,e&&(n=[],W(n,e)))
for(var r=0,o=n.length;r<o;r++)for(var i=0,l=n[r].length;i<l;i++)!n[r][i].unique||a[i]&&t.bSortCellsTop||(a[i]=n[r][i].cell)
return a}function B(t){var e="ssp"==Et(t),n=t.iInitDisplayStart
n!==a&&-1!==n&&(t._iDisplayStart=e?n:n>=t.fnRecordsDisplay()?0:n,t.iInitDisplayStart=-1)}function U(e,n,a){if(kt(e,"aoServerParams","serverParams",[n]),n&&Array.isArray(n)){var r={},o=/(.*?)\[\]$/
t.each(n,function(t,e){var n=e.name.match(o)
if(n){var a=n[0]
r[a]||(r[a]=[]),r[a].push(e.value)}else r[e.name]=e.value}),n=r}var i,l=e.ajax,s=e.oInstance,u=function(t){var n=e.jqXHR?e.jqXHR.status:null;(null===t||"number"==typeof n&&204==n)&&(t={},q(e,t,[]))
var r=t.error||t.sError
r&&Pt(e,0,r),e.json=t,kt(e,null,"xhr",[e,t,e.jqXHR]),a(t)}
if(t.isPlainObject(l)&&l.data){i=l.data
var c="function"==typeof i?i(n,e):i
n="function"==typeof i&&c?c:t.extend(!0,n,c),delete l.data}var f={data:n,success:u,dataType:"json",cache:!1,type:e.sServerMethod,error:function(n,a,r){var o=kt(e,null,"xhr",[e,null,e.jqXHR]);-1===t.inArray(!0,o)&&("parsererror"==a?Pt(e,0,"Invalid JSON response",1):4===n.readyState&&Pt(e,0,"Ajax error",7)),dt(e,!1)}}
e.oAjaxData=n,kt(e,null,"preXhr",[e,n]),e.fnServerData?e.fnServerData.call(s,e.sAjaxSource,t.map(n,function(t,e){return{name:e,value:t}}),u,e):e.sAjaxSource||"string"==typeof l?e.jqXHR=t.ajax(t.extend(f,{url:l||e.sAjaxSource})):"function"==typeof l?e.jqXHR=l.call(s,n,u,e):(e.jqXHR=t.ajax(t.extend(f,l)),l.data=i)}function V(t){t.iDraw++,dt(t,!0)
var e=t._drawHold
U(t,X(t),function(n){t._drawHold=e,J(t,n),t._drawHold=!1})}function X(e){var n,a,r,o,i=e.aoColumns,l=i.length,s=e.oFeatures,u=e.oPreviousSearch,c=e.aoPreSearchCols,f=[],d=Dt(e),h=e._iDisplayStart,p=!1!==s.bPaginate?e._iDisplayLength:-1,g=function(t,e){f.push({name:t,value:e})}
g("sEcho",e.iDraw),g("iColumns",l),g("sColumns",ce(i,"sName").join(",")),g("iDisplayStart",h),g("iDisplayLength",p)
var b={draw:e.iDraw,columns:[],order:[],start:h,length:p,search:{value:u.sSearch,regex:u.bRegex}}
for(n=0;n<l;n++)r=i[n],o=c[n],a="function"==typeof r.mData?"function":r.mData,b.columns.push({data:a,name:r.sName,searchable:r.bSearchable,orderable:r.bSortable,search:{value:o.sSearch,regex:o.bRegex}}),g("mDataProp_"+n,a),s.bFilter&&(g("sSearch_"+n,o.sSearch),g("bRegex_"+n,o.bRegex),g("bSearchable_"+n,r.bSearchable)),s.bSort&&g("bSortable_"+n,r.bSortable)
s.bFilter&&(g("sSearch",u.sSearch),g("bRegex",u.bRegex)),s.bSort&&(t.each(d,function(t,e){b.order.push({column:e.col,dir:e.dir}),g("iSortCol_"+t,e.col),g("sSortDir_"+t,e.dir)}),g("iSortingCols",d.length))
var v=Zt.ext.legacy.ajax
return null===v?e.sAjaxSource?f:b:v?f:b}function J(t,e){var n=function(t,n){return e[t]!==a?e[t]:e[n]},r=q(t,e),o=n("sEcho","draw"),i=n("iTotalRecords","recordsTotal"),l=n("iTotalDisplayRecords","recordsFiltered")
if(o!==a){if(1*o<t.iDraw)return
t.iDraw=1*o}r||(r=[]),I(t),t._iRecordsTotal=parseInt(i,10),t._iRecordsDisplay=parseInt(l,10)
for(var s=0,u=r.length;s<u;s++)y(t,r[s])
t.aiDisplay=t.aiDisplayMaster.slice(),O(t,!0),t._bInitComplete||it(t,e),dt(t,!1)}function q(e,n,r){var o=t.isPlainObject(e.ajax)&&e.ajax.dataSrc!==a?e.ajax.dataSrc:e.sAjaxDataProp
if(!r)return"data"===o?n.aaData||n[o]:""!==o?_e(o)(n):n
we(o)(n,r)}function $(e){var a=e.oClasses,r=e.sTableId,o=e.oLanguage,i=e.oPreviousSearch,l=e.aanFeatures,s='<input type="search" class="'+a.sFilterInput+'"/>',u=o.sSearch
u=u.match(/_INPUT_/)?u.replace("_INPUT_",s):u+s
var c=t("<div/>",{id:l.f?null:r+"_filter",class:a.sFilter}).append(t("<label/>").append(u)),f=function(t){var n=(l.f,this.value?this.value:"")
i.return&&"Enter"!==t.key||n!=i.sSearch&&(G(e,{sSearch:n,bRegex:i.bRegex,bSmart:i.bSmart,bCaseInsensitive:i.bCaseInsensitive,return:i.return}),e._iDisplayStart=0,O(e))},d=null!==e.searchDelay?e.searchDelay:"ssp"===Et(e)?400:0,h=t("input",c).val(i.sSearch).attr("placeholder",o.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",d?Ie(f,d):f).on("mouseup.DT",function(t){setTimeout(function(){f.call(h[0],t)},10)}).on("keypress.DT",function(t){if(13==t.keyCode)return!1}).attr("aria-controls",r)
return t(e.nTable).on("search.dt.DT",function(t,a){if(e===a)try{h[0]!==n.activeElement&&h.val(i.sSearch)}catch(t){}}),c[0]}function G(t,e,n){var r=t.oPreviousSearch,o=t.aoPreSearchCols,i=function(t){r.sSearch=t.sSearch,r.bRegex=t.bRegex,r.bSmart=t.bSmart,r.bCaseInsensitive=t.bCaseInsensitive,r.return=t.return},l=function(t){return t.bEscapeRegex!==a?!t.bEscapeRegex:t.bRegex}
if(m(t),"ssp"!=Et(t)){Z(t,e.sSearch,n,l(e),e.bSmart,e.bCaseInsensitive),i(e)
for(var s=0;s<o.length;s++)Y(t,o[s].sSearch,s,l(o[s]),o[s].bSmart,o[s].bCaseInsensitive)
z(t)}else i(e)
t.bFiltered=!0,kt(t,null,"search",[t])}function z(e){for(var n,a,r=Zt.ext.search,o=e.aiDisplay,i=0,l=r.length;i<l;i++){for(var s=[],u=0,c=o.length;u<c;u++)a=o[u],n=e.aoData[a],r[i](e,n._aFilterData,a,n._aData,u)&&s.push(a)
o.length=0,t.merge(o,s)}}function Y(t,e,n,a,r,o){if(""!==e){for(var i,l=[],s=t.aiDisplay,u=Q(e,a,r,o),c=0;c<s.length;c++)i=t.aoData[s[c]]._aFilterData[n],u.test(i)&&l.push(s[c])
t.aiDisplay=l}}function Z(t,e,n,a,r,o){var i,l,s,u=Q(e,a,r,o),c=t.oPreviousSearch.sSearch,f=t.aiDisplayMaster,d=[]
if(0!==Zt.ext.search.length&&(n=!0),l=K(t),e.length<=0)t.aiDisplay=f.slice()
else{for((l||n||a||c.length>e.length||0!==e.indexOf(c)||t.bSorted)&&(t.aiDisplay=f.slice()),i=t.aiDisplay,s=0;s<i.length;s++)u.test(t.aoData[i[s]]._sFilterRow)&&d.push(i[s])
t.aiDisplay=d}}function Q(e,n,a,r){if(e=n?e:Te(e),a){e="^(?=.*?"+t.map(e.match(/["\u201C][^"\u201D]+["\u201D]|[^ ]+/g)||[""],function(t){if('"'===t.charAt(0)){var e=t.match(/^"(.*)"$/)
t=e?e[1]:t}else if("“"===t.charAt(0)){var e=t.match(/^\u201C(.*)\u201D$/)
t=e?e[1]:t}return t.replace('"',"")}).join(")(?=.*?")+").*$"}return new RegExp(e,r?"i":"")}function K(t){var e,n,a,r,o,i,l,s,u=t.aoColumns,c=!1
for(n=0,r=t.aoData.length;n<r;n++)if(s=t.aoData[n],!s._aFilterData){for(i=[],a=0,o=u.length;a<o;a++)e=u[a],e.bSearchable?(l=T(t,n,a,"filter"),null===l&&(l=""),"string"!=typeof l&&l.toString&&(l=l.toString())):l="",l.indexOf&&-1!==l.indexOf("&")&&(Ce.innerHTML=l,l=xe?Ce.textContent:Ce.innerText),l.replace&&(l=l.replace(/[\r\n\u2028]/g,"")),i.push(l)
s._aFilterData=i,s._sFilterRow=i.join("  "),c=!0}return c}function tt(t){return{search:t.sSearch,smart:t.bSmart,regex:t.bRegex,caseInsensitive:t.bCaseInsensitive}}function et(t){return{sSearch:t.search,bSmart:t.smart,bRegex:t.regex,bCaseInsensitive:t.caseInsensitive}}function nt(e){var n=e.sTableId,a=e.aanFeatures.i,r=t("<div/>",{class:e.oClasses.sInfo,id:a?null:n+"_info"})
return a||(e.aoDrawCallback.push({fn:at,sName:"information"}),r.attr("role","status").attr("aria-live","polite"),t(e.nTable).attr("aria-describedby",n+"_info")),r[0]}function at(e){var n=e.aanFeatures.i
if(0!==n.length){var a=e.oLanguage,r=e._iDisplayStart+1,o=e.fnDisplayEnd(),i=e.fnRecordsTotal(),l=e.fnRecordsDisplay(),s=l?a.sInfo:a.sInfoEmpty
l!==i&&(s+=" "+a.sInfoFiltered),s+=a.sInfoPostFix,s=rt(e,s)
var u=a.fnInfoCallback
null!==u&&(s=u.call(e.oInstance,e,r,o,i,l,s)),t(n).html(s)}}function rt(t,e){var n=t.fnFormatNumber,a=t._iDisplayStart+1,r=t._iDisplayLength,o=t.fnRecordsDisplay(),i=-1===r
return e.replace(/_START_/g,n.call(t,a)).replace(/_END_/g,n.call(t,t.fnDisplayEnd())).replace(/_MAX_/g,n.call(t,t.fnRecordsTotal())).replace(/_TOTAL_/g,n.call(t,o)).replace(/_PAGE_/g,n.call(t,i?1:Math.ceil(a/r))).replace(/_PAGES_/g,n.call(t,i?1:Math.ceil(o/r)))}function ot(t){var e,n,a,r=t.iInitDisplayStart,o=t.aoColumns,i=t.oFeatures,l=t.bDeferLoading
if(!t.bInitialised)return void setTimeout(function(){ot(t)},200)
for(M(t),H(t),N(t,t.aoHeader),N(t,t.aoFooter),dt(t,!0),i.bAutoWidth&&bt(t),e=0,n=o.length;e<n;e++)a=o[e],a.sWidth&&(a.nTh.style.width=yt(a.sWidth))
kt(t,null,"preInit",[t]),k(t)
var s=Et(t);("ssp"!=s||l)&&("ajax"==s?U(t,[],function(n){var a=q(t,n)
for(e=0;e<a.length;e++)y(t,a[e])
t.iInitDisplayStart=r,k(t),dt(t,!1),it(t,n)},t):(dt(t,!1),it(t)))}function it(t,e){t._bInitComplete=!0,(e||t.oInit.aaData)&&h(t),kt(t,null,"plugin-init",[t,e]),kt(t,"aoInitComplete","init",[t,e])}function lt(t,e){var n=parseInt(e,10)
t._iDisplayLength=n,Mt(t),kt(t,null,"length",[t,n])}function st(e){for(var n=e.oClasses,a=e.sTableId,r=e.aLengthMenu,o=Array.isArray(r[0]),i=o?r[0]:r,l=o?r[1]:r,s=t("<select/>",{name:a+"_length","aria-controls":a,class:n.sLengthSelect}),u=0,c=i.length;u<c;u++)s[0][u]=new Option("number"==typeof l[u]?e.fnFormatNumber(l[u]):l[u],i[u])
var f=t("<div><label/></div>").addClass(n.sLength)
return e.aanFeatures.l||(f[0].id=a+"_length"),f.children().append(e.oLanguage.sLengthMenu.replace("_MENU_",s[0].outerHTML)),t("select",f).val(e._iDisplayLength).on("change.DT",function(n){lt(e,t(this).val()),O(e)}),t(e.nTable).on("length.dt.DT",function(n,a,r){e===a&&t("select",f).val(r)}),f[0]}function ut(e){var n=e.sPaginationType,a=Zt.ext.pager[n],r="function"==typeof a,o=function(t){O(t)},i=t("<div/>").addClass(e.oClasses.sPaging+n)[0],l=e.aanFeatures
return r||a.fnInit(e,i,o),l.p||(i.id=e.sTableId+"_paginate",e.aoDrawCallback.push({fn:function(t){if(r){var e,n,i=t._iDisplayStart,s=t._iDisplayLength,u=t.fnRecordsDisplay(),c=-1===s,f=c?0:Math.ceil(i/s),d=c?1:Math.ceil(u/s),h=a(f,d)
for(e=0,n=l.p.length;e<n;e++)Wt(t,"pageButton")(t,l.p[e],e,h,f,d)}else a.fnUpdate(t,o)},sName:"pagination"})),i}function ct(t,e,n){var a=t._iDisplayStart,r=t._iDisplayLength,o=t.fnRecordsDisplay()
0===o||-1===r?a=0:"number"==typeof e?(a=e*r)>o&&(a=0):"first"==e?a=0:"previous"==e?(a=r>=0?a-r:0)<0&&(a=0):"next"==e?a+r<o&&(a+=r):"last"==e?a=Math.floor((o-1)/r)*r:Pt(t,0,"Unknown paging action: "+e,5)
var i=t._iDisplayStart!==a
return t._iDisplayStart=a,i?(kt(t,null,"page",[t]),n&&O(t)):kt(t,null,"page-nc",[t]),i}function ft(e){return t("<div/>",{id:e.aanFeatures.r?null:e.sTableId+"_processing",class:e.oClasses.sProcessing,role:"status"}).html(e.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>").insertBefore(e.nTable)[0]}function dt(e,n){e.oFeatures.bProcessing&&t(e.aanFeatures.r).css("display",n?"block":"none"),kt(e,null,"processing",[e,n])}function ht(e){var n=t(e.nTable),a=e.oScroll
if(""===a.sX&&""===a.sY)return e.nTable
var r=a.sX,o=a.sY,i=e.oClasses,l=n.children("caption"),s=l.length?l[0]._captionSide:null,u=t(n[0].cloneNode(!1)),c=t(n[0].cloneNode(!1)),f=n.children("tfoot"),d="<div/>",h=function(t){return t?yt(t):null}
f.length||(f=null)
var p=t(d,{class:i.sScrollWrapper}).append(t(d,{class:i.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:r?h(r):"100%"}).append(t(d,{class:i.sScrollHeadInner}).css({"box-sizing":"content-box",width:a.sXInner||"100%"}).append(u.removeAttr("id").css("margin-left",0).append("top"===s?l:null).append(n.children("thead"))))).append(t(d,{class:i.sScrollBody}).css({position:"relative",overflow:"auto",width:h(r)}).append(n))
f&&p.append(t(d,{class:i.sScrollFoot}).css({overflow:"hidden",border:0,width:r?h(r):"100%"}).append(t(d,{class:i.sScrollFootInner}).append(c.removeAttr("id").css("margin-left",0).append("bottom"===s?l:null).append(n.children("tfoot")))))
var g=p.children(),b=g[0],v=g[1],m=f?g[2]:null
return r&&t(v).on("scroll.DT",function(t){var e=this.scrollLeft
b.scrollLeft=e,f&&(m.scrollLeft=e)}),t(v).css("max-height",o),a.bCollapse||t(v).css("height",o),e.nScrollHead=b,e.nScrollBody=v,e.nScrollFoot=m,e.aoDrawCallback.push({fn:pt,sName:"scrolling"}),p[0]}function pt(n){var r,o,i,l,s,u,c,f,d,g=n.oScroll,b=g.sX,v=g.sXInner,m=g.sY,S=g.iBarWidth,y=t(n.nScrollHead),D=y[0].style,_=y.children("div"),w=_[0].style,T=_.children("table"),C=n.nScrollBody,x=t(C),A=C.style,I=t(n.nScrollFoot),F=I.children("div"),L=F.children("table"),R=t(n.nTHead),P=t(n.nTable),j=P[0],H=j.style,N=n.nTFoot?t(n.nTFoot):null,O=n.oBrowser,k=O.bScrollOversize,M=(ce(n.aoColumns,"nTh"),[]),W=[],B=[],U=[],V=function(t){var e=t.style
e.paddingTop="0",e.paddingBottom="0",e.borderTopWidth="0",e.borderBottomWidth="0",e.height=0},X=C.scrollHeight>C.clientHeight
if(n.scrollBarVis!==X&&n.scrollBarVis!==a)return n.scrollBarVis=X,void h(n)
n.scrollBarVis=X,P.children("thead, tfoot").remove(),N&&(u=N.clone().prependTo(P),o=N.find("tr"),l=u.find("tr"),u.find("[id]").removeAttr("id")),s=R.clone().prependTo(P),r=R.find("tr"),i=s.find("tr"),s.find("th, td").removeAttr("tabindex"),s.find("[id]").removeAttr("id"),b||(A.width="100%",y[0].style.width="100%"),t.each(E(n,s),function(t,e){c=p(n,t),e.style.width=n.aoColumns[c].sWidth}),N&&gt(function(t){t.style.width=""},l),d=P.outerWidth(),""===b?(H.width="100%",k&&(P.find("tbody").height()>C.offsetHeight||"scroll"==x.css("overflow-y"))&&(H.width=yt(P.outerWidth()-S)),d=P.outerWidth()):""!==v&&(H.width=yt(v),d=P.outerWidth()),gt(V,i),gt(function(n){var a=e.getComputedStyle?e.getComputedStyle(n).width:yt(t(n).width())
B.push(n.innerHTML),M.push(a)},i),gt(function(t,e){t.style.width=M[e]},r),t(i).css("height",0),N&&(gt(V,l),gt(function(e){U.push(e.innerHTML),W.push(yt(t(e).css("width")))},l),gt(function(t,e){t.style.width=W[e]},o),t(l).height(0)),gt(function(t,e){t.innerHTML='<div class="dataTables_sizing">'+B[e]+"</div>",t.childNodes[0].style.height="0",t.childNodes[0].style.overflow="hidden",t.style.width=M[e]},i),N&&gt(function(t,e){t.innerHTML='<div class="dataTables_sizing">'+U[e]+"</div>",t.childNodes[0].style.height="0",t.childNodes[0].style.overflow="hidden",t.style.width=W[e]},l),Math.round(P.outerWidth())<Math.round(d)?(f=C.scrollHeight>C.offsetHeight||"scroll"==x.css("overflow-y")?d+S:d,k&&(C.scrollHeight>C.offsetHeight||"scroll"==x.css("overflow-y"))&&(H.width=yt(f-S)),""!==b&&""===v||Pt(n,1,"Possible column misalignment",6)):f="100%",A.width=yt(f),D.width=yt(f),N&&(n.nScrollFoot.style.width=yt(f)),m||k&&(A.height=yt(j.offsetHeight+S))
var J=P.outerWidth()
T[0].style.width=yt(J),w.width=yt(J)
var q=P.height()>C.clientHeight||"scroll"==x.css("overflow-y"),$="padding"+(O.bScrollbarLeft?"Left":"Right")
w[$]=q?S+"px":"0px",N&&(L[0].style.width=yt(J),F[0].style.width=yt(J),F[0].style[$]=q?S+"px":"0px"),P.children("colgroup").insertBefore(P.children("thead")),x.trigger("scroll"),!n.bSorted&&!n.bFiltered||n._drawHold||(C.scrollTop=0)}function gt(t,e,n){for(var a,r,o=0,i=0,l=e.length;i<l;){for(a=e[i].firstChild,r=n?n[i].firstChild:null;a;)1===a.nodeType&&(n?t(a,r,o):t(a,o),o++),a=a.nextSibling,r=n?r.nextSibling:null
i++}}function bt(n){var a,r,o,i=n.nTable,l=n.aoColumns,s=n.oScroll,u=s.sY,c=s.sX,f=s.sXInner,d=l.length,g=v(n,"bVisible"),m=t("th",n.nTHead),S=i.getAttribute("width"),y=i.parentNode,D=!1,_=n.oBrowser,w=_.bScrollOversize,T=i.style.width
for(T&&-1!==T.indexOf("%")&&(S=T),a=0;a<g.length;a++)r=l[g[a]],null!==r.sWidth&&(r.sWidth=vt(r.sWidthOrig,y),D=!0)
if(w||!D&&!c&&!u&&d==b(n)&&d==m.length)for(a=0;a<d;a++){var C=p(n,a)
null!==C&&(l[C].sWidth=yt(m.eq(a).width()))}else{var x=t(i).clone().css("visibility","hidden").removeAttr("id")
x.find("tbody tr").remove()
var A=t("<tr/>").appendTo(x.find("tbody"))
for(x.find("thead, tfoot").remove(),x.append(t(n.nTHead).clone()).append(t(n.nTFoot).clone()),x.find("tfoot th, tfoot td").css("width",""),m=E(n,x.find("thead")[0]),a=0;a<g.length;a++)r=l[g[a]],m[a].style.width=null!==r.sWidthOrig&&""!==r.sWidthOrig?yt(r.sWidthOrig):"",r.sWidthOrig&&c&&t(m[a]).append(t("<div/>").css({width:r.sWidthOrig,margin:0,padding:0,border:0,height:1}))
if(n.aoData.length)for(a=0;a<g.length;a++)o=g[a],r=l[o],t(mt(n,o)).clone(!1).append(r.sContentPadding).appendTo(A)
t("[name]",x).removeAttr("name")
var I=t("<div/>").css(c||u?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(x).appendTo(y)
c&&f?x.width(f):c?(x.css("width","auto"),x.removeAttr("width"),x.width()<y.clientWidth&&S&&x.width(y.clientWidth)):u?x.width(y.clientWidth):S&&x.width(S)
var F=0
for(a=0;a<g.length;a++){var L=t(m[a]),R=L.outerWidth()-L.width(),P=_.bBounding?Math.ceil(m[a].getBoundingClientRect().width):L.outerWidth()
F+=P,l[g[a]].sWidth=yt(P-R)}i.style.width=yt(F),I.remove()}if(S&&(i.style.width=yt(S)),(S||c)&&!n._reszEvt){var j=function(){t(e).on("resize.DT-"+n.sInstance,Ie(function(){h(n)}))}
w?setTimeout(j,1e3):j(),n._reszEvt=!0}}function vt(e,a){if(!e)return 0
var r=t("<div/>").css("width",yt(e)).appendTo(a||n.body),o=r[0].offsetWidth
return r.remove(),o}function mt(e,n){var a=St(e,n)
if(a<0)return null
var r=e.aoData[a]
return r.nTr?r.anCells[n]:t("<td/>").html(T(e,a,n,"display"))[0]}function St(t,e){for(var n,a=-1,r=-1,o=0,i=t.aoData.length;o<i;o++)n=T(t,o,e,"display")+"",n=n.replace(Ae,""),n=n.replace(/&nbsp;/g," "),n.length>a&&(a=n.length,r=o)
return r}function yt(t){return null===t?"0px":"number"==typeof t?t<0?"0px":t+"px":t.match(/\d$/)?t+"px":t}function Dt(e){var n,r,o,i,l,s,u,c=[],f=e.aoColumns,d=e.aaSortingFixed,h=t.isPlainObject(d),p=[],g=function(e){e.length&&!Array.isArray(e[0])?p.push(e):t.merge(p,e)}
for(Array.isArray(d)&&g(d),h&&d.pre&&g(d.pre),g(e.aaSorting),h&&d.post&&g(d.post),n=0;n<p.length;n++)for(u=p[n][0],i=f[u].aDataSort,r=0,o=i.length;r<o;r++)l=i[r],s=f[l].sType||"string",p[n]._idx===a&&(p[n]._idx=t.inArray(p[n][1],f[l].asSorting)),c.push({src:u,col:l,dir:p[n][1],index:p[n]._idx,type:s,formatter:Zt.ext.type.order[s+"-pre"]})
return c}function _t(t){var e,n,a,r,o,i=[],l=Zt.ext.type.order,s=t.aoData,u=(t.aoColumns,0),c=t.aiDisplayMaster
for(m(t),o=Dt(t),e=0,n=o.length;e<n;e++)r=o[e],r.formatter&&u++,At(t,r.col)
if("ssp"!=Et(t)&&0!==o.length){for(e=0,a=c.length;e<a;e++)i[c[e]]=e
u===o.length?c.sort(function(t,e){var n,a,r,l,u,c=o.length,f=s[t]._aSortData,d=s[e]._aSortData
for(r=0;r<c;r++)if(u=o[r],n=f[u.col],a=d[u.col],0!==(l=n<a?-1:n>a?1:0))return"asc"===u.dir?l:-l
return n=i[t],a=i[e],n<a?-1:n>a?1:0}):c.sort(function(t,e){var n,a,r,u,c,f,d=o.length,h=s[t]._aSortData,p=s[e]._aSortData
for(r=0;r<d;r++)if(c=o[r],n=h[c.col],a=p[c.col],f=l[c.type+"-"+c.dir]||l["string-"+c.dir],0!==(u=f(n,a)))return u
return n=i[t],a=i[e],n<a?-1:n>a?1:0})}t.bSorted=!0}function wt(t){for(var e,n,a=t.aoColumns,r=Dt(t),o=t.oLanguage.oAria,i=0,l=a.length;i<l;i++){var s=a[i],u=s.asSorting,c=s.ariaTitle||s.sTitle.replace(/<.*?>/g,""),f=s.nTh
f.removeAttribute("aria-sort"),s.bSortable?(r.length>0&&r[0].col==i?(f.setAttribute("aria-sort","asc"==r[0].dir?"ascending":"descending"),n=u[r[0].index+1]||u[0]):n=u[0],e=c+("asc"===n?o.sSortAscending:o.sSortDescending)):e=c,f.setAttribute("aria-label",e)}}function Tt(e,n,r,o){var i,l=e.aoColumns[n],s=e.aaSorting,u=l.asSorting,c=function(e,n){var r=e._idx
return r===a&&(r=t.inArray(e[1],u)),r+1<u.length?r+1:n?null:0}
if("number"==typeof s[0]&&(s=e.aaSorting=[s]),r&&e.oFeatures.bSortMulti){var f=t.inArray(n,ce(s,"0"));-1!==f?(i=c(s[f],!0),null===i&&1===s.length&&(i=0),null===i?s.splice(f,1):(s[f][1]=u[i],s[f]._idx=i)):(s.push([n,u[0],0]),s[s.length-1]._idx=0)}else s.length&&s[0][0]==n?(i=c(s[0]),s.length=1,s[0][1]=u[i],s[0]._idx=i):(s.length=0,s.push([n,u[0]]),s[0]._idx=0)
k(e),"function"==typeof o&&o(e)}function Ct(t,e,n,a){var r=t.aoColumns[n]
Nt(e,{},function(e){!1!==r.bSortable&&(t.oFeatures.bProcessing?(dt(t,!0),setTimeout(function(){Tt(t,n,e.shiftKey,a),"ssp"!==Et(t)&&dt(t,!1)},0)):Tt(t,n,e.shiftKey,a))})}function xt(e){var n,a,r,o=e.aLastSort,i=e.oClasses.sSortColumn,l=Dt(e),s=e.oFeatures
if(s.bSort&&s.bSortClasses){for(n=0,a=o.length;n<a;n++)r=o[n].src,t(ce(e.aoData,"anCells",r)).removeClass(i+(n<2?n+1:3))
for(n=0,a=l.length;n<a;n++)r=l[n].src,t(ce(e.aoData,"anCells",r)).addClass(i+(n<2?n+1:3))}e.aLastSort=l}function At(t,e){var n,a=t.aoColumns[e],r=Zt.ext.order[a.sSortDataType]
r&&(n=r.call(t.oInstance,t,e,g(t,e)))
for(var o,i,l=Zt.ext.type.order[a.sType+"-pre"],s=0,u=t.aoData.length;s<u;s++)o=t.aoData[s],o._aSortData||(o._aSortData=[]),o._aSortData[e]&&!r||(i=r?n[s]:T(t,s,e,"sort"),o._aSortData[e]=l?l(i):i)}function It(e){if(!e._bLoadingState){var n={time:+new Date,start:e._iDisplayStart,length:e._iDisplayLength,order:t.extend(!0,[],e.aaSorting),search:tt(e.oPreviousSearch),columns:t.map(e.aoColumns,function(t,n){return{visible:t.bVisible,search:tt(e.aoPreSearchCols[n])}})}
e.oSavedState=n,kt(e,"aoStateSaveParams","stateSaveParams",[e,n]),e.oFeatures.bStateSave&&!e.bDestroying&&e.fnStateSaveCallback.call(e.oInstance,e,n)}}function Ft(t,e,n){if(!t.oFeatures.bStateSave)return void n()
var r=function(e){Lt(t,e,n)},o=t.fnStateLoadCallback.call(t.oInstance,t,r)
return o!==a&&Lt(t,o,n),!0}function Lt(e,n,r){var o,i,l=e.aoColumns
e._bLoadingState=!0
var s=e._bInitComplete?new Zt.Api(e):null
if(!n||!n.time)return e._bLoadingState=!1,void r()
var u=kt(e,"aoStateLoadParams","stateLoadParams",[e,n])
if(-1!==t.inArray(!1,u))return e._bLoadingState=!1,void r()
var c=e.iStateDuration
if(c>0&&n.time<+new Date-1e3*c)return e._bLoadingState=!1,void r()
if(n.columns&&l.length!==n.columns.length)return e._bLoadingState=!1,void r()
if(e.oLoadedState=t.extend(!0,{},n),n.length!==a&&(s?s.page.len(n.length):e._iDisplayLength=n.length),n.start!==a&&(null===s?(e._iDisplayStart=n.start,e.iInitDisplayStart=n.start):ct(e,n.start/e._iDisplayLength)),n.order!==a&&(e.aaSorting=[],t.each(n.order,function(t,n){e.aaSorting.push(n[0]>=l.length?[0,n[1]]:n)})),n.search!==a&&t.extend(e.oPreviousSearch,et(n.search)),n.columns){for(o=0,i=n.columns.length;o<i;o++){var f=n.columns[o]
f.visible!==a&&(s?s.column(o).visible(f.visible,!1):l[o].bVisible=f.visible),f.search!==a&&t.extend(e.aoPreSearchCols[o],et(f.search))}s&&s.columns.adjust()}e._bLoadingState=!1,kt(e,"aoStateLoaded","stateLoaded",[e,n]),r()}function Rt(e){var n=Zt.settings,a=t.inArray(e,ce(n,"nTable"))
return-1!==a?n[a]:null}function Pt(t,n,a,r){if(a="DataTables warning: "+(t?"table id="+t.sTableId+" - ":"")+a,r&&(a+=". For more information about this error, please see http://datatables.net/tn/"+r),n)e.console&&console.log&&console.log(a)
else{var o=Zt.ext,i=o.sErrMode||o.errMode
if(t&&kt(t,null,"error",[t,r,a]),"alert"==i)alert(a)
else{if("throw"==i)throw new Error(a)
"function"==typeof i&&i(t,r,a)}}}function jt(e,n,r,o){if(Array.isArray(r))return void t.each(r,function(t,a){Array.isArray(a)?jt(e,n,a[0],a[1]):jt(e,n,a)})
o===a&&(o=r),n[r]!==a&&(e[o]=n[r])}function Ht(e,n,a){var r
for(var o in n)n.hasOwnProperty(o)&&(r=n[o],t.isPlainObject(r)?(t.isPlainObject(e[o])||(e[o]={}),t.extend(!0,e[o],r)):a&&"data"!==o&&"aaData"!==o&&Array.isArray(r)?e[o]=r.slice():e[o]=r)
return e}function Nt(e,n,a){t(e).on("click.DT",n,function(n){t(e).trigger("blur"),a(n)}).on("keypress.DT",n,function(t){13===t.which&&(t.preventDefault(),a(t))}).on("selectstart.DT",function(){return!1})}function Ot(t,e,n,a){n&&t[e].push({fn:n,sName:a})}function kt(e,n,a,r){var o=[]
if(n&&(o=t.map(e[n].slice().reverse(),function(t,n){return t.fn.apply(e.oInstance,r)})),null!==a){var i=t.Event(a+".dt"),l=t(e.nTable)
l.trigger(i,r),0===l.parents("body").length&&t("body").trigger(i,r),o.push(i.result)}return o}function Mt(t){var e=t._iDisplayStart,n=t.fnDisplayEnd(),a=t._iDisplayLength
e>=n&&(e=n-a),e-=e%a,(-1===a||e<0)&&(e=0),t._iDisplayStart=e}function Wt(e,n){var a=e.renderer,r=Zt.ext.renderer[n]
return t.isPlainObject(a)&&a[n]?r[a[n]]||r._:"string"==typeof a?r[a]||r._:r._}function Et(t){return t.oFeatures.bServerSide?"ssp":t.ajax||t.sAjaxSource?"ajax":"dom"}function Bt(t,e){var n=[],a=ze.numbers_length,r=Math.floor(a/2)
return e<=a?n=de(0,e):t<=r?(n=de(0,a-2),n.push("ellipsis"),n.push(e-1)):t>=e-1-r?(n=de(e-(a-2),e),n.splice(0,0,"ellipsis"),n.splice(0,0,0)):(n=de(t-r+2,t+r-1),n.push("ellipsis"),n.push(e-1),n.splice(0,0,"ellipsis"),n.splice(0,0,0)),n.DT_el="span",n}function Ut(e){t.each({num:function(t){return Ye(t,e)},"num-fmt":function(t){return Ye(t,e,ae)},"html-num":function(t){return Ye(t,e,te)},"html-num-fmt":function(t){return Ye(t,e,te,ae)}},function(t,n){$t.type.order[t+e+"-pre"]=n,t.match(/^html\-/)&&($t.type.search[t+e]=$t.type.search.html)})}function Vt(t,n,a,r,o){return e.moment?t[n](o):e.luxon?t[a](o):r?t[r](o):t}function Xt(t,n,a){var r
if(e.moment){if(r=e.moment.utc(t,n,a,!0),!r.isValid())return null}else if(e.luxon){if(r=n&&"string"==typeof t?e.luxon.DateTime.fromFormat(t,n):e.luxon.DateTime.fromISO(t),!r.isValid)return null
r.setLocale(a)}else n?(Qe||alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"),Qe=!0):r=new Date(t)
return r}function Jt(t){return function(e,n,r,o){0===arguments.length?(r="en",n=null,e=null):1===arguments.length?(r="en",n=e,e=null):2===arguments.length&&(r=n,n=e,e=null)
var i="datetime-"+n
return Zt.ext.type.order[i]||(Zt.ext.type.detect.unshift(function(t){return t===i&&i}),Zt.ext.type.order[i+"-asc"]=function(t,e){var n=t.valueOf(),a=e.valueOf()
return n===a?0:n<a?-1:1},Zt.ext.type.order[i+"-desc"]=function(t,e){var n=t.valueOf(),a=e.valueOf()
return n===a?0:n>a?-1:1}),function(l,s){if(null===l||l===a)if("--now"===o){var u=new Date
l=new Date(Date.UTC(u.getFullYear(),u.getMonth(),u.getDate(),u.getHours(),u.getMinutes(),u.getSeconds()))}else l=""
if("type"===s)return i
if(""===l)return"sort"!==s?"":Xt("0000-01-01 00:00:00",null,r)
if(null!==n&&e===n&&"sort"!==s&&"type"!==s&&!(l instanceof Date))return l
var c=Xt(l,e,r)
if(null===c)return l
if("sort"===s)return c
var f=null===n?Vt(c,"toDate","toJSDate","")[t]():Vt(c,"format","toFormat","toISOString",n)
return"display"===s?Ze(f):f}}}function qt(t){return function(){var e=[Rt(this[Zt.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments))
return Zt.ext.internal[t].apply(this,e)}}var $t,Gt,zt,Yt,Zt=function(e,n){if(Zt.factory(e,n))return Zt
if(this instanceof Zt)return t(e).DataTable(n)
n=e,this.$=function(t,e){return this.api(!0).$(t,e)},this._=function(t,e){return this.api(!0).rows(t,e).data()},this.api=function(t){return new Gt(t?Rt(this[$t.iApiIndex]):this)},this.fnAddData=function(e,n){var r=this.api(!0),o=Array.isArray(e)&&(Array.isArray(e[0])||t.isPlainObject(e[0]))?r.rows.add(e):r.row.add(e)
return(n===a||n)&&r.draw(),o.flatten().toArray()},this.fnAdjustColumnSizing=function(t){var e=this.api(!0).columns.adjust(),n=e.settings()[0],r=n.oScroll
t===a||t?e.draw(!1):""===r.sX&&""===r.sY||pt(n)},this.fnClearTable=function(t){var e=this.api(!0).clear();(t===a||t)&&e.draw()},this.fnClose=function(t){this.api(!0).row(t).child.hide()},this.fnDeleteRow=function(t,e,n){var r=this.api(!0),o=r.rows(t),i=o.settings()[0],l=i.aoData[o[0][0]]
return o.remove(),e&&e.call(this,i,l),(n===a||n)&&r.draw(),l},this.fnDestroy=function(t){this.api(!0).destroy(t)},this.fnDraw=function(t){this.api(!0).draw(t)},this.fnFilter=function(t,e,n,r,o,i){var l=this.api(!0)
null===e||e===a?l.search(t,n,r,i):l.column(e).search(t,n,r,i),l.draw()},this.fnGetData=function(t,e){var n=this.api(!0)
if(t!==a){var r=t.nodeName?t.nodeName.toLowerCase():""
return e!==a||"td"==r||"th"==r?n.cell(t,e).data():n.row(t).data()||null}return n.data().toArray()},this.fnGetNodes=function(t){var e=this.api(!0)
return t!==a?e.row(t).node():e.rows().nodes().flatten().toArray()},this.fnGetPosition=function(t){var e=this.api(!0),n=t.nodeName.toUpperCase()
if("TR"==n)return e.row(t).index()
if("TD"==n||"TH"==n){var a=e.cell(t).index()
return[a.row,a.columnVisible,a.column]}return null},this.fnIsOpen=function(t){return this.api(!0).row(t).child.isShown()},this.fnOpen=function(t,e,n){return this.api(!0).row(t).child(e,n).show().child()[0]},this.fnPageChange=function(t,e){var n=this.api(!0).page(t);(e===a||e)&&n.draw(!1)},this.fnSetColumnVis=function(t,e,n){var r=this.api(!0).column(t).visible(e);(n===a||n)&&r.columns.adjust().draw()},this.fnSettings=function(){return Rt(this[$t.iApiIndex])},this.fnSort=function(t){this.api(!0).order(t).draw()},this.fnSortListener=function(t,e,n){this.api(!0).order.listener(t,e,n)},this.fnUpdate=function(t,e,n,r,o){var i=this.api(!0)
return n===a||null===n?i.row(e).data(t):i.cell(e,n).data(t),(o===a||o)&&i.columns.adjust(),(r===a||r)&&i.draw(),0},this.fnVersionCheck=$t.fnVersionCheck
var r=this,c=n===a,h=this.length
c&&(n={}),this.oApi=this.internal=$t.internal
for(var p in Zt.ext.internal)p&&(this[p]=qt(p))
return this.each(function(){var e,p={},g=h>1?Ht(p,n,!0):n,b=0,v=this.getAttribute("id"),m=!1,_=Zt.defaults,w=t(this)
if("table"!=this.nodeName.toLowerCase())return void Pt(null,0,"Non-table node initialisation ("+this.nodeName+")",2)
l(_),s(_.column),o(_,_,!0),o(_.column,_.column,!0),o(_,t.extend(g,w.data()),!0)
var T=Zt.settings
for(b=0,e=T.length;b<e;b++){var C=T[b]
if(C.nTable==this||C.nTHead&&C.nTHead.parentNode==this||C.nTFoot&&C.nTFoot.parentNode==this){var x=g.bRetrieve!==a?g.bRetrieve:_.bRetrieve,A=g.bDestroy!==a?g.bDestroy:_.bDestroy
if(c||x)return C.oInstance
if(A){C.oInstance.fnDestroy()
break}return void Pt(C,0,"Cannot reinitialise DataTable",3)}if(C.sTableId==this.id){T.splice(b,1)
break}}null!==v&&""!==v||(v="DataTables_Table_"+Zt.ext._unique++,this.id=v)
var I=t.extend(!0,{},Zt.models.oSettings,{sDestroyWidth:w[0].style.width,sInstance:v,sTableId:v})
I.nTable=this,I.oApi=r.internal,I.oInit=g,T.push(I),I.oInstance=1===r.length?r:w.dataTable(),l(g),i(g.oLanguage),g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=Array.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]),g=Ht(t.extend(!0,{},_),g),jt(I.oFeatures,g,["bPaginate","bLengthChange","bFilter","bSort","bSortMulti","bInfo","bProcessing","bAutoWidth","bSortClasses","bServerSide","bDeferRender"]),jt(I,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]),jt(I.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]),jt(I.oLanguage,g,"fnInfoCallback"),Ot(I,"aoDrawCallback",g.fnDrawCallback,"user"),Ot(I,"aoServerParams",g.fnServerParams,"user"),Ot(I,"aoStateSaveParams",g.fnStateSaveParams,"user"),Ot(I,"aoStateLoadParams",g.fnStateLoadParams,"user"),Ot(I,"aoStateLoaded",g.fnStateLoaded,"user"),Ot(I,"aoRowCallback",g.fnRowCallback,"user"),Ot(I,"aoRowCreatedCallback",g.fnCreatedRow,"user"),Ot(I,"aoHeaderCallback",g.fnHeaderCallback,"user"),Ot(I,"aoFooterCallback",g.fnFooterCallback,"user"),Ot(I,"aoInitComplete",g.fnInitComplete,"user"),Ot(I,"aoPreDrawCallback",g.fnPreDrawCallback,"user"),I.rowIdFn=_e(g.rowId),u(I)
var F=I.oClasses
if(t.extend(F,Zt.ext.classes,g.oClasses),w.addClass(F.sTable),I.iInitDisplayStart===a&&(I.iInitDisplayStart=g.iDisplayStart,I._iDisplayStart=g.iDisplayStart),null!==g.iDeferLoading){I.bDeferLoading=!0
var L=Array.isArray(g.iDeferLoading)
I._iRecordsDisplay=L?g.iDeferLoading[0]:g.iDeferLoading,I._iRecordsTotal=L?g.iDeferLoading[1]:g.iDeferLoading}var R=I.oLanguage
t.extend(!0,R,g.oLanguage),R.sUrl?(t.ajax({dataType:"json",url:R.sUrl,success:function(e){o(_.oLanguage,e),i(e),t.extend(!0,R,e,I.oInit.oLanguage),kt(I,null,"i18n",[I]),ot(I)},error:function(){ot(I)}}),m=!0):kt(I,null,"i18n",[I]),null===g.asStripeClasses&&(I.asStripeClasses=[F.sStripeOdd,F.sStripeEven])
var P=I.asStripeClasses,j=w.children("tbody").find("tr").eq(0);-1!==t.inArray(!0,t.map(P,function(t,e){return j.hasClass(t)}))&&(t("tbody tr",this).removeClass(P.join(" ")),I.asDestroyStripes=P.slice())
var H,N=[],O=this.getElementsByTagName("thead")
if(0!==O.length&&(W(I.aoHeader,O[0]),N=E(I)),null===g.aoColumns)for(H=[],b=0,e=N.length;b<e;b++)H.push(null)
else H=g.aoColumns
for(b=0,e=H.length;b<e;b++)f(I,N?N[b]:null)
if(S(I,g.aoColumnDefs,H,function(t,e){d(I,t,e)}),j.length){var k=function(t,e){return null!==t.getAttribute("data-"+e)?e:null}
t(j[0]).children("th, td").each(function(t,e){var n=I.aoColumns[t]
if(n||Pt(I,0,"Incorrect column count",18),n.mData===t){var r=k(e,"sort")||k(e,"order"),o=k(e,"filter")||k(e,"search")
null===r&&null===o||(n.mData={_:t+".display",sort:null!==r?t+".@data-"+r:a,type:null!==r?t+".@data-"+r:a,filter:null!==o?t+".@data-"+o:a},n._isArrayHost=!0,d(I,t))}})}var M=I.oFeatures,B=function(){if(g.aaSorting===a){var n=I.aaSorting
for(b=0,e=n.length;b<e;b++)n[b][1]=I.aoColumns[b].asSorting[0]}xt(I),M.bSort&&Ot(I,"aoDrawCallback",function(){if(I.bSorted){var e=Dt(I),n={}
t.each(e,function(t,e){n[e.src]=e.dir}),kt(I,null,"order",[I,e,n]),wt(I)}}),Ot(I,"aoDrawCallback",function(){(I.bSorted||"ssp"===Et(I)||M.bDeferRender)&&xt(I)},"sc")
var r=w.children("caption").each(function(){this._captionSide=t(this).css("caption-side")}),o=w.children("thead")
0===o.length&&(o=t("<thead/>").appendTo(w)),I.nTHead=o[0]
var i=w.children("tbody")
0===i.length&&(i=t("<tbody/>").insertAfter(o)),I.nTBody=i[0]
var l=w.children("tfoot")
if(0===l.length&&r.length>0&&(""!==I.oScroll.sX||""!==I.oScroll.sY)&&(l=t("<tfoot/>").appendTo(w)),0===l.length||0===l.children().length?w.addClass(F.sNoFooter):l.length>0&&(I.nTFoot=l[0],W(I.aoFooter,I.nTFoot)),g.aaData)for(b=0;b<g.aaData.length;b++)y(I,g.aaData[b])
else(I.bDeferLoading||"dom"==Et(I))&&D(I,t(I.nTBody).children("tr"))
I.aiDisplay=I.aiDisplayMaster.slice(),I.bInitialised=!0,!1===m&&ot(I)}
Ot(I,"aoDrawCallback",It,"state_save"),g.bStateSave?(M.bStateSave=!0,Ft(I,g,B)):B()}),r=null,this},Qt={},Kt=/[\r\n\u2028]/g,te=/<.*?>/g,ee=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,ne=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^","-"].join("|\\")+")","g"),ae=/['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,re=function(t){return!t||!0===t||"-"===t},oe=function(t){var e=parseInt(t,10)
return!isNaN(e)&&isFinite(t)?e:null},ie=function(t,e){return Qt[e]||(Qt[e]=new RegExp(Te(e),"g")),"string"==typeof t&&"."!==e?t.replace(/\./g,"").replace(Qt[e],"."):t},le=function(t,e,n){var a=typeof t,r="string"===a
return"number"===a||"bigint"===a||(!!re(t)||(e&&r&&(t=ie(t,e)),n&&r&&(t=t.replace(ae,"")),!isNaN(parseFloat(t))&&isFinite(t)))},se=function(t){return re(t)||"string"==typeof t},ue=function(t,e,n){return!!re(t)||(se(t)?!!le(pe(t),e,n)||null:null)},ce=function(t,e,n){var r=[],o=0,i=t.length
if(n!==a)for(;o<i;o++)t[o]&&t[o][e]&&r.push(t[o][e][n])
else for(;o<i;o++)t[o]&&r.push(t[o][e])
return r},fe=function(t,e,n,r){var o=[],i=0,l=e.length
if(r!==a)for(;i<l;i++)t[e[i]][n]&&o.push(t[e[i]][n][r])
else for(;i<l;i++)o.push(t[e[i]][n])
return o},de=function(t,e){var n,r=[]
e===a?(e=0,n=t):(n=e,e=t)
for(var o=e;o<n;o++)r.push(o)
return r},he=function(t){for(var e=[],n=0,a=t.length;n<a;n++)t[n]&&e.push(t[n])
return e},pe=function(t){return t.replace(te,"").replace(/<script/i,"")},ge=function(t){if(t.length<2)return!0
for(var e=t.slice().sort(),n=e[0],a=1,r=e.length;a<r;a++){if(e[a]===n)return!1
n=e[a]}return!0},be=function(t){if(ge(t))return t.slice()
var e,n,a,r=[],o=t.length,i=0
t:for(n=0;n<o;n++){for(e=t[n],a=0;a<i;a++)if(r[a]===e)continue t
r.push(e),i++}return r},ve=function(t,e){if(Array.isArray(e))for(var n=0;n<e.length;n++)ve(t,e[n])
else t.push(e)
return t},me=function(t,e){return e===a&&(e=0),-1!==this.indexOf(t,e)}
Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),Array.prototype.includes||(Array.prototype.includes=me),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),String.prototype.includes||(String.prototype.includes=me),Zt.util={throttle:function(t,e){var n,r,o=e!==a?e:200
return function(){var e=this,i=+new Date,l=arguments
n&&i<n+o?(clearTimeout(r),r=setTimeout(function(){n=a,t.apply(e,l)},o)):(n=i,t.apply(e,l))}},escapeRegex:function(t){return t.replace(ne,"\\$1")},set:function(e){if(t.isPlainObject(e))return Zt.util.set(e._)
if(null===e)return function(){}
if("function"==typeof e)return function(t,n,a){e(t,"set",n,a)}
if("string"!=typeof e||-1===e.indexOf(".")&&-1===e.indexOf("[")&&-1===e.indexOf("("))return function(t,n){t[e]=n}
var n=function(t,e,r){for(var o,i,l,s,u,c=x(r),f=c[c.length-1],d=0,h=c.length-1;d<h;d++){if("__proto__"===c[d]||"constructor"===c[d])throw new Error("Cannot set prototype values")
if(i=c[d].match(ye),l=c[d].match(De),i){if(c[d]=c[d].replace(ye,""),t[c[d]]=[],o=c.slice(),o.splice(0,d+1),u=o.join("."),Array.isArray(e))for(var p=0,g=e.length;p<g;p++)s={},n(s,e[p],u),t[c[d]].push(s)
else t[c[d]]=e
return}l&&(c[d]=c[d].replace(De,""),t=t[c[d]](e)),null!==t[c[d]]&&t[c[d]]!==a||(t[c[d]]={}),t=t[c[d]]}f.match(De)?t=t[f.replace(De,"")](e):t[f.replace(ye,"")]=e}
return function(t,a){return n(t,a,e)}},get:function(e){if(t.isPlainObject(e)){var n={}
return t.each(e,function(t,e){e&&(n[t]=Zt.util.get(e))}),function(t,e,r,o){var i=n[e]||n._
return i!==a?i(t,e,r,o):t}}if(null===e)return function(t){return t}
if("function"==typeof e)return function(t,n,a,r){return e(t,n,a,r)}
if("string"!=typeof e||-1===e.indexOf(".")&&-1===e.indexOf("[")&&-1===e.indexOf("("))return function(t,n){return t[e]}
var r=function(t,e,n){var o,i,l,s
if(""!==n)for(var u=x(n),c=0,f=u.length;c<f;c++){if(o=u[c].match(ye),i=u[c].match(De),o){if(u[c]=u[c].replace(ye,""),""!==u[c]&&(t=t[u[c]]),l=[],u.splice(0,c+1),s=u.join("."),Array.isArray(t))for(var d=0,h=t.length;d<h;d++)l.push(r(t[d],e,s))
var p=o[0].substring(1,o[0].length-1)
t=""===p?l:l.join(p)
break}if(i)u[c]=u[c].replace(De,""),t=t[u[c]]()
else{if(null===t||null===t[u[c]])return null
if(t===a||t[u[c]]===a)return a
t=t[u[c]]}}return t}
return function(t,n){return r(t,n,e)}}}
var Se=function(t,e,n){t[e]!==a&&(t[n]=t[e])},ye=/\[.*?\]$/,De=/\(\)$/,_e=Zt.util.get,we=Zt.util.set,Te=Zt.util.escapeRegex,Ce=t("<div>")[0],xe=Ce.textContent!==a,Ae=/<.*?>/g,Ie=Zt.util.throttle,Fe=[],Le=Array.prototype,Re=function(e){var n,a,r=Zt.settings,o=t.map(r,function(t,e){return t.nTable})
return e?e.nTable&&e.oApi?[e]:e.nodeName&&"table"===e.nodeName.toLowerCase()?(n=t.inArray(e,o),-1!==n?[r[n]]:null):e&&"function"==typeof e.settings?e.settings().toArray():("string"==typeof e?a=t(e):e instanceof t&&(a=e),a?a.map(function(e){return n=t.inArray(this,o),-1!==n?r[n]:null}).toArray():void 0):[]}
Gt=function(e,n){if(!(this instanceof Gt))return new Gt(e,n)
var a=[],r=function(t){var e=Re(t)
e&&a.push.apply(a,e)}
if(Array.isArray(e))for(var o=0,i=e.length;o<i;o++)r(e[o])
else r(e)
this.context=be(a),n&&t.merge(this,n),this.selector={rows:null,cols:null,opts:null},Gt.extend(this,this,Fe)},Zt.Api=Gt,t.extend(Gt.prototype,{any:function(){return 0!==this.count()},concat:Le.concat,context:[],count:function(){return this.flatten().length},each:function(t){for(var e=0,n=this.length;e<n;e++)t.call(this,this[e],e,this)
return this},eq:function(t){var e=this.context
return e.length>t?new Gt(e[t],this[t]):null},filter:function(t){var e=[]
if(Le.filter)e=Le.filter.call(this,t,this)
else for(var n=0,a=this.length;n<a;n++)t.call(this,this[n],n,this)&&e.push(this[n])
return new Gt(this.context,e)},flatten:function(){var t=[]
return new Gt(this.context,t.concat.apply(t,this.toArray()))},join:Le.join,indexOf:Le.indexOf||function(t,e){for(var n=e||0,a=this.length;n<a;n++)if(this[n]===t)return n
return-1},iterator:function(t,e,n,r){var o,i,l,s,u,c,f,d,h=[],p=this.context,g=this.selector
for("string"==typeof t&&(r=n,n=e,e=t,t=!1),i=0,l=p.length;i<l;i++){var b=new Gt(p[i])
if("table"===e)(o=n.call(b,p[i],i))!==a&&h.push(o)
else if("columns"===e||"rows"===e)(o=n.call(b,p[i],this[i],i))!==a&&h.push(o)
else if("column"===e||"column-rows"===e||"row"===e||"cell"===e)for(f=this[i],"column-rows"===e&&(c=ke(p[i],g.opts)),s=0,u=f.length;s<u;s++)d=f[s],(o="cell"===e?n.call(b,p[i],d.row,d.column,i,s):n.call(b,p[i],d,i,s,c))!==a&&h.push(o)}if(h.length||r){var v=new Gt(p,t?h.concat.apply([],h):h),m=v.selector
return m.rows=g.rows,m.cols=g.cols,m.opts=g.opts,v}return this},lastIndexOf:Le.lastIndexOf||function(t,e){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(t){var e=[]
if(Le.map)e=Le.map.call(this,t,this)
else for(var n=0,a=this.length;n<a;n++)e.push(t.call(this,this[n],n))
return new Gt(this.context,e)},pluck:function(t){var e=Zt.util.get(t)
return this.map(function(t){return e(t)})},pop:Le.pop,push:Le.push,reduce:Le.reduce||function(t,e){return c(this,t,e,0,this.length,1)},reduceRight:Le.reduceRight||function(t,e){return c(this,t,e,this.length-1,-1,-1)},reverse:Le.reverse,selector:null,shift:Le.shift,slice:function(){return new Gt(this.context,this)},sort:Le.sort,splice:Le.splice,toArray:function(){return Le.slice.call(this)},to$:function(){return t(this)},toJQuery:function(){return t(this)},unique:function(){return new Gt(this.context,be(this))},unshift:Le.unshift}),Gt.extend=function(t,e,n){if(n.length&&e&&(e instanceof Gt||e.__dt_wrapper)){var a,r,o
for(a=0,r=n.length;a<r;a++)o=n[a],e[o.name]="function"===o.type?function(t,e,n){return function(){var a=e.apply(t,arguments)
return Gt.extend(a,a,n.methodExt),a}}(t,o.val,o):"object"===o.type?{}:o.val,e[o.name].__dt_wrapper=!0,Gt.extend(t,e[o.name],o.propExt)}},Gt.register=zt=function(e,n){if(Array.isArray(e))for(var a=0,r=e.length;a<r;a++)Gt.register(e[a],n)
else{var o,i,l,s,u=e.split("."),c=Fe
for(o=0,i=u.length;o<i;o++){s=-1!==u[o].indexOf("()"),l=s?u[o].replace("()",""):u[o]
var f=function(t,e){for(var n=0,a=t.length;n<a;n++)if(t[n].name===e)return t[n]
return null}(c,l)
f||(f={name:l,val:{},methodExt:[],propExt:[],type:"object"},c.push(f)),o===i-1?(f.val=n,f.type="function"==typeof n?"function":t.isPlainObject(n)?"object":"other"):c=s?f.methodExt:f.propExt}}},Gt.registerPlural=Yt=function(t,e,n){Gt.register(t,n),Gt.register(e,function(){var t=n.apply(this,arguments)
return t===this?this:t instanceof Gt?t.length?Array.isArray(t[0])?new Gt(t.context,t[0]):t[0]:a:t})}
var Pe=function(e,n){if(Array.isArray(e))return t.map(e,function(t){return Pe(t,n)})
if("number"==typeof e)return[n[e]]
var a=t.map(n,function(t,e){return t.nTable})
return t(a).filter(e).map(function(e){var r=t.inArray(this,a)
return n[r]}).toArray()}
zt("tables()",function(t){return t!==a&&null!==t?new Gt(Pe(t,this.context)):this}),zt("table()",function(t){var e=this.tables(t),n=e.context
return n.length?new Gt(n[0]):e}),Yt("tables().nodes()","table().node()",function(){return this.iterator("table",function(t){return t.nTable},1)}),Yt("tables().body()","table().body()",function(){return this.iterator("table",function(t){return t.nTBody},1)}),Yt("tables().header()","table().header()",function(){return this.iterator("table",function(t){return t.nTHead},1)}),Yt("tables().footer()","table().footer()",function(){return this.iterator("table",function(t){return t.nTFoot},1)}),Yt("tables().containers()","table().container()",function(){return this.iterator("table",function(t){return t.nTableWrapper},1)}),zt("draw()",function(t){return this.iterator("table",function(e){"page"===t?O(e):("string"==typeof t&&(t="full-hold"!==t),k(e,!1===t))})}),zt("page()",function(t){return t===a?this.page.info().page:this.iterator("table",function(e){ct(e,t)})}),zt("page.info()",function(t){if(0===this.context.length)return a
var e=this.context[0],n=e._iDisplayStart,r=e.oFeatures.bPaginate?e._iDisplayLength:-1,o=e.fnRecordsDisplay(),i=-1===r
return{page:i?0:Math.floor(n/r),pages:i?1:Math.ceil(o/r),start:n,end:e.fnDisplayEnd(),length:r,recordsTotal:e.fnRecordsTotal(),recordsDisplay:o,serverSide:"ssp"===Et(e)}}),zt("page.len()",function(t){return t===a?0!==this.context.length?this.context[0]._iDisplayLength:a:this.iterator("table",function(e){lt(e,t)})})
var je=function(t,e,n){if(n){var a=new Gt(t)
a.one("draw",function(){n(a.ajax.json())})}if("ssp"==Et(t))k(t,e)
else{dt(t,!0)
var r=t.jqXHR
r&&4!==r.readyState&&r.abort(),U(t,[],function(n){I(t)
for(var a=q(t,n),r=0,o=a.length;r<o;r++)y(t,a[r])
k(t,e),dt(t,!1)})}}
zt("ajax.json()",function(){var t=this.context
if(t.length>0)return t[0].json}),zt("ajax.params()",function(){var t=this.context
if(t.length>0)return t[0].oAjaxData}),zt("ajax.reload()",function(t,e){return this.iterator("table",function(n){je(n,!1===e,t)})}),zt("ajax.url()",function(e){var n=this.context
return e===a?0===n.length?a:(n=n[0],n.ajax?t.isPlainObject(n.ajax)?n.ajax.url:n.ajax:n.sAjaxSource):this.iterator("table",function(n){t.isPlainObject(n.ajax)?n.ajax.url=e:n.ajax=e})}),zt("ajax.url().load()",function(t,e){return this.iterator("table",function(n){je(n,!1===e,t)})})
var He=function(t,e,n,r,o){var i,l,s,u,c,f,d=[],h=typeof e
for(e&&"string"!==h&&"function"!==h&&e.length!==a||(e=[e]),s=0,u=e.length;s<u;s++)for(l=e[s]&&e[s].split&&!e[s].match(/[\[\(:]/)?e[s].split(","):[e[s]],c=0,f=l.length;c<f;c++)(i=n("string"==typeof l[c]?l[c].trim():l[c]))&&i.length&&(d=d.concat(i))
var p=$t.selector[t]
if(p.length)for(s=0,u=p.length;s<u;s++)d=p[s](r,o,d)
return be(d)},Ne=function(e){return e||(e={}),e.filter&&e.search===a&&(e.search=e.filter),t.extend({search:"none",order:"current",page:"all"},e)},Oe=function(t){for(var e=0,n=t.length;e<n;e++)if(t[e].length>0)return t[0]=t[e],t[0].length=1,t.length=1,t.context=[t.context[e]],t
return t.length=0,t},ke=function(e,n){var a,r,o,i=[],l=e.aiDisplay,s=e.aiDisplayMaster,u=n.search,c=n.order,f=n.page
if("ssp"==Et(e))return"removed"===u?[]:de(0,s.length)
if("current"==f)for(a=e._iDisplayStart,r=e.fnDisplayEnd();a<r;a++)i.push(l[a])
else if("current"==c||"applied"==c){if("none"==u)i=s.slice()
else if("applied"==u)i=l.slice()
else if("removed"==u){for(var d={},a=0,r=l.length;a<r;a++)d[l[a]]=null
i=t.map(s,function(t){return d.hasOwnProperty(t)?null:t})}}else if("index"==c||"original"==c)for(a=0,r=e.aoData.length;a<r;a++)"none"==u?i.push(a):(-1===(o=t.inArray(a,l))&&"removed"==u||o>=0&&"applied"==u)&&i.push(a)
return i},Me=function(e,n,r){var o
return He("row",n,function(n){var i=oe(n),l=e.aoData
if(null!==i&&!r)return[i]
if(o||(o=ke(e,r)),null!==i&&-1!==t.inArray(i,o))return[i]
if(null===n||n===a||""===n)return o
if("function"==typeof n)return t.map(o,function(t){var e=l[t]
return n(t,e._aData,e.nTr)?t:null})
if(n.nodeName){var s=n._DT_RowIndex,u=n._DT_CellIndex
if(s!==a)return l[s]&&l[s].nTr===n?[s]:[]
if(u)return l[u.row]&&l[u.row].nTr===n.parentNode?[u.row]:[]
var c=t(n).closest("*[data-dt-row]")
return c.length?[c.data("dt-row")]:[]}if("string"==typeof n&&"#"===n.charAt(0)){var f=e.aIds[n.replace(/^#/,"")]
if(f!==a)return[f.idx]}var d=he(fe(e.aoData,o,"nTr"))
return t(d).filter(n).map(function(){return this._DT_RowIndex}).toArray()},e,r)}
zt("rows()",function(e,n){e===a?e="":t.isPlainObject(e)&&(n=e,e=""),n=Ne(n)
var r=this.iterator("table",function(t){return Me(t,e,n)},1)
return r.selector.rows=e,r.selector.opts=n,r}),zt("rows().nodes()",function(){return this.iterator("row",function(t,e){return t.aoData[e].nTr||a},1)}),zt("rows().data()",function(){return this.iterator(!0,"rows",function(t,e){return fe(t.aoData,e,"_aData")},1)}),Yt("rows().cache()","row().cache()",function(t){return this.iterator("row",function(e,n){var a=e.aoData[n]
return"search"===t?a._aFilterData:a._aSortData},1)}),Yt("rows().invalidate()","row().invalidate()",function(t){return this.iterator("row",function(e,n){L(e,n,t)})}),Yt("rows().indexes()","row().index()",function(){return this.iterator("row",function(t,e){return e},1)}),Yt("rows().ids()","row().id()",function(t){for(var e=[],n=this.context,a=0,r=n.length;a<r;a++)for(var o=0,i=this[a].length;o<i;o++){var l=n[a].rowIdFn(n[a].aoData[this[a][o]]._aData)
e.push((!0===t?"#":"")+l)}return new Gt(n,e)}),Yt("rows().remove()","row().remove()",function(){var t=this
return this.iterator("row",function(e,n,r){var o,i,l,s,u,c,f=e.aoData,d=f[n]
for(f.splice(n,1),o=0,i=f.length;o<i;o++)if(u=f[o],c=u.anCells,null!==u.nTr&&(u.nTr._DT_RowIndex=o),null!==c)for(l=0,s=c.length;l<s;l++)c[l]._DT_CellIndex.row=o
F(e.aiDisplayMaster,n),F(e.aiDisplay,n),F(t[r],n,!1),e._iRecordsDisplay>0&&e._iRecordsDisplay--,Mt(e)
var h=e.rowIdFn(d._aData)
h!==a&&delete e.aIds[h]}),this.iterator("table",function(t){for(var e=0,n=t.aoData.length;e<n;e++)t.aoData[e].idx=e}),this}),zt("rows.add()",function(e){var n=this.iterator("table",function(t){var n,a,r,o=[]
for(a=0,r=e.length;a<r;a++)n=e[a],n.nodeName&&"TR"===n.nodeName.toUpperCase()?o.push(D(t,n)[0]):o.push(y(t,n))
return o},1),a=this.rows(-1)
return a.pop(),t.merge(a,n),a}),zt("row()",function(t,e){return Oe(this.rows(t,e))}),zt("row().data()",function(t){var e=this.context
if(t===a)return e.length&&this.length?e[0].aoData[this[0]]._aData:a
var n=e[0].aoData[this[0]]
return n._aData=t,Array.isArray(t)&&n.nTr&&n.nTr.id&&we(e[0].rowId)(t,n.nTr.id),L(e[0],this[0],"data"),this}),zt("row().node()",function(){var t=this.context
return t.length&&this.length?t[0].aoData[this[0]].nTr||null:null}),zt("row.add()",function(e){e instanceof t&&e.length&&(e=e[0])
var n=this.iterator("table",function(t){return e.nodeName&&"TR"===e.nodeName.toUpperCase()?D(t,e)[0]:y(t,e)})
return this.row(n[0])}),t(n).on("plugin-init.dt",function(e,n){var a=new Gt(n)
a.on("stateSaveParams.on-plugin-init",function(t,e,n){for(var a=e.rowIdFn,r=e.aoData,o=[],i=0;i<r.length;i++)r[i]._detailsShow&&o.push("#"+a(r[i]._aData))
n.childRows=o}),a.on("destroy. on-plugin-init",function(){a.off("stateSaveParams.on-plugin-init destroy. on-plugin-init")})
var r=a.state.loaded()
r&&r.childRows&&a.rows(t.map(r.childRows,function(t){return t.replace(/:/g,"\\:")})).every(function(){kt(n,null,"requestChild",[this])})})
var We=function(e,n,a,r){var o=[],i=function(n,a){if(Array.isArray(n)||n instanceof t)for(var r=0,l=n.length;r<l;r++)i(n[r],a)
else if(n.nodeName&&"tr"===n.nodeName.toLowerCase())o.push(n)
else{var s=t("<tr><td></td></tr>").addClass(a)
t("td",s).addClass(a).html(n)[0].colSpan=b(e),o.push(s[0])}}
i(a,r),n._details&&n._details.detach(),n._details=t(o),n._detailsShow&&n._details.insertAfter(n.nTr)},Ee=Zt.util.throttle(function(t){It(t[0])},500),Be=function(e,n){var r=e.context
if(r.length){var o=r[0].aoData[n!==a?n:e[0]]
o&&o._details&&(o._details.remove(),o._detailsShow=a,o._details=a,t(o.nTr).removeClass("dt-hasChild"),Ee(r))}},Ue=function(e,n){var a=e.context
if(a.length&&e.length){var r=a[0].aoData[e[0]]
r._details&&(r._detailsShow=n,n?(r._details.insertAfter(r.nTr),t(r.nTr).addClass("dt-hasChild")):(r._details.detach(),t(r.nTr).removeClass("dt-hasChild")),kt(a[0],null,"childRow",[n,e.row(e[0])]),Ve(a[0]),Ee(a))}},Ve=function(t){var e=new Gt(t),n=t.aoData
e.off("draw.dt.DT_details column-sizing.dt.DT_details destroy.dt.DT_details"),ce(n,"_details").length>0&&(e.on("draw.dt.DT_details",function(a,r){t===r&&e.rows({page:"current"}).eq(0).each(function(t){var e=n[t]
e._detailsShow&&e._details.insertAfter(e.nTr)})}),e.on("column-sizing.dt.DT_details",function(e,a,r,o){if(t===a)for(var i,l=b(a),s=0,u=n.length;s<u;s++)i=n[s],i._details&&i._details.children("td[colspan]").attr("colspan",l)}),e.on("destroy.dt.DT_details",function(a,r){if(t===r)for(var o=0,i=n.length;o<i;o++)n[o]._details&&Be(e,o)}))}
zt("row().child()",function(t,e){var n=this.context
return t===a?n.length&&this.length?n[0].aoData[this[0]]._details:a:(!0===t?this.child.show():!1===t?Be(this):n.length&&this.length&&We(n[0],n[0].aoData[this[0]],t,e),this)}),zt(["row().child.show()","row().child().show()"],function(t){return Ue(this,!0),this}),zt(["row().child.hide()","row().child().hide()"],function(){return Ue(this,!1),this}),zt(["row().child.remove()","row().child().remove()"],function(){return Be(this),this}),zt("row().child.isShown()",function(){var t=this.context
return!(!t.length||!this.length)&&(t[0].aoData[this[0]]._detailsShow||!1)})
var Xe=/^([^:]+):(name|visIdx|visible)$/,Je=function(t,e,n,a,r){for(var o=[],i=0,l=r.length;i<l;i++)o.push(T(t,r[i],e))
return o},qe=function(e,n,a){var r=e.aoColumns,o=ce(r,"sName"),i=ce(r,"nTh")
return He("column",n,function(n){var l=oe(n)
if(""===n)return de(r.length)
if(null!==l)return[l>=0?l:r.length+l]
if("function"==typeof n){var s=ke(e,a)
return t.map(r,function(t,a){return n(a,Je(e,a,0,0,s),i[a])?a:null})}var u="string"==typeof n?n.match(Xe):""
if(u)switch(u[2]){case"visIdx":case"visible":var c=parseInt(u[1],10)
if(c<0){var f=t.map(r,function(t,e){return t.bVisible?e:null})
return[f[f.length+c]]}return[p(e,c)]
case"name":return t.map(o,function(t,e){return t===u[1]?e:null})
default:return[]}if(n.nodeName&&n._DT_CellIndex)return[n._DT_CellIndex.column]
var d=t(i).filter(n).map(function(){return t.inArray(this,i)}).toArray()
if(d.length||!n.nodeName)return d
var h=t(n).closest("*[data-dt-column]")
return h.length?[h.data("dt-column")]:[]},e,a)},$e=function(e,n,r){var o,i,l,s,u=e.aoColumns,c=u[n],f=e.aoData
if(r===a)return c.bVisible
if(c.bVisible!==r){if(r){var d=t.inArray(!0,ce(u,"bVisible"),n+1)
for(i=0,l=f.length;i<l;i++)s=f[i].nTr,o=f[i].anCells,s&&s.insertBefore(o[n],o[d]||null)}else t(ce(e.aoData,"anCells",n)).detach()
c.bVisible=r}}
zt("columns()",function(e,n){e===a?e="":t.isPlainObject(e)&&(n=e,e=""),n=Ne(n)
var r=this.iterator("table",function(t){return qe(t,e,n)},1)
return r.selector.cols=e,r.selector.opts=n,r}),Yt("columns().header()","column().header()",function(t,e){return this.iterator("column",function(t,e){return t.aoColumns[e].nTh},1)}),Yt("columns().footer()","column().footer()",function(t,e){return this.iterator("column",function(t,e){return t.aoColumns[e].nTf},1)}),Yt("columns().data()","column().data()",function(){return this.iterator("column-rows",Je,1)}),Yt("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(t,e){return t.aoColumns[e].mData},1)}),Yt("columns().cache()","column().cache()",function(t){return this.iterator("column-rows",function(e,n,a,r,o){return fe(e.aoData,o,"search"===t?"_aFilterData":"_aSortData",n)},1)}),Yt("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(t,e,n,a,r){return fe(t.aoData,r,"anCells",e)},1)}),Yt("columns().visible()","column().visible()",function(e,n){var r=this,o=this.iterator("column",function(t,n){if(e===a)return t.aoColumns[n].bVisible
$e(t,n,e)})
return e!==a&&this.iterator("table",function(o){N(o,o.aoHeader),N(o,o.aoFooter),o.aiDisplay.length||t(o.nTBody).find("td[colspan]").attr("colspan",b(o)),It(o),r.iterator("column",function(t,a){kt(t,null,"column-visibility",[t,a,e,n])}),(n===a||n)&&r.columns.adjust()}),o}),Yt("columns().indexes()","column().index()",function(t){return this.iterator("column",function(e,n){return"visible"===t?g(e,n):n},1)}),zt("columns.adjust()",function(){return this.iterator("table",function(t){h(t)},1)}),zt("column.index()",function(t,e){if(0!==this.context.length){var n=this.context[0]
if("fromVisible"===t||"toData"===t)return p(n,e)
if("fromData"===t||"toVisible"===t)return g(n,e)}}),zt("column()",function(t,e){return Oe(this.columns(t,e))})
var Ge=function(e,n,r){var o,i,l,s,u,c,f,d=e.aoData,h=ke(e,r),p=he(fe(d,h,"anCells")),g=t(ve([],p)),b=e.aoColumns.length
return He("cell",n,function(n){var r="function"==typeof n
if(null===n||n===a||r){for(i=[],l=0,s=h.length;l<s;l++)for(o=h[l],u=0;u<b;u++)c={row:o,column:u},r?(f=d[o],n(c,T(e,o,u),f.anCells?f.anCells[u]:null)&&i.push(c)):i.push(c)
return i}if(t.isPlainObject(n))return n.column!==a&&n.row!==a&&-1!==t.inArray(n.row,h)?[n]:[]
var p=g.filter(n).map(function(t,e){return{row:e._DT_CellIndex.row,column:e._DT_CellIndex.column}}).toArray()
return p.length||!n.nodeName?p:(f=t(n).closest("*[data-dt-row]"),f.length?[{row:f.data("dt-row"),column:f.data("dt-column")}]:[])},e,r)}
zt("cells()",function(e,n,r){if(t.isPlainObject(e)&&(e.row===a?(r=e,e=null):(r=n,n=null)),t.isPlainObject(n)&&(r=n,n=null),null===n||n===a)return this.iterator("table",function(t){return Ge(t,e,Ne(r))})
var o,i,l,s,u=r?{page:r.page,order:r.order,search:r.search}:{},c=this.columns(n,u),f=this.rows(e,u),d=this.iterator("table",function(t,e){var n=[]
for(o=0,i=f[e].length;o<i;o++)for(l=0,s=c[e].length;l<s;l++)n.push({row:f[e][o],column:c[e][l]})
return n},1),h=r&&r.selected?this.cells(d,r):d
return t.extend(h.selector,{cols:n,rows:e,opts:r}),h}),Yt("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(t,e,n){var r=t.aoData[e]
return r&&r.anCells?r.anCells[n]:a},1)}),zt("cells().data()",function(){return this.iterator("cell",function(t,e,n){return T(t,e,n)},1)}),Yt("cells().cache()","cell().cache()",function(t){return t="search"===t?"_aFilterData":"_aSortData",this.iterator("cell",function(e,n,a){return e.aoData[n][t][a]},1)}),Yt("cells().render()","cell().render()",function(t){return this.iterator("cell",function(e,n,a){return T(e,n,a,t)},1)}),Yt("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(t,e,n){return{row:e,column:n,columnVisible:g(t,n)}},1)}),Yt("cells().invalidate()","cell().invalidate()",function(t){return this.iterator("cell",function(e,n,a){L(e,n,t,a)})}),zt("cell()",function(t,e,n){return Oe(this.cells(t,e,n))}),zt("cell().data()",function(t){var e=this.context,n=this[0]
return t===a?e.length&&n.length?T(e[0],n[0].row,n[0].column):a:(C(e[0],n[0].row,n[0].column,t),L(e[0],n[0].row,"data",n[0].column),this)}),zt("order()",function(t,e){var n=this.context
return t===a?0!==n.length?n[0].aaSorting:a:("number"==typeof t?t=[[t,e]]:t.length&&!Array.isArray(t[0])&&(t=Array.prototype.slice.call(arguments)),this.iterator("table",function(e){e.aaSorting=t.slice()}))}),zt("order.listener()",function(t,e,n){return this.iterator("table",function(a){Ct(a,t,e,n)})}),zt("order.fixed()",function(e){if(!e){var n=this.context,r=n.length?n[0].aaSortingFixed:a
return Array.isArray(r)?{pre:r}:r}return this.iterator("table",function(n){n.aaSortingFixed=t.extend(!0,{},e)})}),zt(["columns().order()","column().order()"],function(e){var n=this
return this.iterator("table",function(a,r){var o=[]
t.each(n[r],function(t,n){o.push([n,e])}),a.aaSorting=o})}),zt("search()",function(e,n,r,o){var i=this.context
return e===a?0!==i.length?i[0].oPreviousSearch.sSearch:a:this.iterator("table",function(a){a.oFeatures.bFilter&&G(a,t.extend({},a.oPreviousSearch,{sSearch:e+"",bRegex:null!==n&&n,bSmart:null===r||r,bCaseInsensitive:null===o||o}),1)})}),Yt("columns().search()","column().search()",function(e,n,r,o){return this.iterator("column",function(i,l){var s=i.aoPreSearchCols
if(e===a)return s[l].sSearch
i.oFeatures.bFilter&&(t.extend(s[l],{sSearch:e+"",bRegex:null!==n&&n,bSmart:null===r||r,bCaseInsensitive:null===o||o}),G(i,i.oPreviousSearch,1))})}),zt("state()",function(){return this.context.length?this.context[0].oSavedState:null}),zt("state.clear()",function(){return this.iterator("table",function(t){t.fnStateSaveCallback.call(t.oInstance,t,{})})}),zt("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null}),zt("state.save()",function(){return this.iterator("table",function(t){It(t)})}),Zt.use=function(a,r){"lib"===r||a.fn?t=a:"win"==r||a.document?(e=a,n=a.document):"datetime"!==r&&"DateTime"!==a.type||(Zt.DateTime=a)},Zt.factory=function(a,r){var o=!1
return a&&a.document&&(e=a,n=a.document),r&&r.fn&&r.fn.jquery&&(t=r,o=!0),o},Zt.versionCheck=Zt.fnVersionCheck=function(t){for(var e,n,a=Zt.version.split("."),r=t.split("."),o=0,i=r.length;o<i;o++)if(e=parseInt(a[o],10)||0,n=parseInt(r[o],10)||0,e!==n)return e>n
return!0},Zt.isDataTable=Zt.fnIsDataTable=function(e){var n=t(e).get(0),a=!1
return e instanceof Zt.Api||(t.each(Zt.settings,function(e,r){var o=r.nScrollHead?t("table",r.nScrollHead)[0]:null,i=r.nScrollFoot?t("table",r.nScrollFoot)[0]:null
r.nTable!==n&&o!==n&&i!==n||(a=!0)}),a)},Zt.tables=Zt.fnTables=function(e){var n=!1
t.isPlainObject(e)&&(n=e.api,e=e.visible)
var a=t.map(Zt.settings,function(n){if(!e||e&&t(n.nTable).is(":visible"))return n.nTable})
return n?new Gt(a):a},Zt.camelToHungarian=o,zt("$()",function(e,n){var a=this.rows(n).nodes(),r=t(a)
return t([].concat(r.filter(e).toArray(),r.find(e).toArray()))}),t.each(["on","one","off"],function(e,n){zt(n+"()",function(){var e=Array.prototype.slice.call(arguments)
e[0]=t.map(e[0].split(/\s/),function(t){return t.match(/\.dt\b/)?t:t+".dt"}).join(" ")
var a=t(this.tables().nodes())
return a[n].apply(a,e),this})}),zt("clear()",function(){return this.iterator("table",function(t){I(t)})}),zt("settings()",function(){return new Gt(this.context,this.context)}),zt("init()",function(){var t=this.context
return t.length?t[0].oInit:null}),zt("data()",function(){return this.iterator("table",function(t){return ce(t.aoData,"_aData")}).flatten()}),zt("destroy()",function(n){return n=n||!1,this.iterator("table",function(a){var r,o=a.oClasses,i=a.nTable,l=a.nTBody,s=a.nTHead,u=a.nTFoot,c=t(i),f=t(l),d=t(a.nTableWrapper),h=t.map(a.aoData,function(t){return t.nTr})
a.bDestroying=!0,kt(a,"aoDestroyCallback","destroy",[a]),n||new Gt(a).columns().visible(!0),d.off(".DT").find(":not(tbody *)").off(".DT"),t(e).off(".DT-"+a.sInstance),i!=s.parentNode&&(c.children("thead").detach(),c.append(s)),u&&i!=u.parentNode&&(c.children("tfoot").detach(),c.append(u)),a.aaSorting=[],a.aaSortingFixed=[],xt(a),t(h).removeClass(a.asStripeClasses.join(" ")),t("th, td",s).removeClass(o.sSortable+" "+o.sSortableAsc+" "+o.sSortableDesc+" "+o.sSortableNone),f.children().detach(),f.append(h)
var p=a.nTableWrapper.parentNode,g=n?"remove":"detach"
c[g](),d[g](),!n&&p&&(p.insertBefore(i,a.nTableReinsertBefore),c.css("width",a.sDestroyWidth).removeClass(o.sTable),(r=a.asDestroyStripes.length)&&f.children().each(function(e){t(this).addClass(a.asDestroyStripes[e%r])}))
var b=t.inArray(a,Zt.settings);-1!==b&&Zt.settings.splice(b,1)})}),t.each(["column","row","cell"],function(t,e){zt(e+"s().every()",function(t){var n=this.selector.opts,r=this
return this.iterator(e,function(o,i,l,s,u){t.call(r[e](i,"cell"===e?l:n,"cell"===e?n:a),i,l,s,u)})})}),zt("i18n()",function(e,n,r){var o=this.context[0],i=_e(e)(o.oLanguage)
return i===a&&(i=n),r!==a&&t.isPlainObject(i)&&(i=i[r]!==a?i[r]:i._),"string"==typeof i?i.replace("%d",r):i}),Zt.version="1.13.6",Zt.settings=[],Zt.models={},Zt.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0,return:!1},Zt.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1},Zt.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null},Zt.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(t){try{return JSON.parse((-1===t.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+t.sInstance+"_"+location.pathname))}catch(t){return{}}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(t,e){try{(-1===t.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+t.sInstance+"_"+location.pathname,JSON.stringify(e))}catch(t){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:t.extend({},Zt.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"},r(Zt.defaults),Zt.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null},r(Zt.defaults.column),Zt.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,jqXHR:null,json:a,oAjaxData:a,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==Et(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==Et(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var t=this._iDisplayLength,e=this._iDisplayStart,n=e+t,a=this.aiDisplay.length,r=this.oFeatures,o=r.bPaginate
return r.bServerSide?!1===o||-1===t?e+a:Math.min(e+t,this._iRecordsDisplay):!o||n>a||-1===t?a:n},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null},Zt.ext=$t={buttons:{},classes:{},build:"bs5/dt-1.13.6",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:Zt.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:Zt.version},t.extend($t,{afnFiltering:$t.search,aTypes:$t.type.detect,ofnSearch:$t.type.search,oSort:$t.type.order,afnSortData:$t.order,aoFeatures:$t.feature,oApi:$t.internal,oStdClasses:$t.classes,oPagination:$t.pager}),t.extend(Zt.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_desc_disabled",sSortableDesc:"sorting_asc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""})
var ze=Zt.ext.pager
t.extend(ze,{simple:function(t,e){return["previous","next"]},full:function(t,e){return["first","previous","next","last"]},numbers:function(t,e){return[Bt(t,e)]},simple_numbers:function(t,e){return["previous",Bt(t,e),"next"]},full_numbers:function(t,e){return["first","previous",Bt(t,e),"next","last"]},first_last_numbers:function(t,e){return["first",Bt(t,e),"last"]},_numbers:Bt,numbers_length:7}),t.extend(!0,Zt.ext.renderer,{pageButton:{_:function(e,r,o,i,l,s){var u,c,f,d=e.oClasses,h=e.oLanguage.oPaginate,p=e.oLanguage.oAria.paginate||{},g=function(n,a){var r,i,f,b,v=d.sPageButtonDisabled,m=function(t){ct(e,t.data.action,!0)}
for(r=0,i=a.length;r<i;r++)if(b=a[r],Array.isArray(b)){var S=t("<"+(b.DT_el||"div")+"/>").appendTo(n)
g(S,b)}else{var y=!1
switch(u=null,c=b,b){case"ellipsis":n.append('<span class="ellipsis">&#x2026;</span>')
break
case"first":u=h.sFirst,0===l&&(y=!0)
break
case"previous":u=h.sPrevious,0===l&&(y=!0)
break
case"next":u=h.sNext,0!==s&&l!==s-1||(y=!0)
break
case"last":u=h.sLast,0!==s&&l!==s-1||(y=!0)
break
default:u=e.fnFormatNumber(b+1),c=l===b?d.sPageButtonActive:""}if(null!==u){var D=e.oInit.pagingTag||"a"
y&&(c+=" "+v),f=t("<"+D+">",{class:d.sPageButton+" "+c,"aria-controls":e.sTableId,"aria-disabled":y?"true":null,"aria-label":p[b],role:"link","aria-current":c===d.sPageButtonActive?"page":null,"data-dt-idx":b,tabindex:y?-1:e.iTabIndex,id:0===o&&"string"==typeof b?e.sTableId+"_"+b:null}).html(u).appendTo(n),Nt(f,{action:b},m)}}}
try{f=t(r).find(n.activeElement).data("dt-idx")}catch(t){}g(t(r).empty(),i),f!==a&&t(r).find("[data-dt-idx="+f+"]").trigger("focus")}}}),t.extend(Zt.ext.type.detect,[function(t,e){var n=e.oLanguage.sDecimal
return le(t,n)?"num"+n:null},function(t,e){if(t&&!(t instanceof Date)&&!ee.test(t))return null
var n=Date.parse(t)
return null!==n&&!isNaN(n)||re(t)?"date":null},function(t,e){var n=e.oLanguage.sDecimal
return le(t,n,!0)?"num-fmt"+n:null},function(t,e){var n=e.oLanguage.sDecimal
return ue(t,n)?"html-num"+n:null},function(t,e){var n=e.oLanguage.sDecimal
return ue(t,n,!0)?"html-num-fmt"+n:null},function(t,e){return re(t)||"string"==typeof t&&-1!==t.indexOf("<")?"html":null}]),t.extend(Zt.ext.type.search,{html:function(t){return re(t)?t:"string"==typeof t?t.replace(Kt," ").replace(te,""):""},string:function(t){return re(t)?t:"string"==typeof t?t.replace(Kt," "):t}})
var Ye=function(t,e,n,a){if(0!==t&&(!t||"-"===t))return-1/0
var r=typeof t
return"number"===r||"bigint"===r?t:(e&&(t=ie(t,e)),t.replace&&(n&&(t=t.replace(n,"")),a&&(t=t.replace(a,""))),1*t)}
t.extend($t.type.order,{"date-pre":function(t){var e=Date.parse(t)
return isNaN(e)?-1/0:e},"html-pre":function(t){return re(t)?"":t.replace?t.replace(/<.*?>/g,"").toLowerCase():t+""},"string-pre":function(t){return re(t)?"":"string"==typeof t?t.toLowerCase():t.toString?t.toString():""},"string-asc":function(t,e){return t<e?-1:t>e?1:0},"string-desc":function(t,e){return t<e?1:t>e?-1:0}}),Ut(""),t.extend(!0,Zt.ext.renderer,{header:{_:function(e,n,a,r){t(e.nTable).on("order.dt.DT",function(t,o,i,l){if(e===o){var s=a.idx
n.removeClass(r.sSortAsc+" "+r.sSortDesc).addClass("asc"==l[s]?r.sSortAsc:"desc"==l[s]?r.sSortDesc:a.sSortingClass)}})},jqueryui:function(e,n,a,r){t("<div/>").addClass(r.sSortJUIWrapper).append(n.contents()).append(t("<span/>").addClass(r.sSortIcon+" "+a.sSortingClassJUI)).appendTo(n),t(e.nTable).on("order.dt.DT",function(t,o,i,l){if(e===o){var s=a.idx
n.removeClass(r.sSortAsc+" "+r.sSortDesc).addClass("asc"==l[s]?r.sSortAsc:"desc"==l[s]?r.sSortDesc:a.sSortingClass),n.find("span."+r.sSortIcon).removeClass(r.sSortJUIAsc+" "+r.sSortJUIDesc+" "+r.sSortJUI+" "+r.sSortJUIAscAllowed+" "+r.sSortJUIDescAllowed).addClass("asc"==l[s]?r.sSortJUIAsc:"desc"==l[s]?r.sSortJUIDesc:a.sSortingClassJUI)}})}}})
var Ze=function(t){return Array.isArray(t)&&(t=t.join(",")),"string"==typeof t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):t},Qe=!1,Ke=",",tn="."
if(e.Intl!==a)try{for(var en=(new Intl.NumberFormat).formatToParts(100000.1),nn=0;nn<en.length;nn++)"group"===en[nn].type?Ke=en[nn].value:"decimal"===en[nn].type&&(tn=en[nn].value)}catch(t){}return Zt.datetime=function(t,e){var n="datetime-detect-"+t
e||(e="en"),Zt.ext.type.order[n]||(Zt.ext.type.detect.unshift(function(a){var r=Xt(a,t,e)
return!(""!==a&&!r)&&n}),Zt.ext.type.order[n+"-pre"]=function(n){return Xt(n,t,e)||0})},Zt.render={date:Jt("toLocaleDateString"),datetime:Jt("toLocaleString"),time:Jt("toLocaleTimeString"),number:function(t,e,n,r,o){return null!==t&&t!==a||(t=Ke),null!==e&&e!==a||(e=tn),{display:function(a){if("number"!=typeof a&&"string"!=typeof a)return a
if(""===a||null===a)return a
var i=a<0?"-":"",l=parseFloat(a)
if(isNaN(l))return Ze(a)
l=l.toFixed(n),a=Math.abs(l)
var s=parseInt(a,10),u=n?e+(a-s).toFixed(n).substring(2):""
return 0===s&&0===parseFloat(u)&&(i=""),i+(r||"")+s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,t)+u+(o||"")}}},text:function(){return{display:Ze,filter:Ze}}},t.extend(Zt.ext.internal,{_fnExternApiFunc:qt,_fnBuildAjax:U,_fnAjaxUpdate:V,_fnAjaxParameters:X,_fnAjaxUpdateDraw:J,_fnAjaxDataSrc:q,_fnAddColumn:f,_fnColumnOptions:d,_fnAdjustColumnSizing:h,_fnVisibleToColumnIndex:p,_fnColumnIndexToVisible:g,_fnVisbleColumns:b,_fnGetColumns:v,_fnColumnTypes:m,_fnApplyColumnDefs:S,_fnHungarianMap:r,_fnCamelToHungarian:o,_fnLanguageCompat:i,_fnBrowserDetect:u,_fnAddData:y,_fnAddTr:D,_fnNodeToDataIndex:_,_fnNodeToColumnIndex:w,_fnGetCellData:T,_fnSetCellData:C,_fnSplitObjNotation:x,_fnGetObjectDataFn:_e,_fnSetObjectDataFn:we,_fnGetDataMaster:A,_fnClearTable:I,_fnDeleteIndex:F,_fnInvalidate:L,_fnGetRowElements:R,_fnCreateTr:P,_fnBuildHead:H,_fnDrawHead:N,_fnDraw:O,_fnReDraw:k,_fnAddOptionsHtml:M,_fnDetectHeader:W,_fnGetUniqueThs:E,_fnFeatureHtmlFilter:$,_fnFilterComplete:G,_fnFilterCustom:z,_fnFilterColumn:Y,_fnFilter:Z,_fnFilterCreateSearch:Q,_fnEscapeRegex:Te,_fnFilterData:K,_fnFeatureHtmlInfo:nt,_fnUpdateInfo:at,_fnInfoMacros:rt,_fnInitialise:ot,_fnInitComplete:it,_fnLengthChange:lt,_fnFeatureHtmlLength:st,_fnFeatureHtmlPaginate:ut,_fnPageChange:ct,_fnFeatureHtmlProcessing:ft,_fnProcessingDisplay:dt,_fnFeatureHtmlTable:ht,_fnScrollDraw:pt,_fnApplyToChildren:gt,_fnCalculateColumnWidths:bt,_fnThrottle:Ie,_fnConvertToWidth:vt,_fnGetWidestNode:mt,_fnGetMaxLenString:St,_fnStringToCss:yt,_fnSortFlatten:Dt,_fnSort:_t,_fnSortAria:wt,_fnSortListener:Tt,_fnSortAttachListener:Ct,_fnSortingClasses:xt,_fnSortData:At,_fnSaveState:It,_fnLoadState:Ft,_fnImplementState:Lt,_fnSettingsFromNode:Rt,_fnLog:Pt,_fnMap:jt,_fnBindAction:Nt,_fnCallbackReg:Ot,_fnCallbackFire:kt,_fnLengthOverflow:Mt,_fnRenderer:Wt,_fnDataSource:Et,_fnRowAttributes:j,_fnExtend:Ht,_fnCalculateEnd:function(){}}),t.fn.dataTable=Zt,Zt.$=t,t.fn.dataTableSettings=Zt.settings,t.fn.dataTableExt=Zt.ext,t.fn.DataTable=function(e){return t(this).dataTable(e).api()},t.each(Zt,function(e,n){t.fn.DataTable[e]=n}),Zt}),function(t){if("function"==typeof define&&define.amd)define(["jquery","datatables.net"],function(e){return t(e,window,document)})
else if("object"==typeof exports){var e=require("jquery"),n=function(t,e){e.fn.dataTable||require("datatables.net")(t,e)}
"undefined"==typeof window?module.exports=function(a,r){return a||(a=window),r||(r=e(a)),n(a,r),t(r,a,a.document)}:(n(window,e),module.exports=t(e,window,window.document))}else t(jQuery,window,document)}(function(t,e,n,a){"use strict"
var r=t.fn.dataTable
return t.extend(!0,r.defaults,{dom:"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row dt-row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",renderer:"bootstrap"}),t.extend(r.ext.classes,{sWrapper:"dataTables_wrapper dt-bootstrap5",sFilterInput:"form-control form-control-sm",sLengthSelect:"form-select form-select-sm",sProcessing:"dataTables_processing card",sPageButton:"paginate_button page-item"}),r.ext.renderer.pageButton.bootstrap=function(e,o,i,l,s,u){var c,f,d,h=new r.Api(e),p=e.oClasses,g=e.oLanguage.oPaginate,b=e.oLanguage.oAria.paginate||{},v=function(n,a){var r,o,l,d,m=function(e){e.preventDefault(),t(e.currentTarget).hasClass("disabled")||h.page()==e.data.action||h.page(e.data.action).draw("page")}
for(r=0,o=a.length;r<o;r++)if(d=a[r],Array.isArray(d))v(n,d)
else{switch(c="",f="",d){case"ellipsis":c="&#x2026;",f="disabled"
break
case"first":c=g.sFirst,f=d+(s>0?"":" disabled")
break
case"previous":c=g.sPrevious,f=d+(s>0?"":" disabled")
break
case"next":c=g.sNext,f=d+(s<u-1?"":" disabled")
break
case"last":c=g.sLast,f=d+(s<u-1?"":" disabled")
break
default:c=d+1,f=s===d?"active":""}if(c){var S=-1!==f.indexOf("disabled")
l=t("<li>",{class:p.sPageButton+" "+f,id:0===i&&"string"==typeof d?e.sTableId+"_"+d:null}).append(t("<a>",{href:S?null:"#","aria-controls":e.sTableId,"aria-disabled":S?"true":null,"aria-label":b[d],role:"link","aria-current":"active"===f?"page":null,"data-dt-idx":d,tabindex:S?-1:e.iTabIndex,class:"page-link"}).html(c)).appendTo(n),e.oApi._fnBindAction(l,{action:d},m)}}},m=t(o)
try{d=m.find(n.activeElement).data("dt-idx")}catch(t){}var S=m.children("ul.pagination")
S.length?S.empty():S=m.html("<ul/>").children("ul").addClass("pagination"),v(S,l),d!==a&&m.find("[data-dt-idx="+d+"]").trigger("focus")},r})
