const _0x1b51e1=_0x33cf;(function(_0x4e5840,_0x29e2af){const _0x1cbbb4=_0x33cf,_0x387092=_0x4e5840();while(!![]){try{const _0x2cf78b=-parseInt(_0x1cbbb4(0x222))/0x1+-parseInt(_0x1cbbb4(0x1da))/0x2*(-parseInt(_0x1cbbb4(0x1d2))/0x3)+-parseInt(_0x1cbbb4(0x25a))/0x4+-parseInt(_0x1cbbb4(0x1df))/0x5*(-parseInt(_0x1cbbb4(0x1ef))/0x6)+-parseInt(_0x1cbbb4(0x20a))/0x7*(-parseInt(_0x1cbbb4(0x1f4))/0x8)+-parseInt(_0x1cbbb4(0x1e4))/0x9+parseInt(_0x1cbbb4(0x1d9))/0xa*(-parseInt(_0x1cbbb4(0x1d8))/0xb);if(_0x2cf78b===_0x29e2af)break;else _0x387092['push'](_0x387092['shift']());}catch(_0x3d7a1){_0x387092['push'](_0x387092['shift']());}}}(_0x2f25,0xcf6cf));import _0x1c9126 from'@/core/wrapper';import{BuddyListener,GroupListener,LoginListener,MsgListener,ProfileListener,SessionListener}from'@/core/listeners';import{DependsAdapter,DispatcherAdapter,GlobalAdapter}from'@/core/adapters';import _0x15fd77 from'node:path';import _0x591651 from'node:os';function _0x2f25(){const _0x266f89=['addKernelProfileListener','getLoginList','QaXme','getNTUserDataInfoConfig','6811WaZDDI','proxyHandler','onQRCodeSessionFailed','loginErrorInfo','GgBNm','ZBldH','addListener','getBuddyService','clientType','updateMsg','aojEw','pngBase64QrcodeData','groupCode','initWithDeskTopConfig','./nt_qq/global','GYPNd','addKernelGroupListener','qeTTD','push','tipsTitle','createMemberListScene','util','memberCount','addKernelLoginListener','38923TlYUFc','LocalLoginInfoList','message_received','curVersion',')已登录,无法重复登录','update','140022013','homedir','groupMemberList_MainWindow','has','AVOhx','\x20has\x20no\x20method\x20','没有可快速登录的QQ号','initSession','ukWyU','undefined','resolve','replace','startNT','onQRCodeLoginSucceed','NodeIDependsAdapter','isQuickLogin','addKernelMsgListener','登录失败','engine','quickLogin','fileLogLevel','NodeIQQNTWrapperSession','账号设备(','zgMmG','getQRCodePicture','onBuddyListChange','QvbMY','quickLoginWithUin','NodeIKernelProfileListener','NodeIKernelBuddyListener','onMemberListChange','getNextMemberList','zMyGA','zzEoY','HFDHi','getBuddyList','qYuZN','nSzLE','LaNee','catch','consoleLogLevel','length','uin','YBhMp','hcMgg','loginService','packet_sent','createHash','uVomb','./.config/QQ','783264pHFJUH','qIQqX','onMsgInfoListUpdate','uid','onQRCodeGetPicture','onProfileDetailInfoChanged','pkqrt','ctaAX','_GW_B','DurEo','session','uOUGe','快速登录失败\x20','启动失败:\x20','bSQja','digest','hDHmQ',')\x20在线状态变更','sceneId','data:image/png;base64,','MRnto','constructor','onAddSendMsg','MsgListener','NodeIKernelMsgListener','oCiah','packet_received','onRecvMsg','delete','dataPathGlobal','then','last_message_time','initConfig','LsLVd','split','map','NodeIKernelLoginListener','message_sent','cabtl','GroupListener','VJlDv','zUcxt','loginListener','onLoginSuccessFuncList','IMMoA','uRRLk','set','mkdirSync','SMNSH','xSFls','FNTml','62307cxiNjA','onLoginSuccess','getMsgByLongId','uuFKo','ebHxZ','UGMNc','7271ipkETR','7180eTpUWU','22sgmhKC','initDataListener','name','assign','XHJSO','15LTiQLX','getQuickLoginList','init','onSessionInitComplete','./NapCat/data','5904783Vkorkr','onUserLoggedIn','dataPath','IlkJE','stringify','onKickedOffLine','tOdjM','lEBNX','getGroupService','qrcodeUrl','forEach','1641852sxijuD','-v2.db','result','lVGgp','NodeIKernelSessionListener','9584pzvtaP','dWyha','passwordLogin','addMsg','find','recallTime','数据库初始化失败','OLSeP','getMsgService','本账号数据/缓存目录：','tipsDesc','errMsg','addKernelBuddyListener','[KickedOffLine]\x20[','koHrK','zOyfk','get','onLineDev'];_0x2f25=function(){return _0x266f89;};return _0x2f25();}import _0x70fcfd from'node:fs';import{appid,qqVersionConfigInfo}from'@/common/utils/QQBasicInfo';import{hostname,systemVersion}from'@/common/utils/system';import{genSessionConfig}from'@/core/sessionConfig';import{dbUtil}from'@/common/utils/db';import{sleep}from'@/common/utils/helper';import _0xa65f28 from'node:crypto';import{rawFriends,friends,groupMembers,groups,selfInfo,stat,uid2UinMap}from'@/core/data';import{enableConsoleLog,enableFileLog,log,logDebug,logError,setLogLevel,setLogSelfInfo}from'@/common/utils/log';import{napCatConfig}from'@/core/utils/config';export class NapCatCore{['session'];[_0x1b51e1(0x21f)];['engine'];[_0x1b51e1(0x1c9)];[_0x1b51e1(0x255)];['onLoginSuccessFuncList']=[];[_0x1b51e1(0x20b)]={'get'(target,prop,receiver){const _0x3e6957=_0x1b51e1,vlUtIz={'QaXme':function(x,y){return x===y;},'DurEo':_0x3e6957(0x231)};if(vlUtIz[_0x3e6957(0x208)](typeof target[prop],vlUtIz[_0x3e6957(0x263)]))return(...args)=>{const _0x550d57=_0x3e6957;logDebug(target['constructor']['name']+_0x550d57(0x22d)+prop);};return Reflect[_0x3e6957(0x204)](target,prop,receiver);}};constructor(){const _0x37c6f4=_0x1b51e1,_0x4a2a5c={'aojEw':function(_0x5199a5,_0x3aefc8){return _0x5199a5(_0x3aefc8);},'uuFKo':function(_0x26a4b8,_0x597c9a){return _0x26a4b8+_0x597c9a;},'zNPbs':'当前账号(','cabtl':_0x37c6f4(0x226),'LaNee':function(_0x3b452b,_0xaba91,_0x1fc512){return _0x3b452b(_0xaba91,_0x1fc512);},'zgMmG':'initSession\x20failed','qIQqX':_0x37c6f4(0x1fa),'pNvIY':_0x37c6f4(0x1e3),'YBhMp':function(_0x120dfc,_0x29301f,_0x31607c){return _0x120dfc(_0x29301f,_0x31607c);},'hsbUE':'登录失败','MRnto':function(_0x18ce0a,_0x437116){return _0x18ce0a==_0x437116;},'ebHxZ':function(_0x372385,_0x590798,_0x27da92){return _0x372385(_0x590798,_0x27da92);}};this[_0x37c6f4(0x23a)]=new _0x1c9126['NodeIQQNTWrapperEngine'](),this[_0x37c6f4(0x21f)]=new _0x1c9126['NodeQQNTWrapperUtil'](),this[_0x37c6f4(0x255)]=new _0x1c9126['NodeIKernelLoginService'](),this[_0x37c6f4(0x264)]=new _0x1c9126[(_0x37c6f4(0x23d))](),this[_0x37c6f4(0x1c9)]=new LoginListener(),this['loginListener'][_0x37c6f4(0x1e5)]=_0x2d2b95=>{const _0x287014=_0x37c6f4;_0x4a2a5c[_0x287014(0x214)](logError,_0x4a2a5c[_0x287014(0x1d5)](_0x4a2a5c['zNPbs'],_0x2d2b95)+_0x4a2a5c[_0x287014(0x1c5)]);},this[_0x37c6f4(0x1c9)][_0x37c6f4(0x235)]=_0x54bde2=>{const _0x5f26d2=_0x37c6f4,_0x4e44fd={'SUhpJ':function(_0x49850b,_0x49803c,_0x33fb6b){const _0x9ab625=_0x33cf;return _0x4a2a5c[_0x9ab625(0x24e)](_0x49850b,_0x49803c,_0x33fb6b);},'JpFZK':_0x4a2a5c[_0x5f26d2(0x25b)],'bSQja':function(_0x5cf71c,_0xb22b15){return _0x5cf71c(_0xb22b15);},'xSFls':_0x4a2a5c['pNvIY'],'oCiah':function(_0x41a911,_0x28981d,_0x1f1c04){const _0x16f4ac=_0x5f26d2;return _0x4a2a5c[_0x16f4ac(0x24e)](_0x41a911,_0x28981d,_0x1f1c04);},'WwpmV':_0x5f26d2(0x1fd)};this[_0x5f26d2(0x22f)](_0x54bde2[_0x5f26d2(0x252)],_0x54bde2['uid'])[_0x5f26d2(0x278)](_0x88764=>{const _0x216068=_0x5f26d2,_0x85fef0={'qeTTD':function(_0x5a78fc,_0x4bbd4d,_0x316b42){return _0x4e44fd['SUhpJ'](_0x5a78fc,_0x4bbd4d,_0x316b42);},'FNTml':function(_0xca7fb8,_0x4285ca){return _0xca7fb8 instanceof _0x4285ca;},'GIxSw':_0x4e44fd['JpFZK']};selfInfo['uin']=_0x54bde2['uin'],selfInfo[_0x216068(0x25d)]=_0x54bde2[_0x216068(0x25d)],napCatConfig['read'](),setLogLevel(napCatConfig[_0x216068(0x23c)],napCatConfig[_0x216068(0x250)]),enableFileLog(napCatConfig['fileLog']),_0x4e44fd[_0x216068(0x268)](enableConsoleLog,napCatConfig['consoleLog']),_0x4e44fd[_0x216068(0x268)](setLogSelfInfo,selfInfo);const _0x273442=_0x15fd77[_0x216068(0x232)](this[_0x216068(0x1e6)],_0x4e44fd[_0x216068(0x1d0)]);_0x70fcfd['mkdirSync'](_0x273442,{'recursive':!![]}),_0x4e44fd[_0x216068(0x273)](logDebug,_0x4e44fd['WwpmV'],_0x273442),dbUtil['init'](_0x15fd77['resolve'](_0x273442,'./'+_0x54bde2['uin']+_0x216068(0x1f0)))[_0x216068(0x278)](()=>{const _0x158ec5=_0x216068,_0x3a8439={'SMNSH':function(_0x669ab7,_0x4e425d,_0x525491){const _0x49275=_0x33cf;return _0x85fef0[_0x49275(0x21b)](_0x669ab7,_0x4e425d,_0x525491);},'ukWyU':function(_0x2e0de5,_0x512bd6){const _0x28097a=_0x33cf;return _0x85fef0[_0x28097a(0x1d1)](_0x2e0de5,_0x512bd6);}};this[_0x158ec5(0x1db)](),this[_0x158ec5(0x1ca)]['map'](_0x420b89=>{const _0x42d3ae=_0x158ec5;new Promise((_0x49adef,_0x1f830c)=>{const _0x4464b8=_0x33cf,_0x1c7e83=_0x3a8439[_0x4464b8(0x1cf)](_0x420b89,_0x54bde2[_0x4464b8(0x252)],_0x54bde2[_0x4464b8(0x25d)]);_0x3a8439[_0x4464b8(0x230)](_0x1c7e83,Promise)&&_0x1c7e83[_0x4464b8(0x278)](_0x49adef)[_0x4464b8(0x24f)](_0x1f830c);})[_0x42d3ae(0x278)]();});})[_0x216068(0x24f)](_0x48dc0d=>{const _0x1ca006=_0x216068;_0x85fef0[_0x1ca006(0x21b)](logError,_0x85fef0['GIxSw'],_0x48dc0d);});})[_0x5f26d2(0x24f)](_0x191f9c=>{const _0x291b27=_0x5f26d2;_0x4a2a5c['LaNee'](logError,_0x4a2a5c[_0x291b27(0x23f)],_0x191f9c);throw new Error(_0x291b27(0x267)+JSON[_0x291b27(0x1e8)](_0x191f9c));});},this['loginListener'][_0x37c6f4(0x20c)]=(_0x54356f,_0x1450f8,_0x28a4f0)=>{const _0x125803=_0x37c6f4;_0x4a2a5c[_0x125803(0x253)](logError,_0x4a2a5c['hsbUE'],_0x28a4f0),_0x4a2a5c[_0x125803(0x26e)](_0x54356f,0x1)&&_0x1450f8==0x3&&this['loginService'][_0x125803(0x240)]();},this[_0x37c6f4(0x1c9)]['onLoginFailed']=_0x26be01=>{const _0x4cf072=_0x37c6f4;_0x4a2a5c[_0x4cf072(0x1d6)](logError,_0x4cf072(0x239),_0x26be01);},this['loginListener']=new Proxy(this[_0x37c6f4(0x1c9)],this[_0x37c6f4(0x20b)]),this[_0x37c6f4(0x255)][_0x37c6f4(0x221)](new _0x1c9126[(_0x37c6f4(0x1c3))](this[_0x37c6f4(0x1c9)])),this[_0x37c6f4(0x27a)]();}get[_0x1b51e1(0x1e6)](){const _0xc4fe4a=_0x1b51e1;let _0x9d6613=this[_0xc4fe4a(0x21f)][_0xc4fe4a(0x209)]();return!_0x9d6613&&(_0x9d6613=_0x15fd77[_0xc4fe4a(0x232)](_0x591651[_0xc4fe4a(0x229)](),_0xc4fe4a(0x259)),_0x70fcfd[_0xc4fe4a(0x1ce)](_0x9d6613,{'recursive':!![]})),_0x9d6613;}get['dataPathGlobal'](){const _0xc9448b=_0x1b51e1,_0x52ca6f={'zMyGA':_0xc9448b(0x218)};return _0x15fd77[_0xc9448b(0x232)](this[_0xc9448b(0x1e6)],_0x52ca6f[_0xc9448b(0x248)]);}[_0x1b51e1(0x27a)](){const _0x295a3a=_0x1b51e1;this[_0x295a3a(0x23a)][_0x295a3a(0x217)]({'base_path_prefix':'','platform_type':0x3,'app_type':0x4,'app_version':qqVersionConfigInfo[_0x295a3a(0x225)],'os_version':'Windows\x2010\x20Pro','use_xlog':!![],'qua':'V1_WIN_NQ_'+qqVersionConfigInfo[_0x295a3a(0x225)][_0x295a3a(0x233)]('-','_')+_0x295a3a(0x262),'global_path_config':{'desktopGlobalPath':this['dataPathGlobal']},'thumb_config':{'maxSide':0x144,'minSide':0x30,'longLimit':0x6,'density':0x2}},new _0x1c9126['NodeIGlobalAdapter'](new GlobalAdapter())),this['loginService'][_0x295a3a(0x27a)]({'machineId':'','appid':appid,'platVer':systemVersion,'commonPath':this[_0x295a3a(0x277)],'clientVer':qqVersionConfigInfo[_0x295a3a(0x225)],'hostName':hostname});}['initSession'](_0x1b2307,_0x4ea7ce){const _0x1a4442={'ZBldH':function(_0x3594fa,_0x104196){return _0x3594fa(_0x104196);},'VJlDv':function(_0x591f21,_0x59b2c0){return _0x591f21(_0x59b2c0);},'QvbMY':function(_0x5ea87b,_0x591ac4,_0x236444,_0x6da74f){return _0x5ea87b(_0x591ac4,_0x236444,_0x6da74f);},'dWyha':'init\x20failed\x20'};return new Promise((_0x37a163,_0x1ffb32)=>{const _0x4ddc6b=_0x33cf,_0x108c6a=_0x1a4442[_0x4ddc6b(0x242)](genSessionConfig,_0x1b2307,_0x4ea7ce,this[_0x4ddc6b(0x1e6)]),_0x1e5bc1=new SessionListener();_0x1e5bc1[_0x4ddc6b(0x1e2)]=_0x463743=>{const _0xe520c8=_0x4ddc6b;if(_0x463743===0x0)return _0x1a4442[_0xe520c8(0x20f)](_0x37a163,0x0);_0x1a4442[_0xe520c8(0x1c7)](_0x1ffb32,_0x463743);},this['session'][_0x4ddc6b(0x1e1)](_0x108c6a,new _0x1c9126[(_0x4ddc6b(0x236))](new DependsAdapter()),new _0x1c9126['NodeIDispatcherAdapter'](new DispatcherAdapter()),new _0x1c9126[(_0x4ddc6b(0x1f3))](_0x1e5bc1));try{this[_0x4ddc6b(0x264)][_0x4ddc6b(0x234)](0x0);}catch(_0x887cf8){try{this['session']['startNT']();}catch(_0x30636e){_0x1ffb32(_0x1a4442[_0x4ddc6b(0x1f5)]+_0x30636e);}}});}['initDataListener'](){const _0x21a471=_0x1b51e1,_0x2e5eef={'LsLVd':function(_0x3549bc,_0x22b2fe){return _0x3549bc===_0x22b2fe;},'ruqDl':function(_0x345647,_0x216f07){return _0x345647(_0x216f07);},'GYPNd':function(_0x42bcf2,_0x5538d5){return _0x42bcf2+_0x5538d5;},'tOdjM':function(_0x32fb98,_0x1d4141){return _0x32fb98+_0x1d4141;},'gUccH':_0x21a471(0x23e),'mbDfK':_0x21a471(0x26b),'ctaAX':function(_0x25ca9c,_0x5ebee4){return _0x25ca9c+_0x5ebee4;},'IlkJE':_0x21a471(0x201),'pkqrt':function(_0x53d0d1,_0x5a573e){return _0x53d0d1/_0x5a573e;},'uRRLk':function(_0x6c6201,_0x1df2d7){return _0x6c6201/_0x1df2d7;},'IMMoA':function(_0x53938e,_0x5c9427){return _0x53938e===_0x5c9427;},'JICsU':_0x21a471(0x22a),'OLSeP':function(_0x36dd67,_0x688008,_0x17b22b){return _0x36dd67(_0x688008,_0x17b22b);}},_0x3482d0=new MsgListener();_0x3482d0[_0x21a471(0x205)]=_0x43845a=>{const _0x58c254=_0x21a471;_0x43845a[_0x58c254(0x1c2)](_0x1b856a=>{const _0x3d69e=_0x58c254;_0x2e5eef[_0x3d69e(0x27b)](_0x1b856a[_0x3d69e(0x212)],0x2)&&_0x2e5eef['ruqDl'](log,_0x2e5eef[_0x3d69e(0x219)](_0x2e5eef[_0x3d69e(0x1ea)](_0x2e5eef['gUccH'],_0x1b856a['devUid']),_0x2e5eef['mbDfK']));});},_0x3482d0[_0x21a471(0x1e9)]=_0x5039be=>{const _0x2347e0=_0x21a471;log(_0x2e5eef['ctaAX'](_0x2e5eef[_0x2347e0(0x261)](_0x2e5eef[_0x2347e0(0x1e7)],_0x5039be[_0x2347e0(0x21d)])+']\x20',_0x5039be[_0x2347e0(0x1fe)]));},_0x3482d0[_0x21a471(0x25c)]=_0x576305=>{const _0x5e85cd=_0x21a471;stat[_0x5e85cd(0x274)]+=0x1,_0x576305['map'](_0x2c2617=>{const _0x507777=_0x5e85cd;_0x2e5eef[_0x507777(0x27b)](_0x2c2617[_0x507777(0x1f9)],'0')?dbUtil[_0x507777(0x1f7)](_0x2c2617)['then']()['catch']():dbUtil[_0x507777(0x1d4)](_0x2c2617['msgId'])[_0x507777(0x278)](_0x199e3f=>{const _0x341802=_0x507777;_0x199e3f&&(_0x199e3f[_0x341802(0x1f9)]=_0x2c2617['recallTime'],dbUtil[_0x341802(0x213)](_0x199e3f)[_0x341802(0x278)]());});});},_0x3482d0[_0x21a471(0x270)]=_0x2bb89f=>{const _0x3ac646=_0x21a471;stat[_0x3ac646(0x256)]+=0x1,stat[_0x3ac646(0x1c4)]+=0x1,stat['last_message_time']=Math['floor'](_0x2e5eef[_0x3ac646(0x260)](Date['now'](),0x3e8));},_0x3482d0[_0x21a471(0x275)]=_0x45a910=>{const _0x16fefb=_0x21a471;stat['packet_received']+=0x1,stat[_0x16fefb(0x224)]+=_0x45a910[_0x16fefb(0x251)],stat[_0x16fefb(0x279)]=Math['floor'](_0x2e5eef[_0x16fefb(0x1cc)](Date['now'](),0x3e8));},_0x3482d0['onRecvSysMsg']=(..._0x13c99c)=>{stat['packet_received']+=0x1;},this[_0x21a471(0x210)](_0x3482d0);const _0x355cee=new BuddyListener();_0x355cee[_0x21a471(0x241)]=_0x513e2a=>{const _0x1ab790=_0x21a471;rawFriends[_0x1ab790(0x251)]=0x0,rawFriends['push'](..._0x513e2a);for(const _0x5b95aa of _0x513e2a){for(const _0x30ebb7 of _0x5b95aa['buddyList']){const _0x79d14f=friends['get'](_0x30ebb7['uid']);uid2UinMap[_0x30ebb7['uid']]=_0x30ebb7['uin'],_0x79d14f?Object[_0x1ab790(0x1dd)](_0x79d14f,_0x30ebb7):friends['set'](_0x30ebb7[_0x1ab790(0x25d)],_0x30ebb7);}}},this[_0x21a471(0x210)](_0x355cee),this[_0x21a471(0x264)][_0x21a471(0x211)]()[_0x21a471(0x24b)](!![])[_0x21a471(0x278)](_0x19d883=>{});const _0x575390=new ProfileListener();_0x575390[_0x21a471(0x25f)]=_0x344c61=>{const _0xa1ca98=_0x21a471;_0x2e5eef[_0xa1ca98(0x1cb)](_0x344c61['uid'],selfInfo['uid'])&&Object[_0xa1ca98(0x1dd)](selfInfo,_0x344c61);},_0x575390['onSelfStatusChanged']=_0x32eff9=>{},this[_0x21a471(0x210)](_0x575390);const _0x42daa2=new GroupListener();_0x42daa2['onGroupListUpdate']=(_0x5cbb8c,_0x4d2ca0)=>{const _0x307237=_0x21a471,_0x11a377={'uOUGe':function(_0x3bc40b,_0x28bc4e){return _0x3bc40b===_0x28bc4e;},'zOyfk':_0x2e5eef['JICsU']};_0x4d2ca0[_0x307237(0x1c2)](_0x482369=>{const _0x278d35=_0x307237,_0x2472ba=groups['get'](_0x482369[_0x278d35(0x216)]);if(_0x2472ba&&_0x11a377[_0x278d35(0x265)](_0x482369[_0x278d35(0x220)],_0x2472ba['memberCount']))Object['assign'](_0x2472ba,_0x482369);else{groups[_0x278d35(0x1cd)](_0x482369[_0x278d35(0x216)],_0x482369);const _0x346c02=this[_0x278d35(0x264)][_0x278d35(0x1ec)]()[_0x278d35(0x21e)](_0x482369['groupCode'],_0x11a377[_0x278d35(0x203)]);this[_0x278d35(0x264)]['getGroupService']()[_0x278d35(0x247)](_0x346c02,undefined,0xbb8)[_0x278d35(0x278)](_0x476f80=>{});}});},_0x42daa2[_0x21a471(0x246)]=_0x71c5ec=>{const _0x21ea13=_0x21a471,_0x1f9a11=_0x71c5ec[_0x21ea13(0x26c)]['split']('_')[0x0];if(groupMembers[_0x21ea13(0x22b)](_0x1f9a11)){const _0x5de030=groupMembers[_0x21ea13(0x204)](_0x1f9a11);_0x71c5ec['infos']['forEach']((_0x26097c,_0x227b15)=>{const _0x4e6a3f=_0x21ea13,_0x160078=_0x5de030['get'](_0x227b15);_0x160078?Object[_0x4e6a3f(0x1dd)](_0x160078,_0x26097c):_0x5de030[_0x4e6a3f(0x1cd)](_0x227b15,_0x26097c);});}else groupMembers['set'](_0x1f9a11,_0x71c5ec['infos']);},_0x42daa2['onMemberInfoChange']=(_0xcaa6b0,_0x457d0d,_0x45b5aa)=>{const _0x4ffca1=_0x21a471;_0x457d0d===0x0&&_0x45b5aa[_0x4ffca1(0x204)](selfInfo[_0x4ffca1(0x25d)])&&_0x45b5aa[_0x4ffca1(0x204)](selfInfo[_0x4ffca1(0x25d)])?.['isDelete']&&_0x2e5eef[_0x4ffca1(0x1fb)](setTimeout,()=>{const _0x1d741c=_0x4ffca1;groups[_0x1d741c(0x276)](_0xcaa6b0);},0x1388);_0x45b5aa[_0x4ffca1(0x1ee)]((_0x2bdd20,_0x5ad20b)=>{const _0x3ad9bd=_0x4ffca1;uid2UinMap[_0x5ad20b]=_0x2bdd20[_0x3ad9bd(0x252)];});const _0x23b6a5=groupMembers[_0x4ffca1(0x204)](_0xcaa6b0);_0x23b6a5?_0x45b5aa[_0x4ffca1(0x1ee)]((_0x3f0149,_0x1ba5d3)=>{const _0x357b14=_0x4ffca1,_0x123239=_0x23b6a5['get'](_0x1ba5d3);_0x123239?Object[_0x357b14(0x1dd)](_0x123239,_0x3f0149):_0x23b6a5[_0x357b14(0x1cd)](_0x1ba5d3,_0x3f0149);}):groupMembers[_0x4ffca1(0x1cd)](_0xcaa6b0,_0x45b5aa);},this[_0x21a471(0x210)](_0x42daa2);}['addListener'](_0x202d03){const _0xe91207=_0x1b51e1,_0x55da6e={'hDHmQ':'BuddyListener','qYuZN':_0xe91207(0x1c6),'lVGgp':_0xe91207(0x271),'zUcxt':'ProfileListener'};_0x202d03=new Proxy(_0x202d03,this['proxyHandler']);switch(_0x202d03[_0xe91207(0x26f)][_0xe91207(0x1dc)]){case _0x55da6e[_0xe91207(0x26a)]:{return this['session'][_0xe91207(0x211)]()[_0xe91207(0x200)](new _0x1c9126[(_0xe91207(0x245))](_0x202d03));}case _0x55da6e[_0xe91207(0x24c)]:{return this[_0xe91207(0x264)][_0xe91207(0x1ec)]()[_0xe91207(0x21a)](new _0x1c9126['NodeIKernelGroupListener'](_0x202d03));}case _0x55da6e[_0xe91207(0x1f2)]:{return this['session'][_0xe91207(0x1fc)]()[_0xe91207(0x238)](new _0x1c9126[(_0xe91207(0x272))](_0x202d03));}case _0x55da6e[_0xe91207(0x1c8)]:{return this[_0xe91207(0x264)]['getProfileService']()[_0xe91207(0x206)](new _0x1c9126[(_0xe91207(0x244))](_0x202d03));}default:return-0x1;}}[_0x1b51e1(0x1d3)](_0x438418){const _0x5c1e5d=_0x1b51e1;this[_0x5c1e5d(0x1ca)][_0x5c1e5d(0x21c)](_0x438418);}async[_0x1b51e1(0x23b)](_0x447008){const _0x451ab0=_0x1b51e1,_0x1fba67={'koHrK':function(_0x50e0e9,_0x5acfd3){return _0x50e0e9+_0x5acfd3;}},_0xdbdffd=await this['loginService'][_0x451ab0(0x207)]();if(_0xdbdffd[_0x451ab0(0x1f1)]!==0x0)throw new Error(_0x451ab0(0x22e));const _0x3447de=_0xdbdffd[_0x451ab0(0x223)][_0x451ab0(0x1f8)](_0x577997=>_0x577997[_0x451ab0(0x252)]===_0x447008);if(!_0x3447de||!_0x3447de?.[_0x451ab0(0x237)])throw new Error(_0x447008+'快速登录不可用');await sleep(0x3e8);const _0x4686dd=await this[_0x451ab0(0x255)][_0x451ab0(0x243)](_0x447008);if(!_0x4686dd['result'])throw new Error(_0x1fba67[_0x451ab0(0x202)](_0x451ab0(0x266),_0x4686dd[_0x451ab0(0x20d)][_0x451ab0(0x1ff)]));return _0x4686dd;}async['qrLogin'](_0x2c7d55){const _0x128585=_0x1b51e1,_0x1cab2b={'AVOhx':_0x128585(0x26d),'HFDHi':'base64'};return new Promise((_0x44308c,_0xd2e42a)=>{const _0x108050=_0x128585,_0xedfb4={'XHJSO':_0x1cab2b[_0x108050(0x22c)],'nSzLE':_0x1cab2b[_0x108050(0x24a)],'ZsWJJ':function(_0x5aa676,_0x2fc15d,_0x409335,_0x3e3097){return _0x5aa676(_0x2fc15d,_0x409335,_0x3e3097);}};this[_0x108050(0x1c9)][_0x108050(0x25e)]=_0x81f0dc=>{const _0x640e4d=_0x108050,_0x33042d=_0x81f0dc[_0x640e4d(0x215)][_0x640e4d(0x27c)](_0xedfb4[_0x640e4d(0x1de)])[0x1],_0x305ba7=Buffer['from'](_0x33042d,_0xedfb4[_0x640e4d(0x24d)]);_0xedfb4['ZsWJJ'](_0x2c7d55,_0x81f0dc[_0x640e4d(0x1ed)],_0x81f0dc[_0x640e4d(0x215)],_0x305ba7);},this[_0x108050(0x255)][_0x108050(0x240)]();});}async[_0x1b51e1(0x1f6)](_0x544721,_0x4e2a0c,_0x584046,_0x4c6a2c,_0x2c30de){const _0x565979=_0x1b51e1,_0x359a81={'hcMgg':'md5','lEBNX':'hex','GgBNm':function(_0x3a0598,_0x31c86b){return _0x3a0598&&_0x31c86b;},'SljqQ':function(_0x15227f,_0x338f2c){return _0x15227f||_0x338f2c;},'UGMNc':function(_0x231dac,_0x3a6483){return _0x231dac||_0x3a6483;},'zzEoY':function(_0x3e6244,_0x17b62f){return _0x3e6244||_0x17b62f;},'uVomb':'140022008','hoHwr':_0x565979(0x228)},_0x1e0b1f=_0xa65f28[_0x565979(0x257)](_0x359a81[_0x565979(0x254)])[_0x565979(0x227)](_0x4e2a0c)[_0x565979(0x269)](_0x359a81[_0x565979(0x1eb)]),_0x372952={'uin':_0x544721,'passwordMd5':_0x1e0b1f,'step':_0x359a81[_0x565979(0x20e)](_0x584046,_0x4c6a2c)&&_0x2c30de?0x1:0x0,'newDeviceLoginSig':'','proofWaterSig':_0x359a81['SljqQ'](_0x584046,''),'proofWaterRand':_0x359a81[_0x565979(0x1d7)](_0x4c6a2c,''),'proofWaterSid':_0x359a81[_0x565979(0x249)](_0x2c30de,'')};await this[_0x565979(0x255)][_0x565979(0x207)](),await sleep(0x3e8);const _0x4a042a=await this[_0x565979(0x255)][_0x565979(0x1f6)](_0x372952);switch(_0x4a042a['result']){case'0':{break;}case _0x359a81[_0x565979(0x258)]:{break;}case'4':case _0x359a81['hoHwr']:default:}}async[_0x1b51e1(0x1e0)](){const _0x387ef7=_0x1b51e1,_0x2b775c=await this[_0x387ef7(0x255)][_0x387ef7(0x207)]();return _0x2b775c;}}function _0x33cf(_0x1ceb47,_0x1c2103){const _0x2f2513=_0x2f25();return _0x33cf=function(_0x33cf01,_0x3419a2){_0x33cf01=_0x33cf01-0x1c2;let _0x457926=_0x2f2513[_0x33cf01];return _0x457926;},_0x33cf(_0x1ceb47,_0x1c2103);}export const napCatCore=new NapCatCore();