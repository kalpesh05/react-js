﻿
<?php 
//define('FIREBASE_URL','https://divethrutest.firebaseio.com/');
//define('FIREBASE_SECRET','gxp2ItQwCsropnMYSEtsqPxEKeJam2G5LTxoaMoE'); 
//define('FIREBASE_URL','https://divethru-71c56.firebaseio.com/');
//define('FIREBASE_SECRET','k7AS9py1rGygBlLjQAvtfSroYaFCwpe0KzdrDAjQ');
require_once("credential.php");
require '../vendor/autoload.php';
use Firebase\Firebase;
use Firebase\Auth\TokenGenerator;


$fb = Firebase::initialize(FIREBASE_URL, FIREBASE_SECRET);
$bundle = '';
$category = get("Category");

function get($path){
        $fb = Firebase::initialize(FIREBASE_URL, FIREBASE_SECRET);

//or set your own implementation of the ClientInterface as second parameter of the regular constructor
$fb = new Firebase([ 'base_url' => FIREBASE_URL, 'token' => FIREBASE_SECRET ], new GuzzleHttp\Client());

$nodeGetContent = $fb->get($path);

return $nodeGetContent;
}
//print_r($category);
//die;
?>



<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>SubCategory Add | DiveThru Admin </title>
    <!-- Favicon-->
    <link rel="icon" href="favicon.ico" type="image/x-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&subset=latin,cyrillic-ext" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type="text/css">
<link href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.0.1/min/dropzone.min.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.2.0/min/dropzone.min.js"></script>
    <!-- Bootstrap Core Css -->
    <link href="plugins/bootstrap/css/bootstrap.css" rel="stylesheet">

    <!-- Waves Effect Css -->
    <link href="plugins/node-waves/waves.css" rel="stylesheet" />
     <!-- Sweetalert Css -->
    <link href="plugins/sweetalert/sweetalert.css" rel="stylesheet" />

    <!-- Animation Css -->
    <link href="plugins/animate-css/animate.css" rel="stylesheet" />
     <link href="plugins/bootstrap-select/css/bootstrap-select.css" rel="stylesheet" />
  <!-- JQuery DataTable Css -->
    <link href="plugins/jquery-datatable/skin/bootstrap/css/dataTables.bootstrap.css" rel="stylesheet">
    <!-- Custom Css -->
    <link href="css/style.css" rel="stylesheet">
    <!-- AdminBSB Themes. You can choose a theme from css/themes instead of get all themes -->
    <link href="css/themes/all-themes.css" rel="stylesheet" />
    <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
 <script src="js/credential.js"></script>
    <script>
        
          // Initialize Firebase
  //         var config = {
  //   apiKey: "AIzaSyDBWdYDtGJsilqNGOqYMNalE9s-IAGPnTw",
  //   authDomain: "divethru-71c56.firebaseapp.com",
  //   databaseURL: "https://divethru-71c56.firebaseio.com",
  //   projectId: "divethru-71c56",
  //   storageBucket: "divethru-71c56.appspot.com",
  //   messagingSenderId: "53159239409"
  // };
  // var config = {
  //   apiKey: "AIzaSyBwDEs5JfwQNSRKCDMHE9TrVlWArbYG9NU",
  //   authDomain: "divethrutest.firebaseapp.com",
  //   databaseURL: "https://divethrutest.firebaseio.com",
  //   projectId: "divethrutest",
  //   storageBucket: "divethrutest.appspot.com",
  //   messagingSenderId: "19401978174"
  // };
  // firebase.initializeApp(config);
        </script>
            
       <script type="text/javascript" src="js/check_login.js"></script>
</head>

