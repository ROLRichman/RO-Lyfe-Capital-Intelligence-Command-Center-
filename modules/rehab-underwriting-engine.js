// ======================================
// RO'Lyfe Rehab Underwriting Engine
// COGO Style Rehab Budget System
// ======================================


const RO_REHAB_ENGINE = {

    company: "Root Of Lyfe Holdings LLC",
    template: "COGO Rehab Line Item Template",
    version: "1.0",


    loadTemplate: function(){

        fetch("data/rehab-template.json")
        .then(response => response.json())
        .then(data => {

            window.rehabTemplate = data;

            renderRehabTemplate(data);

        })
        .catch(error => {

            console.error(
                "Rehab Template Error:",
                error
            );

        });

    },


    calculateTotal: function(items){

        let total = 0;

        items.forEach(item => {

            total += Number(item.cost) || 0;

        });


        return total;

    },


    generateReport: function(){

        if(!window.rehabTemplate){

            alert(
            "Load rehab template first."
            );

            return;

        }


        let total =
        this.calculateTotal(
            window.rehabTemplate.items
        );


        const report = {

            company:
            this.company,

            template:
            this.template,

            date:
            new Date().toLocaleDateString(),

            rehabTotal:
            total,

            lineItems:
            window.rehabTemplate.items

        };


        localStorage.setItem(
            "rolyfeRehabReport",
            JSON.stringify(report)
        );


        return report;

    }


};




// ======================================
// DISPLAY REHAB TEMPLATE
// ======================================


function renderRehabTemplate(data){


const container =
document.getElementById(
"rehabTemplateContainer"
);



if(!container) return;



let html = `

<table class="rehab-table">

<thead>

<tr>

<th>Item Number</th>

<th>Description</th>

<th>Estimate Cost</th>

</tr>

</thead>

<tbody>

`;



data.items.forEach(item=>{


html += `

<tr>

<td>${item.number}</td>

<td>${item.description}</td>

<td>
<input 
class="rehab-cost"
data-id="${item.number}"
value="${item.cost}">
</td>

</tr>

`;



});



html += `

</tbody>

</table>


<h3>

Total Rehab Budget:

<span id="rehabTotal">

$0

</span>

</h3>

`;



container.innerHTML = html;


updateRehabTotal();


}




// ======================================
// TOTAL CALCULATOR
// ======================================


function updateRehabTotal(){


let total = 0;


document
.querySelectorAll(".rehab-cost")
.forEach(input=>{


total +=
Number(
input.value
) || 0;


});



const output =
document.getElementById(
"rehabTotal"
);



if(output){

output.innerHTML =
"$" +
total.toLocaleString();

}


}





document.addEventListener(
"input",
function(e){


if(
e.target.classList.contains(
"rehab-cost"
)
){

updateRehabTotal();

}


});





// ======================================
// BUTTON ACTIONS
// ======================================


function loadRehabTemplate(){

RO_REHAB_ENGINE.loadTemplate();

}



function downloadRehabBudget(){


const report =
RO_REHAB_ENGINE.generateReport();



if(!report) return;



const blob =
new Blob(

[
JSON.stringify(
report,
null,
2
)

],

{
type:
"application/json"
}

);



const url =
URL.createObjectURL(blob);



const link =
document.createElement("a");


link.href=url;


link.download =
"ROLyfe_Rehab_Underwriting_Report.json";


link.click();


}





function emailRehabBudget(){


const report =
RO_REHAB_ENGINE.generateReport();



if(!report) return;



const subject =
encodeURIComponent(
"RO'Lyfe Rehab Underwriting Package"
);



const body =
encodeURIComponent(

"Attached is the RO'Lyfe rehab underwriting package.\n\n" +

"Total Rehab Budget: $" +

report.rehabTotal.toLocaleString()

);



window.location.href =
"mailto:richman@rootoflyfe.com?subject=" +
subject +
"&body=" +
body;


}
