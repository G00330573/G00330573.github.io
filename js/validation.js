//This is a list of variables that is be used throughout the process
var formFinished = false;


//function submitForm() will analysed the user. This make sure the form is properly filled
function validate(form) {
	fail = validateFirstname(form.firstname.value);
	fail +=validateLastname(form.lastname.value);
	fail +=validateMobileNo(form.mobilenumber.value);
	fail +=validateEmail(form.email.value);
	
		if (fail == "") {
		formFinished = true;
		return true;
	} else {
		alert(fail);
		return false;
	}
}
//First Name: Use must enter a captial letter for the first letter of their name then a lower case letter. First Name should not be left blank
function validateFirstname(field) {
	
	if (field == "")
		return "No First Name was entered, please enter First Name.\n";
	
	else if ((field.search[/A-Z/i] < 1) && field.search(/[A-Z]/) < 1)
		return "Please use both capital and lower case letters.\n"
		return "";
}
//Last Name: Use must enter a captial letter for the first letter of their name then a lower case letter. Last Name should not be left blank
function validateLastname(field) {
	if (field == "")
		return "No Last Name was entered, please enter Last Name.\n";
	
	else if ((field.search[/A-Z/i] < 1) && field.search(/[A-Z]/) < 1)
		return "Please use both capital and lower case letters.\n";
		return "";
}
//Mobile number: The user must not leave this section blank and only numeric number can be entered, and also the number must be no less than 10 digits
function validateMobileNo(field) {
	if (field == "")
		return "No Mobile Number was entered, please enter a valid Mobile Number\n";
	
	else if (field.length <10)
		return "The Mobile Number entered is not valid, please enter a valid Mobile Number\n";
	
	else if (!/[0-9()]/.test(field))
		return "Only numeric digits 0-9 are acceptable, brackets () may be used to for international Mobile No.'s .\n";
		return "";
}
//To check if Email was left blank and to make sure than the Email entered is valid.
 function validateEmail(field) {
	 if (field == "")
		 return "No Email was entered, please enter a valid Email.\n";
	 
	 else if (!((field.indexOf(".") > 0) &&
				(field.indexOf("@") > 0)) ||
				/[^a-zA-Z0-9.@_-]/.test(field))
		return "The Email address entered is invalid, please enter a valid Email address.\n";
		return "";
 }
 
//Function validate has to check if the form is filled out appropriately, otherwise the user will not be able to continue to the next step

function validate_activity() {
	if(formFinished == true) {
		document.location.href = "./generalquiz.html"
	} else {
		alert("Please finish the form first!");
	}
}
