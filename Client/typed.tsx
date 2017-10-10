import * as React from "react"
import * as ReactDOM from "react-dom"

type SampleState = { counter1:number, counter2:number }
type SampleProps = {  }
export class Sample extends React.Component<SampleProps, SampleState> {
  constructor(props, context) {
    super(props,context)

    this.state = { counter1:0, counter2:0 }
  }

  render() {
    return <div>
        <Counter counter={this.state.counter1}
          increment={() => this.setState({...this.state, counter1: this.state.counter1+1})} />
        <Counter counter={this.state.counter2}
          increment={() => this.setState({...this.state, counter2: this.state.counter2+1})} />
      </div>
  }
}

type CounterState = { }
type CounterProps = { counter:number, increment:() => void }
export class Counter extends React.Component<CounterProps, CounterState> {
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
