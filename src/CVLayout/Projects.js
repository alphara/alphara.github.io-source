import React from 'react'
import { Item, Divider, List, Button } from 'semantic-ui-react'

import ImgSmartCall from './img/smart-call.png'
import ImgWebasr from './img/webasr.png'
import ImgTrafficProtector from './img/traffic-protector.png'
import ImgNPTV from './img/nptv-1.png'
import ImgTral7 from './img/tral7.jpg'
import ImgTral5 from './img/tral5.jpg'
import ImgTral3 from './img/tral3.jpg'
import ImgTral1 from './img/tral1.jpg'
import ImgTralAuto from './img/tral-auto.jpg'
import ImgTralM from './img/tral-m.jpg'
import ImgTralParking from './img/tral-parking-ui.jpg'
import ImgSudoku from './img/sudoku.png'
import ImgGamePlaying from './img/game-playing.jpg'
import ImgPlanningSearch from './img/planning-search.jpg'
import ImgSignRecognizer from './img/sign-recognizer.jpg'
import ImgObjectDetection from './img/object-detection.png'
import ImgTimeSeries from './img/time-series.png'
import ImgTextGenerator from './img/text-generator.jpg'
import ImgMachineTranslation from './img/machine-translation.jpg'
import ImgSpeechRecognizer from './img/speech-recognizer.jpg'
import ImgKeyPoints from './img/key-points.jpg'
import ImgCasualGuest from './img/casual-guest.jpg'
import ImgHumor from './img/humor.jpg'
import ImgHumorBook from './img/humor-book.jpg'
import ImgSmartSkateboard from './img/smart-skateboard.jpg'

import PDFBook from './book/how-to-learn-to-joke-funny.pdf'

