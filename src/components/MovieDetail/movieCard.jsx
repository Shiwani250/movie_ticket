import React, { useState } from "react";
import Swal from "sweetalert2";
import "./detailcard.css";
import { Container, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
function Moviecard(props) {
  const [ticketType, setTicketType] = useState("normal");
  function handleConfirm() {

    // Transactions are being stored to and retreived from localStorage
    let transactions = localStorage.getItem("transactions");
    if (!transactions) {
      transactions = [];
    } else {
      transactions = JSON.parse(transactions);
    }
    // Transaction object with selected movie id, ticket price, currency and userId
    transactions.push({
      movieId: props.movieId,
      price: props.prices[ticketType],
      currency: props.currency,
      userId: "he6fe54u4s56o71d36z51no",
      id: transactions.length + 1,
    });
    localStorage.setItem("transactions", JSON.stringify(transactions));
    console.log({ transactions });
    Swal.fire({ title: "Transaction completed successfully" });
  }
  function handleDropdownChange(type) {
    setTicketType(type);
  }
  return (
    <>
      <div className="movie-card">
        <Container>
          <Row>
            <Col>
              <img src={props.imgsrc} alt="cover" className="cover" />
              <div className="hero">
                <div className="details">
                  <div className="title1">{props.title} </div>

                  <div className="title2">
                    {" "}
                    <span> Starring: </span> {props.stars}{" "}
                  </div>

                  <fieldset className="rating">
                    <input type="radio" id="star5" name="rating" value="5" />
                    <label
                      className="full"
                      htmlFor="star5"
                      title="Awesome - 5 stars"
                    ></label>
                    <input
                      type="radio"
                      id="star4half"
                      name="rating"
                      value="4 and a half"
                    />
                    <label
                      className="half"
                      htmlFor="star4half"
                      title="Pretty good - 4.5 stars"
                    ></label>
                    <input type="radio" id="star4" name="rating" value="4" />
                    <label
                      className="full"
                      htmlFor="star4"
                      title="Pretty good - 4 stars"
                    ></label>
                    <input
                      type="radio"
                      id="star3half"
                      name="rating"
                      value="3 and a half"
                    />
                    <label
                      className="half"
                      htmlFor="star3half"
                      title="Meh - 3.5 stars"
                    ></label>
                    <input type="radio" id="star3" name="rating" value="3" />
                    <label
                      className="full"
                      htmlFor="star3"
                      title="Meh - 3 stars"
                    ></label>
                    <input
                      type="radio"
                      id="star2half"
                      name="rating"
                      value="2 and a half"
                    />
                    <label
                      className="half"
                      htmlFor="star2half"
                      title="Kinda bad - 2.5 stars"
                    ></label>
                    <input type="radio" id="star2" name="rating" value="2" />
                    <label
                      className="full"
                      htmlFor="star2"
                      title="Kinda bad - 2 stars"
                    ></label>
                    <input
                      type="radio"
                      id="star1half"
                      name="rating"
                      value="1 and a half"
                    />
                    <label
                      className="half"
                      htmlFor="star1half"
                      title="Meh - 1.5 stars"
                    ></label>
                    <input type="radio" id="star1" name="rating" value="1" />
                    <label
                      className="full"
                      htmlFor="star1"
                      title="Sucks big time - 1 star"
                    ></label>
                    <input
                      type="radio"
                      id="starhalf"
                      name="rating"
                      value="half"
                    />
                    <label
                      className="half"
                      htmlFor="starhalf"
                      title="Sucks big time - 0.5 stars"
                    ></label>
                  </fieldset>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="description">
                <div className="column1">
                  <div>
                    {props &&
                      props.genre &&
                      props.genre
                        .split(",")
                        .map((g) => g.trim())
                        .map((genre) => (
                          <span className="tag" key={genre}>
                            {genre}
                          </span>
                        ))}
                  </div>
                </div>

                <div className="column2">
                  <p>{props.plot}</p>

                  <div className="avatars">
                    <h4>Directed By: {props.director} </h4>
                    {props && props.prices && (
                      <DropdownButton
                        id="dropdown-basic-button"
                        title="Available Seats"
                        size="sm"
                        drop="down"
                        onSelect={handleDropdownChange}
                        value={ticketType}
                      >
                        <Dropdown.Item eventKey="normal">
                          Normal: {props.prices.normal} {props.currency}
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="superior">
                          Superior: {props.prices.superior} {props.currency}
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="sofa">
                          Sofa: {props.prices.sofa} {props.currency}
                        </Dropdown.Item>
                      </DropdownButton>
                    )}

                    <button id="detail_button" onClick={handleConfirm}>
                      Please Confirm!
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Moviecard;
