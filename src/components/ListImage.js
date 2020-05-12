import React from 'react';
import Image from './Image'
import PropTypes from 'prop-types'


const ListImage = ({images}) => {
    return ( 
        <div className="col-12 p-5 row">
            {images.map(image=>(
                <Image
                key= {image.id}
                image={image}
                />
            ))}
        </div>
     );
}

//Documentation
ListImage.propTypes={
    images: PropTypes.array.isRequired
}
 
export default ListImage;