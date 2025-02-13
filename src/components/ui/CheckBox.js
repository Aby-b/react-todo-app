import React, {Component} from 'react';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        };
    }

    handleChange(e) {
        const {checked} = e.target;
        if(checked) {
            const confirmMessage = window.confirm(
                "Are you sure you had completed this task?"
            );

            if (confirmMessage){
                this.setState({checked});
                this.props.onChange(checked);
            } else {
                e.target.checked = false;
            }
        }

    }

    render() {
        return (<input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)}/>);
    }
}

export default CheckBox;