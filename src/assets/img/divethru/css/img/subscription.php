<?php
session_start();
//session_destroy();
require 'payment.php';
//require 'vendor/autoload.php';

use PayPal\Rest\ApiContext;
//use PayPal\Auth\OAuthTokenCredential;
use PayPal\Api\Payment;
use PayPal\Api\Payer;
use PayPal\Api\Details;
use PayPal\Api\Amount;
use PayPal\Api\Transaction;
use PayPal\Api\RedirectUrls;
use PayPal\Api\Item;
use PayPal\Api\ItemList;
use PayPal\Api\CreditCard;
use PayPal\Api\FundingInstrument;
use PayPal\Api\Address;
use PayPal\Api\BillingInfo;
use PayPal\Api\Cost;
use PayPal\Api\Currency;
use PayPal\Api\Invoice;
use PayPal\Api\InvoiceAddress;
use PayPal\Api\InvoiceItem;
use PayPal\Api\MerchantInfo;
use PayPal\Api\PaymentTerm;
use PayPal\Api\Phone;
use PayPal\Api\ShippingInfo;

	if(isset($_GET)){
	
			$paymentid = $_GET["paymentId"];
			try{
				$paydetail = Payment::get($paymentid,$apiContext);
				$obj = json_decode($paydetail);
				
				 //print_r($obj);
				// die;
			}catch(Exception $ex){
//				print_r($ex);
				echo "Exception";
			}
		} 
	?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>Subscription</title>
    
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="css/subscription.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="font-awesome-4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet">
    <link rel="stylesheet" href="css/dashheader.css">
    <link rel="stylesheet" href="css/footercss.css" type="text/css" >


<style type="text/css">
		.btn1 {
      display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    /* border: 1px solid #ced4da; */
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.btn2 {
  display: inline-block;
  font-weight: 400;
  color: #FFF;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 1.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
button:focus{outline: none;}

.btn3 {
  display: inline-block;
  font-weight: 400;
  color: #FFF;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://www.gstatic.com/firebasejs/4.10.0/firebase.js"></script>

<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDBWdYDtGJsilqNGOqYMNalE9s-IAGPnTw",
    authDomain: "divethru-71c56.firebaseapp.com",
    databaseURL: "https://divethru-71c56.firebaseio.com",
    projectId: "divethru-71c56",
    storageBucket: "divethru-71c56.appspot.com",
    messagingSenderId: "53159239409"
  };
  firebase.initializeApp(config);
</script>
</head>

<body style="margin-top:118px;">
<div id="contain"></div>

<script type="text/javascript">
    
	
	firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    
     $('#contain').empty().load('dashbordHeader.php');
  } else {
   
    $('#contain').load('header.php');
  }
})
</script>

<!--UNLOCK DIVE THRU-->
	
<div class="container-fluid" style="padding: 80px 0;">
       <div class="container heading text-center">
	
		   <h2>UNLOCK DIVE THRU</h2>
		   <P style="padding-bottom: 60px;">Get access to 100s of conversations by unlocking<br> the complete Dive Thru library. </P>
		   
		   <div class="row justify-content-center">
			   
			    <div class="col-sm-4 col-10 px-0">
			       <div class="box1">
					   <h4>M O N T H L Y</h4>
					   <h2>$ 14.99</h2>
					   <p style="font-size: 20px;">PAID MONTH</p>
					   <a href="javascript:void(0)" class="btn get-button" data-amount="12.99" data-cycle="2" data-plan="M">GET  AS A GIFT</a>
				   </div>
			   </div>
		   
		       <div class="col-sm-4 col-10 px-0">
			       <div class="box2">
				       <h4>Y E A R L Y</h4>
					   <h2>$ 7.99</h2>
					   <p style="font-size: 20px;">PAID YEARLY</p>
					   <a href="javascript:void(0)" class="btn get-button" data-amount="95.88" data-cycle="2" data-plan="Y">GET  AS A GIFT</a>
				   </div>
			   </div>
			   
			    <div class="col-sm-4 col-10 px-0">
			       <div class="box3">
					   <h4>L I F E  &nbsp; T I M E</h4>
					   <h2>$ 345</h2>
					   <p style="font-size: 20px;">PAID ONCE</p>
					   <a href="javascript:void(0)" class="btn get-button" data-amount="300" data-cycle="0" data-plan="L">GET  AS A GIFT</a>
				   </div>
			   </div>
		   
		   </div>
		       
	</div>		   
