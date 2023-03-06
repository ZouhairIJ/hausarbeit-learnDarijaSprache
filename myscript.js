var checkInput = document.getElementById("inputName");
 
var arr1 = [1,2,3];
var arr2 = [1,2,3];

const equals = (arr1, arr2) =>
 arr1.length === arr2.length &&
 arr1.every((v, i) => v === arr2[i]);

function checkDays(){

    const element = document.getElementById("scroller");
    const correctText = document.createTextNode("Versuchen Sie nochmal !");
    var field01 = document.getElementById("field01");
    var field02 = document.getElementById("field02");
    var field03 = document.getElementById("field03");
    var field04 = document.getElementById("field04");
    var field05 = document.getElementById("field05");
    var field06 = document.getElementById("field06");
    var field07 = document.getElementById("field07");
 
 var mapOfUserAnswers = [field01.value,
                         field02.value,
                         field03.value, 
                         field04.value, 
                         field05.value, 
                         field06.value, 
                         field07.value
                         ];
 var mapOfAnswers= ["tnin","tlat","larbe3","l5mis","jem3a","sebt", "l7ad"];
console.log("WASH HADOU B7AL B7AL ? ",equals(mapOfAnswers, mapOfUserAnswers));


 
 if(mapOfUserAnswers[0] === mapOfAnswers[0]){
     field01.style.backgroundColor = "green";
 }
 else field01.style.backgroundColor = "red";

 
 if(mapOfUserAnswers[1] === mapOfAnswers[1]){
     field02.style.backgroundColor = "green";
 }
 else field02.style.backgroundColor = "red";
 
 if(mapOfUserAnswers[2] === mapOfAnswers[2]){
     field03.style.backgroundColor = "green";
 }
 else field03.style.backgroundColor = "red";
 
 if(mapOfUserAnswers[3] === mapOfAnswers[3]){
     field04.style.backgroundColor = "green";
 }
 else field04.style.backgroundColor = "red";
 
 if(mapOfUserAnswers[4] === mapOfAnswers[4]){
     field05.style.backgroundColor = "green";
 }
 else field05.style.backgroundColor = "red";
 
 if(mapOfUserAnswers[5] === mapOfAnswers[5]){
     field06.style.backgroundColor = "green";
 }
 else field06.style.backgroundColor = "red";
 
 if(mapOfUserAnswers[6] === mapOfAnswers[6]){
     field07.style.backgroundColor = "green";
 }
 else field07.style.backgroundColor = "red";
 
 
 if(equals(mapOfAnswers, mapOfUserAnswers)){
   const element = document.getElementById("scroller");
   const correctText = document.createTextNode("NIIIIICE !");
   element.appendChild(correctText);
 }else{
   const element = document.getElementById("scroller");
   const correctText = document.createTextNode(" ❌ Versuchen Sie nochmal ❗");
   element.appendChild(correctText);
   setTimeout( function() { element.removeChild(correctText); }, 2000);
   
 }
}




var myImage = document.getElementById("image");
var imageArray = ["assets/uebung-2-2.png","assets/uebung-2-2.jpg","assets/uebung-2-3.png","assets/uebung-2-4.png"];
var imageIndex = 0; 
function changeImage() {

    // check if the input text is correct for the current image 
    var getValue= document.getElementById("text-ubung-1" );
    var br = document.createElement("br");

   if(document.getElementById("text-ubung-1").value == "Dar" && imageIndex == 0){
    const element = document.getElementById("card-uebung-2");
    const correctText = document.createTextNode("🏡YEAH ! \n Singular : Dar, Plural: Dyour .");

     if(imageIndex < imageArray.length - 1){
        imageIndex++;
       // update the image source with the new image from the array 
       document.getElementById("image").src = imageArray[imageIndex];
       myImage.setAttribute("src",imageArray[imageIndex]);
   }

   getValue.value = "";
   element.appendChild(correctText);
   element.appendChild(br);
    }


    else if(document.getElementById("text-ubung-1").value == "Tomobila" && imageIndex == 1){

        const element = document.getElementById("card-uebung-2");
        var br = document.createElement("br");
        const correctText = document.createTextNode("🚗 YEAH ! Singular : Tomobil(a), Plural: Tomobilat.");
        
        if(imageIndex < imageArray.length - 1){
            imageIndex++;
            document.getElementById("image").src = imageArray[imageIndex];
            myImage.setAttribute("src",imageArray[imageIndex]);
    }
    getValue.value = "";
    element.appendChild(correctText);
    element.appendChild(br);
    }

   else if(document.getElementById("text-ubung-1").value == "7mama" && imageIndex == 2){
    const element = document.getElementById("card-uebung-2");
    var br = document.createElement("br");
    const correctText = document.createTextNode("🕊 YEAH ! Singular : 7mama, Plural: 7mamat . ");
    
     if(imageIndex < imageArray.length - 1){
        imageIndex++;
        document.getElementById("image").src = imageArray[imageIndex];
        myImage.setAttribute("src",imageArray[imageIndex]);

   }
   getValue.value = "";
   element.appendChild(correctText);
   element.appendChild(br);
    }

   else if(document.getElementById("text-ubung-1").value == "Kora" && imageIndex == 3){
    const element = document.getElementById("card-uebung-2");
    var br = document.createElement("br");
    const correctText = document.createTextNode("⚽ YEAH ! Singular : Kora, Plural: Kwari / Korat");
    
    element.appendChild(correctText);
     if(imageIndex < imageArray.length - 1){
        imageIndex++;
        document.getElementById("image").src = imageArray[imageIndex];
        myImage.setAttribute("src",imageArray[imageIndex]);
        getValue.value = "";
        element.appendChild(br);
    
     } 
     document.getElementById("button-next").disabled = true;
     document.getElementById("text-ubung-1").disabled = true;
     setTimeout( function() { alert("Congrats !"); }, 2000);
   }

   else {
    alert("Incorrect answer!");
   }
}