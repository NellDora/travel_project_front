import Slider from 'react-slick';
import { API_SERVER_HOST } from '../../api/boardApi';

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
        <div>
            <h2>여행지 사진</h2>
            <Slider{...settings}>
                {images.map((image, index) =>(
                    <div key={index}>
                        <img className=" object-contain" src={`${API_HOST}/vacationlands/view/s_${image}`}/>
                     
                    </div>

                ))}
            </Slider>
        </div>
    );

}

export default ImageSlider