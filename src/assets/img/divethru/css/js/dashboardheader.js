/*var header = '';
firebase.database().ref("Category").orderByChild("category_id").on("value", function(snapshot) {
	snapshot.forEach(function(childSnapshot) {
		var key = childSnapshot.key;
		var links = (key.toLowerCase()).replace(" ", ""); 
			console.log("header"+key);
		if(childSnapshot.hasChild("Bundle")){
			if(childSnapshot.val() == ''){
				
			alert(5);
			}
			header += '<li class="nav-item "><a class="nav-link" href="'+links+'.php">'+key+'</a></li>';
		}
		if(childSnapshot.hasChild("SubCategory")){
			header += '<li class="nav-item dropdown "><a class="nav-link dropdown-toggle dropdown-toggle1" href="#" data-toggle="dropdown">'+key+'</a><div class="dropdown-menu dropdown1"><a class="dropdown-item" href="DeepMain3.php">MAIN</a><div class="dropdown-divider"></div><a class="dropdown-item" href="individual2.php">INDIVIDUAL</a></div></li>';
		}
		
	});
	/*header += '<li class="nav-item dropdown"><a class="nav-link py-0 dropdown-toggle dropdown-toggle1" href="#" data-toggle="dropdown" ><img src="img/profile.png"  class="img-fluid" style="max-width: 40px; max-height: 40px; padding-top: 0 !important;padding-bottom: 0;"/></a><div class="dropdown-menu dropdown1"><a class="dropdown-item" href="#">MY STATS</a><divclass="dropdown-divider"style=""></div><a class="dropdown-item" href="#">MY PROFILE</a><divclass="dropdown-divider"></div><a class="dropdown-item" href="#">DIV WITH FRIENDS</a><div class="dropdown-divider"></div><a class="dropdown-item pb-2" style="color:red !important; font-size: 18px;" href="#" onclick="sign_out();">LOG OUT<span><i class="fa fa-power-off pl-5" aria-hidden="true" ></i></span></a></div></li>';
console.log("5"+header);
$(".header-item > .navbar-nav").html(header);
});*/
