import Slider from "react-slick";

function ImageSlider({images}) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  
    return (
      <Slider {...settings}>
        {images.map((image, index) => (
            <div key={index}>
                <img src={image} alt="" />
            </div>
        ))}
      </Slider>
    );
  }

export { ImageSlider }