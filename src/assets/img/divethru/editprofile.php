<?php

require_once("credential.php");
//define('FIREBASE_URL','https://divethrutest.firebaseio.com/');
//define('FIREBASE_SECRET','gxp2ItQwCsropnMYSEtsqPxEKeJam2G5LTxoaMoE'); 
//define('FIREBASE_URL','https://divethru-71c56.firebaseio.com/');
//define('FIREBASE_SECRET','k7AS9py1rGygBlLjQAvtfSroYaFCwpe0KzdrDAjQ');
require 'vendor/autoload.php';
use Firebase\Firebase;
use Firebase\Auth\TokenGenerator;

//$fb = Firebase::initialize(FIREBASE_URL, FIREBASE_SECRET);
$cms = get("cms");
function get($path){
    $fb = Firebase::initialize(FIREBASE_URL, FIREBASE_SECRET);
    
    
    //or set your own implementation of the ClientInterface as second parameter of the regular constructor
    $fb = new Firebase([ 'base_url' => FIREBASE_URL, 'token' => FIREBASE_SECRET ], new GuzzleHttp\Client());
    
    $nodeGetContent = $fb->get($path);
    
    return $nodeGetContent;
 }

?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<title>Edit Profile</title>
	<link href="css/bootstrap.css" rel="stylesheet" type="text/css">
	<link href="css/editprofile.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="css/dashboard.css">
	<link rel="stylesheet" href="css/dashheader.css">
	<link href="css/footercss.css" rel="stylesheet" type="text/css">
	<link href="css/reg.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link href="css/jquery-ui.css" rel="stylesheet">
	<link href="css/sweetalert.css" rel="stylesheet" />
	 <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet">
	 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!-- 	 <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script> -->
		 <script src="https://www.gstatic.com/firebasejs/5.1.0/firebase.js"></script>

	   <script type="text/javascript" src="js/credential.js"></script>
	   <script type="text/javascript">
		
	   		var user = JSON.parse(window.localStorage.getItem('user'));
			$.getJSON('https://ipinfo.io/geo', function(response) { 
			var loc = response.loc.split(',');
			var coords = {
				latitude: loc[0],
				longitude: loc[1]
			};
			lat = parseFloat(loc[0]);
			lng = parseFloat(loc[1]);
	
			$.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+loc+'&sensor=true', function(response) {
				
				/*if(!user.city && !user.location)
				{*/
				//	$("#city").val(response.results[0].address_components[2].long_name);
				//	$("#location").val(response.results[0].address_components[0].long_name);
				//}
			}); 
		});

		   	// $.get('http://ip-api.com/json', function(response) { 
			// 	console.log(response);
			// 	var countrycode = {"AU" : "AUD", "AUS" : "AUD", "BR" : "BRL", "BRA" : "BRL", "CA" : "CAD", "CAN" : "CAD", "CZ" : "CZK", "CZE" : "CZK", "EU" : "EUR", "HK" : "HKD", "HKG" : "HKD", "JP" : "JPY", "JPN" : "JPY", "HU" : "HUF", "HUN" : "HUF", "IL" : "ILS", "ISR" : "ILS", "MY" : "MYR", "MYS" : "MYR", "MX" : "MXN", "MEX" : "MXN", "NOR" : "NOK", "NO" : "NOK", "NZ" : "NZD", "NZL" : "NZD", "PH" : "PHP", "PHL" : "PHP", "PL" : "PLN", "POL" : "PLN", "GB" : "GBP", "GBR" : "GBP" ,"SG" : "SGD" , "SGP" : "SGD", "SE" : "SEK", "SWE" : "SEK", "CH" : "CHF", "CHE" : "CHF", "TW" : "TWD", "TWN" : "TWD", "TH" : "THB", "THA" : "THB", "US" : "USD", "USA" : "USD"};
			// });

	   </script>
    
<style type="text/css">
	.p1 , .p2{
	font-size: 14px;
    color: red;
    text-align: -webkit-auto;
    padding-top: 10px;
}

