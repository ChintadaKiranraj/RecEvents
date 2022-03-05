import {Component} from 'react'
import EventItem from '../EventItem'

import './index.css'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]

const ActiveResults = {
  yetToRegister: 'YET_TO_REGISTER',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
  registered: 'REGISTERED',
}

class Event extends Component {
  state = {
    ActiveEvent: '',
    ActiveId: '',
  }

  activeEvent = activeId => {
    console.log('active event')
    const ActiveObj = eventsList.filter(eachEvent => eachEvent.id === activeId)

    console.log(ActiveObj)
    this.setState({
      ActiveEvent: ActiveObj[0].registrationStatus,
      ActiveId: activeId,
    })
  }

  getYetToRegister = () => (
    <div style={{textAlign: 'center'}}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-registered-image"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  getRegistrationsClosed = () => (
    <div className="registrations-closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registered-closed-image"
      />
      <p>Stay tuned. We will reopen</p>
      <h1>Registrations Are Closed Now!</h1>
    </div>
  )

  getRegistered = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-url"
      />
      <h1 className="registered-content">
        You have already registered for the event
      </h1>
    </div>
  )

  getActiveEventRegistrationDetails = () => {
    console.log('active event registration result')
    const {ActiveEvent} = this.state
    console.log(ActiveEvent, 'in switch statement')

    switch (ActiveEvent) {
      case ActiveResults.yetToRegister:
        return this.getYetToRegister()

      case ActiveResults.registrationsClosed:
        return this.getRegistrationsClosed()

      case ActiveResults.registered:
        return this.getRegistered()

      default:
        return <p>Click on an event, to view its registration details</p>
    }
  }

  render() {
    const {ActiveId} = this.state
    return (
      <div className="outer-container">
        <div className="events-container">
          <h1>Events</h1>
          <ul className="list-container">
            {eventsList.map(event => (
              <EventItem
                key={event.id}
                event={event}
                activeEvent={this.activeEvent}
                isActive={event.id === ActiveId}
              />
            ))}
          </ul>
        </div>

        <div className="active-event-registration-details">
          {this.getActiveEventRegistrationDetails()}
        </div>
      </div>
    )
  }
}

export default Event
