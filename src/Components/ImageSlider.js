import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({images, noOfSlides}) => {

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: noOfSlides,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="imgslider">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} className="m-auto cursor-pointer"/>

              <p className="hover:text-[#EB6D20] cursor-pointer">{item.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ImageSlider;