</div>

<!--SLIDER-->
	
<div class="container-fluid slider-bg py-5">
	
	
	<div class="carousel slide" data-interval="false" data-ride="carousel" id="aj">
	
		<div class="carousel-inner">
		
			<div class="carousel-item active">
				<div class="container">
					<div class="row justify-content-center justify-content-xl-center" >
                       <div class="col-10 col-md-10 col-lg-10 col-xl-10 slider">
						<p>it's an app that teaches you how to meditate.<br>
						it's Kind of genius.it's an app that teaches you how to meditate.<br>
						it's Kind of genius.</p><br>
                       </div>
					</div>
					<div class="row justify-content-center justify-content-xl-center">
						<div class="col-10 col-md-10 col-lg-10 col-xl-10 profile">
					         <img src="img/profile1.png" style="width: 80px; height: 80px;" />
							<p class="d-inline pl-1 pl-md-3">Harvey Specter</p>
					    </div>
					</div>


				</div>
			</div>
			
			<div class="carousel-item">
				<div class="container">
					<div class="row justify-content-center justify-content-xl-center" >
                       <div class="col-10 col-md-10 col-lg-10 col-xl-10 slider">
						<p>it's an app that teaches you how to meditate.<br>
						it's Kind of genius.it's an app that teaches you how to meditate.<br>
						it's Kind of genius.</p><br>
                       </div>
					</div>
					<div class="row justify-content-center justify-content-xl-center">
						<div class="col-10 col-md-10 col-lg-10 col-xl-10 profile">
					         <img src="img/profile1.png" style="width: 80px; height: 80px;" />
							<p class="d-inline pl-1 pl-md-3">Harvey Specter</p>
					    </div>
					</div>


				</div>
			</div>
			
			<div class="carousel-item">
				<div class="container">
					<div class="row justify-content-center justify-content-xl-center" >
                       <div class="col-10 col-md-10 col-lg-10 col-xl-10 slider">
						<p>it's an app that teaches you how to meditate.<br>
						it's Kind of genius.it's an app that teaches you how to meditate.<br>
						it's Kind of genius.</p><br>
                       </div>
					</div>
					<div class="row justify-content-center justify-content-xl-center">
						<div class="col-10 col-md-10 col-lg-10 col-xl-10 profile">
					         <img src="img/profile1.png" style="width: 80px; height: 80px;" />
							<p class="d-inline pl-1 pl-md-3">Harvey Specter</p>
					    </div>
					</div>


				</div>
			</div>
		
		</div>
		
		
		
		
		
			<a class="carousel-control-prev" href="#aj" " role="button" data-slide="prev">
				<span> <img src="img/ic_back_l.png" /></span>
			</a>

			<a class="carousel-control-next" href="#aj" " role="button" data-slide="next">
				<span><img src="img/ic_back_r.png" /></span>
			</a>
		
	</div>
	
</div>
	
<!--OPTIONS-->
	
<div class="container-fluid p-0">
	
     <div class="container py-5">
	
		 <div class="row text-center ">
	     <div class="col-md-6 col-lg-4 icon ">
		     <img src="img/ic_lock@3x.png" />
			 <h3 class="my-4">Unlock The Entire Library</h3>
			 <p>By signing up you get access to the<br>
                entire Dive Thru. The library features<br>
                100s of conversations with new<br>
                once coming every month.</p>
		 </div>
		 
		 <div class="col-md-6 col-lg-4 icon ">
		     <img src="img/ic_hand@3x.png" />
			 <h3 class="my-4">$1 Each Month Donated</h3>
			 <p>We donate $1 monthly membership each month
				to__which runs safe spaces for youth girls to
				build confidence, leam coping skills, and gain self
				awareness. Your membership helps them. 
			 </p>
		 </div>
		 
		 <div class="col-md-6 col-lg-4 icon ">
		     <img src="img/ic_web@3.png" />
			 <h3 class="my-4">Accessible Everywhere</h3>
			 <p>
				Access Dive Thru on your phone, on your
				desktop and with or are. 
			 </p>
		 </div>
		 
		 <div class="col-md-6 col-lg-4 icon ">
		     <img src="img/ic_heart@3.png" />
			 <h3 class="my-4">Boost Your Self Confidence</h3>
			 <p>
				Reconnect with your self and learn to feel at
				peace with who you are.</p>
		 </div>
		 
		 <div class="col-md-6 col-lg-4 icon ">
		     <img src="img/ic_lotus@3.png" />
			 <h3 class="my-4">Gain Self Awareness</h3>
			 <p>Get to know yourself better and move
                through life effortlessly.</p>
		 </div>
		 
		 <div class="col-md-6 col-lg-4 icon ">
		     <img src="img/ic_smile@3.png" />
			 <h3 class="my-4">Build Emotional Resilience</h3>
			 <p>Learn to better handle stressfull experiences
                and release what’s holding you back.</p>
		 </div>
	   </div>
		 <div class="row justify-content-center">
			 <div class="col-6">
	 <hr style="height: 4px; border-bottom: 0;  border-top: 0; background-color:#7dd3d5; "/>
			 </div>
	     </div>
	</div>
	
