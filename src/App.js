import React from 'react';
import './App.css';
import { ParentComponent } from './ParentChild';

class App extends React.Component {

  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    console.log('render')
    return (
      <div className="App" style={{ background: "lightgreen" }}>
        <h1 style={{ marginTop: '5%' }}>App Component</h1>
        <ParentComponent h1={"Parent Heading From App"} childHeading={"1st Child Heading"} />
        <ParentComponent h1={"Parent 2"} childHeading={"2"} />
        <ParentComponent h1={"Parent 3"} childHeading={"3"} />
      </div>
    )
  }

}

export default App;
