/*
=====================================
RO'Lyfe Property Intelligence Engine
Version: 1.0

Purpose:
Property search, valuation links,
and real estate research tools.
=====================================
*/


function openRedfin(){

let address = document.getElementById("propertyAddress").value;

if(!address){
alert("Enter property address first");
return;
}

let url =
"https://www.redfin.com/search?q="
+ encodeURIComponent(address);

window.open(url,"_blank");

}
