import React from 'react'
import { List, Icon, Button } from 'semantic-ui-react'

export default function Contacts(props) {
  return (
    <List horizontal>
      <List.Item>
      </List.Item>

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
        <Button color='blue' as='a' target='_blank'
          href='https://www.kaggle.com/arakcheev'
        >
          <Icon name='kaggle' />
          Kaggle
        </Button>
      </List.Item>

      <List.Item>
        <Button color='orange' as='a' target='_blank'
          href='https://stackoverflow.com/users/3069279/alphara'
        >
          <Icon name='stackoverflow' />
          Stack Overflow
        </Button>
      </List.Item>

      <List.Item>
        <Button color='grey' as='a' target='_blank'
          href='https://angel.co/artem-arakcheev'
        >
          <Icon name='angellist' />
          AngelList
        </Button>
      </List.Item>

      <List.Item>
        <Button color='red' as='a' target='_blank'
          href='https://www.meetup.com/arakcheev/'
        >
          <Icon name='meetup' />
          Meetup
        </Button>
      </List.Item>

      <List.Item>
        <Button color='youtube' as='a' target='_blank'
          href='https://www.youtube.com/c/ArtemArakcheev'
        >
          <Icon name='youtube' />
          YouTube
        </Button>
      </List.Item>

      <List.Item>
        <Button color='google plus' as='a' target='_blank'
          href='https://plus.google.com/+ArtemArakcheev'
        >
          <Icon name='google plus' />
          Google+
        </Button>
      </List.Item>

      <List.Item>
        <Button color='pinterest' as='a' target='_blank'
          href='https://pinterest.com/artarakcheev/'
        >
          <Icon name='pinterest' />
          Pinterest
        </Button>
      </List.Item>

      <List.Item>
        <Button color='instagram' as='a' target='_blank'
          href='https://www.instagram.com/artarakcheev/'
        >
          <Icon name='instagram' />
          Instagram
        </Button>
      </List.Item>

      <List.Item>
        <Button color='grey' as='a' target='_blank'
          href='https://www.mixcloud.com/arakcheev/'
        >
          <Icon name='mixcloud' />
          Mixcloud
        </Button>
      </List.Item>

      <List.Item>
        <Button color='orange' as='a' target='_blank'
          href='https://soundcloud.com/alphara-1'
        >
          <Icon name='soundcloud' />
          SoundCloud
        </Button>
      </List.Item>

      <List.Item>
        <Button color='lignt blue' as='a' target='_blank'
          href='skype:hahumor'
        >
          <Icon name='skype' />
          Skype
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
