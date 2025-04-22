import { Builder } from '@builder.io/sdk'
import HomePage from "./HomePage"
import { ApplicationContext } from './interfaces/application-context'

const context: ApplicationContext = require('@builder.io/app-context').default

Builder.register('editor.settings', {
  hideToolbar: true,
  hideHeatMap: true,
  hideMainTabs: true,
  hideFormComponents: true,
  hideDataTab: true,
  hideStyleTab: true,
  hideLayersTab: true,
  hideAnimateTab: true,
  hideABTab: true,
  hidePageUrlEditor: true,
  componentsOnlyMode: true,
  hideTemplates: true,
  hideSymbols: true,
  hideOptionsTab: true,
})

// Register a tab in the app called "campaigns" with a custom UI for listing and creating campaigns
Builder.register('appTab', {
  name: 'All in One Accessibility',
  path: 'allinoneaccessibility',
  icon: 'https://builderio.skynettechnologies.us/assets/images/aioa-icon-type-1.svg',
  component: HomePage,
})

