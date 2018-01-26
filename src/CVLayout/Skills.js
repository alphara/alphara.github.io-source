import React from 'react'
import {
  List, Item, Divider
} from 'semantic-ui-react'

import SkillList from './SkillList'

import ImgTODO from './img/TODO.png'
import ImgAI from './img/ai.jpg'
import ImgFullStack from './img/full-stack.png'
import ImgEmbeddedSystems from './img/embedded-systems.jpg'
import ImgVideoPlatforms from './img/video-platforms.jpg'
import ImgDataFormats from './img/data-formats.jpg'
import ImgComputing from './img/computing.jpg'
import ImgProjectManagement from './img/project-management.jpg'
import ImgActing from './img/acting.jpg'
import ImgTrainer from './img/trainer.jpg'

const emoji = {
  'ai': '🧠',
  'full-stack': '🤖',
  'embedded-systems': '🛰',
  'video-platforms': '📹',
  'data-formats': '📊',
  'computing': '☁️',
  'project-management': '🎯',
  'acting': '🎭',
  'training': '👨🏻‍🏫',
  'coachin': '👨🏻‍💼',
  'modeling': '🕵🏻‍♂️',
  'hypnosis': '🤵🏻'
}

export default function Skills(props) {
  return (
    <Item.Group>
      <Item>
        <Item.Image size='small' src={ImgAI} />
        <Item.Content>
          <Item.Header>
            ARTIFICIAL INTELLIGENCE
          </Item.Header>
          <Item.Description>
            <List>
              <SkillList
                emoji={emoji['ai']}
                name='Machine Learning'
                skills={[
                  'Deep Learning',
                  'Supervised Learning',
                  'Unsupervised Learning',
                  'Semi-supervised Learning',
                  'Reinforcement Learning',
                  'Q-Learning'
                ]}
              />
              <SkillList
                emoji={emoji['ai']}
                name='Neural Networks'
                skills={[
                  'Multilayer Perceptron (MLP)',
                  'Convolutional (CNN)',
                  'Recurrent (RNN)',
                  'Long short-term memory (LSTM)',
                  'Generative adversarial networks (GAN)',
                  'Autoencoders'
                ]}
              />
              <SkillList
                emoji={emoji['ai']}
                name='Frameworks'
                skills={[
                  'TensorFlow',
                  'PyTorch',
                  'Keras',
                ]}
              />
              <SkillList
                emoji={emoji['ai']}
                name='Tools & Platforms'
                skills={[
                  'Python',
                  'Anaconda',
                  'Jupyter Notebook',
                  'Matplotlib',
                  'Numpy',
                  'Colaboratory',
                  'Kaggle'
                ]}
              />
              <SkillList
                emoji={emoji['ai']}
                name='Applications'
                skills={[
                  'Image Classification',
                  'Time Series Prediction',
                  'Sentiment Analysis',
                  'Text & Image & Music Generation',
                  'Game Playing',
                  'Planning'
                ]}
              />
              <SkillList
                emoji={emoji['ai']}
                name='Computer Vision'
                skills={[
                  'Image/Video Representation, Analysis and Segmentation',
                  'Features and Object Recognition',
                  'Identity Protection',
                  'Face, Facial Keypoint and Emotion Detection',
                  'OpenCV'
                ]}
              />
              <SkillList
                emoji={emoji['ai']}
                name='Voice User Interfaces'
                skills={[
                  'Automatic Speech Recognition (ASR)',
                  'LibriSpeech'
                ]}
              />
              <SkillList
                emoji={emoji['ai']}
                name='Natural Language Processing'
                skills={[
                  'Natural Language Toolkit (NLTK)',
                  'Machine Translation',
                  'Question-Answering Systems',
                  'Chatbots'
                ]}
              />
            </List>
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider section />

      <Item>
        <Item.Image size='small' src={ImgFullStack} />
        <Item.Content>
          <Item.Header>
            FULL STACK
          </Item.Header>
          <Item.Description>
            <List>
              <SkillList
                emoji={emoji['full-stack']}
                name='Programming Languages'
                skills={[
                  'Python',
                  'Node.js',
                  'JavaScript (ES6/7)',
                  'Lisp',
                  'С/С++',
                  'Objective-C',
                  'Bash scripting'
                ]}
              />
              <SkillList
                emoji={emoji['full-stack']}
                name='Backend Development'
                skills={[
                  'Node.js',
                  'Swagger',
                  'MongoDB',
                  'SQL',
                  'noSQL',
                  'Redis',
                  'Express',
                  'Mocha',
                  'NgineX',
                  '100+ npm modules'
                ]}
              />
              <SkillList
                emoji={emoji['full-stack']}
                name='Frontend Development'
                skills={[
                  'React.js',
                  'JavaScript (ES6/7)',
                  'HTML5',
                  'CSS3',
                  'Webpack',
                  'Gulp',
                  'NightWatch',
                  'Jest'
                ]}
              />
              <SkillList
                emoji={emoji['full-stack']}
                name='Payment Processors'
                skills={[
                  'PayPal',
                  'Braintree'
                ]}
              />
              <SkillList
                emoji={emoji['full-stack']}
                name='API Development'
                skills={[
                  'REST',
                  'OAuth2.0',
                  'JWT',
                  'WebHooks'
                ]}
              />
              <SkillList
                emoji={emoji['full-stack']}
                name='API Integration'
                skills={[
                  'Auth0',
                  'Talkdesk',
                  'Zendesk',
                  'Loggly',
                  'Google (Safe Browsing, PageSpeed Insights)',
                  'SendGrid',
                  'Twillio',
                  'Avast',
                  'YSlow',
                  'Etc.'
                ]}
              />
              <SkillList
                emoji={emoji['full-stack']}
                name='Speech-to-Text Integration'
                skills={[
                  'VoiceBase API'
                ]}
              />
              <SkillList
                emoji={emoji['full-stack']}
                name='Data Search & Analysis'
                skills={[
                  'ELK Stack',
                  'ElasticSearch'
                ]}
              />
              <SkillList
                emoji={emoji['full-stack']}
                name='Chatbot Development'
                skills={[
                  'Telegram',
                  'Facebook'
                ]}
              />
              <SkillList
                emoji={emoji['full-stack']}
                name='Testing '
                skills={[
                  'Test Driven Development (TDD)',
                  'Tests Automation',
                  'Manual Testing'
                ]}
              />
              <SkillList
                emoji={emoji['full-stack']}
                name='Package management'
                skills={[
                  'Anaconda',
                  'Conda',
                  'NPM',
                  'PIP',
                  'Nix',
                  'Homebrew',
                  'dpkg',
                  'ipkg',
                  'RPM',
                  'sources'
                ]}
              />
              <SkillList
                emoji={emoji['full-stack']}
                name='Network protocols'
                skills={[
                  'HTTP(s)',
                  'SSH',
                  'FTP',
                  'SSL',
                  'Web sockets',
                  'Ajax',
                  'CGI',
                  'TCP',
                  'UDP',
                  'SMTP',
                  'RTMP',
                  'RTP'
                ]}
              />
              <SkillList
                emoji={emoji['full-stack']}
                name='Distributed Messaging'
                skills={[
                  'ZeroMQ'
                ]}
              />
              <SkillList
                emoji={emoji['full-stack']}
                name='Deployment'
                skills={[
                  'PM2',
                  'Jenkins',
                  'Ansible'
                ]}
              />
              <SkillList
                emoji={emoji['full-stack']}
                name='Virtualization'
                skills={[
                  'Docker',
                  'VMWare Workstation',
                  'VirtualBox'
                ]}
              />
              <SkillList
                emoji={emoji['full-stack']}
                name='Version control'
                skills={[
                  'Git (Bitbucket, GitHub)',
                  'SVN',
                  'CVS'
                ]}
              />
              <SkillList
                emoji={emoji['full-stack']}
                name='Sniffers '
                skills={[
                  'Charless',
                  'Wireshark'
                ]}
              />
              <SkillList
                emoji={emoji['full-stack']}
                name='Code editors and IDEs'
                skills={[
                  'Vim',
                  'Emacs',
                  'Sublime',
                  'Eclipse'
                ]}
              />
            </List>
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider section />

      <Item>
        <Item.Image size='small' src={ImgEmbeddedSystems} />
        <Item.Content>
          <Item.Header>
            EMBEDDED SYSTEMS
          </Item.Header>
          <Item.Description>
            <List>
              <SkillList
                emoji={emoji['embedded-systems']}
                name='Linux Development'
                skills={[
                  'User Applications',
                  'Kernel Modules',
                  'Client-Server',
                  'Multi-Threading',
                  'Cross-Compilation',
                  'Shell',
                  'Gcc',
                  'CLang',
                  'Dbg',
                  'Makefile',
                  'Etc.'
                ]}
              />
              <SkillList
                emoji={emoji['embedded-systems']}
                name='Linux Firmware'
                skills={[
                  'OpenEmbedded',
                  'BitBake',
                  'Busybox'
                ]}
              />
              <SkillList
                emoji={emoji['embedded-systems']}
                name='Boot loaders'
                skills={[
                  'RedBoot',
                  'U-Boot'
                ]}
              />
            </List>
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider section />

      <Item>
        <Item.Image size='small' src={ImgVideoPlatforms} />
        <Item.Content>
          <Item.Header>
            VIDEO PLATFORMS
          </Item.Header>
          <Item.Description>
            <List>
              <SkillList
                emoji={emoji['video-platforms']}
                name='Video capturing'
                skills={[
                ]}
              />
              <SkillList
                emoji={emoji['video-platforms']}
                name='Video streaming'
                skills={[
                ]}
              />
              <SkillList
                emoji={emoji['video-platforms']}
                name='Video processing, encoding, storing'
                skills={[
                ]}
              />
              <SkillList
                emoji={emoji['video-platforms']}
                name='Tools'
                skills={[
                  'ffmpeg',
                  'mplayer',
                  'wowza',
                  'etc.'
               ]}
              />
            </List>
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider section />

      <Item>
        <Item.Image size='small' src={ImgDataFormats} />
        <Item.Content>
          <Item.Header>
            DATA FORMATS
          </Item.Header>
          <Item.Description>
            <List>
              <SkillList
                emoji={emoji['data-formats']}
                name='Video'
                skills={[
                  'H.264',
                  'MPEG4',
                  'MJPEG',
                  'MSN3'
                ]}
              />
              <SkillList
                emoji={emoji['data-formats']}
                name='Image'
                skills={[
                  'JPEG',
                  'PNG',
                  'SVG'
                ]}
              />
              <SkillList
                emoji={emoji['data-formats']}
                name='Audio'
                skills={[
                  'MP3',
                  'WAV'
                ]}
              />
              <SkillList
                emoji={emoji['data-formats']}
                name='Data'
                skills={[
                  'JSON',
                  'CSV',
                  'XML',
                  'YAML',
                  'Binary',
                  'Markdown'
                ]}
              />
            </List>
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider section />

      <Item>
        <Item.Image size='small' src={ImgComputing} />
        <Item.Content>
          <Item.Header>
            COMPUTING
          </Item.Header>
          <Item.Description>
            <List>
              <SkillList
                emoji={emoji['computing']}
                name='Cloud Computing'
                skills={[
                  'AWS (EC2, Lambda, S3, etc.)',
                  'IBM Watson',
                  'RHCloud',
                  'Google Cloud Platform'
                ]}
              />
              <SkillList
                emoji={emoji['computing']}
                name='Hardware architectures'
                skills={[
                  'CPU/GPU',
                  'x86/x64',
                  'MIPS',
                  'ARM',
                  'Arduino'
                ]}
              />
              <SkillList
                emoji={emoji['computing']}
                name='Internet Of Things (IOT)'
                skills={[
                  'WunderBar'
                ]}
              />
              <SkillList
                emoji={emoji['computing']}
                name='Operating systems'
                skills={[
                  'macOS',
                  'Linux',
                  'Windows'
                ]}
              />
            </List>
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider section />

      <Item>
        <Item.Image size='small' src={ImgProjectManagement} />
        <Item.Content>
          <Item.Header>
            PROJECT MANAGEMENT
          </Item.Header>
          <Item.Description>
            <List>
              <SkillList
                emoji={emoji['project-management']}
                name='Agile methodology'
                skills={[
                  'SCRUM',
                  'Pair Programming',
                  'Code Review',
                  'Unit Testing',
                  'Etc.'
                ]}
              />
              <SkillList
                emoji={emoji['project-management']}
                name='Team messaging'
                skills={[
                  'Slack',
                  'HipChat'
                ]}
              />
              <SkillList
                emoji={emoji['project-management']}
                name='UML diagrams'
                skills={[
                  'PlantUML',
                  'Visio'
                ]}
              />
              <SkillList
                emoji={emoji['project-management']}
                name='Issue-tracking systems'
                skills={[
                  'Jira',
                  'Mantis',
                  'Redmine',
                  'Redbooth'
                ]}
              />
            </List>
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider section />

      <Item>
        <Item.Image size='small' src={ImgActing} />
        <Item.Content>
          <Item.Header>
            ACTING
          </Item.Header>
          <Item.Description>
            <List>
              <SkillList
                emoji={emoji['acting']}
                name='Acting'
                skills={[
                  'Scene-work',
                  'Monologues',
                  'Dialogues',
                  'Dramaturgy',
                  'Presentation',
                  'Show',
                  'Interaction with partners',
                  'Improvisation'
                ]}
              />
              <SkillList
                emoji={emoji['acting']}
                name='Speech'
                skills={[
                  'Breathing',
                  'Diction',
                  'Voice',
                  'Spontaneous speech',
                  'Clarity of speech',
                  'Public speaking'
                ]}
              />
              <SkillList
                emoji={emoji['acting']}
                name='Body'
                skills={[
                  'Plasticity',
                  'Body language',
                  'Physical expressivity',
                  'Movement',
                  'Sense of space (stage and time)'
                ]}
              />
              <SkillList
                emoji={emoji['acting']}
                name='Psychotechnique'
                skills={[
                  'Imagination',
                  'Emotional facility',
                  'Reactions control',
                  'Attracting attention',
                  'Adopting character',
                  'Game techics',
                  'Creative state'
                ]}
              />
            </List>
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='small' src={ImgTrainer} />
        <Item.Content>
          <Item.Header>
            TRAINING
          </Item.Header>
          <Item.Description>
            <List>
              <SkillList
                emoji={emoji['training']}
                name=''
                skills={[
'Structure of the speaker\'s basic competencies, ensuring the effectiveness of the performance.',
'Structure and components of effective performance.',
'Development of key micro- and macro skills of the speaker.',
'Unconscious and uncontrolled influence of the speaker on the participants of the group: presupposition of teaching and personal presupposition of a person. The development of the ability to identify presuppositions in the speech of other people and build their own presentation on the basis of positive presuppositions.',
'Meta-message: a significant non-verbal message from the speaker, unconsciously conveying his true attitude to listeners, to himself and to information.',
'Maintaining its own productive state and varying it.',
'Determination of the initial emotional state of the group and ways to change it in the presentation process.',
'Components and criteria for analyzing the effectiveness of speech based on the mental and behavioral preferences of a person.',
'Identify and analyze your own oratory.',
'Purposeful development of behavioral flexibility in communication with the audience.',
'The development of the skill of analyzing the style of successful speakers.',
'Calling and maintaining a group of different learning states.',
'Accounting for individual preferences of group members in the perception of information when answering questions.',
'Structure of motivation. Studying of various ways of verbal motivation of listeners to active participation in presentation or training.',
'The use of "cross-cutting" motivation in the process of speaking.',
'Identification and response to positive intentions, hidden in the objections of participants.',
'Tools and strategies for "recycling" difficulties in the performance process.',
'Work with "difficult" group members.',
'Basics of forming an effective design for the content of a speech or training.',
'Filling the design of the training with different types of learning activity and learning states.',
'Mini-presentations and analysis of changes in oratory style.',
                ]}
              />
              <SkillList
                emoji={emoji['training']}
                name=''
                skills={[
                  ''
                ]}
              />
              <SkillList
                emoji={emoji['training']}
                name=''
                skills={[
                  ''
                ]}
              />
            </List>
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='small' src={ImgTODO} />
        <Item.Content>
          <Item.Header>
            NLP COACHING AND THERAPY
          </Item.Header>
          <Item.Description>
            <List>
              <SkillList
                emoji={emoji['coaching']}
                name='Effective goal-setting'
                skills={[
                  'Development of strategic thinking',
                  'Use of highly productive states',
                  'Technique "Walt Disney\'s creative strategy" and creative thinking',
                ]}
              />
              <SkillList
                emoji={emoji['coaching']}
                name='"Matrix of emotional intelligence" (connection of emotions and thinking)'
                skills={[
                  'Managing your emotions',
                  'Ability to read the emotions of the interlocutor',
                  'Ability to broadcast emotions to the interlocutor',
                  'Technique "Changing Personal History"',
                  'Switching of negative emotions (uncertainty, restraint, laziness, etc.)',
                ]}
              />
              <SkillList
                emoji={emoji['coaching']}
                name='"Framework of roles, beliefs and thinking" (structure of thinking)'
                skills={[
                  'Key principles of NLP',
                  'Techniques for managing personal outlook',
                  'The strategy of personal motivation management',
                  'Methods of verbal persuasion',
                ]}
              />
              <SkillList
                emoji={emoji['coaching']}
                name='"Tame your inner dragons"'
                skills={[
                  'Model of the structure of the personality',
                  'Changing habits and stopping internal sabotage',
                  'Elimination of dilemmas and internal contradictions',
                  'Work with fears',
                  'Acquaintance with the unconscious',
                  'Methods of hypnotic speech',
                ]}
              />
              <SkillList
                emoji={emoji['coaching']}
                name='"Secrets of NLP communication" (verbal and non-verbal communication)'
                skills={[
                  'Methods of establishing contact and trust with people',
                  'Strategies for achieving mutual understanding',
                  'Effective information gathering',
                  'Adjustment to the style of thinking of the interlocutor',
                ]}
              />
              <SkillList
                emoji={emoji['coaching']}
                name='"System thinking and communication management" (protection from speech manipulation)'
                skills={[
                  'Principles of systemic thinking in NLP',
                  'Model of multidimensional analysis of communication',
                  'Strategy for conflict resolution and negotiation design',
                ]}
              />
              <SkillList
                emoji={emoji['coaching']}
                name='"System work with goals" (model of quick self-study)'
                skills={[
                  'Basics of system work with goals',
                  'The time factor in working with goals and communication',
                  'The strategy of information gathering in coaching, psychotherapy and consulting',
                ]}
              />

              <SkillList
                emoji={emoji['coaching']}
                name='"There are turtles to the very bottom ... (integration)" (integration of all the material)'
                skills={[
                  'Connection models together',
                  'Preparation for certification',
                  'Certification',
                ]}
              />
            </List>
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='small' src={ImgTODO} />
        <Item.Content>
          <Item.Header>
            NLP MODELING
          </Item.Header>
          <Item.Description>
            <List>
              <SkillList
                emoji={emoji['modeling']}
                name='Mastery of modeling'
                skills={[
                  'Study skill NLP',
                  'Technique "Active Dreaming"',
                  'What is modeling in NLP, the initial stages of modeling',
                  'Recognition of behavioral and mental patterns',
                  'Basic modeling strategies',
                  'Behavioral and strategic modeling',
                  'Modeling emotions / states',
                  'Exercise for testing primary modeling skills',
                ]}
              />
              <SkillList
                emoji={emoji['modeling']}
                name='Explicit modeling: macrostatics'
                skills={[
                  'The concept of strategy, micro, macro and metastrategy. Strategies and model T.T.E.E',
                  'Functions of the stages of the T.T.E. in working with strategies',
                  'Identification and development of strategies: evocation, utilization. Work with strategies',
                  'Identify the macro strategy of the participants, explore possible ways to optimize the use of the identified strategy',
                  'Presentation of the structure of the report on the modeling project',
                ]}
              />
              <SkillList
                emoji={emoji['modeling']}
                name='Explicit modeling: microstrategies'
                skills={[
                  'Microstrategy recording language',
                  'Basic (basic) microstrategies',
                  'Identification and recording of individual microstates (memorization, motivation, decision making)',
                  'Strategy for the identification of microstrategies',
                  'Criteria for effective microstarties',
                  'Examples of the description of strategies',
                  'Microstrategy techniques NLP',
                  'Ways to change and embed strategies',
                ]}
              />
              <SkillList
                emoji={emoji['modeling']}
                name='Styles of thinking and behavior: metaprograms'
                skills={[
                  'Introduction to metaprograms',
                  'Contexts for applying metaprograms',
                  'Classification of meta-programs (metaprogram patterns)',
                  'Research metaprogrammnogo profile of man',
                  'Expression of metaprograms in speech',
                  'Identification of metaprograms in non-verbal communication',
                  'Metaprograms and training strategies',
                  'Supporting and conflicting metaprograms',
                  'Metaprogramming profiles. The mutual influence of metaprograms in the profile',
                  'The use of metaprograms in working with strategies',
                  'Approaches to the change and development of metaprograms',
                  'Technique "Changing metaprograms (motivation, reflection) on the time line"',
                  'Possibilities of independent development and application of metaprograms',
                ]}
              />
              <SkillList
                emoji={emoji['modeling']}
                name='System work with goals and values. Technology for building a "rich context.'
                skills={[
                  'Values and goals',
                  'Methods of identifying values their criteria',
                  'System of values. hierarchy of values',
                  'Interrelation of values and goals',
                  'The system of goals',
                  'Technology for building a "rich context.',
                ]}
              />
              <SkillList
                emoji={emoji['modeling']}
                name='The deep foundation of the world outlook: the structure of beliefs and the verbal methods of their change'
                skills={[
                  'The connection between the values and beliefs of a person. Structure of beliefs',
                  'Types of beliefs and mechanisms for their formation',
                  'Convincers',
                  'Supporting and limiting beliefs. Technology revealing limiting beliefs. The technology of creating supportive beliefs',
                  'Mechanisms for changing beliefs',
                  'Verbal tools for changing beliefs: promotion',
                ]}
              />
              <SkillList
                emoji={emoji['modeling']}
                name='Enrichment of the deep structure of the world outlook: NLP techniques for working with beliefs'
                skills={[
                  'Techniques for working with beliefs',
                  'Extracting and transforming limiting beliefs, embedding supportive beliefs',
                  'Grafting a new belief',
                  'Change in limiting beliefs through visual submodalities',
                  'Embedding a new belief with an imprint',
                  'The procedure for setting a new belief on the time line',
                ]}
              />
              <SkillList
                emoji={emoji['modeling']}
                name='The model of social NLP: analysis of existing techniques and design of authors technologies'
                skills={[
                  'Generative NLP',
                  'Model "Working conceptual work space in NLP"',
                  'Theory of self-organizing systems and the "Landscape of NLP"',
                  'Development of a three-position description',
                  '4 positions of perception',
                  'Technique "Going beyond the limits of one\'s own card with the help of the model of 4-positional perception" (Technique of "Four Position Perceptions")',
                ]}
              />
              <SkillList
                emoji={emoji['modeling']}
                name='Certification of the graduates of the course "NLP-Master"'
                skills={[
                  'Preparation for certification',
                  'Preparation and registration of modeling reports',
                  'Certification. Demonstration of the use of promotions. Demonstration of calibration and adjustment by metaprogram. Protection of the modeling project. System information gathering. Development and demonstration of equipment on request of the client',
                ]}
              />
            </List>
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='small' src={ImgTODO} />
        <Item.Content>
          <Item.Header>
            ERICKSONIAN HYPNOSIS
          </Item.Header>
          <Item.Description>
            <List>
              <SkillList
                emoji={emoji['hypnosis']}
                name='Basic techniques of Ericksonian hypnosis'
                skills={[
                  'Ideodynamic phenomena',
                  'Traditional and Ericksonian approaches to hypnosis',
                  'The concept of trance',
                  'The concept of the unconscious',
                  'The concept of a resource',
                  'Minimal signs of trance',
                  'Techniques of guidance and maintenance of hypnotic trance',
                  'Ratification',
                  'Dissociation',
                  'Relativization',
                  'Getting out of trance',
                  'Features of language use in trance',
                  'Harmonization of relations with the client',
                  'Finger ideomotor signaling'
                ]}
              />
              <SkillList
                emoji={emoji['hypnosis']}
                name='Indirect suggestions'
                skills={[
                  'Suggestions',
                  'The nature of suggestion',
                  'Classification of suggestions',
                  'Direct suggestions',
                  'Indirect suggestions: sequence of acceptance, implication, question, double bond, contextual, compound, truism, absence of mention, time-related, allusion, inverted, nonverbal',
                  'Hand catalepsy as non-verbal suggestion: exercise technique, therapeutic use',
                  'Open suggestions',
                  'Trans therapist'
                ]}
              />
              <SkillList
                emoji={emoji['hypnosis']}
                name='Metaphor in Ericksonian hypnosis'
                skills={[
                  'Microdynamics of trance',
                  'Levitation of the hand: technique of implementation, therapeutic use',
                  'Metaphor',
                  'The nature of metaphor',
                  'Properties of the therapeutic metaphor',
                  'Sources of metaphors',
                  'The client\'s own metaphor',
                  'Contact unconscious',
                  'The construction of metaphors',
                  'The scheme "Class of problems is a class of solutions"',
                  'The metaphor of early learning',
                  'Thematic metaphors',
                  'A metaphorical tale',
                  'Metaphor of change',
                  'Non-verbal metaphor'
                ]}
              />
              <SkillList
                emoji={emoji['hypnosis']}
                name='Hypnotic change in perceptual and cognitive processes'
                skills={[
                  'Confusion',
                  'Nature, purpose, principles of creation and utilization of confusion',
                  'Techniques for creating confusion',
                  'Techniques for breaking the template',
                  'The guidance is a handshake',
                  'Techniques of sensory overload',
                  'Disorientation in time',
                  'Disorientation in space',
                  'Conceptual confusion',
                  'Double pointing',
                  'Subjective distortion of time',
                  'Amnesia',
                  'Techniques of structuring amnesia',
                  'Built-in metaphor (Milton Erickson\'s Triple Loop)'
                ]}
              />
              <SkillList
                emoji={emoji['hypnosis']}
                name='Hypnosis'
                skills={[
                  'Going to the causes of symptoms and problems with the help of hypnotic techniques',
                  'Visual analogue scale',
                  'The keys of Le Crohn',
                  'Visualization of the symptom',
                  'Wisdom of the unconscious',
                  'Conversation with parts',
                  'TV screen',
                  'Passage along the corridor',
                  'Seven rooms',
                  'Trek to the sage',
                  'An introspective dream',
                  'Somatic bridge',
                  'Affective bridge',
                  'Journey to the body',
                  'Automatic drawing',
                  'Automatic letter',
                  'Drawing techniques',
                  'Mandala'
                ]}
              />
              <SkillList
                emoji={emoji['hypnosis']}
                name='Developmental therapy. Age regression and temporal progression'
                skills={[
                  'The hypnotic approach and hypnotic techniques "fit" into the individual history of human development (ontogeny) and into the history of the development of the family as a system',
                  'Typical problems that arise in key moments in the development of the individual and the family are considered, specific examples of the use of advanced hypnotic techniques for these problems are given',
                  'Continuum of age regression',
                  'Hypermemia and revision',
                  'Strategies for the therapeutic use of age regression',
                  'Techniques for creating age-related regression',
                  'Two-level dissociated age regression',
                  'Man from February',
                  '"Hall of Fame"',
                  'Temporal progression; strategy of use, technique of creation',
                  'Pseudo-orientation in time',
                  'Joint use of age regression and temporal progression',
                  'Milton Erickson and Eric Erickson: stages of the life cycle of the individual',
                  'Psychological tasks of age',
                  'Therapy in the moments of transition - the key moments of the life cycle',
                  'Stages of the family life cycle',
                  'Normative and non-normative changes',
                  'Losses',
                  'Conflicts',
                  'Therapy at the time of transition'
                ]}
              />
            </List>
          </Item.Description>
        </Item.Content>
      </Item>


    </Item.Group>
  );
}
