<template>
	<div background="./assets/img/banner.png" style="background-repeat: no-repeat; padding-top: 118px;">
		<div class="container">
			<div class="row justify-content-md-center">
					<div class=" col-md-3 col-sm-2 col-xs-12"></div>
					<div class="col-md-6 col-sm-8 col-xs-12 ">
						<br><br>
                        
						<div class="card" style=" box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);" >
						  <div class="card-body">
						    <h2 class="card-title" style="text-align: center; color: #34495e; margin: 0 0 0 0;">Registration</h2>
						    	
					 <form>
						    			<p id="head"  style="text-align: center;" class="p1"></p>
						    			
						    		  <div class="form-group-log">
                                        <input type="text" class="form-control-log" name="first_name" id="first_name"  placeholder="First name" style="text-transform: capitalize;" onchange="inputfAlphabet();">
									    <p id="p1" class="p1"></p>
									  </div>

									  <div class="form-group-log">
                                        <input type="text" class="form-control-log" name="last_name" id="last_name" aria-describedby="emailHelp" style="text-transform: capitalize;" placeholder="Last name" onchange="inputlAlphabet();">
									    <p id="p2" class="p1"></p>
									  </div>
									  <div class="form-group-log">
                                        <input type="text" class="form-control-log"  id="email" name="email" aria-describedby="emailHelp" style="text-transform: lowercase;" placeholder="Email address" onchange="emailValidation()">
									    <p id="p3" class="p1"></p>
									  </div>
                                      <div class="form-group-log">
                                        <div class="pwstrength_viewport_progress"></div>
                                        <input type="password" class="form-control-log" name="password" id="password" onkeyup="CheckPasswordStrength();" placeholder="Password" >
                                      <p id="password_strength" class="p1"></p>
                                        
                                      </div>
                                      <!-- <div class="form-group-log">
                                        <input type="password" class="form-control-log" name="confirm_password" id="confirmpassword" placeholder="Confirm password" onchange="PasswordConfirm();">
									   <p id="boldStuff" class="p1"></p>
									  </div> -->
									 
									  <!-- <div class="form-group-log">
                                        <input type="text" name="dob" class="form-control-log bdate" id="birthdate"   placeholder="Date of birth" onchange="_calculateAge();">
										<p id="bdt" class="p1"></p>
									  </div>
									   -->
                                     <div class="form-group-log">
                                        <input type="text" class="form-control-log" name="access_code" id="access_code"  placeholder="Access Code (Optional)" >
                                        <p id="p5" class="p1"></p>
 
                                      </div>

									<!-- <div class="form-group-log">
							            <label >Gender : </label>
							             <div class="gender">
										 <p>
							                <input type="radio" id="test1" name="gender" value="Male" class="gen">
							                <label for="test1" class="gen">Male</label>
							              </p>
							              <p>
							                <input type="radio" id="test2" name="gender" value="Female" class="gen">
							                <label for="test2" class="gen">Female</label>
							              </p>
							              <p>
							                <input type="radio" id="test3" name="gender" value="Other" class="gen">
							                <label for="test3" class="gen">Other</label>
							              </p>
                                      </div></div>
                                     
                                          <div class="gmsg"><p id="gender" class="p1"></p></div>
							          -->
							           <div class="form-group-log">
									  <button  type="button"  id="submit" onclick="btnclick();" name="login"  class="btn1 " style="background-color: #7dd3d5; letter-spacing: 4; border: none; border-radius: unset;  line-height: 27px; cursor: pointer; outline: none; color: white;"><i class="fa fa-spinner fa-spinloader" v-if="loading"></i>GET STARTED</button>
                                         <br><br>
                                    <center><img src="http://34.215.40.163/img/or.png" style="width: 100%" class="img-responsive"></center>
       								</div>
									
									<!-- <a href="fblogin.php">-->
									<button type="button" class=" btn1  fb-font" style="background-color: #3b5998; border: none;  border-radius: 3px; letter-spacing: 3; color: #fff; outline: none; line-height: 27px; cursor: pointer;" onclick="fbsave_user();"><i class="fab fa-facebook fa-lg" style="color:white"></i>&nbsp;&nbsp;&nbsp;CONTINUE WITH FACEBOOK</button><!---</a>-->
                  <br><br>
                   <button type="button" class=" form-control btn1 fb-font" onclick="googlesave_user();" style="background-color:#dd4b39; cursor: pointer; border: none; color:#fff;  border-radius: 3px; letter-spacing: 3;line-height: 27px;"><i class="fab fa-google fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;CONTINUE WITH GOOGLE</button>
                   <br>
        							
								</form>
                                <p style="text-align: center;">By signing up, you agree to Dive Thru Inc's<br> <a href="termsandconditions.php" style="color:#5191d6;">  Terms & Conditions</a> And <a href="privacypolicy.php" style="color:#5191d6;">Privacy Policy</a></p>
						  </div>

						</div>
                        
					</div>
					<div class=" col-md-3 col-sm-2 col-xs-12"></div>
			</div>
		</div>
		<br><br>
	</div>
</template>

<style>
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
    border-radius: 1.25rem;
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
::-webkit-input-placeholder {
   text-transform: initial;
}

:-moz-placeholder { 
   text-transform: initial;
}

::-moz-placeholder {  
   text-transform: initial;
}

