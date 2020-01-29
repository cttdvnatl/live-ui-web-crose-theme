import React from 'react';
import Data from '../resources/Gallery.json';
const Gallery = (prop) => {
    return(
        <section>
            <div class="gallery-area d-flex flex-wrap">
            {
                Data.assets.map((src,indx) => {
                    return(
                        <div class="single-gallery-area">
                            <a href={src} class="gallery-img" title={`Gallery Image ${indx}`}>
                                <img src={src} alt=""/>
                            </a>
                        </div>
                    );
                })
            }
            
        </div>
    </section>
    );
}
export default Gallery;