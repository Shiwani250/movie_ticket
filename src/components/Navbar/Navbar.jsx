import Navbar from "react-bootstrap/Navbar";
export const NavbarComponent = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <div>
        <Navbar.Brand href="/" className="heading">
          Movie Ticket Booking
        </Navbar.Brand>
      </div>
    </Navbar>
  );
};
