function myFunction() {
    var addItem = document.getElementById("addItem");
    
    var item = addItem.value;
    
    $("#categories").append("<li class='resp-tab-item'><span>" + item + "</span></li>"); 
	
	}