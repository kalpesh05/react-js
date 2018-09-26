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



     /*$('#exampleModalCenter').modal('hide');*/

firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
          window.location.href = "http://34.215.40.163/login.php";
        // User is signed in.
    } else{
    	console.log(user.uid);
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
				if(key == 'payment'){
					$.map(childData, function(value, index){
						var currentdate2 = new Date();
						var currentdate = new Date(value.payment_date);
						 var datetime = 
                    +currentdate.getFullYear() + "-"
                    + ("0" + (currentdate.getMonth()+1)).slice(-2)  + "-" 
                    + ("0" + currentdate.getDate()).slice(-2)  + " "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
                    var timeDiff = Math.abs(currentdate2.getTime() - currentdate.getTime());
					var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24 )); 
						if(diffDays > 30){

  						 firebase.database().ref("Users/"+user.user_id).update({membership_type:"Free"});
						console.log(currentdate2.getTime()+"-"+currentdate.getTime());
						}else{
							console.log("subcribe");
						}
					});
				}			
				// Do what you want with these key/values here*/
				
			});
		});		

    }
});
  
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
//firebase.database().ref("Category").orderByChild("category_id").on("value", function(snapshot) {		
firebase.database().ref("Category").orderByKey().on("value", function(snapshot) {
	var c = [];
	var session = [];
	var ht ='';
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
				var ht = '<div class="row Margins"><p class="MainMenu1 "><span class="i">'+childSnapshot.key+'</span>&nbsp;&nbsp;<a href="#" class="learnMorestyle" style="outline:none;" data-toggle="modal" data-target="#exampleModalCenter2"><i>LEARN MORE</i></a></p></div><br><div class="container text-center cardContainers"><div class="row Margins text-center">';
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
						ht +='<div class="col-md-4 col-xs-6 boxStyle hiddens3 '+childSnapshot.key+'" style=" background-image: url('+value.session_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-bundle="'+blen+'" data-subcat="'+sblen+'" style="color:#fff;">'+value.session_name+'</p></div>';

						}else{
							chkS2 = true;
						ht +='<div class="col-md-4 col-xs-6 boxStyle '+childSnapshot.key+'" style=" background-image: url('+value.session_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-bundle="'+blen+'" data-subcat="'+sblen+'">'+value.session_name+'</p></div>';
						}
					i++;
					});
				}
				if(childSnapshot.key == 'Open Dive'){
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
						ht +='<div class="col-md-4 col-xs-6 boxStyle hiddens '+childSnapshot.key+'" style=" background-image: url('+value.session_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-bundle="'+blen+'" data-subcat="'+sblen+'" style="color:#fff;">'+value.session_name+'</p></div>';

						}else{
							chkS = true;
						ht +='<div class="col-md-4 col-xs-6 boxStyle '+childSnapshot.key+'" style=" background-image: url('+value.session_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-bundle="'+blen+'" data-subcat="'+sblen+'">'+value.session_name+'</p></div>';
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
						//console.log(value.session_name);
						
						if(i==window.localStorage.getItem('content')){
							//$(".conv").html(value.session_name);
						}
						if(i>6){
						ht = ht +'<div class="col-md-4 col-xs-6 boxStyle hiddens1 '+childSnapshot.key+'" style=" background-image: url('+value.bundle_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-bundle="'+blen+'" data-subcat="'+sblen+'">'+value.bundle_name+'</p></div>';

						}else{
							chkBnd = true;
						ht = ht + '<div class="col-md-4 col-xs-6 boxStyle '+childSnapshot.key+'" style=" background-image: url('+value.bundle_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-bundle="'+blen+'" data-subcat="'+sblen+'">'+value.bundle_name+'</p></div>';
						}
					i++;
					});
				}
				/*Deep Dive*/
				if(childSnapshot.hasChild("SubCategory")){
				//	alert(childSnapshot.key.length);
                console.log(childSnapshot.key);
					var blen = Object.keys(childData.Bundle).length;
					var sblen = Object.keys(childData.SubCategory).length;
					$.map(childData.SubCategory, function(value, index) {
						//sub += index;
						//console.log(value.session_name);
						
						if(i==window.localStorage.getItem('content')){
							//$(".conv").html(value.session_name);
						}
						if(i>6){
							chkSub = true;
						ht = ht +'<div class="col-md-4 col-xs-6 boxStyle hiddens2 '+childSnapshot.key+'" style=" background-image: url('+value.subcategory_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-bundle="'+blen+'" data-subcat="'+sblen+'">'+value.subcategory_name+'</p></div>';

						}else{
							
						ht = ht + '<div class="col-md-4 col-xs-6 boxStyle '+childSnapshot.key+'" style=" background-image: url('+value.subcategory_img+'); background-size:cover;"><p class="Center" data-cat="'+childSnapshot.key+'" data-bundle="'+blen+'" data-subcat="'+sblen+'">'+value.subcategory_name+'</p></div>';
						}
					i++;

					});
				}


				if(childSnapshot.key == 'Open Dive' && chkS ){
				ht +='<div class="col-md-12 center-block"><button type="submit" class="btn1 exploreMore " style=" border-color: #7dd3d5;  margin-top: 10%; outline: none; text-align: center;  color:#FFF; background-color: #7dd3d5;">E X P L O R E &nbsp; M O R E</button></div></div></div>';
				}else if(childSnapshot.key == '10 Day Intro Program' && chkS2){
				ht +='<div class="col-md-12 center-block"><button type="submit" class="btn1 exploreMore3 " style=" border-color: #7dd3d5;  margin-top: 10%; outline: none; text-align: center;  color:#FFF; background-color: #7dd3d5;">E X P L O R E &nbsp; M O R E</button></div></div></div>';

				}else if(childSnapshot.hasChild("Bundle") && chkBnd){
				ht +='<div class="col-md-12 center-block"><button type="submit" class="btn1 exploreMore1" style=" border-color: #7dd3d5;  margin-top: 10%; outline: none; text-align: center;  color:#FFF; background-color: #7dd3d5;">E X P L O R E &nbsp; M O R E</button></div></div></div>';
				}else if(childSnapshot.hasChild("SubCategory") && chkSub){
				ht +='<div class="col-md-12 center-block"><button type="submit" class="btn1 exploreMore2 " style=" border-color: #7dd3d5;  margin-top: 10%; outline: none; text-align: center;  color:#FFF; background-color: #7dd3d5;">E X P L O R E &nbsp; M O R E</button></div></div></div>';
					
				}
                //$(".cardtexts").html(childData.qoute_description);
				// Do what you want with these key/values here*/
			//	console.log(ht);
				$(".cat").append(ht);
		
						$(".exploreMore").click(function(){
						//	alert(555);
							$(".hiddens").show();
							$(".exploreMore").hide();
						});

						$(".exploreMore1").click(function(){
							//alert(555);
						//	var c = "."+$(this).prev().closest('div').attr('class').split(' ')[3];
						//	console.log( c);
							$(".hiddens1").show();
							$(".exploreMore1").hide();
						});		

						$(".exploreMore2").click(function(){
							//alert(555);
						//	var c = "."+$(this).prev().closest('div').attr('class').split(' ')[3];
						//	console.log( c);
							$(".hiddens2").show();
							$(".exploreMore2").hide();
						});
						$(".exploreMore3").click(function(){
							//alert(555);
						//	var c = "."+$(this).prev().closest('div').attr('class').split(' ')[3];
						//	console.log( c);
							$(".hiddens3").show();
							$(".exploreMore3").hide();
						});		

				//				$(".cat").html(ht);
				if(window.localStorage.getItem('cat') == '10 Day Intro Program' && childData.session_subcription_type == 'Free' || !window.localStorage.getItem('cat') ){
					window.localStorage.setItem('session',JSON.stringify(session));
				}
				$(".learnMorestyle").click(function(){
								if(key == $(this).prev().text()){
									desc = childData.category_description;
								}
							});
			});