<body class="theme-red">
    <!-- Page Loader -->
    <div class="page-loader-wrapper">
        <div class="loader">
            <div class="preloader">
                <div class="spinner-layer pl-red">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div>
                    <div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
            <p>Please wait...</p>
        </div>
    </div>
    <!-- #END# Page Loader -->
    <!-- Overlay For Sidebars -->
    <div class="overlay"></div>
    <!-- #END# Overlay For Sidebars -->
    <!-- Search Bar -->
    <div class="search-bar">
        <div class="search-icon">
            <i class="material-icons">search</i>
        </div>
        <input type="text" placeholder="START TYPING...">
        <div class="close-search">
            <i class="material-icons">close</i>
        </div>
    </div>
    <!-- #END# Search Bar -->
    <!-- Top Bar -->
    <nav class="navbar">
        <?php include("navbar.php");?>
    </nav>
    <!-- #Top Bar -->
    <section>
        <!-- Left Sidebar -->

        <?php include("sidebar.php");?>
        <!-- #END# Right Sidebar -->
    </section>

    <section class="content">
        <div class="container-fluid">
            <div class="block-header">
                <h2>Sub category</h2>
            </div>
            
             <!-- Basic Examples -->
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="header">
                            <h2>SubCategory</h2>
                            <ul class="header-dropdown m-r--5">
                                <li class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <i class="material-icons">more_vert</i>
                                    </a>
                                    <ul class="dropdown-menu pull-right">
                                        <li><a href="subcategory_list.php" class=" waves-effect waves-block">List</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <form id="form_validation_subcategory"  novalidate="novalidate">
                                <div class="form-group form-float">
                                    <div class="form-line error">
                                        <input type="text" class="form-control" id="subcatname" name="name" required="" style="text-transform: capitalize;" aria-required="true" aria-invalid="true">
                                        <label class="form-label">Name</label>
                                    </div>
                              <!--  <label id="name-error" class="error" for="name">This field is required.</label>-->
                               </div>
                                        
                                <div class="form-group form-float">
                                    <div class="form-line error">
                                      
                                        
                                        <textarea name="description" id="ckeditor" cols="30" rows="5" class="form-control no-resize" required="" aria-required="true" placeholder="Desciption"></textarea>
                                    </div>
                                <!--<label id="description-error" class="error" for="description">This field is required.</label>-->
                                </div>
                                
                                <div class="form-group form-float">
                                    <div class="form-line error">
                                        <label class="form-label">category</label>
                                        <br><br>
                                        <select id="pcat" class="form-control show-tick" name="pcat">
                                        <?php
                                        if($category){
                                            echo "<option value=''>Select Category</option>";
                                            foreach($category as $k => $c){
                                                if( $c['Session'] == "" && $c["Bundle"] == ""){

                                                echo '<option value="'.$k.'">'.$c["category_name"].'</option>';
                                                }
                                            }
                                        }else{
                                            echo "<option value=''>Nothing selected</option>";
                                        }
                                        ?>
                                        </select>
                                        
                                    </div>
                                </div>
                                <!--<label id="description-error" class="error" for="description">This field is required.</label></div>-->
                                
                                
                                
                               <div class="form-group form-float">
                                    <div class="form-line error">
                                    <label class="form-label">Image (1920 X 1080)</label>
                                    </br>
                                    </br>
                                     <!--  <form id="my-awesome-dropzone" action="/upload" class="dropzone">  
                                            <div class="dropzone-previews"></div>
                                            <div class="fallback"> <!-- this is the fallback if JS isn't working -->
                                                <input name="subcatimage" class="check-image-size form-control" id="subcatimage" type="file" data-min-width="1920" data-min-height="1080" data-max-width="1920" data-max-height="1080" onchange="uplaodsubimgfile()" accept="image/*" />
                                                <input type="hidden" id="subimgurl">
                                        <!--    </div> -->

                                        
                                    </div>
                                </div>
                                

                             <!--  <label id="password-error" class="error" for="password">This field is required.</label></div>-->
                                <!-- <div class="form-group">
                                    <input type="checkbox" id="checkbox" name="checkbox" aria-required="true">
                                    <label for="checkbox">I have read and accept the terms</label>
                               <label id="checkbox-error" class="error" for="checkbox">This field is required.</label></div>-->
                                <button class="btn btn-primary waves-effect subcatadd" type="submit">SUBMIT</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- #END# Basic Examples -->
        </div>
    </section>

    <!-- Jquery Core Js -->
    <script src="plugins/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core Js -->
    <script src="plugins/bootstrap/js/bootstrap.js"></script>

    <!-- Select Plugin Js -->
    <script src="plugins/bootstrap-select/js/bootstrap-select.js"></script>

    <!-- Slimscroll Plugin Js -->
    <script src="plugins/jquery-slimscroll/jquery.slimscroll.js"></script>

    <!-- Waves Effect Plugin Js -->
    <script src="plugins/node-waves/waves.js"></script>
        <!-- SweetAlert Plugin Js -->
    <script src="plugins/sweetalert/sweetalert.min.js"></script>
    <!-- Jquery DataTable Plugin Js -->
    <script src="plugins/jquery-datatable/jquery.dataTables.js"></script>
    <script src="plugins/jquery-datatable/skin/bootstrap/js/dataTables.bootstrap.js"></script>
    <script src="plugins/jquery-datatable/extensions/export/dataTables.buttons.min.js"></script>
    <script src="plugins/jquery-datatable/extensions/export/buttons.flash.min.js"></script>
    <script src="plugins/jquery-datatable/extensions/export/jszip.min.js"></script>
    <script src="plugins/jquery-datatable/extensions/export/pdfmake.min.js"></script>
    <script src="plugins/jquery-datatable/extensions/export/vfs_fonts.js"></script>
    <script src="plugins/jquery-datatable/extensions/export/buttons.html5.min.js"></script>
    <script src="plugins/jquery-datatable/extensions/export/buttons.print.min.js"></script> 
         <script src="plugins/ckeditor/ckeditor.js"></script>
         <script src="plugins/ckeditor/plugins/placeholder/plugin.js"></script>
         <script src="plugins/jquery-validation/jquery.validate.js"></script>
          <script src="plugins/jquery-validation/additional-methods.js"></script>
         <script src="js/pages/forms/form-validation.js"></script>
         <script type="text/javascript" src="js/upload.js"></script>
    <!-- Custom Js -->
    <script src="js/admin.js"></script>
    <script src="js/jquery.checkImageSize.js"></script>
    <script>
