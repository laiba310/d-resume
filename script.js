
    function addNewWEFeild() {
        let newNode = document.createElement("textarea");
        newNode.classList.add("form-control");
        newNode.classList.add("weField");
        newNode.classList.add("mt-2"); // Add 'mt-2' as a class
        newNode.setAttribute("placeholder", "Enter your work experience"); // Set the placeholder with complete text
    
        let weOb = document.getElementById("we");
        let weAddButton = document.getElementById("weAddButton");
        
        weOb.insertBefore(newNode, weAddButton);
    }
    

    function addNewAQField() {
        var newInput = document.createElement("textarea");
        newInput.setAttribute("class", "form-control eqField");
        newInput.setAttribute("placeholder", "Enter here");
        document.getElementById("aq").appendChild(newInput);
    }
function generateCV() {
    let nameField = document.getElementById("nameField").value;

    document.getElementById("nameT1").innerHTML = nameField 
    document.getElementById("nameT2").innerHTML = nameField 
    document.getElementById("contactT").innerHTML = document.getElementById("Phone").value ;
    document.getElementById("addressT").innerHTML = document.getElementById("Address").value; 
    document.getElementById("fbT").innerHTML = document.getElementById("fb-id").value ;
    document.getElementById("instaT").innerHTML = document.getElementById("insta-id").value; 
    document.getElementById("tweeterT").innerHTML = document.getElementById("tweeter-id").value; 
    document.getElementById("objectiveT").innerHTML = document.getElementById("ObjectiveField").value; 

    // Work Experience
    let wes = document.getElementsByClassName("weField");
    let workExperienceHTML = "";
    for (let e of wes) {
        if (e.value.trim() !== "") {
            workExperienceHTML += `<li>${e.value}</li>`;
        }
    }
    document.getElementById("weT").innerHTML = workExperienceHTML;
    
 // Education (Add similar logic if needed)
 document.getElementById("weT").innerHTML = workExperienceHTML;

 let educationFields = document.getElementsByClassName("eqField");
 let educationList = "";
 for (let e of educationFields) {
     if (e.value.trim() !== "") {
         educationList += `<li>${e.value}</li>`;
     }
 }
 document.getElementById("aqT").innerHTML = educationList;

document.getElementById("cv-form").style.display="none"

document.getElementById("cv-template").style.display="block"
}
function printCV(){
    Window.print();
}
