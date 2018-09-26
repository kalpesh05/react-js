
	firebase.database().ref("/AccessCodes/"+user.access_code).on("value", function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				// key
				var key = childSnapshot.key;
				// value, could be object
				var childData = childSnapshot.val();
				console.log(key);
				$.map(childData, function(value, index) {
								if(index == "bundle"){
									window.localStorage.setItem("Accessbundle",value);
								}
								if(index == "category"){
									window.localStorage.setItem("Accesscat",value);
								}
								if(index == "session"){
									window.localStorage.setItem("Accesssession",value);
								}
								
				});
			});
		});


/*var email = "companytest1206@gmail.com";
var password = '123456789';
var day = 0;
firebase.auth().signInWithEmailAndPassword(email, password).then( function(user){
//	 window.location.href =  url+'/admin';
    console.log("Authenticated successfully with payload:", user);
    auth = user;
	firebase.database().ref("Users/"+user.uid).on("value", function(snapshot) {
	window.localStorage.setItem('user',JSON.stringify(snapshot));
			snapshot.forEach(function(childSnapshot) {
				// key
				var key = childSnapshot.key;
				// value, could be object
				var childData = childSnapshot.val();
if(key == 'last_free_conversation_id'){
	day = childData+1;
	$(".day").html(childData+1);
	//window.localStorage.setItem('content', day);
	window.localStorage.setItem('content', day);
console.log(childData);
}				
				// Do what you want with these key/values here*/
	/*	});
		});
  })
  .catch(function(error){
    console.log("Login Failed!", error);
  });*/

  /*firebase.auth().signOut().then(function() {
  // Sign-out successful.
   console.log("Logout!");
}, function(error) {
  // An error happened.
   console.log("Logout Failed!", error);
});*/


					$(".day").html(4);


/*
firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
          window.location.href = "http://34.215.40.163/login.php";
        // User is signed in.
    } else{
		   auth = user;
		firebase.database().ref("Users/"+user.uid).on("value", function(snapshot) {
			window.localStorage.setItem('user',JSON.stringify(snapshot));
			snapshot.forEach(function(childSnapshot) {
				// key
				var key = childSnapshot.key;
				// value, could be object
				var childData = childSnapshot.val();
				if(key == 'last_free_conversation_id'){
					day = childData+1;
					if(day!=11){
						
					$(".day").html(childData+1);
					}else{
					$(".day").html(childData);

					}
					//window.localStorage.setItem('content', day);
					window.localStorage.setItem('content', day);
					console.log("g"+childData);
				}				
				// Do what you want with these key/values here*/
				
		/*	});
		});		

    }
});*/
//window.html1;
favorite = [];
dowload_list(favorite);
console.log(window.ht);
$(".cat").html("");
firebase.database().ref("Tags").orderByChild("tags_category_id").on("value", function(snapshot) {
			var i = 0;
			window.html1 = '<div class="container-fluid tags"><div class="container bg-secondary text-white"><div class="row justify-content-center" style="text-align:center;">';
		
			window.html2 = '<div class="container-fluid tags"><div class="container bg-secondary text-white"><div class="row justify-content-center" style="text-align:center;">';
			
			window.html3 = '<div class="container-fluid tags"><div class="container bg-secondary text-white"><div class="row justify-content-center" style="text-align:center;">';
			
			window.html4 = '<div class="container-fluid tags"><div class="container bg-secondary text-white"><div class="row justify-content-center" style="text-align:center;">';
			
			window.HTML = '<ul class="nav nav-tabs" role="tablist">';
			window.HTML2 = '<div class="tab-content">';
			
			snapshot.forEach(function(childSnapshot) {
				var a = ["chk_decyour","chk_hopacc","chk_premo","chk_obface"];
				// key
				
				var key = childSnapshot.key;
				// value, could be object
				var childData = childSnapshot.val();
				if(i == 0){
					//alert(555);
				window.HTML += '<li class="nav-item"><a class="nav-link active" href="#'+childData.tags_category+'" role="tab" data-toggle="tab">'+childData.tags_category+'</a></li>';
				}else{
					
				window.HTML += '<li class="nav-item"><a class="nav-link" href="#'+childData.tags_category+'" role="tab" data-toggle="tab">'+childData.tags_category+'</a></li>';
				}
				var trainindIdArray = childData.tags.split(',');
				
				window.HTML2 += '<div role="tabpanel" class="tab-pane fade in active" id="'+childData.tags_category+'">';
										window.HTML2 = '<div class="form-group" style="text-align:left;">';
						$.each(trainindIdArray, function(index, value) { 

							
							window.HTML2 += '<div class="form-check my-2"><label><input class="form-check-input" type="checkbox" name="'+a[i]+'" class="'+a[i]+'" value="'+value+'" id="defaultCheck'+index+'">'+value+'</label></div>';
							//window.html1 += '<div class="checkbox"><label><input type="checkbox" name="'+a[i]+'" class="'+a[i]+'" value="'+value+'"> &nbsp;'+value+'</label></div>';
							
										//alert();
						//    alert(index + ': ' + value);   // alerts 0:[1 ,  and  1:2]
						});

							window.HTML2 += '</div>	';
							if(i == 0){
								
								$("#step-1").find(".panel-title").html(childData.tags_category);
								$("#step-1").find(".panel-body").find(".content").html(window.HTML2);
							//	alert(childData.tags_category);
							}else if(i == 1){
								
								$("#step-2").find(".panel-title").html(childData.tags_category);
								$("#step-2").find(".panel-body").find(".content").html(window.HTML2);
								//alert(childData.tags_category);
							}else if(i == 2){
								
								$("#step-3").find(".panel-title").html(childData.tags_category);
								$("#step-3").find(".panel-body").find(".content").html(window.HTML2);
								//alert(childData.tags_category);
							}else if(i == 3){
								
								$("#step-4").find(".panel-title").html(childData.tags_category);
								$("#step-4").find(".panel-body").find(".content").html(window.HTML2);
								//alert(childData.tags_category);
							}
			
				i++;
				
			});


		window.HTML += "</ul>";
		window.HTML2 += "</div>";
			window.html1 += "<div><button class='btn btn-info'>NEXT</button></div></div></div></div>";
			window.html2 += "<div><button class='btn btn-info'>NEXT</button></div></div></div></div>";
			window.html3 += "<div><button class='btn btn-info'>NEXT</button></div></div></div></div>";
			window.html4 += "<div><button class='btn btn-info'>NEXT</button></div></div></div></div>";

			alert($("#step-1").find(".panel-body").html());
console.log(window.html1);
});
favorite = [];

