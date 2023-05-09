import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: "Enter your [bold]text[/bold] here",
    };
  }

  render() {
    const placeholderParts = this.state.placeholder.split(
      /(\[bold\]|\[\/bold\])/
    );
    return (
      <textarea
        placeholder={placeholderParts.map((part, i) => {
          if (part === "[bold]") {
            return <span key={i} style={{ fontWeight: "bold" }} />;
          } else if (part === "[/bold]") {
            return "";
          } else {
            return part;
          }
        })}
      />
    );
  }
}

export default MyComponent;
