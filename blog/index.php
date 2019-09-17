<?php session_start(); ?>﻿
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Ballroom and Latin Dance Blog by Learn To Dance Sandy</title>
  <meta name="description" content="Ballroom and Latin Dance Blog Page. Information and updates on Ballroom and Latin Dance Classes in Sandy and social dance events in the area. Also Introductions to the various Ballroom and Latin Dances taught in our classes."/>
  <meta charset="utf-8">
  <meta name="format-detection" content="telephone=no"/>
  <link rel="icon" href="images/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="css/grid.css">
  <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/mailform.css"/>

  <script src="js/jquery.js"></script>
  <script src="js/jquery-migrate-1.2.1.js"></script>
  
  <!-- Open Graph Data -->
  <meta property="og:title" content="Learn to Dance Sandy Blog Post" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://www.blog.learn2dancesandy.co.uk/index.php" />
  <meta property="og:image" content="https://www.blog.learn2dancesandy.co.uk/images/facebookheader2.jpg" />
  <meta property="og:description" content="Ballroom and Latin Dance Blog, Information and updates on Ballroom and Latin Dance Classes, Dance Lessons and Social Dance Events." />

  <!--[if lt IE 9]> 
  <html class="lt-ie9">
  <div style=' clear: both; text-align:center; position: relative;'>
    <a href="http://windows.microsoft.com/en-US/internet-explorer/..">
      <img src="images/ie8-panel/warning_bar_0000_us.jpg" border="0" height="42" width="820"
           alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."/>
    </a>
  </div>
  <script src="js/html5shiv.js"></script>
  <![endif]-->

  <script src='js/device.min.js'></script>
</head>
<body>
<div class="page text-center">
  <!--========================================================
                            HEADER
  =========================================================-->
  <header class="bg-image-01">

      <div class="container">

        <div class="row flow-offset-1">
          <div class="col-md-3 col-sm-6">
            <div class="brand">
              <h1 class="brand_name">
                  <a href="./"><span>Learn to Dance</span><span class="text-primary"> Sandy</span></a>
              </h1>
            </div>
          </div>

          <div class="col-md-4 col-sm-6 pull-sm-right text-xs-center text-md-right">
            <ul class="inline-list text-contrast-variant-1">
              <li><a class="icon icon-primary icon-xs uppercase" href="https://learn2dancesandy.co.uk">Home</a></li>
              <li><a class="icon icon-primary icon-xs uppercase" href="https://learn2dancesandy.co.uk/about.html">About</a></li>
              <li><a class="icon icon-primary icon-xs uppercase" href="https://learn2dancesandy.co.uk/dances.html">Dances</a></li>
              <li><a class="icon icon-primary icon-xs uppercase" href="https://learn2dancesandy.co.uk/gallery.html">Gallery</a></li>
              <li><a class="icon icon-primary icon-xs uppercase" href="https://learn2dancesandy.co.uk/contact.html">Contact</a></li>
              <li><a class="icon icon-primary icon-xs uppercase" href="https://learn2dancesandy.co.uk/social.html">Social</a></li>

            </ul>
          </div>

        </div>

        <div class="row rd-parallax">
          <div class="col-md-5 col-sm-5 illustration-wrap ">
            <div class="border inset-1 text-left offset-1 rd-parallax-layer parallax-md" data-speed="0.2" data-type="html">
              <img class="illustration" src="images/page01_img-01.png" alt=""/>
            </div>
          </div>
          <div class="col-md-6 col-sm-7 text-sm-left rd-parallax-layer parallax-md" data-speed="0.12" data-type="html">

            <h2 class="bg-image-05 text-primary">Welcome to our Blog</h2>
            
            <p class="heading-3 text-default-variant-1">Come here for News and Updates on our Ballroom and Latin Dance Classes, Social Dances and information on the various Latin and Ballroom Dances.</p>            

          </div>
        </div>

      </div>

  </header>
  <!--========================================================
                            CONTENT
  =========================================================-->
  <main class="text-sm-left">

    <!--section1-->
    <section class="well-md bg-default bg-default-variant-1">
		 <div class="container z-index">
           <div class="row rd-parallax">

             <div id="blog">
               <h2>Blog Posts</h2>

               <?php include("/SimpleBlogPHP/blog.php"); ?>


             </div>

           </div>

         </div>
    </section>
    <!--END section1-->


  </main>

  <!--========================================================
                            FOOTER
  =========================================================-->
  <footer class="bg-image-04 bg-image-03">

    <div class="copyright uppercase">
        Learn to Dance Sandy © <span id="copyright-year"></span>
    </div>

      <!-- {%FOOTER_LINK} -->

  </footer>
</div>

<script src="js/script.js"></script>

</body>
</html>