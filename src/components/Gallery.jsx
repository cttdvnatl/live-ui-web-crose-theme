import React from 'react';
import Data from '../database/Gallery.json';
const Gallery = (prop) => {
    return(
        <section>
            <div className="gallery-area d-flex flex-wrap">
            {
                Data.assets.map((src,idx) => {
                    return(
                        <div key= {idx} className="single-gallery-area">
                            <a href={src} className="gallery-img" title={`Gallery Image ${idx}`}>
                                <img src={src} alt=""/>
                            </a>
                        </div>
                    );
                })
            }
            
        </div>
    </section>
    );
};
export default Gallery;