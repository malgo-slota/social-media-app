import './rightSidebar.scss';

const Events = () => {
  return (
    <div className="container">
        <span>Approaching events</span>
        
        <div className="event">
          <span>Dexter Morgan</span>
          <div>
            <p>Birthday party on my jacht</p>
            <span>31 • jan</span>
          </div>
        </div>

        <div className="event">
          <span>Jane Doe</span>
          <div>
            <p>Fundraising event</p>
            <span>03 • feb</span>
          </div>
        </div>

        <div className="event">
          <span>Rebbeca White</span>
          <div>
            <p>The grand opening of my restaurant</p>
            <span>12 • mar</span>
          </div>
      </div>
    </div>
  )
}

export default Events;