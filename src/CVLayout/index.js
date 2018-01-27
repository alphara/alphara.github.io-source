import _ from 'lodash'
import React, { Component } from 'react'
import {
  Container, Divider, Dropdown, Grid, Header, Icon, Image, List, Menu, Segment,
  Visibility
} from 'semantic-ui-react'

import Overview from './Overview'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import Education from './Education'
import Interests from './Interests'
import Contacts from './Contacts'

import './AnchorFix.css'

import ImgArtem from './img/Artem.jpg'

import ImgSurface1 from './img/surface/1.png'
import ImgSurface2 from './img/surface/2.jpg'
import ImgSurface8 from './img/surface/8.jpg'
import ImgSurface10 from './img/surface/10.jpg'
import ImgSurface15 from './img/surface/15.jpg'
import ImgSurface17 from './img/surface/17.jpg'
import ImgSurface36 from './img/surface/36.jpg'
import ImgSurface38 from './img/surface/38.png'
import ImgSurface42 from './img/surface/42.jpg'
import ImgSurface43 from './img/surface/43.jpg'
import ImgSurface45 from './img/surface/45.jpg'
import ImgSurface48 from './img/surface/48.png'

const listSurfaces = [
  ImgSurface1,
  ImgSurface2,
  ImgSurface8,
  ImgSurface10,
  ImgSurface15,
  ImgSurface17,
  ImgSurface36,
  ImgSurface38,
  ImgSurface42,
  ImgSurface43,
  ImgSurface45,
  ImgSurface48,
]
const ImgSurface = listSurfaces[Math.floor(Math.random() * listSurfaces.length)];


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
          backgroundImage: `url(${ImgSurface})`,
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
            fixed={menuFixed ? 'top' : null}
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
                        <span role="img" aria-label="Experience">📈 </span>
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
            <Overview />
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
              <span role="img" aria-label="Experience">📈 </span>
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
            <Projects />
          </Segment>

          <a name="education"> </a>
          <Segment color = 'blue'>
            <Header as='h3' textAlign='left' dividing>
              <span role="img" aria-label="Education">🎓 </span>
              EDUCATION
            </Header>
            <Education />
          </Segment>

          <a name="interests"> </a>
          <Segment color='violet'>
            <Header as='h3' textAlign='left' dividing>
              <span role="img" aria-label="Interests">💝 </span>
              INTERESTS
            </Header>
            <Interests />
          </Segment>

          <a name="contacts"> </a>
          <Segment color = 'purple'>
            <Header as='h3' textAlign='left' dividing>
              <span role="img" aria-label="Contacts">🌁 </span>
              CONTACTS
            </Header>
            <Contacts />
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

