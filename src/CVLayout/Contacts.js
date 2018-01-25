import React from 'react'
import { List, Icon } from 'semantic-ui-react'

export default function Contacts(props) {
  return (
    <List>
      <List.Item as='a' href='//alphara.github.io' target='_blank'>
        <Icon name='globe' size='large' />
        Website
      </List.Item>
      <List.Item as='a' href='//github.com/alphara' target='_blank'>
        <Icon name='github' size='large' />
        GitHub
      </List.Item>
      <List.Item as='a' href='//linkedin.com/in/artem-arakcheev' target='_blank'>
        <Icon name='linkedin' size='large' />
        LinkedIn
      </List.Item>
      <List.Item as='a' href='//twitter.com/alphara' target='_blank'>
        <Icon name='twitter' size='large' />
        Twitter
      </List.Item>
      <List.Item as='a' href='//facebook.com/artarakcheev' target='_blank'>
        <Icon name='facebook' size='large' />
        Facebook
      </List.Item>
      <List.Item as='a' href='mailto:artarakcheev@gmail.com' target='_blank'>
        <Icon name='mail' size='large' />
        Email
      </List.Item>
      <List.Item as='p'>
        <Icon name='phone' size='large' />
        +55 (21) 96967-6369
      </List.Item>
    </List>
  );
}
