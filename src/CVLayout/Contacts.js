import React from 'react'
import { List, Icon, Button } from 'semantic-ui-react'

export default function Contacts(props) {
  return (
    <List>
      <List.Item>
        <Button color='teal' as='a' target='_blank'
          href='//alphara.github.io'
        >
          <Icon name='globe' />
          Website
        </Button>
      </List.Item>

      <List.Item>
        <Button color='grey' as='a' target='_blank'
          href='//github.com/alphara'
        >
          <Icon name='github' />
          GitHub
        </Button>
      </List.Item>

      <List.Item>
        <Button color='linkedin' as='a' target='_blank'
          href='//linkedin.com/in/artem-arakcheev'
        >
          <Icon name='linkedin' />
          LinkedIn
        </Button>
      </List.Item>

      <List.Item>
        <Button color='twitter' as='a' target='_blank'
          href='//twitter.com/alphara'
        >
          <Icon name='twitter' />
          Twitter
        </Button>
      </List.Item>

      <List.Item>
        <Button color='facebook' as='a' target='_blank'
          href='//facebook.com/artarakcheev'
        >
          <Icon name='facebook' />
          Facebook
        </Button>
      </List.Item>

      <List.Item>
        <Button color='yellow' as='a' target='_blank'
          href='mailto:artarakcheev@gmail.com'
        >
          <Icon name='mail'/>
          Email
        </Button>
      </List.Item>

      <List.Item as='p'>
        <Button color='black' as='a' target='_blank'
          href='tel:+5521969676369'
        >
          <Icon name='phone' />
          +55 (21) 96967-6369
        </Button>
      </List.Item>
    </List>
  );
}
