var a = 1;

//now Date
var nowDate = new Date().toISOString().slice(0, 10);

function OpenIncomeWindow()
{		
	document.getElementById("ExpenseWindow").style.display = "none";
	document.getElementById("DebtWindow").style.display = "none";
	document.getElementById("open-history-btn").style.display = 'none';

	if(a==1)
	{
		document.getElementById("IncomeWindow").style.display = "block";
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

async function income(){
	//Resived money
	var amg_js = document.querySelector("#amountOfMoneyGet").value;
	//date
	var date_js_inc = new Date(document.querySelector("#dateInc").value).toISOString().slice(0, 10);


	//tag variables
	var selInc = document.getElementById("inputTagSelectInc").selectedIndex;
	var optionsInc = document.getElementById("inputTagSelectInc").options;
	var tag_inc_js = optionsInc[selInc].text;

	if ((amg_js < 0.01) || (date_js_inc > nowDate)) {
	
		//show error
		document.getElementById(('alert-money-inc')).style.display = 'block';
		return false;
	}
	else 
	{
		
		//hide error
		document.getElementById('alert-money-inc').style.display = "none";
		
		//incomes
		eel.incomes_py(tag_inc_js, amg_js, date_js_inc);


	}
}


function expense(){
	//spenet money variable
	var ams_js = document.querySelector("#amountOfMoneySpent").value;
	//date
	var date_js_exp = new Date(document.querySelector("#dateExp").value).toISOString().slice(0, 10);
	


	
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
		console.log(date_js_exp);	

		//hide error
		document.getElementById('alert-money-exp').style.display = "none";
		
		eel.expenses_py(tag_exp_js, ams_js, date_js_exp);

	}
}




function debt(){
	//Resived money
	var amount_of_debt_js = document.querySelector('#amount-of-debt').value;
	//date
	var date_js_debt = new Date(document.querySelector("#dateDebt").value).toISOString().slice(0, 10);

	//name variables
	var moneylenders_name_js = document.querySelector('#moneylenders-name').value;


	if ((amount_of_debt_js < 0.01)||(isEmpty(moneylenders_name_js)) || ((date_js_debt > nowDate) && (date_js_debt != null)) ){
		document.getElementById("alert-money-debt").style.display = 'block';
		return false;
	}
	else
	{
		
		//hide error
		document.getElementById("alert-money-debt").style.display = 'none';
		
		eel.debts_py(moneylenders_name_js, amount_of_debt_js, date_js_debt)

		

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
	document.getElementById('amountOfMoneyGet').value = '';

}

function clear_values_expenses(){
	document.getElementById('inputTagSelectExp').value = 'Other';
	document.getElementById('amountOfMoneySpent').value = '';

}

function clear_values_debts(){
	document.getElementById('moneylenders-name').value = '';
	document.getElementById('amount-of-debt').value = '';

}





function OpenHistoryWindow()
{	
	a = 0;
	document.getElementById("Incomes-open").style.display = "none";
	document.getElementById("Expenses-open").style.display = "none";
	document.getElementById("Debts-open").style.display = "none";
	document.getElementById("open-history-btn").style.display = 'none';
	document.getElementById("go-back-btn").style.display = 'block';
	document.getElementById("header").style.display = 'none';
	
	//history page
	document.getElementById("history").style.display = 'none';


	if(a==1)
	{
		document.getElementById("Incomes-open").style.display = "block";
		document.getElementById("Expenses-open").style.display = "block";
		document.getElementById("Debts-open").style.display = "block";
		document.getElementById("header").style.display = 'block';
			
		//history page
		document.getElementById("history").style.display = 'none';

		return a = 0;
	}
	else
	{
		document.getElementById("Incomes-open").style.display = "none";
		document.getElementById("Expenses-open").style.display = "none";
		document.getElementById("Debts-open").style.display = "none";
		document.getElementById("header").style.display = 'none';
		
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
	document.getElementById("header").style.display = 'block';


	//history page
	document.getElementById("history").style.display = 'none';


	if(a==1)
	{
		document.getElementById("Incomes-open").style.display = "inline-block";
		document.getElementById("Expenses-open").style.display = "inline-block";
		document.getElementById("Debts-open").style.display = "inline-block";
		document.getElementById("open-history-btn").style.display = 'inline-block';
		document.getElementById("header").style.display = 'block';
			
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
		document.getElementById("header").style.display = 'none';

		//history page
		document.getElementById("history").style.display = 'block';
		
		
		return a = 1;

	}

}

async function show_total_month_profit(){
	//total profit
	var profit = await eel.show_total_month_profit_py()();
	document.getElementById("show-total-month-profit").innerHTML = "Your incomes: " + profit.toFixed(2) + " ₽";
	console.log(profit);	
}

async function show_total_month_expenses(){
	//total spent
	var expense = await eel.show_total_month_expenses_py()();
	document.getElementById("show-total-mouth-expenses").innerHTML = "Your expenses: " + expense.toFixed(2) + " ₽";
	console.log(expense);	

}

async function show_month_rest_of_money(){
	//rest
	var rest = await eel.show_month_rest_money_py()();
	document.getElementById("show-month-rest-money").innerHTML = "Rest of money: " + rest.toFixed(2) + " ₽";
	console.log(rest);
}