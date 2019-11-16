<?php
require_once('../../../../privatez/initialize.php');

$page = "Photo Gallery";

//$dir_array = glob("*", GLOB_ONLYDIR );

?>

<!DOCTYPE html>
<html lang="en"> 

<head>
<?php

//include 'sect/sect_head.php';
include(SECT_PATH . '/sect_head3.php');

?>
</head>

<body>
    <!-- ##### Preloader ##### -->
    <div class="preloader d-flex align-items-center justify-content-center">
        <!-- Line -->
        <div class="line-preloader"></div>
    </div>

    <!-- ##### Header Area Start ##### -->

    <?php

    //include 'sect/sect_HeaderArea.php';
    include(SECT_PATH . '/sect_HeaderArea3.php'); 

    ?>    
    <!-- ##### Header Area End ##### -->


<!-- ##### New Bulletins Start ##### -->

    <?php
    
    //include(SECT_PATH . '/sect_Gallery.php'); 
    //include 'sect/sect_NewEvents.php';



        $dir_array = glob("*", GLOB_ONLYDIR );
        echo '<div class="gallery-area d-flex flex-wrap">';

            $files_array = glob('*.JPG');
            //var_dump($files_array);
            foreach ($files_array as $value) {
                
                ?> <!-- Single Gallery Area -->
                    <div class="single-gallery-area">
                        <a href="<?php echo $value; ?>" class="gallery-img" >
                        <img src="<?php echo $value; ?>" >
                        </a>
                    </div>
                <?php
                }
            
        echo '</div>';

    ?>     



    <!-- ##### Footer Area Start ##### -->

    <?php

    include(SECT_PATH . '/sect_Footer3.php'); 
    //include 'sect/sect_Footer.php';

    ?> 
    
    <!-- ##### Footer Area End ##### -->

    <!-- ##### All Javascript Script ##### -->

    <?php
    include(PUBLIC_PATH . '/sect/sect-JS_Area3.php'); 
    //include(SECT_PATH . '/JS_Area3.php');     
    // include '../../sect/sect-JS_Area.php';

    ?> 
    
    
</body>

</html>