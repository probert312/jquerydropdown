$(document).ready(function() {
	$("html").click(function(){
		$("#city_list").hide();
	});

	$("#city").click(function(event){
		event.stopPropagation();
		$(this).select();
    
		$("#city_list").show();
    
		$("#city_list li").each(function(){
			$(this).show();
		});
	});
  
	$("#city").keyup(function(event){
		strText = $(this).val().toLowerCase();
    
		if (strText.length > 0)
		{
			$("#city_list li").each(function(){
				elValueOriginal = $(this).attr("data-city");
				elValue = elValueOriginal.toLowerCase();

				if (elValue.search(strText) == -1)
				{        
					$("#city_list li[data-city='"+elValueOriginal+"']").hide();
				}
				else $("#city_list li[data-city='"+elValueOriginal+"']").show();
			});
		}
		else
		{
			$("#city_list li").each(function(){
				$(this).show();
			});
		}
	});
  
	$("#city_list li").click(function (){
		$("#city").val($(this).attr("data-city"));
	});
});
