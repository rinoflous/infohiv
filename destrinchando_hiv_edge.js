/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'infectados_2010',
            type:'image',
            rect:['916px','-6px','917px','354px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"infectados_2010.png",'0px','0px']
         },
         {
            id:'norte',
            type:'rect',
            rect:['916','-6','auto','auto','auto','auto']
         },
         {
            id:'mulheres',
            type:'rect',
            rect:['916','0','auto','auto','auto','auto']
         },
         {
            id:'coquetel',
            type:'rect',
            rect:['916px','0','auto','auto','auto','auto']
         },
         {
            id:'inicio_epidemia',
            type:'rect',
            rect:['969','-6','auto','auto','auto','auto']
         },
         {
            id:'celula_base',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['0px','0px','916px','571px','auto','auto'],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'contaminacao',
            type:'rect',
            rect:['0','-6','auto','auto','auto','auto']
         },
         {
            id:'infectados_1990',
            type:'rect',
            rect:['916px','-6','auto','auto','auto','auto']
         },
         {
            id:'brasil',
            type:'rect',
            rect:['917','-6','auto','auto','auto','auto']
         },
         {
            id:'epidemia_mundo',
            type:'rect',
            rect:['917','-6','auto','auto','auto','auto']
         },
         {
            id:'africa',
            type:'rect',
            rect:['917','-6','auto','auto','auto','auto']
         },
         {
            id:'aids_uk',
            type:'rect',
            rect:['1','-6px','auto','auto','auto','auto']
         },
         {
            id:'linha06',
            type:'rect',
            rect:['917','202','auto','auto','auto','auto']
         },
         {
            id:'linha05',
            type:'rect',
            rect:['917','311','auto','auto','auto','auto']
         },
         {
            id:'linha04',
            type:'rect',
            rect:['917','311','auto','auto','auto','auto']
         },
         {
            id:'linha03',
            type:'rect',
            rect:['916','312','auto','auto','auto','auto']
         },
         {
            id:'linha02',
            type:'image',
            rect:['917px','312px','916px','260px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"linha02.png",'0px','0px']
         },
         {
            id:'linha01',
            type:'rect',
            rect:['1','276','auto','auto','auto','auto']
         },
         {
            id:'avanca',
            type:'image',
            rect:['872px','441px','34px','34px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"avanca.png",'0px','0px']
         },
         {
            id:'volta',
            type:'image',
            rect:['11px','440px','34px','35px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"volta.png",'0px','0px']
         },
         {
            id:'abertura',
            type:'rect',
            rect:['0','1','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'africa',
            symbolName:'africa'
         },
         {
            id:'coquetel',
            symbolName:'coquetel'
         },
         {
            id:'linha03',
            symbolName:'linha03'
         },
         {
            id:'contaminacao',
            symbolName:'contaminacao'
         },
         {
            id:'inicio_epidemia',
            symbolName:'inicio_epidemia'
         },
         {
            id:'linha05',
            symbolName:'linha05'
         },
         {
            id:'brasil',
            symbolName:'brasil'
         },
         {
            id:'norte',
            symbolName:'norte'
         },
         {
            id:'linha06',
            symbolName:'linha06'
         },
         {
            id:'aids_uk',
            symbolName:'aids_uk'
         },
         {
            id:'celula_base',
            symbolName:'celula_base'
         },
         {
            id:'linha01',
            symbolName:'linha01'
         },
         {
            id:'infectados_1990',
            symbolName:'infectados_1990'
         },
         {
            id:'mulheres',
            symbolName:'mulheres'
         },
         {
            id:'linha04',
            symbolName:'linha04'
         },
         {
            id:'abertura',
            symbolName:'abertura'
         },
         {
            id:'epidemia_mundo',
            symbolName:'epidemia_mundo'
         }
         ]
      },
   states: {
      "Base State": {
         "${_infectados_1990}": [
            ["style", "left", '916px'],
            ["style", "overflow", 'visible']
         ],
         "${_linha01}": [
            ["style", "left", '0px']
         ],
         "${_norte}": [
            ["style", "left", '916px']
         ],
         "${_africa}": [
            ["style", "left", '917px']
         ],
         "${_linha03}": [
            ["style", "left", '919px']
         ],
         "${_inicio_epidemia}": [
            ["style", "left", '916px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)']
         ],
         "${_linha05}": [
            ["style", "left", '917px']
         ],
         "${_brasil}": [
            ["style", "left", '917px']
         ],
         "${_mulheres}": [
            ["style", "left", '916px']
         ],
         "${_linha04}": [
            ["style", "left", '917px']
         ],
         "${_aids_uk}": [
            ["style", "left", '917px']
         ],
         "${_avanca}": [
            ["style", "left", '870px'],
            ["style", "top", '441px']
         ],
         "${_linha06}": [
            ["style", "left", '916px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '571px'],
            ["style", "width", '917px']
         ],
         "${_coquetel}": [
            ["style", "left", '916px']
         ],
         "${_linha02}": [
            ["style", "left", '917px'],
            ["style", "top", '312px']
         ],
         "${_infectados_2010}": [
            ["style", "left", '916px'],
            ["style", "top", '-6px']
         ],
         "${_epidemia_mundo}": [
            ["style", "left", '917px']
         ],
         "${_contaminacao}": [
            ["style", "left", '0px']
         ],
         "${_celula_base}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_volta}": [
            ["style", "left", '-79px'],
            ["style", "top", '440px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2500,
         autoPlay: true,
         timeline: [
            { id: "eid146", tween: [ "style", "${_epidemia_mundo}", "left", '0px', { fromValue: '917px'}], position: 500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid147", tween: [ "style", "${_epidemia_mundo}", "left", '-917px', { fromValue: '0px'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid7", tween: [ "style", "${_linha02}", "left", '0px', { fromValue: '917px'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid9", tween: [ "style", "${_linha02}", "left", '-916px', { fromValue: '0px'}], position: 500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid142", tween: [ "style", "${_africa}", "left", '0px', { fromValue: '917px'}], position: 500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid143", tween: [ "style", "${_africa}", "left", '-917px', { fromValue: '0px'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid98", tween: [ "style", "${_coquetel}", "left", '0px', { fromValue: '916px'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid99", tween: [ "style", "${_coquetel}", "left", '-917px', { fromValue: '0px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid106", tween: [ "style", "${_linha04}", "left", '1px', { fromValue: '917px'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid107", tween: [ "style", "${_linha04}", "left", '-916px', { fromValue: '1px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid448", tween: [ "style", "${_norte}", "left", '0px', { fromValue: '916px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid449", tween: [ "style", "${_norte}", "left", '-916px', { fromValue: '0px'}], position: 2000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid137", tween: [ "style", "${_linha05}", "left", '0px', { fromValue: '917px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid138", tween: [ "style", "${_linha05}", "left", '-916px', { fromValue: '0px'}], position: 2000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid104", tween: [ "style", "${_infectados_1990}", "left", '0px', { fromValue: '916px'}], position: 500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid105", tween: [ "style", "${_infectados_1990}", "left", '-916px', { fromValue: '0px'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid66", tween: [ "style", "${_linha03}", "left", '1px', { fromValue: '919px'}], position: 500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid67", tween: [ "style", "${_linha03}", "left", '-915px', { fromValue: '1px'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid154", tween: [ "style", "${_linha01}", "left", '-917px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid28", tween: [ "style", "${_avanca}", "left", '944px', { fromValue: '870px'}], position: 2000, duration: 250, easing: "easeInOutQuad" },
            { id: "eid117", tween: [ "style", "${_inicio_epidemia}", "left", '0px', { fromValue: '916px'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid118", tween: [ "style", "${_inicio_epidemia}", "left", '-917px', { fromValue: '0px'}], position: 500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid139", tween: [ "style", "${_linha06}", "left", '0px', { fromValue: '916px'}], position: 2000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid27", tween: [ "style", "${_volta}", "left", '11px', { fromValue: '-79px'}], position: 276, duration: 224, easing: "easeInOutQuad" },
            { id: "eid115", tween: [ "style", "${_aids_uk}", "left", '1px', { fromValue: '917px'}], position: 500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid116", tween: [ "style", "${_aids_uk}", "left", '-917px', { fromValue: '1px'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid51", tween: [ "style", "${_contaminacao}", "left", '-941px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid136", tween: [ "style", "${_infectados_2010}", "left", '0px', { fromValue: '916px'}], position: 2000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid144", tween: [ "style", "${_brasil}", "left", '0px', { fromValue: '917px'}], position: 500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid145", tween: [ "style", "${_brasil}", "left", '-916px', { fromValue: '0px'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid150", tween: [ "style", "${_celula_base}", "left", '-917px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid134", tween: [ "style", "${_mulheres}", "left", '0px', { fromValue: '916px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid135", tween: [ "style", "${_mulheres}", "left", '-916px', { fromValue: '0px'}], position: 2000, duration: 500, easing: "easeInOutQuad" }         ]
      }
   }
},
"contaminacao": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','917px','354px','auto','auto'],
      id: 'contaminacao',
      type: 'image',
      clip: ['rect(0px 0px 354px 0px)'],
      fill: ['rgba(0,0,0,0)','images/contaminacao.png','0px','0px']
   },
   {
      id: 'chimpa',
      type: 'rect',
      rect: ['315','-262','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'chimpa',
      symbolName: 'chimpa'
   }   ]
   },
   states: {
      "Base State": {
         "${_contaminacao}": [
            ["style", "top", '0px'],
            ["style", "clip", [0,0,354,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '354px'],
            ["style", "width", '917px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid40", tween: [ "style", "${_contaminacao}", "clip", [0,917,354,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,354,0]}], position: 0, duration: 1000, easing: "easeInOutQuad" }         ]
      }
   }
},
"chimpa": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'chimpa',
      type: 'image',
      rect: ['0px','264px','137px','187px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/chimpa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_chimpa}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '187px'],
            ["style", "width", '137px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: true,
         timeline: [
            { id: "eid45", tween: [ "style", "${_chimpa}", "top", '264px', { fromValue: '0px'}], position: 250, duration: 750, easing: "easeInOutQuad" },
            { id: "eid46", tween: [ "style", "${_chimpa}", "top", '241px', { fromValue: '264px'}], position: 1000, duration: 625, easing: "easeInOutQuad" },
            { id: "eid47", tween: [ "style", "${_chimpa}", "top", '264px', { fromValue: '241px'}], position: 1625, duration: 625, easing: "easeInOutQuad" }         ]
      }
   }
},
"linha03": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'linha03',
      type: 'image',
      rect: ['-916px','0px','916px','260px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/linha03.png','0px','0px']
   },
   {
      id: 'alertaCopy',
      type: 'rect',
      rect: ['724px','15','auto','auto','auto','auto']
   },
   {
      id: 'alerta3',
      type: 'rect',
      rect: ['61px','15','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'alerta3',
      symbolName: 'alerta'
   },
   {
      id: 'alertaCopy',
      symbolName: 'alerta'
   }   ]
   },
   states: {
      "Base State": {
         "${_alertaCopy}": [
            ["style", "left", '724px']
         ],
         "${_linha03}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_alerta3}": [
            ["style", "left", '61px']
         ],
         "${symbolSelector}": [
            ["style", "height", '260px'],
            ["style", "width", '916px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"alerta": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-1px','-1px','45px','45px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'Ellipse',
      stroke: [2,'rgba(255,159,0,1.00)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "left", '-1px'],
            ["style", "top", '-1px'],
            ["transform", "scaleY", '1'],
            ["color", "border-color", 'rgba(255,159,0,0.00)'],
            ["style", "border-width", '2px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '47px'],
            ["style", "width", '47px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
            { id: "eid77", tween: [ "color", "${_Ellipse}", "border-color", 'rgba(255,159,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255, 159, 0, 0)'}], position: 0, duration: 750, easing: "easeInOutQuad" },
            { id: "eid78", tween: [ "color", "${_Ellipse}", "border-color", 'rgba(255,159,0,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,159,0,1)'}], position: 750, duration: 750, easing: "easeInOutQuad" },
            { id: "eid88", tween: [ "transform", "${_Ellipse}", "scaleX", '1.72', { fromValue: '1'}], position: 0, duration: 1500, easing: "easeInOutQuad" },
            { id: "eid89", tween: [ "transform", "${_Ellipse}", "scaleY", '1.72', { fromValue: '1'}], position: 0, duration: 1500, easing: "easeInOutQuad" }         ]
      }
   }
},
"infectados_1990": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'infectados_1990',
      type: 'image',
      rect: ['0px','0px','917px','354px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/infectados_1990.png','0px','0px']
   },
   {
      id: 'volta2Copy',
      type: 'image',
      rect: ['14px','167px','34px','35px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/volta.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_volta2Copy}": [
            ["style", "left", '14px'],
            ["style", "top", '167px']
         ],
         "${_infectados_1990}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '354px'],
            ["style", "width", '917px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"coquetel": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'coquetel3',
      type: 'image',
      rect: ['0px','0px','917px','354px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coquetel.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_coquetel3}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '354px'],
            ["style", "width", '917px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"linha04": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','916px','260px','auto','auto'],
      id: 'linha04',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/linha04.png','0px','0px'],
      c: [
      {
         id: 'linha04',
         type: 'image',
         rect: ['0px','0px','916px','260px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/linha04.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_linha04}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '260px'],
            ["style", "width", '916px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"aids_uk": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'aids_uk',
      type: 'image',
      rect: ['0px','0px','917px','354px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/aids_uk.png','0px','0px']
   },
   {
      id: 'hemofilico',
      type: 'rect',
      rect: ['406px','49','auto','auto','auto','auto']
   },
   {
      type: 'image',
      id: 'avanca_',
      rect: ['870px','168px','34px','34px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/avanca.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'hemofilico',
      symbolName: 'hemofilico'
   }   ]
   },
   states: {
      "Base State": {
         "${_aids_uk}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_avanca_}": [
            ["style", "top", '168px'],
            ["style", "left", '870px'],
            ["style", "cursor", 'pointer']
         ],
         "${_hemofilico}": [
            ["style", "left", '406px']
         ],
         "${symbolSelector}": [
            ["style", "height", '354px'],
            ["style", "width", '917px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"inicio_epidemia": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'inicio_epidemia',
      type: 'image',
      rect: ['-969px','0px','917px','354px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/inicio_epidemia.png','0px','0px']
   },
   {
      id: 'dor',
      type: 'rect',
      rect: ['288','17','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'dor',
      symbolName: 'dor'
   }   ]
   },
   states: {
      "Base State": {
         "${_inicio_epidemia}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '354px'],
            ["style", "width", '917px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"dor": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'dor',
      type: 'image',
      rect: ['0px','0px','142px','339px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/dor.png','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['65px','5px','14px','39px','auto','auto'],
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      transform: [[0,0],['35']],
      rect: ['87px','19px','42px','39px','auto','auto'],
      id: 'RectangleCopy2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RectangleCopy2}": [
            ["style", "top", '18px'],
            ["transform", "rotateZ", '35deg'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "bottom", 'auto'],
            ["style", "height", '39px'],
            ["style", "right", 'auto'],
            ["style", "left", '82px'],
            ["style", "width", '42px']
         ],
         "${_Rectangle}": [
            ["style", "height", '39px'],
            ["style", "top", '5px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)']
         ],
         "${_dor}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '339px'],
            ["style", "width", '142px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid125", tween: [ "style", "${_RectangleCopy2}", "height", '0px', { fromValue: '39px'}], position: 0, duration: 1000 },
            { id: "eid127", tween: [ "style", "${_RectangleCopy2}", "top", '22px', { fromValue: '18px'}], position: 0, duration: 1000 },
            { id: "eid126", tween: [ "style", "${_RectangleCopy2}", "left", '97px', { fromValue: '82px'}], position: 0, duration: 1000 },
            { id: "eid119", tween: [ "style", "${_Rectangle}", "height", '0px', { fromValue: '39px'}], position: 0, duration: 1000 }         ]
      }
   }
},
"hemofilico": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'hemofilico',
      type: 'image',
      rect: ['0px','0px','214px','252px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hemofilico.png','0px','0px']
   },
   {
      rect: ['34px','57px','22px','4px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(132,157,170,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "height", '4px'],
            ["color", "background-color", 'rgba(132,157,170,1.00)']
         ],
         "${_hemofilico}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '252px'],
            ["style", "width", '214px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid128", tween: [ "style", "${_Rectangle}", "height", '27px', { fromValue: '4px'}], position: 0, duration: 10000 }         ]
      }
   }
},
"pingo": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','33px','50px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '50px'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '33px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: true,
         timeline: [
            { id: "eid131", tween: [ "style", "${_Rectangle2}", "height", '0px', { fromValue: '50px'}], position: 0, duration: 750 }         ]
      }
   }
},
"mulheres": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'mulheres',
      type: 'image',
      rect: ['0px','0px','917px','354px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mulheres.png','0px','0px']
   },
   {
      type: 'image',
      id: 'avanca_Copy3',
      rect: ['870px','168px','34px','34px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/avanca.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_avanca_Copy3}": [
            ["style", "top", '168px'],
            ["style", "left", '870px'],
            ["style", "cursor", 'pointer']
         ],
         "${_mulheres}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '354px'],
            ["style", "width", '917px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"linha05": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'linha05',
      type: 'image',
      rect: ['0px','0px','916px','260px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/linha05.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_linha05}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '260px'],
            ["style", "width", '916px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"linha06": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'linha06',
      type: 'image',
      rect: ['0px','0px','916px','369px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/linha06.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '369px'],
            ["style", "width", '916px']
         ],
         "${_linha06}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"africa": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'africa',
      type: 'image',
      rect: ['1px','0px','917px','354px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/africa.png','0px','0px']
   },
   {
      id: 'volta2',
      type: 'image',
      rect: ['14px','167px','34px','35px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/volta.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_volta2}": [
            ["style", "left", '14px'],
            ["style", "top", '167px']
         ],
         "${_africa}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '354px'],
            ["style", "width", '917px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"brasil": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'brasil',
      type: 'image',
      rect: ['0px','0px','917px','354px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/brasil.png','0px','0px']
   },
   {
      id: 'sprite_viajante',
      type: 'rect',
      clip: ['rect(0px 205px 314px 0px)'],
      rect: ['650','48','auto','auto','auto','auto']
   },
   {
      type: 'image',
      id: 'avanca_Copy2',
      rect: ['870px','168px','34px','34px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/avanca.png','0px','0px']
   },
   {
      id: 'volta2',
      type: 'image',
      rect: ['14px','167px','34px','35px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/volta.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'sprite_viajante',
      symbolName: 'sprite_viajante'
   }   ]
   },
   states: {
      "Base State": {
         "${_brasil}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_volta2}": [
            ["style", "left", '14px'],
            ["style", "top", '167px']
         ],
         "${symbolSelector}": [
            ["style", "height", '354px'],
            ["style", "width", '917px']
         ],
         "${_avanca_Copy2}": [
            ["style", "top", '168px'],
            ["style", "left", '870px'],
            ["style", "cursor", 'pointer']
         ],
         "${_sprite_viajante}": [
            ["style", "clip", [0,205,314,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"epidemia_mundo": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'epidemia_mundo',
      type: 'image',
      rect: ['0px','0px','917px','354px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/epidemia_mundo.png','0px','0px']
   },
   {
      type: 'image',
      id: 'avanca_Copy',
      rect: ['870px','168px','34px','34px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/avanca.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_epidemia_mundo}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '354px'],
            ["style", "width", '917px']
         ],
         "${_avanca_Copy}": [
            ["style", "top", '168px'],
            ["style", "left", '870px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"celula_base": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'celula_base',
      type: 'image',
      rect: ['0px','0px','917px','571px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/celula_base.png','0px','0px']
   },
   {
      id: 'celula_down',
      type: 'image',
      rect: ['172px','156px','637px','398px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/celula_down.png','0px','0px']
   },
   {
      id: 'virus_vazio',
      type: 'rect',
      rect: ['17','60','auto','auto','auto','auto']
   },
   {
      id: 'conector',
      type: 'rect',
      rect: ['207','236','auto','auto','auto','auto']
   },
   {
      id: 'virus_vazio2',
      type: 'rect',
      rect: ['612px','137px','auto','auto','auto','auto']
   },
   {
      id: 'celula_up',
      type: 'image',
      rect: ['181px','173px','620px','365px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/celula_up.png','0px','0px']
   },
   {
      id: 'nucleo_celula',
      type: 'rect',
      rect: ['325px','316px','auto','auto','auto','auto']
   },
   {
      id: 'capsula',
      type: 'rect',
      rect: ['53','92','auto','auto','auto','auto']
   },
   {
      id: 'copinho',
      type: 'rect',
      rect: ['58px','100px','auto','auto','auto','auto']
   },
   {
      id: 'bolinhas',
      type: 'rect',
      rect: ['69','104','auto','auto','auto','auto']
   },
   {
      id: 'dna_virus_condensado',
      type: 'rect',
      rect: ['59','106','auto','auto','auto','auto']
   },
   {
      id: 'dna_virus_condensado2',
      type: 'rect',
      rect: ['77','111','auto','auto','auto','auto']
   },
   {
      id: 'dna_viral',
      type: 'rect',
      rect: ['244px','390px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['0','0']]
   },
   {
      id: 'wire_capsula',
      type: 'rect',
      rect: ['51','94','auto','auto','auto','auto']
   },
   {
      id: 'capsula2',
      type: 'rect',
      rect: ['399px','385px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['0','0']]
   },
   {
      id: 'copinho2',
      type: 'rect',
      rect: ['404px','391px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['0','0']]
   },
   {
      id: 'dna_virus_condensado3',
      type: 'rect',
      rect: ['409px','399px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['0','0']]
   },
   {
      id: 'dna_virus_condensado4',
      type: 'rect',
      rect: ['409px','399','auto','auto','auto','auto'],
      transform: [[0,0],['121'],[],['0','0']]
   },
   {
      id: 'item_8',
      type: 'rect',
      clip: ['rect(0px 114px 0px 0px)'],
      rect: ['642px','239px','auto','auto','auto','auto']
   },
   {
      id: 'alerta_1',
      type: 'rect',
      rect: ['11px','177px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['0.468','0.468']]
   },
   {
      id: 'fechar',
      type: 'rect',
      rect: ['869','521','auto','auto','auto','auto']
   },
   {
      id: 'item_5',
      type: 'rect',
      clip: ['rect(0px 171px 0px 0px)'],
      rect: ['520px','422px','auto','auto','auto','auto']
   },
   {
      id: 'item_7',
      type: 'rect',
      clip: ['rect(0px 98px 0px 0px)'],
      rect: ['479px','200px','auto','auto','auto','auto']
   },
   {
      id: 'item_6',
      type: 'rect',
      clip: ['rect(0px 173px 0px 0px)'],
      rect: ['593','343','auto','auto','auto','auto']
   },
   {
      id: 'item_4',
      type: 'rect',
      clip: ['rect(0px 166px 0px 0px)'],
      rect: ['47px','435','auto','auto','auto','auto']
   },
   {
      id: 'item_3a',
      type: 'rect',
      clip: ['rect(0px 147px 0px 0px)'],
      rect: ['293px','206px','auto','auto','auto','auto']
   },
   {
      id: 'item_9',
      type: 'rect',
      clip: ['rect(0px 99px 0px 0px)'],
      rect: ['807','305','auto','auto','auto','auto']
   },
   {
      id: 'item_10',
      type: 'rect',
      clip: ['rect(0px 0px 97px 0px)'],
      rect: ['534','31','auto','auto','auto','auto']
   },
   {
      type: 'image',
      id: 'item_defesas',
      rect: ['158px','49px','342px','109px','auto','auto'],
      clip: ['rect(0px 0px 109px 0px)'],
      fill: ['rgba(0,0,0,0)','images/item_defesas.png','0px','0px']
   },
   {
      id: 'item_2',
      type: 'rect',
      clip: ['rect(0px 137px 0px 0px)'],
      rect: ['50','292','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'copinho2',
      symbolName: 'copinho'
   },
   {
      id: 'dna_viral',
      symbolName: 'dna_viral'
   },
   {
      id: 'dna_virus_condensado3',
      symbolName: 'dna_virus_condensado'
   },
   {
      id: 'nucleo_celula',
      symbolName: 'nucleo_celula'
   },
   {
      id: 'item_3a',
      symbolName: 'item_3a'
   },
   {
      id: 'item_4',
      symbolName: 'intem_4'
   },
   {
      id: 'item_2',
      symbolName: 'item_2'
   },
   {
      id: 'item_10',
      symbolName: 'item_10'
   },
   {
      id: 'item_9',
      symbolName: 'item_9'
   },
   {
      id: 'item_6',
      symbolName: 'item_6'
   },
   {
      id: 'dna_virus_condensado4',
      symbolName: 'dna_virus_condensado'
   },
   {
      id: 'capsula',
      symbolName: 'capsula'
   },
   {
      id: 'bolinhas',
      symbolName: 'bolinhas'
   },
   {
      id: 'copinho',
      symbolName: 'copinho'
   },
   {
      id: 'dna_virus_condensado2',
      symbolName: 'dna_virus_condensado2'
   },
   {
      id: 'capsula2',
      symbolName: 'capsula'
   },
   {
      id: 'alerta_1',
      symbolName: 'alerta'
   },
   {
      id: 'virus_vazio',
      symbolName: 'virus_vazio'
   },
   {
      id: 'item_8',
      symbolName: 'item_8'
   },
   {
      id: 'conector',
      symbolName: 'conector'
   },
   {
      id: 'dna_virus_condensado',
      symbolName: 'dna_virus_condensado'
   },
   {
      id: 'wire_capsula',
      symbolName: 'wire_capsula'
   },
   {
      id: 'fechar',
      symbolName: 'fechar'
   },
   {
      id: 'item_7',
      symbolName: 'item_7'
   },
   {
      id: 'item_5',
      symbolName: 'item_5'
   },
   {
      id: 'virus_vazio2',
      symbolName: 'virus_vazio'
   }   ]
   },
   states: {
      "Base State": {
         "${_item_defesas}": [
            ["style", "top", '49px'],
            ["style", "left", '158px'],
            ["style", "clip", [0,0,109,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_item_7}": [
            ["style", "top", '200px'],
            ["style", "left", '479px'],
            ["style", "clip", [0,98,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_item_9}": [
            ["style", "clip", [0,99,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_item_6}": [
            ["style", "clip", [0,173,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_item_8}": [
            ["style", "top", '239px'],
            ["style", "left", '642px'],
            ["style", "clip", [0,114,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_virus_vazio}": [
            ["style", "top", '62px'],
            ["style", "left", '17px']
         ],
         "${_capsula2}": [
            ["style", "top", '385px'],
            ["transform", "scaleY", '0'],
            ["style", "left", '399px'],
            ["transform", "scaleX", '0']
         ],
         "${_item_3a}": [
            ["style", "top", '206px'],
            ["style", "left", '293px'],
            ["style", "clip", [0,147,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_virus_vazio2}": [
            ["style", "left", '577px'],
            ["style", "top", '201px']
         ],
         "${symbolSelector}": [
            ["style", "height", '571px'],
            ["style", "width", '917px']
         ],
         "${_item_5}": [
            ["style", "top", '422px'],
            ["style", "left", '520px'],
            ["style", "clip", [0,171,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_dna_virus_condensado2}": [
            ["style", "left", '77px'],
            ["style", "top", '111px']
         ],
         "${_bolinhas}": [
            ["style", "left", '69px'],
            ["style", "top", '104px']
         ],
         "${_dna_virus_condensado}": [
            ["style", "left", '59px'],
            ["style", "top", '106px']
         ],
         "${_dna_viral}": [
            ["transform", "scaleX", '0'],
            ["style", "top", '390px'],
            ["style", "left", '244px'],
            ["transform", "scaleY", '0']
         ],
         "${_celula_up}": [
            ["style", "left", '181px'],
            ["style", "top", '173px']
         ],
         "${_wire_capsula}": [
            ["style", "left", '51px'],
            ["style", "top", '94px']
         ],
         "${_dna_virus_condensado3}": [
            ["style", "top", '399px'],
            ["transform", "scaleY", '0'],
            ["style", "left", '409px'],
            ["transform", "scaleX", '0']
         ],
         "${_item_2}": [
            ["style", "clip", [0,137,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_dna_virus_condensado4}": [
            ["style", "top", '399px'],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '121deg'],
            ["transform", "scaleX", '0'],
            ["style", "left", '400px']
         ],
         "${_nucleo_celula}": [
            ["style", "left", '325px'],
            ["style", "top", '316px']
         ],
         "${_item_4}": [
            ["style", "clip", [0,166,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_alerta_1}": [
            ["style", "top", '177px'],
            ["style", "left", '11px'],
            ["transform", "scaleY", '0.46809'],
            ["transform", "scaleX", '0.46809']
         ],
         "${_copinho2}": [
            ["style", "top", '391px'],
            ["transform", "scaleY", '0'],
            ["style", "left", '404px'],
            ["transform", "scaleX", '0']
         ],
         "${_conector}": [
            ["style", "left", '207px'],
            ["style", "top", '236px']
         ],
         "${_item_10}": [
            ["style", "clip", [0,0,97,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_celula_down}": [
            ["style", "left", '172px'],
            ["style", "top", '156px']
         ],
         "${_celula_base}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_capsula}": [
            ["style", "left", '53px'],
            ["style", "top", '92px']
         ],
         "${_copinho}": [
            ["style", "left", '58px'],
            ["style", "top", '100px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9421,
         autoPlay: true,
         timeline: [
            { id: "eid249", tween: [ "style", "${_dna_virus_condensado3}", "left", '515px', { fromValue: '409px'}], position: 4750, duration: 922 },
            { id: "eid269", tween: [ "style", "${_dna_virus_condensado3}", "left", '619px', { fromValue: '515px'}], position: 6000, duration: 750 },
            { id: "eid277", tween: [ "style", "${_dna_virus_condensado3}", "left", '654px', { fromValue: '619px'}], position: 7458, duration: 428 },
            { id: "eid291", tween: [ "style", "${_dna_virus_condensado3}", "left", '823px', { fromValue: '654px'}], position: 7886, duration: 864 },
            { id: "eid250", tween: [ "style", "${_dna_virus_condensado3}", "top", '317px', { fromValue: '399px'}], position: 4750, duration: 922 },
            { id: "eid270", tween: [ "style", "${_dna_virus_condensado3}", "top", '216px', { fromValue: '317px'}], position: 6000, duration: 750 },
            { id: "eid278", tween: [ "style", "${_dna_virus_condensado3}", "top", '184px', { fromValue: '216px'}], position: 7458, duration: 428 },
            { id: "eid292", tween: [ "style", "${_dna_virus_condensado3}", "top", '217px', { fromValue: '184px'}], position: 7886, duration: 864 },
            { id: "eid241", tween: [ "transform", "${_dna_viral}", "scaleX", '1', { fromValue: '0'}], position: 3103, duration: 716 },
            { id: "eid300", tween: [ "style", "${_item_8}", "clip", [0,114,37,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,114,0,0]}], position: 6071, duration: 679 },
            { id: "eid301", tween: [ "style", "${_item_8}", "clip", [0,114,122,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,114,37,0]}], position: 6750, duration: 1000 },
            { id: "eid263", tween: [ "transform", "${_copinho2}", "scaleX", '1', { fromValue: '0'}], position: 4750, duration: 922 },
            { id: "eid261", tween: [ "transform", "${_dna_virus_condensado4}", "scaleX", '1', { fromValue: '0'}], position: 4750, duration: 922 },
            { id: "eid251", tween: [ "style", "${_capsula2}", "left", '542px', { fromValue: '399px'}], position: 4750, duration: 922 },
            { id: "eid265", tween: [ "style", "${_capsula2}", "left", '612px', { fromValue: '542px'}], position: 5672, duration: 1078 },
            { id: "eid283", tween: [ "style", "${_capsula2}", "left", '647px', { fromValue: '612px'}], position: 7458, duration: 428 },
            { id: "eid285", tween: [ "style", "${_capsula2}", "left", '816px', { fromValue: '647px'}], position: 7886, duration: 864 },
            { id: "eid196", tween: [ "style", "${_conector}", "left", '273px', { fromValue: '207px'}], position: 1500, duration: 796 },
            { id: "eid240", tween: [ "style", "${_dna_viral}", "left", '285px', { fromValue: '244px'}], position: 3103, duration: 716 },
            { id: "eid243", tween: [ "style", "${_dna_viral}", "left", '388px', { fromValue: '285px'}], position: 3819, duration: 431 },
            { id: "eid246", tween: [ "style", "${_dna_viral}", "left", '416px', { fromValue: '388px'}], position: 4250, duration: 500 },
            { id: "eid188", tween: [ "style", "${_capsula}", "top", '184px', { fromValue: '92px'}], position: 500, duration: 1000 },
            { id: "eid199", tween: [ "style", "${_capsula}", "top", '228px', { fromValue: '184px'}], position: 1500, duration: 796 },
            { id: "eid217", tween: [ "style", "${_capsula}", "top", '253px', { fromValue: '228px'}], position: 2296, duration: 204 },
            { id: "eid312", tween: [ "style", "${_item_3a}", "clip", [-13,147,39,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,147,0,0]}], position: 500, duration: 1000 },
            { id: "eid313", tween: [ "style", "${_item_3a}", "clip", [0,147,102,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-13,147,39,0]}], position: 1500, duration: 796 },
            { id: "eid182", tween: [ "style", "${_virus_vazio}", "top", '152px', { fromValue: '62px'}], position: 500, duration: 1000 },
            { id: "eid193", tween: [ "style", "${_virus_vazio}", "top", '196px', { fromValue: '152px'}], position: 1500, duration: 796 },
            { id: "eid310", tween: [ "style", "${_item_4}", "clip", [0,166,41,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,166,0,0]}], position: 2854, duration: 250 },
            { id: "eid311", tween: [ "style", "${_item_4}", "clip", [0,166,128,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,166,41,0]}], position: 3104, duration: 1146 },
            { id: "eid304", tween: [ "style", "${_item_5}", "clip", [-13,171,33,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,171,0,0]}], position: 3750, duration: 500 },
            { id: "eid305", tween: [ "style", "${_item_5}", "clip", [-13,171,87,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-13,171,33,0]}], position: 4250, duration: 500 },
            { id: "eid258", tween: [ "transform", "${_dna_virus_condensado3}", "scaleY", '1.07', { fromValue: '0'}], position: 4750, duration: 922 },
            { id: "eid222", tween: [ "style", "${_copinho}", "top", '190px', { fromValue: '100px'}], position: 500, duration: 1000 },
            { id: "eid224", tween: [ "style", "${_copinho}", "top", '234px', { fromValue: '190px'}], position: 1500, duration: 796 },
            { id: "eid226", tween: [ "style", "${_copinho}", "top", '262px', { fromValue: '234px'}], position: 2296, duration: 204 },
            { id: "eid228", tween: [ "style", "${_copinho}", "top", '313px', { fromValue: '262px'}], position: 2500, duration: 198 },
            { id: "eid308", tween: [ "style", "${_item_7}", "clip", [-11,98,32,-22], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,98,0,0]}], position: 4750, duration: 922 },
            { id: "eid309", tween: [ "style", "${_item_7}", "clip", [-11,98,116,-22], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-11,98,32,-22]}], position: 5672, duration: 753 },
            { id: "eid180", tween: [ "style", "${_dna_virus_condensado}", "top", '198px', { fromValue: '106px'}], position: 500, duration: 1000 },
            { id: "eid203", tween: [ "style", "${_dna_virus_condensado}", "top", '242px', { fromValue: '198px'}], position: 1500, duration: 796 },
            { id: "eid215", tween: [ "style", "${_dna_virus_condensado}", "top", '267px', { fromValue: '242px'}], position: 2296, duration: 204 },
            { id: "eid230", tween: [ "style", "${_dna_virus_condensado}", "top", '318px', { fromValue: '267px'}], position: 2500, duration: 198 },
            { id: "eid234", tween: [ "style", "${_dna_virus_condensado}", "top", '363px', { fromValue: '318px'}], position: 2698, duration: 203 },
            { id: "eid315", tween: [ "style", "${_item_9}", "clip", [-11,99,39,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,99,0,0]}], position: 6750, duration: 1136 },
            { id: "eid316", tween: [ "style", "${_item_9}", "clip", [0,99,98,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-11,99,39,0]}], position: 7886, duration: 864 },
            { id: "eid187", tween: [ "style", "${_capsula}", "left", '146px', { fromValue: '53px'}], position: 500, duration: 1000 },
            { id: "eid198", tween: [ "style", "${_capsula}", "left", '212px', { fromValue: '146px'}], position: 1500, duration: 796 },
            { id: "eid216", tween: [ "style", "${_capsula}", "left", '242px', { fromValue: '212px'}], position: 2296, duration: 204 },
            { id: "eid179", tween: [ "style", "${_dna_virus_condensado}", "left", '152px', { fromValue: '59px'}], position: 500, duration: 1000 },
            { id: "eid202", tween: [ "style", "${_dna_virus_condensado}", "left", '218px', { fromValue: '152px'}], position: 1500, duration: 796 },
            { id: "eid214", tween: [ "style", "${_dna_virus_condensado}", "left", '248px', { fromValue: '218px'}], position: 2296, duration: 204 },
            { id: "eid229", tween: [ "style", "${_dna_virus_condensado}", "left", '228px', { fromValue: '248px'}], position: 2500, duration: 198 },
            { id: "eid233", tween: [ "style", "${_dna_virus_condensado}", "left", '234px', { fromValue: '228px'}], position: 2698, duration: 203 },
            { id: "eid317", tween: [ "style", "${_item_10}", "clip", [0,39,97,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,97,0]}], position: 7886, duration: 864 },
            { id: "eid318", tween: [ "style", "${_item_10}", "clip", [0,334,97,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,39,97,0]}], position: 8750, duration: 671 },
            { id: "eid186", tween: [ "style", "${_dna_virus_condensado2}", "top", '203px', { fromValue: '111px'}], position: 500, duration: 1000 },
            { id: "eid195", tween: [ "style", "${_dna_virus_condensado2}", "top", '247px', { fromValue: '203px'}], position: 1500, duration: 796 },
            { id: "eid213", tween: [ "style", "${_dna_virus_condensado2}", "top", '272px', { fromValue: '247px'}], position: 2296, duration: 204 },
            { id: "eid232", tween: [ "style", "${_dna_virus_condensado2}", "top", '323px', { fromValue: '272px'}], position: 2500, duration: 198 },
            { id: "eid236", tween: [ "style", "${_dna_virus_condensado2}", "top", '368px', { fromValue: '323px'}], position: 2698, duration: 203 },
            { id: "eid238", tween: [ "style", "${_dna_virus_condensado2}", "top", '405px', { fromValue: '368px'}], position: 2901, duration: 202 },
            { id: "eid262", tween: [ "transform", "${_dna_virus_condensado4}", "scaleY", '1', { fromValue: '0'}], position: 4750, duration: 922 },
            { id: "eid197", tween: [ "style", "${_conector}", "top", '280px', { fromValue: '236px'}], position: 1500, duration: 796 },
            { id: "eid184", tween: [ "style", "${_wire_capsula}", "top", '186px', { fromValue: '94px'}], position: 500, duration: 1000 },
            { id: "eid205", tween: [ "style", "${_wire_capsula}", "top", '230px', { fromValue: '186px'}], position: 1500, duration: 796 },
            { id: "eid211", tween: [ "style", "${_wire_capsula}", "top", '255px', { fromValue: '230px'}], position: 2296, duration: 204 },
            { id: "eid242", tween: [ "transform", "${_dna_viral}", "scaleY", '1', { fromValue: '0'}], position: 3103, duration: 716 },
            { id: "eid274", tween: [ "style", "${_virus_vazio2}", "left", '612px', { fromValue: '577px'}], position: 6750, duration: 708 },
            { id: "eid289", tween: [ "style", "${_virus_vazio2}", "left", '781px', { fromValue: '612px'}], position: 7886, duration: 864 },
            { id: "eid450", tween: [ "style", "${_item_defesas}", "clip", [0,335,109,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,109,0]}], position: 0, duration: 500 },
            { id: "eid451", tween: [ "style", "${_item_2}", "clip", [0,137,41,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,137,0,0]}], position: 0, duration: 500 },
            { id: "eid452", tween: [ "style", "${_item_2}", "clip", [0,137,93,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,137,41,0]}], position: 500, duration: 1000 },
            { id: "eid264", tween: [ "transform", "${_copinho2}", "scaleY", '1', { fromValue: '0'}], position: 4750, duration: 922 },
            { id: "eid178", tween: [ "style", "${_bolinhas}", "top", '196px', { fromValue: '104px'}], position: 500, duration: 1000 },
            { id: "eid201", tween: [ "style", "${_bolinhas}", "top", '240px', { fromValue: '196px'}], position: 1500, duration: 796 },
            { id: "eid219", tween: [ "style", "${_bolinhas}", "top", '265px', { fromValue: '240px'}], position: 2296, duration: 204 },
            { id: "eid253", tween: [ "style", "${_dna_virus_condensado4}", "left", '516px', { fromValue: '400px'}], position: 4750, duration: 922 },
            { id: "eid271", tween: [ "style", "${_dna_virus_condensado4}", "left", '630px', { fromValue: '516px'}], position: 6000, duration: 750 },
            { id: "eid279", tween: [ "style", "${_dna_virus_condensado4}", "left", '665px', { fromValue: '630px'}], position: 7458, duration: 428 },
            { id: "eid293", tween: [ "style", "${_dna_virus_condensado4}", "left", '834px', { fromValue: '665px'}], position: 7886, duration: 864 },
            { id: "eid276", tween: [ "style", "${_virus_vazio2}", "top", '137px', { fromValue: '201px'}], position: 6750, duration: 708 },
            { id: "eid290", tween: [ "style", "${_virus_vazio2}", "top", '170px', { fromValue: '137px'}], position: 7886, duration: 864 },
            { id: "eid255", tween: [ "style", "${_copinho2}", "left", '542px', { fromValue: '404px'}], position: 4750, duration: 922 },
            { id: "eid267", tween: [ "style", "${_copinho2}", "left", '617px', { fromValue: '542px'}], position: 5802, duration: 948 },
            { id: "eid281", tween: [ "style", "${_copinho2}", "left", '652px', { fromValue: '617px'}], position: 7458, duration: 428 },
            { id: "eid287", tween: [ "style", "${_copinho2}", "left", '821px', { fromValue: '652px'}], position: 7886, duration: 864 },
            { id: "eid259", tween: [ "transform", "${_capsula2}", "scaleX", '1', { fromValue: '0'}], position: 4750, duration: 922 },
            { id: "eid181", tween: [ "style", "${_virus_vazio}", "left", '110px', { fromValue: '17px'}], position: 500, duration: 1000 },
            { id: "eid192", tween: [ "style", "${_virus_vazio}", "left", '176px', { fromValue: '110px'}], position: 1500, duration: 796 },
            { id: "eid252", tween: [ "style", "${_capsula2}", "top", '299px', { fromValue: '385px'}], position: 4750, duration: 922 },
            { id: "eid266", tween: [ "style", "${_capsula2}", "top", '201px', { fromValue: '299px'}], position: 5672, duration: 1078 },
            { id: "eid284", tween: [ "style", "${_capsula2}", "top", '169px', { fromValue: '201px'}], position: 7458, duration: 428 },
            { id: "eid286", tween: [ "style", "${_capsula2}", "top", '202px', { fromValue: '169px'}], position: 7886, duration: 864 },
            { id: "eid260", tween: [ "transform", "${_capsula2}", "scaleY", '1', { fromValue: '0'}], position: 4750, duration: 922 },
            { id: "eid257", tween: [ "transform", "${_dna_virus_condensado3}", "scaleX", '1', { fromValue: '0'}], position: 4750, duration: 922 },
            { id: "eid256", tween: [ "style", "${_copinho2}", "top", '358px', { fromValue: '391px'}], position: 4750, duration: 922 },
            { id: "eid268", tween: [ "style", "${_copinho2}", "top", '207px', { fromValue: '358px'}], position: 5802, duration: 948 },
            { id: "eid282", tween: [ "style", "${_copinho2}", "top", '175px', { fromValue: '207px'}], position: 7458, duration: 428 },
            { id: "eid288", tween: [ "style", "${_copinho2}", "top", '208px', { fromValue: '175px'}], position: 7886, duration: 864 },
            { id: "eid185", tween: [ "style", "${_dna_virus_condensado2}", "left", '170px', { fromValue: '77px'}], position: 500, duration: 1000 },
            { id: "eid194", tween: [ "style", "${_dna_virus_condensado2}", "left", '236px', { fromValue: '170px'}], position: 1500, duration: 796 },
            { id: "eid212", tween: [ "style", "${_dna_virus_condensado2}", "left", '266px', { fromValue: '236px'}], position: 2296, duration: 204 },
            { id: "eid231", tween: [ "style", "${_dna_virus_condensado2}", "left", '246px', { fromValue: '266px'}], position: 2500, duration: 198 },
            { id: "eid235", tween: [ "style", "${_dna_virus_condensado2}", "left", '252px', { fromValue: '246px'}], position: 2698, duration: 203 },
            { id: "eid237", tween: [ "style", "${_dna_virus_condensado2}", "left", '244px', { fromValue: '252px'}], position: 2901, duration: 202 },
            { id: "eid221", tween: [ "style", "${_copinho}", "left", '152px', { fromValue: '58px'}], position: 500, duration: 1000 },
            { id: "eid223", tween: [ "style", "${_copinho}", "left", '218px', { fromValue: '152px'}], position: 1500, duration: 796 },
            { id: "eid225", tween: [ "style", "${_copinho}", "left", '247px', { fromValue: '218px'}], position: 2296, duration: 204 },
            { id: "eid227", tween: [ "style", "${_copinho}", "left", '227px', { fromValue: '247px'}], position: 2500, duration: 198 },
            { id: "eid177", tween: [ "style", "${_bolinhas}", "left", '162px', { fromValue: '69px'}], position: 500, duration: 1000 },
            { id: "eid200", tween: [ "style", "${_bolinhas}", "left", '228px', { fromValue: '162px'}], position: 1500, duration: 796 },
            { id: "eid218", tween: [ "style", "${_bolinhas}", "left", '258px', { fromValue: '228px'}], position: 2296, duration: 204 },
            { id: "eid183", tween: [ "style", "${_wire_capsula}", "left", '144px', { fromValue: '51px'}], position: 500, duration: 1000 },
            { id: "eid204", tween: [ "style", "${_wire_capsula}", "left", '210px', { fromValue: '144px'}], position: 1500, duration: 796 },
            { id: "eid210", tween: [ "style", "${_wire_capsula}", "left", '240px', { fromValue: '210px'}], position: 2296, duration: 204 },
            { id: "eid254", tween: [ "style", "${_dna_virus_condensado4}", "top", '344px', { fromValue: '399px'}], position: 4750, duration: 922 },
            { id: "eid272", tween: [ "style", "${_dna_virus_condensado4}", "top", '215px', { fromValue: '344px'}], position: 6000, duration: 750 },
            { id: "eid280", tween: [ "style", "${_dna_virus_condensado4}", "top", '183px', { fromValue: '215px'}], position: 7458, duration: 428 },
            { id: "eid294", tween: [ "style", "${_dna_virus_condensado4}", "top", '216px', { fromValue: '183px'}], position: 7886, duration: 864 },
            { id: "eid302", tween: [ "style", "${_item_6}", "clip", [0,173,37,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,173,0,0]}], position: 4249, duration: 501 },
            { id: "eid303", tween: [ "style", "${_item_6}", "clip", [0,173,105,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,173,37,0]}], position: 4750, duration: 500 }         ]
      }
   }
},
"virus_vazio": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'virus_vazio',
      type: 'image',
      rect: ['0px','0px','126px','124px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_vazio.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '124px'],
            ["style", "width", '126px']
         ],
         "${_virus_vazio}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3500,
         autoPlay: true,
         timeline: [
            { id: "eid189", tween: [ "transform", "${_virus_vazio}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 3500 }         ]
      }
   }
},
"linha01": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'linha01',
      type: 'image',
      rect: ['0px','0px','916px','296px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/linha01.png','0px','0px']
   },
   {
      id: 'alerta2',
      type: 'rect',
      rect: ['348px','52px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'alerta2',
      symbolName: 'alerta'
   }   ]
   },
   states: {
      "Base State": {
         "${_alerta2}": [
            ["style", "left", '348px'],
            ["style", "top", '52px']
         ],
         "${_linha01}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '296px'],
            ["style", "width", '916px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"fechar": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'fechar',
      type: 'image',
      rect: ['0px','0px','33px','33px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/fechar.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_fechar}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '33px'],
            ["style", "width", '33px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"conector": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'conector',
      type: 'image',
      rect: ['0px','0px','26px','27px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/conector.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_conector}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '26px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"wire_capsula": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'wire_capsula',
      type: 'image',
      rect: ['0px','0px','55px','55px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wire_capsula.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_wire_capsula}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '55px'],
            ["style", "width", '55px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3500,
         autoPlay: true,
         timeline: [
            { id: "eid209", tween: [ "transform", "${_wire_capsula}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 3500 }         ]
      }
   }
},
"dna_virus_condensado2": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'dna_virus_condensado2',
      type: 'image',
      rect: ['0px','0px','20px','28px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/dna_virus_condensado.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_dna_virus_condensado2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '28px'],
            ["style", "width", '20px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3500,
         autoPlay: true,
         timeline: [
            { id: "eid208", tween: [ "transform", "${_dna_virus_condensado2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 3500 }         ]
      }
   }
},
"dna_virus_condensado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'dna_virus_condensado',
      rect: ['4px','2px','20px','28px','auto','auto'],
      transform: [[0,0],['-17']],
      fill: ['rgba(0,0,0,0)','images/dna_virus_condensado.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_dna_virus_condensado}": [
            ["style", "top", '2px'],
            ["style", "left", '4px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '33px'],
            ["style", "width", '27px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3500,
         autoPlay: true,
         timeline: [
            { id: "eid207", tween: [ "transform", "${_dna_virus_condensado}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 3500 }         ]
      }
   }
},
"bolinhas": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'bolinhas2',
      type: 'image',
      rect: ['0px','0px','22px','35px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bolinhas.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_bolinhas2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '35px'],
            ["style", "width", '22px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3500,
         autoPlay: true,
         timeline: [
            { id: "eid191", tween: [ "transform", "${_bolinhas2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 3500 }         ]
      }
   }
},
"capsula": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'capsula',
      type: 'image',
      rect: ['0px','0px','53px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/capsula.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_capsula}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '60px'],
            ["style", "width", '53px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3500,
         autoPlay: true,
         timeline: [
            { id: "eid190", tween: [ "transform", "${_capsula}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 3500 }         ]
      }
   }
},
"item_3": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'item_3',
      type: 'image',
      rect: ['0px','0px','136px','78px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/item_3.png','0px','0px']
   },
   {
      id: 'alerta_3Copy5',
      type: 'rect',
      rect: ['-9px','-11px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['0.468','0.468']]
   }],
   symbolInstances: [
   {
      id: 'alerta_3Copy5',
      symbolName: 'alerta'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '78px'],
            ["style", "width", '136px']
         ],
         "${_alerta_3Copy5}": [
            ["transform", "scaleX", '0.46809'],
            ["style", "top", '-11px'],
            ["transform", "scaleY", '0.46809'],
            ["style", "left", '-9px']
         ],
         "${_item_3}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"nucleo_celula": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'nucleo_celula',
      type: 'image',
      rect: ['0px','0px','200px','201px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/nucleo_celula.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_nucleo_celula}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '201px'],
            ["style", "width", '200px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"item_5": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'item_5',
      type: 'image',
      rect: ['0px','0px','171px','84px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/item_5.png','0px','0px']
   },
   {
      id: 'alerta_5',
      type: 'rect',
      transform: [[0,0],[],[],['0.468','0.468']],
      rect: ['-6px','-9px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'alerta_5',
      symbolName: 'alerta'
   }   ]
   },
   states: {
      "Base State": {
         "${_item_5}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '84px'],
            ["style", "width", '171px']
         ],
         "${_alerta_5}": [
            ["transform", "scaleX", '0.46809'],
            ["style", "top", '-9px'],
            ["transform", "scaleY", '0.46809'],
            ["style", "left", '-6px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"item_7": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'item_7',
      type: 'image',
      rect: ['0px','0px','98px','113px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/item_7.png','0px','0px']
   },
   {
      id: 'alerta_7',
      type: 'rect',
      transform: [[0,0],[],[],['0.468','0.468']],
      rect: ['-6px','-10px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'alerta_7',
      symbolName: 'alerta'
   }   ]
   },
   states: {
      "Base State": {
         "${_alerta_7}": [
            ["transform", "scaleX", '0.46809'],
            ["style", "top", '-10px'],
            ["transform", "scaleY", '0.46809'],
            ["style", "left", '-6px']
         ],
         "${_item_7}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '113px'],
            ["style", "width", '98px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"copinho": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'copinho',
      type: 'image',
      rect: ['0px','0px','42px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/copinho.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_copinho}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '48px'],
            ["style", "width", '42px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3500,
         autoPlay: true,
         timeline: [
            { id: "eid220", tween: [ "transform", "${_copinho}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 3500 }         ]
      }
   }
},
"dna_viral": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'dna_viral',
      type: 'image',
      rect: ['0px','0px','20px','49px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/dna_viral.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_dna_viral}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '49px'],
            ["style", "width", '20px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"item_8": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'item_8',
      type: 'image',
      rect: ['0px','0px','114px','123px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/item_8.png','0px','0px']
   },
   {
      id: 'alerta_8',
      type: 'rect',
      transform: [[0,0],[],[],['0.468','0.468']],
      rect: ['26px','-5px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'alerta_8',
      symbolName: 'alerta'
   }   ]
   },
   states: {
      "Base State": {
         "${_alerta_8}": [
            ["transform", "scaleX", '0.46809'],
            ["style", "top", '-5px'],
            ["transform", "scaleY", '0.46809'],
            ["style", "left", '26px']
         ],
         "${_item_8}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '123px'],
            ["style", "width", '114px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"item_6": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','173px','105px','auto','auto'],
      id: 'item_6',
      type: 'image',
      clip: ['rect(0px 173pxpx 105pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','images/item_6.png','0px','0px']
   },
   {
      id: 'alerta_6',
      type: 'rect',
      transform: [[0,0],[],[],['0.468','0.468']],
      rect: ['-4px','-5px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'alerta_6',
      symbolName: 'alerta'
   }   ]
   },
   states: {
      "Base State": {
         "${_item_6}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,173,105,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '105px'],
            ["style", "width", '173px']
         ],
         "${_alerta_6}": [
            ["transform", "scaleX", '0.46809'],
            ["style", "top", '-5px'],
            ["transform", "scaleY", '0.46809'],
            ["style", "left", '-4px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"intem_4": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'item_4',
      type: 'image',
      rect: ['0px','0px','166px','124px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/item_4.png','0px','0px']
   },
   {
      id: 'alerta_4',
      type: 'rect',
      transform: [[0,0],[],[],['0.468','0.468']],
      rect: ['124px','-6px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'alerta_4',
      symbolName: 'alerta'
   }   ]
   },
   states: {
      "Base State": {
         "${_alerta_4}": [
            ["style", "top", '-6px'],
            ["style", "left", '124px'],
            ["transform", "scaleY", '0.46809'],
            ["transform", "scaleX", '0.46809']
         ],
         "${symbolSelector}": [
            ["style", "height", '124px'],
            ["style", "width", '166px']
         ],
         "${_item_4}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"item_3a": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'item_34',
      type: 'image',
      rect: ['0px','0px','147px','92px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/item_3.png','0px','0px']
   },
   {
      id: 'alerta_3a',
      type: 'rect',
      transform: [[0,0],[],[],['0.468','0.468']],
      rect: ['0px','-6px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'alerta_3a',
      symbolName: 'alerta'
   }   ]
   },
   states: {
      "Base State": {
         "${_alerta_3a}": [
            ["style", "top", '-6px'],
            ["transform", "scaleX", '0.46809'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '0.46809']
         ],
         "${_item_34}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '92px'],
            ["style", "width", '147px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"item_9": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'item_9',
      type: 'image',
      rect: ['0px','0px','99px','91px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/item_9.png','0px','0px']
   },
   {
      id: 'alerta_9',
      type: 'rect',
      rect: ['-3px','-7px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['0.468','0.468']]
   }],
   symbolInstances: [
   {
      id: 'alerta_9',
      symbolName: 'alerta'
   }   ]
   },
   states: {
      "Base State": {
         "${_item_9}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_alerta_9}": [
            ["style", "top", '-7px'],
            ["style", "left", '-3px'],
            ["transform", "scaleY", '0.46809'],
            ["transform", "scaleX", '0.46809']
         ],
         "${symbolSelector}": [
            ["style", "height", '91px'],
            ["style", "width", '99px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"item_10": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'item_10',
      type: 'image',
      rect: ['0px','0px','335px','97px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/item_10.png','0px','0px']
   },
   {
      id: 'alerta_10',
      type: 'rect',
      rect: ['-6px','-4px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['0.468','0.468']]
   }],
   symbolInstances: [
   {
      id: 'alerta_10',
      symbolName: 'alerta'
   }   ]
   },
   states: {
      "Base State": {
         "${_alerta_10}": [
            ["style", "top", '-4px'],
            ["style", "left", '-6px'],
            ["transform", "scaleY", '0.46809'],
            ["transform", "scaleX", '0.46809']
         ],
         "${_item_10}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '97px'],
            ["style", "width", '335px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"abertura": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'abertura',
      type: 'image',
      rect: ['0px','0px','917px','571px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/abertura.png','0px','0px']
   },
   {
      id: 'virus_gigante',
      type: 'rect',
      rect: ['537px','208','auto','auto','auto','auto']
   },
   {
      rect: ['214px','435px','158px','44px','auto','auto'],
      id: 'comecar',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/comecar.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'virus_gigante',
      symbolName: 'virus_gigante'
   }   ]
   },
   states: {
      "Base State": {
         "${_abertura}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '571px'],
            ["style", "width", '917px']
         ],
         "${_virus_gigante}": [
            ["style", "left", '537px']
         ],
         "${_comecar}": [
            ["style", "top", '435px'],
            ["style", "left", '214px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"virus_gigante": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'virus_gigante',
      type: 'image',
      rect: ['0px','0px','502px','498px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_gigante.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_virus_gigante}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '498px'],
            ["style", "width", '502px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         timeline: [
            { id: "eid334", tween: [ "transform", "${_virus_gigante}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 5000 }         ]
      }
   }
},
"sprite_campones": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'sprite_campones',
      rect: ['0px','0px','1245px','311px','auto','auto'],
      clip: ['rect(0px 179px 311px 0px)'],
      fill: ['rgba(0,0,0,0)','images/sprite_campones.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '311px'],
            ["style", "width", '1245px']
         ],
         "${_sprite_campones}": [
            ["style", "top", '0px'],
            ["style", "clip", [0,179,311,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [-180,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
            { id: "eid427", tween: [ "style", "${_sprite_campones}", "clip", [0,179,311,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,179,311,0]}], position: 0, duration: 0 },
            { id: "eid429", tween: [ "style", "${_sprite_campones}", "clip", [0,179,311,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,179,311,0]}], position: 500, duration: 0 },
            { id: "eid431", tween: [ "style", "${_sprite_campones}", "clip", [0,179,311,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,179,311,0]}], position: 1000, duration: 0 },
            { id: "eid433", tween: [ "style", "${_sprite_campones}", "clip", [0,179,311,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,179,311,0]}], position: 1500, duration: 0 },
            { id: "eid428", tween: [ "style", "${_sprite_campones}", "background-position", [-180,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-180,0]}], position: 0, duration: 0 },
            { id: "eid430", tween: [ "style", "${_sprite_campones}", "background-position", [-358,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-180,0]}], position: 500, duration: 0 },
            { id: "eid432", tween: [ "style", "${_sprite_campones}", "background-position", [-180,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-358,0]}], position: 1000, duration: 0 },
            { id: "eid434", tween: [ "style", "${_sprite_campones}", "background-position", [-358,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-180,0]}], position: 1500, duration: 0 }         ]
      }
   }
},
"sprite_viajante": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'sprite_viajante2',
      rect: ['0px','0px','440px','314px','auto','auto'],
      clip: ['rect(0px 212px 305px 0px)'],
      fill: ['rgba(0,0,0,0)','images/sprite_viajante.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '314px'],
            ["style", "width", '440px']
         ],
         "${_sprite_viajante2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,212,305,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [-7,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
            { id: "eid435", tween: [ "style", "${_sprite_viajante2}", "clip", [0,212,305,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,212,305,0]}], position: 0, duration: 0 },
            { id: "eid437", tween: [ "style", "${_sprite_viajante2}", "clip", [0,212,305,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,212,305,0]}], position: 500, duration: 0 },
            { id: "eid440", tween: [ "style", "${_sprite_viajante2}", "clip", [0,212,305,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,212,305,0]}], position: 1000, duration: 0 },
            { id: "eid442", tween: [ "style", "${_sprite_viajante2}", "clip", [0,212,305,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,212,305,0]}], position: 1500, duration: 0 },
            { id: "eid436", tween: [ "style", "${_sprite_viajante2}", "background-position", [-7,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-7,0]}], position: 0, duration: 0 },
            { id: "eid438", tween: [ "style", "${_sprite_viajante2}", "background-position", [-234,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-7,0]}], position: 500, duration: 0 },
            { id: "eid439", tween: [ "style", "${_sprite_viajante2}", "background-position", [-7,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-100,0]}], position: 1000, duration: 0 },
            { id: "eid441", tween: [ "style", "${_sprite_viajante2}", "background-position", [-234,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1500, duration: 0 }         ]
      }
   }
},
"volta": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'volta2',
      rect: ['0px','0px','34px','35px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/volta.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_volta2}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '35px'],
            ["style", "width", '34px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"norte": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'norte',
      type: 'image',
      rect: ['0px','0px','917px','354px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/norte.png','0px','0px']
   },
   {
      id: 'sprite_campones',
      type: 'rect',
      rect: ['734px','42px','auto','auto','auto','auto']
   },
   {
      id: 'volta2',
      type: 'image',
      rect: ['14px','171px','34px','35px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/volta.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'sprite_campones',
      symbolName: 'sprite_campones'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '354px'],
            ["style", "width", '917px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"item_2": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'item_2',
      type: 'image',
      rect: ['0px','0px','124px','111px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/item_2.png','0px','0px']
   },
   {
      id: 'alerta_2',
      type: 'rect',
      transform: [[0,0],[],[],['0.468','0.468']],
      rect: ['82px','-3px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'alerta_2',
      symbolName: 'alerta'
   }   ]
   },
   states: {
      "Base State": {
         "${_alerta_2}": [
            ["style", "top", '-3px'],
            ["transform", "scaleX", '0.46809'],
            ["style", "left", '82px'],
            ["transform", "scaleY", '0.46809']
         ],
         "${_item_2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '111px'],
            ["style", "width", '124px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-21754835");