$("body").on('click','.nav-link',function(){
	//console.log($("input[type='checkbox']").prop('checked'));
alert($(this).attr('href'));
$.each(".tabpanel", function(){
	alert($(this).attr('id'));
});
if($("input[type='checkbox']").prop('checked') == false){
	//$(".nav-link").removeAttr("data-toggle");
	alert($("input[type='checkbox']").prop('checked'));
}
});
var validated = function(tab){
  tab.unbind('click').removeClass('text-muted').addClass('green');
}



$("body").on('click','.lib',function(){
	alert(window.HTML2);
	console.log(window.HTML2);
	$(".wizard").show();
	$(".plib").hide();
									//$(".cat").html('<div class="container"><div class="stepwizard"><div class="stepwizard-row setup-panel"><div class="stepwizard-step col-xs-3"><a href="#step-1" type="button" class="btn btn-success btn-circle">1</a><p><small>Shipper</small></p></div><div class="stepwizard-step col-xs-3"><a href="#step-2" type="button" class="btn btn-default btn-circle" disabled="disabled">2</a><p><small>Destination</small></p></div><div class="stepwizard-step col-xs-3"><a href="#step-3" type="button" class="btn btn-default btn-circle" disabled="disabled">3</a><p><small>Schedule</small></p></div><div class="stepwizard-step col-xs-3"><a href="#step-4" type="button" class="btn btn-default btn-circle" disabled="disabled">4</a><p><small>Cargo</small></p></div></div></div><form role="form"><div class="panel panel-primary setup-content" id="step-1"><div class="panel-heading"><h3 class="panel-title">Shipper</h3></div><div class="panel-body"><div class="form-group"><label class="control-label">First Name</label><input maxlength="100" type="text" required="required" class="form-control" placeholder="Enter First Name" /></div><div class="form-group"><label class="control-label">Last Name</label><input maxlength="100" type="text" required="required" class="form-control" placeholder="Enter Last Name" /></div><button class="btn btn-primary nextBtn pull-right" type="button">Next</button></div></div><div class="panel panel-primary setup-content" id="step-2"><div class="panel-heading"><h3 class="panel-title">Destination</h3></div><div class="panel-body"><div class="form-group"><label class="control-label">Company Name</label><input maxlength="200" type="text" required="required" class="form-control" placeholder="Enter Company Name" /></div><div class="form-group"><label class="control-label">Company Address</label><input maxlength="200" type="text" required="required" class="form-control" placeholder="Enter Company Address" /></div><button class="btn btn-primary nextBtn pull-right" type="button">Next</button></div></div><div class="panel panel-primary setup-content" id="step-3"><div class="panel-heading"><h3 class="panel-title">Schedule</h3></div><div class="panel-body"><div class="form-group"><label class="control-label">Company Name</label><input maxlength="200" type="text" required="required" class="form-control" placeholder="Enter Company Name" /></div><div class="form-group"><label class="control-label">Company Address</label><input maxlength="200" type="text" required="required" class="form-control" placeholder="Enter Company Address" /></div><button class="btn btn-primary nextBtn pull-right" type="button">Next</button></div></div><div class="panel panel-primary setup-content" id="step-4"><div class="panel-heading"><h3 class="panel-title">Cargo</h3></div><div class="panel-body"><div class="form-group"><label class="control-label">Company Name</label><input maxlength="200" type="text" required="required" class="form-control" placeholder="Enter Company Name" /></div><div class="form-group"><label class="control-label">Company Address</label><input maxlength="200" type="text" required="required" class="form-control" placeholder="Enter Company Address" /></div><button class="btn btn-success pull-right" type="submit">Finish!</button></div></div></form></div>');
									
							/*		$(".cat").html('<div class="container-fluid"><div class="container bg-secondary text-white"><div class="row justify-content-center" style="text-align:center;"><div class="col-10"><h2 class="mb-4">Hoping to accomplish</h2><div class="form-check my-2"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"><label class="form-check-label" for="defaultCheck1">Default checkbox</label></div><div class="form-check my-2"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"><label class="form-check-label" for="defaultCheck1">Default checkbox</label></div><div class="form-check my-2"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"><label class="form-check-label" for="defaultCheck1">Default checkbox</label></div><div class="form-check my-2"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"><label class="form-check-label" for="defaultCheck1">Default checkbox</label></div><div class="form-check my-2"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"><label class="form-check-label" for="defaultCheck1">Default checkbox</label></div><div class="form-check my-2"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"><label class="form-check-label" for="defaultCheck1">Default checkbox</label></div><div class="form-check my-2"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"><label class="form-check-label" for="defaultCheck1">Default checkbox</label></div><div class="form-check my-2"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"><label class="form-check-label" for="defaultCheck1">Default checkbox</label></div> </div> </div></div></div>');*/
								});
