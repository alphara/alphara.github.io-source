import React from 'react'
import {
  Icon, List
} from 'semantic-ui-react'

const listIcons = ['globe', 'dot circle outline', 'target', 'caret right',
  'heartbeat']
const listIcon = listIcons[Math.floor(Math.random() * listIcons.length)];

export default function SkillList(props) {
  return (
    <List.Item>
      <List.Header>
        <span role="img" aria-label="Emoji">{props.emoji} </span>
        {props.name}
      </List.Header>
      <List.Content>
        <List horizontal>
          <List.Item></List.Item>
          {
            props.skills.map((skill) =>
              <List.Item key={skill}>
                <Icon name={listIcon} />
                {skill}
              </List.Item>
            )
          }
        </List>
      </List.Content>
    </List.Item>
  );
}
