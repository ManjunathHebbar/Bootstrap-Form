import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export default class FormExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated:false
    }
  }

  handleSubmit = (event) => {
    console.log(event.currentTarget);
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
     
      this.setState(
      {validated:false}
      );  
    }
    else {
    this.setState(
    {validated:true}
    );
  }
};

render(){

  const {validated} = this.state;
  console.log(validated);

  return (
    <Container>
      <h2>Billing Address</h2>
      <Row>
        <Form className="col-8" noValidate validated={validated} onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} className="col-6" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control 
                 required type="text" 
                 placeholder="First name" 
                 defaultValue="Manjunath"/>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} className="col-6" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control 
               required type="text"
               placeholder="Last name" 
               defaultValue="Hebbar"/>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Group as={Col} controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="text" placeholder="Username" aria-describedby="inputGroupPrepend" required />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formGroupEmail">
            <Form.Label><div>Email address (optional)</div></Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" required />
            <Form.Control.Feedback type="invalid">
                Please Enter Address.
              </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2 (optional)</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Group controlId="formGridCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control as="select" required>
              <option>Choose...</option>
              <option>India</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
                Please select country.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formGridsate">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" required>
              <option>Choose...</option>
              <option>Karnataka</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
                Please select state.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control required/>
            <Form.Control.Feedback type="invalid">
                Please enter zip code.
            </Form.Control.Feedback>
          </Form.Group><hr size="30px" />

          <Form.Group>
            <div key={'custom-checkbox1'} className="mb-3">
              <Form.Check custom type={'checkbox'} id={'custom-checkbox'} label={'Shipping address is the same as my billing address'} />
            </div>
          </Form.Group>

          <Form.Group>
            <div key={'custom-checkbox2'} className="mb-3">
              <Form.Check custom type={'checkbox'} id={'custom-checkbox2'} label={'Save this information for next time'} />
            </div><hr size="30px" />
          </Form.Group>

          <fieldset>
            <Form.Group>
              <Form.Check custom type={'radio'} id={'custom-radio1'} name="formHorizontalRadios" label={'Credit card'} />

              <Form.Check custom type={'radio'} id={'custom-radio2'} name="formHorizontalRadios" label={'Debit card'} />

              <Form.Check custom type={'radio'} id={'custom-radio3'} name="formHorizontalRadios" label={'Paypal'} />
            </Form.Group>
          </fieldset><hr size="30px" />

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Name on card</Form.Label>
            <Form.Control />
            <Form.Control.Feedback type="invalid">
                Please Enter name as on your card.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Credit card number</Form.Label>
            <Form.Control />
            <Form.Control.Feedback type="invalid">
                Please Enter credit card number.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Expiration</Form.Label>
            <Form.Control.Feedback type="invalid">
                Please Enter card Expiration details.
            </Form.Control.Feedback>
            <Form.Control />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>CVV</Form.Label>
            <Form.Control />
            <Form.Control.Feedback type="invalid">
                Please Enter CVV.
            </Form.Control.Feedback>
          </Form.Group>

          <Button className="col-12" type="submit">Continue to checkout</Button>
        </Form>
      </Row>
    </Container>
    );
  }
}