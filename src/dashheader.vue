<template>
	<nav class="navbar navbar-expand-lg  fixed-top  navbar-light bg-white header">
        <button class="navbar-toggler togle-pad" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03">
          <span class="navbar-toggler-icon"></span>
        </button> 
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="dashboard.php"><img class="navbar-brand logo img-margin" src="./assets/img/logo.png"></a>

        <div class="collapse navbar-collapse header-item" id="navbarTogglerDemo03">
          <ul class="navbar-nav ml-auto ul-bg ipadnav" style="margin-right: 7%;">
            
              <li class="nav-item li-border">
                  <router-link to="/home" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item li-border">
                           <router-link to="/quickdive" class="nav-link">QUICK DIVE</router-link>
              </li>
                <li class="nav-item dropdown li-border " data-catnm="Deep Dive">
                  <a class="nav-link dropdown-toggle dropdown-toggle1" href="#" data-toggle="dropdown">DEEP DIVE</a>
                  <div class="dropdown-menu dropdown1">
                    <router-link to="/deepmain" class="dropdown-item dp">Main</router-link>
                    <div class="dropdown-divider"></div>
                    <router-link to="/individual" class="dropdown-item dp">Individual</router-link>
                  </div>
                </li>
              
                  <li class="nav-item dropdown li-border1">
                 	 <a class="nav-link py-0 dropdown-toggle dropdown-toggle1" href="#" data-toggle="dropdown" > 
	                  <div class="profile2">
						    <img src="./assets/img/profile.png" class="img-fluid profile" v-if="!user.url || user.url == ''">
                <img v-bind:src = "user.url" class="img-fluid profile" v-if="user.url != ''">	
					  </div>
					  </a>
                    <div class="dropdown-menu dropdown1">
                        <a class="dropdown-item" href="mystreak.php">MY JOURNEY</a>
                          <div class="dropdown-divider" style=""></div>
                        <!-- http://34.215.40.163/editprofile.php -->
                        
						<a class="dropdown-item" href="editprofile.php">MY PROFILE</a>
                          <div class="dropdown-divider"></div>
						<a class="dropdown-item dropdown-toggle cust" data-toggle="dropdown" href="#" >CUSTOM LIBRARY</a>
                          
						                   <div class="dropdown-menu class">
                                                <a class="dropdown-item" href="javascript:void(0);" id="updatefeed">UPDATE CUSTOM FEED</a>
											        <div class="dropdown-divider"></div>
                                                <a class="dropdown-item showdefault" href="javascript:void(0);">SHOW DEFAULT</a>
										   </div>
						
					                       <div class="dropdown-divider"></div>
                      
                        
						<a class="dropdown-item pb-2" style="color:red !important; font-size: 18px;" href="javascript:void(0)" v-on:click="logout">LOG OUT<span><i class="fa fa-power-off pl-5" aria-hidden="true" ></i></span></a>
                  
                    </div>                
               </li> 
          </ul>
          
        </div>
</nav>
</template>

<script>
import {config} from './firebase/index'
import {
  logout
} from './firebase/auth'
import {mapGetters} from 'vuex'


export default {
    name: 'login',
    data () {
      return {
        loading: false,
      }
    },
     mounted() {
      //  longAjaxRequest.then(res => {
           //this.loading = false
        //})
    },
    methods: {
        logout(){
          logout()
        }
    },
    computed: mapGetters({
         user : 'user'
     })
  }
</script>
<style>

@charset "utf-8";
/* CSS Document */

/*HEADER*/



.header {
  /*padding: 9px 100px 9px 10px !important; */
	     box-shadow: 0 0px 37px 0 rgba(0,2,0,0.1)}

.logo {float: left; 
	margin-right:50px !important;
	   height: 100px; 
	   width: 90px;
}
.navbar-default .navbar-nav > li.dropdown:hover > a, 
.navbar-default .navbar-nav > li.dropdown:hover > a:hover,
.navbar-default .navbar-nav > li.dropdown:hover > a:focus 
{
    
	background-color: rgb(231, 231, 231);
   
	color: rgb(85, 85, 85);

}

