var a = 1;
function OpenIncomeWindow()
{	

	if(a==1)
	{
		document.getElementById("IncomeWindow").style.display = "block";

		//history button
		document.getElementById("open-history-btn").style.display = 'none';
		return a = 0;
	}
	else
	{
		document.getElementById("IncomeWindow").style.display = "none";
		document.getElementById("open-history-btn").style.display = 'inline-block';
		return a = 1;

	}

}


function OpenExpenseWindow()
{
	document.getElementById("IncomeWindow").style.display = "none";
	document.getElementById("DebtWindow").style.display = "none";
	document.getElementById("open-history-btn").style.display = 'none';

	if(a==1)
	{
		document.getElementById("ExpenseWindow").style.display = "block";
		document.getElementById("open-history-btn").style.display = 'none';

		return a = 0;
	}
	else
	{
		document.getElementById("ExpenseWindow").style.display = "none";
		document.getElementById("open-history-btn").style.display = 'inline-block';
		
		return a = 1;

	}

}




function OpenDebtsWindow()
{
	document.getElementById("IncomeWindow").style.display = "none";
	document.getElementById("ExpenseWindow").style.display = "none";
	document.getElementById("open-history-btn").style.display = 'none';

	if(a==1)
	{
		document.getElementById("DebtWindow").style.display = "block";
		document.getElementById("open-history-btn").style.display = 'none';

		return a = 0;
	}
	else
	{
		document.getElementById("DebtWindow").style.display = "none";
		document.getElementById("open-history-btn").style.display = 'inline-block';

		return a = 1;

	}

}

function income(){
	//Resived money
	var ags_js = document.querySelector("#amountOfMoneyGet").value;
	var date_js_inc = new Date(document.querySelector("#dateInc").value).toISOString().slice(0, 10);
	var nowDate = new Date().toISOString().slice(0, 10);


	//tag variables
	var selInc = document.getElementById("inputTagSelectInc").selectedIndex;
	var optionsInc = document.getElementById("inputTagSelectInc").options;
	var tag_inc_js = optionsInc[selInc].text;

	if ((ags_js < 0.01) ||(date_js_inc > nowDate)) {
	
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
		
		//date
		eel.date_inc_py(date_js_inc);
		console.log(date_js.getDate());
		console.log(date_js.getMonth() + 1);
		console.log(date_js.getFullYear());



	}
}


function expense(){
	//spenet money variable
	var ams_js = document.querySelector("#amountOfMoneySpent").value;
	var date_js_exp = new Date(document.querySelector("#dateExp").value).toISOString().slice(0, 10);
	var nowDate = new Date().toISOString().slice(0, 10);

	//tag variables
	var selExp = document.getElementById('inputTagSelectExp').selectedIndex;
	var optionsExp = document.getElementById('inputTagSelectExp').options;
	var tag_exp_js = optionsExp[selExp].text;
	
	if ((ams_js < 0.01) ||(date_js_exp > nowDate)) {
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

		//date
		eel.date_exp_py(date_js_exp);
	}
}




function debt(){
	//Resived money
	var amount_of_debt_js = document.querySelector('#amount-of-debt').value;
	var date_js_debt = new Date(document.querySelector("#dateDebt").value).toISOString().slice(0, 10);
	var nowDate = new Date().toISOString().slice(0, 10);

	//name variables
	var moneylenders_name_js = document.querySelector('#moneylenders-name').value;


	if ((amount_of_debt_js < 0.01)||(isEmpty(moneylenders_name_js)) || (date_js_debt > nowDate) ){
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

		//date
		eel.date_debt_py(date_js_debt);

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
	document.getElementById('inputTagSelectInc').value = 'Salary';
	document.getElementById('amountOfMoneyGet').value = ' ';

}

function clear_values_expenses(){
	document.getElementById('inputTagSelectExp').value = 'Other';
	document.getElementById('amountOfMoneySpent').value = ' ';

}

function clear_values_debts(){
	document.getElementById('moneylenders-name').value = '';
	document.getElementById('amount-of-debt').value = ' ';

}





function OpenHistoryWindow()
{	
	a = 0;
	document.getElementById("Incomes-open").style.display = "none";
	document.getElementById("Expenses-open").style.display = "none";
	document.getElementById("Debts-open").style.display = "none";
	document.getElementById("open-history-btn").style.display = 'none';
	document.getElementById("go-back-btn").style.display = 'block';

	//history page
	document.getElementById("history").style.display = 'none';


	if(a==1)
	{
		document.getElementById("Incomes-open").style.display = "block";
		document.getElementById("Expenses-open").style.display = "block";
		document.getElementById("Debts-open").style.display = "block";
		
		//history page
		document.getElementById("history").style.display = 'none';

		return a = 0;
	}
	else
	{
		document.getElementById("Incomes-open").style.display = "none";
		document.getElementById("Expenses-open").style.display = "none";
		document.getElementById("Debts-open").style.display = "none";
		
		//history page 
		document.getElementById("history").style.display = 'block';
		
		return a = 1;

	}

}

function CloseHistoryWindow()
{
	document.getElementById("Incomes-open").style.display = "inline-block";
	document.getElementById("Expenses-open").style.display = "inline-block";
	document.getElementById("Debts-open").style.display = "inline-block";
	document.getElementById("open-history-btn").style.display = 'inline-block';
	document.getElementById("go-back-btn").style.display = 'none';

	//history page
	document.getElementById("history").style.display = 'none';


	if(a==1)
	{
		document.getElementById("Incomes-open").style.display = "inline-block";
		document.getElementById("Expenses-open").style.display = "inline-block";
		document.getElementById("Debts-open").style.display = "inline-block";
		document.getElementById("open-history-btn").style.display = 'inline-block';
		
		//history page
		document.getElementById("history").style.display = 'none';



		return a = 0;
	}
	else
	{
		document.getElementById("Incomes-open").style.display = "none";
		document.getElementById("Expenses-open").style.display = "none";
		document.getElementById("Debts-open").style.display = "none";
		document.getElementById("open-history-btn").style.display = 'none';

		//history page
		document.getElementById("history").style.display = 'block';
		
		
		return a = 1;

	}

}
