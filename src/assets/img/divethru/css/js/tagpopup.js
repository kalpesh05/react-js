$("document").ready(function () {



	/*var user = JSON.parse(window.localStorage.getItem('user'));



	window.UTGS = [];
	if (user.tags) {
		window.UTGS = user.tags.split(',');
		console.log(window.UTGS);
	}*/

	/************************ tag list from db ****************************/

firebase.database().ref("Tags").orderByChild("tags_category_id").on("value", function(snapshot) {
			var i = 0;

			
			snapshot.forEach(function(childSnapshot) {
				var a = ["chk_decyour","chk_hopacc","chk_premo","chk_obface"];
				// key
				
				var key = childSnapshot.key;
				// value, could be object
				var childData = childSnapshot.val();
															if(i == 0){
												window.HTML5 = '<div class="container-fluid px-0 bg1 text-center"><div class="container page-heading"><h2>Select from the options below<br /> to '+childData.tags_category+':</h2><div class="row center">';
										}
									if(i == 1){
												window.HTML6 = '<div class="container-fluid px-0 bg2 text-center"><div class="container page-heading"><h2>'+childData.tags_category+':</h2><div class="row center">';
										}
									if(i == 2){
												window.HTML7 = '<div class="container-fluid px-0 bg3 text-center"><div class="container page-heading"><h2>'+childData.tags_category+':</h2><div class="row center_center2 justify-content-center">';
										}
									if(i == 3){
												window.HTML8 = '<div class="container-fluid px-0 bg4 text-center"><div class="container page-heading"><h2>'+childData.tags_category+':</h2><div class="row center">';
										}
				
				var trainindIdArray = childData.tags.split(',');
				

						var c = 1;
						$.each(trainindIdArray, function(index, value) { 
							if(c > 3){
								c = 1;
							}
						if(i == 0){
						//	alert(c);
							if(c == 1){
								window.HTML5 += '<div class="col-md-4 col-lg-5 check-title text-left">';
							}
								window.HTML5 += '<div class="form-check"><input class="form-check-input box-size"name="'+a[i]+'" class="'+a[i]+'" type="checkbox" value="'+value+'" id="defaultCheck'+index+'"><label class="form-check-label" for="defaultCheck1"><p>'+value+'</p></label></div>';
							if(c == 3){
									window.HTML5 += '</div><div class="col-md-4 col-lg-2"></div>';
							}
						c++;
						}

						if(i == 1){
						//	alert(c);
							if(c == 1){
								window.HTML6 += '<div class="col-md-4 slide2_check_title text-left">';
							}
								window.HTML6 += '<div class="form-check"><input class="form-check-input box-size"name="'+a[i]+'" class="'+a[i]+'" type="checkbox" value="'+value+'" id="defaultCheck'+index+'"><label class="form-check-label" for="defaultCheck1"><p>'+value+'</p></label></div>';
							if(c == 3){
									window.HTML6 += '</div>';
							}
						c++;
						}
						if(i == 2){
						//	alert();
							if(c == 1){
								window.HTML7 += '<div class="col-lg-3 slide2_check_title text-left">';
							}
								window.HTML7 += '<div class="form-check"><input class="form-check-input box-size"name="'+a[i]+'" class="'+a[i]+'" type="checkbox" value="'+value+'" id="defaultCheck'+index+'"><label class="form-check-label" for="defaultCheck1"><p>'+value+'&nbsp;&nbsp;</p></label></div>';
							if(c == 4 || c == 3){
									window.HTML7 += '</div>';
							}
						c++;
						}
						if(i == 3){
						//	alert(c);
							if(c == 1){
								window.HTML8 += '<div class="col-md-4 slide2_check_title text-left">';
							}
								window.HTML8 += '<div class="form-check"><input class="form-check-input box-size"name="'+a[i]+'" class="'+a[i]+'" type="checkbox" value="'+value+'" id="defaultCheck'+index+'"><label class="form-check-label" for="defaultCheck1"><p>'+value+'</p></label></div>';
							if(c == 3){
									window.HTML8 += '</div>';
							}
						c++;
						}
							
						
						});


							if(i == 0){
								window.HTML5 += '</div><a href="#" class="btn btn-look next nextBtn">N E X T</a></div></div>';
							}
							if(i == 1){
								window.HTML6 += '</div><a href="#" class="btn btn-look next nextBtn">N E X T</a></div></div>';

							}
						if(i == 2){
								window.HTML7 += '</div></div><a href="#" class="btn btn-look next nextBtn">N E X T</a></div></div>';

							}
						if(i == 3){
								window.HTML8 += '</div></div><a href="#" class="btn btn-look next finish">F I N I S H</a></div></div>';

							}	

							if(i == 0){
								
								$("#step-1").find(".panel-title").html(childData.tags_category);
								$("#step-1").html(window.HTML5);
							//	alert(childData.tags_category);
							}else if(i == 1){
								
								$("#step-2").find(".panel-title").html(childData.tags_category);
								$("#step-2").html(window.HTML6);
								//alert(childData.tags_category);
							}else if(i == 2){
								
								$("#step-3").find(".panel-title").html(childData.tags_category);
								$("#step-3").html(window.HTML7);
								//alert(childData.tags_category);
							}else if(i == 3){
								
								$("#step-4").find(".panel-title").html(childData.tags_category);
								$("#step-4").html(window.HTML8);
								//alert(childData.tags_category);
							}
			
				i++;
				
			});



			//alert($("#step-1").find(".panel-body").html());
console.log(window.html1);
});


	/************************ / tag list from db ****************************/

	/***************************** show tag's list to user *************************/

	$("body").on('click', '.updatefeed', function () {
		//alert(window.HTML2);
		$("#tagselection").modal("show");
		/*console.log(window.HTML2);
		$(".wizard").show();
		$(".plib").hide();*/
	});

	/***************************** / show tag's list to user *************************/


	var favorite = []
	$("body").on('click', ".finish", function () {


		$.each($("input[type='checkbox']:checked"), function (index, value) {
			//alert($(this).val());
			favorite.push($(this).val());
		});
		window.f = favorite;
		var db = firebase.database();
		var t = favorite.toString();
		db.ref("Users/" + user.user_id).update({ tags: t });

		//dowload_list(favorite);
		var curStep = $(this).closest(".setup-content"),
			curStepBtn = curStep.attr("id"),
			nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
			curInputs = curStep.find(".form-check").find("input[type='text'],input[type='checkbox']"),
			curInputs2 = curStep.find(".form-check").find("input:checkbox:checked"),
			isValid = true;
		$(".form-group").removeClass("has-error");
		//  for (var i = 0; i < curInputs.length; i++) {
		// if (!curInputs[i].prop("checked")) {
		//  alert(window.f.toString());
		if (curInputs2.length <= 0) {
			$(this).prev("span").remove();
			$(this).before("<span style='color:red;'>Please select at least one tag.!!</span>");
			//alert();
			isValid = false;
			$(curInputs[i]).closest(".form-group").addClass("has-error");
		} else if (curInputs2.length > 0) {
			$(".cat").html(window.ht);
			$("#tagselection").modal("hide");
		}


		//alert(user.user_id);

		//console.log(favorite);
	});
});