:-ms-input-placeholder { 
   text-transform: initial;
}
/*--------------------------------------------*/
@media only screen and (max-width: auto) {

   body { 
      font-size: 2em; 
   }

}

@media only screen and (max-width: 734px) and (min-width: 320px) {


      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
 font-size:15px;
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
 font-size:15px;
}

::-ms-input-placeholder { /* Microsoft Edge */
 font-size:15px;
}

    .card-body{
      padding: 2.25rem;
    }
    .login-card{
      padding: 1.25rem;
    }
    .card-title{
      font-size: 1.4rem;
    }
    .gmsg{
        margin-top: -6%;
      }

    .fb-font{
        font-size: 10px;

    }
    #submit{
        font-size: 14px;
    }
    .gender{
      display:inline-block;
      margin-bottom:%5;
    
    }
        [type="radio"]:checked + label,
	[type="radio"]:not(:checked) + label
	{
	    position: relative;
	    padding-left: 28px;
	    cursor: pointer;
	    line-height: 20px;
	    display: inline-block;
	    color: #666;
	}
}

@media only screen and (max-width: 1024px) and (min-width: 720px){
     .card-body{
      padding: 2.25rem;
    }
     .card-title{
      font-size: 1.75rem;
    }
    .fb-font{
        font-size: 10px;

    }
    .gen{
      font-size: 12px;
    }
    .gender{
      display:flex;
      margin-bottom:0;
      margin-left: 0;
    }

      .gmsg{
        margin-top: -10%;
        position: absolute;

      }

    #submit{
        font-size: 14px;
    }
    [type="radio"]:checked + label,
	[type="radio"]:not(:checked) + label
	{
	    position: relative;
	    padding-left: 25px;
	    cursor: pointer;
	    line-height: 20px;
	    display: inline-block;
	    color: #666;
	}
}


@media only screen and (max-width: 1200px) and (min-width: 1010px){
        .gmsg{
      padding-top: 10%;
    }
    .fb-font{
        font-size: 10px;

    }
    #submit{
        font-size: 14px;
    }
    .gen{
      font-size: 12px;
    }
    .gender{
      	display:flex;
    	margin-bottom: -15%;
  		margin-left: 0;
    }
    [type="radio"]:checked + label,
	[type="radio"]:not(:checked) + label
	{
	    position: relative;
	    padding-left: 28px;
	    cursor: pointer;
	    line-height: 20px;
	    display: inline-block;
	    color: #666;
	}
}


@media only screen and (max-width: 2560px) and (min-width: 1201px){
    

    .fb-font{
        font-size: 14px;
    }
     #submit{
        font-size: 17px;
    }

    .gender{
      display:flex;
      margin-bottom: -9%;
      margin-left: 0;
    }
    [type="radio"]:checked + label,
    [type="radio"]:not(:checked) + label
    {
        position: relative;
        padding-left: 28px;
        cursor: pointer;
        line-height: 20px;
        display: inline-block;
        color: #666;
    }

}

.form-control-log {
    display: block;
    width: 100%;
    padding: 12px 13px 12px;
    font-size: 17px;
    line-height: 1.5;
    color: #495057;
    background-color: #f1f1f1;
    background-clip: padding-box;
    border: 0px solid #ced4da;
    
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.form-group-log{
        margin-bottom: 1.5rem;
}

/* Radio Buttion */
/* Radio button*/
[type="radio"]:checked,
[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}

[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 2px;
    top: 4px;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
    content: '';
    width: 8px;
    height: 8px;
    background: #81439d;
    position: absolute;
    top: 9px;
    left: 7px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
}
[type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}
fieldset {
  overflow: hidden
}

.some-class {
  float: left;
  clear: none;
}

label {
  float: left;
  clear: none;
  display: block;
  padding: 2px 1em 0 0;
}

input[type=radio],
input.radio {
  float: left;
  clear: none;
  margin: 2px 0 0 2px;
}

.font-foot {
    display: inline-block;
    color: #fff;
    text-decoration: none !important;    
}

.btn-default {
              color:#7dd3d5 !important;
              letter-spacing: 1px;
              line-height: 25px ;
              border: 2px solid #7dd3d5 ;
              border-radius: 40px ;
              background: transparent;
              transition: all 0.3s ease 0s ;
            }
.btn-default:hover {
              color: #FFF !important;
              background-color:#7dd3d5 ;
              border: 2px solid #7dd3d5;
}

.responsive-width {
    font-size: 1vw;
}

.password-box { display: inline-block; }

.password-progress {
  height: 12px;
  margin-top: 10px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
  box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
}

.progress-bar {
  float: left;
  height: 100%;
  background-color: #337ab7;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
  box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
  -webkit-transition: width .6s ease;
  -o-transition: width .6s ease;
  transition: width .6s ease;
}

.bg-red {
  background: #E74C3C;
  border: 1px solid #E74C3C;
}

.bg-orange {
  background: #F39C12;
  border: 1px solid #F39C12;
}

.bg-green {
  background: #1ABB9C;
  border: 1px solid #1ABB9C;
}


</style>

<script>
	export default {
	  name: 'loader',
	  data () {
	    return {
	      loading: false
	    }
	  },
	   mounted() {
	    //  longAjaxRequest.then(res => {
	         //this.loading = false
	      //})
	   }
	}
</script>