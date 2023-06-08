<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index()
    {
        $data['page']='home';
        return view('header',$data).view('index').view('footer');
    }
     public function about()
    {
// return "hghghgh";
        $data['page']='about';
        return view('header',$data).view('about').view('team').view('services').view('clients').view('contact').view('footer');
    }
    public function team()    {
        $data['page']='team';
        return view('header',$data).view('team').view('services').view('clients').view('contact').view('footer');
    }
     public function services()
    {
        $data['page']='services';
        return view('header',$data).view('services').view('clients').view('contact').view('footer');
    }
    //  public function blog()
    // {
    //     $data['page']='home';
        //return view('header',$data).view('blog').view('footer');
    // }
    //public function detail()
    // {
    //     $data['page']='home';
        //return view('header',$data).view('detail').view('footer');
    // }
     public function clients()
    {
        $data['page']='clients';
        return view('header',$data).view('clients').view('footer');
    }
     public function contact()
    {
        $data['page']='contact';
        return view('header',$data).view('contact').view('footer');
    }
    
}
