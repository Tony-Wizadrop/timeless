<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/products.handwashs' , 'ProductController@handwashs');

Route::get('/products.sanitizers' , 'ProductController@sanitizers');

Route::resource('products', 'ProductController');

Route::get('/cart.display' , 'CartController@disp');

Route::get('/cart.count' , 'CartController@count');

Route::post('/cart.post' , 'CartController@post');

Route::get('/cart/{id}' , 'CartController@view');

Route::post('/cart.remove/{id}' , 'CartController@remove');

Route::post('/cart.checkout', 'CartController@checkout');

Route::post('/cart.empty', 'CartController@destroy');

Route::get('/cart.total', 'CartController@total');

Route::post('/message', 'CartController@message');


