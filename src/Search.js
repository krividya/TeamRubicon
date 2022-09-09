import React, {Component} from "react";
import Result from './Result.js'

export default class Search extends Component{
  constructor(props){
    super(props);
    this.state={
      zipcode: '',
      choice: 'Choose Resource Type Required',
      zipcodePast: '',
      pastChoice: 'Choose Resource Type Required',
      check:false,
      value:false,
      inputClass:'textbox',
      className:'categories'
    };
    this.handleSelect =this.handleSelect.bind(this);
    this.updateZipcode =this.updateZipcode.bind(this);
    this.handleSearch =this.handleSearch.bind(this);
  }
  handleSelect(event) {
    this.setState({
    choice: event.target.value,
   // check:false
  });
  }

  updateZipcode(event) {
    this.setState ({
      zipcode: event.target.value,
   //   check:false
    });
  }
  handleSearch(event) {
    event.preventDefault()
    if(this.state.zipcode === '' || this.state.choice === 'Choose Resource Type Required'){
      this.setState({
        check:false,
        value:true,
      });
      if(this.state.zipcode === ''){
        this.setState({
          inputClass:'invalid'
        });
      }
      else{
        this.setState({
          inputClass:'textbox'
        });
      }
      if(this.state.choice === 'Choose Resource Type Required'){
        this.setState({
          className:'invalidOption'
        });
      }
      else{
        this.setState({
          className:'categories'
        });
      }
    } else{
      this.setState({
        check:true,
        value:false,
        zipcodePast: this.state.zipcode,
        pastChoice: this.state.choice,
        inputClass:'textbox',
        className:'categories'
      });
    }
  }
  handleEmpty(event) {
    return(
      console.log("here3"),
      <div
      className="error-msg"
      style={{
        display: this.state.value? '' : 'none',
      }}>
       <i class="fa fa-times-circle"></i>
        Please fill in all the fields!
    </div>
    );
  }

  render() {
    return (
      <div>
      <h3 className="title">How Can I Help Today? </h3>
      <div className ="center">
        {this.handleEmpty()}
        <form className="form-inline">
          <div className="item">
            <div className = {this.state.className}>
              <div className = "select">
        <select
          value={this.state.choice} onChange={this.handleSelect}>
          <option disabled> Choose Resource Type Required </option>
          <option> Homeless Shelters </option>
          <option>Food Banks</option>
          <option>Food Pantries</option>
          <option>Resume Services</option>
          <option>Vaccine Clinics</option>
        </select>
        </div>
        </div>
        </div>
        <div className="item">
          <input className={this.state.inputClass} placeholder="Zipcode" type="text" onChange={this.updateZipcode} value={this.state.zipcode}/>
          </div>
          <button className="search-button"
                    type="submit"
                    onClick={this.handleSearch}>Search</button>
        </form>
      </div>
      {this.state.check && <Result choice={this.state.pastChoice} zipcode={this.state.zipcodePast}/>
        }
      </div>
    )
  }
}
//don't enter all the fields
//the button situation
