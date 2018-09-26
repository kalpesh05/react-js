<template>
	<div style="margin-top: 100px;">

	    <div class="mainBanner">
		      <center>
		        <div class="bannerCenter">
		           <p class="bannerDay">Day <span class="day"></span> of <span class="totalday">10</span></p>
		           <p class="bannerHeader" style="font-size:65px;">Intro Program</p>
		           <button class="bannerButton" id="close_account"  style="outline:none; cursor: pointer; font-weight: 400;" type="button"><i class="fa fa-play" aria-hidden="true"></i> &nbsp; B E G I N</button>
		        </div>
		      </center>
 		</div>
  
  		<br>
  		<br>
	    <div class="card Margins startCard"  width="100%">
	        <center>
	            <div class="card-body" width="100%">
	              <h4 class="cardtitles" style="letter-spacing: 3px;">WORDS TO SIT WITH</h4>
	              <hr />
	              <p class="cardtexts"> {{ quote }} </p>
	            </div>
	        </center>
	    </div>



		<div class="bottomCard" width="100%"> 
		    <center>
		          <p style="color: #34495e; ">Unlock the Dive thru Library</p>
		      <a href="http://34.215.40.163/subscription.php" class="bottomCardButton" style="color: #FFF; text-decoration: none;">SUBSCRIBE NOW</a>
		    </center>
		</div>
	</div>