export default function Projects(props) {
  return (
    <Item.Group>
      <Item>
        <Item.Image size='tiny' src={ImgSmartCall} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Flag">🏁 </span>
            The VoiceBase Smart Call application
          </Item.Header>
          <Item.Description>
            The VoiceBase Smart Call application enables call
            center to visualize calls data with indicators based on words
            and phrases that are key to the success of call center business.

            The application helps to identify a business measurement for call
            center that will be a good indicator. For example: did the agent provide
            a proper greeting?

            The VoiceBase Smart Call application provides a dashboard
            view into what is happening with recorded calls.
            The dashboard contains a set of indicators arranged in a grid.
            An indicator is where you define the logic for classifying
            calls and where you visualize those classifications.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgWebasr} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Flag">🏁 </span>
            The VoiceBase WebASR (Automatic Speech Recognition)
          </Item.Header>
          <Item.Description>
            The WebASR streams audio recording from
            single page web application to automatic speech recognition engine.
            The engine is performing speech-to-text recognition, and returns
            transcript of the recording, sentiment analysis,
            highlighted specified keywords, statistics, and so on.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgTrafficProtector} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Flag">🏁 </span>
            TrafficProtector SaaS
          </Item.Header>
          <Item.Description>
            A highly effective web service that offers to web site owners
            a security level and instant notifications with website
            health status, traffic counters, speed and UI improvements.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgNPTV} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Flag">🏁 </span>
            Cloud-based interactive media platform  NPTV
          </Item.Header>
          <Item.Description>
            NPTV is the world’s most advanced cloud-based interactive media platform.
            Cloud-based apps that work on any device.
            NPTV creates fully immersive and responsive video streams with
            virtually no latency by rendering multi-sourced video in
            the cloud in real-time.
            Our unique thin client technology powers seamless user experiences
            across set-top boxes, smart TVs, desktop computers,
            tablets and smartphones.

            The platform has been used for such projects as
            web elections and
            TV-broadcasting from Olympic games in Sochi, 2014.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgTral7} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Flag">🏁 </span>
            Tral 7, multichannel network DVRs
          </Item.Header>
          <Item.Description>
            The series of DVRs "Tral-7" is a new generation of products built
            on a low-power high-performance parallel architecture processor.
            Compression: H.264 or M-JPEG;
            Record the archive on a removable or built-in hard disk of
            2.5-inch form factor, with a capacity of up to 2 TB;
            System of forced temperature stabilization of the hard disk;
            Full access to device settings and video archive via Ethernet
            via free, "MultiVision 2" software installed, simultaneous
            display of video streams from several devices;
            Automatic copying of a video archive to a remote computer,
            NAS or network cloud storage in remote data centers,
            the time of copying is determined by the schedule;
            High-reliable captive interface and power connectors "Hirose".
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgTral5} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Flag">🏁 </span>
            Tral 5, single-channel network DVRs
          </Item.Header>
          <Item.Description>
            Resolution video 704 × 576, 25 fps, compression H.264 or MPEG-4;
            Recording video and audio on USB-drive, SDHC-card and network drives (NAS);
            The recording of a motion detector, a timer and an external sensor;
            Power supply: 12 V, 200 mA or PoE - via a twisted pair of network cable.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgTral3} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Flag">🏁 </span>
            Tral 3, small-sized four-channel DVRs
          </Item.Header>
          <Item.Description>
            Extremely small dimensions, low power consumption;
            Video resolution 704 × 576 (half-frame, interpolation), 25 fps for all channels, MPEG-4 compression, two audio channels;
            Full access to the settings of the device and the video archive on the Ethernet network through the client software "MultiVision 2";
            Record the archive on a removable or built-in hard disk of 2.5-inch form factor, with a capacity of up to 2 TB;
            Recording of the motion detector, timer, external sensors through the loop controller "A-Box 4";
            Sending messages and current images to e-mail by events or a timer.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgTral1} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Flag">🏁 </span>
            Tral 1, compact DVRs
          </Item.Header>
          <Item.Description>
            DVR has resolution of four video channels - 512 × 288 (half-frame, interpolation);
            12 fps for all channels, MPEG-4 compression, two audio channels;
            Web-interface, full access to the device through Internet Explorer;
            Record the archive on the built-in 2.5" hard disk with 120 GB capacity;
            The recording of a motion detector, a timer, and external sensors.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgTralAuto} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Flag">🏁 </span>
            Car DVRs
          </Item.Header>
          <Item.Description>
            From one to eight video channels and up to two audio channels;
            Video resolution 704x576 at a frequency of up to 25 fps per channel;
            Record the archive on SDHC cards, USB-drives or 2.5 "HDD;
            Recording mode by an external sensor with a dry contact type output;
            Recording coordinates from an external GPS-receiver and viewing the track on the map.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgTralM} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Flag">🏁 </span>
            Tral-M, mobile video recorders
          </Item.Header>
          <Item.Description>
            Resolution video 704 × 576, 25 fps, compression H.264 or MPEG-4;
            Record video and audio to Flash memory cards in SDHC or CF formats;
            Long recording in the frame rate reduction mode, up to 1 frame per second;
            The inclusion of a recording on the motion detector, external sensor "dry contact";
            Durable metal case, low power consumption with power supply 9 ... 12 V.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgTralParking} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Flag">🏁 </span>
            Tral-Parking 2
          </Item.Header>
          <Item.Description>
            Tral Parking is a system for automating parking, accounting
            cars and management of the opening of the barrier.

            Automates the passage of cars on the image of the license plate;

            The control of the barrier on the list of numbers permitted to travel;

            The installation of a calculator that recognizes the license plate number,
            in hermetic housing of the camera;

            Recognition of the license plate and the saving of the image,
            time and date of travel on removable USB-Flash media;

            When the barrier is opened by the operator manually or by the driver using an RFID card, the photo and travel time are stored on a removable USB-Flash drive;
            access via a network interface without using a computer via "NetCore Parking".
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgSudoku} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Rocket">🚀 </span>
            AI Agent that solves Sudoku
          </Item.Header>
          <Item.Description>
            Created an AI to solve Diagonal Sudokus using constraint
            propagation and search techniques. Additionally, taught the
            agent to use the Naked Twins advanced Sudoku strategy.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgGamePlaying} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Rocket">🚀 </span>
            AI Game-Playing Agent
          </Item.Header>
          <Item.Description>
            Created an AI that beats human opponents in the game of
            Isolation using Minimax, Alpha-Beta Search,
            and Iterative Deepening.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgPlanningSearch} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Rocket">🚀 </span>
            Planning Search
          </Item.Header>
          <Item.Description>
            Used logic and planning techniques to create an AI that finds
            the most efficient route to route cargo around the world to their
            respective destinations. This project used a combination
            of propositional logic and search along with A* heuristics
            to find optimal planning solutions.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgSignRecognizer} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Rocket">🚀 </span>
            Sign Language Recognizer
          </Item.Header>
          <Item.Description>
            Built a system that can recognize words communicated using the
            American Sign Language (ASL). Trained a set of Hidden Markov
            Models (HMMs) using part of a preprocessed dataset of tracked hand
            and nose positions extracted from video to try and identify
            individual words from test sequences.

            Experimented with model selection techniques including BIC, DIC,
            and K-fold Cross Validation.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgObjectDetection} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Rocket">🚀 </span>
            Video Object Classifier (dog breed)
          </Item.Header>
          <Item.Description>
            Built an algorithm to identify canine breed given an image of
            a dog. If given image of a human, the algorithm identifies a
            resembling dog breed.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgTimeSeries} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Rocket">🚀 </span>
            Time Series Predictor (stock prices)
          </Item.Header>
          <Item.Description>
            Recurrent Neural Network (RNN) that can generate sequences based
            on input data with a focus on application to use real market data
            in order to predict future stock prices using an RNN model.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgTextGenerator} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Rocket">🚀 </span>
            Text Generation
          </Item.Header>
          <Item.Description>
            Recurrent Neural Network (RNN) that can generate sequences based
            on input data and trained on Sir Arthur Conan Doyle's
            classic novel Sherlock Holmes and generates wacky sentences based
            on it that may become the next great Sherlock Holmes novel.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgMachineTranslation} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Rocket">🚀 </span>
            Machine Translation 
          </Item.Header>
          <Item.Description>
            A deep neural network that functions as part of an end-to-end
            machine translation pipeline. The completed pipeline accepts
            English text as input and returns the French translation.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgSpeechRecognizer} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Rocket">🚀 </span>
            DNN Speech Recognizer
          </Item.Header>
          <Item.Description>
            A deep neural network that functions as part of
            an end-to-end automatic speech recognition (ASR) pipeline.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgKeyPoints} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Rocket">🚀 </span>
            Facial Keypoint Detection and Real-time Filtering
          </Item.Header>
          <Item.Description>
            An end-to-end facial keypoint recognition system.
            Facial keypoints include points around the eyes, nose, and mouth
            on any face and are used in many applications, from facial
            tracking to emotion recognition. The completed project takes
            in any image containing faces and identifies the location of
            each face and their facial keypoints.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgCasualGuest} />
        <Item.Content>
          <Item.Header as='h3'>
            <span role="img" aria-label="Icon">🎭 </span>
            Theatrical Play "Casual Guest"
          </Item.Header>
          <Item.Description>
            Played in the theatrical performance "Casual Guest" based on play
            "Million in the Wedding Basket" of Giulio Scarnicci and
            Renzo Tarabusi. The play was shown in Vladimir Vysotsky's House on Taganka
            in Moscow in June 2010.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgHumor} />
        <Item.Content>
          <Item.Header as='h3'>
            <span role="img" aria-label="Icon">🎭 </span>
            Online Webinar "How to create funny jokes"
          </Item.Header>
          <Item.Description>
            Designed, orginized and conducted an online webinar with 50+
            participants. The webinar was designed with of modeling
            genuis of the most successful humorists of Russia.
            The humor model was created by myself and includes
            skills, behavior, beleifs, values, strategies and techinques
            of professional humorists.
            Used Information Technologies for teaching people.
            Received awesome feedback from participants
            of the webinar.
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgHumorBook} />
        <Item.Content>
          <Item.Header as='h3'>
            <span role="img" aria-label="Icon">📖 </span>
            Book "How to learn to joke funny"
          </Item.Header>
          <Item.Description>
            Wrote a book "How to learn to joke funny" on base of modeling
            of the best Russian humorists.
            <br /><br />
            The book includes the following topics:
            About humor;
            The Formula of Laughter;
            The structure of the joke;
            Creating jokes;
            Spontaneity of humor;
            Solving problems and tasks through humor;
            Integration, answers to questions, further development;
            And others.
            <br /><br />
            You can download the book on Russian.
            <Button basic floated='right' href={PDFBook} target='_blank'>
              Read the book
            </Button>
          </Item.Description>
        </Item.Content>
      </Item>
      <Divider />

      <Item>
        <Item.Image size='tiny' src={ImgSmartSkateboard} />
        <Item.Content>
          <Item.Header>
            <span role="img" aria-label="Medal">🥇 </span>
            WINNER OF PAYPAL HACKATHON
          </Item.Header>
          <Item.Description>
            Moscow, 2014.
            Smart Skateboard with PayPal integration.
            We designed, developed and demonstrated the prototype of smart skateboard in 24 hours.
            It was real skateboard based on Internet-of-things (IoT) technologies.
            Android application lets people to hold competitions on skateboards through Internet.
            Application detects tricks and gives scores to competitors.
            The person who gets the best score is the winner of the competition.
            He takes money raised in the competition though PayPal.
            We won 1st place in the PayPal BattleHack Hackathon.
            As reward, we flew to Silicon Valley to the main office of the PayPal company.
          </Item.Description>
        </Item.Content>
      </Item>

    </Item.Group>
  );
}
