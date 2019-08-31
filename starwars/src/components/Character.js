import React from 'react';
import { Card, Feed } from 'semantic-ui-react'

const Character = (props) => (
    <Card>
        <Card.Header>{props.name}</Card.Header>
        <Feed>
            <Feed.Content>Birth Year: {props.birth_year}</Feed.Content>
            <Feed.Content>eye color: {props.eye_color}</Feed.Content>
            <Feed.Content>gender: {props.gender}</Feed.Content>
            <Feed.Content>hair color: {props.hair_color}</Feed.Content>
            <Feed.Content>height: {props.height}</Feed.Content>
            <Feed.Content>skin color: {props.skin_color}</Feed.Content>
        </Feed>
    </Card>
)

export default Character