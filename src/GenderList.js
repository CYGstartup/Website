import React, { Component } from 'react';
import GenderEntry from './GenderEntry';

class GenderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    }
    this.select = this.select.bind(this);
  }
  
  select(e, gender) {
    this.setState({
      selected: gender
    });
  }
  
  render() {
    let genders = [
      {name: 'female', available: true},
      {name: 'male', available: true},
      {name: 'others', available: false}
    ];
    
    //qutebrowser easter egg
    if (navigator.userAgent.indexOf('qutebrowser') !== -1) {
      genders = [{ name: 'you are a hairy, browser', available: true }].concat(genders.map(g => { return { name: g.name, available: false }} ));
    }
    
    return (
      <div className="genderList">
        {
          genders.map((gender) => {
            const {name, available} = gender;
            return (
              <GenderEntry
                key={name}
                name={name}
                available={available}
                select={this.select}
                selected={name === this.state.selected} />
            )
          })
        }
      </div>
    );
  }

}

export default GenderList;