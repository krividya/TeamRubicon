import React, {Component} from "react";

export default class Result extends Component{
  constructor(props){
    super(props)
    this.state={
    resources: [
      {
        Name:"Catholic Charities - Naples",
        Address:"3174 E. Tamiami Trial Naples, FL 98007",
        ZipCode:"98007",
        PhoneNumber:"Phone #: (239) - 793 - 0059",
        OpenTimings:"Monday - Friday: 9 AM to 5 PM",
        Link:"https://www.catholiccharitiesusa.org",
        Description:"Please come here if you need food or any resources!",
        Type:"Food Banks"
      },
      {
        Name:"Catholic Charities - Brown",
        Address:"3174 E. Tamiami Trial Naples, FL 98007",
        ZipCode: "98007",
        PhoneNumber:"(239) - 793 - 0059",
        OpenTimings:"Monday - Friday: 9 AM to 5 PM",
        Link:"https://www.catholiccharitiesusa.org",
        Description:"Please come here if you need food or any resources!",
        Type:"Food Banks"
      },
      {
        Name:"Catholic Charities - Brown",
        Address: "3174 E. Tamiami Trial Naples, FL 98007",
        ZipCode:"98007",
        PhoneNumber:"(239) - 793 - 0059",
        OpenTimings:"Monday - Friday: 9 AM to 5 PM",
        Link:"https://www.catholiccharitiesusa.org",
        Description:"Please come here if you need food or any resources!",
        Type:"Food Banks"
      },
    ],
  };
  this.checkResource = this.checkResource.bind(this)
  this.checkResult = this.checkResult.bind(this)
  this.successMessage= this.successMessage.bind(this)
  this.errorMessage = this.errorMessage.bind(this)
  }
  checkResource (resource) {
    console.log("here4")
    if(resource.ZipCode === this.props.zipcode && resource.Type === this.props.choice){
      return true
    }
    return false
  }
  checkResult (){
    console.log("here1")
    for(let resource of this.state.resources){
      if(resource.ZipCode === this.props.zipcode && resource.Type === this.props.choice){
        return true
      }
    }
    return false
}
  successMessage () {
    console.log("here2")
    return (
      <div
        className="success"
        style={{
          display: this.checkResult()? '' : 'none',
        }}>
        <h3>Results for the nearest {this.props.choice} in your area:</h3>
      </div>
    );
  }

  // Showing error message if error is true
  errorMessage () {
    console.log("here3")
    var value = !this.checkResult()
    return (
      <div
        className="error"
        style={{
          display: value? '' : 'none',
        }}>
        <h3>There are no results for {this.props.choice} in your area! </h3>
      </div>
    );
  }
  render() {
  return(
    <div className={this.checkResult()? 'result':'no-result'}>
      <div>
      {this.successMessage()}
      {this.errorMessage()}
      </div>
      <div className="row">
      {
        this.state.resources.map(resource =>(
          this.checkResource(resource) &&
          <div className="column">
            <div className="card">
              <div>
             <h3>{resource.Name}</h3>
             </div>
              <div className='info'>
             <h5>{resource.Address}</h5>
             <h5>{resource.OpenTimings}</h5>
             <h5>{resource.PhoneNumber}</h5>
            <a href={resource.Link}><h5>Click here for more information</h5></a>
             </div>
             </div>
             </div>
        ))
      }
      </div>
    </div>
  );
}
}