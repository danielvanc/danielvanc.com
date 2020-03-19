/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import BackgroundNotification from './src/components/Specifics/BackgroundNotification';

const NotifyContain = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  padding: 20px 25px;
  @media screen and (min-width: 600px) {
    display: flex;
  }
  button {
    border-radius: 12px;
    padding: 6px 7px 6px;
    background: yellow;
    border: 0;
    margin-top: 10px;
    cursor: pointer;
    @media screen and (min-width: 600px) {
      margin-left: 2%;
      margin-top: 0;
    }
  }
`

function onServiceWorkerUpdateReady() {

    // const answer = window.confirm(
    //   `This application has been updated. ` +
    //   `Reload to display the latest version?`
    // )
    // if (answer === true) {
    //   window.location.reload()
    // }

    const root = document.createElement('div')
    document.body.appendChild(root)
  
    function SWNotify() {
      return (
        <>
          <BackgroundNotification>
            <NotifyContain>
              <p>This website has been updated in the background.</p>
              <button onClick={() => window.location.reload()}>Get the latest version.</button>
            </NotifyContain>
          </BackgroundNotification>
        </>
      )
    }
    ReactDOM.render(<SWNotify />, root);
}

export {onServiceWorkerUpdateReady};
