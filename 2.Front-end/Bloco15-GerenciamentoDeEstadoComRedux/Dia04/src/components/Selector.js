import React from 'react';

class Selector extends React.Component {
  renderOptions = (options) =>
    options.map((option) => (
      <option value={option} key={option}>
        {option}
      </option>
    ));

  render() {
    const { value, onChange, options } = this.props;
    return (
      <span>
        <h1>{`Selected: ${value}`}</h1>
        <select onChange={(e) => onChange(e.target.value)} value={value}>
          {this.renderOptions(options)}
        </select>
      </span>
    );
  }
}

export default Selector;
