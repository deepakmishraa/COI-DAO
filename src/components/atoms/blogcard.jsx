import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import React from "react";

export const Blogcard = (props) => {
  const data = props.value;
  return (
    <MDBRow className="row-cols-1 row-cols-md-3 g-4">
      {data.map((unit) => {
        return (
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src={unit.imagePath}
                alt={unit.alt}
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle style={{ border: 0 }}>
                  <span>{unit.heading}</span>
                  <a href="home" className="blogcard-knowmore">
                    Know more
                  </a>
                </MDBCardTitle>
                <MDBCardText>
                  <p
                    style={{
                      color: "#07113D",
                      paddingBottom: "60px",
                      borderBottom: "1px solid #cbcbcb",
                    }}
                  >
                    {unit.description}
                  </p>
                  <p
                    style={{
                      color: "#07113D",
                      fontSize: "12px",
                    }}
                  >
                    Published {unit.published}
                  </p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        );
      })}
    </MDBRow>
  );
};
