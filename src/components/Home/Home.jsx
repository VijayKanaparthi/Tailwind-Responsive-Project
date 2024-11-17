import Navbar from "../Navbar/Navbar"
import hero from "../../assets/logo.png"

const featuresCard = [
  {
    name: "Online Appointment Booking",
  },
  {
    name: "Pharmacy & Medication Support",
  },
  {
    name: "Patient-Centered Care",
  },
  {
    name: "Health Check-Up Packages",
  },
  {
    name: "24/7 Emergency Services",
  },
  {
    name: "Specialized Departments",
  },
  {
    name: "Advanced Diagnostics",
  },
  {
    name: "Experienced Doctors",
  },
  {
    name: "Online Appointment Booking",
  },
  {
    name: "Pharmacy & Medication Support",
  },
  {
    name: "Patient-Centered Care",
  },
  {
    name: "Health Check-Up Packages",
  },
]

const doctorsList = [
  {
    name: "Dr. Anjali Sharma",
    image_url:
      "https://img.freepik.com/free-photo/smiling-pretty-woman-doctor-with-tablet_23-2147648676.jpg?uid=R168738197&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid",
    specialist: "Cardiologist",
    available_status: true,
  },
  {
    name: "Dr. Ravi Kumar",
    image_url:
      "https://img.freepik.com/free-photo/front-view-male-doctor-medical-suit-wearing-mask-due-covid-white-wall-illness-covid-pandemic-virus-disease_140725-67338.jpg?uid=R168738197&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid",
    specialist: "Orthopedic Surgeon",
    available_status: false,
  },
  {
    name: "Dr. Priya Mehta",
    image_url:
      "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?uid=R168738197&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid",
    specialist: "Pediatrician",
    available_status: true,
  },
  {
    name: "Dr. Arjun Gupta",
    image_url:
      "https://img.freepik.com/free-photo/portrait-hansome-young-male-doctor-man_171337-5068.jpg?uid=R168738197&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid",
    specialist: "Dermatologist",
    available_status: true,
  },
  {
    name: "Dr. Nisha Kapoor",
    image_url:
      "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827775.jpg?uid=R168738197&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid",
    specialist: "Gynecologist",
    available_status: false,
  },
  {
    name: "Dr. Ravi Kumar",
    image_url:
      "https://img.freepik.com/free-photo/front-view-male-doctor-medical-suit-wearing-mask-due-covid-white-wall-illness-covid-pandemic-virus-disease_140725-67338.jpg?uid=R168738197&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid",
    specialist: "Orthopedic Surgeon",
    available_status: false,
  },
  {
    name: "Dr. Priya Mehta",
    image_url:
      "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?uid=R168738197&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid",
    specialist: "Pediatrician",
    available_status: true,
  },
  {
    name: "Dr. Arjun Gupta",
    image_url:
      "https://img.freepik.com/free-photo/portrait-hansome-young-male-doctor-man_171337-5068.jpg?uid=R168738197&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid",
    specialist: "Dermatologist",
    available_status: true,
  },
  {
    name: "Dr. Ravi Kumar",
    image_url:
      "https://img.freepik.com/free-photo/front-view-male-doctor-medical-suit-wearing-mask-due-covid-white-wall-illness-covid-pandemic-virus-disease_140725-67338.jpg?uid=R168738197&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid",
    specialist: "Orthopedic Surgeon",
    available_status: false,
  },
  {
    name: "Dr. Priya Mehta",
    image_url:
      "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?uid=R168738197&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid",
    specialist: "Pediatrician",
    available_status: true,
  },
  {
    name: "Dr. Arjun Gupta",
    image_url:
      "https://img.freepik.com/free-photo/portrait-hansome-young-male-doctor-man_171337-5068.jpg?uid=R168738197&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid",
    specialist: "Dermatologist",
    available_status: true,
  },
]

const hospitalMachines = [
  {
    technology: "Telemedicine",
    image_url:
      "https://img.freepik.com/free-photo/closeup-family-talking-with-doctor-via-video-call-laptop-coronavirus-pandemic_637285-12146.jpg?uid=R168738197&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid",
    content:
      "Telemedicine enables remote consultations and diagnoses using video conferencing and digital tools.",
  },
  {
    technology: "Robotic Surgery",
    image_url:
      "https://img.freepik.com/free-photo/doctor-from-future-concept_23-2151111211.jpg?uid=R168738197&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid",
    content:
      "Robotic-assisted surgery offers precision and minimal invasiveness, reducing recovery times and complications.",
  },
  {
    technology: "AI-Powered Diagnostics",
    image_url:
      "https://img.freepik.com/free-photo/researcher-looking-monitor-analysing-brain-scan-while-coworker-discussing-with-patient-background-about-side-effects-mind-functions-nervous-system-tomography-scan-working-laboratory_482257-13071.jpg?uid=R168738197&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid",
    content:
      "Artificial intelligence analyzes medical data to assist doctors in diagnosing diseases more accurately and quickly.",
  },
  {
    technology: "3D Printing",
    image_url:
      "https://img.freepik.com/free-photo/side-view-man-wearing-glasses-working-equipment_23-2148429655.jpg?uid=R168738197&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid",
    content:
      "3D printing is used to create custom prosthetics, implants, and even organ models for surgical planning.",
  },
  {
    technology: "Wearable Health Devices",
    image_url:
      "https://img.freepik.com/free-photo/woman-medical-mask-getting-her-temperature-measured-by-electronic-thermometer_53876-95274.jpg?uid=R168738197&ga=GA1.1.1961507238.1728465887&semt=ais_hybrid",
    content:
      "Wearables like smartwatches monitor vital signs, track fitness, and provide real-time health updates.",
  },
]

