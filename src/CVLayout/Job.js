import React from 'react'
import {
  Item, Segment, Header, Icon, Button
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
        { props.href &&
          <Item.Content>
            <Button basic floated='right' as='a' target='_blank'
              href={props.href}
            >
              <Icon name='linkify' />
              Website
            </Button>
          </Item.Content>
        }
      </Item.Content>
    </Item>
  );
}