li.dropdown:hover > .dropdown-menu {

    display: block;

}
.header-item ul li a {padding-right: 1.5rem !important; 
	          padding-left: 1.5rem !important; 
	          color:#34495e !important;
	          font-size: 16px;
	        /*  font-weight: 500;*/
          }

.header-item ul li a.active {color: #80429c !important;    background-color: unset !important;}

.header-item ul li a:hover {color: #80429c !important; }
.header-item ul li a:active {color: #80429c !important; }

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.dropdown-toggle1::after {
  display:none !important;
  width: 0;
  height: 0;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}


.dropdown2 {margin-left: -40px !important;}
/*BODY*/

.list ul li {list-style: none;
             letter-spacing: 2px;}

.list ul li  {font-size: 20px;}

.list1 p {margin-right: 30px;
         font-size: 28px;
         margin-bottom: 12px;}

.card1 {border:none !important;
        border-radius:0 !important;}


.center{position: absolute;
    top: 50%;
    left: 50%; 
	text-align:center;
    transform: translateX(-50%) translateY(-50%);}
	
.card-img-overlay1 {
  position: absolute !important;}

.card-img1 {
  width: 100%;
  border-radius:0;
}

.card p {font-size: 20px;}

@media (max-width:767px){
	
.card p {font-size: 20px;}	
}



@media (min-width:931px){
	
.card p {font-size: 20px;}	

}

@media (min-width:1050px){
	
.card p {font-size: 16px;}	

}

@media (min-width:1287px){
	
.card p {font-size: 20px;}	
}

@media (min-width:1525px){
	
.card p {font-size: 24px;}	
}
	   
@media (min-width:1644px){
	
.card p {font-size: 26px;}	
}

@media (min-width:1762px){
	
.card p {font-size: 28px;}	
}
@media(min-width: 931px) and (max-width: 1360px){
  .ipadnav{
    margin-right: 10% !important;
  }
}
@media(max-width:991px){
	
	.ul-bg {background-color: #7dd3d5 !important;}
	
	.li-border {border-bottom: 1px solid #fff !important;
	            width:90% !important;
	            margin: 0 auto !important;
	            padding: 8px 0 !important;
	            color: #fff !important;}
	
	.li-border1 {border-bottom: 0px solid #fff !important;
	            width:90% !important;
	            margin: 0 auto !important;
	            padding: 8px 0 !important;
	            color: #fff !important;}
	
	.header {padding:0 !important;}
	
	.togle-pad {margin-left:20px !important;}
	
	.img-margin {margin-right:80px;}
	
	.header-item ul li a {color:#fff !important;
	                      padding-left: 0 !important;}
	
.dropdown-menu {
  padding: 0.5rem 1rem !important;
  margin: 0.125rem 0 0 !important;
  font-size: 1rem !important;
  color: #fff !important;
  text-align: left !important;
  list-style: none !important;
  background-color: #7dd3d5 !important;
  background-clip: padding-box !important;
  border:0 !important;
  border-radius:0 !important;
}
	
	
}

.fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;

}


  /** youtube like loader */
  
    #progress {
        position: fixed;
        z-index: 2147483647;
        top: 0;
        left: -6px;
        width: 0%;
        height: 2px;
        background: #874aa1;
        -moz-border-radius: 1px;
        -webkit-border-radius: 1px;
        border-radius: 1px;
        -moz-transition: width 500ms ease-out,opacity 400ms linear;
        -ms-transition: width 500ms ease-out,opacity 400ms linear;
        -o-transition: width 500ms ease-out,opacity 400ms linear;
        -webkit-transition: width 500ms ease-out,opacity 400ms linear;
        transition: width 500ms ease-out,opacity 400ms linear
    }
    #progress.done {
        opacity: 0
    }
    #progress dd,#progress dt {
        position: absolute;
        top: 0;
        height: 2px;
        -moz-box-shadow: #874aa1  1px 0 6px 1px;
        -ms-box-shadow: #874aa1  1px 0 6px 1px;
        -webkit-box-shadow: #874aa1  1px 0 6px 1px;
        box-shadow: #874aa1  1px 0 6px 1px;
        -moz-border-radius: 100%;
        -webkit-border-radius: 100%;
        border-radius: 100%
    }
    #progress dd {
        opacity: 1;
        width: 20px;
        right: 0;
        clip: rect(-6px,22px,14px,10px)
    }
    #progress dt {
        opacity: 1;
        width: 180px;
        right: -80px;
        clip: rect(-6px,90px,14px,-6px)
    }
    @-moz-keyframes pulse {
        30% {
            opacity: 1
        }
        60% {
            opacity: 0
        }
        100% {
            opacity: 1
        }
    }
    @-ms-keyframes pulse {
        30% {
            opacity: .6
        }
        60% {
            opacity: 0
        }
        100% {
            opacity: .6
        }
    }
    @-o-keyframes pulse {
        30% {
            opacity: 1
        }
        60% {
            opacity: 0
        }
        100% {
            opacity: 1
        }
    }
    @-webkit-keyframes pulse {
        30% {
            opacity: .6
        }
        60% {
            opacity: 0
        }
        100% {
            opacity: .6
        }
    }
    @keyframes pulse {
        30% {
            opacity: 1
        }
        60% {
            opacity: 0
        }
        100% {
            opacity: 1
        }
    }
    #progress.waiting dd,#progress.waiting dt {
        -moz-animation: pulse 2s ease-out 0s infinite;
        -ms-animation: pulse 2s ease-out 0s infinite;
        -o-animation: pulse 2s ease-out 0s infinite;
        -webkit-animation: pulse 2s ease-out 0s infinite;
        animation: pulse 2s ease-out 0s infinite
    }
  
  /** youtube like loader */

  /******* tag popup style ********/



