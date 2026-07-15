// =====================================================
// RO'Lyfe NoteForge™
// Capital Intelligence Operating Engine v2
// Root Of Lyfe Holdings LLC™
// =====================================================


// =====================================================
// GLOBAL DATABASE
// =====================================================

let notes = [];
let investors = [];
let lenders = [];
let deals = [];


// =====================================================
// LOGIN SYSTEM
// =====================================================

function loginUser(){

    let email =
    document.getElementById("loginEmail").value.trim();


    if(!email){

        alert("Enter email first");
        return;

    }


    localStorage.setItem(
        "rolyfeUser",
        email
    );


    document.getElementById("loginScreen")
    .style.display="none";


    document.getElementById("app")
    .classList.remove("hidden");


    console.log(
        "RO'Lyfe User:",
        email
    );

}



function logoutUser(){

    localStorage.removeItem(
        "rolyfeUser"
    );


    document.getElementById("loginScreen")
    .style.display="flex";


    document.getElementById("app")
    .classList.add("hidden");

}




// =====================================================
// STARTUP ENGINE
// =====================================================


window.onload=function(){

    checkLogin();

    loadDatabase();

};



function checkLogin(){

    let user =
    localStorage.getItem(
        "rolyfeUser"
    );


    if(user){

        document.getElementById("loginScreen")
        .style.display="none";


        document.getElementById("app")
        .classList.remove("hidden");

    }

}



// =====================================================
// JSON DATABASE LOADER
// =====================================================


async function loadDatabase(){


try{


let noteData =
await fetch(
"data/notes.json"
);


notes =
await noteData.json();



let investorData =
await fetch(
"data/investors.json"
);


investors =
await investorData.json();



let lenderData =
await fetch(
"data/lenders.json"
);


lenders =
await lenderData.json();



updateDashboard();

renderNotes();



console.log(
"RO'Lyfe Database Loaded"
);



}
catch(error){

console.log(
"Database loading:",
error
);

}



}




// =====================================================
// PORTFOLIO DASHBOARD
// =====================================================


function updateDashboard(){


if(!notes.length)
return;



let totalUPB =
notes.reduce(
(total,n)=>
total + Number(n.upb || 0),
0
);



let totalPurchase =
notes.reduce(
(total,n)=>
total + Number(n.salePrice || 0),
0
);



let monthly =
notes.reduce(
(total,n)=>
total + Number(n.payment || 0),
0
);



document.getElementById(
"totalNotes"
).innerHTML =
notes.length;



document.getElementById(
"totalUPB"
).innerHTML =
money(totalUPB);



document.getElementById(
"purchasePrice"
).innerHTML =
money(totalPurchase);



document.getElementById(
"targetYield"
).innerHTML =
"12.5%";



document.getElementById(
"monthlyCashflow"
).innerHTML =
money(monthly);



}



function money(number){

return "$"+
Number(number)
.toLocaleString();

}





// =====================================================
// NOTE TABLE
// =====================================================


function renderNotes(){


let table =
document.getElementById(
"noteTable"
);



if(!table)
return;



table.innerHTML="";



notes.forEach(note=>{


table.innerHTML += `

<tr>

<td>${note.id || "-"}</td>

<td>${note.county || "-"}</td>

<td>
${money(note.upb)}
</td>


<td>
${note.yield || "12.5"}%
</td>


</tr>

`;


});


}





// =====================================================
// PROPERTY INTELLIGENCE HUB
// =====================================================


function getPropertyAddress(){


return document
.getElementById(
"propertyAddress"
)
.value.trim();


}



function openZillow(){

let address=getPropertyAddress();

if(!address)
return alert("Enter property address");


window.open(

"https://www.zillow.com/homes/"+
encodeURIComponent(address)+
"_rb/"

);


}



function openRedfin(){

let address=getPropertyAddress();


window.open(

"https://www.redfin.com/stingray/do/location-autocomplete?location="+
encodeURIComponent(address)

);


}




function openRealtor(){

let address=getPropertyAddress();


window.open(

"https://www.realtor.com/realestateandhomes-search/"+
encodeURIComponent(address)

);


}



function openPropWire(){

window.open(
"https://www.propwire.com/"
);

}




function openOPA(){

window.open(
"https://property.phila.gov/"
);

}




