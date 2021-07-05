import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Tables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Simple Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>State</th>
                      <th>City</th>
                      <th className="text-center">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Soumya Nandini</td>
                      <td>Maharastra</td>
                      <td>Mumbai</td>
                      <td className="text-center">Rs36,738</td>
                    </tr>
                    <tr>
                      <td>Minerva Das</td>
                      <td>Karnataka</td>
                      <td>Bangalore</td>
                      <td className="text-center">Rs23,789</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Goa</td>
                      <td>Margao</td>
                      <td className="text-center">Rs56,142</td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Tamil Nadu</td>
                      <td>Madurai</td>
                      <td className="text-center">Rs38,735</td>
                    </tr>
                    <tr>
                      <td>Shibani Pradhan</td>
                      <td>Odisha</td>
                      <td>Cuttack</td>
                      <td className="text-center">Rs63,542</td>
                    </tr>
                    <tr>
                      <td>Sunil Mishra</td>
                      <td>Madhya Pradesh</td>
                      <td>Indore</td>
                      <td className="text-center">Rs78,615</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Table on Plain Background</CardTitle>
                <p className="category">Here is a subtitle for this table</p>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>State</th>
                      <th>City</th>
                      <th className="text-center">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Soumya Nandini</td>
                      <td>Maharastra</td>
                      <td>Mumbai</td>
                      <td className="text-center">Rs36,738</td>
                    </tr>
                    <tr>
                      <td>Minerva Das</td>
                      <td>Karnataka</td>
                      <td>Bangalore</td>
                      <td className="text-center">Rs23,789</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Goa</td>
                      <td>Margao</td>
                      <td className="text-center">Rs56,142</td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Tamil Nadu</td>
                      <td>Madurai</td>
                      <td className="text-center">Rs38,735</td>
                    </tr>
                    <tr>
                      <td>Shibani Pradhan</td>
                      <td>Odisha</td>
                      <td>Cuttack</td>
                      <td className="text-center">Rs63,542</td>
                    </tr>
                    <tr>
                      <td>Sunil Mishra</td>
                      <td>Madhya Pradesh</td>
                      <td>Indore</td>
                      <td className="text-center">Rs78,615</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
