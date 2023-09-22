import { Carousel } from 'react-carousel-minimal';
import logo1 from './images-logo/logo1.jpg';
import logo2 from './images-logo/logo2.jpg';
import logo3 from './images-logo/logo3.jpg';
import logo4 from './images-logo/logo4.jpg';
import logo5 from './images-logo/logo5.jpg';
import logo6 from './images-logo/logo6.jpg';
import logo7 from './images-logo/logo7.jpg';
import logo8 from './images-logo/logo8.jpg';
import logo9 from './images-logo/logo9.jpg';

function BrandsCarousel() {
 const data = [
    {
      image: logo1,
      caption: ""
    },
    {
      image: logo2 ,
      caption: ""
    },
    {
        image: logo3,
        caption: ""
      },
      {
        image: logo4 ,
        caption: ""
      },
    {
      image: logo5,
      caption: ""
    },
    {
      image: logo6 ,
      caption: ""
    },
    {
        image: logo7 ,
        caption: ""
      },
    {
        image: logo8 ,
        caption: ""
    },
    {
        image: logo9 ,
        caption: ""
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2>Nuestros productos</h2>
        <p>Lo mejor del café en el mundo lo encuentras aquí</p>
        <div style={{
          padding: "150px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "500px",
              maxHeight: "500px",
              margin: "5px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default BrandsCarousel;

