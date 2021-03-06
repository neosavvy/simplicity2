import React from 'react';
import PropTypes from 'prop-types';
import { nest } from 'd3-collection';
import responses from './surveyData';

// TODO: REVERSE GEOCODE to get all zip codes
// TODO: toggly buttons so that we can show/hide comments and other things

const allResponseKeys = Object.keys(responses[0]);

const likertContentPreferenceKeys = allResponseKeys.filter(d => d.includes('likert'));
const notificationPreferenceKeys = allResponseKeys.filter(d => d.includes('prefer'));
const useToolsKeys = allResponseKeys.filter(d => d.includes('useTool'));
const useDevicesKeys = allResponseKeys.filter(d => d.includes('useDevice'));

const qualitativeKeys = [
  'commentary',
  'mapLocations',
]

const demographicProxyKeys = [
  'registered',
  'ownResidence',
  'homeInternet',
  'zipProvided',
  'dayOfWeek',
]

const otherKeys = [
  'displayDate',
  'nameShowing',
  'registered',
  'pinPlaced',
  'beenNotified',
  'attendedMeeting',
  'hourOfDay',
]

const locationBooleanKeys = [
  'liveInAvl',
  'workInAvl',
  'schoolInAvl',
  'workNearAvl',
  'schoolNearAvl',
]

const byDemoProxy = demographicProxyKeys.map(key => {
  return {
    key,
    data: nest().key(d => d[key])
    .entries(responses)
    .sort((a, b) => b.values.length - a.values.length)
    .map(entry => {
      return {
        key: entry.key,
        count: entry.values.length,
        registered: entry.values.filter(val => val.registered).length,
        likertPreferences: likertContentPreferenceKeys.map(likertKey => {
          return {
            key: likertKey.replace('likert', ''),
            countObject: nest()
              .key(d => d[likertKey])
              .rollup(d => d.length)
              .object(entry.values)
          }
        }),
        toolsUsed: useToolsKeys.map(toolKey => {
          return {
            key: toolKey.replace('useTool', ''),
            count: entry.values.filter(val => val[toolKey] === '1').length,
          }
        }),
        notificationPreferences: notificationPreferenceKeys.map(preferenceKey => {
          return {
            key: preferenceKey.replace('prefer', ''),
            count: entry.values.filter(val => val[preferenceKey] === '1').length,
          }
        }),
        devicesUsed: useDevicesKeys.map(deviceKey => {
          return {
            key: deviceKey.replace('useDevice', ''),
            count: entry.values.filter(val => val[deviceKey] === '1').length,
          }
        }),
        // otherDemoProxies:
        locationInfo: locationBooleanKeys.map(locationKey => {
          return {
            key: locationKey,
            count: entry.values.filter(val => val[locationKey] === '1').length,
          }
        }),
        commentary: entry.values.map(value => value.commentary),
        registeredCommentary: entry.values.filter(val => val.registered).map(value => value.commentary),
        unRegisteredCommentary: entry.values.filter(val => !val.registered).map(value => value.commentary),
        locations: entry.values.map(value => value.mapLocations),
      }
    })
  }
})

const camelToTitle = (camelCase) => camelCase
  .replace(/([A-Z])/g, (match) => ` ${match}`)
  .replace(/^./, (match) => match.toUpperCase());


class SurveyResults extends React.Component {
  constructor() {
    super();
    this.state = {}
    demographicProxyKeys.forEach(key => {
      this.state[key] = {
        showing: false,
        likertPreferences: false,
        toolsUsed: false,
        devicesUsed: false,
        notificationPreferences: false,
        locationInfo: false,
        commentary: false,
        commentaryKeys: [],
      }
    })
  }

