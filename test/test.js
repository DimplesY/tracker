import Tracker from '../dist/index.mjs'

// eslint-disable-next-line no-new
new Tracker({
  requestUrl: 'http://localhost:3000/api/v1/track',
  domTracker: true,
})