var cn = 0;
$("body").on('click','.btn-info',function(){
			
//			;	
			if(cn == 0 && $("input[type='checkbox']:checked").val()){
				$(".cat").html(window.html2);
							cn++;
			}else if(cn == 0 && !$("input[type='checkbox']:checked").val()){
				alert("select one");
			}
			if(cn == 1 && $("input[type='checkbox']:checked").val()){
				$(".cat").html(window.html3);
							cn++;
			}else if(cn == 1 && !$("input[type='checkbox']:checked").val()){
				alert("select one");
			}
			if(cn == 2 && $("input[type='checkbox']:checked").val()){
				$(".cat").html(window.html4);
							cn++;
			}else if(cn == 2 && !$("input[type='checkbox']:checked").val()){
				alert("select one");
			}
alert(cn);
});
	
//alert(window.html);

	//$(".cat").html("");
	
	
	
  /*Getting last inserted quotes */

firebase.database().ref("DailyQuotes").orderByChild("quote_id").limitToLast(1).on("value", function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				// key
				var key = childSnapshot.key;
				// value, could be object
				var childData = childSnapshot.val();
			//	console.log(snapshot.numChildren());
			//	console.log(childSnapshot.getPriority());
             //   console.log(childData);
                $(".cardtexts").html(childData.qoute_description);
				// Do what you want with these key/values here*/
			});
		});
	window.ht ='';
		
		
/********************************************** Create my personalize library ***********************************/							
								
								
								var cn = 0;
$("body").on('click','.btn-info',function(){
	alert($("input[type='checkbox']:checked").val());
	if(cn == 4 && $("input[type='checkbox']:checked").val()){
									$(".cat").html(window.ht);
		}
		if($("input[type='checkbox']:checked").val()){
			
		alert('66'+cn);
			cn++;
		}
});
								
/********************************************** Create my personalize library ***********************************/							

		



$("body").on('click',".finish",function(){
//	alert($(".form-check").find("input:checkbox:checked").val());
	
	$.each($("input[type='checkbox']:checked"), function(index,value){
		//alert($(this).val());
		favorite.push($(this).val());
	});


dowload_list(favorite);
			$(".cat").html(window.ht);



	console.log(favorite);
});		
		
		
$("body").on('click','.skip',function(){
							//		alert($(this).html());
favorite = [];
dowload_list(favorite);
									$(".cat").html(window.ht);

});
		
		
		


/************************************* function to show session **************************************/


