"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6482],{5981:function(e,n,a){a.d(n,{C2:function(){return c},E2:function(){return h},Gb:function(){return s},bI:function(){return r},oR:function(){return l},tD:function(){return m},w4:function(){return d},yt:function(){return p},zS:function(){return u}});var t=a(487),i=a(50819),o=a(5405);o.ZP.form.withConfig({displayName:"FormStyles__StyledForm",componentId:"sc-3107ec59-0"})(["display:flex;flex-direction:column;gap:",";overflow-y:auto;"],e=>{let{theme:n}=e;return n.spacing.size3}),(0,o.ZP)(i.a).withConfig({displayName:"FormStyles__StyledFieldHelp",componentId:"sc-3107ec59-1"})(["margin:"," 0 0;"],e=>{let{theme:n}=e;return n.spacing.size2}),o.ZP.div.withConfig({displayName:"FormStyles__StyledButtonContainer",componentId:"sc-3107ec59-2"})(["text-align:center;input{border:none;width:100%;}"]);let l=o.ZP.div.withConfig({displayName:"FormStyles__StyledFormContainer",componentId:"sc-3107ec59-3"})(["display:flex;flex-direction:column;gap:",";height:100%;justify-content:space-between;"],e=>{let{theme:n}=e;return n.spacing.size3}),r=o.ZP.div.withConfig({displayName:"FormStyles__StyledFormTop",componentId:"sc-3107ec59-4"})(["display:flex;flex-direction:column;gap:",""],e=>{let{theme:n}=e;return n.spacing.size2}),d=o.ZP.div.withConfig({displayName:"FormStyles__StyledBottomRow",componentId:"sc-3107ec59-5"})(["display:flex;flex-direction:column;gap:",";"],e=>{let{theme:n}=e;return n.spacing.size2}),c=o.ZP.div.withConfig({displayName:"FormStyles__StyledFormControls",componentId:"sc-3107ec59-6"})(["align-items:center;display:flex;flex-direction:column-reverse;gap:",";"," ",""],e=>{let{theme:n}=e;return n.spacing.size2},e=>{let{$fullWidth:n}=e;return!n&&"width: fit-content;"},e=>{let{theme:n}=e;return"\n    @media (min-width: ".concat(n.breakpoints.lg,") {\n      flex-direction: row;\n      justify-content: space-between;\n      gap: 0;\n    }\n  ")}),s=o.ZP.div.withConfig({displayName:"FormStyles__StyledButtonsContainer",componentId:"sc-3107ec59-7"})(["display:flex;white-space:nowrap;width:100%;button{width:100%;}",""],e=>{let{theme:n}=e;return"\n    @media (min-width: ".concat(n.breakpoints.lg,") {\n      width: fit-content;\n      gap: ").concat(n.spacing.size3,";\n      button {\n        width: fit-content;\n      }\n    }\n    ")}),u=o.ZP.div.withConfig({displayName:"FormStyles__StyledCaptchaContainer",componentId:"sc-3107ec59-8"})(["display:none;",""],e=>{let{theme:n}=e;return"\n    @media (min-width: ".concat(n.breakpoints.md,") {\n      display: block;\n    }\n  ")}),m=o.ZP.div.withConfig({displayName:"FormStyles__StyledMobileCaptchaContainer",componentId:"sc-3107ec59-9"})(["display:block;",""],e=>{let{theme:n}=e;return"\n    @media (min-width: ".concat(n.breakpoints.md,") {\n      display: none;\n    }\n  ")}),p=(0,o.ZP)(i.a).attrs({color:"gray4"}).withConfig({displayName:"FormStyles__StyledBackButtonContent",componentId:"sc-3107ec59-10"})(["transition:color ",";&:hover{color:",";}"],e=>{let{theme:n}=e;return n.transitions.short},e=>{let{theme:n}=e;return n.colors.primary.gray1}),h=(0,o.ZP)(i.a).attrs({forwardedAs:t.a,color:"gray4"}).withConfig({displayName:"FormStyles__StyledBackButton",componentId:"sc-3107ec59-11"})(["padding:0;"])},66482:function(e,n,a){var t=a(85893),i=a(67294),o=a(45697),l=a.n(o),r=a(11163),d=a(487),c=a(50819),s=a(11243),u=a(58419),m=a(46944),p=a(46270),h=a(13176),y=a(99155),f=a(5981);let g=e=>{var n,a;if((null===(n=e.options)||void 0===n?void 0:n.length)===1&&(null===(a=e.options)||void 0===a?void 0:a[0].value)==="all"){if("country-select"===e.type)return h.c;if("state-select"===e.type)return y.B}return e.options},v=e=>{let{fields:n,onSubmit:a,title:o,titleSize:l,subtitle:h,submitting:y,error:v,showSuccess:b,formData:S,stepped:C,goToStep:x=1,defaultValues:w,defaultButtonState:_="default",captcha:N}=e,[k,I]=(0,i.useState)(w),[M,q]=(0,i.useState)(x),[A,F]=(0,i.useState)(!1),j=(0,i.useRef)(null),P=(0,r.useRouter)(),R=e=>I(n=>({...n,...e})),Z=(0,i.useMemo)(()=>{if(!C)return n.filter(e=>"hidden"!==e.type);let e=1;return n.filter(e=>"hidden"!==e.type).reduce((n,a)=>("divider"!==a.type?n.push({...a,step:e}):e+=1,n),[])},[C,n]),D=(0,i.useMemo)(()=>v?"error":y?"loading":b?"submitted":_,[v,b,y,_]),O=(0,i.useMemo)(()=>{var e;return C&&(null===(e=Z.slice(-1)[0])||void 0===e?void 0:e.step)||1},[Z,C]);(0,i.useEffect)(()=>{(null==n?void 0:n.length)&&P.isReady&&n.filter(e=>"hidden"===e.type).map(e=>{var n,a,t,i;let{value:o}=e;return(null===(a=e.metadata)||void 0===a?void 0:null===(n=a.autofill)||void 0===n?void 0:n.valueFrom)==="query"&&(o=P.query[null===(i=e.metadata)||void 0===i?void 0:null===(t=i.autofill)||void 0===t?void 0:t.parameterName]||""),R({[e.name]:o}),!0})},[n,P]),(0,i.useEffect)(()=>{if(null==S?void 0:S.anchor_name){let e=S.anchor_name||"form-anchor";window.location.hash==="#".concat(e)&&document.getElementById(e).scrollIntoView({behavior:"smooth"})}},[null==S?void 0:S.anchor_name]),(0,i.useEffect)(()=>{I(e=>({...e,...w}))},[w]),(0,i.useEffect)(()=>q(x),[x]);let z=(0,i.useMemo)(()=>Z.filter(e=>!(0,p.Z)(k,e)&&(!C||e.step===M)).map(e=>{var n,a,t,i,o;switch(e.type){case"textarea":return{columnSpan:e.columnSpan||S.columns,field:{name:e.name,label:e.label,placeholder:e.placeholder,type:e.type,required:!!e.required_at,rows:e.rows,maxlength:null===(n=e.metadata)||void 0===n?void 0:n.maxlength,disabled:y,value:k[e.name]||"",title:e.title,pattern:e.pattern,onChange:n=>e.onChange?e.onChange(n):R({[e.name]:n.currentTarget.value})}};case"country-select":case"state-select":case"select":return{columnSpan:e.columnSpan||S.columns,field:{name:e.name,label:e.label,type:"select",placeholder:e.placeholder,disabled:y,required:!!e.required_at,options:g(e),value:g(e).find(n=>n.value===k[e.name]),title:e.title,pattern:e.pattern,onChange:n=>e.onChange?e.onChange(n):R({[e.name]:n.value}),error:!!e.required_at&&!k[e.name]&&A&&"Must select a value"}};case"number":return{columnSpan:e.columnSpan||S.columns,field:{name:e.name,label:e.label,type:e.type,placeholder:e.placeholder,min:null===(a=e.metadata)||void 0===a?void 0:a.min,max:null===(t=e.metadata)||void 0===t?void 0:t.max,step:(null===(i=e.metadata)||void 0===i?void 0:i.step)||1,required:!!e.required_at,disabled:y,value:k[e.name]||"",title:e.title,pattern:e.pattern,onChange:n=>e.onChange?e.onChange(n):R({[e.name]:n})}};case"checkbox":case"radio":return e.options.length>1?{columnSpan:e.columnSpan||S.columns,field:{name:e.name,legend:e.label,labelSpacing:e.labelSpacing,type:"fieldset",required:e.required_at,title:e.title,pattern:e.pattern,toggles:e.options.map(n=>({label:n.label,type:e.type,removeAsterix:!0,checked:!!k[e.name]&&k[e.name].includes(n.value),onChange:a=>{if(e.onChange){e.onChange(a);return}let t=k[e.name]||[];t="checkbox"===e.type&&e.multiple?t.indexOf(n.value)>=0?t.filter(e=>e!==n.value):[...t,n.value]:n.value,R({[e.name]:t})}})),error:!!e.required_at&&!k[e.name]&&A&&"Must select a value"}}:{columnSpan:e.columnSpan||S.columns,field:{columnSpan:e.columnSpan,name:e.name,label:e.options[0].label,type:e.type,disabled:y,checked:(null===(o=e.options)||void 0===o?void 0:o.find(n=>n.value===k[e.name]))||e.value&&e.value===k[e.name]||"checkbox"===e.type&&!!k[e.name],title:e.title,pattern:e.pattern,onChange:n=>{"checkbox"===e.type?R({[e.name]:!k[e.name]}):R({[e.name]:n.value})},error:!!e.required_at&&!k[e.name]&&A&&"Field is required"}};case"divider":return{columnSpan:e.columnSpan,field:{name:"Divider-".concat(e.id),type:e.type}};default:return{columnSpan:e.columnSpan,field:{name:e.name,label:e.label,type:e.type,placeholder:e.placeholder,required:!!e.required_at,disabled:y,value:k[e.name]||"",title:e.title,pattern:e.pattern,onChange:n=>e.onChange?e.onChange(n):R({[e.name]:n.target.value})}}}}),[Z,k,C,M,S.columns,y,A]),V=(0,i.useCallback)(()=>{var e;return(null===(e=j.current)||void 0===e?void 0:e.checkValidity())&&!z.some(e=>{let{field:n}=e;return"fieldset"===n.type&&n.required&&!(null==k?void 0:k[n.name])})},[k,z]),E=(0,i.useCallback)(()=>{V()?(q(e=>e+1),F(!1)):F(!0)},[V]),T=(0,i.useCallback)(()=>q(e=>e-1),[]),B=(0,i.useCallback)(e=>{e.preventDefault(),V()?(a(k),I({}),F(!1)):F(!0)},[k,a,V]);return(0,t.jsxs)(f.oR,{children:[(0,t.jsxs)(f.bI,{children:[(0,t.jsx)(s.a,{id:S.anchor_name,ref:j,heading:o,headingSize:l,subheading:h,items:z,onSubmit:B,columns:S.columns,disclaimer:S.disclaimer}),N&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.zS,{children:(0,t.jsx)(m.Z,{sitekey:N,onVerify:e=>R({recaptcha:e}),onExpire:()=>R({recaptcha:null})})}),(0,t.jsx)(f.tD,{children:(0,t.jsx)(m.Z,{sitekey:N,onVerify:e=>R({recaptcha:e}),onExpire:()=>R({recaptcha:null}),size:"compact"})})]})]}),(0,t.jsxs)(f.w4,{children:[C&&(0,t.jsx)(u.a,{dasharray:"0"}),(0,t.jsxs)(f.C2,{$fullWidth:C,children:[C&&(0,t.jsxs)(c.a,{size:"xs",color:"gray4",children:["Step"," ",M,"/",O]}),(0,t.jsxs)(f.Gb,{children:[M>1&&(0,t.jsx)(f.E2,{as:"button",onClick:T,color:"hero",children:(0,t.jsxs)(f.yt,{color:"gray4",children:["<-"," ","Back"]})}),M===O?(0,t.jsx)(d.a,{as:"button",onClick:B,color:"primary",size:"large",state:D,children:S.submit_button_text}):(0,t.jsx)(d.a,{as:"button",onClick:E,color:"primary",size:"large",children:"Next"})]})]}),v&&(0,t.jsxs)(c.a,{color:"Raspberry",children:[(0,t.jsx)("b",{children:"An error occurred while sending your request:"})," ",v]})]})]})};n.Z=v,v.propTypes={fields:l().arrayOf(l().shape({columnSpan:l().number,id:l().number,value:l().oneOfType([l().string,l().number]),type:l().string.isRequired,name:l().string.isRequired,label:l().string.isRequired,placeholder:l().string,required_at:l().string,title:l().string,pattern:l().string,multiple:l().number,options:l().arrayOf(l().shape({value:l().string.isRequired,label:l().string.isRequired})),step:l().number,metadata:l().shape({maxlength:l().number,min:l().number,max:l().number,autofill:l().shape({valueFrom:l().string.isRequired,parameterName:l().string})}),onChange:l().func,rows:l().func})).isRequired,onSubmit:l().func,title:l().string,subtitle:l().string,submitting:l().bool,error:l().string,showSuccess:l().bool,formData:l().shape({submit_button_text:l().string,anchor_name:l().string,disclaimer:l().string,columns:l().number}),stepped:l().bool,defaultValues:l().object,defaultButtonState:l().string,captcha:l().string},v.defaultProps={onSubmit:()=>{},title:"",subtitle:"",submitting:!1,error:"",showSuccess:!1,formData:{},stepped:!1,defaultValues:{},defaultButtonState:"default",captcha:""}},46270:function(e,n){n.Z=(e,n)=>{if(null==n?void 0:n.conditional_display){var a,t,i;let o=e[null==n?void 0:null===(a=n.conditional_display)||void 0===a?void 0:a.field]||"",l=null==n?void 0:null===(t=n.conditional_display)||void 0===t?void 0:t.value;if((null==n?void 0:null===(i=n.conditional_display)||void 0===i?void 0:i.condition)==="neq"){if(Array.isArray(o)?o.includes(l):o===l)return!0}else if(Array.isArray(o)?!o.includes(l):o!==l)return!0}return!1}},13176:function(e,n,a){a.d(n,{c:function(){return i}});var t=a(6927);(0,t.N_)([{code:"TW",name:"Taiwan"}]);let i=Object.entries((0,t.ri)()).map(e=>{let[n,a]=e;return{label:a,value:n}})},99155:function(e,n,a){a.d(n,{B:function(){return t}});let t=[{name:"United States Minor Outlying Islands",code:"UM"},{name:"Alabama",code:"AL"},{name:"Alaska",code:"AK"},{name:"American Samoa",code:"AS"},{name:"Arizona",code:"AZ"},{name:"Arkansas",code:"AR"},{name:"California",code:"CA"},{name:"Colorado",code:"CO"},{name:"Connecticut",code:"CT"},{name:"Delaware",code:"DE"},{name:"District Of Columbia",code:"DC"},{name:"Federated States Of Micronesia",code:"FM"},{name:"Florida",code:"FL"},{name:"Georgia",code:"GA"},{name:"Guam",code:"GU"},{name:"Hawaii",code:"HI"},{name:"Idaho",code:"ID"},{name:"Illinois",code:"IL"},{name:"Indiana",code:"IN"},{name:"Iowa",code:"IA"},{name:"Kansas",code:"KS"},{name:"Kentucky",code:"KY"},{name:"Louisiana",code:"LA"},{name:"Maine",code:"ME"},{name:"Marshall Islands",code:"MH"},{name:"Maryland",code:"MD"},{name:"Massachusetts",code:"MA"},{name:"Michigan",code:"MI"},{name:"Minnesota",code:"MN"},{name:"Mississippi",code:"MS"},{name:"Missouri",code:"MO"},{name:"Montana",code:"MT"},{name:"Nebraska",code:"NE"},{name:"Nevada",code:"NV"},{name:"New Hampshire",code:"NH"},{name:"New Jersey",code:"NJ"},{name:"New Mexico",code:"NM"},{name:"New York",code:"NY"},{name:"North Carolina",code:"NC"},{name:"North Dakota",code:"ND"},{name:"Northern Mariana Islands",code:"MP"},{name:"Ohio",code:"OH"},{name:"Oklahoma",code:"OK"},{name:"Oregon",code:"OR"},{name:"Palau",code:"PW"},{name:"Pennsylvania",code:"PA"},{name:"Puerto Rico",code:"PR"},{name:"Rhode Island",code:"RI"},{name:"South Carolina",code:"SC"},{name:"South Dakota",code:"SD"},{name:"Tennessee",code:"TN"},{name:"Texas",code:"TX"},{name:"Utah",code:"UT"},{name:"Vermont",code:"VT"},{name:"Virgin Islands",code:"VI"},{name:"Virginia",code:"VA"},{name:"Washington",code:"WA"},{name:"West Virginia",code:"WV"},{name:"Wisconsin",code:"WI"},{name:"Wyoming",code:"WY"}].map(e=>{let{name:n,code:a}=e;return{label:n,value:a}})}}]);