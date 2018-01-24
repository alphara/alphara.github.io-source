import React from 'react'
import {
  Item
} from 'semantic-ui-react'

import ImgTODO from './img/TODO.png'

export default function Projects(props) {
  return (
    <Item.Group>
      <Item>
        <Item.Image size='small' src={ImgTODO} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Flag">🏁 </span>
            WORKING PROJECTS
          </Item.Header>
          <Item.Description>
            Dashboard for Speech-To-Text platform
            Automatic speech recognition system
            TrafficProtector SaaS
            Cloud-based interactive media platform NPTV
            Web elections
            TV-broadcasting from Olympic games in Sochi, 2014
            Digital video recorders Tral-1, Tral-3, Tral-5, Tral-7
            Automated parking access control Tral-Parking
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='small' src={ImgTODO} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Rocket">🚀 </span>
            STUDYING PROJECTS
          </Item.Header>
          <Item.Description>
            Sudoku AI solver
            AI Game-Playing Agent
            Planning Search
            Sign Language Recognizer
            Video Object Classifier (dog breed)
            Time Series Predictor (stock prices)
            Text Generation
            Machine Translation 
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='small' src={ImgTODO} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Medal">🥇 </span>
            WINNER OF PAYPAL HACKATHON
          </Item.Header>
          <Item.Description>
            Moscow, 2014
            Smart Skateboard IOT
          </Item.Description>
        </Item.Content>
      </Item>

    </Item.Group>
  );
}
