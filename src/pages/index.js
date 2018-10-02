import React from "react"
import styled from 'styled-components'
import Layout from '../components/layout'

const Title = styled.h1 `
  font-size: 38px;
  margin: 0 0 8px 0;
  @media screen and (min-width: 480px) {
    font-size: 64px;
    margin: 0 0 20px 0
  }
`
const Paragraph = styled.p `
  font-size: 16px;
  line-height: 1.7;
  margin: 0 0 15px 0;
  @media screen and (min-width: 480px) {
    font-size: 19px;
    line-height: 1.7;
  }
`
const ParagraphItalic = styled.p `
  font-size: 15px;
  font-style: italic;
  line-height: 1.4;
`

const IndexPage = () => (
  <Layout>
    <Title className="heading">Hello world!</Title>
    <Paragraph>
      I’m Daniel Van Cuylenburg - a consumer focused, business minded, digital creative,  with 2 decades of experience designing and building digital experiences for in-house large U.K corporations, agencies and freelancers. <br class="br" />During such time, I’ve had the pleasure to work with world wide recognised brands such as: <a href="https://www.virgin.com/" title="Virgin">Virgin</a>, <a href="https://www.google.co.uk/" title="Google">Google</a>, <a href="https://www.bt.com" title="BT">BT</a>, <a href="https://www.landrover.co.uk">Land Rover</a>, <a href="https://www.unicef.org.uk/" title="Unicef">Unicef</a> and <a href="https://www.eonenergy.com/">E-ON</a>.  
    </Paragraph>
    <Paragraph>
      I currently work in the digital team of the <br class="br" /><a href="https://www.ellenmacarthurfoundation.org">Ellen MacArthur Foundation</a> as a Web Designer and <br class="br" /> Front-end Developer.
    </Paragraph>
    <Paragraph>
      I’m currently re-developing my site, <br class="br" />but in the mean time, find me on <br class="br" /><a href="https://twitter.com/danielvanc" title="My Twitter account">Twitter</a>, <a href="https://github.com/danielvanc" title="My GitHub repository">Github</a> and <a href="https://codepen.io/danielvanc/" title="My profile on CodePen">CodePen</a>.
    </Paragraph>
    <ParagraphItalic>
      Last updated: 1/10/2018
    </ParagraphItalic>
  </Layout>
)

export default IndexPage;