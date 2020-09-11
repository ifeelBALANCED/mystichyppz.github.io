import React from 'react';


export default class ToDoFilter extends React.Component {
  buttonTexts = ['All', 'Active', 'Done'];

  render() {
    const buttonElements = this.buttonTexts.map((buttonText) => {
      const lowerCaseButtonText = buttonText.toLowerCase();
      const classes = `btn ${this.props.filterType === lowerCaseButtonText ? 'btn-info' : 'btn-outline-info'}`;

      return (
        <button
          type="button"
          className={classes}
          onClick={() => this.props.onFilterChange(lowerCaseButtonText)}
          key={lowerCaseButtonText}
        >{buttonText}</button>
      );
    });

    return (
      <div className="btn-group ml-3" role="group" aria-label="To-Do List Filter">
        {buttonElements}
      </div>
    );
  }
};
