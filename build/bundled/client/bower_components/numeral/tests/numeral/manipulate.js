var numeral=require("../../numeral");exports.manipulate={add:function(e){e.expect(4);for(var t,n=[[1e3,10,1010],[.5,3,3.5],[-100,200,100],[.1,.2,.3]],r=0;r<n.length;r++)t=numeral(n[r][0]),t.add(n[r][1]),e.strictEqual(t.value(),n[r][2],n[r][0]+" + "+n[r][1]);e.done()},subtract:function(e){e.expect(4);for(var t,n=[[1e3,10,990],[.5,3,-2.5],[-100,200,-300],[.3,.1,.2]],r=0;r<n.length;r++)t=numeral(n[r][0]),t.subtract(n[r][1]),e.strictEqual(t.value(),n[r][2],n[r][0]+" - "+n[r][1]);e.done()},multiply:function(e){e.expect(4);for(var t,n=[[1e3,10,1e4],[.5,3,1.5],[-100,200,-2e4],[.1,.2,.02]],r=0;r<n.length;r++)t=numeral(n[r][0]),t.multiply(n[r][1]),e.strictEqual(t.value(),n[r][2],n[r][0]+" * "+n[r][1]);e.done()},divide:function(e){e.expect(4);for(var t,n=[[1e3,10,100],[.5,3,.16666666666666666],[-100,200,-.5],[5.3,.1,53]],r=0;r<n.length;r++)t=numeral(n[r][0]),t.divide(n[r][1]),e.strictEqual(t.value(),n[r][2],n[r][0]+" / "+n[r][1]);e.done()},difference:function(e){e.expect(4);for(var t,n=[[1e3,10,990],[.5,3,2.5],[-100,200,300],[.3,.2,.1]],r=0;r<n.length;r++)t=numeral(n[r][0]),e.strictEqual(t.difference(n[r][1]),n[r][2],"Difference between "+n[r][0]+" and "+n[r][1]);e.done()}};