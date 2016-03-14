# jquerydropdown
Simple jQuery custom select box with search inside the given list.

<b>Usage:</b><br/>
You just need to include in your HTML jQuery.js and main.js file that contains the function and call the method:
<pre>
$(document).ready(function() {
  searchDropDown("city", "city_list");
});
</pre>
when page is loaded (see main.js for example) where "city" is the input box id where you can search and "city_list" is id of div that contains an ul list with entire list to search.

<b>Styling:</b><br/>
You can change styling as you want and is very somple. To change select icon, you just need to change the image "arrow-d.png". 
<pre>
#city
{
	width: 200px;
	background: #ffffff url("../img/arrow-d.png") no-repeat scroll right center;
	content: "";
	cursor: pointer;
	border: 1px solid #cacaca;
}
</pre>

Features:
- tested in Internet Explorer 11, Firefox and Chrome;
- searching in select box without losing normal functionality of a select box;
- keep entire list of elements after clicking in input to search again;
- no other requests to the server after page load;
- tested with up then 1000 elements;