</div>
	

	<!--SLIDER1-->
	
<div class="container-fluid mt-5">
	
       <div class="container" >
		   <div class="box-slider">
	
		   <h3>QUICK DIVE</h3>
			</div>

				   <div id="aj1" class="carousel slide" data-ride="carousel" data-interval="false">
                            
								
						<div class="carousel-inner">
								 
								<div class="carousel-item active">
									
                                         
								  <div class="row text-center box justify-content-center">

										   <div class="col-md-2 col-9 px-0">
											  <div class="card1 text-white b1">
												<img class="card-img1" src="img/10.png">
												<div class="card-img-overlay1">
												   <p class="center">Having A Bad Day</p>
												</div>
											  </div>
										 </div>

										   <div class="col-md-2  col-9 px-0">
											  <div class="card1 text-white b1">
												<img class="card-img1" src="img/2.png">
												<div class="card-img-overlay1">
												   <p class="center">Overcome by Anxiety</p>
												</div>
											  </div>
										 </div>

										   <div class="col-md-2  col-9 px-0">
											  <div class="card1 text-white b1">
												<img class="card-img1" src="img/3.png">
												<div class="card-img-overlay1">
												   <p class="center">Consumed by Insecurities</p>
												</div>
											  </div>
										 </div>

										   <div class="col-md-2  col-9 px-0">
											  <div class="card1 text-white b1">
												<img class="card-img1" src="img/4.png">
												<div class="card-img-overlay1">
												   <p class="center">Busy Mind</p>
												</div>
											  </div>
										 </div>

								   </div>
                                         
								</div>

								<div class="carousel-item">
                                        
								  <div class="row text-center box justify-content-center">

										   <div class="col-md-2  col-9 px-0">
											  <div class="card1 text-white b1">
												<img class="card-img1" src="img/10.png">
												<div class="card-img-overlay1">
												   <p class="center">Having A Bed Day</p>
												</div>
											  </div>
										 </div>

										   <div class="col-md-2  col-9 px-0">
											  <div class="card1 text-white b1">
												<img class="card-img1" src="img/2.png">
												<div class="card-img-overlay1">
												   <p class="center">Overcome by Anxiety</p>
												</div>
											  </div>
										 </div>

										   <div class="col-md-2  col-9 px-0">
											  <div class="card1 text-white b1">
												<img class="card-img1" src="img/3.png">
												<div class="card-img-overlay1">
												   <p class="center">Consumed by Insecurities</p>
												</div>
											  </div>
										 </div>

										   <div class="col-md-2  col-9 px-0">
											  <div class="card1 text-white b1">
												<img class="card-img1" src="img/4.png">
												<div class="card-img-overlay1">
												   <p class="center">Busy Mind</p>
												</div>
											  </div>
										 </div>

								   </div>
                                         
								</div>

								<div class="carousel-item">
                                        
								  <div class="row text-center box justify-content-center">

										   <div class="col-md-2  col-9 px-0">
											  <div class="card1 text-white b1">
												<img class="card-img1" src="img/10.png">
												<div class="card-img-overlay1">
												   <p class="center">Having A Bed Day</p>
												</div>
											  </div>
										 </div>

										   <div class="col-md-2  col-9 px-0">
											  <div class="card1 text-white b1">
												<img class="card-img1" src="img/2.png">
												<div class="card-img-overlay1">
												   <p class="center">Overcome by Anxiety</p>
												</div>
											  </div>
										 </div>

										   <div class="col-md-2  col-9 px-0">
											  <div class="card1 text-white b1">
												<img class="card-img1" src="img/3.png">
												<div class="card-img-overlay1">
												   <p class="center">Consumed by Insecurities</p>
												</div>
											  </div>
										 </div>

										   <div class="col-md-2  col-9 px-0">
											  <div class="card1 text-white b1">
												<img class="card-img1" src="img/4.png">
												<div class="card-img-overlay1">
												   <p class="center">Busy Mind</p>
												</div>
											  </div>
										 </div>

								   </div>
                                        
								</div>
							
						</div>

					<a class="carousel-control-prev" href="#aj1" style="width: 9%; margin-left: 7%; role="button" data-slide="prev">
                         <span><img src="img/ic_back_l.png" class="d-none d-md-block"/></span>
                    </a>
                   
				    <a class="carousel-control-next" href="#aj1" style="width: 9%; margin-right: 7%; role="button" data-slide="next">
                           <span><img src="img/ic_back_r.png" class="d-none d-md-block"/></span>
   
                    </a>	
	</div>	   

	             </div>
        	
	
