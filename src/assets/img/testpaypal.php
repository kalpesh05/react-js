<?php
//start session
session_start();

//get logged in user ID from sesion
$loggedInUserID = "123456";

//PayPal variables
$paypalURL     = 'https://www.sandbox.paypal.com/cgi-bin/webscr';
$paypalID     = 'hello-facilitator@divethru.com';
$successURL = 'http://34.215.40.163/Success.php';
$cancelURL     = 'http://34.215.40.163/testpaypal.php';
$notifyURL     = 'http://34.215.40.163/ipn';

$itemName = 'Member Subscriptions';
$itemNumber = 'MS'.$loggedInUserID;

//subscription price for one month
$itemPrice = 0.2;



?>
<html>
<head>
<title>PayPal Subscription Button for Recurring Payments</title>
<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
<p>Choose Validity:
    <select name="validity" onchange="getSubsPrice(this);">
        <option value="1" selected="selected">1 Month</option>
        <option value="3">3 Month</option>
        <option value="6">6 Month</option>
        <option value="9">9 Month</option>
        <option value="12">12 Month</option>
    </select>
</p>
<p>Price: <span id="subPrice"><?php echo '$'.$itemPrice.' USD'; ?></span></p>
<form action="<?php echo $paypalURL; ?>" method="post">
    <!-- identify your business so that you can collect the payments -->
    <input type="hidden" name="business" value="<?php echo $paypalID; ?>">
    <!-- specify a subscriptions button. -->
    <input type="hidden" name="cmd" value="_xclick-subscriptions">
    <!-- specify details about the subscription that buyers will purchase -->
    <input type="hidden" name="item_name" value="<?php echo $itemName; ?>">
    <input type="hidden" name="item_number" value="<?php echo $itemNumber; ?>">
    <input type="hidden" name="currency_code" value="USD">
    <input type="hidden" name="a3" id="paypalAmt" value="<?php echo $itemPrice; ?>">
    <input type="hidden" name="p3" id="paypalValid" value="1">
    <input type="hidden" name="t3" value="M">
    <!-- custom variable user ID -->
    <input type="hidden" name="custom" value="<?php echo $loggedInUserID; ?>">
    <!-- specify urls -->
    <input type="hidden" name="cancel_return" value="<?php echo $cancelURL; ?>">
    <input type="hidden" name="return" value="<?php echo $successURL; ?>">
    <input type="hidden" name="notify_url" value="<?php echo $notifyURL; ?>">
    <!-- display the payment button -->
    <input class="paypal_button" type="submit" value="Buy Subscription">
</form>
<script
  src="https://code.jquery.com/jquery-3.3.1.slim.js"
  integrity="sha256-fNXJFIlca05BIO2Y5zh1xrShK3ME+/lYZ0j+ChxX2DA="
  crossorigin="anonymous"></script>
<script type="text/javascript">
$(document).ready(function() {
function getSubsPrice(obj){
    var month = obj.value;
    var price = (month * <?php echo $itemPrice; ?>);
    document.getElementById('subPrice').innerHTML = '$'+price+' USD';
    document.getElementById('paypalValid').value = month;
    document.getElementById('paypalAmt').value = price;
}
});
</script>
</body>
</html>