$("input[type=file]").checkImageSize();
</script>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
    <!-- Demo Js -->
    <script src="js/demo.js"></script>
    <script type="text/javascript">
        
            function del(key){
                
            //var ref = firebase.database().ref('Users');
            var user_id = key;
            var ref = firebase.database().ref().child('/subcategory/' + user_id).remove();
            if(ref){
                
                        alert('This Sub Category Deleted Sucessfully');
            }
            window.location.reload();
        }
        
        $(function () {
//                    $('select').find('[value=Open]').remove(); 
  //                  $('select').find('[value=Quick]').remove(); 
    //    $('select').selectpicker('refresh');    
            
    $("form").submit(function(e){
        e.preventDefault();
    });
            
            var config = {};
            config.placeholder = 'Description'; 
//CKEDITOR.replace('ckeditor',config);
 //   CKEDITOR.config.height = 300;
    
    $('.js-basic-example').DataTable({
        responsive: true,
        //pagination: true,
    });

    $.validator.addMethod("regex", function(value, element, regexpr) {          
                 return regexpr.test(value);
               }, "Please enter Only characters"); 
    $('#form_validation_subcategory').validate({
        rules: {
            'name': {
                required: true,
                minlength: 2,
                maxlength: 50,
                regex:  /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/
            }, 
            'description': {
                required: true
            }, 
            'subcatimage': {
                required: true,
                accept: "image/jpeg, image/png,image/gif"
            }, 
            'pcat':{
                required:true
            }
            
        },
        messages: {
          name: {
            required:"Please enter your SubCategory Name",
            minlength: "Enter name must be at least 6 characters long",
            maxlength: "Enter name maximum 50 characters allow"
            },
          subcatimage: {
            required:"Please Select Any image",
            accept: "Select only jpeg,png,gif file formate only!!"
            },
            description:"Please enter Description",
            pcat:"Please Select category"
          
        },
        highlight: function (input) {
            $(input).parents('.form-line').addClass('error');
        },
        unhighlight: function (input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function (error, element) {
            $(element).parents('.form-group').append(error);
        },
        submitHandler: function(form) {
        },
        success: function(form){
                                
        }
    });
 
    //Exportable table
    $('.js-exportable').DataTable({
        dom: 'Bfrtip',
        responsive: true,
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
    $('select').selectpicker().change(function(){
        $(this).valid()
    });
    $('#subcatimage').selectpicker().change(function(){
        $(this).valid()
    });
    $(".subcatadd").click(function(){

        var temp=$('#form_validation_subcategory').valid();
        if(temp==true){
        

        var pcat = $("#pcat option:selected").text();
        //alert(pcat);
        //return;
         //var desc = CKEDITOR.instances['ckeditor'].getData();
         var desc = $('#ckeditor').val();
         var subcatname = $("#subcatname").val();
         var subimgurl = $("#subimgurl").val();
         
        /*var firebaseRef = firebase.database().ref();
//      var outro = surl.split(',');
//console.log(array);
        var catRef = firebaseRef.child("subcategory");

        var pushedCatRef = catRef.push();*/
                var firebaseRef = firebase.database().ref("Category/"+pcat+"/SubCategory");
        var pushedCatRef = firebaseRef.push();

        // Get the unique key generated by push()
        var subid = pushedCatRef.key;
//alert("ID"+subid);
            if(pcat == "Quick Dive"){
                firebaseRef.child(subid).set({
                    subcategory_name: subcatname,
                    subcategory_description: desc,
                    subcategory_img: subimgurl,
                    parentcategory: pcat,
                    subcategory_id: subid,
                    //bundle:''
                    Bundle:'',
                    Session: ''
                }).then(function(snap){
                    swal({
                                title: "Inserted!",
                                text: "Subcategory has been Inserted.",
                                html:true,
                                type: "success",
                                showCancelButton: false,
                                confirmButtonColor: "#86CCEB",
                                confirmButtonText: "OK",
                                closeOnConfirm: false
                            }, function () {
                                window.setTimeout(function() {
                                
                                window.location.href = "subcategory_list.php";
                                }, 1000);
                            });
                });

            }else{
                firebaseRef.child(subid).set({
                    subcategory_name: subcatname,
                    subcategory_description: desc,
                    subcategory_img: subimgurl,
                    parentcategory: pcat,
                    subcategory_id: subid,
                    //bundle:''
                    Bundle:''
                 //   Session: ''
                }).then(function(snap){
                    swal({
                                title: "Inserted!",
                                text: "Subcategory has been Inserted.",
                                html:true,
                                type: "success",
                                showCancelButton: false,
                                confirmButtonColor: "#86CCEB",
                                confirmButtonText: "OK",
                                closeOnConfirm: false
                            }, function () {
                                window.setTimeout(function() {
                                
                                window.location.href = "subcategory_list.php";
                                }, 1000);
                            });
                });
            }

        //alert(cimg);
        //alert(55);
                if(pushedCatRef){
                
                    
            }
           }
    });

    
});

        
    </script>
</body>

</html>