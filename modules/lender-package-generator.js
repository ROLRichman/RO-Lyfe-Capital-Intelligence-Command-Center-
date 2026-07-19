/*
=========================================
RO'Lyfe Lender Package Generator
=========================================
*/


function generateLenderPackage(){


if(!currentDeal){

alert(
"Create a deal first."
);

return;

}



let packageData = `

RO'LYFE HOLDINGS LLC

DEAL FUNDING PACKAGE

--------------------------------

PROPERTY:

${currentDeal.propertyAddress}


BORROWER:

${currentDeal.borrower}


CREDIT SCORE:

${currentDeal.creditScore}


EXIT STRATEGY:

${currentDeal.exitStrategy}


PURCHASE PRICE:

$${currentDeal.purchasePrice.toLocaleString()}


REHAB:

$${currentDeal.rehabBudget.toLocaleString()}


TOTAL PROJECT COST:

$${currentDeal.totalCost.toLocaleString()}


ARV:

$${currentDeal.arv.toLocaleString()}


EQUITY SPREAD:

$${currentDeal.equity.toLocaleString()}


LTV:

${currentDeal.ltv}%


AI DEAL SCORE:

${currentDeal.aiScore || "Run AI Analysis"}


--------------------------------

Prepared by:

RO'Lyfe Holdings LLC™

Rooted in Access. Built for Growth.

`;



let blob =
new Blob(
[packageData],
{
type:"text/plain"
}
);



let url =
URL.createObjectURL(blob);



let link =
document.createElement("a");


link.href=url;


link.download=
"ROLyfe-Lender-Package.txt";


link.click();



}
