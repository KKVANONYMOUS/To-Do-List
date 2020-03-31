var input_text=document.getElementById("text_input");

function inputLength(){
   return input_text.value.length;
}

function addinput(){
  
   //creating a list item
		 var list=document.createElement("LI");

   var text=document.createTextNode(input_text.value);
   
   list.appendChild(text);
   document.body.appendChild(list);
   //making the input section empty 
   document.getElementById("text_input").value="";


   // creating a delete button for removing list 
   var removebtn=document.createElement("BUTTON");
   var symbol=document.createTextNode("X");
   removebtn.appendChild(symbol);
  list.appendChild(removebtn);


  //adding event listener on remove button
  removebtn.addEventListener("click",deleteListItem);

  //deleteListItem function
  function deleteListItem(){
   list.classList.add("delete");
  }
   list.addEventListener("click",taskdone);

   //task done fucntion
   function taskdone(){
      list.classList.toggle("done");
   }
   //function called when plus icon pressed
	}
   function addinputclick(){
      
     if(inputLength()>0){
      addinput();
     }
    
}
 //function called when enter key is pressed while entering list item
  function addinputafterEnterkey(e){
    
   if(inputLength() > 0 && e.keyCode ===13){
      addinput();
   }

}

