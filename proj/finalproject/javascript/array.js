// thomas Tivnen cis14a 48076

	//Setup the savings table
	var balance = 100;//unit = $'s
	var intRate = 5;//unit = percentage rate per annum
	var deposit = 500;//unit = $'s
	var str="";
	var yrCol1 = [];
	var savcol2 =[];
	var year;
	
	
	
	
	//Output the initial conditions
	document.write("<p>Initial Balance = $"+balance+"</p>");
	document.write("<p>Interest Rate   = "+intRate+"%</p>");
	document.write("<p>Yearly Deposit   = $"+deposit+"</p>");



	//Generate a table
	//++year=year++=year+1=(year+=1)
	//for(var year=1;year<=50; year++)
	//{
		for(var year = 1; year <= 50; year++)
		{
		str+=("<tr>");
		str+=("<td>"+year+"</td>");
		
		//Calculate the balance
		
		//balance=balance*(1+intRate/100);
		balance*=(1+intRate/100);
		balance+=deposit;
		balance=balance.toFixed(2);
		str+=("<td>"+balance+"</td>");
		str+="</tr>";
		
		
	}
	document.write ("<tr>");
	
	document.write(str);