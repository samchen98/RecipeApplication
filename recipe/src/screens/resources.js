import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import carrot from "./photos/carroticon.png"

export  class Resources extends React.Component {
    constructor(props){
        super(props);
        this.state = { ingredients: []
        
      }
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.handleChange4 = this.handleChange4.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.movefunction = this.movefunction.bind(this);
      
    }
    movefunction(){

      localStorage.setItem('ingredients', this.state.ingredients);

      console.log("asdfasf")
    }
    handleChange3(){
      var joined = this.state.ingredients.concat("Dill  ", "Pecan ", "Blackberry ");
      this.setState({ ingredients: joined })
    }
    handleChange2(){
      var joined = this.state.ingredients.concat("Strawberry ", "Blueberry ", "Brussel Sprouts ");
      this.setState({ ingredients: joined })
    }
    handleChange4(){
      var joined = this.state.ingredients.concat("Sweet Potato ");
      this.setState({ ingredients: joined })
    }
    handleChange() {
   
      var joined = this.state.ingredients.concat('Carrots ', " Parsley ", "Cilantro ", "Thyme ", "Spinach ", "Rosemary ");
      this.setState({ ingredients: joined })

    }


    render() {
        return (
          <div>
            <div>
             
              {this.state.ingredients}
            </div>
            <div>
               <button onClick={
              this.movefunction
                  }>
                Find Recipes! 
            </button>
            </div>
            <Map
              google={this.props.google}
              zoom={16}
              style={mapStyles}
              initialCenter={{ lat: 35.911568, lng: -79.050796}}
            >
              <Marker position={{ lat: 35.913133, lng: -79.047526}}
              style={markerStyle} 
              icon= {carrot}
              onClick= {
                this.handleChange2
              }
              /> 

              <Marker position={{ lat: 35.912368, lng: -79.046249}}
              style={markerStyle} 
              icon= {carrot}
              onClick= {
                this.handleChange3
              }
              />
              <Marker position={{ lat: 35.910439, lng: -79.048374}}
              style={markerStyle} 
              icon= {carrot}
              onClick= {
                this.handleChange
              }
              />
              <Marker position={{ lat: 35.909208, lng: -79.046471}}
              style={markerStyle} 
              icon= {carrot}
              onClick= {
                this.handleChange4
              }/>
          

         
            </Map>
            </div>
        );
      }
  
    // render () {
    //      return (
    //     <Map
    //       google={this.props.google}
    //       zoom={16}
    //       style={mapStyles}
    //       initialCenter={{ lat: 35.911568, lng: -79.050796}}
    //     />
    // );
    // }    
}


const mapStyles = {
    width: '100%',
    height: '90%',
  };

  
  const markerStyle={
      icon: carrot
  }

export default GoogleApiWrapper({
    apiKey: 'AIzaSyClfR51D0VlDDyVs8TVe-W37OujGk7i3Cw'
  })(Resources);