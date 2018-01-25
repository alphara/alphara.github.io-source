import React from 'react'
import {
  Item
} from 'semantic-ui-react'

import ImgTODO from './img/TODO.png'
import ImgQuantumComputer from './img/quantum-computer.jpg'

export default function Interests(props) {
  return (
    <Item.Group>
      <Item>
        <Item.Image size='tiny' src={ImgTODO} />
        <Item.Content>
          <Item.Header>
            Traveling
          </Item.Header>
          <Item.Description>
            Traveled in the following countries:
            <span role="img" aria-label="Flag"> 🇧🇷</span> Brazil,
            <span role="img" aria-label="Flag"> 🇵🇦</span> Panama,
            <span role="img" aria-label="Flag"> 🇨🇷</span> Costa Rica,
            <span role="img" aria-label="Flag"> 🇳🇮</span> Nicaragua,
            <span role="img" aria-label="Flag"> 🇵🇪</span> Peru,
            <span role="img" aria-label="Flag"> 🇲🇽</span> Mexico,
            <span role="img" aria-label="Flag"> 🇩🇪</span> Germany,
            <span role="img" aria-label="Flag"> 🇮🇩</span> Indonesia,
            <span role="img" aria-label="Flag"> 🇹🇭</span> Thailand,
            <span role="img" aria-label="Flag"> 🇺🇸</span> USA,
            <span role="img" aria-label="Flag"> 🇹🇷</span> Turkey,
            <span role="img" aria-label="Flag"> 🇺🇦</span> Ukraine,
            <span role="img" aria-label="Flag"> 🇳🇵</span> Nepal,
            <span role="img" aria-label="Flag"> 🇮🇳</span> India,
            <span role="img" aria-label="Flag"> 🇪🇸</span> Spain,
            <span role="img" aria-label="Flag"> 🇪🇬</span> Egypt
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='tiny' src={ImgTODO} />
        <Item.Content>
          <Item.Header>
            Psychology
          </Item.Header>
          <Item.Description>
            Ericksonian Hypnosis (completed course),
            Trance Induction,
            Neuro-Linguistic Programming (completed courses NLP Master Practitioner, NLP Master Practitioner, New Code of NLP),
            Strategy Modeling,
            Holotropic Breathwork,
            Provocative Therapy,
            Thanatotherapy,
            Body Therapy
            Laugther Therapy,
            Humor Therapy,
            Human Design
          </Item.Description>
        </Item.Content>
      </Item>


      <Item>
        <Item.Image size='tiny' src={ImgTODO} />
        <Item.Content>
          <Item.Header>
            Swimming
          </Item.Header>
          <Item.Description>
            I love to swim for miles; I could just go back and forth.
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='tiny' src={ImgTODO} />
        <Item.Content>
          <Item.Header>
            Body practices
          </Item.Header>
          <Item.Description>
            Tensegrity,
            Yoga,
            Dynamic Trance States
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='tiny' src={ImgTODO} />
        <Item.Content>
          <Item.Header>
            Spiritualism
          </Item.Header>
          <Item.Description>
            Mediation,
            Self-Hypnosis,
            Lucid Dreaming,
            Enlightenment
          </Item.Description>
        </Item.Content>
      </Item>
      <Item>
        <Item.Image size='tiny' src={ImgTODO} />
        <Item.Content>
          <Item.Header>
            Acting Skills & Public Performance
          </Item.Header>
          <Item.Description>
            Completed 10-day course "Art of public speaking, presentation, work with the audience",
            Completed 9-months course of acting (include: development of plastics, development of speech and voice, psychotechnics, work with dramaturgy),
            Played in a theatrical performance "Million in the Wedding Basket" in Vysotsky's House on Taganka
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='tiny' src={ImgTODO} />
        <Item.Content>
          <Item.Header>
            Humor & Laughter
          </Item.Header>
          <Item.Description>
            Modeled techniques for creating jokes based on strategies of genius humorists,
            Wrote articles about humor,
            Wrote a book "How to create funny jokes",
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='tiny' src={ImgTODO} />
        <Item.Content>
          <Item.Header>
            Infobusiness
          </Item.Header>
          <Item.Description>
            Conducted an online webinar "How to learn to joke funny" with 50+ participants.
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='tiny' src={ImgTODO} />
        <Item.Content>
          <Item.Header>
            Artificial Super Intelligence
          </Item.Header>
          <Item.Description>
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='tiny' src={ImgQuantumComputer} />
        <Item.Content>
          <Item.Header>
            Quantum computers
          </Item.Header>
          <Item.Description>
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='tiny' src={ImgTODO} />
        <Item.Content>
          <Item.Header>
            Brain-Machine Interfaces
          </Item.Header>
          <Item.Description>
          </Item.Description>
        </Item.Content>
      </Item>


    </Item.Group>
  );
}
