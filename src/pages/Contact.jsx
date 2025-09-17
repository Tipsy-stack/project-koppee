import OtherBanner from "../components/OtherBanner";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { LuMail } from "react-icons/lu";

const Contact = () => {
  return (
    <div className="bg-[#fffbf2]">
      <OtherBanner title="contact" />

      <div className="flex flex-col justify-center items-center mt-10 py-8 gap-4">
        <div className="w-0.5 h-25 border border-secondary border-center"></div>

        <div>
          <p className="text-2xl md:text-2xl sm:text-lg tracking-widest text-center text-secondary">
            CONTACT US
          </p>
          <h1 className="text-4xl mt-2 md:mt-2 lg:mt-0 px-3 md:text-5xl sm:text-3xl lg:text-6xl font-bold text-center text-primary">
            Feel Free To Contact
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row md:flex-row gap-10 md:gap-40 lg:gap-60 mt-8 lg:mt-5">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="flex items-center gap-2 font-montserrat">
              <FaLocationDot className="text-4xl text-secondary" />
            </p>
            <p className="text-2xl font-semibold">Address</p>
            <p className="text-gray-700 text-[16px] tracking-wide">
              123 Street, New York, USA
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <p className="flex items-center gap-2 font-montserrat">
              <IoCall className="text-4xl text-secondary" />
            </p>
            <p className="text-2xl font-semibold">Phone</p>
            <p className="text-gray-700 text-[16px] tracking-wide">
              +012 345 67890
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <p className="flex items-center gap-2 font-montserrat">
              <LuMail className="text-4xl text-secondary" />
            </p>
            <p className="text-2xl font-semibold">Email</p>
            <p className="text-gray-700 text-[16px] tracking-wide">
              info@example.com
            </p>
          </div>
        </div>

        <div className="flex lg:px-15 lg:flex-row md:flex-row flex-col w-[90vw] lg:w-[95vw] md:w-[95vw] lg:h-[75vh] md:h-[75vh] gap-5 mt-5">
          <div className="w-full h-[65vh] lg:w-[55vw] md:w-[55vw] lg:h-[75vh] md:h-[75vh]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.35196272633!2d-73.97950600000001!3d40.697141499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sng!4v1758099239183!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex flex-col px-5 w-full lg:w-[55vw] md:w-[55vw] lg:h-[75vh] md:h-[75vh]">
            <form action="">
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="border border-[#ccd2d9] w-[80vw] h-[7vh] lg:w-[40vw] md:w-[40vw] lg:h-[8vh] md:h-[8vh] px-8 font-montserrat focus:outline-[#9b85aa] mb-5"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="email"
                  placeholder="Your Email"
                  required
                  className="border border-[#ccd2d9] w-[80vw] h-[7vh] lg:w-[40vw] md:w-[40vw] lg:h-[8vh] md:h-[8vh] px-8 font-montserrat focus:outline-[#9b85aa] mb-5"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  required
                  className="border border-[#ccd2d9] w-[80vw] h-[7vh] lg:w-[40vw] md:w-[40vw] lg:h-[8vh] md:h-[8vh] px-8 font-montserrat focus:outline-[#9b85aa] mb-5"
                />
              </div>

              <div className="">
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  class="block border border-[#ccd2d9] w-[80vw] h-[25vh] lg:w-[40vw] md:w-[40vw] lg:h-[25vh] md:h-[25vh] px-8 py-3 outline-black placeholder:font-montserrat placeholder:text-[16px] focus:outline-[#9b85aa]"
                  placeholder="Message"
                ></textarea>
              </div>

              <a href="/">
                <button
                  type="submit"
                  className="bg-secondary hover:bg-[#ed9837] font-semibold tracking-wide font-montserrat transition-all duration-300 text-primary w-[50vw] lg:w-[15vw] md:w-[20vw] p-4 mt-5 cursor-pointer"
                >
                  Send Message
                </button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
