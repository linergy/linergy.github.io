

import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import universal, { setHasBabelPlugin } from 'react-universal-component'

import { cleanPath } from 'react-static'



setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
}

  const t_0 = universal(import('../src/containers/Products'), universalOptions)
const t_1 = universal(import('../src/containers/Products/Batteries'), universalOptions)
const t_2 = universal(import('../src/containers/Products/Chargers'), universalOptions)
const t_3 = universal(import('../src/containers/Products/Motors'), universalOptions)
const t_4 = universal(import('../src/containers/Products/BMS'), universalOptions)
const t_5 = universal(import('../src/containers/About'), universalOptions)
const t_6 = universal(import('../src/containers/About/References'), universalOptions)
const t_7 = universal(import('../src/containers/About/Partners'), universalOptions)
const t_8 = universal(import('../src/containers/About/Jobs'), universalOptions)
const t_9 = universal(import('../src/containers/Services'), universalOptions)
const t_10 = universal(import('../src/containers/Contact'), universalOptions)
const t_11 = universal(import('../src/containers/B2B'), universalOptions)
const t_12 = universal(import('../src/containers/404'), universalOptions)
const t_13 = universal(import('../src/containers/Search'), universalOptions)
const t_14 = universal(import('../src/containers/ThankYou'), universalOptions)
const t_15 = universal(import('../src/containers/Blog'), universalOptions)
const t_16 = universal(import('../src/containers/Home'), universalOptions)
const t_17 = universal(import('../src/containers/MotorCalculator'), universalOptions)
const t_18 = universal(import('../src/containers/SpokeCalculator'), universalOptions)
const t_19 = universal(import('../src/containers/ArticlePage'), universalOptions)


// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [
  t_0,
t_1,
t_2,
t_3,
t_4,
t_5,
t_6,
t_7,
t_8,
t_9,
t_10,
t_11,
t_12,
t_13,
t_14,
t_15,
t_16,
t_17,
t_18,
t_19
]

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 12
}

// Get template for given path
const getComponentForPath = path => {
  path = cleanPath(path)
  return global.componentsByTemplateID[global.templateIDsByPath[path]]
}

global.reactStaticGetComponentForPath = getComponentForPath
global.reactStaticRegisterTemplateIDForPath = (path, id) => {
  global.templateIDsByPath[path] = id
}

export default class Routes extends Component {
  render () {
    const { component: Comp, render, children } = this.props

    const getFullComponentForPath = path => {
      let Comp = getComponentForPath(path)
      let is404 = path === '404'
      if (!Comp) {
        is404 = true
        Comp = getComponentForPath('404')
      }
      return newProps => (
        Comp
          ? <Comp {...newProps} {...(is404 ? {is404: true} : {})} />
          : null
      )
    }

    const renderProps = {
      componentsByTemplateID: global.componentsByTemplateID,
      templateIDsByPath: global.templateIDsByPath,
      getComponentForPath: getFullComponentForPath
    }

    if (Comp) {
      return (
        <Comp
          {...renderProps}
        />
      )
    }

    if (render || children) {
      return (render || children)(renderProps)
    }

    // This is the default auto-routing renderer
    return (
      <Route path='*' render={props => {
        let Comp = getFullComponentForPath(props.location.pathname)
        // If Comp is used as a component here, it triggers React to re-mount the entire
        // component tree underneath during reconciliation, losing all internal state.
        // By unwrapping it here we keep the real, static component exposed directly to React.
        return Comp && Comp({ ...props, key: props.location.pathname })
      }} />
    )
  }
}

