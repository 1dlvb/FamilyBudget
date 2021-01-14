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
	//spenet money variable
	var ams_js = document.querySelector("#amountOfMoneySpent").value;
	
	//tag variables
	var selExp = document.getElementById('inputTagSelectExp').selectedIndex;
	var optionsExp = document.getElementById('inputTagSelectExp').options;
	var tag_exp_js = optionsExp[selExp].text;
	
	if (ams_js < 0.01) {
		//show error
		document.getElementById('alert-money-exp').style.display = "block";
		return false; 
	}
	else
	{
		//tag
		eel.tag_select_exp_py(tag_exp_js);
		console.log(tag_exp_js);

	
		//money
		document.getElementById('alert-money-exp').style.display = "none";
		console.log(ams_js);
		eel.tag_money_spend_amount_py(ams_js);	
	}
}



function income(){
	//Resived money
	var ags_js = document.querySelector("#amountOfMoneyGet").value;

	//tag variables
	var selInc = document.getElementById("inputTagSelectInc").selectedIndex;
	var optionsInc = document.getElementById("inputTagSelectInc").options;
	var tag_inc_js = optionsInc[selInc].text;

	if (ags_js < 0.01) {
		//show error
		document.getElementById(('alert-money-inc')).style.display = 'block';
		return false;
	}
	else 
	{
		//tag
		eel.tag_select_inc_py(tag_inc_js);
		console.log(tag_inc_js);

	
		//money
		document.getElementById('alert-money-inc').style.display = "none";
		console.log(ags_js);
		eel.tag_money_get_amount_py(ags_js);	
	}
}


function debt(){
	//Resived money
	var amount_of_debt_js = document.querySelector('#amount-of-debt').value;

	//name variables
	var moneylenders_name_js = document.querySelector('#moneylenders-name').value;


	if ((amount_of_debt_js < 0.01)||(isEmpty(moneylenders_name_js))){
		document.getElementById("alert-money-debt").style.display = 'block';
		return false;
	}
	else
	{
		//name
		eel.moneylenders_name_py(moneylenders_name_js);
		console.log(moneylenders_name_js);

		//money
		document.getElementById("alert-money-debt").style.display = 'none';
		eel.amount_of_debt_py(amount_of_debt_js);
		console.log(amount_of_debt_js);

	}
}	


function isEmpty(str){
	if (str.trim() == '')
	{
		return true;
	}
	else
	{
		return false;
	}
}

function clear_values_incomes(){
	document.getElementById('amountOfMoneyGet').value = 'Salary'
	document.getElementById('inputTagSelectInc').value = ' ';

}

function clear_values_expenses(){
	document.getElementById('inputTagSelectExp').value = 'Other'
	document.getElementById('amountOfMoneySpent').value = ' ';

}

function clear_values_debts(){
	document.getElementById('amount-of-debt').value = ' '
	document.getElementById('moneylenders-name').value = ' ';

}