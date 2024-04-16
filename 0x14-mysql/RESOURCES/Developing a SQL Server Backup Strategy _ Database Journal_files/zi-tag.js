if(!window.zitag){window.zitag={}}window.zitag.SCHEDULE_BACKEND_URL=window.ZITagEnv==="dev"?"https://schedule-staging.zoominfo.com/zischedule.js":"https://schedule.zoominfo.com/zischedule.js";window.zitag.FORMCOMPLETE_BACKEND_URL=window.ZITagEnv==="dev"?"https://ws-assets-staging.zoominfo.com/formcomplete.js":"https://ws-assets.zoominfo.com/formcomplete.js";window.zitag.ZI_TAG_BACKEND_URL=window.ZITagEnv==="dev"?"https://js-staging.zi-scripts.com/unified/v1/master/getSubscriptions":"https://js.zi-scripts.com/unified/v1/master/getSubscriptions";window.zitag.ZI_WS_BACKEND_URL=window.ZITagEnv==="dev"?"https://wss.zoominfo.com/pixel/":"https://ws.zoominfo.com/pixel/";window.zitag.isScheduleScriptAlreadyLoaded=()=>{if(window.zischedule)return true;else return false};window.zitag.isChatScriptAlreadyLoaded=()=>{if(window.insentCompanyDomain&&window.insentProjectName&&window.insentProjectKey)return true;else return false};window.zitag.isFormCompleteScriptAlreadyLoaded=()=>{if(window._zi_fc&&(window._zi_fc.formId||window._zi_fc.projectKey))return true;else if(window._zi&&(window._zi.formId||window._zi.projectKey||window._zi.forms))return true;else return false};window.zitag.InsertChatScript=keys=>{if(window.isChatDisabled===true||keys.enabled===false)return;if(window.ZIWhiteList&&Array.isArray(window.ZIWhiteList)&&window.ZIWhiteList.indexOf("chat")===-1)return;if(window?.zitag?.isChatScriptAlreadyLoaded()){console.log("Chat Script already present. Skipping");return}window.insentCompanyDomain=window.location.hostname.replace("www.","");window.insentProjectName=keys.projectName;window.insentProjectKey=keys.projectKey;var t=window.insent||{};t.queue=[];t.SCRIPT_VERSION="0.1.3",t.methods=["widget","listener","setVisitor"],t.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.queue.push(n),t}},t.methods.forEach(function(e){t[e]=t.factory(e)});insent=t;var s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.defer=!0,s.src=`https://${keys.projectName}.widget.insent.ai/insent`,document.readyState==="complete"?document.body.appendChild(s):window.addEventListener("load",function(n){document.body.appendChild(s)});console.log("Chat Script Loaded!")};window.zitag.InsertFormCompleteLegacyScript=keys=>{if(window.isFormCompleteDisabled===true)return;if(window.ZIWhiteList&&Array.isArray(window.ZIWhiteList)&&window.ZIWhiteList.indexOf("formcomplete")===-1)return;if(window?.zitag?.isFormCompleteScriptAlreadyLoaded()){console.log("FormComplete Script already present. Skipping");return}window._zi={formId:"9a4b5c4c-fdba-41f7-87c9-bfbf714f9c04",formLoadTimeout:4e3};var zi=document.createElement("script");zi.type="text/javascript";zi.async=true;zi.src="https://ws-assets-staging.zoominfo.com/formcomplete.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(zi,s);console.log("FormComplete Legacy Script Loaded!")};window.zitag.InsertFormCompleteScript=keys=>{if(!keys.projectKey)return;if(window.isFormCompleteDisabled===true)return;if(window.ZIWhiteList&&Array.isArray(window.ZIWhiteList)&&window.ZIWhiteList.indexOf("formcomplete")===-1)return;if(window?.zitag?.isFormCompleteScriptAlreadyLoaded()){console.log("FormComplete Script already present. Skipping");return}let FormcompleteParameters={projectKey:keys.projectKey};if(window.FCpostSubmissionEvent)FormcompleteParameters.postSubmissionEvent=true;window._zi_fc={...window._zi_fc,...FormcompleteParameters};var zi=document.createElement("script");zi.type="text/javascript";zi.async=true;zi.src=window?.zitag?.FORMCOMPLETE_BACKEND_URL;var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(zi,s);console.log("FormComplete Script Loaded!")};window.zitag.InsertScheduleScript=keys=>{if(window.isScheduleDisabled===true)return;if(window.ZIWhiteList&&Array.isArray(window.ZIWhiteList)&&window.ZIWhiteList.indexOf("schedule")===-1)return;let tx=window.zischedule||{};tx.queue=[];tx.SCRIPT_VERSION="0.1.3",tx.methods=["triggerSchedule"],tx.factory=function(e){return function(){const n=Array.prototype.slice.call(arguments);return n.unshift(e),tx.queue.push(n),tx}},tx.methods.forEach(function(e){tx[e]=tx.factory(e)});window.zischedule=tx;const s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.defer=!0,s.src=window?.zitag?.SCHEDULE_BACKEND_URL,document.readyState==="complete"?document.body.appendChild(s):window.addEventListener("load",function(n){document.body.appendChild(s)});console.log("schedule Script Loaded!")};window.zitag.InsertWebSightsScript=(keys,_vtok)=>{if(window.ZIWhiteList&&Array.isArray(window.ZIWhiteList)&&window.ZIWhiteList.indexOf("websights")===-1)return;if(!keys.websiteId){return}const _zitok=window?.zitag?.readCookie("_zitok");let headers={"Content-Type":"text/javascript",_zitok:_zitok,_vtok:window.testip&&window.ZITagEnv==="dev"?btoa(window.testip):_vtok,"visited-url":window?.location?.href};fetch(`${window?.zitag?.ZI_WS_BACKEND_URL}${keys.websiteId}/?iszitag=true`,{headers:headers,credentials:"include",referrerPolicy:"unsafe-url"}).then(response=>response.text()).then(data=>{if(!window.ziSkipEval){eval(data);console.log("WebSights Script Loaded!")}else{var blob=new Blob([data],{type:"text/javascript"});var urlCreator=window.URL||window.webkitURL;var url=urlCreator.createObjectURL(blob);const s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.async=true,s.src=url,document.readyState==="complete"?document.body.appendChild(s):window.addEventListener("load",function(n){console.log("WebSights Script Loaded!");document.body.appendChild(s)})}})};window.zitag.readCookie=name=>{let nameEQ=name+"=";let cookieParts=document.cookie.split(";");let tokens=[];for(let i=0;i<cookieParts.length;i++){let c=cookieParts[i];while(c.charAt(0)==" ")c=c.substring(1,c.length);if(c.indexOf(name)==0){let cookie=c.split("=")[1];switch(name){case"_zitok":tokens.push(cookie);return tokens;default:tokens.push(cookie);return tokens}}}return tokens};window.zitag.deleteZiTok=async()=>{var pathname=location.pathname.replace(/\/$/,""),segments=pathname.split("/"),paths=[];for(var i=0,l=segments.length,path;i<l;i++){path=segments.slice(0,i+1).join("/");paths.push(path);paths.push(path+"/")}var expires=new Date(0).toUTCString();document.cookie="_zitok=; expires="+expires;for(var i=0,l=paths.length;i<l;i++){document.cookie="_zitok=; path="+paths[i]+"; expires="+expires}};window.zitag.setCookie=({name,value,days})=>{let date=new Date;date.setTime(date.getTime()+days*24*60*60*1e3);let expires="; expires="+date.toGMTString();document.cookie=`${name}=${value}; domain=${window.location.hostname}; path=/; ${expires}; samesite=strict; secure;`};window.zitag.GetListOfEntitlements=async()=>{try{const _zitok=window?.zitag?.readCookie("_zitok");let headers={"Content-Type":"application/json",Authorization:"Bearer "+window.ZIProjectKey,visited_url:window.location.href};if(_zitok){let actualTokenArray=_zitok.toString().split(",");if(actualTokenArray.length>0){let actualtoken=actualTokenArray.filter(e=>e.trim()!=="undefined")[0];if(actualtoken&&actualtoken!=="undefined"&&actualtoken!==undefined){headers._zitok=actualtoken}}}let response=await fetch(window?.zitag?.ZI_TAG_BACKEND_URL,{method:"GET",headers:headers});const data=await response.json();if(response.status===200&&data&&data.subscriptions){let canSetCookie=true;if(window?.ZIWhiteList?.length===1&&window?.ZIWhiteList?.[0]==="formcomplete"){canSetCookie=false}if(canSetCookie){await window?.zitag?.deleteZiTok();window?.zitag?.setCookie({name:"_zitok",value:data._zitok,days:365})}let subscriptions=data?.subscriptions;if(subscriptions.length===0){console.log("No ZI subscriptions found")}if(subscriptions.sch){window?.zitag?.InsertScheduleScript(subscriptions.sch)}if(subscriptions.fc){window?.zitag?.InsertFormCompleteScript(subscriptions.fc)}if(subscriptions.chat){window?.zitag?.InsertChatScript(subscriptions.chat)}if(subscriptions.ws){window?.zitag?.InsertWebSightsScript(subscriptions.ws,data?._vtok)}}else{console.log("error with response",response.body)}}catch(e){console.error("ZI error",e)}};window?.zitag?.GetListOfEntitlements();