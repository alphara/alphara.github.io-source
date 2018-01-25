import React from 'react'
import {
  Item, Divider, List
} from 'semantic-ui-react'

import Course from './Course'

import ImgTODO from './img/TODO.png'

export default function Education(props) {
  return (
    <Item.Group>

      <Course
        image={ImgTODO}
        icon='👨🏻‍🎓 '
        degree='Artificial Intelligence Engineer'
        school='Udacity'
        location='Online'
        dates='Jul, 2017 - Jan, 2018'
      >
        Global innovations in the field of artificial intelligence (AI)
        are going to redefine virtually every aspect of our lives.
        <br />
        <List as='ul'>
          <List.Header as='h4'>
            Projects:
          </List.Header>
          <List.Item as='li'>
            Sudoku AI solver
          </List.Item>
          <List.Item as='li'>
            AI Game-Playing Agent
          </List.Item>
          <List.Item as='li'>
            AI Game-Playing Agent
          </List.Item>
          <List.Item as='li'>
            Planning Search
          </List.Item>
          <List.Item as='li'>
            Sign Language Recognizer
          </List.Item>
          <List.Item as='li'>
            Video Object Classifier (dog breed)
          </List.Item>
          <List.Item as='li'>
            Time Series Predictor (stock prices)
          </List.Item>
          <List.Item as='li'>
            Text Generation
          </List.Item>
          <List.Item as='li'>
            Machine Translation
          </List.Item>
          <List.Item as='li'>
            DNN Speech Recognizer
          </List.Item>
          <List.Item as='li'>
            Facial Keypoint Detection and Real-time Filtering
          </List.Item>
        </List>
      </Course>
      <Divider section />

      <Course
        image={ImgTODO}
        icon='👨🏻‍🎓 '
        degree='Software Engineer'
        school='National Research University Of Electronic Technology'
        location='Zelengorad, Russia'
        dates='Sep, 2002 - Jul, 2007'
      >


        <List as='ul'>
          <List.Item as='li'>
            Master in Computer Science (MSc) degree equivalent.
          </List.Item>
          <List.Item as='li'>
            Program 220400 "The Software of Computer facilities and the Automated Systems".
          </List.Item>
          <List.Item as='li'>
            Courseworks:
            <List.List as='ul'>
              <List.Item as='li'>
                Marketing basics
              </List.Item>
              <List.Item as='li'>
                Basics of electrical engineering and circuit theory
              </List.Item>
              <List.Item as='li'>
                Engineering and computer graphics
              </List.Item>
              <List.Item as='li'>
                Fundamentals of metrology
              </List.Item>
              <List.Item as='li'>
                Cybersecurity
              </List.Item>
              <List.Item as='li'>
                Numerical methods
              </List.Item>
              <List.Item as='li'>
                Software and automated systems
              </List.Item>
            </List.List>
          </List.Item>
          <List.Item as='li'>
            Capstone project "Development of Digital Video Recorder"
          </List.Item>
        </List>
      </Course>

    </Item.Group>
  );
}
