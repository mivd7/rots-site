import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Image from '../components/image';

export default ({data}) => {
  const [activeLogo, setActiveLogo] = useState({});
  const [activated, setActivated] = useState(false)
  const activateLogoDialog = (logo) => {
    if(logo.childImageSharp.id === '52832046-2a83-5b5c-ba55-e3b4ffbb5d4d') {
      setActiveLogo({...logo, subject: 'art'})
    } else {
      setActiveLogo({...logo, subject: 'poetry'})
    }
    setActivated(true)
  }
  const closeLogoDialog = () => {
    setActiveLogo({})
    setActivated(false)
  }
  const logos = data.images.nodes
  return (
    <Layout>
      <SEO title="Landing on the Rock" />
      {!activated && logos.map(logo => 
        ( <div key={logo.id} onClick={() => activateLogoDialog(logo)}>
          {/* to={`/art`}> */}
              <Image alt={`logo-${logos.indexOf(logo)}`} source={logo.relativePath}/>
          </div>
        )
      )}
      {activated && 
        <>
          <h1>Here be Rots' {activeLogo.subject}</h1>
          {activeLogo.subject === 'poetry' && 
          <div onClick={() => closeLogoDialog()}>
            <Image alt={`logo-frozen-${logos.indexOf(activeLogo)}`} source={activeLogo.relativePath} activeLogo={activeLogo}/>
            <div class="dialog-container">
              <p>
                notes are burning, more scripture than a script
                me so rich, don’t have to write a hit, but hey, we ‘they' too

                Everything is everything is one, except for me and moving on
                it’s not about you, 

                Day two 
                I wake up to your dreams no cloud seems
                Unable to run trough
                Exception me and you
                EAT YOU LITTLE BUTTERFLY
                I’m feathered in the future featuring
                Sting me like a bee, Muhammad Ali
                Eat you all up 
                Choking on a coke
                Commercialiaty broke
                Me is my speciality
                Space is not reality
                Re-ap the shit 
                Out of you 
                Shit is true



                Unable to run trough
                Exception: me and you 
                Too troubled: It’s not us but the others
                I SUIT WITH FEATHERS
                You feel flattered
                I'm no butterfly
                Thy don’t go so high 
                I don’t have FIVE GIANTS to step on
                BUT BABY COME ON 
                NOTHING IS OVERRATED
                I’m not there
                I’m belated

                Be a lady

                Smile on your face, I won’t rock you
                never su if I snore 
                I am asleep when I do 
                Should I believe you or: are you
                you the one dreaming
                Blonde girl speaking to me she never begawd
                Me just digging her for not being sleazy
                It’s Not easy
                    to see more 
                Than what you see on a screen 
                And you adore
                To hear more than a one a two a three and four
                To think of things you can’t buy in a store 

                Cheesy cheese shops
                On and off hops
                Drink a beer with the pops
                Window glass 
                Smoke the grass
                Coffee coffee coffee coffee
              </p>
            </div>
          </div>}
          {activeLogo.subject === 'art' &&
          <div onClick={() => closeLogoDialog()}>
            <Image alt={`logo-frozen-${logos.indexOf(activeLogo)}`} source={activeLogo.relativePath} activeLogo={activeLogo}/>
          </div>}
        </>
        }
    </Layout>
  )
}

export const query = graphql`
  {
    images: allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      nodes {
        relativePath
        childImageSharp {
          id
          fluid(maxWidth: 400) {
            src
          }
        }
      }
    }
  }
`