import React from 'react';
import AcceptanceLetterText from './AcceptanceLetterText';
import RejectionLetterText from './RejectionLetterText';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  };

  handleCheckboxChange(event) {
    this.setState({ accepted: !this.accepted })
  }


  render() {

    return (
      <div>
      <div>
      <label className="addressStyles">Addressee: </label>
      <input type="text"/>
      <button type="button" className="button" >Accepted</button>
      <button type="button"  className="button">Rejected</button>
      </div>
        <div className="letter-body">
          <div className="small-12 small-centered text-center columns">
            <input type="checkbox" />
            <label>
              <h5>Rejected?</h5>
            </label>
          </div>
          <img src="https://vignette.wikia.nocookie.net/harrypotter/images/a/ae/Hogwartscrest.png/revision/latest/scale-to-width-down/350?cb=20110806202805"/>
          <h1>HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY</h1>
          <br />
          <h3 id="headmaster-name">Headmaster: Albus Dumbledore</h3>
          <p id="merlin-order">
            (Order of Merlin, First Class, Grand Sorc., Chf. Warlock, Supreme Mugwump, International Confed. of Wizards)
          </p>
          <br />
          <p>Dear Addressee,</p>
          <div>
            <AcceptanceLetterText />
            // You'll need to change this to show either the AcceptanceLetterText or RejectionLetterText when the user toggles the checkbox!
          </div>
          <br />
          <p>Yours sincerely,</p>
          <h3>Minerva McGonagall</h3>
          <h3>Deputy Headmistress</h3>
        </div>
      </div>
    );
  };
};

export default App;