function openPropertyChecker(){

window.open(
"https://pennsylvania.propertychecker.com/"
);

}




// =====================================================
// NOTE ANALYZER
// =====================================================


function analyzeNote(){


let upb =
Number(
document.getElementById(
"noteUPB"
).value
);



let price =
Number(
document.getElementById(
"notePurchase"
).value
);



let rate =
Number(
document.getElementById(
"noteRate"
).value
);



let payment =
Number(
document.getElementById(
"notePayment"
).value
);



let discount =
upb-price;



let annualIncome =
payment*12;



let roi =
((annualIncome-price)/price)*100;



document.getElementById(
"noteResults"
).innerHTML = `


<h3>
🧠 RO'Lyfe Underwriting Result
</h3>


<p>
Discount Capture:
${money(discount)}
</p>


<p>
Annual Cash Flow:
${money(annualIncome)}
</p>


<p>
Projected ROI:
${roi.toFixed(2)}%
</p>


<p>
Interest Rate:
${rate}%
</p>


`;


}




// =====================================================
// ROI + COMPOUND ENGINE
// =====================================================


function calculateROI(){


let investment =
Number(
document.getElementById(
"investmentAmount"
).value
);



let monthly =
Number(
document.getElementById(
"cashFlow"
).value
);



let years =
Number(
document.getElementById(
"investmentYears"
).value
);



let total =
monthly *
12 *
years;



let roi =
((total-investment)
/investment)*100;



let compound =
investment *
Math.pow(
1+(roi/100),
years
);



document.getElementById(
"roiResults"
).innerHTML = `


<h3>
📈 ROI Intelligence
</h3>


<p>
Cash Returned:
${money(total)}
</p>


<p>
ROI:
${roi.toFixed(2)}%
</p>


<p>
Compound Value:
${money(compound)}
</p>


`;

}




// =====================================================
// CREATIVE OFFER ENGINE
// =====================================================


function calculateOffer(){


let arv =
Number(
document.getElementById(
"arvOffer"
).value
);



let type =
document.getElementById(
"offerType"
).value
;



let result="";



if(type==="cash"){


result=

`
<h3>💵 Cash Offer</h3>

Offer:
${money(arv*.50)}

`;

}




if(type==="carry"){


let price =
arv*.65;


let down =
price*.05;



result=

`
<h3>🤝 Seller Carry</h3>

Purchase:
${money(price)}

Down Payment:
${money(down)}

Seller Note:
${money(price-down)}

Interest:
5%

Balloon:
4 Years

`;

}



if(type==="finance"){


let price =
arv*.75;



result=

`

<h3>📄 Seller Financing</h3>

Purchase:
${money(price)}

Seller Note:
${money(price)}

Interest:
6%

Balloon:
5 Years

`;

}



document.getElementById(
"offerResults"
)
.innerHTML=result;


}





// =====================================================
// PDF REPORT
// =====================================================


function generatePDF(){


const {jsPDF}
=
window.jspdf;



let pdf =
new jsPDF();



pdf.text(
"RO'Lyfe NoteForge™",
20,
20
);



pdf.text(
"Capital Intelligence Report",
20,
35
);



pdf.text(
"Root Of Lyfe Holdings LLC",
20,
50
);



pdf.save(
"RO-Lyfe-NoteForge-Report.pdf"
);


}





// =====================================================
// EMAIL PACKAGE
// =====================================================


function emailPackage(){



let subject =
"RO'Lyfe NoteForge Investor Package";



let body =
`

RO'Lyfe NoteForge Opportunity

Included:

- Note Analysis
- ROI Projection
- Underwriting Review
- Deal Summary

Thank you,

Richardson L.
Root Of Lyfe Holdings LLC

richman@rootoflyfe.com

`;



window.location.href =

"mailto:richman@rootoflyfe.com?subject="+

encodeURIComponent(subject)

+"&body="+

encodeURIComponent(body);



}




// =====================================================
// MOBILE MENU
// =====================================================


function toggleMenu(){


let menu =
document.getElementById(
"mobileMenu"
);


menu.classList.toggle(
"active"
);


}



function scrollSection(id){

document
.getElementById(id)
.scrollIntoView();


}



// =====================================================
// MODULE CONNECTION READY
// =====================================================


console.log(
"🏦 RO'Lyfe NoteForge™ Engine Online"
);
