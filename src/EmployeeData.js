import './App.css';
import React, { Component } from 'react'
import EmployeeInfo from './EmployeeInfo';



export default class App extends Component {

  
  state={
    name:"",
    department:"",
    rating:"",
    click: true,
    data:[]
  }
  
  goChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
    this.setState({[event.target.department]:event.target.value})
    this.setState({[event.target.rating]:event.target.value})
  }

  changeContext = ()=>{
    this.setState({click: !this.state.click})
  }

  Clickme=()=>{
    const obj={
      name:this.state.name,
      department:this.state.department,
      rating:this.state.rating
    }
    this.state.data.push(obj);
    this.setState({data:this.state.data, click:false, name:"",department:"",rating:""})
  }
  render() {
    return (
    <>
    {this.state.click?
    
      <>

      
      <div className='text'>
     <h1 className='head'>EMPLOYEE FEEDBACK FORM</h1>
    
      <div className='data1'>
      <div className='text2'> Name:</div><input className='box' type="text" name="name" onChange={this.goChange} value={this.state.name}/>
      </div>

      <div className='data1' >
      <div className='text2'>  Department:</div><input className='box' type="text" name="department" onChange={this.goChange} value={this.state.department}/>
      </div>

      <div className='data1'>
      <div className='text2'>  Rating:</div><input className='box' type="text" name="rating" onChange={this.goChange} value={this.state.rating}/>
      </div>


      <button className='button' onClick={this.Clickme}>Submit</button>

    </div>









    </>
    :
    <EmployeeInfo value={this.state.data} render={this.changeContext}/>
  }
  </>    
    )
  }
}
// export default EmployeeData;

