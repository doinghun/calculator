import React from 'react';

class KeyPadComponent extends React.Component {
    
    render() {
        return(
            <div className="buttons">
                <button className = "ui button" name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                {/* <Key name="(" onClick={this.props.onClick} /> */}
                <button className = "ui button" name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button className = "ui button" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button className = "ui button" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br />
                
                <button className = "ui button" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button className = "ui button" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button className = "ui button" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button className = "ui button" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>

                <button className = "ui button" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button className = "ui button" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button className = "ui button" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button className = "ui button" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button className = "ui button" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button className = "ui button" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button className = "ui button" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button className = "ui button" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>

                <button className = "ui button" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button className = "ui button" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button className = "ui button" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button className = "ui button" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
            </div>
        );
    }
}

const Key = props => <button className = "ui button" name={props.name} onClick={e => props.onClick(e.target.name)}>{props.name}</button>

export default KeyPadComponent;