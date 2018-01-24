import React from 'react'
import {
  Icon, List
} from 'semantic-ui-react'

const listIcon = 'heartbeat'

export default function SkillList(props) {
  return (
    <List.Item>
      <List.Header>{props.name}</List.Header>
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
