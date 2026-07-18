<section id="dealWorkspace">
🏦 Deal Workspace
</section>

/*
=====================================
RO'Lyfe Deal Workspace Engine
Version: 1.0

Purpose:
Central deal record connecting:
Property
Borrower
Rehab
Calculators
AI Underwriting
Investor Reports
=====================================
*/


let currentDeal = {

    id: "",
    
    propertyAddress: "",

    purchasePrice: 0,

    arv: 0,

    rehabBudget: 0,

    loanAmount: 0,

    borrower: "",

    borrowerCredit: 0,

    exitStrategy: "",

    dealScore: 0,

    aiDecision: "",

    createdDate: new Date().toISOString()

};



// CREATE NEW DEAL

function createDeal(){

currentDeal.id =
"ROLYFE-DEAL-" + Date.now();


console.log(
"New Deal Created:",
currentDeal
);


return currentDeal;

}




// UPDATE PROPERTY DATA

function updateDealProperty(data){

currentDeal.propertyAddress =
data.address || "";

currentDeal.purchasePrice =
Number(data.purchasePrice) || 0;

currentDeal.arv =
Number(data.arv) || 0;


saveDeal();

}




// UPDATE BORROWER

function updateBorrower(data){

currentDeal.borrower =
data.name || "";

currentDeal.borrowerCredit =
Number(data.credit) || 0;


saveDeal();

}




// UPDATE REHAB

function updateRehab(amount){

currentDeal.rehabBudget =
Number(amount) || 0;


saveDeal();

}




// SAVE DEAL

function saveDeal(){

localStorage.setItem(
"rolyfeCurrentDeal",
JSON.stringify(currentDeal)
);


console.log(
"Deal Saved",
currentDeal
);

}




// LOAD DEAL

function loadDeal(){

let saved =
localStorage.getItem(
"rolyfeCurrentDeal"
);


if(saved){

currentDeal =
JSON.parse(saved);

}


return currentDeal;

}




// DEAL SUMMARY

function getDealSummary(){

return {

Property:
currentDeal.propertyAddress,

Purchase:
currentDeal.purchasePrice,

ARV:
currentDeal.arv,

Rehab:
currentDeal.rehabBudget,

Loan:
currentDeal.loanAmount,

Score:
currentDeal.dealScore

};

}
