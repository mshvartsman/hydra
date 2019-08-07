(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return l}),n.d(t,"rightToc",function(){return o}),n.d(t,"default",function(){return u});n(0);var a=n(70);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l={id:"intro",title:"Configuring  Hydra",sidebar_label:"Introduction"},o=[{value:"Working directories",id:"working-directories",children:[]},{value:"Logging",id:"logging",children:[]},{value:"Task name",id:"task-name",children:[]},{value:"Plugins",id:"plugins",children:[]},{value:"Runtime config variables",id:"runtime-config-variables",children:[]},{value:"Anatomy of a Hydra run",id:"anatomy-of-a-hydra-run",children:[]}],b={rightToc:o},c="wrapper";function u(e){var t=e.components,n=i(e,["components"]);return Object(a.b)(c,r({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hydra comes pre-packages with sensible default configuration that covers the basic use cases.\nYou can customize that behavior by creating a ",Object(a.b)("inlineCode",{parentName:"p"},".hydra/hydra.yaml")," file under your job config path."),Object(a.b)("h3",{id:"working-directories"},"Working directories"),Object(a.b)("p",null,"Job output directory can be ",Object(a.b)("a",r({parentName:"p"},{href:"workdir"}),"customized")," both for local and for cluster (sweep) runs."),Object(a.b)("h3",{id:"logging"},"Logging"),Object(a.b)("p",null,"The default logging should be sufficient for most use cases but you can ",Object(a.b)("a",r({parentName:"p"},{href:"logging"}),"customize"),"\nthe logging in your own project "),Object(a.b)("h3",{id:"task-name"},"Task name"),Object(a.b)("p",null,"By default, the task name is simply the name of the python file without the .py extension.\nIn some cases you may want to ",Object(a.b)("a",r({parentName:"p"},{href:"task_name"}),"customize")," it."),Object(a.b)("h3",{id:"plugins"},"Plugins"),Object(a.b)("p",null,"Many plugins requires configuration via the .hydra directory.\nSee the documentation of individual plugins for more information about how to configure them."),Object(a.b)("h2",{id:"runtime-config-variables"},"Runtime config variables"),Object(a.b)("p",null,"The following variables can be used in the Hydra configuration files and in the job configuration files:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"function"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"arguments"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"description"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Example"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Example output"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"now"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"strftime pattern"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"date/time pattern"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"${now:%Y-%m-%d_%H-%M-%S}"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"2019-07-10_11-47-35")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"hydra"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"num_jobs"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Number of jobs the launcher is starting in this sweep"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"${hydra:num_jobs}"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"2")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"job"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"name"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Job name, defaults to python file name without suffix. Used for log filename, job name etc"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"${job:name}"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"example_sweep")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null})),Object(a.b)("td",r({parentName:"tr"},{align:null}),"override_dirname"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Pathname derived from the overrides for this job"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"/path/${job:override_dirname}"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"/path/a:1,b:I")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null})),Object(a.b)("td",r({parentName:"tr"},{align:null}),"num"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"job serial number in sweep"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"${job:num}"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"0")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null})),Object(a.b)("td",r({parentName:"tr"},{align:null}),"id"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Job ID in the underlying jobs system (slurm, chronos etc)"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"${job:id}"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"14445406")))),Object(a.b)("h2",{id:"anatomy-of-a-hydra-run"},"Anatomy of a Hydra run"),Object(a.b)("p",null,"When Hydra runs your code, the following things happen:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Hydra config is created:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Default Hydra config from package is loaded"),Object(a.b)("li",{parentName:"ul"},"Optional Hydra config from .hydra under your job config root is loaded"),Object(a.b)("li",{parentName:"ul"},"Your config is overlayed over the default config"),Object(a.b)("li",{parentName:"ul"},"Any command line overrides overrides that starts with hydra. are being merged in"))),Object(a.b)("li",{parentName:"ul"},"Your job config is created:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"All your config files are loaded from the config root:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"@hydra.main() : the directory of your python file"),Object(a.b)("li",{parentName:"ul"},"@hydra.main(config_path='conf/') : conf relative to your python file"),Object(a.b)("li",{parentName:"ul"},"@hydra.main(config_path='conf/config.yaml') : conf relative to your python file"))),Object(a.b)("li",{parentName:"ul"},"If config_path is a file, it's loaded as the base, otherwise an empty config is created"),Object(a.b)("li",{parentName:"ul"},"If the config contains a defaults block, anything from it is merged into the config"),Object(a.b)("li",{parentName:"ul"},"command line overrides are merged with the config")))),Object(a.b)("p",null,"Note that the Hydra config from .hydra is loaded using the same function as your own config."))}u.isMDXComponent=!0},70:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return d});var a=n(0),r=n.n(a),i=r.a.createContext({}),l=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=l(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},b="mdxType",c={inlineCode:"code",wrapper:function(e){return r.a.createElement(r.a.Fragment,{},e.children)}},u=function(e){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),b=l(t);return r.a.createElement(b[i+"."+n]||b[n]||c[n]||a,t?Object.assign({},o,{components:t}):o)};function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[b]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);