</div>
	
		<!--SLIDER2-->
	
<div class="container-fluid mt-5">
	
	<div class="container" >
		
		<div class="box-slider">
		 <h3>DEEP DIVE</h3>
		</div>
	<div id="aj2" class="carousel slide" data-ride="carousel" data-interval="false">
          
			

			  
					  
				   <div class="carousel-inner">
					   
					   <div class="carousel-item active">
				 
				         <div class="row box justify-content-center">

						   <div class="col-md-2 col-9 px-0">
							  <div class="card1 text-white b2">
								<img class="card-img1" src="img/10.png">
								<div class="card-img-overlay1">
								   <p class="pl-4 pt-4">Conversation 1</p>
									<h6 class="pl-4">2 of 10</h6>
									<div class="progress" style="width: 80%; margin: 0 auto; height: 6px; background-color: rgba(255,255,255,0.2)">
                                       <div class="progress-bar" role="progressbar" style="width: 15%; background: #fff;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
								</div>
							  </div>
						 </div>

						   <div class="col-md-2 col-9 px-0">
							  <div class="card1 text-white b2">
								<img class="card-img1" src="img/2.png">
								<div class="card-img-overlay1">
								   <p class="pl-4 pt-4">Conversation 2</p>
									<h6 class="pl-4">10 Sessions</h6>
								</div>
							  </div>
						 </div>

						   <div class="col-md-2 col-9 px-0">
							  <div class="card1 text-white b2">
								<img class="card-img1" src="img/3.png">
								<div class="card-img-overlay1">
								   <p class="pl-4 pt-4">Conversation 3</p>
									<h6 class="pl-4">10 Sessions</h6>
								</div>
							  </div>
						 </div>

						   <div class="col-md-2 col-9 px-0">
							  <div class="card1 text-white b2">
								<img class="card-img1" src="img/4.png">
								<div class="card-img-overlay1">
								   <p class="pl-4 pt-4">Anxiety</p>
									<h6 class="pl-4">30 Sessions</h6>
								</div>
							  </div>
						 </div>

					</div>
						   
					   </div>
					   
					   <div class="carousel-item">
				 
				         <div class="row box justify-content-center">

						   <div class="col-md-2 col-9 px-0">
							  <div class="card1 text-white b2">
								<img class="card-img1" src="img/10.png">
								<div class="card-img-overlay1">
								   <p class="pl-4 pt-4">Conversation 1</p>
									<h6 class="pl-4">2 of 10</h6>
								</div>
							  </div>
						 </div>

						   <div class="col-md-2 col-9 px-0">
							  <div class="card1 text-white b2">
								<img class="card-img1" src="img/2.png">
								<div class="card-img-overlay1">
								   <p class="pl-4 pt-4">Conversation 2</p>
									<h6 class="pl-4">10 Sessions</h6>
								</div>
							  </div>
						 </div>

						   <div class="col-md-2 col-9 px-0">
							  <div class="card1 text-white b2">
								<img class="card-img1" src="img/3.png">
								<div class="card-img-overlay1">
								   <p class="pl-4 pt-4">Conversation 3</p>
									<h6 class="pl-4">10 Sessions</h6>
								</div>
							  </div>
						 </div>

						   <div class="col-md-2 col-9 px-0">
							  <div class="card1 text-white b2">
								<img class="card-img1" src="img/4.png">
								<div class="card-img-overlay1">
								   <p class="pl-4 pt-4">Anxiety</p>
									<h6 class="pl-4">30 Sessions</h6>
								</div>
							  </div>
						 </div>

					</div>
						   
					   </div>
					   
					   <div class="carousel-item">
				 
				         <div class="row box justify-content-center">

						   <div class="col-md-2 col-9 px-0">
							  <div class="card1 text-white b2">
								<img class="card-img1" src="img/10.png">
								<div class="card-img-overlay1">
								   <p class="pl-4 pt-4">Conversation 1</p>
									<h6 class="pl-4">2 of 10</h6>
								</div>
							  </div>
						 </div>

						   <div class="col-md-2 col-9 px-0">
							  <div class="card1 text-white b2">
								<img class="card-img1" src="img/2.png">
								<div class="card-img-overlay1">
								   <p class="pl-4 pt-4">Conversation 2</p>
									<h6 class="pl-4">10 Sessions</h6>
								</div>
							  </div>
						 </div>

						   <div class="col-md-2 col-9 px-0">
							  <div class="card1 text-white b2">
								<img class="card-img1" src="img/3.png">
								<div class="card-img-overlay1">
								   <p class="pl-4 pt-4">Conversation 3</p>
									<h6 class="pl-4">10 Sessions</h6>
								</div>
							  </div>
						 </div>

						   <div class="col-md-2 col-9 px-0">
							  <div class="card1 text-white b2">
								<img class="card-img1" src="img/4.png">
								<div class="card-img-overlay1">
								   <p class="pl-4 pt-4">Anxiety</p>
									<h6 class="pl-4">30 Sessions</h6>
								</div>
							  </div>
						 </div>

					</div>
						   
					   </div>
					   
				   </div>
		           <a class="carousel-control-prev" href="#aj2" style="width: 9%; margin-left: 7%; role="button" data-slide="prev">
                         <span><img src="img/ic_back_l.png" class="d-none d-md-block" /></span>
                    </a>
                   
				    <a class="carousel-control-next" href="#aj2" style="width: 9%; margin-right: 7%; role="button" data-slide="next">
                           <span><img src="img/ic_back_r.png" class="d-none d-md-block" /></span>
   
                    </a>
		
		   </div>
	   
	   </div>
