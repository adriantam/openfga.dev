(()=>{"use strict";var e,a,c,d,f,b={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var c=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(c.exports,c,c.exports,r),c.loaded=!0,c.exports}r.m=b,e=[],r.O=(a,c,d,f)=>{if(!c){var b=1/0;for(i=0;i<e.length;i++){c=e[i][0],d=e[i][1],f=e[i][2];for(var t=!0,o=0;o<c.length;o++)(!1&f||b>=f)&&Object.keys(r.O).every((e=>r.O[e](c[o])))?c.splice(o--,1):(t=!1,f<b&&(b=f));if(t){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[c,d,f]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var f=Object.create(null);r.r(f);var b={};a=a||[null,c({}),c([]),c(c)];for(var t=2&d&&e;"object"==typeof t&&!~a.indexOf(t);t=c(t))Object.getOwnPropertyNames(t).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,r.d(f,b),f},r.d=(e,a)=>{for(var c in a)r.o(a,c)&&!r.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,c)=>(r.f[c](e,a),a)),[])),r.u=e=>"assets/js/"+({41:"7742897f",159:"87c4c920",259:"30d9c7f8",288:"3d83e150",370:"25c8fc86",394:"18e2b0e6",574:"c606f954",629:"3592ef06",650:"73db2c80",754:"78431c72",849:"0058b4c6",881:"3652cf2a",892:"9578a8cf",1114:"4204f988",1124:"bac6be44",1235:"a7456010",1258:"f07fb3da",1717:"d3d4dca1",1786:"0938166f",1903:"acecf23e",1921:"3fcc87c9",2076:"common",2099:"f36658ee",2110:"ed2f6563",2138:"1a4e3797",2271:"5352c875",2282:"15f23c38",2300:"a99917a0",2424:"a09a1188",2711:"9e4087bc",2759:"54f0799f",3088:"d5823966",3094:"5dfc8d6a",3136:"c0e854c3",3168:"6786195a",3249:"ccc49370",3261:"1959be70",3277:"11d41818",3319:"4398cac5",3342:"3aada504",3464:"8573b819",3535:"e072f248",3640:"63b646c1",3745:"eb63e0da",3784:"d4468f65",3908:"11a254f1",4054:"acf022e4",4069:"65a696c4",4212:"621db11d",4243:"cb8ccc1a",4266:"15369573",4517:"4337ba13",4583:"1df93b7f",4710:"4c2069ba",4760:"bd85ffac",4813:"6875c492",4862:"bb879dcd",4875:"b2fd7883",4921:"138e0e15",4988:"db2cdc18",5117:"1bbc0b1c",5124:"1dd44026",5731:"0a0ef58c",5742:"aba21aa0",5749:"78aaed86",5896:"76c18be1",6366:"4427aa46",6368:"f5ba7293",6451:"4920f1c1",6509:"4d7851de",6565:"caf99389",6679:"e260e0bb",6765:"18eda3ee",6767:"028b1cc5",6810:"f80d803f",6815:"1bd78af1",6898:"4a075682",6917:"2f791d74",6922:"3759cf4b",7022:"a2ab5d86",7098:"a7bd4aaa",7175:"f9ee1d99",7178:"116d061d",7203:"da16da38",7472:"814f3328",7474:"6990fd21",7504:"9b914286",7544:"3c873722",7550:"6a4b619d",7556:"3a191a7b",7597:"98dac049",7643:"a6aa9e1f",7696:"71589d69",7709:"9c4cd4c4",7773:"966ae436",7822:"33b74eba",7962:"0682978e",8061:"87513e6a",8121:"3a2db09e",8130:"f81c1134",8146:"c15d9823",8209:"01a85c17",8365:"5ccffc9c",8401:"17896441",8603:"97140aee",8667:"30325ba4",8828:"2a5effb0",8865:"487f279c",8947:"ef8b811a",9034:"b65825d9",9048:"a94703ab",9078:"b89f0a14",9080:"e23d3c5f",9185:"7284575f",9365:"f4eae614",9372:"678d2109",9385:"8ea09047",9525:"439d46c1",9547:"34a3e208",9647:"5e95c892",9682:"24708ceb",9750:"ff31ea65",9762:"a33f8907",9775:"0bf6a463",9797:"d2f51707",9845:"66e11443",9858:"36994c47",9884:"03f1273c",9952:"87a4c587"}[e]||e)+"."+{41:"fe67f99d",93:"1fade598",159:"37670ce3",259:"26fbf09b",288:"cd36cd6e",370:"fd0defb7",394:"87ed90ea",489:"3fe9939b",574:"8cd52cd6",629:"83425524",650:"de18a55a",754:"a21121d7",849:"ae7b4130",881:"3914f3d2",892:"a90cffa3",1114:"0194f6a8",1124:"eaf8f86a",1235:"4e6d1ba3",1258:"e1b50eb5",1717:"c61a062e",1786:"a95775df",1903:"8613561d",1921:"4fabf66d",2076:"2e1b6cbd",2099:"77ce19a4",2110:"30d52695",2138:"55927370",2271:"1677da78",2282:"4d9900bf",2300:"fcbfd84a",2424:"0d87c2bf",2711:"81514287",2759:"83188024",3088:"ef344746",3094:"fee3b60e",3136:"e80b0e40",3168:"a9610809",3249:"8fc16722",3261:"bd80e27d",3277:"dcb64067",3319:"28fcf789",3342:"d4af0ce2",3347:"2167021f",3464:"0e44f704",3535:"19077b9e",3640:"07b25f52",3745:"66aa7e79",3784:"3cc4782c",3908:"44271664",4054:"26bfd878",4069:"17418fcf",4212:"390bab59",4243:"83e72375",4266:"ec3d703a",4517:"0ac9936d",4528:"029b86f4",4583:"2b8b6872",4710:"4c4926bd",4760:"8ccd015c",4809:"9195dd22",4813:"ef2f1bfc",4862:"bc1a8eb6",4875:"6149f000",4921:"c4b4c28c",4988:"8b136a60",5117:"ff953b04",5124:"d145ccc5",5688:"6d48c159",5731:"9592be65",5741:"718d87f3",5742:"55998aa1",5749:"acd46011",5896:"c2a5e5eb",6366:"874bbc30",6368:"a10919aa",6451:"e65f36f9",6509:"ee6fa6ee",6565:"ef2ed0d2",6679:"a966565d",6765:"5ff17a7f",6767:"729d957d",6810:"617d97a1",6815:"dea6d84a",6898:"b4a5b4af",6917:"7b4ad72b",6922:"29751b7e",7022:"40865983",7098:"f6acc07a",7175:"183756b7",7178:"1a157491",7203:"bcf05444",7472:"23c88701",7474:"58f3af92",7504:"1a7f029a",7544:"289c18fd",7550:"55dc384d",7556:"025410de",7597:"e4a22d90",7643:"24ebcdba",7696:"1e2a81d5",7709:"04c1e0d3",7773:"df303ef5",7822:"a32deea7",7962:"d9c4ce3c",8061:"d5fc8e89",8121:"c272c6d6",8130:"8040d2b9",8146:"f1b6fb5c",8209:"7c09761d",8325:"6b85d845",8365:"a05d8fdd",8401:"421aa8da",8603:"d47728de",8667:"3758598a",8828:"ec503078",8865:"9f3ad4e9",8947:"5b3ed719",9034:"951030f5",9048:"f7c33585",9078:"aded224c",9080:"9362bb9e",9185:"6479e8c8",9365:"fb88eba5",9372:"941245ad",9385:"6a3e7576",9525:"badb90b0",9547:"5f37067e",9647:"5c6e2fe9",9682:"69bba119",9750:"7420a527",9762:"4d0bbadd",9775:"6c109e4b",9797:"1942ac42",9845:"fd55cda8",9858:"f225579d",9884:"e6c6e9de",9952:"f944c505"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},f="openfga.dev:",r.l=(e,a,c,b)=>{if(d[e])d[e].push(a);else{var t,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==f+c){t=l;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",f+c),t.src=e),d[e]=[a];var u=(a,c)=>{t.onerror=t.onload=null,clearTimeout(s);var f=d[e];if(delete d[e],t.parentNode&&t.parentNode.removeChild(t),f&&f.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=u.bind(null,t.onerror),t.onload=u.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/",r.gca=function(e){return e={15369573:"4266",17896441:"8401","7742897f":"41","87c4c920":"159","30d9c7f8":"259","3d83e150":"288","25c8fc86":"370","18e2b0e6":"394",c606f954:"574","3592ef06":"629","73db2c80":"650","78431c72":"754","0058b4c6":"849","3652cf2a":"881","9578a8cf":"892","4204f988":"1114",bac6be44:"1124",a7456010:"1235",f07fb3da:"1258",d3d4dca1:"1717","0938166f":"1786",acecf23e:"1903","3fcc87c9":"1921",common:"2076",f36658ee:"2099",ed2f6563:"2110","1a4e3797":"2138","5352c875":"2271","15f23c38":"2282",a99917a0:"2300",a09a1188:"2424","9e4087bc":"2711","54f0799f":"2759",d5823966:"3088","5dfc8d6a":"3094",c0e854c3:"3136","6786195a":"3168",ccc49370:"3249","1959be70":"3261","11d41818":"3277","4398cac5":"3319","3aada504":"3342","8573b819":"3464",e072f248:"3535","63b646c1":"3640",eb63e0da:"3745",d4468f65:"3784","11a254f1":"3908",acf022e4:"4054","65a696c4":"4069","621db11d":"4212",cb8ccc1a:"4243","4337ba13":"4517","1df93b7f":"4583","4c2069ba":"4710",bd85ffac:"4760","6875c492":"4813",bb879dcd:"4862",b2fd7883:"4875","138e0e15":"4921",db2cdc18:"4988","1bbc0b1c":"5117","1dd44026":"5124","0a0ef58c":"5731",aba21aa0:"5742","78aaed86":"5749","76c18be1":"5896","4427aa46":"6366",f5ba7293:"6368","4920f1c1":"6451","4d7851de":"6509",caf99389:"6565",e260e0bb:"6679","18eda3ee":"6765","028b1cc5":"6767",f80d803f:"6810","1bd78af1":"6815","4a075682":"6898","2f791d74":"6917","3759cf4b":"6922",a2ab5d86:"7022",a7bd4aaa:"7098",f9ee1d99:"7175","116d061d":"7178",da16da38:"7203","814f3328":"7472","6990fd21":"7474","9b914286":"7504","3c873722":"7544","6a4b619d":"7550","3a191a7b":"7556","98dac049":"7597",a6aa9e1f:"7643","71589d69":"7696","9c4cd4c4":"7709","966ae436":"7773","33b74eba":"7822","0682978e":"7962","87513e6a":"8061","3a2db09e":"8121",f81c1134:"8130",c15d9823:"8146","01a85c17":"8209","5ccffc9c":"8365","97140aee":"8603","30325ba4":"8667","2a5effb0":"8828","487f279c":"8865",ef8b811a:"8947",b65825d9:"9034",a94703ab:"9048",b89f0a14:"9078",e23d3c5f:"9080","7284575f":"9185",f4eae614:"9365","678d2109":"9372","8ea09047":"9385","439d46c1":"9525","34a3e208":"9547","5e95c892":"9647","24708ceb":"9682",ff31ea65:"9750",a33f8907:"9762","0bf6a463":"9775",d2f51707:"9797","66e11443":"9845","36994c47":"9858","03f1273c":"9884","87a4c587":"9952"}[e]||e,r.p+r.u(e)},(()=>{r.b=document.baseURI||self.location.href;var e={5354:0,1869:0};r.f.j=(a,c)=>{var d=r.o(e,a)?e[a]:void 0;if(0!==d)if(d)c.push(d[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var f=new Promise(((c,f)=>d=e[a]=[c,f]));c.push(d[2]=f);var b=r.p+r.u(a),t=new Error;r.l(b,(c=>{if(r.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var f=c&&("load"===c.type?"missing":c.type),b=c&&c.target&&c.target.src;t.message="Loading chunk "+a+" failed.\n("+f+": "+b+")",t.name="ChunkLoadError",t.type=f,t.request=b,d[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,c)=>{var d,f,b=c[0],t=c[1],o=c[2],n=0;if(b.some((a=>0!==e[a]))){for(d in t)r.o(t,d)&&(r.m[d]=t[d]);if(o)var i=o(r)}for(a&&a(c);n<b.length;n++)f=b[n],r.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return r.O(i)},c=self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();