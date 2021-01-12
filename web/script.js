var a;
function OpenIncomeWindow()
{
	document.getElementById("ExpenseWindow").style.display = "none";
	document.getElementById("DebtWindow").style.display = "none";

	if(a==1)
	{
		document.getElementById("IncomeWindow").style.display = "block";
		return a = 0;
	}
	else
	{
		document.getElementById("IncomeWindow").style.display = "none";
		return a = 1;

	}

}


function OpenExpenseWindow()
{
	document.getElementById("IncomeWindow").style.display = "none";
	document.getElementById("DebtWindow").style.display = "none";

	if(a==1)
	{
		document.getElementById("ExpenseWindow").style.display = "block";
		return a = 0;
	}
	else
	{
		document.getElementById("ExpenseWindow").style.display = "none";
		return a = 1;

	}

}




function OpenDebtsWindow()
{
	document.getElementById("IncomeWindow").style.display = "none";
	document.getElementById("ExpenseWindow").style.display = "none";

	if(a==1)
	{
		document.getElementById("DebtWindow").style.display = "block";
		return a = 0;
	}
	else
	{
		document.getElementById("DebtWindow").style.display = "none";
		return a = 1;

	}

}

function expense(){
	//money variable
	var ams_js = document.querySelector("#amountOfMoneySpent").value;
	
	//tag variables
	var sel = document.getElementById('inputTagSelect').selectedIndex;
	var options = document.getElementById('inputTagSelect').options;
	var tag_js = options[sel].text;
	if (ams_js < 0.01) {
		//show error
		document.getElementById('alert-money').style.display = "block";
		return false; 
	}
	else
	{
		//tag
		eel.tag_select_py(tag_js);
		console.log(tag_js);

	
		//money
		document.getElementById('alert-money').style.display = "none";
		console.log(ams_js);
		eel.tag_money_spend_amount_py(ams_js);	
	}
}

function amount_of_money_spent(){
	var ams_js = document.querySelector("#amountOfMoneySpent").value;
	
	if (ams_js < 0.01) {
		document.getElementById('alert-money').style.display = "block";
		return false; 
	}
	else
	{
		document.getElementById('alert-money').style.display = "none";
		console.log(ams_js);
		eel.tag_money_spend_amount_py(ams_js);	
	}	
	
}



function tag_select(){
	

	if (amount_of_money_spent.ams_js < 0.01) {
		throw new Error("Stopping the function!");
	}
	else
	{
		var sel = document.getElementById('inputTagSelect').selectedIndex;
		var options = document.getElementById('inputTagSelect').options;
		var tag_js = options[sel].text;
		eel.tag_select_py(tag_js);
		console.log(tag_js);
	}
}

function clear_values_expenses(){
	document.getElementById('inputTagSelect').value = 'Other'
	document.getElementById('amountOfMoneySpent').value = ' ';

}