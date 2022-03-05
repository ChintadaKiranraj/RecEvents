import './index.css'

const EventItem = props => {
  const {event, activeEvent, isActive} = props
  const {imageUrl, name, location, id} = event

  const onClickEvent = () => {
    activeEvent(id)
  }

  const ActiveImage = isActive ? 'isActive' : ''

  return (
    <li>
      <button type="button" className="event-button">
        <img
          src={imageUrl}
          alt="event"
          className={`image-url  ${ActiveImage}`}
          onClick={onClickEvent}
        />
      </button>

      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