dash();

				$(".learnMorestyle").click(function(){
				var cat = $(this).prev().text();
				$(".modal-content .modal-body .modal-title").html(cat);
				$(".modal-body p").html(desc);
				//$("#exampleModalCenter2").modal('show');
				console.log(desc);
			});
			$(".i").each(function(index,value){
//console.log(c[index]);
				$(this).html(c[index]);
					//alert($(this).html(c[index]	));
				});
				// $('.loader').fadeOut();
		});
		
		


$(".i").hover(function(){
	//$(this).for
	//alert($(this).html());
	var ht = '<div class="row Margins"><p class="MainMenu"><span class="i">QUICK DIVE</span>&nbsp;&nbsp;<a href="#" class="learnMorestyle"><i>LEARN MORE</i></a></p></div><br><div class="container text-center cardContainers"><div class="row Margins text-center">';
	ht +='<div class="col-md-4 col-xs-6 boxStyle" style="background-color:#aaa;"><p class="Center">Having A Bad Day</p></div>';
	ht +='</div></div>';
});
//$(".conv").html();
var storedNames = JSON.parse(window.localStorage.getItem("session"));

$.map(storedNames, function(value, index) {

console.log(value.session_name);
});
if(window.localStorage.getItem('cat') == "10 Day Intro Program" || !window.localStorage.getItem('cat')){
	//alert(5);
for (i in storedNames)
{
	var conversation = 1;
   for(j in storedNames[i]){

	if(conversation == window.localStorage.getItem('content')){
	$(".conv").html(storedNames[i][j].session_name);
	  //$(".sdesc").html(storedNames[i][j].session_description);
	$(".modal-body h2").html(storedNames[i][j].session_name)
console.log("p"+storedNames[i][j].meditation_audio[0]);
console.log($(".modal-body p").html());
}

conversation++;
	}
}
}
console.log("d"+$(".modal-body").html());	
//console.log(window.localStorage.getItem('content'));
$(".bannerButton").click(function(){
	var day = window.localStorage.getItem('content');
		window.localStorage.removeItem("cat");
	//window.localStorage.setItem("cat","10 Day Intro Program");
	var user = JSON.parse(window.localStorage.getItem('user'));
		if(day>8 && day<=10){
			 $('#exampleModalCenter').modal('show');
		}else if(day<=8){
		var url = "http://34.215.40.163/player.php";
		window.location.href = url;
		}else if(day>10 && user.membership_type == "Free"){
			window.location = "subscription.php";
		}else if(day>10 && user.membership_type != "Free"){
			swal("You Have Finished Your 10 Day Intro Program");
		}
	});