function dowload_list(favorite) {
 window.ht;
firebase.database().ref("Category").orderByKey().on("value", function(snapshot) {
	var c = [];
	var session = [];
	var session2 = [];
	var desc = '';
			snapshot.forEach(function(childSnapshot) {
				// key
				var key = childSnapshot.key;
				// value, could be object
				var childData = childSnapshot.val();
				var chkSub = false;
				var chkBnd = false;
				var chkS = false;
				var chkS2 = false;
				var i = 1; 
				//console.log(snapshot.numChildren());
				//console.log(childSnapshot.getPriority());
				c.push(childSnapshot.key);
				if(childData.session_subcription_type != 'Free' && childSnapshot.key != '10 Day Intro Program'){
					
				window.ht += '<div class="row Margins"><p class="MainMenu1 "><span class="i">'+childSnapshot.key+'</span>&nbsp;&nbsp;<a href="#" class="learnMorestyle" style="outline:none;" data-toggle="modal" data-target="#exampleModalCenter2"><i>LEARN MORE</i></a></p></div><br><div class="container text-center cardContainers"><div class="row Margins text-center">';
				}
				if(childData.session_subcription_type == 'Free' && childSnapshot.key == '10 Day Intro Program'){
						console.log(childSnapshot.key);
						var blen = Object.keys(childData.Bundle).length;
						var sblen = Object.keys(childData.SubCategory).length;
						session.push(childData.Session);
						$.map(childData.Session, function(value, index) {
							   // console.log(value.subcategory_id);
								//console.log(value.session_name);
								//(!window.localStorage.getItem('cat') ||  window.localStorage.getItem('cat') != 'Deep Dive' || window.localStorage.getItem('cat') != 'Quick Dive'){
									
									//alert(5);
					//			}
								if(i==window.localStorage.getItem('content')){
									//$(".bg").css('background', 'url('+value.session_img+') '); /*Dynamic image from database*/

									//$(".conv").html(value.session_name);
								}
								if(i>3){
								//window.ht +='<div class="col-md-4 col-xs-6 boxStyle hiddens3 '+childSnapshot.key+'" style=" background-image: url('+value.session_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-bundle="'+blen+'" data-subcat="'+sblen+'" style="color:#fff;">'+value.session_name+'</p></div>';

								}else{
									//chkS2 = true;
								//window.ht +='<div class="col-md-4 col-xs-6 boxStyle '+childSnapshot.key+'" style=" background-image: url('+value.session_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-bundle="'+blen+'" data-subcat="'+sblen+'">'+value.session_name+'</p></div>';
								}
						i++;
						});
				}
				if(childSnapshot.key == 'Open Dive'){
						console.log(childSnapshot.key);
						var blen = Object.keys(childData.Bundle).length;
						var sblen = Object.keys(childData.SubCategory).length;
						//session.push(childData.Session);
						$.map(childData.Session, function(value, index) {
								   // console.log(value.subcategory_id);
									//console.log(value.session_name);
									//(!window.localStorage.getItem('cat') ||  window.localStorage.getItem('cat') != 'Deep Dive' || window.localStorage.getItem('cat') != 'Quick Dive'){
										
										//alert(5);
						//			}
								if(value.tag){
									var stag = value.tag.split(",");
								}
								var prev = "";
								if(favorite.length > 0){
									for(f in favorite){
											if($.inArray(favorite[f], stag) >= 0 && prev != value.session_name){
													session2.push(value);
												if(i>3){
													window.ht +='<div class="col-md-4 col-xs-6 boxStyle hiddens '+childSnapshot.key+'" style=" background-image: url('+value.session_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-nm="'+key+'" data-bundle="'+blen+'" data-subcat="'+sblen+'" data-subid="0" data-bid="0" data-sid="'+value.session_id+'" style="color:#fff;">'+value.session_name+'</p></div>';

														chkS = true;
												}else{
													window.ht +='<div class="col-md-4 col-xs-6 boxStyle '+childSnapshot.key+'" style=" background-image: url('+value.session_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-nm="'+key+'" data-bundle="'+blen+'" data-subcat="'+sblen+'" data-subid="0" data-bid="0" data-sid="'+value.session_id+'">'+value.session_name+'</p></div>';
												}
												prev = value.session_name;
											}
										}
								}else{
									alert("not");
										if(i>3){
													window.ht +='<div class="col-md-4 col-xs-6 boxStyle hiddens '+childSnapshot.key+'" style=" background-image: url('+value.session_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-bundle="'+blen+'" data-subcat="'+sblen+'" data-subid="0" data-bid="0" data-sid="'+value.session_id+'" style="color:#fff;">'+value.session_name+'</p></div>';

														chkS = true;
												}else{
													window.ht +='<div class="col-md-4 col-xs-6 boxStyle '+childSnapshot.key+'" style=" background-image: url('+value.session_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-bundle="'+blen+'" data-subcat="'+sblen+'" data-subid="0" data-bid="0" data-sid="'+value.session_id+'">'+value.session_name+'</p></div>';
												}
								}
							i++;
						});

						
				}
				/*Quick Dive*/
				if(childSnapshot.hasChild("Bundle")){
						console.log(childSnapshot.key);
						var blen = Object.keys(childData.Bundle).length;
						var sblen = Object.keys(childData.SubCategory).length;
						$.map(childData.Bundle, function(value, index) {
									if(favorite.length > 0){
											for(f in favorite){
												if($.inArray(favorite[f], stag) >= 0){
													if(i>6){
														window.ht +='<div class="col-md-4 col-xs-6 boxStyle hiddens '+childSnapshot.key+'" style=" background-image: url('+value.bundle_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-bundle="'+blen+'" data-subcat="'+sblen+'" data-subid="0" data-bid="'+value.bundle_id+'" data-sid="0" style="color:#fff;">'+value.bundle_name+'</p></div>';

															chkBnd = true;
													}else{
														window.ht +='<div class="col-md-4 col-xs-6 boxStyle '+childSnapshot.key+'" style=" background-image: url('+value.bundle_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-bundle="'+blen+'" data-subcat="'+sblen+'" data-subid="0" data-bid="'+value.bundle_id+'" data-sid="0">'+value.bundle_name+'</p></div>';
													}
												}
											}
										
									}else{
										if(i>6){
										window.ht = window.ht +'<div class="col-md-4 col-xs-6 boxStyle hiddens1 '+childSnapshot.key+'" style=" background-image: url('+value.bundle_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-bundle="'+blen+'" data-subcat="'+sblen+'" data-subid="0" data-bid="'+value.bundle_id+'" data-sid="0">'+value.bundle_name+'</p></div>';
											chkBnd = true;

										}else{
										window.ht = window.ht + '<div class="col-md-4 col-xs-6 boxStyle '+childSnapshot.key+'" style=" background-image: url('+value.bundle_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-bundle="'+blen+'" data-subcat="'+sblen+'" data-subid="0" data-bid="'+value.bundle_id+'" data-sid="0">'+value.bundle_name+'</p></div>';
										}
									}
								i++;
						});
				}
				/*Deep Dive*/
				if(childSnapshot.hasChild("SubCategory")){
						//	alert(childSnapshot.key.length);
						console.log(childSnapshot.key);
						var sblen = Object.keys(childData.SubCategory).length;
					
					$.map(childData.SubCategory, function(value, index) {
						if(value.Session && value.Session != ""){
							
								if(value.Bundle){
										var blen = Object.keys(value.Bundle).length;
									}else{
										var blen = 0 ;
									}
								
								
							if(index == window.localStorage.getItem("currentID") && childSnapshot.key == window.localStorage.getItem("currentCat"))
									{	
										window.localStorage.setItem("cid",childData.category_id);
										//window.localStorage.setItem("bid","");
										//window.localStorage.setItem("subcategory_id",value.subcategory_id);
										//change dashboard html value

									//	$(".bannerHeader").html(value.subcategory_name);
									//	$(".day").html(window.localStorage.getItem("content"));
									//	$(".totalday").html(Object.keys(value.Session).length);


										//window.localStorage.setItem("Dname",value.subcategory_name);
										
										//window.localStorage.setItem("Slen",Object.keys(value.Session).length);
										//session2.push(value.Session);
									}

								/* code for remove emty bundle and session subcat */
								var prev = "";
								var prevS = "";
						if(favorite.length > 0){
								$.map(value.Session, function(value2, index) {
										if(value2.tag){
											var stag = value2.tag.split(",");
										}
										
									
											if(value2.Bundle){
												var blen = Object.keys(value2.Bundle).length;
											}else{
												var blen = 0 ;
											}
											for(f in favorite){
													if($.inArray(favorite[f], stag) >= 0 && prev != value.subcategory_name && prevS != value2.session_name){
														if(i>6){
														window.ht = window.ht +'<div class="col-md-4 col-xs-6 boxStyle hiddens2 '+childSnapshot.key+'" style=" background-image: url('+value.subcategory_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-nm="'+value.subcategory_name+'" data-bundle="'+blen+'" data-subcat="'+sblen+'" data-subid="'+value.subcategory_id+'" data-bid="0" data-sid="'+value2.session_id+'">'+value.subcategory_name+"<br>"+value2.session_name+'</p></div>';
															chkSub = true;
														}else{
															//if(!childSnapshot.hasChild('Bundle') && )
														window.ht = window.ht + '<div class="col-md-4 col-xs-6 boxStyle '+childSnapshot.key+'" style=" background-image: url('+value.subcategory_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-nm="'+value.subcategory_name+'" data-bundle="'+blen+'" data-subcat="'+sblen+'" data-subid="'+value.subcategory_id+'" data-bid="0" data-sid="'+value2.session_id+'">'+value.subcategory_name+"<br>"+value2.session_name+'</p></div>';
														}
														prev = value.subcategory_name;
														i++;
													}
											}
										
									/* End code for remove emty bundle and session subcat */
											//});
											
									prevS = value2.session_name;
								});
						
							}else{

												if(i>6){
												window.ht = window.ht +'<div class="col-md-4 col-xs-6 boxStyle hiddens2 '+childSnapshot.key+'" style=" background-image: url('+value.subcategory_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-bundle="'+blen+'" data-subcat="'+sblen+'" data-subid="'+value.subcategory_id+'" data-bid="0" data-sid="0" >'+value.subcategory_name+'</p></div>';

													chkSub = true;
												}else{
													//if(!childSnapshot.hasChild('Bundle') && )
												window.ht = window.ht + '<div class="col-md-4 col-xs-6 boxStyle '+childSnapshot.key+'" style=" background-image: url('+value.subcategory_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-bundle="'+blen+'" data-subcat="'+sblen+'" data-subid="'+value.subcategory_id+'" data-bid="0" data-sid="0" >'+value.subcategory_name+'</p></div>';
												}
												i++;
								}
							}else{

									var prev = "";
									var prevB = "";
									if(value.Bundle){
										var blen = Object.keys(value.Bundle).length;
									}else{
										var blen = 0 ;
									}
									if(value.Bundle && value.Bundle != ""){
										if(favorite.length > 0){
													$.map(value.Bundle, function(value2, index) {
														// window.localStorage.setItem("TYPE","S&B");
														if(value.bundle_id == window.localStorage.getItem("currentID") && childSnapshot.key == window.localStorage.getItem("currentCat"))
														{
															//alert(value2.bundle_name);
															//change dashboard html value
														}
														//window.localStorage.setItem("cid",childData.category_id);
														//	window.localStorage.setItem("bid",value2.bundle_id);
														//	window.localStorage.setItem("subcategory_id",value.subcategory_id);
															//$(".bannerHeader").html(value2.bundle_name);
															//$(".day").html(window.localStorage.getItem("content"));
															//$(".totalday").html(Object.keys(value2.Session).length);

															//window.localStorage.setItem("Dname",value2.bundle_name);
															//alert(index+"="+window.localStorage.getItem("currentID"));	
														//	console.log(value2.Session);
															/* code for remove emty bundle and session subcat */
															
														/* End code for remove emty bundle and session subcat */
														
															//session2.push(value2.Session);
															//window.localStorage.setItem("Slen",Object.keys(value2.Session).length);
														//}
														//session.push(value.Session);
														var s = 0;
													$.map(value2.Session, function(value2, index) {
														
														if(s==0){
															window.id = index;
														}
														s++;
													});
													if(value2.tag){
														var stag = value2.tag.split(",");
													}
													
														//alert(value2.tag);
																
															for(f in favorite){
																	if($.inArray(favorite[f], stag) >= 0 && prev != value.subcategory_name && prevB != value2.bundle_name && s > 0){

																	//	alert(value2.bundle_name);
																		if(i>6){
																		alert(i);

																			window.ht = window.ht +'<div class="col-md-4 col-xs-6 boxStyle hiddens2 '+childSnapshot.key+'" style=" background-image: url('+value.subcategory_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-nm="'+value2.bundle_name+'" data-bundle="'+blen+'" data-subcat="'+sblen+'" data-subid="'+value.subcategory_id+'" data-bid="'+value2.bundle_id+'" data-sid="'+window.id+'">'+value.subcategory_name+"<br>"+value2.bundle_name+'</p></div>';

																			chkBnd = true;
																		}else{
																			//if(!childSnapshot.hasChild('Bundle') && )
																		
																			window.ht = window.ht + '<div class="col-md-4 col-xs-6 boxStyle '+childSnapshot.key+'" style=" background-image: url('+value.subcategory_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-nm="'+value2.bundle_name+'" data-bundle="'+blen+'" data-subcat="'+sblen+'" data-subid="'+value.subcategory_id+'" data-bid="'+value2.bundle_id+'" data-sid="'+window.id+'">'+value.subcategory_name+"<br>"+value2.bundle_name+'</p></div>';
																		}
																	prev = value.subcategory_name;

															//}
																		i++;

																	}
															}
														
															//if(prevB == value2.bundle_name){	
															

															//}
															//
														//}
														
														
														prevB = value2.bundle_name;
													});
											//if(value2.Session && value2.Session != ""){
											}else{
												
												if(i>6){
													
														window.ht = window.ht +'<div class="col-md-4 col-xs-6 boxStyle hiddens2 '+childSnapshot.key+'" style=" background-image: url('+value.subcategory_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-bundle="'+blen+'" data-subcat="'+sblen+'" data-subid="'+value.subcategory_id+'" data-bid="'+value2.bundle_id+'" data-sid="0">'+value.subcategory_name+'</p></div>';

														chkBnd = true;
													}else{
														//if(!childSnapshot.hasChild('Bundle') && )
													
														window.ht = window.ht + '<div class="col-md-4 col-xs-6 boxStyle '+childSnapshot.key+'" style=" background-image: url('+value.subcategory_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-bundle="'+blen+'" data-subcat="'+sblen+'" data-subid="'+value.subcategory_id+'" data-bid="0" data-sid="0">'+value.subcategory_name+'</p></div>';
													}

												i++;
										  }
							   }
						}
					});
				}


				if(childSnapshot.key == 'Open Dive'  ){
					if(chkS){
						window.ht +='<div class="col-md-12 center-block"><button type="submit" class="btn1 exploreMore " style=" border-color: #7dd3d5;  margin-top: 10%; outline: none; text-align: center;  color:#FFF; background-color: #7dd3d5;">E X P L O R E &nbsp; M O R E</button></div></div></div>';
					}else{
						window.ht +='</div></div>';
					}
				}else if(childSnapshot.key == '10 Day Intro Program' && chkS2){
					//window.ht +='<div class="col-md-12 center-block"><button type="submit" class="btn1 exploreMore3 " style=" border-color: #7dd3d5;  margin-top: 10%; outline: none; text-align: center;  color:#FFF; background-color: #7dd3d5;">E X P L O R E &nbsp; M O R E</button></div></div></div>';

				}else if(childSnapshot.hasChild("Bundle")){
					if(chkBnd){
						
							window.ht +='<div class="col-md-12 center-block"><button type="submit" class="btn1 exploreMore1" style=" border-color: #7dd3d5;  margin-top: 10%; outline: none; text-align: center;  color:#FFF; background-color: #7dd3d5;">E X P L O R E &nbsp; M O R E</button></div></div></div>';
					}else{
						window.ht += '</div></div>';
					}
				}else if(childSnapshot.hasChild("SubCategory")){
					if(chkSub){
						
						window.ht +='<div class="col-md-12 center-block"><button type="submit" class="btn1 exploreMore2 " style=" border-color: #7dd3d5;  margin-top: 10%; outline: none; text-align: center;  color:#FFF; background-color: #7dd3d5;">E X P L O R E &nbsp; M O R E</button></div></div></div>';
					}else{
						window.ht += "</div></div>";
					}
					
				}
										alert(window.ht);
                //$(".cardtexts").html(childData.qoute_description);
				// Do what you want with these key/values here*/
			//	console.log(window.ht);
						$("body").on('click',".exploreMore",function(){

						//	alert(555);
							$(".hiddens").show();
							$(".exploreMore").hide();
						});

						$("body").on('click',".exploreMore1",function(){

							//alert(555);
						//	var c = "."+$(this).prev().closest('div').attr('class').split(' ')[3];
						//	console.log( c);
							$(".hiddens1").show();
							$(".exploreMore1").hide();
						});		

						$("body").on('click',".exploreMore2",function(){

							//alert(555);
						//	var c = "."+$(this).prev().closest('div').attr('class').split(' ')[3];
						//	console.log( c);
							$(".hiddens2").show();
							$(".exploreMore2").hide();
						});

						$("body").on('click',".exploreMore3",function(){
							//alert(555);
						//	var c = "."+$(this).prev().closest('div').attr('class').split(' ')[3];
						//	console.log( c);
							$(".hiddens3").show();
							$(".exploreMore3").hide();
						});		
				if(window.localStorage.getItem('cat') == '10 Day Intro Program' && childData.session_subcription_type == 'Free' || !window.localStorage.getItem('cat') ){
					window.localStorage.setItem('session',JSON.stringify(session));
				}
				$("body").on('click',".learnMorestyle",function(){
					
								if(key == $(this).prev().text()){
									desc = childData.category_description;
									
									var cat = $(this).prev().text();
									$(".modal-content .modal-body .modal-title").html(cat);
									$(".modal-body p").html(desc);
								}
							});
			});

				$(".learnMorestyle").click(function(){
				var cat = $(this).prev().text();
				$(".modal-content .modal-body .modal-title").html(cat);
				$(".modal-body p").html(desc);
				console.log(desc);
			});
			$(".i").each(function(index,value){
//console.log(c[index]);
				$(this).html(c[index]);
					//alert($(this).html(c[index]	));
				});
				// $('.loader').fadeOut();
				console.log(session2);
				if(favorite.length<=0){$(".cat").html(window.ht);}
		});

									$(".cat").html(window.ht);
}