.stepwizard-step p {
    margin-top: 0px;
    color:#666;
}
.stepwizard-row {
    display: table-row;
}
.stepwizard {
    display: table;
    width: 100%;
    position: relative;
}
.stepwizard-step > button[disabled] {
    /*opacity: 1 !important;
    filter: alpha(opacity=100) !important;*/
}
.stepwizard > .btn.disabled, .stepwizard > .btn[disabled], .stepwizard > fieldset[disabled] > .btn {
    opacity:1 !important;
    color:#bbb;
}
.stepwizard-row:before {
    top: 14px;
    bottom: 0;
    position: absolute;
    content:" ";
    width: 100%;
    height: 1px;
    background-color: #ccc;
    z-index: 0;
}
.stepwizard-step {
    display: table-cell;
    text-align: center;
    position: relative;
}
 .stepwizard-step > .btn-circle {
    width: 30px;
    height: 30px;
    text-align: center;
    padding: 6px 0;
    font-size: 12px;
    line-height: 1.428571429;
    border-radius: 15px;
}
stepwizard-step p {
    margin-top: 0px;
    color:#666;
}
.stepwizard-row {
    display: table-row;
}
.stepwizard {
    display: table;
    width: 100%;
    position: relative;
}
.stepwizard-step > button[disabled] {
    /*opacity: 1 !important;
    filter: alpha(opacity=100) !important;*/
}
.stepwizard > .btn.disabled, .stepwizard > .btn[disabled], .stepwizard > fieldset[disabled] .btn {
    opacity:1 !important;
    color:#bbb;
}
.stepwizard-row:before {
    top: 14px;
    bottom: 0;
    position: absolute;
    content:" ";
    width: 100%;
    height: 1px;
    background-color: #ccc;
    z-index: 0;
}
.stepwizard-step {
    display: table-cell;
    text-align: center;
    position: relative;
}
.stepwizard-step > .btn-circle {
    width: 30px;
    height: 30px;
    text-align: center;
    padding: 6px 0;
    font-size: 12px;
    line-height: 1.428571429;
    border-radius: 15px;
} 
  
  /******* tag popup style ********/
  .dropdown-submenu {
    position: relative;
  }
  
  .dropdown-submenu a::after {
    transform: rotate(-90deg);
    position: absolute;
    right: 6px;
    top: .8em;
  }
  
  .dropdown-submenu .dropdown-menu {
    top: -10px;
    left: -115%;
    margin-left: .1rem;
    margin-right: .1rem;
  }
  .class {
      position: absolute !important;
    top:38% !important;
    left: -108% !important;
}
.profile2 img {
    width:40px;
    height:40px;
    border-radius: 50%;
}
</style>