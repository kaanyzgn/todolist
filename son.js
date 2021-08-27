const radios = document.querySelector(".radioButtons");
const boxes = document.querySelector(".textBoxes");
const boxClass = document.querySelector(".cardBody");


let x;
let y;
let item;
addEventListener();
addToUI();
createBoxClass();




function addEventListener() {
    radios.addEventListener("click", run);
    boxes.addEventListener("click",run);
}

function run(e) {
    x = e.target.value;
    y = e.target.value;  
    console.log(y);
}



function addEntry() {
    var title = document.getElementById("entryTitle").value;
    var allTitles = JSON.parse(localStorage.getItem("allTitles"));
    if (allTitles == null) allTitles = [];
    var titleElement = title;

    if (localStorage.getItem("allTitles") && localStorage.getItem("allTitles").indexOf(titleElement) > -1) {
        alert("This category already exist");
    }
    else {
        localStorage.setItem("titles", JSON.stringify(titleElement));
        allTitles.push(titleElement);
        localStorage.setItem("allTitles", JSON.stringify(allTitles));


    }

}


function addText() {
    var text = document.getElementById("text").value;
    var allTexts = JSON.parse(localStorage.getItem("allTexts"));
    if (allTexts == null) allTexts = [];
    //let data2 = JSON.parse(localStorage.getItem("allTexts"));
    
         item = {    
        "text": text,
        "id": x
    }

    console.log(x);
    
    //console.log(Object.values(item)[1]);
    //this.item.text=itemText;

    
//     function lists(){
    
//     for(var i=0;i<=data2.length;i++){
//         if(item.id == i){
//             let control =JSON.parse(localStorage.getItem("allTitles"))[item.id]
//             console.log(control);
//             console.log(item.text);
//         }   
//     }
// }

//     lists();
    
    localStorage.setItem("items", JSON.stringify(item));
    allTexts.push(item);
    localStorage.setItem("allTexts", JSON.stringify(allTexts));

}

document.getElementById("go").addEventListener("click", function () {
    addEntry();
    addToUI();
    createBoxClass();
    console.log(localStorage.getItem("titles"));
    console.log(localStorage.getItem("allTitles"));

});

document.getElementById("go2").addEventListener("click", function () {
    addText();
    createBoxClass();
    console.log(localStorage.getItem("items"));
    console.log(localStorage.getItem("allTexts"));
});


function addToUI(titleElement) {

    /*<div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
    <label class="form-check-label" for="inlineRadio1">1</label>
  </div>*/
    if (localStorage.getItem("allTitles") && localStorage.getItem("allTitles").indexOf(titleElement) === -1) {
        let data = JSON.parse(localStorage.getItem("allTitles"));
        radios.innerHTML = "";
        
        data.forEach((value, index) => {
            let radioItem = document.createElement("div");
            let inp = document.createElement("input");
            radioItem.className = "form-check form-check-inline"
            let radioTitle = document.createElement("b");

            inp.className = "form-check-input";
            inp.type = "radio";
            inp.name = "inlineRadioOptions";
            inp.id = "inlineRadio1";
            inp.value = index;


            radioTitle.appendChild(document.createTextNode(value));
            radioItem.appendChild(inp);
            radioItem.appendChild(radioTitle);
            radios.appendChild(radioItem);

        });


    }
}

function createBoxClass(titleElement){
    //let classItem = document.createElement("div");
    //classItem.className = "cardBody";

    if (localStorage.getItem("allTitles") && localStorage.getItem("allTitles").indexOf(titleElement) === -1) {

    boxClass.innerHTML="";  

   let data = JSON.parse(localStorage.getItem("allTexts"));
    
   let newListArray = {};
    
    data.forEach((value)=>{
        
        if(!newListArray[value.id]){
            newListArray[value.id] = [];       
        }
        newListArray[value.id].push({text: value.text});
        
    });


    for(let item in newListArray){
        let f =0;   
        let itemTitle= JSON.parse(localStorage.getItem("allTitles"));
        
        let ul = document.createElement('ul');   
        ul.innerHTML = "<span>"+ itemTitle[item] +"</span>";

        newListArray[item].forEach((value) => {

            let li = document.createElement('li');
            li.value = f++;
            li.innerHTML = value.text;

            let div = document.createElement("div");
            
            for(let i=0;i<f;i++){
            div.className="edit";            
            div.innerHTML="";
            div.contentEditable ="true";                            
            }

            div.appendChild(li)
            ul.appendChild(div);
                
        });

        console.log(newListArray)

        boxClass.appendChild(ul);
    }
        
}
}
















































































// document.querySelector(".edit").addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//       console.log("merhaba");
//     }

// });
// function edit(){

//     if(y == 0){

//         let input = document.createElement("input");
//         li.appendChild(input);
//     }

// }
    
    
      
    /*                                                
    console.log(Object.values(item)[1]);

    data3.forEach((value) => {

       // topListItem = document.querySelectorAll(".listTexts")[x];  //hangi liste gireceğini seçer

        let listItem = document.createElement("li");
        let linkItem= document.createElement("a");
        linkItem.href = "#";
        linkItem.className = "delete-item";
        linkItem.innerHTML = "<i class='fa fa-remove'></i>";
        listItem.className = "list-group-item d-flex justify-content-between"
        listItem.innerHTML = "<span>" + value.text + "</span>";
   

        listItem.appendChild(linkItem);
        topListItem.appendChild(listItem);
          
    }); */

//} 





// function addTextToUI(){
//     createBoxClass();

//     let listItem = document.createElement("li");
//     let linkItem= document.createElement("a");
//     linkItem.href = "#";
//     linkItem.className = "delete-item";
//     linkItem.innerHTML = "<i class = 'fa fa-remove'></i>";
//     listItem.className = "list-group-item d-flex justify-content-between"
//     listItem.appendChild(linkItem);
//     boxClass.appendChild(topListItem);

//     console.log(boxClass);
// }