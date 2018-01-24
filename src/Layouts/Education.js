import React from 'react'
import {
  Item
} from 'semantic-ui-react'

import ImgTODO from './img/TODO.png'

export default function Education(props) {
  return (
    <Item.Group>

      <Item>
        <Item.Image size='small' src={ImgTODO} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Alumni">👨🏻‍🎓 </span>
            ARTIFICIAL INTELLIGENCE ENGINEER @ UDACITY
          </Item.Header>
          <Item.Description>
            • Online education
            • July 2017 - January 2018
            • Projects:
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
            <span role="img" aria-label="Alumni">👨🏻‍🎓 </span>
            SOFTWARE ENGINEER @ NATIONAL RESEARCH UNIVERSITY OF ELECTRONIC TECHNOLOGY
          </Item.Header>
          <Item.Description>
            • Zelengorad, Russia
            • September 2002 - July 2007
            • Master in Computer Science (MSc) degree equivalent.
            • Program 220400 "The Software of Computer facilities and the Automated Systems".
            • Courseworks: marketing basics, basics of electrical engineering and circuit theory, engineering and computer graphics, fundamentals of metrology, cybersecurity, numerical methods, software and automated systems
            • Capstone project "Development of Digital Video Recorder"
          </Item.Description>
        </Item.Content>
      </Item>

    </Item.Group>
  );
}
