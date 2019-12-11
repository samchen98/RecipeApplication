import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import carrot from "./photos/carroticon.png"

export  class Resources extends React.Component {
    constructor(props){
        super(props);
      
    }
   


    render() {
        return (
            <Map
              google={this.props.google}
              zoom={16}
              style={mapStyles}
              initialCenter={{ lat: 35.911568, lng: -79.050796}}
            >
              <Marker position={{ lat: 35.911568, lng: -79.050796}}
              style={markerStyle} 
              icon= {carrot}/>
              <Marker position={{ lat: 35.911631, lng: -79.048901}} />
            </Map>
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