function dash(){
	$(".boxStyle").click(function(){
		var id = $(this).find("p").attr("id");
		var cat1 = $(this).find("p").data("cat");
		var bundle = $(this).find("p").data("bundle");
		var subcat = $(this).find("p").data("subcat");
			
		if(bundle == 0 && subcat == 0){
			window.localStorage.setItem("cat",cat1);

				window.location = "opendive.php";
		}else if(bundle != 0 && subcat == 0){
			window.localStorage.setItem("cat",cat1);
				window.location = "quickdive.php";

		}else if(bundle == 0 && subcat != 0){
			window.localStorage.setItem("cat",cat1);
				window.location = "quickdive.php";

		}
		if(cat1 == "Open Dive"){
		console.log(bundle+"=="+subcat);
		}else if(cat1 == "Quick Dive"){
		console.log(bundle+"=="+subcat);
				//window.location = "quickdive.php";

		}else if(cat1 == "Deep Dive"){
		console.log(bundle+"=="+subcat);
				window.location = "DeepMain.php";

		}
	});
}	
			console.log(sessionStorage.getItem("Test"));

$(".dropdown-item").click(function(){
	var cat = $(this).data("cat");
	var page = $(this).text();
	 var x = $(this).prev();
	 console.log(x);
	//alert(page);
	/*firebase.database().ref("Category").on("value", function(snapshot) {
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
		
	});*/
});

if(window.performance.navigation.type>0){
	window.localStorage.setItem("back",true);
}else{
	window.localStorage.setItem("back",false);	
}

$(".nav-link").click(function(){
//$(".dropdown-item").click(function(){
	var cat = $(this).text();
	console.log(cat);
	firebase.database().ref("Category").on("value", function(snapshot) {
		snapshot.forEach(function(childSnapshot) {

		
			if(childSnapshot.hasChild("Bundle") &&  (childSnapshot.key).toUpperCase() == cat.toUpperCase() && childSnapshot.child("Bundle").val() != ""){
				window.localStorage.setItem("cat",childSnapshot.key);
				sessionStorage.setItem("cat", childSnapshot.key);
				window.localStorage.setItem("back",false);
				console.log("quick");
				//window.location = "quickdive.php";
				
			}
			if( (childSnapshot.key).toUpperCase() == cat.toUpperCase() && childSnapshot.child("Bundle").val() == ""){
				console.log("open");
				sessionStorage.setItem("cat", childSnapshot.key);
				window.localStorage.setItem("back",false);
				window.localStorage.setItem("cat",childSnapshot.key);
				//window.location = "opendive.php";
				
			}
		});
		
	});
	

});
var user = JSON.parse(window.localStorage.getItem('user'));	

