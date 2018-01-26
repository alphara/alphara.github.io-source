import React from 'react'
import {
  Item, Divider, List
} from 'semantic-ui-react'

import Course from './Course'

import ImgTODO from './img/TODO.png'
import ImgUdacity from './img/udacity.jpg'
import ImgVipassana from './img/vipassana.jpg'
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
        <br />
        <br />
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
        <br />
        The participants of the program receive
        (1) the skills of guiding and maintaining a hypnotic trance,
        (2) the skills of therapeutic work with clients on a wide variety
        of issues,
        (3) the skills of using Eriksonian hypnosis in group work,
        (4) self-hypnosis skills, allowing more fully and deeper use "wisdom"
        of own unconscious,
        (5) the possibility of teaching clients the skills of self-hypnosis.
      </Course>
      <Divider section />

      <Course
        image={ImgTheatreObraz}
        icon='👨🏻‍🎓 '
        degree='Actor'
        school='Theater School "Image"'
        location='Moscow, Russia'
        dates='Jul, 2009 - Jun, 2010 (243 hours)'
        href='//www.teatr-obraz.ru/page/kursy-akterskogo-masterstva-dlya-zhizni-i-stseny'
      >
A complex of exercises on acting, plastic; speech techniques and psychotechnics.

    Mastering the basics of acting and the initial techniques to achieve a creative state. The development of the state of playfulness and the state of permission as natural states of man. Work with the imagination. The process of attention.
    Work with dramaturgy. Action in the proposed circumstances, the disclosure of the character of the image, atmosphere, coloring, psychological gesture. Improvisation.
    Work with a partner. Ability to feel, hear, feel partner, both on stage and in life.

Subjects:

• Acting skills
• Speech (breathing, voice, spontaneous speech)
• Plastic (work with the body)
• Psychotechnics (management of emotions and reactions).
• Game players (exercises in a game form aimed at solving clear tasks).
• Acting: working on a monologue, working on a dialogue (interaction with a partner)
• Psychotechnics (as an operational daily aid in life)
• Speech (breathing, voice, spontaneous speech)
• Plastic (working with the body).
• Work on the play. The production and display of the performance is carried out on professional theatrical grounds of the city.


    Passing the program develops the following skills:
Clearly express thoughts, improve diction;
Control emotions;
Understand people, read "body language";
Adjust yourself to receive positive emotions;
Present yourself and be the center of attention;
Develop the plasticity of the body;
Voice and breathing;
The ability to speak beautifully;
Mastering the steps leading to reincarnation;
Disclosure of the multi-faceted creative abilities of the individual.
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
    This course offers to get acquainted with the elements of an effectively constructed speech. Helps to develop, analyze and improve their own oratorical style, and develops behavioral flexibility when interacting with different people in the group.
      </Course>
      <Divider section />

      <Course
        image={ImgNLPCenter}
        icon='👨🏻‍🎓 '
        degree='Master Practitioner in the Art and Science of Neuro-Linguistic Programming'
        school='Center of Neuro-Linguistic Programming in Education'
        location='Moscow, Russia'
        dates='Mar, 2009 - Jun, 2009 (192 hours)'
        href='//www.nlpcenter.ru/index.php?sid=97'
      >
    Advanced certification program, whose mission is to develop more advanced techniques and models of NLP, as well as to improve communication skills, personal changes, study the model of the belief structure and work with motivation and changing the limiting perceptions of another person.

        Art and science of Neuro-Linguistic Programming (NLP) in the course
        of 24-day NLP Certification Training Program.

        This training meets and exceeds the minimum training standards set forth
        by the International Association of NLP.


The main objectives of the course "NLP-Master" are:
Description of the elements of mastery and access to the state of mastery.
Training in the basic principles and techniques of NLP modeling.
Mastering the writing language of sensory strategies. Development of skills for working with sensory micro- and macro-strategies.
Formation of a systematic approach to work with human goals and values.
Learning to use in their life the systemic models of modern NLP.
Presentation of new approaches to the analysis and development of one's own personality.
Developing skills to systematically collect information, plan and analyze your own work as a consultant (coach).
Development of skills and expansion of tools for working with upper logical levels.
Development of flexibility in creating your own techniques and skills to work with symptoms of varying complexity.
Going to the meta-level understanding of the methodology and principles of NLP as a cognitive-synergetic paradigm.

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
The certification program for the study of NLP as a modern line of practical psychology, which is designed for everyone interested in the latest methods and technologies of personal and professional growth. The course involves mastering the basic knowledge and skills of NLP. The participants of the seminar will be able to develop the acuity of perception, learn to see the true intentions and needs of different people hidden behind their behavior, quickly collect, structure and accurately convey information, expand the arsenal of negotiation techniques, achieve persuasiveness in interacting with people. In general, the course is aimed at mastering effective communication strategies, managing your own states, developing creativity, mastering ways to overcome the crisis and conflict, optimizing the processes of achieving personal and professional results, mastering models of systemic and strategic thinking.

    Our course "NLP-Practitioner" is developed on the basis of international standards, and its program is accepted as a standard by many Russian and foreign NLP Centers. Since 1994, more than 10,000 people of various professions and ages have successfully completed the NLP-Praktik course. Many of the participants of our trainings have already reached high levels of professional and personal self-realization, most realized their most cherished dreams, and almost all noted significant changes in their ability to influence themselves and the world around them (they mastered the tools of self-development and increased efficiency).
    The course "NLP-Practitioner" is an adapted for the modern man's way to an accelerated exit to the maximum of its capabilities. What many are presented as "The secrets of success", in our course "NLP-Practitioner" is given in the form of practical tools that can be used by everyone who has been trained.

1 level "Getting to know NLP and the forge of personal potential" (the mechanics of effective goal-setting in NLP):
Development of strategic thinking.
Use of highly productive states.
Technique "Walt Disney's creative strategy" and creative thinking.

2 step "Matrix of emotional intelligence" (connection of emotions and thinking):
Managing your emotions.
Ability to read the emotions of the interlocutor.
Ability to broadcast emotions to the interlocutor.
Technique "Changing Personal History."
Switching of negative emotions (uncertainty, restraint, laziness, etc.).

3 step "Framework of roles, beliefs and thinking" (structure of thinking):
Key principles of NLP.
Techniques for managing personal outlook.
The strategy of personal motivation management.
Methods of verbal persuasion.

4 step "Tame your inner dragons":
 Model of the structure of the personality.
Changing habits and stopping internal sabotage.
Elimination of dilemmas and internal contradictions.
Work with fears.
Acquaintance with the unconscious.
Methods of hypnotic speech.

5 step "Secrets of NLP communication" (verbal and non-verbal communication):
Methods of establishing contact and trust with people.
Strategies for achieving mutual understanding.
Effective information gathering.
Adjustment to the style of thinking of the interlocutor.

6th step "System thinking and communication management" (protection from speech manipulation):
Principles of systemic thinking in NLP.
Model of multidimensional analysis of communication.
Strategy for conflict resolution and negotiation design.

7 step "System work with goals" (model of quick self-study):
Basics of system work with goals.
The time factor in working with goals and communication.
The strategy of information gathering in coaching, psychotherapy and consulting.

8 step "There are turtles to the very bottom ... (integration)" (integration of all the material):
Connection models together.
Preparation for certification.
Certification.
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
