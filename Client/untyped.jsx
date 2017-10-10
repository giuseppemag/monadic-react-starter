import * as React from "react"
import * as ReactDOM from "react-dom"

export class Sample extends React.Component {
  constructor(props, context) {
    super(props,context)

    this.state = { counter1:0, counter2:0 }
  }

  render() {
    return <div>
        <Counter counter={this.state.counter1} increment={() =>  {
          if (this.state.counter1 + this.state.counter2 > 10) return
          this.setState(Object.assign({}, this.state, {counter1: this.state.counter1+1}))
        }
          } />
        <Counter counter={this.state.counter2} increment={() =>
          this.setState(Object.assign({}, this.state, {counter2: this.state.counter2+1}))} />
      </div>
  }
}


export class Counter extends React.Component {
  constructor(props, context) {
    super(props,context)

    this.state = {}
  }

  render() {
    return <div>
      Hello world, {this.props.counter} times.
      <button onClick={() => this.props.increment() } >+1</button>
      </div>
  }
}
