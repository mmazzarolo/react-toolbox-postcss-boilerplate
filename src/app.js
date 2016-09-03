import React, { Component } from 'react'
import { Layout, Panel, NavDrawer } from 'react-toolbox'
import { Card, CardMedia } from 'react-toolbox/lib/card'
import AppBar from 'react-toolbox/lib/app_bar'
import { Button } from 'react-toolbox/lib/button'

import styles from './App.style.css'

export default class App extends Component {
  state = {
    isDrawerOpen: false
  }

  _toggleDrawer = () => this.setState({ isDrawerOpen: !this.state.isDrawerOpen })

  render() {
    const { isDrawerOpen } = this.state
    return (
      <div className={styles.container}>
        <Layout className={styles.layout}>
          <NavDrawer
            active={isDrawerOpen}
            permanentAt={'md'}
            onOverlayClick={this._toggleDrawer}
          >
            <p>I'm the coolest drawer on earth</p>
          </NavDrawer>
          <Panel className={styles.panel}>
            <AppBar className={styles.appbar}>
              <Button
                onClick={this._toggleDrawer}
                raised={true}
                accent={true}
                label={'I am an awesome button'}
              />
            </AppBar>
            <div className={styles.content}>
              <Card className={styles.card}>
                <CardMedia aspectRatio={'wide'} image={'https://placeimg.com/800/450/nature'} />
                <p>Hi there!</p>
              </Card>
            </div>
          </Panel>
        </Layout>
      </div>
    )
  }
}
