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

function TagSelect(){
	var sel = document.getElementById('inputTagSelect').selectedIndex;
	var options = document.getElementById('inputTagSelect').options;
	var tag_js = options[sel].text;
	eel.tag_select_py(tag_js)
	console.log(tag_js);
}
