import React from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';
import { max_number } from '../helper/index';

class App extends React.Component {
  state = { gifts: [] };

  addGift = () => {
    const { gifts } = this.state;

    const ids = this.state.gifts.map(gift => gift.id);

    gifts.push({ id: max_number(ids) + 1 });

    this.setState({ gifts });
  };

  removeGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id);
    this.setState({ gifts });
  };

  renderGifts() {
    const allGifts = this.state.gifts.map(gift => {
      return (
        <div key={gift.id}>
          <Gift gift={gift} removeGift={this.removeGift} />
        </div>
      )
    });
    
    return allGifts
  };

  render() {
    return (
      <div className="">
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {this.renderGifts()}
        </div>
        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </div>
    );
  }
}

export default App;
