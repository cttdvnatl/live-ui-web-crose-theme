import React, { Suspense, useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Preloader from "../components/Preloader";

function GalleryPage() {
    const { galleryId } = useParams()
    const [images, setImages] = useState([])
    const [title, setTitle] = useState('')

    const imagesSource = [
        {
            galleryId: "2019_TD",
            title: "TD",
            source: [
                "/img/gallery/2019_TD/ChurchBuilding.JPG",
                "/img/gallery/2019_TD/ChurchConstInt1.JPG",
                "/img/gallery/2019_TD/ChurchInvite.JPG",
                "/img/gallery/2019_TD/front1.JPG",
                "/img/gallery/2019_TD/interior2.JPG",
                "/img/gallery/2019_TD/new_church.JPG",
                "/img/gallery/2019_TD/NewChurch_Crop_1.JPG",
            ]
        },
        {
            galleryId: "201802_TinTam",
            title: 'TinTam',
            source: [
                "/img/gallery/201802_TinTam/IMG_3023.JPG",
                "/img/gallery/201802_TinTam/IMG_3024.JPG",
                "/img/gallery/201802_TinTam/IMG_3025.JPG",
                "/img/gallery/201802_TinTam/IMG_3026.JPG",
                "/img/gallery/201802_TinTam/IMG_3028.JPG",
                "/img/gallery/201802_TinTam/IMG_3029.JPG",
                "/img/gallery/201802_TinTam/IMG_3030.JPG",
                "/img/gallery/201802_TinTam/IMG_3031.JPG",
                "/img/gallery/201802_TinTam/IMG_3032.JPG",
                "/img/gallery/201802_TinTam/IMG_3033.JPG",
                "/img/gallery/201802_TinTam/IMG_3034.JPG",
                "/img/gallery/201802_TinTam/IMG_3035.JPG",
            ]
        }
    ]

    useEffect(() => {
        console.log(galleryId)
        // axios({
        //     url: `http://localhost:3000/gallery/${galleryId}/ChurchBuilding.JPG`,
        //     method: 'GET',
        // }).then(response => console.log(response)

        const imagesObj = imagesSource.find(img => img.galleryId === galleryId)
        if (imagesObj) {
            const images = imagesObj.source
            const title = imagesObj.title
    
            setImages(images)
            setTitle(title)
        }
        else {
            setTitle("No Images Found")
        }
        
    }, [])

    // <!-- Single Gallery Area -->
    //                 <div class="single-gallery-area">
    //                     <a href="http://hvmatl.net/gallery/2019_TD/ChurchBuilding.JPG" class="gallery-img" >
    //                     <img src="http://hvmatl.net/gallery/2019_TD/ChurchBuilding.JPG" >
    //                     </a>
    //                 </div>
    //              <!-- Single Gallery Area -->
    //                 <div class="single-gallery-area">
    //                     <a href="http://www.hvmatl.net/gallery/2019_TD/ChurchConstInt1.JPG" class="gallery-img" >
    //                     <img src="http://www.hvmatl.net/gallery/2019_TD/ChurchConstInt1.JPG" >
    //                     </a>
    //                 </div>
    //              <!-- Single Gallery Area -->
    //                 <div class="single-gallery-area">
    //                     <a href="http://hvmatl.net/gallery/2019_TD/ChurchInvite.JPG" class="gallery-img" >
    //                     <img src="http://hvmatl.net/gallery/2019_TD/ChurchInvite.JPG" >
    //                     </a>
    //                 </div>
    //              <!-- Single Gallery Area -->
    //                 <div class="single-gallery-area">
    //                     <a href="http://hvmatl.net/gallery/2019_TD/NewChurch_Crop_1.JPG" class="gallery-img" >
    //                     <img src="http://hvmatl.net/gallery/2019_TD/NewChurch_Crop_1.JPG" >
    //                     </a>
    //                 </div>
    //              <!-- Single Gallery Area -->
    //                 <div class="single-gallery-area">
    //                     <a href="http://hvmatl.net/gallery/2019_TD/front1.JPG" class="gallery-img" >
    //                     <img src="http://hvmatl.net/gallery/2019_TD/front1.JPG" >
    //                     </a>
    //                 </div>
    //              <!-- Single Gallery Area -->
    //                 <div class="single-gallery-area">
    //                     <a href="http://hvmatl.net/gallery/2019_TD/interior2.JPG" class="gallery-img" >
    //                     <img src="http://hvmatl.net/gallery/2019_TD/interior2.JPG" >
    //                     </a>
    //                 </div>
    //              <!-- Single Gallery Area -->
    //                 <div class="single-gallery-area">
    //                     <a href="http://hvmatl.net/gallery/2019_TD/new_church.JPG" class="gallery-img" >
    //                     <img src="http://hvmatl.net/gallery/2019_TD/new_church.JPG" >
    //                     </a>
    //                 </div>

    return (
        <div>
            <Header /> 
            <Container fluid>
                <Row className="my-4">
                    <div class="h1 text-center">{title}</div>
                </Row>
                <Row>
                    {images.map(image => {
                        return <Col key={image} lg={3}>
                                    <Image src={image} />
                                </Col>
                    })}
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default GalleryPage;