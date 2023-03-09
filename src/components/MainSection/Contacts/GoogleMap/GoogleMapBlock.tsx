import React from 'react';
import styled from "styled-components";
import GoogleMapReact from 'google-map-react';
import {MarkerOnMap} from "./MarkerOnMap";
import {API_KEY} from "../../../../api/API_KEY";


export const GoogleMapBlock = () => {

        const defaultProps = {
            center: {
                lat: 41.816631,
                lng: 41.777051
            },
            zoom: 17
        }

    return (
        <MapContainer>
            <GoogleMapReact bootstrapURLKeys ={{key:API_KEY as string}} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom} yesIWantToUseGoogleMapApiInternals>
                <MarkerOnMap text={"Pontus"} lat={41.816654} lng={41.776931} />
            </GoogleMapReact>
        </MapContainer>
    );
};

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  background: #61dafb;
  border: 1px solid #858282;
`