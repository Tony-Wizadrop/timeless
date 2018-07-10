<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Cart;
use App\Product;
use Mail;

use Illuminate\Mail\Mailable;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function disp()
    {
        $cartitems = Cart::content();

        $items = array();

        foreach ($cartitems as $cartitem){
            $items[] = $cartitem;
        }

      

        return response()->json([
            'itemed' => $items
        ]);
    }

    public function total(){
        $total=Cart::subtotal();

        return response()->json([
            $total
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function post(Request $request)
    {
        
        $id = $request->get('id');
        $name = $request->get('name');
        $price = $request->get('price');
        $qty = $request->get('qty');
        $size = $request->get('size');
         $image = $request->get('image');
    

            $add = Cart::add(['id' => $id , 'name' => $name , 'price' => $price , 'qty' => $qty ,  'options' => ['image' => $image , 'size' => $size ] ]);

        $newcount = Cart::content();


                return response()->json(['newcount' => $newcount ]);
          
    }

    public function view($id){
        $theproduct = Cart::get($id);

        return response()->json([ 'theprod' => $theproduct]);
    }


        public function remove($id){
        $removed = Cart::remove($id);

        $answer = "Deleted";

        return response()->json([ $answer ]);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy()
    {
        $kill = Cart::destroy();

        $answer = "Success!! Cart emptied";

        return response()->json([
            $answer
        ]);
    }

    public function count(){
        $count = Cart::count();

        return response()->json([
            'count' => $count,
        ]);
    }

    public function checkout(Request $request){

    $rows = Cart::content();

    $sumtotal = Cart::subtotal();



    $phonenumber = $request->get('phone');

    $name = $request->get('name');



Mail::send('emails.checkout', [ 'therows' => $rows , 'thesumtotal' => $sumtotal , 'thephonenumber' => $phonenumber , 'thename' => $name ], function($m){

        $user = 'sales@timeless-essentials.co.ke';
        $user2 = 'accounts@timeless-essentials.co.ke';


                        $m->to($user)
                        ->cc($user2);
                        $m->subject("New Order from Timeless-essentials Website");
                    });

     $kill = Cart::destroy();

}

public function message(Request $request){

    $name = $request->get('name');
    $email = $request->get('email');
    $phone = $request->get('phone');
    $message = $request->get('message');
    


        Mail::send('emails.feedback', [ 'thename' => $name, 'theemail' => $email, 'thephonenumber' => $phone, 'themessage' => $message], function($m){

        $user = 'info@timeless-essentials.co.ke';
        $user2 = 'customercare@timeless-essentials.co.ke';

                        $m->to($user)
                            ->cc($user2);
                         $m->subject("New Feedback Message from Timeless-essentials website");
                    });
}
}
