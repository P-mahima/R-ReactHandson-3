import { Component } from "react";
import './App.css'

class EmployeeInfo extends Component {
  // constructor(props){
  //     super(props)
  // }
  render() {
    return (


      <div className="reverse">
        <div className='bigbox'>
          {this.props.value.map((item) => {
            return (
              <h3 className='push'> Name:{item.name}|| Department:{item.department}|| Rating:{item.rating}</h3>
            )
          })
          }
        </div>
        <div>
          <button className='button1' onClick={this.props.render}>GO BACK</button>
        </div>
      </div>
    )
  }
}
export default EmployeeInfo;