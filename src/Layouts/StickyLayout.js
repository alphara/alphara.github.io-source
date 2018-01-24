import _ from 'lodash'
import React, { Component } from 'react'
import {
  Container, Divider, Dropdown, Grid, Header, Icon, Image, List, Menu, Segment,
  Visibility
} from 'semantic-ui-react'

import Skills from './Skills'
import Experience from './Experience'

import './AnchorFix.css'

import ImgArtem from './img/Artem.jpg'
import ImgNeuron from './img/neuron.jpg'

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

const overlayStyle = {
  float: 'left',
  margin: '0em 3em 1em 0em',
}

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  top: '80px',
  zIndex: 10,
}

const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease',
}

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: '710px',
}

export default class StickyLayout extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state

    if (!overlayRect) this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
  }

  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { menuFixed, overlayFixed, overlayRect } = this.state

    return (
      <div>
        <Container fluid style={{
          paddingTop: '3em',
          paddingBottom: '3em',
          backgroundImage: `url(${ImgNeuron})`,
          backgroundBlendMode: 'screen',
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}>
          <Image size='small' src={ImgArtem} circular centered/>
          <Header as='h1' textAlign='center' style={{
            color: 'white',
            fontSize: '4em',
            textShadow: '1px 1px olive'
          }}>
            Artem Arakcheev
          </Header>
          <Header as='h2' textAlign='center' style={{
            color: 'white',
            fontStyle: 'italic',
            fontSize: '3em',
            textShadow: '1px 1px olive'
          }}>
            Artificial Intelligence Architect
          </Header>
        </Container>

        {/* Attaching the top menu is a simple operation, we only switch `fixed` prop add add another styles if it has
            gone beyond the scope of visibility
          */}
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed && 'top'}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item>
                <Image size='mini' src={ImgArtem} circular/>
              </Menu.Item>
              <Menu.Item header>Artem Arakcheev</Menu.Item>

              <Menu.Menu position='right'>
                <Dropdown text='☰' pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <a href="#overview">
                        <span role="img" aria-label="Overview">🎩 </span>
                        Overview
                      </a>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                      <a href="#skills">
                        <span role="img" aria-label="Skills">🦄  </span>
                        Skills
                      </a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <a href="#experience">
                        <span role="img" aria-label="Experiencw">📈 </span>
                        Experience
                      </a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <a href="#projects">
                        <span role="img" aria-label="Projects">🏆 </span>
                        Projects
                      </a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <a href="#education">
                        <span role="img" aria-label="Education">🎓 </span>
                        Education
                      </a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <a href="#interests">
                        <span role="img" aria-label="Interests">💝 </span>
                        Interests
                      </a>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                      <a href="#contacts">
                        <span role="img" aria-label="Contacts">🌁 </span>
                        Contacts
                      </a>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Container>
          </Menu>
        </Visibility>

        <Container text>
          <a name="overview"> </a>
          <Segment color = 'red'>
            <Header as='h3' textAlign='left' dividing>
              <span role="img" aria-label="Overview">🎩 </span>
              OVERVIEW
            </Header>
            <Visibility
              offset={80}
              once={false}
              onTopPassed={this.stickOverlay}
              onTopVisible={this.unStickOverlay}
              style={overlayFixed ? { ...overlayStyle, ...overlayRect } : {}}
            />

            <div
              ref={this.handleOverlayRef}
              style={overlayFixed ? fixedOverlayStyle : overlayStyle}
            >
              <Menu
                icon='labeled'
                style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
                vertical
              >
                <Menu.Item href='//github.com/alphara' target='_blank' >
                  <Icon name='github' />
                 GitHub
                </Menu.Item>

                <Menu.Item href='//www.linkedin.com/in/artem-arakcheev' target='_blank' >
                  <Icon name='linkedin' />
                  LinkedIn
                </Menu.Item>

                <Menu.Item href='//twitter.com/alphara' target='_blank'>
                  <Icon name='twitter' />
                 Twitter
                </Menu.Item>

                <Menu.Item href='mailto:artarakcheev@gmail.com' target='_blank'>
                  <Icon name='mail' />
                 Email
                </Menu.Item>
              </Menu>
            </div>
            <p>
              Artem Arakcheev is Artificial Intelligence Full-Stack Software Architect.
              12+ years of successful experience in software development. Higher educated as Software Engineer (MCS). Expert in all phases of software development lifecycle: in specification of software requirements, software design, implementation, testing/debugging, integration, deployment/installation and maintenance. Developing Artificial Intelligence applications, Machine Learning and Deep Learning algorithms, Neural Network architectures, SaaS (full-stack), APIs, web services, applications, utilities, components, kernel modules, boot loaders, firmware and system software for multiple platforms. Using cloud computing, servers, desktops, tablets, mobiles and embedded systems. Excellent in integration of third-party APIs, payment processors, libraries and open source code. Responsibilities include providing innovative and cost-effective engineering solutions to meet technical objectives and timing. Works fine independently and in a team. Analytical, creative, critical and innovative thinker. Excellent communications skills. Able to work with clients directly. Consultant. SaaS startup co-founder. Winner of PayPal hackathon (Moscow, 2014). Interests are Artificial Intelligence, Quantum Computing, Brain-machine interfaces.
            </p>
          </Segment>

          <a name="skills"> </a>
          <Segment color = 'orange'>
            <Header as='h3' textAlign='left' dividing>
              <span role="img" aria-label="Skills">🦄 </span>
              SKILLS
            </Header>
            <Skills />
          </Segment>

          <a name="experience"> </a>
          <Segment color = 'yellow'>
            <Header as='h3' textAlign='left' dividing>
              <span role="img" aria-label="Experiencw">📈 </span>
              EXPERIENCE
            </Header>
            <Experience />
          </Segment>

          <a name="projects"> </a>
          <Segment color = 'green'>
            <Header as='h3' textAlign='left' dividing>
              <span role="img" aria-label="Projects">🏆 </span>
              PROJECTS
            </Header>
            <p>
🏁 WORKING PROJECTS
 Dashboard for Speech-To-Text platform
 Automatic speech recognition system
 TrafficProtector SaaS
 Cloud-based interactive media platform NPTV
 Web elections
 TV-broadcasting from Olympic games in Sochi, 2014
 Digital video recorders Tral-1, Tral-3, Tral-5, Tral-7
 Automated parking access control Tral-Parking

🚀 STUDYING PROJECTS
Sudoku AI solver
AI Game-Playing Agent
Planning Search
Sign Language Recognizer
Video Object Classifier (dog breed)
Time Series Predictor (stock prices)
Text Generation
Machine Translation 

🥇WINNER OF PAYPAL HACKATHON
Moscow, 2014     Smart Skateboard IOT
            </p>
          </Segment>

          <a name="education"> </a>
          <Segment color = 'blue'>
            <Header as='h3' textAlign='left' dividing>
              <span role="img" aria-label="Education">🎓 </span>
              EDUCATION
            </Header>
            <p>
👨🏻‍🎓 ARTIFICIAL INTELLIGENCE ENGINEER @ UDACITY Online education

👨🏻‍🎓 SOFTWARE ENGINEER @ NATIONAL RESEARCH UNIVERSITY OF ELECTRONIC TECHNOLOGY
Zelengorad, Russia
Master in Computer Science (MSc) degree equivalent.
Program 220400 «The Software of Computer facilities and the Automated Systems».
Courseworks: marketing basics, basics of electrical engineering and circuit theory, engineering and computer graphics, fundamentals of metrology, cybersecurity, numerical methods, software and automated systems
Capstone project “development of digital video recorder”
            </p>
          </Segment>

          <a name="interests"> </a>
          <Segment color='violet'>
            <Header as='h3' textAlign='left' dividing>
              <span role="img" aria-label="Interests">💝 </span>
              INTERESTS
            </Header>
            <p>
Traveling
Swimming
Tensegrity
Yoga
Hypnosis
Laughter
            </p>
          </Segment>

          <a name="contacts"> </a>
          <Segment color = 'purple'>
            <Header as='h3' textAlign='left' dividing>
              <span role="img" aria-label="Contacts">🌁 </span>
              CONTACTS
            </Header>
            <p>
Website https://alphara.github.io
GitHub https://github.com/alphara
LinkedIn https://www.linkedin.com/in/artem-arakcheev
Twitter https://twitter.com/alphara
Facebook https://www.facebook.com/artarakcheev
Email artarakcheev@gmail.com
Phone +55 (21) 96967-6369
            </p>
          </Segment>

        </Container>

        <Segment
          inverted
          style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
          vertical
        >
          <Container textAlign='center'>
            <Grid columns={1} divided stackable inverted>
              <Grid.Row>
                <Grid.Column>
                  <Header inverted as='h4' content='Artem Arakcheev' />
                  <List>
                    <List.Item as='p'>Artificial Intelligence Architect</List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Image size='tiny' src={ImgArtem} circular centered style={{
              marginTop: '2em'
            }}/>
            <Divider inverted section />
            <List horizontal inverted divided link>
              <List.Item as='a' href='//alphara.github.io' target='_blank'>Website</List.Item>
              <List.Item as='a' href='//github.com/alphara' target='_blank'>GitHub</List.Item>
              <List.Item as='a' href='//linkedin.com/in/artem-arakcheev' target='_blank'>LinkedIn</List.Item>
              <List.Item as='a' href='//twitter.com/alphara' target='_blank'>Twitter</List.Item>
              <List.Item as='a' href='//facebook.com/artarakcheev' target='_blank'>Facebook</List.Item>
              <List.Item as='a' href='mailto:artarakcheev@gmail.com' target='_blank'>Email</List.Item>
              <List.Item as='p'>+55 (21) 96967-6369</List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    )
  }
}