</style>
</head>

<body  background="img/banner.png" style="background-repeat: no-repeat;">
	<?php include 'dashbordHeader.php';  ?>
<div class="container-fluid pt-5 pb-5">
    <div class="container">
	     <div class="row justify-content-center" style="margin-top: 10%;">
		     <div class="col-md-6 bg-white text-center py-5" style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); padding: 0 52px;"><form method="post">
						<div class="row">
							<div class="col-12 mt-3" >
								<h2>Edit Profile</h2>
								<br>

								<div class="circle mx-auto">
									<!-- User Profile Image -->
									<img class="profile-pic position-relative img-fluid" src="http://34.215.40.163/img/profileicon.png" >

									<!-- Default Image -->
									<!-- <i class="fa fa-user fa-5x"></i> -->
									<div class="p-image">
									<i class="fa fa-camera upload-button"></i>
										<input class="file-upload" id="profile_image" name="profile_image" type="file"  accept="image/*"/>
										<input type="hidden" id="imgurl">
								</div>
									</div>
								
								<br>
								<h5 class="mb-3 text-left">Personal Details</h5>
								<input type="hidden" id="uid">
								<div class="form-group form-group-log">
									<input type="text" id="first_name"   name="first_name"  class="form-control form-control-log" >
									<p id="p1" class="p1"></p>
								</div>
								
								<div class="form-group form-group-log">
									<input type="text"  id="last_name" name="last_name"  class="form-control form-control-log">
									<p id="p2" class="p2"></p>
								</div>
								
								<div class="form-group form-group-log">
									<input type="email" id="email" name="email" disabled="" class="form-control form-control-log">
								</div>

								
								<div class="form-group form-group-log">
									<select id="gender" class="form-control" style="background-color: #e9ecef;opacity: 1;">
										<option value="">Gender</option>
										<option value="Male">Male</option>
										<option value="Female">Female</option>
										<option value="Non-Binary">Non-binary</option>
										<option value="Questioning">Questioning</option>
										<option value="Prefer Not To Say">Prefer Not To Say</option>
										<option value="Other">Other</option>										
									</select>
								</div>

								
								<div class="form-group form-group-log genother" style="display:none;">
									<input type="text" name="other" id="other" class="form-control-log"  placeholder="Gender">
									<p id="oth" class="p1"></p> 
								</div>

								<div class="form-group form-group-log">
									<input type="text" name="dob" class="form-control-log bdate" id="birthdate" onchange="_calculateAge();" placeholder="Date of birth">
									<p id="bdt" class="p1"></p>
								</div>

								<!-- <div class="form-group form-group-log">
									<input type="text" placeholder="City" name="city" id="city" class="form-control form-control-log">
									<p id="cty" class="p1"></p>
								</div>  -->

								<div class="form-group form-group-log">
									<select name="country" class="countries form-control" id="countryId"  style="background-color: #e9ecef;opacity: 1;">
									<option value="">Select Country</option>							
									</select>
									<p id="cntry" class="p1"></p>
								</div>

								<div class="form-group form-group-log">
									<select name="state" class="states form-control" id="stateId"  style="background-color: #e9ecef;opacity: 1;">
									<option value="">Select State</option>							
									</select>
									<p id="state" class="p1"></p>
								</div>

								<div class="form-group form-group-log">
									<select name="city" class="cities form-control" id="cityId"  style="background-color: #e9ecef;opacity: 1;">
									<option value="">Select City</option>							
									</select>
									<p id="cty" class="p1"></p>
								</div>

								<div class="form-group form-group-log">
									<input type="text" placeholder="Address" name="location" id="location" class="form-control form-control-log">
									<p id="loc" class="p1"></p>
								</div> 

							</div>
							<div class="col-12 mt-3" >	

								<h5 class="mb-3 text-left">Account Details</h5>		
								<div class="form-group form-group-log">
									<input type="text" name="accesscode" class="form-control-log" id="accesscode"  placeholder="Access Code">
								</div>
								
												
								<div class="form-group form-group-log">
									<input type="text" placeholder="Subscription" name="subscription" id="subscription" class="form-control form-control-log" disabled=disabled><span toggle="#password" class="fa fa-fw fa-pencil field-icon toggle-password" style="margin-left: 86%; cursor: pointer;  position: relative;bottom: 31px;"></span>
								</div>

								
								<div class="form-group">
								<button  class="btn btn-primary-log w-100 EditProfile " style="box-shadow: none !important;"   type="button" ><i class="fa fa-spinner fa-spin"></i> &nbsp;S A V E &nbsp; C H A N G E S</button>
									<!--  <input type="submit" class="btn btn-primary-log w-100 editProfile" value="S A V E &nbsp; C H A N G E S"> -->
								</div>
								<!-- <h6 style="color: #727272 !important; font-size: 18px;">User <a style="color: #7dd3d5;text-decoration: none;" href="http://34.215.40.163/support.php">Support</a></h6> -->
								</form>
							</div>
						</div>
			 </div>
		 </div>
	</div>	