</template>

 <style type="text/css">
   .btn1 {
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
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.modal-footer1 {
    padding: 1rem;
    border-top: 1px solid #e9ecef;
}
.center{position: absolute;
    top: 90%;
    left: 92%; 
  text-align:center;
    transform: translateX(-50%) translateY(-50%);}

/* Page Loader ================================= */
.page-loader-wrapper ,  .page-loader-wrapper2{
  z-index: 99999999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #eee;
  overflow: hidden;
  text-align: center; }
  .page-loader-wrapper p , .page-loader-wrapper2 p{
    font-size: 13px;
    margin-top: 10px;
    font-weight: bold;
    color: #444; }
  .page-loader-wrapper .loader ,  .page-loader-wrapper2 .loader{
    position: relative;
    top: calc(50% - 30px); }

   body{
	font-family: Roboto;
  }
  .mainBanner{ 
    background: url(./assets/img/1.png) no-repeat center center;
	background-size: cover ;
	align-items: center;
	height: auto;
	padding:220px 0;
  }
  .bannerCenter{
	font-size: 28px;
	color: white;
	font-weight: 100;
  }  
  .Center{
	position: absolute;
    top: 50%;
    left: 50%; 
	text-align: center;
cursor:pointer;
    transform: translateX(-50%) translateY(-50%);
  }
.Centerblock{
	position: absolute !important;
    top: 40% !important;
    left: 50% !important; 
	text-align: center!important;
    transform: translateX(-50%) translateY(-50%)!important;
  }
  .bannerHeader{
	font-size: 85px; 
    margin: 4% 0% 5% 0%;	
  }
  .bannerDay{
	font-size: 48px;    
  }
  .bannerButton{
	background-color: white;
	color: #34495e;
	font-weight: 600;
	font-size: 24px;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
	padding: 6px 34px 6px 34px;
	border-width: 0px;
  }
  .Margins{
	margin: 28px 11% 28px 11%;
	-webkit-margin: 28px 11% 28px 11%;
	// margin: 28px 15% 28px 15%;
  }
  .startCard{
	background: url(./assets/img/button_bg.png) no-repeat center center;
	background-size: cover ;
	align-items: center;
	padding: 1% 0% 0% 0%;
	margin-bottom: 60px;
  }
  .cardtitles{
	  color: #34495e;
	  margin-bottom: 3%;
	  font-size: 38px;
  }
  .cardtexts{
	  color: #9c9c9c;
	  align-text: center;
	  font-size: 38px;
	  margin-bottom: 0rem;
	  padding: 0px 60px 0px 60px
  }
  .MainMenu{
	color: #34495e;
	font-weight: 600;
    margin-right: 8px;
	letter-spacing: 3px;
	font-size: 26px;
    margin: 1% 0% -5% 0%;	
  }
  .learnMorestyle{
	color: #864aa1;
	letter-spacing: 3px;
	font-size: 14px;
  }
  .exploreMore{
	cursor:pointer;
	background-color:#7DD3D5 !important;
	border-color:#7DD3D5 !important;
	outline:none;
    	color:#864aa1;
	width: 26%;
	text-decoration:none;
	item-align:center;
	text-align: center;
    /*text-decoration:underline;*/
  }
   .exploreMore1{
	cursor:pointer;
	background-color:#7DD3D5 !important;
	border-color:#7DD3D5 !important;
	outline:none;
    	color:#864aa1;
	width: 30%;
	text-decoration:none;
	item-align:center;
	text-align: center;
    /*text-decoration:underline;*/
  }
    .exploreMore2{
	cursor:pointer;
	background-color:#7DD3D5 !important;
	border-color:#7DD3D5 !important;
	outline:none;
    	color:#864aa1;
	width: 30%;
	text-decoration:none;
	item-align:center;
	text-align: center;
    /*text-decoration:underline;*/
  }
  .exploreMore3{
	cursor:pointer;
	background-color:#7DD3D5 !important;
	border-color:#7DD3D5 !important;
	outline:none;
    	color:#864aa1;
	width: 30%;
	text-decoration:none;
	item-align:center;
	text-align: center;
    /*text-decoration:underline;*/
  }
  .hiddens{
	display: none;
  }
  .hiddens1{
	display: none;
  }
  .hiddens2{
	display: none;
  }
   .hiddens3{
	display: none;
  }
  .boxStyle{
	color: #fff;
	font-size: 22px;
	height: 250px ;
}
  .bottomCard{
	background: #000 url(./assets/img/button_bg.png) no-repeat center center;
	background-size: cover ;
	align-items: center;
	margin: 4% 0% 0% 0%;
	font-size: 48px;
	padding: 8% 0% 8% 0%;
  }
  .bottomCardButton{
	font-size: 22px;
	color: #FFF;
	letter-spacing: 3px;
	padding: 1% 3% 1% 3%;
	background-color: #7dd3d5;
	border-width: 0px;
	border-radius: 5px;

  }
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1.5px solid #d5d4d473;
    margin: 1em;
    padding: 0;
    }
	
/*.loader {
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	z-index: 9999;
	background: url('http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif?e44397') 50% 50% no-repeat rgb(249,249,249);
}*/
	
	@media screen and (max-width: 425px){ 
	  .bannerCenter{
	   font-size: 18px;
	   font-weight: 100;
      } 
      .bannerDay{
	   font-size: 20px;
	   margin-bottom: 0rem;
      }
      
      .bannerHeader{
	    font-size: 26px;
      }	  
      .bannerButton{
	    background-color: white;
	    color: #34495e;
	    font-weight: 600;
	    font-size: 14px;
        border-top-right-radius: 25px;
        border-top-left-radius: 25px;
        border-bottom-right-radius: 25px;
        border-bottom-left-radius: 25px;
	    padding: 4.5px 30px 4.5px 30px;
	    border-width: 1px;
      } 
      .cardtitles{
	    color: #34495e;
	    font-size: 16px;
      }
      .cardtexts{
	    color: #9c9c9c;
	    align-text: center;
	    font-size: 16px;
	    padding: 0px 5px 0px 5px
      }	  	  
      .bottomCard{
	    font-size: 20px;
    	padding: 8% 0% 8% 0%;
      }
      .bottomCardButton{
    	font-size: 18px;
      }
      .MainMenu{
	    font-size: 18px;
        position: absolute;
        margin: 10% 0% -10% 0%;

      }
      .learnMorestyle{
	    letter-spacing: 3px;
	    font-size: 8px;
      }
    }
	@media screen and (min-width: 425px) and (max-width: 760px){
	  .bannerCenter{
	   font-size: 18px;
	   font-weight: 100;
      } 
      .bannerDay{
	   font-size: 24px;
      }
      .bannerHeader{
	    font-size: 32px 
      }	  
      .bannerButton{
	    background-color: white;
	    color: #34495e;
	    font-weight: 600;
	    font-size: 22px;
        border-top-right-radius: 25px;
        border-top-left-radius: 25px;
        border-bottom-right-radius: 25px;
        border-bottom-left-radius: 25px;
	    padding: 6px 34px 6px 34px;
	    border-width: 1px;
      }  
      .cardtitles{
	    color: #34495e;
	    font-size: 18px;
      }
      .cardtexts{
	    color: #9c9c9c;
	    align-text: center;
	    font-size: 18px;
	    padding: 0px 20px 0px 20px;
      }
      .bottomCard{
	    font-size: 26px;
    	padding: 8% 0% 8% 0%;
      }
      .bottomCardButton{
    	font-size: 19px;
      }
    }

	@media screen and (min-width: 760px) and (max-width: 842px){
	  .bannerCenter{
	   font-size: 18px;
	   font-weight: 100;
      } 
	.exploreMore{
	width:37% !important;
	}
	.exploreMore1{
	width:37% !important;
	}
	.exploreMore2{
	width:37% !important;
	}
	.exploreMore3{
	width:37% !important;
	}

      .bannerDay{
	   font-size: 38px;
      }
      .bannerHeader{
	    font-size: 62px;
      }
      .cardtitles{
	    color: #34495e;
	    font-size: 30px;
      }
      .cardtexts{
	    color: #9c9c9c;
	    align-text: center;
	    font-size: 30px;
	    padding: 0px 40px 0px 40px
      }	  
      .bottomCard{
	    font-size: 30px;
      }
      .bottomCardButton{
    	font-size: 18px;
      }

    }
	@media screen and (min-width: 842px) and (max-width: 1042px){ 
      .bannerCenter{
	   font-size: 20px;
	   font-weight: 100;
      } 
      .bannerDay{
	   font-size: 40px;
      }
      .bannerHeader{
	    font-size: 68px;  
      }
      .cardtitles{
	    color: #34495e;
	    font-size: 34px;
      }
      .cardtexts{
	    color: #9c9c9c;
	    align-text: center;
	    font-size: 34px;
	    padding: 0px 50px 0px 50px
      }	  
      .boxStyle{
	    font-size: 20px;
	    height: 200px;
      }
      .bottomCard{
	    font-size: 36px;
      }
      .bottomCardButton{
    	font-size: 20px;
      }
    }
	@media screen and (max-width: 1200px){ 
	  .boxStyle{
	    font-size: 20px;
	    height: 200px;
      }
	
    }
	@media screen and (max-width: 991px){ 
	  .boxStyle{
	    font-size: 20px;
	    height: 160px;
      }
      .deepin{
      		 height: 150px;	
      }

    }
	@media screen and (max-width: 767px){ 
	  .boxStyle{
	    font-size: 20px;
	    height: 280px;
      }
    }
	@media screen and (max-width: 425px){ 
	  .boxStyle{
	    font-size: 18px;
	    height: 252px;
      }
.exploreMore{
	width:89% !important;
	}
.exploreMore1{
	width:94% !important;
	}
.exploreMore2{
	width:94% !important;
	}
.exploreMore3{
	width:94% !important;
	}	
    }
	@media screen and (max-width: 320px){ 
	  .boxStyle{
	    font-size: 18px;
	    height: 200px;
      }

.exploreMore{
	width:104% !important;
	}
.exploreMore1{
	width:94% !important;
	}
.exploreMore2{
	width:94% !important;
	}
.exploreMore3{
	width:94% !important;
	}	
        }
	

.box-slider h3 {font-size: 28px; 
	         letter-spacing: 3px;
	         margin-bottom: 24px;
             padding-left: 0px;}
	
	.box p {font-size: 24px;}
	
	
.card1 {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
 /* background-color: #fff;*/
  background-clip: border-box;
  border: 0;
  border-radius: 0;
}
	
	
.card-img-overlay1 {
  position: absolute !important;}

.card-img1 {
  width: 100%;
  border-radius:0;
}

.MainMenu1{
	color: #34495e;
	font-weight: 600;
    margin-right: 8px;
	letter-spacing: 3px;
	font-size: 26px;
	 margin: 1% 0% -5% 0%;	
}
.pad {padding-left:100px;}

@media screen and (max-width: 425px){ 
	.MainMenu1{
	    font-size: 12px;
        position: absolute;
		margin: 3% 0% -10% 0%;}

      }


/* media query for modal title text */
@media screen and (min-width: 320px){
	.title_center{
		padding-left:12% !important ; 
	}
} 
 @media screen and (min-width:375px){
	.title_center{
		padding-left:20% !important;
	}
 }
 @media screen and (min-width:425px){
	.title_center{
		padding-left:22% !important;
	}
 }
 @media screen and (min-width:768px){
	.title_center{
		padding-left:28% !important;
	}
 }
@media screen and (max-width:360px){
	.title_center{
		padding-left:18% !important;
	}
 }
 
 
 

.hover-box1 {overflow: hidden ;}

.hover-box1:hover .hover-box1a {top: 0;}

.hover-box1a {position: absolute;
           width: 100%;
           height: 100%;
           background-color: rgba(0, 0,0,0.8);;
           top:-100%;
          transition: all 0.5s;}

.hover-box1a h2 {font-size: 20px;}

.hover-box1a p {font-size: 10px;
              padding: 2px 0 !important;}



@media(max-width:320px){
	
.hover-box1a h2 {
/*	font-size: 28px;*/
	font-size: 16px;
}

.hover-box1a p {font-size: 11px;
              padding: 2px 0 !important;}
	
.btn2 {font-size: 11px!important;
	   margin: 10px 0;}
	
	.hover-box1a {padding: 12px 0;}
}

@media(min-width:321px) and (max-width:425px){
	
.hover-box1a h2 {
/*	font-size: 30px;*/
	font-size: 24px;
}

.hover-box1a p {font-size: 11px;
              padding: 2px 0 !important;}
	
.btn2 {font-size: 11px!important;
	   margin: 15px 0;}
	
	.hover-box1a {padding: 12px 0;}
}

@media(min-width:426px) and (max-width:768px){
	
.hover-box1a h2 {font-size: 20px;}

.hover-box1a p {font-size: 12px;
              padding: 2px 0 !important;}
	
.btn2 {font-size: 12px!important;
	   margin: 5px 0;}
	
	.hover-box1a {padding: 8px 0;}
}

@media(min-width:769px) and (max-width:991px){
	
.hover-box1a h2 {font-size: 20px;}

.hover-box1a p {font-size: 12px;
              padding: 2px 0 !important;}
	
.btn2 {font-size: 12px!important;
	   margin: 5px 0;}
	
	.hover-box1a {padding: 8px 0;}
}

@media(min-width:992px){
	
.hover-box1a h2 {
/*	font-size: 24px;*/
	font-size: 22px;
}

.hover-box1a p {font-size: 14px;
              padding: 2px 0 !important;}
	
.btn2 {font-size: 14px!important;
	   margin: 5px 0;}
	
	.hover-box1a {padding: 20px 0;}
}

@media(min-width:1200px){
	
.hover-box1a h2 {
/*	font-size: 25px;*/
	font-size: 22px;
}

.hover-box1a p {font-size: 16px;
              padding: 2px 0 !important;}
	
.btn2 {font-size: 12px!important;
	   margin: 10px 0;}
	
	.hover-box1a {padding: 24px 0;}
}

.subtext{
	font-size: 16px;
   /* color: #dcdcd8;*/
}

</style>

<script>
import {config, catRef, QuoteRef } from './firebase/index'
import {mapGetters} from 'vuex'

import {
  quote
} from './firebase/quote'

import {
  intro
} from './firebase/10-day'


export default {
    name: 'login',
    data () {
      return {
  
      }
    },
     mounted() {
     	 quote(),
     	 intro()	
    },
    methods: {
  		
    },
    computed: mapGetters({
         quote : 'quote'
     })
  }

</script>