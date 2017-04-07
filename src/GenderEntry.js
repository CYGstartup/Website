import React, { Component } from 'react';
import RadioButton from './RadioButton';

class GenderEntry extends Component {
  
	render() {
		const {name, available, select, selected} = this.props;
    
    let classNameArray = ['genderEntry'];
    
    if (selected)
      classNameArray.push('selected');
    if (!available)
      classNameArray.push('disabled');
    
    const classNames = classNameArray.join(' ');
    
    return (
			<div className={classNames} onClick={(e) => {available && select(e, name)}}>
        <RadioButton checked={selected}/>
				<div className="label">{name}</div>
			</div>
		);
	}
}

export default GenderEntry