import { MDBRow, MDBCard, MDBCardImage } from "mdb-react-ui-kit";
import { constants } from "../../data/data";

export const Communitypartner = (props) => {
  return (
    <div className="community-container">
      <div className="container">
        <div className="row blogcard-container">
          <div className="col-xs-12 col-md-4 community-heading-wrapper">
            <p className="blogcard-heading">
              Community Partner
              <img
                src="img/dash.svg"
                className="blogcard-subheading"
                alt="dash"
              />
            </p>
          </div>
        </div>
        <div className="row community-logo-container">
          <div className="col-xs-12 col-md-4 community-partner-wrapper">
            <Partner community={constants.Community} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Partner = (props) => {
  return (
    <MDBRow className="row-cols-1 row-cols-md-3 g-4">
      {props.community.map((img) => (
        <MDBCard key={img.path}>
          <MDBCardImage src={img.path} alt="..." position="top" />
        </MDBCard>
      ))}
    </MDBRow>
  );
};
