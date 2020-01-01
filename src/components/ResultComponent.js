import React from 'react';

class ResultComponent extends React.Component {
    render() {
        let {result} = this.props; // data received from parent class
        return (
            <div className="result">
                <p>{result}</p>
            </div>
        );
    } 
}

export default ResultComponent