import React from 'react'
import styled from 'styled-components'
import Meta from '../components/Layout/TitleAndMetas'
import Layout from '../components/Layout'
import SubMast from '../components/Shared/SubMast'
import LeftImage from '../images/use_left.png'
import RightImage from '../images/use_right.png'

const PageMain = styled.main`
  /* background: yellow; */
  padding: 3.750em 0;
  
  @media screen and (min-width: 48em) {
    grid-row: 2 / 3;
    grid-column: 2 / 16;
    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 2;
    padding-bottom: 15em;
  }
  @media screen and (min-width: 93em) {
    grid-column: 3 / 15;
  }
  h2 {
    padding-top: 20px;
  }
  img {
    max-height: 80%;
  }
`

const LeftContent = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  padding-right: 1.5em;
  padding-left: 1.5em;
  @media screen and (min-width: 48em) {
    padding-left: 0em;
  }
  img {
    display: flex;
    justify-self: center;
    float: right;
    max-height: 460px;
    shape-outside: polygon(214px 26px, 97.37% 2.4%, 100.48% 0.32%, 419px 3px, 418px 571px, 102.01% 102.49%, 66.01% 86.08%, 7.92% 58%, 3.3% 55.14%, 3.53% 49.99%, 7.23% 46.33%, 79px 161px);
    margin-right: -1.5em;
    padding: 1.313em 0 0.313em 1.313em;
    @media screen and (min-width: 75em) {
      height: 80%;
      shape-outside: polygon(251px 71px, 91.51% 2.4%, 96.29% 0.53%, 419px 3px, 418px 571px, 100.75% 102.08%, 66.01% 86.08%, 7.92% 58%, 3.3% 55.14%, 3.53% 49.99%, 7.23% 46.33%, 92px 237px);
      max-height: 630px;
    }
  }
  h2:first-of-type { padding-top: 0; }
`

const RightContent = styled.div`
  grid-column: 2 / -1;
  grid-row: 1 / 2;
  padding-left:1.5em;
  padding-right:1.5em;
  img {
    display: flex;
    justify-self: center;
    float: left;
    shape-outside: polygon(-1px 7px, 4.21% 1.85%, 8.28% 4.47%, 53px 51px, 62.19% 29.71%, 89.29% 41.48%, 97.54% 46.9%, 96.89% 50.72%, 94.87% 55.14%, 8.14% 100.08%, 4px 678px);
    margin-left: -1.5em;
    padding: 1.313em 1.5em 0.313em 0;
    shape-margin:0 10px 0 0;
    max-height: 460px;
    @media screen and (min-width: 75em) {
      shape-outside: polygon(0px 9px, 4.21% 1.85%, 9.1% 3.24%, 66px 51px, 65.90% 29.50%, 90.94% 41.89%, 98.78% 46.9%, 98.95% 50.72%, 97.34% 55.14%, 11.44% 99.26%, 4px 678px);
      height: 80%;
      max-height: 630px;
    }
  }
  h2:first-of-type { 
    @media screen and (min-width: 48em) {
      padding-top: 0; 
    }
  }
