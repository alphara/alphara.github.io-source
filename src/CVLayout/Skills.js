import React from 'react'
import {
  List, Item, Divider
} from 'semantic-ui-react'

import SkillList from './SkillList'

import ImgAI from './img/ai.jpg'
import ImgFullStack from './img/full-stack.png'
import ImgEmbeddedSystems from './img/embedded-systems.jpg'
import ImgVideoPlatforms from './img/video-platforms.png'
import ImgDataFormats from './img/data-formats.jpg'
import ImgComputing from './img/computing.jpg'
import ImgProjectManagement from './img/project-management.jpg'

const emoji = {
  'ai': '🧠',
  'full-stack': '🤖',
  'embedded-systems': '🛰',
  'video-platforms': '📹',
  'data-formats': '📊',
  'computing': '☁️',
  'project-management': '🎯'
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


    </Item.Group>
  );
}
