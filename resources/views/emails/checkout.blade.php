
 
<!DOCTYPE html>
<html>
<head>

</head>
 
<body>
<h2>You have a new order from timeless-essentials.co.ke</h2>
<br/>
 

 <p style="color:blue;">Order details</p>
 <hr>

 <strong>Total:</strong>Ksh. {{ $thesumtotal }} <br>

 <strong>Customer Name:</strong> <p style="color:blue;">{{ $thename }}</p>

 <strong>Customer contact details: </strong> <p style="color:blue;">{{ $thephonenumber }}</p>
<hr>


 @foreach( $therows as $row )

 
<strong>Product name:</strong> {{ $row->name }} <br>
<strong>Product size:</strong> {{ $row->options->size }} </br>
<strong>Product price:</strong> {{ $row->price }} <br>
<strong>No of pieces:</strong> {{ $row->qty }} <br>

<hr>

@endforeach



</body>
 
</html>