</div>	
	
		<!--SLIDER3-->
	
<div class="container-fluid mt-5 ">
	
	<div class="container" >
		<div class="box-slider">
		<h3>OPEN DIVE</h3>
	    </div>
	<div id="aj3" class="carousel slide" data-ride="carousel" data-interval="false">
			   
		       

				   

				           <div class="carousel-inner">  
				               
							   <div class="carousel-item active">
				                 <div class="row text-center box justify-content-center">

					   <div class="col-md-2 col-9 px-0">
						  <div class="card1 text-white b3">
							<img class="card-img1" src="img/10.png">
							<div class="card-img-overlay1">
							   <p class="pt-5">Conversation 1</p>
							</div>
						  </div>
					 </div>

					   <div class="col-md-2 col-9 px-0">
						  <div class="card1 text-white b3">
							<img class="card-img1" src="img/2.png">
							<div class="card-img-overlay1">
							   <p class="pt-5">Conversation 1</p>
							</div>
						  </div>
					 </div>

					   <div class="col-md-2 col-9 px-0">
						  <div class="card1 text-white b3">
							<img class="card-img1" src="img/3.png">
							<div class="card-img-overlay1">
							   <p class="pt-5">Conversation 1</p>
							</div>
						  </div>
					 </div>

					   <div class="col-md-2 col-9 px-0">
						  <div class="card1 text-white b3">
							<img class="card-img1" src="img/4.png">
							<div class="card-img-overlay1">
							   <p class="pt-5">Conversation 1</p>
							</div>
						  </div>
					 </div>

				   </div>
							   </div>
							   
							   <div class="carousel-item">
				                 <div class="row text-center box justify-content-center">

					   <div class="col-md-2 col-9 px-0">
						  <div class="card1 text-white b3">
							<img class="card-img1" src="img/10.png">
							<div class="card-img-overlay1">
							   <p class="pt-5">Conversation 1</p>
							</div>
						  </div>
					 </div>

					   <div class="col-md-2 col-9 px-0">
						  <div class="card1 text-white b3">
							<img class="card-img1" src="img/2.png">
							<div class="card-img-overlay1">
							   <p class="pt-5">Conversation 1</p>
							</div>
						  </div>
					 </div>

					   <div class="col-md-2 col-9 px-0">
						  <div class="card1 text-white b3">
							<img class="card-img1" src="img/3.png">
							<div class="card-img-overlay1">
							   <p class="pt-5">Conversation 1</p>
							</div>
						  </div>
					 </div>

					   <div class="col-md-2 col-9 px-0">
						  <div class="card1 text-white b3">
							<img class="card-img1" src="img/4.png">
							<div class="card-img-overlay1">
							   <p class="pt-5">Conversation 1</p>
							</div>
						  </div>
					 </div>

				   </div>
							   </div>
							   
							    <div class="carousel-item">
				                 <div class="row text-center box justify-content-center">

					   <div class="col-md-2 col-9 px-0">
						  <div class="card1 text-white b3">
							<img class="card-img1" src="img/10.png">
							<div class="card-img-overlay1">
							   <p class="pt-5">Conversation 1</p>
							</div>
						  </div>
					 </div>

					   <div class="col-md-2 col-9 px-0">
						  <div class="card1 text-white b3">
							<img class="card-img1" src="img/2.png">
							<div class="card-img-overlay1">
							   <p class="pt-5">Conversation 1</p>
							</div>
						  </div>
					 </div>

					   <div class="col-md-2 col-9 px-0">
						  <div class="card1 text-white b3">
							<img class="card-img1" src="img/3.png">
							<div class="card-img-overlay1">
							   <p class="pt-5">Conversation 1</p>
							</div>
						  </div>
					 </div>

					   <div class="col-md-2 col-9 px-0">
						  <div class="card1 text-white b3">
							<img class="card-img1" src="img/4.png">
							<div class="card-img-overlay1">
							   <p class="pt-5">Conversation 1</p>
							</div>
						  </div>
					 </div>

				   </div>
							   </div>
							   
				           </div>
						<a class="carousel-control-prev" href="#aj3" style="width: 9%; margin-left: 7%; role="button" data-slide="prev">
                         <span><img src="img/ic_back_l.png" class="d-none d-md-block" /></span>
                    </a>
                   
				    <a class="carousel-control-next" href="#aj3" style="width: 9%; margin-right: 7%; role="button" data-slide="next">
                           <span><img src="img/ic_back_r.png" class="d-none d-md-block" /></span>
   
                    </a>	   
							   

			   </div>
	</div>

