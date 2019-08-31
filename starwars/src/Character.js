import React from 'react';
import styled from 'styled-components';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, } from 'reactstrap';

const Pic = styled.img`
width 200px;
margin: auto;
`

function Character(props){
    return(
    <div>
      <Card>
        <Pic top width="50%" src="https://www.digitalwallpaper4free.com/wp-content/uploads/movies/281115/Star%20Wars%20Episode%204%20Leia%20Organa%20And%20Storm%20Troopers%20002.jpg" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>Light</CardSubtitle>
          <CardText>
            Birth Year: {props.birth_year},
            eye color: {props.eye_color},
            gender: {props.gender},
            hair color: {props.hair_color},
            height: {props.height},
            skin color: {props.skin_color}
          </CardText>          
        </CardBody>
      </Card>
    </div>
    )
};



    
export default Character