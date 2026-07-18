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

function sendPropertyToDeal(){

document.getElementById("dealAddress").value =
document.getElementById("propertyAddress").value;


document.getElementById("dealPurchase").value =
document.getElementById("propertyPurchase").value;


document.getElementById("dealARV").value =
document.getElementById("propertyARV").value;


document.getElementById("dealRehab").value =
document.getElementById("propertyRehab").value;



document.getElementById("dealWorkspace")
.scrollIntoView({
behavior:"smooth"
});


document.getElementById("dealWorkspaceResult").innerHTML =

`
<h3>
✅ Property Loaded
</h3>

<p>
Ready for Deal Creation
</p>

`;

}
