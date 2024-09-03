import { Carousel } from "react-bootstrap"
import img1 from "../../static/images/1.avif" 
import img2 from "../../static/images/2.jpeg" 

import img3 from "../../static/images/4.webp" 





export const Mycarosal=()=>{
    return <>
        <Carousel>
      <Carousel.Item>
        <img height="500px" width="100%"src={img1} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img height="500px" width="100%" src={img2} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img height="500px" width="100%" src={img3} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </>
}