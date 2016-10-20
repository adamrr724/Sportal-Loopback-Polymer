var numeral=require("../../numeral"),language=require("../../languages/pt-br");numeral.language("pt-br",language),exports["language:pt-br"]={setUp:function(e){numeral.language("pt-br"),e()},tearDown:function(e){numeral.language("en"),e()},format:function(e){e.expect(16);for(var a=[[1e4,"0,0.0000","10.000,0000"],[10000.23,"0,0","10.000"],[-1e4,"0,0.0","-10.000,0"],[10000.1234,"0.000","10000,123"],[-1e4,"(0,0.0000)","(10.000,0000)"],[-.23,".00","-,23"],[-.23,"(.00)","(,23)"],[.23,"0.00000","0,23000"],[1230974,"0.0a","1,2milhões"],[1460,"0a","1mil"],[-104e3,"0a","-104mil"],[1,"0o","1º"],[52,"0o","52º"],[23,"0o","23º"],[100,"0o","100º"],[1,"0[.]0","1"]],n=0;n<a.length;n++)e.strictEqual(numeral(a[n][0]).format(a[n][1]),a[n][2],a[n][1]);e.done()},currency:function(e){e.expect(4);for(var a=[[1000.234,"$0,0.00","R$1.000,23"],[-1000.234,"($0,0)","(R$1.000)"],[-1000.234,"$0.00","-R$1000,23"],[1230974,"($0.00a)","R$1,23milhões"]],n=0;n<a.length;n++)e.strictEqual(numeral(a[n][0]).format(a[n][1]),a[n][2],a[n][1]);e.done()},percentages:function(e){e.expect(4);for(var a=[[1,"0%","100%"],[.974878234,"0.000%","97,488%"],[-.43,"0%","-43%"],[.43,"(0.000%)","43,000%"]],n=0;n<a.length;n++)e.strictEqual(numeral(a[n][0]).format(a[n][1]),a[n][2],a[n][1]);e.done()},unformat:function(e){e.expect(9);for(var a=[["10.000,123",10000.123],["(0,12345)",-.12345],["(R$1,23milhões)",-123e4],["10mil",1e4],["-10mil",-1e4],["23º",23],["R$10.000,00",1e4],["-76%",-.76],["2:23:57",8637]],n=0;n<a.length;n++)e.strictEqual(numeral().unformat(a[n][0]),a[n][1],a[n][0]);e.done()}};