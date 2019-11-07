
 

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  
  }
  
  // To validate form

  function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var y = document.forms["myForm"]["psw"].value;
    if (x == "" || y == "") {
      alert("field must be filled out");
      return false;
    }
    else  {
    
 
    }

  };



 
    function openSlideMenu(){
      document.getElementById('side-menu').style.width = '250px';
      document.getElementById('main').style.marginLeft = '250px';
    
    };

    function closeSlideMenu(){
      document.getElementById('side-menu').style.width = '0';
      document.getElementById('main').style.marginLeft = '0';
      
    };


// for the admin page
















var selectedRow = null

    function onFormSubmit(){
      if (validate()){
      var formData = readFormData();
      if (selectedRow == null)
      insertNewRecord(formData);
      else
      updateRecord(formData);

      resetForm();

      }

    }

    function readFormData() {
      var formData = {};
      formData["urName"] = document.getElementById("name").value;
      formData["urEmail"] = document.getElementById("email").value;
      
       
      
      
      return formData;
      
      
       
    }
    


    // this function adds name and email of the user  to another table upon submitting the filled form

    function insertNewRecord(data) {
      var table = document.getElementById("groupMembers").getElementsByTagName('tbody')[0];
      var newRow = table.insertRow(table.length);
      
      cell1 = newRow.insertCell(0);
      cell1.innerHTML = data.urName;

      cell2 = newRow.insertCell(1);
      cell2.innerHTML = data.urEmail;
      cell2 = newRow.insertCell(2);
      cell2.innerHTML = `<a class="show" onClick="onEdit(this)">Edit</a> <a class="show" onClick = "onDelete(this)">Delete</a> <a class="show">Send Message</a> `;
    }


    function resetForm() {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      selectedRow = null;
    }

    function onEdit(td) {
      selectedRow = td.parentElement.parentElement;

      document.getElementById("name").value = selectedRow.cells[0].innerHTML;
      document.getElementById("email").value = selectedRow.cells[1].innerHTML;

    }

    function updateRecord(formData) {
      selectedRow.cells[0].innerHTML = formData.urName;
      selectedRow.cells[1].innerHTML = formData.urEmail;
      
    }

    function onDelete(td) {
      if (confirm('Are you sure to delete this record ?'))
      row = td.parentElement.parentElement;
      document.getElementById("groupMembers").deleteRow(row.rowIndex);
      resetForm();
    }

    // authenticates the table-form

    function validate() {
      isValid = true;
      if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
      }else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
             document.getElementById("fullNameValidationError").classList.add("hide");

      }
      return isValid;
    }