  render() {
    return (<div style={{ display: "flex", flexWrap: "wrap"}}>
      <h1>TRC Survey Results</h1>
      {byDemoProxy.map(demoProxyGroup => (<div style={{ width: '100%' }} key={demoProxyGroup.key}>
        <div style={{ width: '100%' }}>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              const newState = Object.assign({}, this.state)
              newState[demoProxyGroup.key].showing = !this.state[demoProxyGroup.key].showing
              this.setState(newState)
            }}
          >
            <div style={{ display: 'inline-block', padding: '0 1em 0 0' }}>
              <h2>{camelToTitle(demoProxyGroup.key)}</h2>
            </div>
            <div style={{ display: 'inline-block' }}>
              {this.state[demoProxyGroup.key].showing ? '-' : '+'}
            </div>
          </a>
        </div>

        {this.state[demoProxyGroup.key].showing && demoProxyGroup.data.map(groupItem =>(<div key={groupItem.key}>
          <div className="col-md-3">
            {/* NOTIFICATION PREFERENCES */}
            <h3>{`${camelToTitle(groupItem.key)}: ${groupItem.count}`}</h3>
            <div style={{ width: '100%' }}>{`${groupItem.registered} registered (${Number(groupItem.registered / groupItem.count * 100).toFixed(0)}%)`}</div>
            <div style={{ width: '100%' }}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  const newState = Object.assign({}, this.state)
                  newState[demoProxyGroup.key].notificationPreferences = !this.state[demoProxyGroup.key].notificationPreferences
                  this.setState(newState)
                }}
              >
                <div style={{ display: 'inline-block', padding: '0 1em 0 0' }}>
                  <h4>Notification Preferences</h4>
                </div>
                <div style={{ display: 'inline-block' }}>
                  {this.state[demoProxyGroup.key].notificationPreferences ? '-' : '+'}
                </div>
              </a>
            </div>
            {this.state[demoProxyGroup.key].notificationPreferences &&
              groupItem.notificationPreferences.map(preferenceItem => (<div key={preferenceItem.key}>
              <div style={{ width: '60%', display: 'inline-block'}}>
                {`${camelToTitle(preferenceItem.key)}`}
              </div>
              <div style={{ textAlign: 'right', width: '10%', display: 'inline-block', margin: '0 0.5em' }}>
                {`${preferenceItem.count}`}
              </div>
              <div style={{ textAlign: 'right', width: '10%', display: 'inline-block', margin: '0 0.5em' }}>
                {`${Number(preferenceItem.count / groupItem.count * 100).toFixed(0)}%`}
              </div>
            </div>))}

            {/* INFORMATION WANTED / LIKERT PREFERENCES */}
            <div style={{ width: '100%' }}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  const newState = Object.assign({}, this.state)
                  newState[demoProxyGroup.key].likertPreferences = !this.state[demoProxyGroup.key].likertPreferences
                  this.setState(newState)
                }}
              >
                <div style={{ display: 'inline-block', padding: '0 1em 0 0' }}>
                  <h4>Information Wanted</h4>
                </div>
                <div style={{ display: 'inline-block' }}>
                  {this.state[demoProxyGroup.key].likertPreferences ? '-' : '+'}
                </div>
              </a>
            </div>
            {this.state[demoProxyGroup.key].likertPreferences &&
              groupItem.likertPreferences.map(likertItem => (<div key={likertItem.key}>
              <div style={{ width: '100%', display: 'inline-block'}}>
                {`${camelToTitle(likertItem.key)}`}
              </div>
              {[5, 4, 3, 2, 1, 0].map(num => {
                const countNum = likertItem.countObject[num] || 0;
                return (<div key={`${likertItem.key}-${num}`}>
                  <div style={{ width: '30%', display: 'inline-block', margin: '0 0 0 2em' }}>
                    {`${num}:`}
                  </div>
                  <div style={{ width: '10%', textAlign: 'right', display: 'inline-block', margin: '0 0.5em' }}>
                    {`${countNum}`}
                  </div>
                  <div style={{ width: '10%', textAlign: 'right', display: 'inline-block', margin: '0 0.5em' }}>
                    {`${Number(countNum / groupItem.count * 100).toFixed(0)}%`}
                  </div>
                  </div>)
                })}
            </div>))}

            {/* DEVICES USED */}
            <div style={{ width: '100%' }}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  const newState = Object.assign({}, this.state)
                  newState[demoProxyGroup.key].devicesUsed = !this.state[demoProxyGroup.key].devicesUsed
                  this.setState(newState)
                }}
              >
                <div style={{ display: 'inline-block', padding: '0 1em 0 0' }}>
                  <h4>Devices Used</h4>
                </div>
                <div style={{ display: 'inline-block' }}>
                  {this.state[demoProxyGroup.key].devicesUsed ? '-' : '+'}
                </div>
              </a>
            </div>
            {this.state[demoProxyGroup.key].devicesUsed &&
              groupItem.devicesUsed.map(device => (<div key={device.key}>
              <div style={{ width: '60%', display: 'inline-block'}}>
                {`${camelToTitle(device.key)}`}
              </div>
              <div style={{ textAlign: 'right', width: '10%', display: 'inline-block', margin: '0 0.5em' }}>
                {`${device.count}`}
              </div>
              <div style={{ textAlign: 'right', width: '10%', display: 'inline-block', margin: '0 0.5em' }}>
                {`${Number(device.count / groupItem.count * 100).toFixed(0)}%`}
              </div>
            </div>))}
            <div style={{ width: '100%' }}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  const newState = Object.assign({}, this.state)
                  newState[demoProxyGroup.key].locationInfo = !this.state[demoProxyGroup.key].locationInfo
                  this.setState(newState)
                }}
              >
                <div style={{ display: 'inline-block', padding: '0 1em 0 0' }}>
                  <h4>Location</h4>
                </div>
                <div style={{ display: 'inline-block' }}>
                  {this.state[demoProxyGroup.key].locationInfo ? '-' : '+'}
                </div>
              </a>
            </div>

            {/* ZIP/LOCATION */}
            {this.state[demoProxyGroup.key].locationInfo && groupItem.locationInfo.map(locationItem => (<div key={locationItem.key}>
              <div style={{ width: '60%', display: 'inline-block'}}>
                {`${camelToTitle(locationItem.key)}`}
              </div>
              <div style={{ textAlign: 'right', width: '10%', display: 'inline-block', margin: '0 0.5em' }}>
                {`${locationItem.count}`}
              </div>
              <div style={{ textAlign: 'right', width: '10%', display: 'inline-block', margin: '0 0.5em' }}>
                {`${Number(locationItem.count / groupItem.count * 100).toFixed(0)}%`}
              </div>
            </div>))}
            <div style={{ width: '100%' }}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  const newState = Object.assign({}, this.state)
                  newState[demoProxyGroup.key].toolsUsed = !this.state[demoProxyGroup.key].toolsUsed
                  this.setState(newState)
                }}
              >
                <div style={{ display: 'inline-block', padding: '0 1em 0 0' }}>
                  <h4>Web Tools</h4>
                </div>
                <div style={{ display: 'inline-block' }}>
                  {this.state[demoProxyGroup.key].toolsUsed ? '-' : '+'}
                </div>
              </a>
            </div>

            {/* CITY WEB TOOLS USED */}
            {this.state[demoProxyGroup.key].toolsUsed &&
              groupItem.toolsUsed.map(toolItem => (<div key={toolItem.key}>
              <div style={{ width: '60%', display: 'inline-block'}}>
                {`${camelToTitle(toolItem.key)}`}
              </div>
              <div style={{ textAlign: 'right', width: '10%', display: 'inline-block', margin: '0 0.5em' }}>
                {`${toolItem.count}`}
              </div>
              <div style={{ textAlign: 'right', width: '10%', display: 'inline-block', margin: '0 0.5em' }}>
                {`${Number(toolItem.count / groupItem.count * 100).toFixed(0)}%`}
              </div>
            </div>))
            }
            <div style={{ width: '100%' }}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  const newState = Object.assign({}, this.state)
                  newState[demoProxyGroup.key].commentary = !this.state[demoProxyGroup.key].commentary
                  this.setState(newState)
                }}
              >
                <div style={{ display: 'inline-block', padding: '0 1em 0 0' }}>
                  <h4>Commentary</h4>
                </div>
                <div style={{ display: 'inline-block' }}>
                  {this.state[demoProxyGroup.key].commentary ? '-' : '+'}
                </div>
              </a>
            </div>

            {/* COMMETNARY */}
            {this.state[demoProxyGroup.key].commentary &&
              Object.keys(groupItem.commentary[0]).map(commentaryKey => (<div key={commentaryKey}>
                <div style={{ width: '100%' }}>
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      const newState = Object.assign({}, this.state)
                      const commentaryKeyIndex = newState[demoProxyGroup.key].commentaryKeys.indexOf(commentaryKey)
                      if (commentaryKeyIndex > -1) {
                        newState[demoProxyGroup.key].commentaryKeys.splice(commentaryKeyIndex, 1);
                      } else {
                        newState[demoProxyGroup.key].commentaryKeys.push(commentaryKey)
                      }
                      this.setState(newState)
                    }}
                  >
                    <div style={{ display: 'inline-block', padding: '0 1em 0 0' }}>
                      <h5>{`${camelToTitle(commentaryKey)}`}</h5>
                    </div>
                    <div style={{ display: 'inline-block' }}>
                      {this.state[demoProxyGroup.key].commentaryKeys.includes(commentaryKey) ? '-' : '+'}
                    </div>
                  </a>
                  {this.state[demoProxyGroup.key].commentaryKeys.includes(commentaryKey) &&
                    <div>
                      <div style={{ width: '100%' }}>Registered User Commentary</div>
                      <ul>
                        {groupItem.registeredCommentary.map((response, index) => {
                          if (response[commentaryKey].length === 0) {
                            return;
                          }
                          return (<li key={`${commentaryKey}-${index}`}>
                            {response[commentaryKey]}
                          </li>)
                        })}
                      </ul>
                      <div style={{ width: '100%' }}>Unregistered User Commentary</div>
                      <ul>
                        {groupItem.unRegisteredCommentary.map((response, index) => {
                          if (response[commentaryKey].length === 0) {
                            return;
                          }
                          return (<li key={`${commentaryKey}-${index}`}>
                            {response[commentaryKey]}
                          </li>)
                        })}
                      </ul>
                    </div>
                  }
                </div>
              </div>))
            }
            </div>
          </div>)
        )}
      </div>))}
    </div>)
  }
}
// <div style={{ textAlign: 'right', width: '10%', display: 'inline-block', margin: '0 0.5em' }}>
//   {`${toolItem.count}`}
// </div>
// <div style={{ textAlign: 'right', width: '10%', display: 'inline-block', margin: '0 0.5em' }}>
//   {`${Number(toolItem.count / groupItem.count * 100).toFixed(0)}%`}
// </div>

export default SurveyResults;
