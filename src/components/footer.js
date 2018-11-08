import React from "react"
import styled from "styled-components"

const FootNotes = styled.div`
  grid-area: foot-notes;
`
const Copyright = styled.div`
  grid-area: copyright;
`
const Socials = styled.div`
  grid-area: socials;
`
const OpenSource = styled.div`
  grid-area: opensource;
`
const Updated = styled.div`
  grid-area: updated;
`

const Footer = () => {
  return (
    <>
      <Socials>Socials</Socials>
      <OpenSource>Open Source</OpenSource>
      <FootNotes>FootNotes</FootNotes>
      <Copyright>Copyright</Copyright>
      <Updated>Updated</Updated>
    </>
  )
}

export default Footer;