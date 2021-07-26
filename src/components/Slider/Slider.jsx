import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Row, Col } from "react-bootstrap";
import "./common.css";

class ControlledCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  render() {
    return (
      <Row>
        <Col>
          <Carousel
            className="first_image"
            activeIndex={this.state.index}
            onSelect={this.handleSelect}
          >
            <Carousel.Item>
              <img
                className="slider_image"
                src="http://posterposse.com/wp-content/uploads/2017/06/wonder-woman-banner.jpeg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slider_image"
                src="https://lumiere-a.akamaihd.net/v1/images/thor-r-emea-banner_52a30561.jpeg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slider_image"
                src="https://i.ytimg.com/vi/aVsOXRgjeeU/maxresdefault.jpg"
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    );
  }

  handleSelect = (selectedIndex, e) => {
    console.log("selectedIndedx", selectedIndex);
    this.setState({ index: selectedIndex });
  };
}

export default ControlledCarousel;