$.get('http://34.215.40.163/ipn/result.txt', function(data) {
   var str = data;
   var arr = str.split("&");
   		console.log(data);
   var eml = "";
   var txid = "";
	var pyid = "";
	var type = "paypal";
	var status = "";
	var time = "";
	var state = "";
	var total = 0;
	var currency = "";
	var full_name = "";
	var l_name = "";
	var address = "";
	var city = "";
	var subcription_type = "";
   /*arr.forEach(function(value) {
   console.log(value);
   });*/
var $_GET=[];
window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(a,name,value){$_GET[name]=value;})

//console.log($_GET["auth"]);
   	for(var i in arr){
   		//console.log(arr[i].substring(arr[i].indexOf("=")+1));
       	//console.log(arr[i].substring(arr[i].indexOf("=")+1));

   		switch (arr[i].substring(0, arr[i].indexOf("="))) {
    case "amount3":
         total = arr[i].substring(arr[i].indexOf("=")+1);
        break;
    case "payer_email":
         eml = arr[i].substring(arr[i].indexOf("=")+1);
        break;
    case "payment_date":
         time = arr[i].substring(arr[i].indexOf("=")+1);
        break;
    case "payer_id":
         pyid = arr[i].substring(arr[i].indexOf("=")+1);
        break;
    case "payer_status":
         status = arr[i].substring(arr[i].indexOf("=")+1);
        break;
    case "subscr_id":
         txid = arr[i].substring(arr[i].indexOf("=")+1);
        break;
    case "first_name":
         full_name = arr[i].substring(arr[i].indexOf("=")+1);
        break;    
    case "last_name":
         l_name = arr[i].substring(arr[i].indexOf("=")+1);
        break;
    case "address_state":
        state = arr[i].substring(arr[i].indexOf("=")+1);
        break;
    case "address_city":
       	city = arr[i].substring(arr[i].indexOf("=")+1);
        break;
    case "mc_currency":
        currency = arr[i].substring(arr[i].indexOf("=")+1);
        break;
    case "period3":
    	if(arr[i].substring(arr[i].indexOf("=")+1) == "1 M"){

        subcription_type = "Monthly";
    	}else if(arr[i].substring(arr[i].indexOf("=")+1) == "1 Y"){
        subcription_type = "Yearly";
    		
    	}
       // alert(subcription_type);
        break;
}
   	}
if($_GET["token"]){
	var n = full_name+" "+l_name;
	var currentdate = new Date(time); 
                var datetime = 
                     + ("0" + currentdate.getDate()).slice(-2)  + "-"
                    + ("0" + (currentdate.getMonth()+1)).slice(-2)  + "-" 
                    +currentdate.getFullYear()+ " "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
                    alert(datetime);
   var data = {transaction_id:txid,payer_id:pyid,name:n,email:eml,payment_type:type,payment_status:status,payment_date:time,state:state,city:city,price:total,currency:currency,subcription_type:subcription_type};
   var db = firebase.database();
   db.ref("Users/"+user.user_id).update({membership_type:"paid"});
			/*db.ref("Users/"+user.user_id+"/payment").child(txid).set(data);*/ // Update lalted time on pause
			db.ref("Users/"+user.user_id+"/payment").push(data); // Update lalted time on pause
				window.setTimeout(function() {
                                  window.location.href = "dashboard.php";
                                }, 3000);
}
console.log(data);
}, 'text');


var eml = $(".email").val();
			var txid = $(".tr_id").val();
			var pyid = $(".payer_id").val();
			var type = $(".payment_type").val();
			var status = $(".payment_status").val();
			var time = $(".payment_time").val();
			var state = $(".state").val();
			var total = $(".total").val();
			var currency = $(".currency").val();
			var full_name = $(".full_name").val();
			var address = $(".address").val();
			var city = $(".city").val();
			var data = {transaction_id:txid,payer_id:pyid,name:full_name,email:eml,payment_type:type,payment_status:status,payment_date:time,state:state,city:city,price:total,currency:currency,subcription_type:"Lifetime"};
			//console.log(data);

			console.log(time);
			if(txid){

						var db = firebase.database();
						db.ref("Users/"+user.user_id).update({membership_type:"paid"});
			/*db.ref("Users/"+user.user_id+"/payment").child(txid).set(data);*/ // Update lalted time on pause
			db.ref("Users/"+user.user_id+"/payment").push(data); // Update lalted time on pause
				window.setTimeout(function() {
                                  window.location.href = "dashboard.php";
                                }, 3000);
			}