<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class userController extends Controller
{
    public function InsertNew(Request $request)//for inserting new data into database
    {
        $action = $request->input('action');
        $fullname = $request->input('fullname');
        $email = $request->input('email');
        if($email == ""){
            $NewEmail = "general";
        }else{
            $NewEmail = $email;
        }
        $contact = $request->input('contact');
        $location = $request->input('location');
        $data=array("action"=>$action,"fullname"=>$fullname,"email"=>$NewEmail,"contact"=>$contact,"location"=>$location);

        DB::table('customer')->insert($data);

        if($data){
            echo "New Data Inserted Successful.";
        }else{
            echo "Something Went Wrong.";
        }
    }
    public function DisplayCustomer(Request $request) // for displaying table
    {
        $message = DB::select('select * from customer');
        return  (['items'=>$message]);
    }
}