var user = JSON.parse(window.localStorage.getItem('user'));
if(user.membership_type != "Free"){
	$(".freeuser").hide();
	$(".divethru").show();
}else{
	$(".freeuser").show();
	
	$(".divethru").hide();
}


/******************************* Navigation to related page on box click *******************************/
$("body").on('click',".boxStyle",function(){
		var id = $(this).find("p").attr("id");
		var cat1 = $(this).find("p").data("cat");
		var bundle = $(this).find("p").data("bundle");
		var subcat = $(this).find("p").data("subcat");
		var subid = $(this).find("p").data("subid");	
		var sid = $(this).find("p").data("sid");	
		var bid = $(this).find("p").data("bid");	
			alert(bid+"="+sid+"="+subid);
		var ref;
		if(bundle == 0 && subcat == 0){
			$("#description div .modal-content .modal-body .freeuser .single").hide();
			$("#description div .modal-content .modal-body .freeuser .or").hide();

			alert(cat1);
			var snm = $(this).find("p").data("nm");
			ref = firebase.database().ref("Category/"+cat1+"/Session/"+sid);
			firebase.database().ref("Category/"+cat1+"/Session/"+sid).on("value", function(snapshot) {
				snapshot.forEach(function(childSnapshot) {
					var key = childSnapshot.key; 	
					var childData = childSnapshot.val();
					window.localStorage.setItem("session2",childSnapshot);
						$("#description div .modal-content .modal-body .modal-title").html(snm);
					if(key == "session_name"){
						$("#description div .modal-content .modal-header #sessionTitle").html(childData);

					}
					if(key == "session_description"){
						$("#description div .modal-content .modal-body p").html(childData);
			
					}

					alert(key);
				});
			});
		alert(ref);
		$("#description").modal('show');
			window.localStorage.setItem("cat",cat1);

				//window.location = "opendive.php";
			//	window.location = "session.php";
		}else if(bundle != 0 && subcat == 0){
			$("#description div .modal-content .modal-body .freeuser .single").html("Get this "+cat1+" Session");
			 ref = firebase.database().ref("Category/"+cat1+"/SubCategory/"+subid+"/Session/"+sid);
			var snm = $(this).find("p").data("nm");
			 firebase.database().ref("Category/"+cat1+"/SubCategory/"+subid+"/Session/"+sid).on("value", function(snapshot) {
				snapshot.forEach(function(childSnapshot) {
					window.localStorage.setItem("session2",childSnapshot);
					var key = childSnapshot.key; 	
					var childData = childSnapshot.val();
						
						$("#description div .modal-content .modal-body .modal-title").html(snm);
					if(key == "session_name"){
						$("#description div .modal-content .modal-header #sessionTitle").html(childData);

					}
					if(key == "session_description"){
						$("#description div .modal-content .modal-body p").html(childData);
			
					}

					alert(key);
				});
			});
		alert(ref);
			
			window.localStorage.setItem("cat",cat1);
			if(subid != 0 && sid != 0 && bid == 0){
				$("#description").modal('show');
				//$.redirect("quickdive.php",{bundle: SESSION,Qsid: sid},"POST",null,null,true);
			}else{
				//$.redirect("quickdive.php",{bundle: SESSION},"POST",null,null,true);
			}
				//window.location = "quickdive.php";
			alert(cat1);

		}else if(bundle == 0 && subcat != 0){
					window.localStorage.setItem("session2",childSnapshot);
				$("#description div .modal-content .modal-body .freeuser .single").html("Get this "+cat1+" Session");
			 ref = firebase.database().ref("Category/"+cat1+"/SubCategory/"+subid+"/Session/"+sid);
			var snm = $(this).find("p").data("nm");
			 firebase.database().ref("Category/"+cat1+"/SubCategory/"+subid+"/Session/"+sid).on("value", function(snapshot) {
				snapshot.forEach(function(childSnapshot) {
					var key = childSnapshot.key; 	
					var childData = childSnapshot.val();
						
						$("#description div .modal-content .modal-body .modal-title").html(snm);
					if(key == "session_name"){
						$("#description div .modal-content .modal-header #sessionTitle").html(childData);

					}
					if(key == "session_description"){
						$("#description div .modal-content .modal-body p").html(childData);
			
					}

					alert(key);
				});
			});
		alert(ref);
			alert(cat1);
			if(subid != 0 && sid != 0 && bid == 0){
				$("#description").modal('show');
				//$.redirect("quickdive.php",{bundle: SESSION,Qsid: sid},"POST",null,null,true);
			}else{
				//$.redirect("quickdive.php",{bundle: SESSION},"POST",null,null,true);
			}

			window.localStorage.setItem("cat",cat1);
				//window.location = "quickdive.php";

		}else if(bundle != 0 && subcat != 0){
			ref = firebase.database().ref("Category/"+cat1+"/SubCategory/"+subid+"/Bundle/"+bid+"/Session/"+sid);
			var bnm = $(this).find("p").data("nm");
			alert(bnm);
			$("#description div .modal-content .modal-body .freeuser .single").html("Get this "+cat1+" Bundle");
		
			firebase.database().ref("Category/"+cat1+"/SubCategory/"+subid+"/Bundle/"+bid+"/Session/"+sid).on("value", function(snapshot) {
				$("#description div .modal-content .modal-body .divethru").click(function(){
//						alert(555);
					window.localStorage.setItem("session3",JSON.stringify(snapshot));
					});
				snapshot.forEach(function(childSnapshot) {
					var key = childSnapshot.key; 	
					var childData = childSnapshot.val();
						
						$("#description div .modal-content .modal-body .modal-title").html(bnm);
					if(key == "session_name"){
						$("#description div .modal-content .modal-header #sessionTitle").html(childData);

					}
					if(key == "session_description"){
						$("#description div .modal-content .modal-body p").html(childData);
			
					}
					

					alert(key);
				});
			});
				//	alert($("#description div .modal-content").html());
	//	alert("Category/"+cat1+"/SubCategory/"+subid+"/Bundle/"+bid+"/Session/"+sid);
		//	alert(cat1);
			if(subid != 0 && sid != 0 && bid != 0){
				$("#description").modal('show');
				//$.redirect("individual.php",{bundle: bid,subcatid:subid},"POST",null,null,true);
			}else{
				//window.location = "DeepMain.php";
			}
		}
		if(cat1 == "Open Dive"){
		console.log(bundle+"=="+subcat);
		}else if(cat1 == "Quick Dive"){
		console.log(bundle+"=="+subcat);
				//window.location = "quickdive.php";

		}else if(cat1 == "Deep Dive"){
		console.log(bundle+"=="+subcat);
				//window.location = "DeepMain.php";

		}
	});


