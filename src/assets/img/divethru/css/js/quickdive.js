  	
  /*Getting last inserted quotes */
		$(".cat").html("");
		var user = JSON.parse(window.localStorage.getItem('user'));	
		
//Here is The The code To show Open Dive session
firebase.database().ref("Category").orderByChild("session_id").on("value", function(snapshot) {
		var c = [];
		var session = [];
		var ht ='';
		snapshot.forEach(function(childSnapshot) {
			///debugger;
			var key = childSnapshot.key;
				// value, could be object
				var childData = childSnapshot.val(); 
				 //console.log(childSnapshot.key);
				c.push(childSnapshot.key);
				var ht ='';	
				var complete = 0;
				var comper = 0;
				if(childSnapshot.key == 'Quick Dive'){
					session.push(childData.Session);
					$.map(childData.Bundle, function(value, index) {
						console.log(value);
						var total = Object.keys(value.Session).length;
						var desc = value.bundle_description.substring(0, 80)+ '....';
						var j = 0;
						console.log(user.streak);
						complete = 0;
									comper = 0;
						$.map(user.streak, function(value2, index2) {
							
							if(index == index2){
									complete =	Object.keys(value2.Session).length;
									comper =((complete*100)/total);
										}
							});
								
									
											ht = ht + '<div class="col-md-4 boxStyle hover-box1 p-0" style="background-image: url('+value.bundle_img+');"><p class="Center">'+value.bundle_name+'</p><p> <span>'+complete+'</span> Of '+total+'</p><div class="progress" style="height:10px;width:90%;margin:auto;"><div class="progress-bar" style="height:10px;width:'+comper+'%;"></div></div><div class="hover-box1a text-center text-white"><h2>Description</h2><p class="m-0">'+desc+'</p><div class="btn btn2 btn-outline-light" id="'+value.bundle_id+'" style="border-radius: 0;">S E S S I O N</div></div></div>';
							
						
					});	
				}	
			//	ht +='</div></div>';
			//	$(".cat1").append(ht);

/*$(".hover-box1").bind('touchstart', function(event){
		//alert('test');
       $(this).toggleClass('hover-box1a');
});*/
		});
		
});
		$( "div.boxStyle" ).each(function( index ) {
		if(index != 0 && user.membership_type == 'Free'){

			$(this).append('<div class="box1a"><i class="fa fa-lock fa-2x center"></i></div>');
		}
		
  		
	});
		
	firebase.database().ref("Category").orderByChild("session_id").on("value", function(snapshot) {
		var c = [];
		var session = [];
		var ht ='';
var content = '';
		snapshot.forEach(function(childSnapshot) {
			///debugger;
			var key = childSnapshot.key;
				// value, could be object
				var childData = childSnapshot.val(); 
				 //console.log(childSnapshot.key);
				c.push(childSnapshot.key);
				var ht ='';	
				var complete = 0;
				var comper = 0;
				if(childSnapshot.key == 'Quick Dive'){
					session.push(childData.Session);
					$.map(childData.Bundle, function(value, index) {
						content += '<div class="container-fluid text-center"><div class="pad2"><div class="row my-5 justify-content-center justify-content-md-start"><h4>'+value.bundle_name+'</h4></div>';
							content += '<div class="row px-5 bnd">';
						
						
						/*$.map(user.streak, function(value2, index2) {
							
							if(index == index2){
									complete =	Object.keys(value2.Session).length;
									comper =((complete*100)/total);
										}
							});*/

						$.map(value.Session, function(value2, index2) {
								if(value2.session_description.length <= 20){
							var desc = value2.session_description.substring(0, 20)+ '....';
							}else{
								
							var desc = value2.session_description.substring(0, 20);
							}
								
								content += '<div class="col-md-4 col-3 hover-box1 p-0 boxStyle" style=" background-image: url('+value2.session_img+'); width:200px" ><p class="Center bundle" id="'+value2.session_id+'">'+value2.session_name+'</p><div class="hover-box1a text-center text-white"><h2>Description</h2><p class="m-0">'+desc+'</p><div class="btn btn2 btn-outline-light" id="'+value2.session_id+'" style="border-radius: 0;">Start to DiveThru</div></div></div>';
						});
								
							//content += '</div>';
						content += '</div></div></div>';	
	
										/*	ht = ht + '<div class="col-md-4 boxStyle hover-box1 p-0" style="background-image: url('+value.bundle_img+');"><p class="Center">'+value.bundle_name+'</p><p> <span>'+complete+'</span> Of '+total+'</p><div class="progress" style="height:10px;width:90%;margin:auto;"><div class="progress-bar" style="height:10px;width:'+comper+'%;"></div></div><div class="hover-box1a text-center text-white"><h2>Description</h2><p class="m-0">'+desc+'</p><div class="btn btn2 btn-outline-light" id="'+value.bundle_id+'" style="border-radius: 0;">S E S S I O N</div></div></div>';*/
							
						
					});	
				}	
			//	ht +='</div></div>';

//if(window.screen.width < 425){
	//			$(".q-desk").hide();
		//		$(".cat1").html();
				$(".cat1").append(content);
	
//}
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
 //   nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$( ".owl-prev").html('<i class="fa fa-chevron-left" style="color:#727;"></i>');
 $( ".owl-next").html('<i class="fa fa-chevron-right" style="color:#727;"></i>');

/*$(".hover-box1").bind('touchstart', function(event){
		//alert('test');
       $(this).toggleClass('hover-box1a');
});*/
	  $('.hover-box1').hover(function() {
$(".hover-box1").css("top",0);
          //$(this).toggleClass('hover-box1a');
     });
				$(".btn").click(function() {
				  //alert($(this).attr('id'));
				  
				  var flag = false;
			var t ='';
			var session = [];
			var bundle = $(this).attr("id");
			var bundleid = $(this).data("sub");
			//alert(bundle);
				firebase.database().ref("Category").orderByChild("session_id").on("value", function(snapshot) {
		
				snapshot.forEach(function(childSnapshot) {
					///debugger;
					var key = childSnapshot.key;
						// value, could be object
						var childData = childSnapshot.val(); 
						 //console.log(childSnapshot.key);
						c.push(childSnapshot.key);
						if(childSnapshot.key == 'Quick Dive'){
							session.push(childData.Session);
							$.map(childData.Bundle, function(value, index) {
								if(index == bundleid){
								$.map(value.Session, function(value2, index2) {
												session.push(value2);
										//		console.log(value2);
										if(index2 == bundle){
												console.log(value2);
										window.localStorage.setItem("session",JSON.stringify(value2));
										$.redirect("player.php",{bundle: bundle},"POST",null,null,true);
										}
								});
										//alert("done");
								}
							});
						}
					});
			});

				});
		});
		
});	
	
$(".bannerButton").click(function(){
		var url = "http://localhost/DiveThru/player.php";
		window.location.href = url;

	});
	
	