</div>
	
	
<!--UNLOCK DIVE THRU-->
	
<div class="container-fluid" style="padding: 80px 0;">
       <div class="container heading text-center">
	
		   <h2>UNLOCK DIVE THRU</h2>
		   <P style="padding-bottom: 60px;">Get access to 100s of conversations by unlocking<br> the complete Dive Thru library. </P>
		   
		   <div class="row justify-content-center">
			   
			    <div class="col-sm-4 col-10 px-0">
			       <div class="box1">
					   <h4>M O N T H L Y</h4>
					   <h2>$ 14.99</h2>
					   <p style="font-size: 20px;">PAID MONTH</p>
					   <a href="" class="btn get-button">GET  AS A GIFT</a>
				   </div>
			   </div>
		   
		       <div class="col-sm-4 col-10 px-0">
			       <div class="box2">
				       <h4>Y E A R L Y</h4>
					   <h2>$ 7.99</h2>
					   <p style="font-size: 20px;">PAID YEARLY</p>
					   <a href="" class="btn get-button">GET  AS A GIFT</a>
				   </div>
			   </div>
			   
			    <div class="col-sm-4 col-10 px-0">
			       <div class="box3">
					   <h4>L I F E &nbsp; T I M E</h4>
					   <h2>$ 345</h2>
					   <p style="font-size: 20px;">PAID ONCE</p>
					   <a href="" class="btn get-button">GET  AS A GIFT</a>
				   </div>
			   </div>
		   
		   </div>
		       
	</div>		   
</div>
	
