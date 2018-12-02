import React, { Component } from 'react'
import PropTypes from 'prop-types';

class DynamicInput extends Component {
  render() {
    
    return (
      <div>
          <h3 htmlFor={this.props.className}>{this.props.title}</h3> 
        {
            this.props.array.map((val, index)=>{
                let id = `${this.props.item}-${index}`
                return (
                    <div key={index}>
                        <label htmlFor={id}>{`${this.props.item} #${index + 1}`}</label>
                        <input
                            type="text"
                            name={id}
                            data-id={index}
                            id={id}
                            size="50"
                            className={this.props.className}
                        />
                    </div>
                )
            })
        }
        <button type="button" name={this.props.add} onClick={this.props.function}>ADD {this.props.item.toUpperCase()}</button>
        <button type="button" name={this.props.remove} onClick={this.props.function}>REMOVE LAST</button>
      </div>
    )
  }
}

DynamicInput.propTypes = {
    title:PropTypes.string.isRequired,
    add:PropTypes.string.isRequired,
    remove:PropTypes.string.isRequired,
    function:PropTypes.func.isRequired,
    item:PropTypes.string.isRequired,
    className:PropTypes.string.isRequired,
    array:PropTypes.arrayOf(PropTypes.string).isRequired
  };

export default DynamicInput;