import Slider from 'react-slick';
import { API_SERVER_HOST } from '../../api/boardApi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const API_HOST = API_SERVER_HOST

const ImageSlider = ({images}) =>{

    const settings ={
        dots:true,
        infinite :true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1
    };

    return(

        <div className="w-full max-w-screen-lg mx-auto">
            <div className="px-4">
                <Slider {...settings} className="slider-container">
                    {images.map((image, index) => (
                        <div key={index} className="slider-item">
                            <img src={`${API_HOST}/vacationlands/view/${image}`} alt={`이미지 ${index + 1}`} className="w-full object-contain" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );

}

export default ImageSlider