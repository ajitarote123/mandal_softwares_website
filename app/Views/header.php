<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Mandal Softwares</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="Free HTML Templates" name="keywords">
    <meta content="Free HTML Templates" name="description">

    <!-- Favicon -->
    <link href="/img/logo.png" rel="shortcut icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Rubik:wght@400;500;600;700&display=swap"
        rel="stylesheet">

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="/lib/animate/animate.min.css" rel="stylesheet">

    <!-- Customized Bootstrap Stylesheet -->
    <link href="/css/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="/css/style.css" rel="stylesheet">
</head>

<body>
    <!-- Spinner Start -->
    <div id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner"></div>
    </div>
    <!-- Spinner End -->


    <!-- Topbar Start -->
    <div class="container-fluid bg-dark px-5 d-none d-lg-block">
        <div class="row gx-0">
            <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center" style="height: 45px;">
                    <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i>Talegaon Dabhade,
                        Maharashtra 410506,
                        India</small>
                    <small class="me-3 text-light"><i class="fa fa-phone-alt me-2"></i>+91 8652551424</small>
                    <small class="text-light"><i class="fa fa-envelope-open me-2"></i>mandalsoftwares@gmail.com</small>
                </div>
            </div>
            <div class="col-lg-4 text-center text-lg-end">
                <div class="d-inline-flex align-items-center" style="height: 45px;">
                    <!-- <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i
                            class="fab fa-twitter fw-normal"></i></a> -->
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                        href="https://www.facebook.com/mandalsoftwares/"><i class="fab fa-facebook-f fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                        href="https://in.linkedin.com/company/mandal-softwares"><i
                            class="fab fa-linkedin-in fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                        href="https://www.instagram.com/mandal_softwares/"><i
                            class="fab fa-instagram fw-normal"></i></a>
                    <!-- <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i
                            class="fab fa-youtube fw-normal"></i></a> -->
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->


    <!-- Navbar & Carousel Start -->
    <div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a href="<?= site_url('/') ?>" class="navbar-brand p-0">
                <h1 class="m-0"><img style="height: 50px; width: 50px; border-radius: 15px" src="/img/logo.png"></img>
                    Mandal Softwares</h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a href="<?= site_url('/') ?>" class="nav-item nav-link<?=($page=='home'?' active':'')?>">Home</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle<?=($page=='about'?' active':'')?>" data-bs-toggle="dropdown">About</a>
                        <div class="dropdown-menu m-0">
                            <a href="<?= site_url('about') ?>" class="dropdown-item<?=($page=='aboutcompany'?' active':'')?>">About Company</a>
                            <a href="<?= site_url('team') ?>" class="dropdown-item<?=($page=='team'?' active':'')?>">About Team</a>
                        </div>
                    </div>
                    <a href="<?= site_url('services') ?>" class="nav-item nav-link<?=($page=='services'?' active':'')?>">Services</a>
                    <a href="<?= site_url('clients') ?>" class="nav-item nav-link<?=($page=='clients'?' active':'')?>">Clients</a>
                    <a href="<?= site_url('contact') ?>" class="nav-item nav-link<?=($page=='contact'?' active':'')?>">Contact</a>
                </div>
                <butaton type="button" class="btn text-primary ms-3" data-bs-toggle="modal"
                    data-bs-target="#searchModal"><i class="fa fa-search"></i></butaton>
            </div>
        </nav>

        <?php if($page=='home') { ?>
        <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src="img/carousel-1.jpg" alt="Image">
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style="max-width: 900px;">
                            <h5 class="text-white text-uppercase mb-3 animated slideInDown">"Empowering Innovation"</h5>
                            <h1 class="display-1 text-white mb-md-4 animated zoomIn">We Create Modern And Beautiful Websites For Your Business</h1>
                            <a href="about" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read
                                More</a>
                            <a href="contact"
                                class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact
                                Us</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="img/carousel-2.jpg" alt="Image">
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style="max-width: 800px;">
                            <h5 class="text-white text-uppercase mb-3 animated slideInDown">"Empowering Innovation"</h5>
                            <h1 class="display-1 text-white mb-md-4 animated zoomIn">We create robust and intuitive mobile, web, and desktop apps.</h1>
                            <a href="/about" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read
                                More</a>
                            <a href="/contact" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact
                                Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <?php } else { ?>
            <div class="container-fluid bg-primary py-5 bg-header" style="margin-bottom: 90px;">
            <div class="row py-5">
                <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 class="display-4 text-white animated zoomIn"><?php
                    switch ($page) {
                        case 'about':
                            echo 'About Company';
                            break;
                        
                        default:
                            echo ucfirst($page);
                            break;
                    }
                    ?></h1>
                    <a href="/" class="h5 text-white">Home</a>
                    <i class="far fa-circle text-white px-2"></i>
                    <a href="/<?=$page?>" class="h5 text-white"><?=ucfirst($page)?></a>
                </div>
            </div>
        </div>
        <?php } ?>
    </div>
    <!-- Navbar & Carousel End -->


    <!-- Full Screen Search Start -->
    <div class="modal fade" id="searchModal" tabindex="-1">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content" style="background: rgba(9, 30, 62, .7);">
                <div class="modal-header border-0">
                    <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex align-items-center justify-content-center">
                    <div class="input-group" style="max-width: 600px;">
                        <input type="text" class="form-control bg-transparent border-primary p-3" placeholder="Type search keyword">
                        <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Full Screen Search End -->