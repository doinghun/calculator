import React from 'react';
import ResultComponent from './ResultComponent';
import KeyPadComponent from './KeyPadComponent';
import DisplayComponent from './DisplayComponent';
import './App.css';
class App extends React.Component {
    state = { result: "" , display: ""}

    onClick = button => {

        if(button === "="){
            this.calculate()
            this.reset()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                display: this.state.display + button
            })
        }
    };

    calculate = () => {
        try {
            this.setState({
                result: (eval(this.state.display) || "")
            })
        }
        catch (err) {
            this.setState({
                result: "error"
            })
        }
    };

    reset = () => {
        this.setState({
            display: ""
        })
    };

    backspace = () => {
        this.setState({
            display: this.state.display.slice(0, -1)
        })
    };

    render(){
        return(
            <div>
                <div className="calculator-body">
                    <h1>Simple calculator</h1>
                    <DisplayComponent display={this.state.display}/>
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }

}

export default App;