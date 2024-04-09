import React from 'react'
import HotelCard from '../../../../components/HotelCard'
export default function haridwar() {
  return (
      <>
          <div style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1511754863001-18d44abd0a93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D)', backgroundSize: 'cover',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat'
          }} className="no-scrollbar h-[87vh] river">
              <div className="p-4 mt-14 text-center w-full text-5xl font-bold rounded-lg text-teal-900">
                  <h1> Ganga River(Haridwar) </h1>
                  <p className='text-lg mt-12 px-20 text-gray-700 font-normal'>
                      The Ganga River, revered as the lifeline of India and one of the holiest rivers in Hinduism, holds deep cultural and spiritual significance in Ayodhya. While Ayodhya is renowned as the birthplace of Lord Rama and is associated with the Saryu River, the presence of the Ganga in this sacred city adds another layer of sanctity.
                  </p>
              </div>

              <div className="pt-4 flex justify-around items-center">
                  <div>
                      <div className="p-4 mt-4 text-center w-full text-2xl font-semibold text-black">
                          <h1 className='font-bold'> Air Weather </h1>
                          <div className="p-8 w-full text-lg ">
                              <div className="p-8 flex flex-col  text-black text-xl justify-center items-center space-y-4">
                                  <span> Air Quality Index(AQI): 203 </span>
                                  <span> Temprature: 40° C</span>
                                  <span> Humidity: 45% </span>
                                  <span className="border-green-600 font-bold"> Safe to Visit </span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div>
                      <div className="p-4 text-center w-full text-2xl  font-semibold text-black">
                          <h1 className='font-bold'> River Water Status </h1>
                          <div className="p-8 w-full text-lg  ">
                              <div className="p-8 flex flex-col  text-black text-xl  justify-center items-center space-y-4">
                                  <span>Ph Value: 8</span>
                                  <span>Temprature: 40° C</span>
                                  <span>Turbidity: 0.2 NTU</span>
                                  <span className="border-green-600 font-bold"> Safe to Bath</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

  
          <div className="mt-8 p-8 pt-0 text-center">
              <h2 className="text-3xl text-teal-900 font-semibold mb-4">How To Reach</h2>
              <div className="mt-12 flex justify-around">
                  {/* Bus Booking */}
                  <a target="_blank" rel="noopener noreferrer" href="https://www.redbus.in/" className="px-4 py-2  hover:border-teal-900 flex flex-col text-teal-900 rounded hover:border hover:text transition duration-300 ease-in-out">
                      <img src='/bus.png' className='w-[6rem]'></img> Book a Bus</a>

                  {/* Train Booking */}
                  <a target="_blank" rel="noopener noreferrer" href="https://www.irctc.co.in/nget/train-search" className="px-4 py-2  hover:border-teal-900 text-teal-900 rounded  hover:border transition duration-300 ease-in-out">
                      <img src='/train.png' className='w-[6rem]'></img> Book a Train</a>


                  {/* Flight Booking */}
                  <a target="_blank" rel="noopener noreferrer" href="https://www.olacabs.com/" className="px-4 py-2 border hover:border-teal-900 text-teal-900 rounded hover:border transition duration-300 ease-in-out"> <img src='/transport.png' className='w-[6rem]'></img> Book a Cab</a>
              </div>
          </div>



          {/* Famous Locations Section */}
          <div className="p-16">
              <h2 className="text-3xl font-semibold text-center text-teal-900 mb-12">More Places to Visit </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Card 1: Gangotri Temple */}

                  <div className="border border-black rounded-lg p-4">
                      <div className="flex justify-center mb-4">
                          <img src="https://media.gettyimages.com/id/169546647/photo/har-ki-pauri-haridwar-india.jpg?s=612x612&w=0&k=20&c=TzwEjTTH1Ela4Pkk2OopbYta_0knQSF0Yum73d-W_vc=" alt="Gaumukh Glacier" className="w-full h-60 mb-4 object-cover rounded-lg " />
                      </div>
                      <h3 className="text-xl text-black font-semibold mb-2">Har Ki Pauri</h3>
                      <p className="text-gray-700 mb-4">
                          A sacred ghat where the Ganges leaves the mountains and enters the plains, hosting the evening Ganga Aarti.  </p>
                      <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/P5CduqHkxhEZqxQZA" className="text-blue-500 hover:underline">Show On Map</a>
                  </div>

                  {/* Card 2: Gaumukh Glacier */}
                  <div className="border border-black rounded-lg p-4">
                      <div className="flex justify-center mb-4">
                          <img src="https://media.gettyimages.com/id/850747646/photo/panchkula-india-devotees-on-the-first-day-of-the-navratra-at-mansa-devi-temple-on-september-21.jpg?s=612x612&w=0&k=20&c=DllDoXSM5f6m3dksf85RbtmGuijETJKXzvSMGIJJ1Dg=" alt="Gaumukh Glacier" className="w-full mb-4 h-60 object-cover rounded-lg " />
                      </div>
                      <h3 className="text-xl text-black font-semibold mb-2">Mansa Devi Temple</h3>
                      <p className="text-gray-700 mb-4">
                           Situated atop Bilwa Parvat, this temple dedicated to Goddess Mansa Devi offers panoramic views of Haridwar. </p>
                      <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/e1jpmwBHXA5xjUVt6" className="text-blue-500 hover:underline">Show On Map</a>
                  </div>

                  {/* Card 3: Tapovan */}
                  <div className="border border-black rounded-lg p-4">
                      <div className="flex justify-center mb-4">
                          <img src="https://media.gettyimages.com/id/481688165/photo/pilgrims-at-a-temple-chandi-temple-haridwar-uttarakhand-india.jpg?s=612x612&w=0&k=20&c=KFs1fPNG_OYhS02j_4rboSK62abTdZH9hQPk7QbiuOo=" alt="Gaumukh Glacier" className="w-full h-60 mb-4 object-cover rounded-lg " />
                      </div>
                      <h3 className="text-xl text-black font-semibold mb-2"> Chandi Devi Temple</h3>
                      <p className="text-gray-700 mb-4">
                       Located atop Neel Parvat, this temple dedicated to Goddess Chandi offers a scenic trek or a cable car ride.    </p>
                      <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/7MdSM5mPqP7oi1B1A" className="text-blue-500 hover:underline">Show On Map</a>
                  </div>

                  <div className="border border-black rounded-lg p-4">
                      <div className="flex justify-center mb-4">
                          <img src="https://media.gettyimages.com/id/1172742271/photo/german-monastery-interior-view.jpg?s=612x612&w=0&k=20&c=C7K5nKUqtcCGKXh1natbDCN2JbkPKtqmoxcVtWKADnU=" alt="Gaumukh Glacier" className="w-full mb-4 h-60 object-cover rounded-lg " />
                      </div>
                      <h3 className="text-xl text-black font-semibold mb-2">Maya Devi Temple</h3>
                      <p className="text-gray-700 mb-4">
                           One of the oldest temples in Haridwar, dedicated to Goddess Maya Devi, and a significant pilgrimage site.</p>
                      <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/VRoYXYDX22GqQBbHA" className="text-blue-500 hover:underline">Show On Map</a>
                  </div>

                  <div className="border border-black rounded-lg p-4">
                      <div className="flex justify-center mb-4">
                          <img src="https://media.gettyimages.com/id/520764838/photo/chilla-name-at-display-on-log-at-the-entrance-at-rajaji-national-park-uttarakhand-india.jpg?s=612x612&w=0&k=20&c=-y2UNV8A-z0G-boO0LBLlN4FagYYKWt5K-RzHToMA6g=" alt="Gaumukh Glacier" className="w-full h-60 mb-4 object-cover rounded-lg " />
                      </div>
                      <h3 className="text-xl text-black font-semibold mb-2">Rajaji National Park</h3>
                      <p className="text-gray-700 mb-4">
                         Located near Haridwar, this national park offers opportunities for wildlife safari and nature exploration.  </p>
                      <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/M8xeVM2uAPYAFYjk8" className="text-blue-500 hover:underline">Show On Map</a>
                  </div>

                  <div className="border border-black rounded-lg p-4">
                      <div className="flex justify-center mb-4">
                          <img src="https://media.gettyimages.com/id/1210107506/photo/chandigarh-india-a-view-of-the-empty-grounds-at-shanti-kunj-park-during-lockdown-against.jpg?s=612x612&w=0&k=20&c=PHc32JIDgO8A2ph3afN2X36QS4UDw3uAW7PzlX8MU3Y=" alt="Gaumukh Glacier" className="w-full h-60 mb-4 object-cover rounded-lg " />
                      </div>
                      <h3 className="text-xl text-black font-semibold mb-2"> Shanti Kunj</h3>
                      <p className="text-gray-700 mb-4">
                      A tranquil ashram and spiritual center known for its yoga and meditation teachings, promoting peace and spiritual growth.  </p>
                      <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/uLuSDyt88eM2Mx617f" className="text-blue-500 hover:underline">Show On Map</a>
                  </div>
                  {/* Add more cards for other locations */}
              </div>
          </div>




          <div className="p-16">
              <h2 className="text-3xl font-semibold text-center text-teal-900 mb-8">Nearby Hotels</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                  {/* Card 1: Hotel 1 */}
                
                  <HotelCard
                      name='Ganga Lahari'
                      address='Gau Ghat Har ki Pauri, 226443 Haridwār'
                      href='https://www.booking.com/hotel/in/ganga-lahri.en-gb.html?aid=311984&label=ganga-lahri-PfuhjC96iKDMDW7JT4MyTgS266319318702%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-35612166781%3Alp9300710%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YXORK0YJiVoOxcWODxYDaAA&sid=70ee43153ae4fc9345999e4405dcf315&dest_id=-2097190;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1712644773;srpvid=b2492db72e700193;type=total;ucfs=1&#hotelTmpl'
                      src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/502052458.jpg?k=4dafda2f4be9ac9188f2ee1f642f9614af3100f38315eff8bbece1787e2eb620&o=&hp=1'>
                      </HotelCard>
                  {/* Card 2: Hotel 2 */}
                  <HotelCard
                      name='Hotel Ganga Exotica'
                      address='Niranjani Akhara Road, near Safe Parking, Mayapur, Haridwar'
                      href='https://www.agoda.com/en-in/hotel-ganga-exotica/hotel/haridwar-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1841706&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2024-04-18&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&tag=461ebe2b-21d1-7ce2-d27e-969cba382470&isCityHaveAsq=false&los=1&searchrequestid=e0687092-b539-4fdb-8560-01bd0087d1bd&ds=QuGIk%2FBbCcjHwuDo'
                      src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVFRUVFRUXFRUWFxUXFRUXFRUXFxUXFhUYHSggGB0lHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xABFEAABAwIDBAcECAMGBgMAAAABAAIRAyEEEjEFQVFhBhMicYGRsQcyocEUQlJygtHh8CNikhUzU4Oy0kNzorPC8RckRP/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwAEBQb/xAAsEQACAgEDBAEDAwUBAAAAAAAAAQIRAxIhMQQTQVFhFDKBIpGhBUJx0fAV/9oADAMBAAIRAxEAPwDh6bFZYxRptVhjV9ikeFJjsajsakxqOxqdEmxNaitak1qK1qYRjBqmGqQanARMRhPCnCULAIwnhShKEQMiAlCnCULWYjCUKcJoWARhKFKEoWMRhNCnCULWYhCaFOEy1mIEKMIiYhCwgyFEhEIUShYQZCiQiEKBQsIJwQ3BHchuCFjIA4IDwrLghOCRsdFV4QXhWXhAeFORWLAQkpFJSK6i5TarDGqFMKwwLpRytk2NRmNUWhGaE1iMdrUQBJoUwEbFEAnhIKSNmGhPCeE61gGhKE6S1mGhJOktZqGShOmWsAkyeU0rWahJJpTShYaEkmlMStZqHUSmJTShYaEVEpEqJchYUhFRKRcoOchYaEVByRchuchY1DOQXqbnITnJXIZIG9AeivKA8pGyiQMpKJKSlZQ1qasMVRtQbyrFN4K6FJHO0y0xFaqbsU1sZjqYHfE7lbdbW1pva3FDuRurN25NXQUKQKCKg4hSDk+oXSGBTgoIcpZ1tQNIWU8oOdLOtqNQaU0oWdLOtqNpCymlCL02dbUbSFJTFyD1iiai1moPmTZkA1FHrFtRtJYzKJeq5qJusW1B0lgvUS9VzVUTUQs2ksZ1HOq5qKJqLWbSWc6iXqvnTyl1DKIQvUC9QcUB1ccUNQyiHc9Qc9V3VwhmvySuY+gsOehOegvrXiPOyC+ul1BUGGe5Bc5AfUlAdV5qbmiigWcySonEc0lPuIfQZDqhOpJ7yT6olKu5vuuI7iQghJpXkKTO2kWRiHG5cfPjquipdMK4oii9xqNAtnhzmkOBEOcCSLAR3rmWhHq4Z7QC5pAOhO9LOKn9w8Jyh9pt1NsYl7P74luYHXR5B3cYHgg09r12WLp5OE6LHaYuFoYDaWR+d9NlYAEBtTMWiQeBExMpoznDeIGoT2kaeG6Tu0ewHm0wfIrSw236TtSWnnp5hctRYHncIHECeQlaeO2BUawVRDmFoIcCJ4ERrINjwsuhf1FwaUnz7IvolJNxR01PEtddrge4qfWLgg0qzSxdQe68iItNtQLyYXXHrl5RzvpfTO06xLrFzGF21UL8hDTBMuMiMupMdyj/AG9VzhhYwdoA6mxIuDPBWXVQJ/TyOnNRRNRQxBa0CXsuGuAa9rjDxIs0n9EOqWgAl7ZJIyzewBuN36FUWeHsXsy9BTVUTVVWSfda8i9w1xFtTIHI+StYXZ9V5A6qoAXFubI4gESDZoJgQZgJX1WJcyQy6ab8ETWUDWWRW2q0TAJPl4qsNt3uy3ekfWY15Cunkb5rKJrLAp7a+0AddPgmr7WJBLWwPvTeO4b9ym+vgOumNx2IUDilz52i4tjLf7U9274eKCKryJmw5pP/AEF6C+l+TpDiwoOxg4rm/pBUWPnUoS/qHpA+m9nSNxw4rpeh2DpYmqGVamRvH5Lzl4LTEzc6EEWP6LodjYui2mKj8QQ5ru1TDTmjVsO+tccLWuufJ1za9DrBGLNzpbQpUarmUnZ2g2K5wVC6YGnMTfhxT7U2zTdBYwnWczyTG7QCNOJ1Gizf7XcMuVrG5Z3OM74MyOSR9ZPTsWWCN7l8vd9lCdWdwXW9FNu4Wth6zcZXZRcCDTaKbyCAPesDeTpPouV2vi6YP8O9rkzDjJ90RpEa8DyCjHrcrdSRWWDGlaZVqYhyCarkTsvGZ1amyxytd1hcY3RTa4N3xmI3biFTr4rKYDmP0Ic0OgTuIc0GR5cyqfUP2T7aNWhs52YmtLWNdleQ5szE5WkyJWXiOydfJV345/n46aC+78kKpiCTcDwS96/IdKvYsC+9JRbVHH0TLdxewaRq2HyzDg6ADINrgGO8THep0KLMpzuIdbKBGUX7WY66cApUxByuBJNuzcK/gcBTM5mvJB0BaBHjdCKt7DvZE9nMEdljnkWGQEG4AJzwY0iCDqeKNXY5sPqsduiZ1gTEniPSUTAUmsBDOv8Awlk6nXhvVmpjs4dNEEUvfzuJy2n3YM2vZdSxx078kXkalstjDo0g4y7LE9oZmMsfsyfzUHmnm7Mlo1Ez3gOj5ea0amOZkJNKkWgtIABa45jY5gAQLiy1Nm/Rnt/uG2s6Jc3fr+vBKsKfDQXk+DnacAE9gyLCTmHkY851K0tkzYVCGNdlDnNEnKTcQIvA38RdXxsfCuqMBe+nTJaHgNLgxpMOdAE2E25Iu2cHQpvaKThWYSTTIYSQM0MzSWlriLwRIlSyY1F1L+NysJN7x/0XMJiurOWlRp1W3aM9IBxaHzSLqgpzN4IDr2E2Cytt1hWqDrKbGhvZIoNiMs8XGb8dFfwTvca4CQXFwbJ1JLQYDptG7yVLFENe+RkGYkAzabgaW1QWNp3W37DSlFrncJh6eHAJDgziMlTN8GmfirWLwjWsJAJIEXGS03kvI0klZeFqg1HND7uaC3TUB2ucAGY0BlXXU6hJky7LFw3LAaB7rSDu4wupT24X/fk5pLfko0NoU6bcuRmfPPZeHgCIPbAIuZMA71V2Ziuprl7nMLb2kunt5gLgjTkVpUMMT9Wle9qYG/nmUsSwsylzw0OOWQ1kAkGLBoOtvFScl5Cm7HrbfFRo/imYEiDYwcwsN9vmd6Y481S0ZnxlDT2TeBEw91/3ZWm4J3+I7wkehVHGl7DlbmcZBu91gRzDlo6VtX8DPJKXkq46k4vNV4sSwmzfqw0CDmtEdmYNrWsDF06ZJADTYEGnmEZgyQM7RJEEaa59ZBVzFMeRm3QJFje5VSHHSfD9E66WEt0I88oumiZwdFtRwq0Xg3OTN7s3DQW7o5lZzsDuE5eJa8ny0Wi/MePoFFrb3IGup5LR6KKV2GfVN7JAm4Sn1cl4Dw4ASYGWN7Q2SZ5rOdn03cBEeQ9V0ba5+jPoz2TVY+BcEta4T8VkPojgj9IiazFBlNx+qeX7KTwW210KvGiNyG5p4pJdNQyyplGrWlMxyPUbxEqWCwbqrstNomCbupssL2NRwG7iueWPSVTvgrZk6t0cjcwqNuQ4AmDlMObYAi+bfujei7NpUcwz1HC+4eBvutyUZKSWyHSszC6EnVSbW18tbfH4LTx2EoueTSJaDNi4OE7gCQDG68myuf2NhepcXVn9bmGSGyyMtw4C9zEOB0BkaIbpJtMZQ3pM54PhDfyU3UHXtpzHGLA6qIpu+yfLimaYpElMjMwrpuCO/d3woPp5Sf35LaWjWRBTqOZOgHc03Y5sZfQmdZ4IrMUW0w4actbkjUQdQVWpMYdGSfE/NX6OHdAbDW6mDEQIgxHEldEpaeWkCEHL7U2X8Dhs4a4k9oD61Tf+JW8JhKJqlj2U4AJkgEmCN7p4/BBweEJiP4kbmsaR6fNbWH2ZXdlbkqNabHKxwG+53fDeuDPnXiUvweng6drdxj+WGGyKLHODqbbOcBJIkSS3fGhC0ujQwVXNLcMzKCf4+RhIEe7IJOuiwOmO2KWFeykyhSNTIC/sgFsgRnAbqTO+dOK55vTjECQxlGnO9rTI8Zj4LqwZteCKd3X5OPPFQzSar8cHovSP6GWsIqUA2/2A03B1jtWBt3Ljqe2KdKp11OmypWLGQ+o5oZSeBDiwMMmYaNWkQbwUHo/s+vtMvd1rS6nlzdbUqGz5jIMpAFjYRC6Cn7M6pucRSH3ab3epal7GG7k/5Gn1eRxUYpKvjc5f6cSZPVgm5yioZ8SD6qtijRnPUvNhDfGLxG9d9Q9mmmbGOsPq0g3nveeKss9luGMZq9cxwNMf+BXRLJjqv9nIlO7PNaWMpS0jrAGuB0AFiCJ7U+C2No7VFKoQQS4WIbJEkA7+RC76l7NMCNRWd31SP9ACu0ugezx/+fN96pWd6vS99JbIzxtvc86wmJbAIeBaNJ/JGxYa4NkyM7bZRFzANxrJW10n2tgNnYhtB2zWvBY14fLYgkjsteDMEHeEd3TfZdXDVgwCjU6mplY6i1ry7IYDXNGUmYjtLd74F7PychiekVBhLc1V5Fjkyx5yJ8EHC7Yo1KzLPguYC1xhzu1cBwJgkW+S5rB4akR26uXlHzV5mGwosak+J+QV4wnJcpfkW4xfD/Y6navRzGurVG08LWa1tWoGxIZlDjlAe6A8AQM2+JU8P0Pxz/ewxH3qlH/eVQodLqrA2kytiDAAa0OcDAFgM3JE2N7UcVRe41JxFMg5WPLWOaZsesayTabELTnPGtpJ/wCDRjGfhmzT6A4ogl4pMGsuqbt8lrSAg7E6G/Ss5pYui5tN2RzmNquaXRMNcWtDrEXFrrmulfTzE40ZHRSpf4VMmD/zHav7rDlK9h6B7O+j7PoUz7xYKj+Oar2zPcCG/hUX1ORLkfsxs4La3Q3GYcEhnWs1z0pJA5s94eEjmua+kXuAYPC9uMa+K+g2krH230awuKk1aQDz/wAVnZfyJI978UqmPrXxISXTL+08SGU8W99x5iD8FE0Tuh33TPw1+C7LbHs3xFOXYdza7fs2bUHgTld4EHkuLxFJzHFj2uY9urXAtcO8G4XbDLGa2OeUJRe4JzU2GptzjMQG6OJGaARcgbzwReudvv8Aev8AE38kRtRhI7EccpJzX3hxMeHkhOKaDFtFllJjKr30m/w3NewZyCXNIyk5dI5SfHdnbIpt65uZjXiYyv8Acvbtchr4K5WdnOZpBJFwIHcA227gFTpgtdexvqOS5pYf0lYz/UBx1IdY/KIGYwBMC+glXqmyD1Dq7KoytcG5SO0bayLRdVa3vErR67/65ZxI38OSWWOkqHjK27MMVnDRIVzpCIWqOVP237E1jfSN37+KFUAP7/JSc1QexSlF+R1Ih1Q4ev5pJoTKVfBS/k+hqGzKLfdo0h3U2D5KGOx2Gw961WjR4SWtce5up8Ez9tYdvvYiiO+owfNeG9MMOG4uoW1m12vcXtqA5pDiey48Rp5cVzUVs9N2t7TcNTdko5qx3vLiykPGC4+DfFZOI9ojjdtSg0cAx7iPxON/6V5ckqwko8xT/cSUW/NHQY51B5dWear3PcXOqQ65cdZIDdVlValIe415+8W+gb80EYh+XJmOWZy7kJxTzy3wkvwLGFctnrPsXoDq8TVi5exng1pcf9a9KaLLwror0pr4WiaVEMALi8ksLnEuAEzMR2QNNy2v/kDHRE0+/q7+sfBL2pS3G1pbHrFJ6sNcvCq3SHGvJnE1ACdGuyAdwZCrPxVZ3vVajvvPe71KddM35EeZI99fXaNSB3kBAftegNa9If5jPzXgvUcfREFPmVRdJ7Yrz/B2XtbrYXEUGPpV6bqtF/utdJLHwHC3Ahp8CvJV1LqQIg6b1zBaky4dFUNjyauSJFu9PSquaZaS0jQgwRNtfFRhO1pOgP5KG5QNjcSalQvuJi0zoANd+iEpGi4XII77Jw1M7btgVJbB6lRnV5Q0SYkkCed9Qu3odNMewAdaCAQYLKZsAOzppbcuEDVcp454sbj97wuiDj/cTkn4PaejHTmliIZVilV0gnsPP8rjof5T4SusLl87UqzXi3iCus6O9Nq2HinVmrSG4n+IwfyuOo5HzCXJ065gaOV8SPX2Hgg7S2fQxDcmIpNqDdIuObXC7TzBVPY+16OIZnovDhvGjmng5puFpArl3iy2zR59tz2X6vwdX/Kq+jao9CPFcBtTZlfDuyV6T6Z0BcOy77rh2XeBK+gQ9LE021GFj2tex1nNeAWnvabLph1Ul925KWCL4PnBTZiHC0yOBgjyOi9W217NKFWXYd5ou4Ht0jyjVvgY5LzzbnRfFYSTWpHIP+Kzt0/Fwu38QC6ceaL4ZGWNozusafebHNp+R/NFyy2GuHcez66nuVKVLPCq5exEvQqlJzdQR3oRVmljCLWI4fppPMgonWUnajKfH1Ez5NC1oG5nlRcFffgbS1wI5xA73CWjzVWth3N1afkUrg/A6kViEk8J1Chy01qhi8PmbzFx+SIEQFN200DU0c/CStnCk9skAEzz7R/VT+g3IzaRu3n9jzXJ25ejo1opQreBZHbcAW6XgkcwETC0wBMX9O5SoWLm858CqQhTTYspeCyy2m5xHgTPzHkjyq1BkfvwVloXVBbEJE2ooQ2hEVkibHlSCiClmToVkcS7skcbf1Wn4oNbDsOrR6HzCnVExyM/Aj5qJakkk+Rk64M6lQbY5Zs038Z+SVI/w445vjKtU6dv3xVes5oaQDeIHJcunTuWu9ijWrFxkpgnZRnfPcEZuFPDzUFGUt6LWkDBTyijCn9lI4Y8Pin7c/QuqPsHRrZXA+fdvW4WLEfhiNQQtHDY0AAOBsInd4qmJ1akTyK90X8Di6lF4qUnljho5voeI5Gy9H6OdPmVIZiopv06wf3bvvfYPw7l5qIIkXUCFWeKMluJGbi9j6AD5ggzOhGhHeiHmvLfZltKr9IFDPNIse4sJkNLQILOBncOdt69Qe6687JDRKjrhLUrJtUus3H9+CGCkpjHObc6CYPES5rOpf8AbpWE/wA1P3T5A8155tzoBi6EuY3r2D61IHOBzpa/05l7MCpCpx/fgrQzSiJLGmfNR1I3ixG8EbimlfQW2ejeFxYPXUmud/iN7NQfiF/AyF55t32X1mS7C1BVH2Hwyp4O913/AErojni/gk8bRwDXkGQSDxBg+aKzGOHP4eca+Mpsdg6lF2SrTfTcPqvaWnvE6jmLKsSqavQley59LG9o8h8iPRJUklu5L2bQvRcaU1V8AngD6KISe2RCZ3QB3Ds5eUfBQE35mfh+iIGqQahRrKzG3I8fP9UVtO8xdFDBwUw1ZQDqIsajAJmhEaFaKJtjgKSxq2NfJgxyEIbNpVBvB7wPkpfUwTofsyZugKQCy6O2B9Zscxf4FWRtKn9r4H8lWOaD4YjxyXgtkINeqGiT/wC1UrbXYPdBd8B+apPxZqXMCNAFOeePCe40ccvIV9VzzHHRoUjhcph1yPL9VHB18r54iJ4StLGtBbmF43jeFsUFJOT3YZycXXgNgmjIIGuqzaliRwKNhsXlERPBVq9XMSeKu5LSqJqLt2PmUy6yAFJ7kuoajXqWpRwaPRY9Zo1Ajij1sdLMp1tpwHJU3VCbJc+SLVBxQaCYfEZb7t4Vlm0qbt5B5j8lmVXWhV1xd6UdkX7afJ0FLEw4OY4ggyHNMEEaEEaFdbh/aFimsDXNpvcPruBkjmGkAnmvMwVLrTxPms80ZfcgLG1wz1zY/tOYJbi2xva6kCfwlk275VHantbeTGGwzQNzqxJJ/AwgD+orzCVJqk9LeyKK0j1Xon7R69fEU6FelTIquyh1MOaWkgwSCTIkctV6YCvJPZDsim+o/Evc0vp9mnTkZhmAzVY4XLQfvcl6yCpzqxkSnel1h339f1UZTSlCRxuCo4hmSrTbUb9l7QY5ibg8wuC277LabpdhKhpn/DqS5ncH+83xzLvHFIVSNbj4+e9NGbXAGkzxCr0G2g0kfRiY3tdTLTzBzJL3HrBxPkUlTvP0L20fOgKmCggqQK7bOcKFMFCBUgUyAECmEMKYTIUI1SCgFIFOhTO2jhYl4038uaznBdGsbG0Mh/lOn5Lj6jFX6kdGKfgoykRyVzCV2sM5AfUdy1W16dUZdZ3Gx/fcpQwqS+7ceWRx8HOqTHwZCliKeVxbwPw3ISg7TKcltlUHkUVryNCecKix0EHgQfJdFkY8ZoBneunCpTunuSyNR5MoPITdYUHt3N4kidyj1rkvdaG0osiqf2FEuPFV+sPFNcoPK2HSgzngK3hcLmAcTAO4a+az20SeF+a18FVDaTSTAAPqU+Fapfq4EyOlsVdqtDcgAgQ75LPlHxuJL3TuGiApZWnN1wPBNR3HVnB4TPJJho3oDafGyIa1soNkI1zILvwSr0Wg9lxI3qNFmYwhytHZ9Ls5uPyTwjqlsLJ6UW8JiHU3B1NxY5vuuaSCO4hei9GvaAHRTxcNOgrAdk/fH1e8W7l5uQoyuicFJUyMZNcH0LTqAgEEEESCDII4g708rxTo/wBJ6+EMMOanMmk73TxLTqw93iCvUNgdJKGLb/DdDwJdTdZ4/wBw5j4Lknicf8F4zTNolQKYlMXKQ5KUyhmSWMfPDSpgoIKI0rvTOdhQpBDCm1OhGFaisQQpgqiYjChSCGFIJ0wEwoYmiHtI8u9SCdHZ7M3Bzr2wYO5QlaG1aUOn7XqFnleXkjok0dkXasTjOvmo5E6dIMNk5otPEOaIaSAhFJFNrgzVjlyaUkkLMSDUxUgmIWMIOKcvTBMtbMPbgnzcLJk0omEkkkEDDhbVFkNA4ALHp6jvW7K6unXLI5SOVQIRColdLJAnJ6VYtcHNcWuaZBBIIPEEXCdwQyFNoZHf9G/aAbU8X3Cs0f8AcaP9Q8t67yjiGvAcxwc0iQQQQQd4I1XgUrU2Ht+thXTSd2SZdTddjvDceY+K5p4k+C0ZM9rSXH4f2iYctBeyo10XaAHAHk6RI8Ako9uXopZ5M1ECSS6ERYRpUwUklZCMm1ECSSoIyYUgkkmQpJSCSSaLAyltX3R3/JZD0yS4ep+86cXAySSShRUSSSSUI6RTJImCBKEkkaAxkkkkAjJoSSRSAPCSSS1GJMC1cHVlg5WPgkkr4HTJ5eA8qJSSXUyRGVBwSSSjIgQmSSSSRSIkkklMc//Z'>
                  </HotelCard>
                  <HotelCard
                      name='Hotel Ganga Azure'
                      address='Near Shiv Murti chowk Opp. Railway Station Haridwar'
                      href='https://www.goibibo.com/hotels/ganga-azure-hotel-in-haridwar-8581916745583737264/?hquery={%22ci%22:%2220240416%22,%22co%22:%2220240417%22,%22r%22:%221-2-0%22,%22ibp%22:%22%22}&cc=IN&reviewType=gi&vcid=3545728938069300513'
                      src='https://q-xx.bstatic.com/xdata/images/hotel/max300/504330531.jpg?k=b82195fd5f12a2264093130414a802c07a19ccb31e2a78c94da89a41b685569d&o=&s=512x384'>
                  </HotelCard>
                

                  {/* Add more cards for other hotels */}
              </div>
          </div>
          <div className="p-16">
              <h2 className="text-3xl font-semibold text-center text-teal-900 mb-8">Nearby Restaurants</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Card 1: Restaurant 1 */}
                  <div className="border border-black rounded-lg p-4">
                      <div className="flex justify-center mb-4">
                          <img src="https://lh3.googleusercontent.com/4XgK2YjGUm5sqPyoHRwnv83saKgymzDlJO4lHAXcQA87roodAJvodcLnkl3Bc3HDoLI1cXXu3Uw88SCWA_2Y0_VbziBzcggKRq4oezHKGA=w1200-rw" alt="Restaurant 1" className="w-full h-60 mb-4 object-cover rounded-lg" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2">Curry Leaf Haridwar</h3>
                      <p className="text-gray-700 mb-2">Type:  Veg, Italian, South Indian, Chinese, Mexican, Japanese </p>
                      <p className="text-gray-700 mb-2">Address:16, Upper Rd, Haridwar, Uttarakhand, India </p>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/dir//16-A,+Ganga+Building,+Harki+Pauri+Haridwar,+249401/@25.5376752,83.1135899,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3991df5c174001d3:0xdcf04a86c7df537e!2m2!1d83.1959914!2d25.5376982?entry=ttu" className="text-blue-500 h-60 hover:underline">View On Map</a>
                  </div>


                  {/* Card 2: Restaurant 2 */}
                  <div className="border border-black rounded-lg p-4">
                      <div className="flex justify-center mb-4">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoyHXda6D7AuS2GNTJO7a-p2KArOJ_hUfyA&s" alt="Restaurant 1" className="w-full h-60 object-cover mb-4 rounded-lg" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2">Sai Ganga Bhoj </h3>
                      <p className="text-gray-700 mb-2">Type:  Veg, Italian, South Indian</p>
                      <p className="text-gray-700 mb-2">Address:16, Upper Rd, Haridwar, Uttarakhand, India </p>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/dir//shiv+vishram+grah,+Upper+Rd,+near+ganga+takies,+Har+Ki+Pauri,+Haridwar,+Uttarakhand+249401/@29.9550183,78.08641,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39094795ce569861:0xce97a0fed412be5a!2m2!1d78.1688114!2d29.9550439?entry=ttu" className="text-blue-500 h-60 hover:underline">View On Map</a>
                  </div>

                  <div className="border border-black rounded-lg p-4">
                      <div className="flex justify-center mb-4">
                          <img src="data:image/jpeg;base64,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" alt="Restaurant 1" className="w-full h-60 object-cover mb-4 rounded-lg" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2">Amber Hotel</h3>
                      <p className="text-gray-700 mb-2">Type:  Veg, Italian, South Indian</p>
                      <p className="text-gray-700 mb-2">Address:16, Upper Rd, Haridwar, Uttarakhand, India </p>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps?s=web&rlz=1C1CHBD_enIN1025IN1025&sca_esv=eae1723b12d3aedd&sca_upv=1&lqi=CjBnYW5nYSByaXZlcihoYXJpZHdhcikgc3VnZ2VzdCBuZWFyYnkgcmVzdGF1cmFudHNIps3TvfasgIAIWjsQAxAEEAUYAhgFIi9nYW5nYSByaXZlciBoYXJpZHdhciBzdWdnZXN0IG5lYXJieSByZXN0YXVyYW50c5IBCnJlc3RhdXJhbnSaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUkhha3hpUVhOUlJSQUKqAXgQASoeIhpzdWdnZXN0IG5lYXJieSByZXN0YXVyYW50cygAMh8QASIbyrI1wyF99ZF3PQWIGYQpzdhXQsvMlpKlr6oQMjMQAiIvZ2FuZ2Egcml2ZXIgaGFyaWR3YXIgc3VnZ2VzdCBuZWFyYnkgcmVzdGF1cmFudHM&phdesc=YIieYjh-KdI&vet=12ahUKEwij-t2dkbOFAxX8RmwGHRE_DzwQ1YkKegQIGxAB..i&cs=0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kav9gS0bRwk5Mcd-jAHHTNql&daddr=Upper+Rd,+Har+Ki+Pauri,+Haridwar,+Uttarakhand+249401" className="text-blue-500 h-60 hover:underline">View On Map</a>
                  </div>


                  {/* Add more cards for other restaurants */}
              </div>
          </div>
          <div className='fixed w-full bottom-0'>
              <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                  <defs>
                      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                  </defs>
                  <g className="parallax">
                      <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                      <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                      <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                      <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                  </g>
              </svg>
          </div>
          <footer className="fixed bottom-0 w-full bg-green-50 border-gray-200 px-2 sm:px-4 rounded dark:bg-gray-800 text-white text-center py-4">
              <p>&copy; 2023 River Monitoring Network</p>
          </footer>

      </>
  )
}
