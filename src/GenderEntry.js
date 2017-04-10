import React, { Component } from 'react';
import RadioButton from './RadioButton';

class GenderEntry extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      classes: []
    }
    this.click = this.click.bind(this);
  }
  
  click(e) {
    if (this.props.available) {
      this.props.select(e, this.props.name);
    } else {
      let classes = this.state.classes;
      classes = classes.concat(['animated', 'hinge']);
      this.setState({
        classes: classes
      });
    }
  }
  
	render() {
		const {name, available, selected} = this.props;
    
    let classNameArray = this.state.classes.concat(['genderEntry']);
    
    if (selected)
      classNameArray.push('selected');
    if (!available)
      classNameArray.push('disabled');
    
    const classNames = classNameArray.join(' ');
    
    return (
			<div className={classNames} onClick={this.click}>
        <RadioButton checked={selected}/>
				<div className="label">{name}</div>
			</div>
		);
	}
}

export default GenderEntry