`

const UsesPage = () => {
  const page = "center-squared"
  const mast = "centered"
  return (
    <Layout pageLayout={page}>
      <Meta
        metaTitle = "What I use"
        metaDescription = "Detailing all the hardware, tools and setup I use for my work and music"
        metaKeywords = "Setup Tools Detail"
      />
      <SubMast layout={mast} title="What I Use" textContent="As part of my ongoing commitment to being more transparent, I thought it would be useful for other creatives to see the tools and hardware I use on a daily basis." />
      <PageMain>
        <LeftContent>
          <img src={LeftImage} alt="" />
          <h2>Browsers and Plugins</h2>
          <p>I use the Safari reading list quite extensively between mobile and desktop as it’s the best native experience when you’re in the apple eco. So I use Safari for general reading and surfing.  My primary work browser for design, is Firefox Developer Edition and for JavaScript dev, Google Chrome Canary. I tried for ages to stick with 1 browser for all dev work, but I found that this is the best all round method, for the tools each offer and what they’re best at. Plugins, on Chrome, I use FontFinder, Save to pocket, ReactJS & VueJS DevTools, Minimo, JSON Viewer, CSS Feature Toggles, Apollo Client Dev Tools and the Accessibility Insights tools. On Firefox, pretty much the only ones I have are again, the React and VueJS Dev tools. I find Firefox has so many tools baked in, that there’s not much need to extend it.</p>
          
          <h2>Code Editor</h2>
          <p>I come from a Sublime text background, primarily then went to Atom but found that to be too memory intensive so switched over to <a href="https://code.visualstudio.com/" title="Visual Studio Code">Visual Studio Code</a>. Look at my settings to see what how I have things configured.  I am also getting into using VIM though I’m not sure if I’ll use it to fully replace VS Code. I use <a href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl">Night Owl</a> theme by <a href="https://twitter.com/sarah_edo?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" title="Sarah Drasner on Twitter">Sarah Drasner</a> and the font is FireFlott</p>
          <h2>Design</h2>
          <p>I was a long time user of Fireworks and then moved over to illustrator before going to <a href="https://www.sketchapp.com/" title="Sketch">Sketch</a>. It’s the best tool imho for web design since the Fireworks days. I’m also going to see what <a href="https://www.adobe.com/uk/products/xd.html" title="Adobe XD">Adobe XD</a> is like and <a href="https://framer.com/" title="Framer">Framer</a>. Framer seems particularly good if you’re a React developer. Could be that framer becomes my go to design tool. I also use illustrator CC and small bits of photoshop CC when I really really have to.</p>
          <h2>JAMStack</h2>
          <p>My personal primary goto stack is HTML5, Styled Components, React/GatsbyJS, GraphQL, Sanity.io, Github and Netlify, Surge or Now. I’m taking a course on  Apollo Client, GraphQL Yoga, Prisma and Next JS and so that will probably my Stack for Server related React work.  In my day job, I use Sketch, HTML5, CSS/SASS/LESS JQuery/Vanilla JS and Craft CMS.</p>
        </LeftContent>
        <RightContent>
          <img src={RightImage} alt="" />
          <h2>Desktop Apps</h2>
          <p>I (proudly) use Tweetbot for Mac and iOS for my main timeline (mainly because of the realtime syncing between mobile and desktop) and Tweetdeck on desktop for all other timelines. Alfred App is my go to for launching apps. A mix of Notion / Apple Notes and Apple Reminders app for all my organisational needs (take a look at how I stay organised) and I’ve been trialling GitSpeek by the guys over at Lambda for managing my repos more easily. My go to news feed app is still the long standing Reeder.  Skype, Discord, Slack and Spectrum are my communication tools. Music wise, I am subscribed to both Spotify and Apple Music. I primarily use Spotify, but use Apple Music mostly for when I’m on the Run, literally!</p>
          <h2>Terminal</h2>
          <p>I’ve been primarily using <a href="https://www.iterm2.com/" title="iTerm2">iTerm2</a> with a few customisations here n there for the colours and fonts. I’ve also been trialling <a href="hyper.is" title="Hyper Terminal">Hyper</a> by the folks over at <a href="zeit.co" title="Zeit">Zeit.co</a>. It’s a little resource heavy but I’m loving just about everything with it, so I’ll likely move over to that in the near future.</p>
          <h2>Hardware</h2>
          <p>I own a Series 3 Apple Watch and an iPhone 8 plus. My main personal work horse is a 27” iMac 5k Retina with 24gigs of RAM (to be upgraded to 32) with a Magic Mouse 2 and Magic Keyboard. Pretty standard setup. For my day job, I use a 2017 15” Retina space grey MacBook Pro with 16gigs of ram and touch bar.</p>
          <h2>Music</h2>
          <p>For recording, I use a <a href="https://focusrite.com/usb-audio-interface/scarlett/scarlett-solo">Focusrite Scarlet Solo</a> which I plug my jack into and that goes into a standard USB port which I then am able to use Garageband with. I have 2 main amplifiers. 1 is a 50w Marshal MG50FX which I use with my <a href="https://www.pmtonline.co.uk/washburn-hd10sceb-electro-acoustic?utm_source=google&utm_medium=shopping&gclid=EAIaIQobChMI6ciSw8OE4QIVDrXtCh3iDQquEAQYAiABEgKIpvD_BwE">Washburn HD10SCEB Electric Acoustic</a>. My other amplifier, which I use with my Ephiphone Les Paul Sunburst is a 100w DSL 100h Mashall head sat onto of a half stack Vintage 1960 cab. Effects wise, I use a Korg AX10G multi effects unit and an Original CryBaby wah pedal.</p>
        </RightContent>
      </PageMain>


    </Layout>
  )
}

export default UsesPage;