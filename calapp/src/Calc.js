import React from "react";
class Calc extends React.Component {

    constructor() {
        super();
        this.state = ({
            val: '',
            sign: '',
            first: 0
        })
    }

    getdata = (e) => {
        this.setState({ val: this.state.val += e.target.value })
    }

    getSign = (e) => {
        this.setState({ first: this.state.val })

        if (e.target.value == '+') {
            this.setState({ sign: e.target.value })
        }
        if (e.target.value == '-') {
            this.setState({ sign: e.target.value })
        }
        if (e.target.value == '*') {
            this.setState({ sign: e.target.value })
        }
        if (e.target.value == '/') {
            this.setState({ sign: e.target.value })
        }

        this.setState({ val: '' })
    }

    getAns = () => {
        if (this.state.sign == '+') {
            var ans = parseInt(this.state.first) + parseInt(this.state.val)
        }
        if (this.state.sign == '-') {
            var ans = parseInt(this.state.first) - parseInt(this.state.val)
        }
        if (this.state.sign == '*') {
            var ans = parseInt(this.state.first) * parseInt(this.state.val)
        }
        if (this.state.sign == '/') {
            var ans = parseInt(this.state.first) / parseInt(this.state.val)
        }

        this.setState({ val: ans })
    }

    getClr = () => {
        this.setState({ val: '' })
    }

    getDel = () => {
        this.setState({ val: this.state.val.slice(0, -1) })
    }

    render() {
        return (
            <>

                <div className="display">
                    <input type="text"
                        value={this.state.val}
                        placeholder="0"
                    // onChange={(e) => this.setState(e.target.value)}
                    />
                </div>

                <div>
                    <button onClick={this.getClr}>C</button>
                    <button onClick={this.getDel}>DEL</button>
                    <button value={'%'} onClick={this.getSign}>%</button>
                    <button value={'/'} onClick={this.getSign}>/</button>

                    <br />

                    <button value={'7'} onClick={this.getdata}>7</button>
                    <button value={'8'} onClick={this.getdata}>8</button>
                    <button value={'9'} onClick={this.getdata}>9</button>
                    <button value={'*'} onClick={this.getSign}>*</button>

                    <br />

                    <button value={'4'} onClick={this.getdata}>4</button>
                    <button value={'5'} onClick={this.getdata}>5</button>
                    <button value={'6'} onClick={this.getdata}>6</button>
                    <button value={'-'} onClick={this.getSign}> -</button>

                    <br />

                    <button value={'1'} onClick={this.getdata}>1</button>
                    <button value={'2'} onClick={this.getdata}>2</button>
                    <button value={'3'} onClick={this.getdata}>3</button>
                    <button value={'+'} onClick={this.getSign}> +</button>

                    <br />

                    <button value={'0'} onClick={this.getdata}>0</button>
                    <button value={'00'} onClick={this.getdata}>00</button>
                    <button value={'.'} onClick={this.getdata}>.</button>
                    <button value={'='} onClick={this.getAns}>=</button>
                </div >
            </>
        )
    }
}

export default Calc;
