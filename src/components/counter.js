import React, { Component } from 'react'

class counter extends Component {

constructor(props){
    super(props)
    this.state = {
        count:0

    }
}

increment(){
    this.setState({
    count: this.state.count + 1
    })
    console.log(this.state.count)
}

  render() {
    return (
      <div>
        <div> 
        Count - {this.state.count +1}
        <button onClick={() => this.increment()}> increment</button>
        </div>
      </div>
    )
  }
}

export default counter
