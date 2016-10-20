"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _colorLuminance=require("./utils"),_getModal=require("./handle-swal-dom"),_hasClass$isDescendant=require("./handle-dom"),handleButton=function(e,n,o){function a(e){i&&n.confirmButtonColor&&(c.style.backgroundColor=e)}var s,t,l,r=e||window.event,c=r.target||r.srcElement,i=-1!==c.className.indexOf("confirm"),u=-1!==c.className.indexOf("sweet-overlay"),d=_hasClass$isDescendant.hasClass(o,"visible"),m=n.doneFunction&&"true"===o.getAttribute("data-has-done-function");switch(i&&n.confirmButtonColor&&(s=n.confirmButtonColor,t=_colorLuminance.colorLuminance(s,-.04),l=_colorLuminance.colorLuminance(s,-.14)),r.type){case"mouseover":a(t);break;case"mouseout":a(s);break;case"mousedown":a(l);break;case"mouseup":a(t);break;case"focus":var h=o.querySelector("button.confirm"),f=o.querySelector("button.cancel");i?f.style.boxShadow="none":h.style.boxShadow="none";break;case"click":var C=o===c,b=_hasClass$isDescendant.isDescendant(o,c);if(!C&&!b&&d&&!n.allowOutsideClick)break;i&&m&&d?handleConfirm(o,n):m&&d||u?handleCancel(o,n):_hasClass$isDescendant.isDescendant(o,c)&&"BUTTON"===c.tagName&&sweetAlert.close()}},handleConfirm=function(e,n){var o=!0;_hasClass$isDescendant.hasClass(e,"show-input")&&(o=e.querySelector("input").value,o||(o="")),n.doneFunction(o),n.closeOnConfirm&&sweetAlert.close(),n.showLoaderOnConfirm&&sweetAlert.disableButtons()},handleCancel=function(e,n){var o=String(n.doneFunction).replace(/\s/g,""),a="function("===o.substring(0,9)&&")"!==o.substring(9,10);a&&n.doneFunction(!1),n.closeOnCancel&&sweetAlert.close()};exports["default"]={handleButton:handleButton,handleConfirm:handleConfirm,handleCancel:handleCancel},module.exports=exports["default"];