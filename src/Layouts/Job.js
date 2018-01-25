import React from 'react'
import {
  Item, Segment, Header, Icon
} from 'semantic-ui-react'

export default function Job(props) {
  return (
    <Item>
      <Item.Image size='small' src={props.image} />
      <Item.Content>
        <Item.Header>
          <span role='img' aria-label='Position'>{props.icon}</span>
          {props.position} @ {props.organization}
        </Item.Header>
        <Item.Meta>
          <Segment basic clearing stacked size='mini'>
            <Header as='h5' floated='left' color='grey'>
              <Icon name='marker' />
              {props.location}
            </Header>
            <Header as='h5' floated='right' color='grey'>
              {props.dates}
              <Icon name='calendar' />
            </Header>
          </Segment>
        </Item.Meta>
        <Item.Description>
          <Segment basic>
            {props.description}
            {props.children}
          </Segment>
        </Item.Description>
      </Item.Content>
    </Item>
  );
}
