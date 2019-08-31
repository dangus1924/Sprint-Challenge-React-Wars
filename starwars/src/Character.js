import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, } from 'reactstrap';
const Character = (props) => (
    <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
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
  );



    
export default Character