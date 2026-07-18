/*
=========================================
RO'Lyfe Deal Workspace Engine
Version: 2.0

Purpose:
- Create investment deals
- Store active deal data
- Calculate basic deal metrics
- Connect Property Hub → Deal Workspace
- Prepare lender/investor package data

=========================================
*/


let currentDeal = null;



// ==========================
// CREATE DEAL
// ==========================

function createWorkspaceDeal(){


let address =
document.getElementById("dealAddress").value;


let purchase =
Number(document.getElementById("dealPurchase").value || 0);


let arv =
Number(document.getElementById("dealARV").value || 0);


let rehab =
Number(document.getElementById("dealRehab").value || 0);


let borrower =
document.getElementById("dealBorrower").value;


let credit =
document.getElementById("dealCredit").value;


let exit =
document.getElementById("dealExit").value;



if(!address){

alert("Enter property address");

return;

}



currentDeal = {


id:
"ROL-" + Date.now(),


propertyAddress:
address,


purchasePrice:
purchase,


arv:
arv,


rehabBudget:
rehab,


borrower:
borrower,


creditScore:
credit,


exitStrategy:
exit,


created:
new Date().toLocaleDateString()


};



// Calculate metrics

currentDeal.totalCost =
purchase + rehab;



currentDeal.equity =
arv - currentDeal.totalCost;



currentDeal.ltv =
((purchase / arv) * 100).toFixed(2);



currentDeal.profitPotential =
arv - currentDeal.totalCost;



saveDeal();



displayDeal();



}



// ==========================
// DISPLAY DEAL
// ==========================


function displayDeal(){


let box =
document.getElementById(
"dealWorkspaceResult"
);



if(!box) return;



box.innerHTML =

`

<h3>
✅ Deal Created
</h3>


<p>
<strong>Deal ID:</strong>
${currentDeal.id}
</p>


<p>
<strong>Property:</strong>
${currentDeal.propertyAddress}
</p>


<p>
<strong>Borrower:</strong>
${currentDeal.borrower}
</p>


<p>
<strong>Credit Score:</strong>
${currentDeal.creditScore}
</p>


<p>
<strong>Exit:</strong>
${currentDeal.exitStrategy}
</p>


<hr>


<p>
<strong>Purchase:</strong>
$${formatMoney(currentDeal.purchasePrice)}
</p>


<p>
<strong>Rehab:</strong>
$${formatMoney(currentDeal.rehabBudget)}
</p>


<p>
<strong>Total Cost:</strong>
$${formatMoney(currentDeal.totalCost)}
</p>


<p>
<strong>ARV:</strong>
$${formatMoney(currentDeal.arv)}
</p>


<p>
<strong>Equity Spread:</strong>
$${formatMoney(currentDeal.equity)}
</p>


<p>
<strong>LTV:</strong>
${currentDeal.ltv}%
</p>


<p>
<strong>Potential Profit:</strong>
$${formatMoney(currentDeal.profitPotential)}
</p>


`

;

}



// ==========================
// CLEAR WORKSPACE
// ==========================


function clearWorkspaceDeal(){


currentDeal = null;


localStorage.removeItem(
"rolyfeCurrentDeal"
);



let box =
document.getElementById(
"dealWorkspaceResult"
);



if(box){

box.innerHTML =
"No active deal.";

}



}



// ==========================
// SAVE DEAL
// ==========================


function saveDeal(){


localStorage.setItem(

"rolyfeCurrentDeal",

JSON.stringify(currentDeal)

);


}



// ==========================
// LOAD LAST DEAL
// ==========================


function loadWorkspaceDeal(){


let saved =

localStorage.getItem(
"rolyfeCurrentDeal"
);



if(saved){


currentDeal =
JSON.parse(saved);



displayDeal();


}



}



// ==========================
// PROPERTY HUB CONNECTION
// ==========================


function sendPropertyToDeal(){



document.getElementById("dealAddress").value =

document.getElementById("propertyAddress").value;



document.getElementById("dealPurchase").value =

document.getElementById("propertyPurchase").value;



document.getElementById("dealARV").value =

document.getElementById("propertyARV").value;



document.getElementById("dealRehab").value =

document.getElementById("propertyRehab").value;



document
.getElementById("dealWorkspace")
.scrollIntoView({

behavior:"smooth"

});



let result =

document.getElementById(
"dealWorkspaceResult"
);



if(result){

result.innerHTML =

`

<h3>
🏠 Property Loaded
</h3>

<p>
Ready for underwriting.
</p>

`;

}



}




// ==========================
// MONEY FORMAT
// ==========================


function formatMoney(value){


return Number(value || 0)

.toLocaleString(
"en-US"
);


}



// ==========================
// STARTUP
// ==========================


document.addEventListener(

"DOMContentLoaded",

function(){


loadWorkspaceDeal();


}

);
