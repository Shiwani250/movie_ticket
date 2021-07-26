import React, { Component } from "react";
import Slider from "../Slider/Slider";
import Cardcomponent from "./common/Card";
import moviesdata from "../../Resources/movie_details.json";
import "./moviecard.css";
import { Row, Col } from "react-bootstrap";

let movieList = moviesdata.movies;
class HomePage extends Component {
  render() {
    return (
      <div className="home-main">
        <Slider />
        <Row>
          {movieList.map((s) => (
            <Col xs="12" sm="6" lg="4" md="4">
              <Cardcomponent
                id={s.id}
                imgsrc={s.image}
                title={s.title}
                director={s.director}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default HomePage;
