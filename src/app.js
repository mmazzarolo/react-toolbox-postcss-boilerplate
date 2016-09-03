import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

// Importing default style from react-toolbox
import 'react-toolbox/lib/commons.css'

// Importing used components from react-toolbox
import { Layout, Panel } from 'react-toolbox/lib'
import { Card, CardMedia } from 'react-toolbox/lib/card'
import AppBar from 'react-toolbox/lib/app_bar'
import { Button } from 'react-toolbox/lib/button'

// My custom style for the app
import styles from './app.style.css'

const mountNode = document.querySelector('#root')
ReactDOM.render(
  <div className={styles.container}>
    <Layout className={styles.layout}>
      <Panel className={styles.panel}>
        <AppBar className={styles.appbar}>
          <Button raised accent label={'I am an awesome button'} />
        </AppBar>
        <div className={styles.content}>
          <Card className={styles.card}>
            <CardMedia aspectRatio={'wide'} image={'https://placeimg.com/800/450/nature'} />
            <p>Hi there!</p>
          </Card>
        </div>
      </Panel>
    </Layout>
  </div>,
  mountNode
)