</div>
<br><br>
	<?php include'footer.php'; ?>
	<!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> -->
	<!-- <script
  src="https://code.jquery.com/jquery-3.3.1.slim.js"
  integrity="sha256-fNXJFIlca05BIO2Y5zh1xrShK3ME+/lYZ0j+ChxX2DA="
  crossorigin="anonymous"></script> -->
  <script type="text/javascript">
               function initMap() {
                       var input = document.getElementById('location');
                       var autocomplete = new google.maps.places.Autocomplete(input);
               }
 //              google.maps.event.addDomListener(window, 'load', initialize);
    </script>
 <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD3ELMrkVwZoD3utlY0ZcrPl8FSx2yDikA&libraries=places&callback=initMap"
        async defer></script>
  <script src="js/jquery-1.10.2.js"></script>
	<script src="js/jquery-ui.js"></script>
	<script src="js/bootstrap.bundle.js"></script>
	<script src="js/signout.js"></script>
	<script src="js/sweetalert.min.js"></script>
	<!-- for dependent dropdown ---->
 <script src="//geodata.solutions/includes/countrystatecity.js"></script> 
	<script type="text/javascript">
		$(document).ready(function(){


			                window.ACCKEY = []
        window.CODES = []
        firebase.database().ref("AccessCodes").orderByKey().on("value", function(snapshot) {
                    snapshot.forEach(function(childSnapshot) {
                        // key
                        var key = childSnapshot.key;
                        window.ACCKEY.push(key);
                        // value, could be object
                        var childData = childSnapshot.val();
                        window.CODES[key] = childData;
                    });
                });

			$(".fa-spinner").hide();
                 


		var user = JSON.parse(window.localStorage.getItem('user'));
					firebase.database().ref("Users/"+user.user_id).on("value", function(snapshot) {
						window.localStorage.setItem('user',JSON.stringify(snapshot));
					});

			// page refresh on change in user collection			

			var catRef = firebase.database().ref("Users").child(user.user_id);
			
			catRef.on('child_changed', function(snapshot) {
				//alert(55);
					location.reload(true);

			});

					if(user.access_code != ""){
						firebase.database().ref("AccessCodes/" + user.access_code).on("value", function (snapshot) {
							snapshot.forEach(function (childSnapshot) {
								// key
								var key = childSnapshot.key;
								// value, could be object
								var childData = childSnapshot.val();

								if(key == "enddate" && childData != ''){
									//alert(childData);
									var date1 = new Date(childData);
									//   alert(window.CODES[i].createdOn);
									var date2 = new Date();
									if(date1 <= date2){
										window.localStorage.setItem("codestatus", "expire");	   
									}else{
										window.localStorage.setItem("codestatus", "valid");
									}
								}

								if (key == "bundle") {
									window.localStorage.setItem("Accessbundle", childData);
								}
								if (key == "category") {
									window.localStorage.setItem("Accesscat", childData);
								}
								if (key == "session") {
									window.localStorage.setItem("Accesssession", childData);
								}
								if (key == "accessto") {
									window.localStorage.setItem("Accessto", childData);
								}


							});
						});
					}



			if(user.payment){
				$.map(user.payment, function(value, index){
							if(value.subscription == 'active'){
//								alert(value.subscription_type);
								$("#subscription").val(value.subscription_type);
							}
								
				});
					
				firebase.database().ref("Users/"+user.user_id).on("value", function(snapshot) {
					window.localStorage.setItem('user',JSON.stringify(snapshot));
						snapshot.forEach(function(childSnapshot) {
							if(childSnapshot.key == 'payment'){
								$.map(childSnapshot.val(), function(value, index){
									if(value.subscription == 'active'){
		//								alert(value.subscription_type);
										$("#subscription").val(value.subscription_type);
									}
										
								});
							}
					});
				});
			}

		$(".fa-pencil").click(function(){
			window.location = 'subscription.php';
		});

		// code for make defualt selected gender from db
		$("#gender option").each(function() {
			
				if( user.gender && user.gender!="" && user.gender == $(this).val() && $(this).val() != ""){

					$(this).attr("selected","selected");
					if(user.gender == "Other"){
						$(".genother").show();
					}else{
						$(".genother").hide();
					}
					return false;
				}else if(user.gender && user.gender!="" && user.gender != $(this).val() && $(this).val() != ""){
					$("#gender option[value=Other]").attr("selected","selected");

						if($("#gender option:selected").val() == "Other"){
							$("#other").val(user.gender);
							$(".genother").show();
						}
					
				}
				/*else if(!user.gender){
					alert(55);
					$("#gender option[value='']").attr("selected","selected");
				}*/
		});

		// code for show and hide for other selection on gender
		$("#gender").change(function(){

			var val = $(this).val();
//			alert(val);
			if(val == "Other"){
				$(".genother").show();
				$("#other").val("");
			}else{
				$(".genother").hide();
			}

		});


		//console.log(user);
		 var uid = $('#uid').val(user.user_id);
         var fname=$('#first_name').val(user.first_name);
         var lname=$('#last_name').val(user.last_name);
		 var email=$('#email').val(user.email);
		//  if(user.country){
		// 	 $("#countryId").val(user.city);
		//  }
		 
		//  if(user.city){
		// 	 $("#cityId").val(user.city);
		//  }

		//  if(user.state){
		// 	$("#stateId").val(user.location);
		//  }

		 if(user.location){
			$("#location").val(user.location);
		 }
		 //var mob=$('#mobile_number').val(user.mobile_number);
		 

     	var dob=$('#birthdate').val(user.birthdate);
         var cimg = $("#oldimg").val(user.url);
	//	 var company = $("#company_name").val(user.company_name);
		 $("#email").css('cursor','not-allowed');
		// $("#birthdate").attr("disabled","disabled");
		 //$("#birthdate").css('cursor','not-allowed');
		 $("#accesscode").val(user.access_code);
		 if(user.access_code != ''){
			$("#accesscode").attr("disabled","disabled");
			$("#accesscode").css('cursor','not-allowed');

		 }else{
			$("#accesscode").removeAttr("disabled");
			$("#accesscode").css('cursor','text');
		 }

		 if(cimg || cimg != ""){
			
		$(".profile-pic").attr("src",user.url);
		 }
		 else{
		 	$(".profile-pic").attr("src","http://34.215.40.163/img/profileicon.png");
		 }
          /*var data = {
	            first_name: fname,
	            last_name: lname,
	            mobile_number: mob,
	            birthdate:dob,
	            category_img: cimg,
		  };*/
		
			$('.bdate').datepicker({
			dateFormat: 'yy-mm-dd',
                changeMonth: true,
                changeYear: true,
                yearRange: "-100:+0",
                minDate: new Date(1980, 1, 1),
                maxDate: "+0M +0D"
			});

			

			var readURL = function(input) {
					if (input.files && input.files[0]) {
						var reader = new FileReader();

						reader.onload = function (e) {
							$('.profile-pic').attr('src', e.target.result);
							imgwidth = this.width;
   							imgheight = this.height
						}
				
						reader.readAsDataURL(input.files[0]);
					}
    			}
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });

  

		   $(".EditProfile").click(function(){


					var alphaExp = /^[a-zA-Z]+$/;


					var Fname = document.getElementById('first_name').value;

					if (Fname.match(alphaExp)) {
					if(Fname.length > 15){
						document.getElementById('p1').innerHTML = " * Your First name  Maximum 15  character long only";
						document.getElementById('first_name').focus();        
							return false;
					}
					else{
						document.getElementById('p1').innerText = '';
						
						//return true;
					}
						

					} else {
					document.getElementById('p1').innerHTML = "* For your First name please use alphabets only"; // This segment displays the validation rule for name.
					//alert("alertMsg");
					document.getElementById('first_name').focus();
					return false;
					}



					
					var alphaExp = /^[a-zA-Z]+$/;

					var Lname = document.getElementById('last_name').value;

					    if (Lname.match(alphaExp)) {
					     /* if(Lname.length < 8 ){
					          document.getElementById('p2').innerHTML = " * Your Last name must be atleast 8  character long";
					          document.getElementById('last_name').focus();
					          return false;
					      }else if(Lname.length > 15){
					          document.getElementById('p2').innerHTML = " * Your Last name  Maximum 15  character long only";
					          document.getElementById('last_name').focus();      
					          return false;
					      }
					      else{*/
					          document.getElementById('p2').innerText = '';
					         // return true;
					      //}
					    } else {
					            document.getElementById('p2').innerText = "* For your Last name please use alphabets only"; // This segment displays the validation rule for name.
					            //alert(alertMsg);
					           
					             document.getElementById('last_name').focus();
					        return false;
					    }


						if($("#accesscode").val() != ""){
							var accchk = 0;
						}else{
							var accchk = 1;
						}

			var code = $("#accesscode").val();
			if(user.access_code == ''){
						if(code != "" && $.inArray(code, window.ACCKEY) != -1){
							
							for(i in window.CODES){
								if(code == i){
									
									var date1 = new Date(window.CODES[i].enddate);
								//   alert(window.CODES[i].createdOn);
									var date2 = new Date();
									window.nopeopleusing = window.CODES[i].maxpeopleallowed;
									window.nopeopleused = window.CODES[i].nopeopleused;
									window.validity = window.CODES[i].validity;
								}
							}

					var timeDiff = Math.abs(date2.getTime() - date1.getTime());
					var diffDays = Math.round(timeDiff / (1000 * 3600 * 24)); 
			// alert(parseInt(window.nopeopleused)+"===="+parseInt(window.nopeopleusing));
							if($.inArray(code, window.ACCKEY) != -1){
								
								if(window.validity == "custom" && (date1 <= date2)){
								//  $("#access_code").val("");
									$("#access_code").focus();
									accchk = 0;                  
				
										swal({
											title: "Code Expired!",
											text: "You are no longer valid to use this access code.",
											html:true,
											type: "warning",
											showCancelButton: false,
											confirmButtonColor: "#86CCEB",
											confirmButtonText: "OK",
											closeOnConfirm: false
										});
									
								}else if(parseInt(window.nopeopleused) >= parseInt(window.nopeopleusing)){
								$("#accesscode").focus();
								accchk = 0; 
								swal({
											title: "Limit Exceeded!",
											text: "Access code limit is exceeded.",
											html:true,
											type: "error",
											showCancelButton: false,
											confirmButtonColor: "#86CCEB",
											confirmButtonText: "OK",
											closeOnConfirm: false
										});
								}else if(parseInt(window.nopeopleused) < parseInt(window.nopeopleusing)){
									accchk = 1;
								//   window.nopeopleused = parseInt(window.nopeopleused) + 1; 
								//   firebase.database().ref("/AccessCodes/"+code).update({nopeopleused:window.nopeopleused});
									//alert(code);
								}         
							}
						}else if(code != "" && $.inArray(code, window.ACCKEY) == -1){
									accchk = 0; 
									//$("#access_code").val("");
									$("#accesscode").focus();
									
									swal({
											title: "Invalid Code!",
											text: "Please enter valid code.",
											html:true,
											type: "error",
											showCancelButton: false,
											confirmButtonColor: "#86CCEB",
											confirmButtonText: "OK",
											closeOnConfirm: false
										});
						}

			}else{
				 accchk = 1;
			}	


		   	
				var selectedfile = document.querySelector('#profile_image').files[0];
				
			 	var email = document.getElementById('email').value;
				 var allowedExtensions = /(\.jpg|\.jpeg|\.png)/;
				 if(selectedfile){
					// alert(55);
					var extension=allowedExtensions.exec(selectedfile.name);
				
			 	var filename=email+".jpg";
				//alert(selectedfile.name);
				console.log(selectedfile);

			    var storageRef = firebase.storage().ref("/Profile/" + filename);
			    var metadata = {contentType: selectedfile.type};
			    var uploadTask = storageRef.put(selectedfile, metadata);
			    uploadTask.on('state_changed', function (snapshot) {
				
			        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			        console.log('Upload is ' + progress + '% done');
			        switch (snapshot.state) {
			            case firebase.storage.TaskState.PAUSED: // or 'paused'
			                console.log('Upload is paused');
			                break;
			            case firebase.storage.TaskState.RUNNING: // or 'running'
			                console.log('Upload is running');
			                break;
			        }

			    },function(error){
				//	alert(error);
			        console.log(error);
			    },function(){

			         var downloadURL = uploadTask.snapshot.downloadURL;
			        console.log(uploadTask.snapshot);
					document.getElementById('imgurl').value = downloadURL;
					storageRef.getDownloadURL().then(function(url) {
						document.getElementById('imgurl').value = url;
						editprofile(accchk);	
					});
					//alert("before");
					
				});

			}else{
				//alert("after");
				editprofile(accchk);
			}





			
			   
		   
		   });
		   //alert(uid;);
		    
		   

		});
	</script>
	<script type="text/javascript">

		function editprofile(accchk)
		{

			$(".EditProfile").removeAttr("disabled");
			         var uid = $('#uid').val();
					    //alert(uid);
					    var booksRef = firebase.database().ref('Users').child(uid);
					    
					    var fname=$('#first_name').val();
					    var lname=$('#last_name').val();
					    var email=$('#email').val();
						//var mob=$('#mobile_number').val();
						var mob = "";
						//var country = $("#countryId").val();
						//var state = $("#stateId").val();
						//var city = $("#cityId").val();
						var location = $("#location").val();
					    var dob=$('#birthdate').val();
						 var cimg = $("#imgurl").val();
						 var accesscode =  $("#accesscode").val();
						 var gen = $("#gender option:selected").val();
					
							if(gen == 'Other'){
								gen = $("#other").val();
								if(gen == ""){
									$("#oth").html("Gender is required");
									return false;
								}
							}else{
								gen = gen;
							}

					     if($("#imgurl").val()){
					     	var cimg = $("#imgurl").val();
					     }
					     else{
					     	var cimg = $(".profile-pic").attr("src");
						 }
							 
						 
						 if(dob == ""){
						//	 alert(55555);
							 $("#bdt").html("Birthdate id required");
							 var bdtchk = 0;
						 }else{
						//	alert(55555);
							$("#bdt").html("");
							 var bdtchk = 1;
						 }

/*						 
						if(country == ''){
							 $("#cntry").html("Country is required");
							 $("#state").html("State is required");
							 $("#cty").html("City is required");
							 return false;
						 }else{
							 $("#cntry").html("");
							 $("#state").html("");
							 $("#cty").html("");
						 }


						if(state == ''){
							 $("#state").html("State is required");
							 $("#cty").html("City is required");
							 return false;
						 }else{
							 $("#state").html("");
							 $("#cty").html("");
						 }



						if(city == ''){
							 
							 $("#cty").html("City is required");
							 return false;
						 }else{

							 $("#cty").html("");
						 }

*/

						 if(location == ''){
							 $("#loc").html("Location is required");
							 return false;
						 }else{
							$("#loc").html("");
						 }


						 //alert(cimg);
//					     var company = $("#company_name").val();
						//alert(fname);
						if(accchk == 1 && bdtchk == 1  && location != "")
						{
							$(".fa-spinner").show();
								
								booksRef.update({ access_code:accesscode, first_name: fname, last_name: lname, birthdate:dob, gender:gen, mobile_number: mob, url: cimg, location : location }).then(function() {
									
									swal({title: "Success", text: "Your Profile Update Successfully!!!", type: "success"},
																	function(){ 
																	$(".fa-spinner").hide();
																	window.location.reload();
																});
								}).catch(function(error){
									alert('err' + error);
								});
						}
					    firebase.database().ref("Users/"+user.user_id).on("value", function(snapshot) {

					   	window.localStorage.setItem('user',JSON.stringify(snapshot));
					   });

		}

		//image upload code
		   function uplaoduserimg() {
   				// document.getElementsByClassName("EditProfile").disabled = true;

				//$(".EditProfile").attr("disabled","disabled");

			    
			    
			  //  var file_data = $('#profile_image').prop('files')[0]; 
			    //console.log(file_data);  
			 //    var form_data = new FormData();                  
			 //    form_data.append('userprofile', file_data);
			 // //   alert(form_data);                             
			 //    $.ajax({
			 //        url: 'Admin/action.php', // point to server-side PHP script 
			 //        dataType: 'text',  // what to expect back from the PHP script, if anything
			 //        cache: false,
			 //        contentType: false,
			 //        processData: false,
			 //        data: form_data,                         
			 //        type: 'post',
			 //        success: function(data){
			 //           // alert(data);
			 //            console.log(data);
			 //            $("#imgurl").val("http://34.215.40.163/Admin/"+data.replace(/\n/g, ''));
			 //            $(".EditProfile").removeAttr("disabled");
			 //            console.log(data); // display response from the PHP script, if any
			 //        }
			 //     });
			 	//var file= target.files[0];
			 	//console.log(file_data);
			 	//var Fname = document.getElementById('email').value;
			 	//var allowedExtensions = /(\.jpg|\.jpeg|\.png)/;
    	// 		var extension=allowedExtensions.exec(file_data.name);
			 	// var img=Fname+extension[0];
			 	// var storageRef=firebase.storage().ref("Profile/"+img);
			 	// var task=storageRef.put(file_data);
			 	// task.on('state_changed', function (snapshot) {

			 	// 		function complete(){
			 	// 			alert(task.snapshot.downloadURL);
			 	// 			console.log(task.snapshot.downloadURL);
			 	// 			$(".EditProfile").removeAttr("disabled");
			 	// 		}
			 	// 	});
			 	// var selectedfile = document.querySelector('#profile_image').files[0];
			 	// var email = document.getElementById('email').value;
			 	// var allowedExtensions = /(\.jpg|\.jpeg|\.png)/;
    	// 		var extension=allowedExtensions.exec(selectedfile.name);
			 	// var filename=email+".jpg";
			  //   //var filename = selectedfile.name;
			  //   var storageRef = firebase.storage().ref("/Profile/" + filename);
			  //   var metadata = {contentType: selectedfile.type};
			  //   var uploadTask = storageRef.put(selectedfile, metadata);

			  //   uploadTask.on('state_changed', function (snapshot) {

			  //       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			  //       console.log('Upload is ' + progress + '% done');
			  //       switch (snapshot.state) {
			  //           case firebase.storage.TaskState.PAUSED: // or 'paused'
			  //               console.log('Upload is paused');
			  //               break;
			  //           case firebase.storage.TaskState.RUNNING: // or 'running'
			  //               console.log('Upload is running');
			  //               break;
			  //       }

			  //   },function(error){
			  //       console.log(error);
			  //   },function(){

			  //        var downloadURL = uploadTask.snapshot.downloadURL;
			  //        alert(downloadURL);
			  //       document.getElementById('imgurl').value = downloadURL;
			  //       $(".EditProfile").removeAttr("disabled");
			        
			
			  //   });

			}
		   //end image upload code

		   		
		   //vlidations start
		//    function profileValidation() {
		//    	var Fname=document.getElementById("first_name").value;
		//    	var Lname=document.getElementById("last_name").value;
		//  	// var mob=document.getElementsById("mobile_number").value;
		//  	// var birthdate = document.getElementById('birthdate').value;
		//  	//alert(Fname);
		//  		if (inputfAlphabet(first_name, "* For your First name please use alphabets only ")) {
		// 		if (inputlAlphabet(last_name, "* For your Last name please use alphabets only ")) {
		// 		return true
		// 		}

		// 		return false;
		   		/*function inputfAlphabet() {
					var alphaExp = /^[a-zA-Z]+$/;


					var Fname = document.getElementById('first_name').value;

					if (Fname.match(alphaExp)) {
					   if(Fname.length > 15){
					      document.getElementById('p1').innerHTML = " * Your First name  Maximum 15  character long only";
					      document.getElementById('first_name').focus();        
					        return false;
					  }
					  else{
					      document.getElementById('p1').innerText = '';
					      return true;
					  }
					      

					} else {
					document.getElementById('p1').innerHTML = "* For your First name please use alphabets only"; // This segment displays the validation rule for name.
					//alert("alertMsg");
					document.getElementById('first_name').focus();
					return false;
					}
				}


				function inputlAlphabet() {
        
					var alphaExp = /^[a-zA-Z]+$/;

					var Lname = document.getElementById('last_name').value;

					    if (Lname.match(alphaExp)) {
					     /* if(Lname.length < 8 ){
					          document.getElementById('p2').innerHTML = " * Your Last name must be atleast 8  character long";
					          document.getElementById('last_name').focus();
					          return false;
					      }else if(Lname.length > 15){
					          document.getElementById('p2').innerHTML = " * Your Last name  Maximum 15  character long only";
					          document.getElementById('last_name').focus();      
					          return false;
					      }
					      else{*/
					        //  document.getElementById('p2').innerText = '';
					         // return true;
					      //}
					   /* } else {
					            document.getElementById('p2').innerText = "* For your Last name please use alphabets only"; // This segment displays the validation rule for name.
					            //alert(alertMsg);
					           
					             document.getElementById('last_name').focus();
					        return false;
					    }
				}*/
		 	//}
			
			
			function _calculateAge() { // birthday is a date
        var date1 = new Date();
        var  dob= document.getElementById("birthdate").value;
        //alert(dob);
        var date2=new Date(dob);
		var pattern = /^\d{4}\-\d{1,2}\-\d{1,2}$/; //Regex to validate date format (dd/mm/yyyy)
        if (pattern.test(dob)) {
            var y1 = date1.getFullYear(); //getting current year
            var y2 = date2.getFullYear(); //getting dob year
            var age = y1 - y2;           //calculating age 
           // confirm("Age : " + age);
            if(age<8)
            {
                //alert("please come after 8");
                document.getElementById("bdt").innerHTML = "* User must be 8 year old or above";
				document.getElementById("birthdate").value = '';
				//return false;
            }else{
				  document.getElementById("bdt").innerHTML = "";
				 // return false;
            }
        } else {
            alert("Please Input in (yyyy/mm/dd) format!");
        }
}
		   //end validations
			

	</script>
</body>
</html>
