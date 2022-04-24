import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { AiFillPhone } from 'react-icons/ai';
import { FaMobileAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Online Pizza Shop</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus mollitia voluptatibus a laboriosam perspiciatis
              aliquam nisi, repudiandae ea, deleniti neque at vitae explicabo
              incidunt accusantium quod accusamus dicta sed. Ea consequatur
              deleniti eius itaque aspernatur dolores accusantium autem
              voluptate, ab alias ullam soluta aliquam maiores quos, laborum
              nostrum vitae illum minus officia assumenda expedita cum tempore?
              Ducimus laborum mollitia quaerat cum porro blanditiis consequuntur
              iure fuga eum, officia inventore praesentium velit delectus rem
              dolor nam deleniti voluptatem? Nam ipsum error molestiae vero,
              nobis aut atque assumenda eum voluptates sint, accusamus optio
              facilis nihil provident soluta aperiam. Aut laborum reprehenderit
              reiciendis velit quae at totam architecto, sit distinctio fugit
              sunt quod itaque error nam sequi, maxime est? Quisquam omnis id
              maxime praesentium veritatis excepturi adipisci dolorem sequi
              placeat vitae itaque aperiam nulla, nemo laborum deleniti aliquid
              hic veniam eligendi rem in explicabo perspiciatis minus maiores.
              Dolorem rerum ipsa repellendus aliquam consequuntur. Quasi ab nam
              quas enim laboriosam animi, eveniet aliquid quisquam quo minima,
              consequuntur doloribus iste rerum nihil, tenetur sed possimus!
              Totam temporibus mollitia quidem maxime ipsa! Velit alias
              consectetur, molestias unde nesciunt illum voluptates quisquam
              vitae excepturi culpa corrupti, tenetur soluta? Asperiores enim,
              quia voluptatum mollitia sapiente in! Amet, modi.
            </p>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>Contact Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><AiFillPhone /></td>
                  <td>Phone</td>
                  <td>0123-123455</td>
                </tr>
                <tr>
                  <td><FaMobileAlt /></td>
                  <td>Call</td>
                  <td>7844123455</td>
                </tr>
                <tr>
                  <td><AiOutlineMail /></td>
                  <td>Email</td>
                  <td>support@email.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image src="images/farmhouse.jpg" style={{width:'100%', height:'60%'}} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
