import React from 'react'
import {
  Item, Segment, Header, Icon, Button
} from 'semantic-ui-react'

export default function Course(props) {
  return (
    <Item>
      <Item.Image size='small' src={props.image} />
      <Item.Content>
        <Item.Header>
          <span role='img' aria-label='Student'>{props.icon}</span>
          {props.degree} @ {props.school}
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
        <Item.Extra>
          <Button basic as='a' floated='right' size='medium' target='_blank'
            href={props.href}
          >
            <Icon name='linkify' />
            Read More
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