/******************************************************************************************************/




		
		
		

$(".i").hover(function(){
	//$(this).for
	//alert($(this).html());
	var ht = '<div class="row Margins"><p class="MainMenu"><span class="i">QUICK DIVE</span>&nbsp;&nbsp;<a href="#" class="learnMorestyle"><i>LEARN MORE</i></a></p></div><br><div class="container text-center cardContainers"><div class="row Margins text-center">';
	ht +='<div class="col-md-4 col-xs-6 boxStyle" style="background-color:#aaa;"><p class="Center">Having A Bad Day</p></div>';
	ht +='</div></div>';
});
//$(".conv").html();
if(window.localStorage.getItem('cat') != 'Open Dive'){
	
var storedNames = JSON.parse(window.localStorage.getItem("session"));

$.map(storedNames, function(value, index) {

console.log(value.session_name);
});

for (i in storedNames)
{
	var conversation = 1;
   for(j in storedNames[i]){

	if(conversation == window.localStorage.getItem('content')){
	$(".conv").html(storedNames[i][j].session_name);
	$(".modal-body h2").html(storedNames[i][j].session_name)
console.log("p"+storedNames[i][j].meditation_audio[0]);
console.log($(".modal-body p").html());
}
/*
		if((conversation == window.localStorage.getItem('content')){
			//$(".conv").html(storedNames[i][j].session_name);
		}*/
		//console.log(storedNames[i][j].session_name);
conversation++;
	}
}
}
console.log("d"+$(".modal-body").html());	
//console.log(window.localStorage.getItem('content'));
   $(".bannerButton").click(function(){
	//   alert(5);
var day = window.localStorage.getItem('content');
		window.localStorage.removeItem("cat");
		window.localStorage.removeItem("Snm");
		window.localStorage.setItem("subcategory_id","");
        window.localStorage.setItem("bid","");
        //window.localStorage.setItem("cid","-L9J9wr-WF71xLKGpHrn"); // remove after new code for Beign button
	//window.localStorage.setItem("cat","10 Day Intro Program");
	var user = JSON.parse(window.localStorage.getItem('user'));
		// if(day>8 && day<=10){
		// 	 $('#exampleModalCenter').modal('show');
		// }else if(day<=8){
		// var url = "http://34.215.40.163/player.php";
		// window.location.href = url;
		// }else if(day>10 && user.membership_type == "Free"){
		// 	window.location = "subscription.php";
		// }else if(day>10 && user.membership_type != "Free"){
		// 	swal("You Have Finished Your 10 Day Intro Program");
		// }
		if(day>8 && day<=10 && user.membership_type == "Free"){
     // alert(day);
	       $('#exampleModalCenter').modal('show');
	    }else if(day<=8 || user.membership_type == "Paid"){
	        
		    var url = "player.php";
		    window.location.href = url;
	    }else if(day>10 && user.membership_type == "Free"){
	       //alert(day);
	       // alert(user.membership_type);
	      window.location = "subscription.php";
	    }
	    else if(day>10 && user.membership_type != "Free"){
			swal("You Have Finished Your 10 Day Intro Program");
		}
   });
