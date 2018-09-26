var email = "jems@gmail.com";
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
		});
		});
  })
  .catch(function(error){
    console.log("Login Failed!", error);
  });
  
  var storedNames = JSON.parse(window.localStorage.getItem("session"));
  if(storedNames != ''){
			var conversation = 1;
			  
		for (i in storedNames)
		{
		   for(j in storedNames[i]){

			if(conversation == window.localStorage.getItem('content')){
				//	$(".conv").html(storedNames[i][j].session_img);
				$(".bg").css('background', 'url('+storedNames[i][j].session_img+') ');
				//$(".modal-body p").html(storedNames[i][j].session_description)
			}
				console.log("ds"+conversation);
conversation++;
		}
	
	}

}
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
		$(".cat").html("");
firebase.database().ref("Category").on("value", function(snapshot) {
	var c = [];
	var session = [];
	var ht ='';
			snapshot.forEach(function(childSnapshot) {
				// key
				var key = childSnapshot.key;
				// value, could be object
				var childData = childSnapshot.val();
				var chkSub = false;
				var chkBnd = false;
				var chkS = false;
				var i = 1; 
				//console.log(snapshot.numChildren());
				//console.log(childSnapshot.getPriority());
                console.log(childSnapshot.key);
				c.push(childSnapshot.key);
				var ht2 = '';
				var ht = '<div class="row Margins"><p class="MainMenu"><span class="i">'+childSnapshot.key+'</span>&nbsp;&nbsp;<a href="#" class="learnMorestyle"><i>LEARN MORE</i></a></p></div><br><div class="container text-center cardContainers"><div class="row Margins text-center">';
				if(childSnapshot.key == 'Open Dive'){
					session.push(childData.Session);
					$.map(childData.Session, function(value, index) {
					   // console.log(value.subcategory_id);
					   
						console.log("s"+value.session_img);
						
						if(i==window.localStorage.getItem('content')){
					//$(".bg").css('background', 'url('+value.session_img+') ');
							$(".conv").html(value.session_name);
						}
						if(i>3){
						ht +='<div class="col-md-4 col-xs-6 boxStyle hiddens" style=" background-image: url('+value.session_img+');"><p class="Center">'+value.session_name+'</p></div>';

						}else{
							chkS = true;
						ht +='<div class="col-md-4 col-xs-6 boxStyle" style=" background-image: url('+value.session_img+');"><p class="Center">'+value.session_name+'</p></div>';
						}
					i++;
					});
				}
				if(childSnapshot.hasChild("Bundle")){
					$.map(childData.Bundle, function(value, index) {
					    console.log(value);
						//console.log(value.session_name);
						if(i==window.localStorage.getItem('content')){
							//$(".conv").html(value.session_name);
						}
						if(i>3){
						ht = ht +'<div class="col-md-4 col-xs-6 boxStyle hiddens1" style=" background-image: url('+value.bundle_img+');"><p class="Center">'+value.bundle_name+'</p></div>';

						}else{
							chkBnd = true;
						ht = ht + '<div class="col-md-4 col-xs-6 boxStyle" style=" background-image: url('+value.bundle_img+');"><p class="Center">'+value.bundle_name+'</p></div>';
						}
					i++;
					});
				}
				if(childSnapshot.hasChild("SubCategory")){
					alert(childSnapshot.key.length);
					$.map(childData.SubCategory, function(value, index) {
						//sub += index;
						//console.log(value.session_name);
						
						if(i==window.localStorage.getItem('content')){
							//$(".conv").html(value.session_name);
						}
						if(i>3){
							chkSub = true;
						ht = ht +'<div class="col-md-4 col-xs-6 boxStyle hiddens2" style=" background-image: url('+value.subcategory_img+');"><p class="Center">'+value.subcategory_name+'</p></div>';

						}else{
							
						ht = ht + '<div class="col-md-4 col-xs-6 boxStyle" style=" background-image: url('+value.subcategory_img+');"><p class="Center">'+value.subcategory_name+'</p></div>';
						}
					i++;

					});
				}
				if(childSnapshot.key == 'Open Dive' && chkS){
				ht +='<p class="exploreMore">EXPLORE MORE</p></div></div>';
				}else if(childSnapshot.key == 'Quick Dive' && chkBnd){
				ht +='<p class="exploreMore1">EXPLORE MORE</p></div></div>';
				}else if(childSnapshot.key == 'Deep Dives' && chkSub){
				ht +='<p class="exploreMore2">EXPLORE MORE</p></div></div>';
					
				}
                //$(".cardtexts").html(childData.qoute_description);
				// Do what you want with these key/values here*/
				console.log(ht2);
				$(".cat").append(ht);
		
					/*$(".exploreMore").click(function(){
							alert(555);
							var c = "."+$(this).prev().closest('div').attr('class').split(' ')[3];
							console.log( c);
							//$(".hidden").show();
							//$(".exploreMore").hide();
						});	*/
					$(".exploreMore1").click(function(){
							//alert(555);
							var c = "."+$(this).prev().closest('div').attr('class').split(' ')[3];
							console.log( c);
							$(c).show();
							$(".exploreMore2").hide();
						});	
				window.localStorage.setItem('session',JSON.stringify(session));
			});
			$(".i").each(function(index,value){
//console.log(c[index]);
				//$(this).html(c[index]);
					//alert($(this).html());
				});
				 $('.loader').fadeOut();
		});
		
		


$(".i").hover(function(){
	//$(this).for
	//alert($(this).html());
	var ht = '<div class="row Margins"><p class="MainMenu"><span class="i">QUICK DIVE</span>&nbsp;&nbsp;<a href="#" class="learnMorestyle"><i>LEARN MORE</i></a></p></div><br><div class="container text-center cardContainers"><div class="row Margins text-center">';
	ht +='<div class="col-md-4 col-xs-6 boxStyle" style="background-color:#aaa;"><p class="Center">Having A Bad Day</p></div>';
	ht +='</div></div>';
});
$(".conv").html();
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
	$(".modal-body p").html(storedNames[i][j].session_description)
console.log(storedNames[i][j].meditation_audio[0]);
}
/*
		if((conversation == window.localStorage.getItem('content')){
			//$(".conv").html(storedNames[i][j].session_name);
		}*/
		//console.log(storedNames[i][j].session_name);
conversation++;
	}
}
console.log($(".modal-body p").html());	
//console.log(window.localStorage.getItem('content'));
$(".bannerButton").click(function(){
		var url = "http://localhost/DiveThru/player.php";
		window.location.href = url;

	});