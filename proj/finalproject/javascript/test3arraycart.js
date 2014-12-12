document.write("<h1>Multiplication Table in 2 Dimensional Array<h1>");

 // Thomas Tivnen Cis 14a javascript 48076
//  testing for 2 dim array shoppingcart


var table2X2 = new Array(12);
function Initialize() 	{
	var i=0; j=0;
	for (i=0; i<12; i++)
		{
		table2X2[i] = new Array(12);
		for (j=0; j<12; j++)
                                         table2X2[i][j] = parseInt((i+1)*(j+1));
		}
}
// &nbsp non-breaking space
// &lt = less than, &gt = greater than sign
// += means Variable is equal to itself + this addition
// populate array
function ShowArray() {
	var i=0;j=0;
	var retString = "<table border='2'>";
	retString += " <tr>";
	for (i=0; i<13;  i++)	{
		if (i>0)
                    retString += "<TD>" + i + "</TD>";
		 else  {
	retString += "<td>&nbsp</TD>";
		}
	}
	retString += "</TR>";
	for (i=0; i<12;i++)
		{
	retString += "<tr> <td>" + (i+1) + "</td>";
		for (j=0; j<12; j++) {
		if (i==j) {
	retString += "<td>" + 				
	table2X2[i][j] + "</td>";
			}
		else
	retString += "<td>" + table2X2[i][j] + "</TD>";
		} // for j loop
	retString += "</tr>";
	} //for i loop
	retString += "</Table>";
	return retString;
} // end function