function dash(){
	$(".boxStyle").click(function(){
		var id = $(this).find("p").attr("id");
		var cat = $(this).find("p").data("cat");
		
		//alert(cat);
	});
}	

$(".dropdown-item").click(function(){
	var cat = $(this).data("cat");
	var page = $(this).text();
	//alert(page);
	firebase.database().ref("Category").on("value", function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
		if(childSnapshot.hasChild("SubCategory") &&  childSnapshot.key == cat){
				if(page == "MAIN"){
				window.localStorage.setItem("cat",childSnapshot.key);
				window.location = "DeepMain3.php";
					
				}else if(page == "INDIVIDUAL"){
				window.localStorage.setItem("cat",childSnapshot.key);
				window.location = "DeepMain.php";
					
				}
			}
			
		});
		
	});
});

$(".nav-link").click(function(){
//$(".dropdown-item").click(function(){
	var cat = $(this).text();
	console.log(cat);
	firebase.database().ref("Category").on("value", function(snapshot) {
		snapshot.forEach(function(childSnapshot) {

		
			if(childSnapshot.hasChild("Bundle") &&  childSnapshot.key == cat && childSnapshot.child("Bundle").val() != ""){
				window.localStorage.setItem("cat",childSnapshot.key);
				console.log("quick");
				window.location = "quickdive.php";
				
			}
			if( childSnapshot.key == cat && childSnapshot.child("Bundle").val() == ""){
				console.log("open");
				window.localStorage.setItem("cat",childSnapshot.key);
				window.location = "opendive.php";
				
			}
		});
		
	});
	

});

if(window.localStorage.getItem("Dname") == "10 Day Intro Program"){
//$(".bannerHeader").html(window.localStorage.getItem("Intro Program"));
}else{
//$(".bannerHeader").html(window.localStorage.getItem("Dname"));
}
//$(".day").html(window.localStorage.getItem("content"));
//$(".totalday").html(window.localStorage.getItem("Slen"));




