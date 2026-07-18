<section id="dealWorkspace" class="section">

<h2>
🏦 RO'Lyfe Deal Workspace
</h2>


<div class="card">


<div class="input-grid">


<input 
id="dealAddress"
placeholder="Property Address">


<input
id="dealPurchase"
placeholder="Purchase Price">


<input
id="dealARV"
placeholder="ARV">


<input
id="dealRehab"
placeholder="Rehab Budget">


<input
id="dealBorrower"
placeholder="Borrower Name">


</div>


<button 
class="glow-btn"
onclick="createWorkspaceDeal()">

🚀 CREATE DEAL

</button>


<div 
id="dealWorkspaceResult"
class="result-box">

No active deal.

</div>


</div>


</section>


function createWorkspaceDeal(){

let deal = createDeal();


updateDealProperty({

address:
document.getElementById("dealAddress").value,

purchasePrice:
document.getElementById("dealPurchase").value,

arv:
document.getElementById("dealARV").value

});


updateRehab(
document.getElementById("dealRehab").value
);


updateBorrower({

name:
document.getElementById("dealBorrower").value

});


document.getElementById(
"dealWorkspaceResult"
).innerHTML =

`
<h3>Deal Created</h3>

<p>
ID:
${currentDeal.id}
</p>

<p>
Property:
${currentDeal.propertyAddress}
</p>

<p>
ARV:
$${currentDeal.arv}
</p>

<p>
Rehab:
$${currentDeal.rehabBudget}
</p>

`;

  }

function createWorkspaceDeal(){

let deal = createDeal();


updateDealProperty({

address:
document.getElementById("dealAddress").value,

purchasePrice:
document.getElementById("dealPurchase").value,

arv:
document.getElementById("dealARV").value

});


updateRehab(
document.getElementById("dealRehab").value
);


updateBorrower({

name:
document.getElementById("dealBorrower").value

});



document.getElementById(
"dealWorkspaceResult"
).innerHTML =

`

<h3>
✅ Deal Created
</h3>

<p>
Deal ID:
${currentDeal.id}
</p>

<p>
Property:
${currentDeal.propertyAddress}
</p>

<p>
Purchase:
$${currentDeal.purchasePrice}
</p>

<p>
ARV:
$${currentDeal.arv}
</p>

<p>
Rehab:
$${currentDeal.rehabBudget}
</p>

`;

}
