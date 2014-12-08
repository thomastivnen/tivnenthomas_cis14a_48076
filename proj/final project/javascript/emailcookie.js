//  written by Thomas Tivnen foe E-mail cookie newsletter 

// function for required fill-in box for e-mail
function MM_popupMsg(msg) { //v1.0
  alert(msg);
}

// set the cookie
function SetCookie(CookieName, CookieValue){
ExpiryDate = new Date();
ExpiryDate.setTime(ExpiryDate.getTime() + 2000*24*60*60*1000);
var ExpiryDateString = "; expires=" + ExpiryDate.toGMTString();
document.cookie = CookieName + "=" + escape(CookieValue) + ExpiryDateString;
}

//  retrieve the information in the cookie storage
function GetCookieValue(CookieName)
{
var CookieValue = "";
var DocumentCookie = " " + document.cookie + ";";
var CookieSearchStr = " " + CookieName + "=";
var CookieStartPosition = DocumentCookie.indexOf(CookieSearchStr);
var CookieEndPosition;

if (CookieStartPosition != -1) {
CookieStartPosition += CookieSearchStr.length;
CookieEndPosition = DocumentCookie.indexOf(";", CookieStartPosition);
CookieValue = unescape(DocumentCookie.substring(CookieStartPosition, CookieEndPosition));
}
return CookieValue;
}
 
// send information to output
function changelocation()
{
 SetCookie('username', document.testform.username.value)
}


