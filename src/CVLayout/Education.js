import React from 'react'
import {
  Item, Divider, List
} from 'semantic-ui-react'

import Course from './Course'

import ImgUdacity from './img/udacity.jpg'
import ImgVipassana from './img/vipassana.png'
import ImgIGISP from './img/igisp.png'
import ImgTheatreObraz from './img/theatre-obraz.jpg'
import ImgNLPCenter from './img/nlp-center.jpg'
import ImgMIET from './img/miet.jpg'

export default function Education(props) {
  return (
    <Item.Group>

      <Course
        image={ImgUdacity}
        icon='👨🏻‍🎓 '
        degree='Artificial Intelligence Engineer'
        school='Udacity'
        location='Online'
        dates='Jul, 2017 - Jan, 2018'
        href='//www.udacity.com/course/artificial-intelligence-nanodegree--nd889'
      >
        Global innovations in the field of artificial intelligence (AI)
        are going to redefine virtually every aspect of our lives.
        This program introduces to the broad field of artificial intelligence,
        and prepares for a wide variety of opportunities in the AI field.
        <br /><br />
        The program built in collaboraton with industry leaders to bring
        cutting-edge curriculum covering topics such as game-playing search,
        logic and planning, probabilistic inference, computer vision,
        cognitive systems, and speech recognition.

        Graduates have mastered skills and tools used by the most
        innovative AI teams across the globe as you delve into
        specializations, and gain experience solving real-world challenges.

        Graduates of this program are valuable core to any team
        working in the domain of AI, and opportunities exist in healthcare,
        finance, retail, media, advertising, education, and more.
      </Course>
      <Divider section />

      <Course
        image={ImgVipassana}
        icon='🧘🏻‍ '
        degree='Meditator'
        school='Vipassana Center'
        location='Lucknow, India'
        dates='Jul, 2017 (10 days)'
        location1='Dharamsala, India'
        dates1='May, 2017 (10 days)'
        href='//www.dhamma.org/en-US/index'
      >
        Vipassana, which means to see things as they really are,
        is one of India's most ancient techniques of meditation.
        It was taught in India more than 2500 years ago as a universal
        remedy for universal ills, i.e., an Art of Living.
        <br/>
        <br/>
        Vipassana is a way of self-transformation through self-observation.
        It focuses on the deep interconnection between mind and body,
        which can be experienced directly by disciplined attention to the
        physical sensations that form the life of the body, and that
        continuously interconnect and condition the life of the mind.
        It is this observation-based, self-exploratory journey to the
        common root of mind and body that dissolves mental impurity,
        resulting in a balanced mind full of love and compassion.
      </Course>
      <Divider section />

      <Course
        image={ImgIGISP}
        icon='👨🏻‍🎓 '
        degree='Master of Ericksonian Therapy And Hypnosis'
        school='Institute Of Group And Family Psychology And Psychotherapy'
        location='Moscow, Russia'
        dates='Sep, 2010 - May, 2011 (190 hours)'
        href='//www.igisp.ru/igisp/index.php?inpg=trainings&int_ind=16'
      >
        This program gives an opportunity to get acquainted with the
        hypnotherapy of Milton Erickson and its modern directions and learn
        the practical use of Ericksonian hypnosis.
        The program provides for both mastering the basic principles,
        methods and techniques of Ericksonian hypnosis, as well as mastering
        the practice of Ericksonian hypnotherapy, more complex techniques,
        acquiring one's own therapeutic experience.
        <br />
        <List bulleted horizontal size='tiny'>
          <List.Header as='h5'>
            The participants get the following skills:
          </List.Header>
          <List.Item>
            Guiding and maintaining a hypnotic trance
          </List.Item>
          <List.Item>
            Therapeutic work with clients on a wide variety of issues
          </List.Item>
          <List.Item>
            Using Eriksonian hypnosis in group work
          </List.Item>
          <List.Item>
            Self-hypnosis skills, allowing more fully and deeper
            use <i>wisdom</i> of own unconscious
          </List.Item>
          <List.Item>
            Possibility of teaching clients with the skills of self-hypnosis
          </List.Item>
        </List>
      </Course>
      <Divider section />

      <Course
        image={ImgTheatreObraz}
        icon='🕺🏻 '
        degree='Actor'
        school='Theater School Image'
        location='Moscow, Russia'
        dates='Jul, 2009 - Jun, 2010 (243 hours)'
        href='//www.teatr-obraz.ru/page/kursy-akterskogo-masterstva-dlya-zhizni-i-stseny'
      >
        The program offers a set of exercises for acting, plasticity,
        speech techniques and psychotechnique.
        The program ends with showing theatrical play.
        The performance is carried out on professional theatrical grounds
        of the city.
        <br /><br />
        <List bulleted horizontal size='tiny'>
          <List.Header as='h5'>
            Program develops the following skills:
          </List.Header>
          <List.Item>
            Clearly express thoughts
          </List.Item>
          <List.Item>
            Improve diction
          </List.Item>
          <List.Item>
            Control emotions
          </List.Item>
          <List.Item>
            Understand people
          </List.Item>
          <List.Item>
            Read <i>body language</i>
          </List.Item>
          <List.Item>
            Adjusting for positive emotions
          </List.Item>
          <List.Item>
            Present to be in center of attention
          </List.Item>
          <List.Item>
            Develop body plasticity
          </List.Item>
          <List.Item>
            Voice and breathing
          </List.Item>
          <List.Item>
            The ability to speak beautifully
          </List.Item>
          <List.Item>
            Mastering transformation
          </List.Item>
          <List.Item>
            Disclosure creativity
          </List.Item>
        </List>
      </Course>
      <Divider section />

      <Course
        image={ImgNLPCenter}
        icon='👨🏻‍🎓 '
        degree='Trainer of Special Courses'
        school='Center of Neuro-Linguistic Programming in Education'
        location='Moscow, Russia'
        dates='Sep, 2009 - Oct, 2009 (80 hours)'
        href='//www.nlpcenter.ru/index.php?sid=104'
      >
        This course offers to get acquainted with the elements of an
        effectively constructed speech. Helps to develop, analyze and
        improve their own oratorical style, and develops behavioral
        flexibility when interacting with different people in the group.
      </Course>
      <Divider section />

      <Course
        image={ImgNLPCenter}
        icon='👨🏻‍🎓 '
        degree='Master Practitioner of Neuro-Linguistic Programming'
        school='Center of Neuro-Linguistic Programming in Education'
        location='Moscow, Russia'
        dates='Mar, 2009 - Jun, 2009 (192 hours)'
        href='//www.nlpcenter.ru/index.php?sid=97'
      >
        Advanced certification program, whose mission is to develop more
        advanced techniques and models of NLP, as well as to improve
        communication skills, personal changes, study the model of the belief
        structure and work with motivation and changing the limiting
        perceptions of another person.
        <br />
        <List bulleted horizontal size='tiny'>
          <List.Header as='h5'>
            The main course objectives are:
          </List.Header>
          <List.Item>
            Elements of mastery and access to the state of mastery
          </List.Item>
          <List.Item>
            Training in the basic principles and techniques of NLP modeling
          </List.Item>
          <List.Item>
            Mastering sensory strategies language. Development of skills
            for working with sensory micro- and macro-strategies
          </List.Item>
          <List.Item>
            Formation of a systematic approach to work with goals and values
          </List.Item>
          <List.Item>
            Usage of systemic models of modern NLP
          </List.Item>
          <List.Item>
            New approaches to the analysis and development personality
          </List.Item>
          <List.Item>
            Developing skills to systematically collect information, plan
            and analyze own work as a coach
          </List.Item>
          <List.Item>
            Developing skills and tools expansion for working with upper
            logical levels
          </List.Item>
          <List.Item>
            Development of flexibility in creating own techniques and skills
            to work with symptoms of varying complexity
          </List.Item>
          <List.Item>
            Going to the meta-level understanding of the methodology and
            NLP principles as a cognitive-synergetic paradigm
          </List.Item>
        </List>

      </Course>
      <Divider section />

      <Course
        image={ImgNLPCenter}
        icon='👨🏻‍🎓 '
        degree='Practitioner of Neuro-Linguistic Programming'
        school='Center of Neuro-Linguistic Programming in Education'
        location='Moscow, Russia'
        dates='Sep, 2008 - Nov, 2008 (176 hours)'
        href='//www.nlpcenter.ru/index.php?sid=168'
      >
        The certification program for the study of NLP as a modern line of
        practical psychology, which is designed for everyone interested in
        the latest methods and technologies of personal and professional
        growth.
        The participants of the seminar are able to develop acuity
        of perception, learn to see true intentions and needs of
        different people hidden behind their behavior, quickly collect,
        structure and accurately convey information, expand arsenal
        of negotiation techniques, achieve persuasiveness in interacting
        with people.
        The course is aimed at mastering effective communication
        strategies, managing own states, developing creativity,
        mastering ways to overcome crisis and conflict, optimizing
        processes of achieving personal and professional results,
        mastering models of systemic and strategic thinking.
      </Course>
      <Divider section />

      <Course
        image={ImgMIET}
        icon='👨🏻‍🎓 '
        degree='Software Engineer'
        school='National Research University Of Electronic Technology'
        location='Zelengorad, Russia'
        dates='Sep, 2002 - Jul, 2007'
        href='//eng.miet.ru/'
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