const Home = () => {
  return (
    <div className=" h-full mb-7">
      <Navbar />
      <div className="w-full h-64 md:h-96 lg:h-96 lg:mb-96 flex justify-between items-center ">
        <div className="w-1/2 h-full md:h-2/4 lg:h-full flex flex-col justify-center items-center md:w-1/3">
          <h1 className="font-semibold text-base md:text-2xl lg:text-6xl">
            Your Health, Our Priority
          </h1>
          <p className="text-xs mt-5 lg:text-3xl">
            Book your appointment today! Caring for Life Every Day
          </p>
        </div>
        <div className="w-2/3 md:w-9/12  md:h-2/4 lg:h-full lg:w-2/3">
          <img src={hero} alt="" />
        </div>
      </div>

      <ul className="flex overflow-scroll  scroll-smooth gap-4 scrollbar-hide md:mt-16 pl-3 pr-3">
        {featuresCard.map((each) => {
          return (
            <li
              key={each.name}
              className=" text-xs bg-slate-800 text-slate-50 rounded-lg px-5 h-12 "
            >
              {each.name}
            </li>
          )
        })}
      </ul>

      <h1 className="m-1 font-semibold lg:text-4xl pl-3 mt-7">Doctors</h1>
      <ul className="flex p-4 gap-4 overflow-scroll pl-3 pr-3">
        {doctorsList.map((each) => (
          <li
            key={each.name}
            className="h-54 w-40 shadow-lg shadow-violet-500  mt-3 rounded flex flex-col justify-between items-center"
          >
            <div>
              <img
                src={each.image_url}
                alt={each.name}
                className="w-full rounded"
              />
            </div>
            <div className=" p-1 w-full flex flex-col justify-center items-center">
              <h1 className="text-xs">{each.name}</h1>
              <p className="text-xs">{each.specialist}</p>
              <p
                className={
                  each.available_status
                    ? "text-green-600 text-xs"
                    : " text-xs text-red-600"
                }
              >
                {each.available_status ? "Available" : "Not Available"}
              </p>
              <button
                type="button"
                className="bg-slate-400 rounded p-2 mt-1 text-xs"
              >
                Book Appointment
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h1 className="pl-3 font-bold text-3xl mt-8">Welcome to Heart Care</h1>

      <div className=" lg:flex lg:gap-2 lg:h-96  m-3 bg-white p-3 shadow-lg shadow-violet-500">
        <div className="lg:h-full lg:w-4/5">
          <img
            src="https://img.freepik.com/free-photo/modern-warehouse-bathed-glow-setting-sun_91128-4583.jpg?uid=R168738197&ga=GA1.1.1961507238.1728465887"
            alt="hospital"
            className="rounded lg:h-full lg:w-full"
          />
        </div>
        <div>
          <h1 className="font-semibold mt-1 pl-1">
            24/7 Support – Always Here for You
          </h1>
          <p className="p-3">
            Our dedicated support team is available 24/7 to assist you with all
            your healthcare needs. Whether it’s scheduling appointments,
            resolving queries, or addressing emergencies, we’re just a call or
            click away. Experience round-the-clock care and support that puts
            your health first.
          </p>
        </div>
      </div>
      <h1 className="font-bold lg:text-3xl ml-3  mt-10">
        Bringing the Future of Healthcare to You
      </h1>
      <ul className="flex gap-2 overflow-scroll p-3 ">
        {hospitalMachines.map((each) => (
          <li
            key={each.technology}
            className=" shadow-lg shadow-violet-600 rounded-md w-full h-80 flex flex-col justify-between items-center "
          >
            <div className="w-80">
              <img
                src={each.image_url}
                alt={each.technology}
                className="w-full rounded"
              />
            </div>
            <div className="w-full p-3 mb-1">
              <h1 className="font-extrabold">{each.technology}</h1>
              <p>{each.content}</p>
            </div>
          </li>
        ))}
      </ul>
      <footer className="bg-slate-800 flex gap-5 text-white p-4  justify-between">
        <ul className="flex flex-col gap-3">
          <h1 className="font-bold">Quick Links</h1>
          <li className="text-xs">Home</li>
          <li className="text-xs">About Us</li>
          <li className="text-xs">Services</li>
          <li className="text-xs">Doctors</li>
          <li className="text-xs">Contact Us</li>
          <li className="text-xs">FAQs</li>
        </ul>
        <div>
          <h1 className="font-extrabold">Contact Information</h1>
          <p className="text-xs">
            Address: 123 Health Avenue, Wellness City, India Phone:
            +91-98765-43210 Email: contact@hospitalname.com Emergency Hotline:
            24/7 at +91-1122334455
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Working Hours</h1>
          <p className="text-xs">Monday to Saturday: 9:00 AM – 8:00 PM</p>
          <p className="text-xs">Sunday: 10:00 AM – 5:00 PM</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
