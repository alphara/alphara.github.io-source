import React from 'react'
import {
  List, Item, Divider
} from 'semantic-ui-react'

import SkillList from './SkillList'

import ImgAI from './img/ai.jpg'
import ImgFullStack from './img/full-stack.png'
import ImgEmbeddedSystems from './img/embedded-systems.jpg'
import ImgVideoPlatforms from './img/video-platforms.jpg'
import ImgDataFormats from './img/data-formats.jpg'
import ImgComputing from './img/computing.jpg'
import ImgProjectManagement from './img/project-management.jpg'
import ImgActing from './img/acting.jpg'
import ImgTrainer from './img/trainer.jpg'
import ImgCoaching from './img/coaching.jpg'
import ImgModelingGenius from './img/modeling-genius.jpg'
import ImgEricksonHypnosis from './img/erickson-hypnosis.jpg'

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
  'modeling': '🕵🏻‍',
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
        <Item.Image size='small' src={ImgTrainer} />
        <Item.Content>
          <Item.Header>
            PUBLIC SPEAKING AND TRAINING
          </Item.Header>
          <Item.Description>
            <List>
              <SkillList
                emoji={emoji['training']}
                name='Oratory'
                skills={[
                  'Basic competencies',
                  'Structure of speech',
                  'Effective performance',
                  'Key micro- and macro skills',
                  'Positive presuppositions',
                  'Behavioral flexibility',
                  'Development of oratory style',
                ]}
              />
              <SkillList
                emoji={emoji['training']}
                name='Training/Speech Design'
                skills={[
                  'Presentations',
                  'Trainings',
                  'Effective content',
                  'Presupposition of teaching',
                  'Diversity of learning activites',
                  'Using style of successful speakers',
                ]}
              />
              <SkillList
                emoji={emoji['training']}
                name='Motivation'
                skills={[
                  'Structure',
                  'Verbal motivation',
                  'Unconscious influence',
                  'Cross-cutting motivation',
                  'Individual preferences',
                ]}
              />
              <SkillList
                emoji={emoji['training']}
                name='Group Dynamics'
                skills={[
                  'Meta-messages',
                  'Productive states',
                  'Controling emotional states',
                  'Maintaining learning states',
                  'Non-verbal communication',
                  'Identifying presuppositions',
                ]}
              />
              <SkillList
                emoji={emoji['training']}
                name='Utilizing difficulties'
                skills={[
                  'Response to positive intentions',
                  'Work with objections',
                  'Tools and strategies',
                  'Work with "difficult" members',
                ]}
              />
            </List>
          </Item.Description>
        </Item.Content>
      </Item>

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
        <Item.Image size='small' src={ImgCoaching} />
        <Item.Content>
          <Item.Header>
            COACHING AND THERAPY
          </Item.Header>
          <Item.Description>
            <List>
              <SkillList
                emoji={emoji['coaching']}
                name='Effective goal-setting'
                skills={[
                  'Strategic thinking',
                  'Highly productive states',
                  'Creative strategies',
                ]}
              />
              <SkillList
                emoji={emoji['coaching']}
                name='Emotional intelligence'
                skills={[
                  'Managing emotions',
                  'Reading emotions',
                  'Broadcasting emotions',
                  'Changing Personal History',
                  'Switching of negative emotions',
                ]}
              />
              <SkillList
                emoji={emoji['coaching']}
                name='Structure of thinking'
                skills={[
                  'Roles, beliefs and thinking',
                  'Managing personal outlook',
                  'Motivation management',
                  'Verbal persuasion',
                ]}
              />
              <SkillList
                emoji={emoji['coaching']}
                name='Work with fears and restrictions'
                skills={[
                  'Structure of the personality',
                  'Changing habits',
                  'Stopping internal sabotage',
                  'Elimination of dilemmas and contradictions',
                  'Work with unconscious',
                  'Hypnotic speech',
                ]}
              />
              <SkillList
                emoji={emoji['coaching']}
                name='Verbal and non-verbal communication'
                skills={[
                  'Establishing trust contact',
                  'Effective information gathering',
                  'Adjustment of interlocutor thinking style',
                  'Mutual understanding',
                ]}
              />
              <SkillList
                emoji={emoji['coaching']}
                name='System thinking'
                skills={[
                  'Communication management',
                  'Manipulation protection',
                  'Communication analysis',
                  'Conflict resolution',
                  'Negotiation design',
                ]}
              />
              <SkillList
                emoji={emoji['coaching']}
                name='System work with goals'
                skills={[
                  'Quick self-study',
                  'Time factor',
                  'Information gathering',
                  'Integration',
                ]}
              />
            </List>
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='small' src={ImgModelingGenius} />
        <Item.Content>
          <Item.Header>
            MODELING OF GENIUS
          </Item.Header>
          <Item.Description>
            <List>
              <SkillList
                emoji={emoji['modeling']}
                name='Mastery of modeling'
                skills={[
                  'Active Dreaming',
                  'Patterns recognition',
                  'Stategy modeling',
                  'Behavioral modeling',
                  'Emotions/states modeling',
                  'Micro, macro and meta strategies',
                ]}
              />
              <SkillList
                emoji={emoji['modeling']}
                name='Macro strategies modeling'
                skills={[
                  'TOTE model',
                  'Strategy identification',
                  'Strategy development',
                  'Evocation',
                  'Utilization',
                  'Strategy optimization',
                ]}
              />
              <SkillList
                emoji={emoji['modeling']}
                name='Micro strategies modeling'
                skills={[
                  'Microstrategy recording language',
                  'Basic microstrategies',
                  'Memorization',
                  'Motivation',
                  'Decision making',
                  'Evaluation of effectiviness',
                  'Changing and embedding strategies',
                ]}
              />
              <SkillList
                emoji={emoji['modeling']}
                name='Styles of thinking and behavior'
                skills={[
                  'Meta-programs research',
                  'Changing meta-programs',
                  'Changing motivation',
                  'Changing reflection',
                  'Training strategies',
                ]}
              />
              <SkillList
                emoji={emoji['modeling']}
                name='System work with goals and values'
                skills={[
                  'Values identification',
                  'System of values',
                  'Hierarchy of values',
                  'System of goals',
                  'Building rich context',
                ]}
              />
              <SkillList
                emoji={emoji['modeling']}
                name='Formation of world outlook'
                skills={[
                  'Structure of beliefs',
                  'Beliefs formation',
                  'Convincers',
                  'Revealing limiting beliefs',
                  'Creating supportive beliefs',
                  'Embedding new beliefs',
                  'Changing limits',
                  'Changing beliefs',
                  'Promotion',
                  'Language tricks',
                ]}
              />
              <SkillList
                emoji={emoji['modeling']}
                name='Authors technologies design'
                skills={[
                  'Models and techniques generation',
                  'Working conceptual work space',
                  'Self-organizing systems',
                  'Three-position description',
                  'Four-position perception',
                  'Going beyond limits',
                ]}
              />
            </List>
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='small' src={ImgEricksonHypnosis} />
        <Item.Content>
          <Item.Header>
            ERICKSONIAN HYPNOSIS
          </Item.Header>
          <Item.Description>
            <List>
              <SkillList
                emoji={emoji['hypnosis']}
                name='Basic techniques'
                skills={[
                  'Hypnotic trance guidance and maintenance',
                  'Ideodynamic phenomena',
                  'Minimal signs of trance',
                  'Ratification',
                  'Dissociation',
                  'Relativization',
                  'Getting out of trance',
                  'Harmonization of relations',
                  'Finger ideomotor signaling'
                ]}
              />
              <SkillList
                emoji={emoji['hypnosis']}
                name='Indirect suggestions'
                skills={[
                  'Suggestions',
                  'Direct suggestions',
                  'Indirect suggestions',
                  'Sequence of acceptance',
                  'Implication',
                  'Question',
                  'Double bond',
                  'Contextual',
                  'Compound',
                  'Truism',
                  'Absence of mention',
                  'Time-related',
                  'Allusion',
                  'Inverted',
                  'Nonverbal',
                  'Hand catalepsy',
                  'Open suggestions',
                  'Trans therapist'
                ]}
              />
              <SkillList
                emoji={emoji['hypnosis']}
                name='Metaphor'
                skills={[
                  'Microdynamics of trance',
                  'Levitation of the hand',
                  'Therapeutic metaphor',
                  'Contact unconscious',
                  'Construction of metaphors',
                  'Class of solutions',
                  'Early learning',
                  'Thematic metaphors',
                  'Metaphorical tale',
                  'Metaphor of change',
                  'Non-verbal metaphor'
                ]}
              />
              <SkillList
                emoji={emoji['hypnosis']}
                name='Hypnotic change in perceptual and cognitive processes'
                skills={[
                  'Creation of confusion',
                  'Utilization of confusion',
                  'Breaking template',
                  'Trance guidance with handshake',
                  'Sensory overload',
                  'Disorientation in time',
                  'Disorientation in space',
                  'Conceptual confusion',
                  'Double pointing',
                  'Subjective distortion of time',
                  'Amnesia',
                  'Built-in metaphor',
                  'Milton Erickson\'s Triple Loop'
                ]}
              />
              <SkillList
                emoji={emoji['hypnosis']}
                name='Hypno analysis'
                skills={[
                  'Work with symptoms and problems',
                  'Visual analogue scale',
                  'The keys of Le Crohn',
                  'Visualization of symptom',
                  'Wisdom of unconscioussness',
                  'Conversation with parts',
                  'TV screen',
                  'Passage along the corridor',
                  'Seven rooms',
                  'Trek to the sage',
                  'An introspective dream',
                  'Somatic bridge',
                  'Affective bridge',
                  'Journey to body',
                  'Automatic drawing',
                  'Automatic letter',
                  'Drawing techniques',
                  'Mandala'
                ]}
              />
              <SkillList
                emoji={emoji['hypnosis']}
                name='Developmental therapy'
                skills={[
                  'Age regression',
                  'Temporal progression',
                  'Hypermemia',
                  'Revision',
                  'Two-level dissociated age regression',
                  '"Man from February"',
                  '"Hall of Fame"',
                  'Pseudo-orientation in time',
                  'Stages of the life cycle',
                  'Psychological tasks of age',
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
