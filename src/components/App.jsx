import React from 'react'
import Calender from './Calender'
import "../css/app.css"

export default function App() {
  return (
    <>
      <Calender />
    </>
  )
}

// import React from 'react'

// const options = [
//   {value:1, label:"jan"},
//   {value:2, label:"2an"},
//   {value:4, label:"4an"},
// ]
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fruit: "banana",
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     console.log("Fruit Selected!!");
//     this.setState({ fruit: e.target.value });
//   }

//   render() {
//     return (
//       <div id="App">
//         <div className="select-container">
//           <select value={this.state.fruit} onChange={this.handleChange}>
//             {options.map((option) => (
//               <option value={option.value}>{option.label}</option>
//             ))}
//           </select>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;