import Footer from "../components/Footer";
import HeroImg from "../assets/todo-lists-hero.jpg";
const Homepage = () => {
  return (
    <div>
      <div className="h-screen">
        {/* <Navbar /> */}
        <div
          className="relative h-screen bg-cover bg-center bg-white"
          style={{ backgroundImage: `url(${HeroImg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative md:flex items-center px-10 h-full md:justify-between">
            <div className="text-white md:py-8 py-20">
              <div className="md:mb-28 mb-4 text-center md:text-left">
                <h1 className="md:text-6xl text-5xl font-bold mb-6">
                  Let us help you create a <br />
                  Memorable event
                </h1>
                <p className="text-xl leading-8">
                  Experience seamless planning and extraordinary
                  <br /> celebrations with our expert event management team
                </p>
              </div>

              <div className="flex justify-center md:justify-start">
                <button className="p-4 bg-[#412234] text-white font-semibold rounded-lg shadow-md">
                  {/* <Link to={user ? "/create-event" : "/login"}>
                    Create your next Event
                  </Link> */}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* About Section */}
        <div>
          <div className="py-2">
            <div className="py-4 px-10">
              <h3 className="text-base font-bold text-[#131B22] mb-2">
                What we do
              </h3>
              <p className="text-sm text-[#586675] mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                quaerat, quisquam labore minima excepturi, <br />
                ducimus earum maxime consectetur, enim unde nesciunt.{" "}
              </p>
            </div>

            <div className="md:flex gap-20">
              <div className="relative line-behind boder border-[#D0D3D9] flex items-center P-6">
                <img
                  src={aboutImage}
                  alt="About Photo"
                  className="rounded-r-lg relative"
                />
              </div>

              <div className="mt-4 px-10">
                <div className="flex gap-10 border border-[#BDD9BF] rounded-md p-4 mb-10">
                  <div>
                    <img src={noteIcon} alt="Note Icon" className="mt-2" />
                  </div>
                  <div>
                    <p className="text-sm text-[#212D3A] font-semibold">
                      Create your personal event
                    </p>
                    <p className="text-sm text-[#586675] px-18">
                      Organize a seamlesss experience for your customers <br />
                      at your event like never before.
                    </p>
                  </div>
                </div>

                <div className="flex gap-10 border border-[#BDD9BF] rounded-md p-4 mb-10">
                  <div>
                    <img src={reachIcon} alt="Reach Icon" className="mt-2" />
                  </div>
                  <div>
                    <p className="text-sm text-[#212D3A] font-semibold">
                      Reach more Audience
                    </p>
                    <p className="text-sm text-[#586675] px-18">
                      Reach new customersand get more audience <br />
                      to participate at your event.
                    </p>
                  </div>
                </div>

                <div className="flex gap-10 border border-[#BDD9BF] rounded-md p-4 mb-20">
                  <div>
                    <img src={ticketIcon} alt="Ticket Icon" className="mt-2" />
                  </div>
                  <div>
                    <p className="text-sm text-[#212D3A] font-semibold">
                      Book a Ticket
                    </p>
                    <p className="text-sm text-[#586675] px-18">
                      Get a ticket and RSVP for your favourite event
                      <br />
                      with ease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-12 my-4 py-8 pt-4 pb-0">
          <h1 className="text-3xl font-bold text-left">Exciting Event</h1>
          <div className="md:text-xl text-sm md:font-bold md:flex justify-between font-normal mt-4 text-left">
            <p>
              Dive into our exciting events! Find upcoming gatherings,
              workshops, conferences, and more. Discover new interests, connect
              with others, and have some fun!
            </p>
          </div>
          <div className="mt-4 text-left">
            <button className="px-10 py-2 bg-[#412234] text-white font-semibold rounded-lg shadow-md ">
              {/* <Link to="events">View All</Link> */}
            </button>
          </div>
        </div>
        <div className="mx-12 py-8 px-0">
          {events.length === 0 ? (
            <p>Loading events...</p>
          ) : (
            events
              .slice(0, 3)
              .map((event) => (
                <Card
                  key={event.id}
                  eventName={event.name}
                  eventImgUrl={imgs[Math.floor(Math.random() * imgs.length)]}
                  rsvps={event.RSVP}
                  description={event.description}
                  location={event.location}
                  time={event.time}
                  date={event.date}
                  eventId={event.id}
                />
              ))
          )}
        </div>
        {/* <Footer />   */}
      </div>
    </div>
  );
};

export default Homepage;
