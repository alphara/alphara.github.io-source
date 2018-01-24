import React from 'react'
import {
  Item
} from 'semantic-ui-react'

import ImgTODO from './img/TODO.png'

export default function Experience(props) {
  return (
    <Item.Group>
      <Item>
        <Item.Image size='small' src={ImgTODO} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Consultant">👨🏼‍💼</span>
            CONSULTANT @ VOICEBASE
          </Item.Header>
          <Item.Description>
            • San Francisco, CA, USA [remotely]
            • November  2016 - November  2017
            • A key contributor to: 1) dashboard of speech-to-text platform; 2) automatic speech recognition system. Consulted CTO, Director Engineering, teams of developers, devOps and Q&A. Recommended new team members and approaches in software engineering. Designed, developed, tested platform across a full-stack. Reviewed, refactored, improved code of team members. Organized continuous integration, deployment and delivery. Released minimum viable product. Scaled the product for small and medium business. Used AWS cloud computing (EC2, S3, Lambda, etc.). Researched integrations with third-party APIs. Integrated the platform with single sign-on providers. Integrated the service into Talkdesk, Zendesk, SalesForce platforms.
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='small' src={ImgTODO} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Consultant">👨🏼‍💼</span>
            CTO, CO-FOUNDER @ TRAFFIC PROTECTOR
          </Item.Header>
          <Item.Description>
            • Bali Indonesia [remotely]
            • January 2015 - October 2016
            • Executed design, development, testing, deployment and support of SaaS startup. Coordinated engineering of a highly effective web service that offers to web site owners a security level and instant notifications with website health status, traffic counters, speed and UI improvements. Managed an IT team with developers, designers, devOps and other members. Designed UI and API. Built backend and frontend. Programmed REST API. Reviewed and improved code of developers. Integrated payment processors. Integrated third party APIs. Used test-driven development. Deployed and scaled the web service. Produced technical documentation. Created step-by-step tutorial. Informed clients with newsletters. Coached and supported customers. Demonstrated the SaaS on Affiliate World Conference, Berlin, 2016.
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='small' src={ImgTODO} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Developer">👨🏻‍💻 </span>
            LEAD DEVELOPER @ NPTV, DIGITAL OCTOBER
          </Item.Header>
          <Item.Description>
            • Moscow, Russia
            • December 2013 - December 2014
            • Developed next-generation cloud-based digital TV-video platform. Guided design and development of a framework for video broadcasting, processing, capturing, etc. Released framework-based applications for interacting with users and media broadcasting through networks. Created automated tests. Tested and debugged the framework and video platform. Investigated, prepared and analyzed video samples (mp4, h.264, rtmp, raw, etc.). Wrote technical documentation. Participated in projects Web Elections and TV-broadcasting from Olympic games in Sochi, 2014.
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='small' src={ImgTODO} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Developer">👨🏻‍💻 </span>
            SENIOR EMBEDDED SYSTEMS ENGINEER @ SMP-SERVICE
          </Item.Header>
          <Item.Description>
            • Zelenograd, Russia
            • February 2006 - October 2013
            • Developed 3 generations of digital video recorders Tral. Engineered and released 200+ firmwares for embedded systems. Evaluated, scheduled and performed software development with team of developers and testers. Projected video streaming. Designed communication protocols and data storage formats. Built applications for video capturing, encoding, processing, data storing, configuration, email sending. Developed Linux-kernel modules for video ADC / DAC, audio, watchdog, serial port, buttons, LEDs, etc. Created and improved Linux-tools, apps, scripts, configurations. Improved code of boot loaders. Integrated GPS-receivers, ABOX security controllers, GPRS / EDGE / 3G-modems to DVRs. Tested and debugged software and hardware. Wrote technical documentation. Created SDK.
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='small' src={ImgTODO} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Developer">👨🏻‍💻 </span>
            С/С++ DEVELOPER @ RESEARCH INSTITUTE (MIET)
          </Item.Header>
          <Item.Description>
            • Zelengorad, Russia
            • September 2005 - February 2006
            • Developed software for micro controllers firmware installation. Designed communication protocol. Executed debugging and testing. Wrote technical documentation.
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}
