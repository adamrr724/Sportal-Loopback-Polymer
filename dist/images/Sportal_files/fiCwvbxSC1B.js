if (self.CavalryLogger) { CavalryLogger.start_js(["UhtKZ"]); }

__d('PasswordReauthBarrierDialog',['Arbiter'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={subscribe:function(i){var j=false;i.subscribe(['confirm','hide'],function(k){if(k=='confirm'){j=true;}else if(!j)c('Arbiter').inform('PasswordReauthDialogCancelClick');});}};f.exports=h;},null);