import React from 'react'
import {
  Item, Divider, Button, Icon, Image, Modal, Header
} from 'semantic-ui-react'

import ImgTODO from './img/TODO.png'
import ImgTraveling from './img/traveling.jpg'
import ImgPsychology from './img/psychology.jpg'
import ImgSwimming from './img/swimming.jpg'
import ImgBodyPractices from './img/body-practices.jpg'
import ImgSpiritualism from './img/spiritualism.jpg'
import ImgActingSkills from './img/acting-skills.jpg'
import ImgHumor from './img/humor.jpg'
import ImgInfobusiness from './img/infobusiness.jpg'
import ImgMusic from './img/music.jpg'
import ImgMBA from './img/mba.jpg'
import ImgStartup from './img/startup.jpg'
import ImgStartupHowto from './img/big/startup-howto.jpg'
import ImgBlockchain from './img/blockchain.jpg'
import ImgArtificialSuperIntelligence from './img/artificial-super-intelligence.jpg'
import ImgQuantumComputer from './img/quantum-computer.jpg'
import ImgBrainMachineInterfaces from './img/brain-machine-interfaces.jpg'

export default function Interests(props) {
  return (
    <Item.Group>
      <Item>
        <Item.Image size='tiny' src={ImgTraveling} />
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
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgPsychology} />
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
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgSwimming} />
        <Item.Content>
          <Item.Header>
            Swimming
          </Item.Header>
          <Item.Description>
            I love to swim for miles; I could just go back and forth.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgBodyPractices} />
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
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgSpiritualism} />
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
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgActingSkills} />
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
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgHumor} />
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
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgInfobusiness} />
        <Item.Content>
          <Item.Header>
            Infobusiness
          </Item.Header>
          <Item.Description>
            Conducted an online webinar "How to learn to joke funny" with 50+ participants.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgMusic} />
        <Item.Content>
          <Item.Header>
            Music
          </Item.Header>
          <Item.Description>
            I love to listen
            Chillout, Jazz, Downtempo, Trance, Ambient, Rock, Metal,
            Punk, Doom, Samba, Deep House.
            <br />
            <br />
            I play Harmonica and Electric Guitar.
            <br />
            <br />
            Here is my own music
            <br />
            <br />
            <iframe
              width="100%" height="166" scrolling="no" frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/212013785&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
            ></iframe>
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgMBA} />
        <Item.Content>
          <Item.Header>
            MBA
          </Item.Header>
          <Item.Description>
            The Master of Business Administration (MBA) is a master's
            degree in business administration (management).
            <br /><br />
            <Button basic floated='right' as='a' target='_blank'
              href='https://ru.pinterest.com/search/pins/?q=mba'
            >
              <Icon.Group>
                <Icon name='pinterest' />
                <Icon corner name='linkify' />
              </Icon.Group>
              Read more
            </Button>
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgStartup} />
        <Item.Content>
          <Item.Header>
            Startup
          </Item.Header>
          <Item.Description>
            A startup company is an entrepreneurial venture which is
            typically a newly emerged, fast-growing business that aims
            to meet a marketplace need by developing a viable business
            model around an innovative product, service, process or a
            platform.
            <br /><br />
            <Modal closeIcon trigger={
              <Button basic color='teal' floated='left'>
                How to start a Startup
              </Button>
            }>
              <Modal.Header>How to start a Startup</Modal.Header>
              <Modal.Content>
                <Image src={ImgStartupHowto} />
              </Modal.Content>
            </Modal>

            <Button basic floated='right' as='a' target='_blank'
              href='https://ru.pinterest.com/search/pins/?q=startup'
            >
              <Icon.Group>
                <Icon name='pinterest' />
                <Icon corner name='linkify' />
              </Icon.Group>
              Read more
            </Button>
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgBlockchain} />
        <Item.Content>
          <Item.Header>
            Blockchain & Cryptocurrencies
          </Item.Header>
          <Item.Description>
            A blockchain, is a continuously growing list of records,
            called blocks, which are linked and secured using cryptography.
            <br /><br />
            A cryptocurrency is a digital asset designed to work as a
            medium of exchange that uses cryptography to secure its
            transactions, to control the creation of additional units,
            and to verify the transfer of assets.
            <br /><br />
            <Button basic floated='right' as='a' target='_blank'
              href='https://ru.pinterest.com/search/pins/?q=blockchain'
            >
              <Icon.Group>
                <Icon name='pinterest' />
                <Icon corner name='linkify' />
              </Icon.Group>
              Read more
            </Button>
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgArtificialSuperIntelligence} />
        <Item.Content>
          <Item.Header>
            Artificial Superintelligence (ASI)
          </Item.Header>
          <Item.Description>
            Superintelligence as an intellect that is much smarter than the
            best human brains in practically every field, including
            scientific creativity, general wisdom and social skills.
            <br /><br />
            <Button basic floated='right' as='a' target='_blank'
              href='https://en.wikipedia.org/wiki/Superintelligence'
            >
              <Icon.Group>
                <Icon name='wikipedia' />
                <Icon corner name='linkify' />
              </Icon.Group>
              Read more
            </Button>
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgQuantumComputer} />
        <Item.Content>
          <Item.Header>
            Quantum computing
          </Item.Header>
          <Item.Description>
            Whereas common digital computing requires that the data be
            encoded into binary digits (bits), each of which is always
            in one of two definite states (0 or 1), quantum computation
            uses quantum bits, which can be in superpositions of states.
            <br /><br />
            <Button basic floated='right' as='a' target='_blank'
              href='https://en.wikipedia.org/wiki/Quantum_computing'
            >
              <Icon.Group>
                <Icon name='wikipedia' />
                <Icon corner name='linkify' />
              </Icon.Group>
                Read more
            </Button>
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgBrainMachineInterfaces} />
        <Item.Content>
          <Item.Header>
            Brain-Machine Interfaces (BMI)
          </Item.Header>
          <Item.Description>
            Brain–Machine Interface (BMI) is a direct communication pathway
            between an enhanced or wired brain and an external device.
            <br /><br />
            <Button basic floated='right' as='a' target='_blank'
              href='https://en.wikipedia.org/wiki/Brain%E2%80%93computer_interface'
            >
              <Icon.Group>
                <Icon name='wikipedia' />
                <Icon corner name='linkify' />
              </Icon.Group>
                Read more
            </Button>
          </Item.Description>
        </Item.Content>
      </Item>

    </Item.Group>
  );
}
