import React from 'react';
import MastImage from './MastImage'
import MastIntro from './MastIntro'
import MastStandFirst from './MastStandFirst'
import MastFollowUp from './MastFollowUp'
import MastMainBody from './MastBody'


const HomeMast = (props) => (
    <>
      <MastIntro pageTitle={props.pageTitle} />
      <MastStandFirst pageSubTitle={props.pageSubTitle} />
      <MastImage />
      <MastMainBody pageDescription={props.pageDescription } />
      <MastFollowUp pageFollowUp={props.pageFollowUp} />
    </>
)

export default HomeMast;