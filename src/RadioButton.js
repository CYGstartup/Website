import React, {Component} from 'react';

class RadioButton extends Component {
  render() {
    const {checked} = this.props;
    let classNameArray = ['radioButton'];
    classNameArray.push(checked ? 'checked' : 'unchecked');
    const classNames = classNameArray.join(' ');
    return (
      <div className={classNames}></div>
    );
  }
}

export default RadioButton;