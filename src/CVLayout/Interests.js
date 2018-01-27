import React from 'react'
import {
  Item, Divider, Button, Icon, Image, Modal
} from 'semantic-ui-react'

import ImgTraveling from './img/traveling.jpg'
import ImgPsychology from './img/psychology.jpg'
import ImgSwimming from './img/swimming.jpg'
import ImgBodyPractices from './img/body-practices.jpg'
import ImgSpiritualism from './img/spiritualism.jpg'
import ImgActingSkills from './img/acting-skills.jpg'
import ImgLaughter from './img/laughter.jpg'
import ImgInfobusiness from './img/infobusiness.jpg'
import ImgMusic from './img/music.jpg'
import ImgMBA from './img/mba.jpg'
import ImgStartup from './img/startup.jpg'
import ImgStartupHowto from './img/big/startup-howto.jpg'
import ImgBlockchain from './img/blockchain.jpg'
import ImgArtificialSuperIntelligence from './img/artificial-super-intelligence.jpg'
import ImgQuantumComputer from './img/quantum-computer.jpg'
import ImgBrainMachineInterfaces from './img/brain-machine-interfaces.jpg'
import ImgFraktal from './img/fraktal.jpg'

import PDFBook from './book/how-to-learn-to-joke-funny.pdf'

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
            I traveled in the following countries:
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
            I have studied the approaches of modern psychology:
            Ericksonian Hypnosis;
            Neuro-Linguistic Programming;
            Modeling genius (psycological modeling);
            Holotropic Breathwork;
            Provocative Therapy;
            Thanatotherapy;
            Body Therapy;
            Laugther Therapy;
            Humor Therapy;
            Human Design.
            <br /><br />
            Psychology (psychological modeling) allows us to identify models
            of human skills, strategies, behavior, thinking and intuition.
            The psycological model of human brain can be codded
            in deep learning applications on programming languages.
            We could model real human brain neurons with artificial
            intelligence and neural networks.
            <br /><br />
            I believe that psychological modeling will make a striking
            contribution in development of Self-Developing AI.
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
            I love to swim for miles. Swimming is an all-body exercise.
            A physically demanding combination of cardio and power,
            it works the heart, and the muscles in legs, arms, torso, hips
            and all the body.
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
            Tensegrity, Yoga and dynamic trance states are maintaining
            my body in tone. These practices fill my body with energy and
            my face with smile. They allows me to breathe deeper and feel much better.
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
            I'm happy to do mediation, self-hypnosis, lucid dreaming
            and other spiritual practices.
            Curious about Enlightenment and high-energy states of
            mind, body and spirit.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgActingSkills} />
        <Item.Content>
          <Item.Header>
            Acting Skills and Public Performances
          </Item.Header>
          <Item.Description>
            I have completed a course of public speaking, presentation and
            work with the audience. Also completed a course of acting and
            played in the theatrical performance.
            <br /><br />
            It would be nice to play great show with Self-Developoing AI
            soon.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgLaughter} />
        <Item.Content>
          <Item.Header>
            Humor and Laughter
          </Item.Header>
          <Item.Description>
            I have written a book "How to learn to joke funny" with results
            of modeling of the best Russian humorists.
            The book is written on Russian, but I would like to translate
            on English.
            <br /><br />
            I have an idea to create an AI Joker, recurrent neural network
            algorithm, which would be trained on corpus of jokes,
            funny stories and anecdotes and could generate jokes
            with language models presented in the book.
            <br /><br />
            AI Joker is research step towards to Self-Developing AI.
            <br /><br />
            <Button basic color='teal' floated='left' href={PDFBook} target='_blank'>
              Read the book (on Russian)
            </Button>
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgInfobusiness} />
        <Item.Content>
          <Item.Header>
            Information Techonlogies
          </Item.Header>
          <Item.Description>
            As Software Engineer, I was developing IT solutions many years.
            <br /><br />
            Also using IT, I conducted an online webinar "How to create funny jokes".
            Joke is one of the most creative strategies to think. I was
            teaching participants with results of research of human brain
            of humorists.
            <br /><br />
            I would like to release IT solution with Self-Developing AI,
            conduct webinar as show about Self-Developing AI.
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
            <br /><br />
            I play harmonica and electric guitar, and enjoy software for musicians.
            <br /><br />
            <Modal closeIcon trigger={
              <Button basic color='teal' floated='left'>
                Listen Artem's music
              </Button>
            }>
              <Modal.Header>Artem's music</Modal.Header>
              <Modal.Content>
                <iframe
                  title='alphara_BrRrRBpBpBP-Love.mp3 on SoundCloud'
                  width="100%" height="166" scrolling="no" frameborder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/212013785&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
                ></iframe>
              </Modal.Content>
            </Modal>
            <br />
            <br />
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
            I want get the Master of Business Administration (MBA) degree.
            <br /><br />
            <Button basic floated='right' as='a' target='_blank'
              href='https://ru.pinterest.com/search/pins/?q=mba'
            >
              <Icon.Group>
                <Icon name='pinterest' />
                <Icon corner name='linkify' />
              </Icon.Group>
              MBA on Pinterest
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
            I desire to get a Startup started.
            <span role="img" aria-label="Unicorn">🦄 </span>
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
              Startup on Pinterest
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
            I'm wondering about using Blockchain on Quantum Computers.
            <br /><br />
            <Button basic floated='right' as='a' target='_blank'
              href='https://ru.pinterest.com/search/pins/?q=blockchain'
            >
              <Icon.Group>
                <Icon name='pinterest' />
                <Icon corner name='linkify' />
              </Icon.Group>
              Blockchain on Pinterest
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
            Artificial Superintelligence is much smarter than the best human
            brains.
            <br /><br />
            Self-Developing AI is an excellent instance of
            the Superintelligence.
            <br /><br />
            <Button basic floated='right' as='a' target='_blank'
              href='//www.google.com/search?q=artificial+superintelligence'
            >
              <Icon.Group>
                <Icon name='google' />
                <Icon corner name='linkify' />
              </Icon.Group>
              ASI in Google
            </Button>
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgQuantumComputer} />
        <Item.Content>
          <Item.Header>
            Quantum computing (QC)
          </Item.Header>
          <Item.Description>
            I'm looking for an access to quantum computer for research,
            experimentation and running my
            Artificial Intelligence and Blockchain applications.
            <br /><br />
            <Button basic floated='right' as='a' target='_blank'
              href='//www.google.com/search?q=Quantum+computing'
            >
              <Icon.Group>
                <Icon name='google' />
                <Icon corner name='linkify' />
              </Icon.Group>
              QC in Google
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
            Brain–Machine Interface is communication pathway
            between a brain and an external device.
            <br /><br />
            I'm would love to use Brain–Machine Interfaces along with
            Artificial Superintelligence and Quantum Computing in the
            Self-Developing AI project described below.
            <span role="img" aria-label="Unicorn"> 🦄 </span>
            <br /><br />
            <Button basic floated='right' as='a' target='_blank'
              href='//www.google.com/search?q=Brain-Machine+Interfaces'
            >
              <Icon.Group>
                <Icon name='google' />
                <Icon corner name='linkify' />
              </Icon.Group>
              BMI in Google
            </Button>
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgFraktal} />
        <Item.Content>
          <Item.Header>
            Self-Developing AI
          </Item.Header>
          <Item.Description>
            I'm architecting with passion the <b>Self-Developing AI</b>.
            This is a <i>Virtual Software Engineer</i>, which develops
            any kind of software include backend and frontend,
            deep learning and neural networks,
            artificial intelligence and <i>itself</i>.
            The Artificial Superintelligence is able to improve its own code.
            <br /><br />
            The Self-Developing AI is secure and controlled by mankind.
            It recieves input with application specification on human language
            and outputs well developed and tested working code of the
            application on programming language.
            AI deeply learns programming by itself through reading
            documentation in the Internet. The project assumes psycological
            modeling of the best developers and software development.
            The Virtual Software Engineer could implement dreams of all
            people in the World.
            <span role="img" aria-label="Unicorn"> 🦄 </span>
            <br /><br />
            I'm <b>looking for Co-Founders, Investors, and team members</b>.
            <br /><br />
            Please,
            <br /><br />
            <Button color='green' fluid size='large' as='a' target='_blank'
              href='mailto:artarakcheev@gmail.com'
            >
              <Icon name='mail'/>
              <i>Contact me &nbsp;&nbsp;</i>
            <Icon name='heartbeat' />
            </Button>
            <br />
            Sincerely,<br />
            Artem Arakcheev.
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}
