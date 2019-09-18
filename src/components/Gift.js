import React from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button
} from 'react-bootstrap';

class Gift extends React.Component {
  state = { person: '', present: '' };
  render() {
    return (
      <div className="gift">
        <Form>
          <FormGroup>
            <FormLabel>Person</FormLabel>
            <FormControl
              onChange={e => this.setState({ person: e.target.value })}
              className="input-person"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Present</FormLabel>
            <FormControl
              className="input-present"
              onChange={e => this.setState({ present: e.target.value })}
            />
          </FormGroup>
        </Form>
        <Button
          className="btn-remove"
          onClick={() => this.props.removeGift(this.props.gift.id)}
        >
          Remove Gift
        </Button>
      </div>
    );
  }
}

export default Gift;
