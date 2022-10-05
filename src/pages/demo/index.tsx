import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

export interface IDemoOption {
    text?: string;
    className?: string;
    onButtonClick?: () => void;
}

export interface IDemoState {
    enable: boolean;
}

export class Demo extends React.Component<IDemoOption, IDemoState> {
    private readonly _element = (
        <div className={this.props.className}>
            <div className="button" onClick={this.props.onButtonClick}>
                {this.props.text}
            </div>
        </div>
    );
    render() {
        return this._element;
    }
}

ReactDOM.render(<Demo text="Hello Word!"></Demo>, document.getElementById("root"));