<!--MOBILE-->
	
 <section class="bg-white text-center pt-5 pb-5">
                      <div class="container">
                        <div class="row mt-5">
                            <div class="col-lg-5 mb-5 text-lg-right text-center">
                                 <img src="img/mobile.png" class="img-responsive" height="400" width="200">
                            </div>
                            <div class="col-1"></div>
                            <div class="col-lg-6">
                                <h3 class="mb-2 txtpos" style="color: #34495e; ">
                                    It's Time To<br> DiveThru 
                               </h3>
                               <br>
                                <h6 class="lead mb-0 txtpos" style="color: #727272; font-weight: 400;  font-size: 20px;"> 
                                   Download the DiveThru app<br>or sign up online to find<br>the peace within.
                              </h6>
                              <br>
                               <a href="http://34.215.40.163/subscription.php"  class="btn3 btnpos" style="border-color: #7dd3d5; text-decoration: none; color: #FFF;   background-color: #7dd3d5;">S U B S C R I B E &nbsp; N O W</a>
                               <br><br>
                                <a href="http://34.215.40.163/registration.php" class="btn3 btnpos" style="border-color: #7dd3d5; text-decoration: none; color: #FFF; background-color: #7dd3d5;"> &nbsp;J O I N &nbsp; F O R &nbsp; F R E E &nbsp;  </a>
                                <br><br>
                                <div>
                                <img src="img/app atore.png" class="img-responsive plystr " height="40" width="140"> 
                                 <img src="img/google play.png"  class="img-responsive plystr1 "  height="40" width="140"  ></div>
                                 <br><br>
                            </div>
                           
                        </div>
                      </div>
                    </section>
	
<?php if ($_GET["paymentId"]) {
		echo $_SESSION["userid"];
?>
<input type="hidden" class="tr_id" value="<?php echo $obj->id; ?>">
<input type="hidden" class="payment_type" value="<?php echo $obj->payer->payment_method; ?>">
<input type="hidden" class="payment_status" value="<?php echo $obj->payer->status; ?>">
<input type="hidden" class="payment_time" value="<?php echo $obj->create_time; ?>">
<input type="hidden" class="state" value="<?php echo $obj->state; ?>">
<input type="hidden" class="payer_id" value="<?php $obj->payer->payer_info->payer_id; ?>">
<input type="hidden" class="email" value="<?php echo $obj->payer->payer_info->email; ?>">
<input type="hidden" class="total" value="<?php echo $obj->transactions[0]->amount->total; ?>">
<input type="hidden" class="currency" value="<?php echo $obj->transactions[0]->amount->currency; ?>">
<input type="hidden" class="full_name" value="<?php echo $obj->payer->payer_info->first_name. ' '. $obj->payer->payer_info->last_name; ?>">
<input type="hidden" class="city" value="<?php echo $obj->payer->payer_info->shipping_address->city; ?>">
<?php
}
?>
<!--FOOTER-->
<?php include 'footer.php';?>
<script>
	function sign_out(){
		firebase.auth().signOut().then(function() {
  // Sign-out successful.
  		window.location = "index.php";
}, function(error) {
  // An error happened.
   console.log("Logout Failed!", error);
});
	}
</script>
<!--
<script
  src="https://code.jquery.com/jquery-3.3.1.slim.js"
  integrity="sha256-fNXJFIlca05BIO2Y5zh1xrShK3ME+/lYZ0j+ChxX2DA="
  crossorigin="anonymous"></script>---->
 <script type="text/javascript" src="js/jquery.redirect.js"></script>
<script src="js/bootstrap.bundle.min.js" type="text/javascript"></script>
<script src="js/dashboardheader.js" type="text/javascript"></script>
<script>
	$("document").ready(function(){
var user = JSON.parse(window.localStorage.getItem('user'));	
console.log(user.user_id);
//		$.redirect("Process.php",{bundle: bundle},"POST",null,null,true);
	$(".get-button").click(function(){
			var plan = $(this).data('plan');
			var cycle = $(this).data('cycle');
			var price = $(this).data('amount');
			$.post("http://34.215.40.163/ipn/index.php", {"userid": user.user_id}, function(result){
        console.log(result);
        $.redirect("Process.php",{select_cycles: cycle ,product_name : "DiveThru Library","select_plan":plan,"price":price,"userid":user.user_id},"POST",null,null,true);
    });
			//alert(plan+"="+cycle+"="+price);
		
	 });


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
			var data = {transection_id:txid,payer_id:pyid,name:full_name,email:eml,payment_type:type,payment_status:status,payment_time:time,state:state,city:city};
			console.log(data);

			console.log(txid);
			if(txid != ""){
				
						var db = firebase.database();
			db.ref("Users/"+user.user_id+"/payment").child(txid).set(data); // Update lalted time on pause
			}


	});
</script>>	
</body>
</html>
