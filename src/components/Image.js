import React from 'react';

const Image = ({image}) => {
//Extract variable
const {largeImageURL, like, previewURL, tags, view} = image

    return (<div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card">
            <img src={previewURL} alt={tags} className="card-img-top" />

        </div>
    </div>);
}
 
export default Image;