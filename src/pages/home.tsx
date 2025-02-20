import { useRef, useState, useEffect } from "react";
import LiquidChrome from "@/components/ui/LiquidChrome";
import TextPressure from "@/components/ui/TextPressure";
import VariableProximity from "@/components/ui/VariableProximity";
import TiltedCard from "@/components/ui/TiltedCard";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Magnet from "@/components/ui/Magnet";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { BsHeadset } from "react-icons/bs";
import GridDistortion from "@/components/ui/GridDistortion";

export default function Home() {
  const containerRef = useRef(null);
  const images = [
    "public/esummit.jpg",
    "public/fluxus.jpg",
    "public/lakshya.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const councils = [
    {
      title: "Science and Technology Council",
      description:
        "The SnT Council of IIT Indore is a community of science and technology enthusiasts who love to explore the unthinkable.",
      image: "/snt.jpg",
      alt: "Science and Technology Council",
    },
    {
      title: "Cultural Council",
      description:
        "The Cultural Council of IIT Indore orchestrates a diverse array of cultural events throughout the year, fostering artistic expression and community engagement among students and faculty alike.",
      image: "/cult.jpg",
      alt: "Cultural Council",
    },
    {
      title: "Sports Council",
      description:
        "The Sports Council is the voice and face of IIT Indore sports community, responsible for management and conduction of all sporting events on campus.",
      image: "/sports.jpg",
      alt: "Sports Council",
    },
    {
      title: "Academic Council",
      description:
        "The Academics Council has been entrusted with managing executive activities in two of the most crucial aspects of student life - Academics and Career.",
      image: "/acad.jpg",
      alt: "Academic Council",
    },
  ];

  const secretaries = [
    {
      name: "John Doe",
      position: "PRESIDENT",
      subPosition: "STUDENT’S GYMKHANA",
      image: "public/President.jpg", // Ensure the images exist in the public/ directory
      linkedin: "public/President.jpg",
      email: "mailto:johndoe@example.com",
    },
    {
      name: "Jane Smith",
      position: "GENERAL SECRETARY",
      subPosition: "CULTURALS",
      image: "public/President.jpg",
      linkedin: "https://linkedin.com/in/janesmith",
      email: "mailto:janesmith@example.com",
    },
    {
      name: "Alice Brown",
      position: "GENERAL SECRETARY",
      subPosition: "TECHNOLOGY",
      image: "public/President.jpg",
      linkedin: "https://linkedin.com/in/alicebrown",
      email: "mailto:alicebrown@example.com",
    },
    {
      name: "Bob Williams",
      position: "GENERAL SECRETARY",
      subPosition: "SPORTS",
      image: "public/President.jpg",
      linkedin: "https://linkedin.com/in/bobwilliams",
      email: "mailto:bobwilliams@example.com",
    },
    {
      name: "Bob Williams",
      position: "GENERAL SECRETARY",
      subPosition: "SPORTS",
      image: "public/President.jpg",
      linkedin: "https://linkedin.com/in/bobwilliams",
      email: "mailto:bobwilliams@example.com",
    },
    {
      name: "Bob Williams",
      position: "GENERAL SECRETARY",
      subPosition: "SPORTS",
      image: "public/President.jpg",
      linkedin: "https://linkedin.com/in/bobwilliams",
      email: "mailto:bobwilliams@example.com",
    },
    {
      name: "Bob Williams",
      position: "GENERAL SECRETARY",
      subPosition: "SPORTS",
      image: "public/President.jpg",
      linkedin: "https://linkedin.com/in/bobwilliams",
      email: "mailto:bobwilliams@example.com",
    },
    {
      name: "Bob Williams",
      position: "GENERAL SECRETARY",
      subPosition: "SPORTS",
      image: "public/President.jpg",
      linkedin: "https://linkedin.com/in/bobwilliams",
      email: "mailto:bobwilliams@example.com",
    },
    {
      name: "Bob Williams",
      position: "GENERAL SECRETARY",
      subPosition: "SPORTS",
      image: "public/President.jpg",
      linkedin: "https://linkedin.com/in/bobwilliams",
      email: "mailto:bobwilliams@example.com",
    },
  ];

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Animation */}
      <LiquidChrome
        baseColor={[0.1, 0.1, 0.1]}
        speed={0.2}
        amplitude={0.5}
        frequencyX={3}
        frequencyY={2}
        interactive
        className="fixed inset-0 z-0"
      />

      {/* Updated Carousel Container */}
<div className="relative w-full h-screen overflow-hidden border-b mb-10"> {/* Changed to h-screen */}
  <div
    className="flex w-full h-full transition-transform duration-1000"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {images.map((src, index) => (
      <div key={index} className="min-w-full h-full relative"> {/* Added wrapper div */}
        <GridDistortion
          imageSrc={src}
          grid={10}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          className="w-full h-full object-cover" // Added h-full
        />
      </div>
    ))}
  </div>
</div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-white px-4 md:px-40 py-16 border mt-20 ">
        {/* Councils Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-center text-black">
            <TextPressure
              text="COUNCILS!"
              flex
              alpha={false}
              stroke={false}
              width
              weight
              italic={false}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={50}
            />
          </h2>
        </div>

        {/* Description Section */}
        {/* <div ref={containerRef} className="max-w-4xl text-center text-lg ">
          <VariableProximity
            label="The four Councils along with cells carry out the executive responsibilities of the Students’ Gymkhana. Each council executes affairs pertaining to an overarching purpose. The Councils comprise Clubs, Hobby Groups, and Institute Teams, which cater to specific activities."
            className="variable-proximity-demo"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="exponential"
          />
        </div> */}

        <div className="max-w-4xl px-6 md:px-12 text-center ">
          <h4 className="text-lg md:text-xl text-white leading-relaxed tracking-wide animate-slide-up">
            The four Councils along with cells carry out the executive
            responsibilities of the Students’ Gymkhana. Each council executes
            affairs pertaining to an overarching purpose. The Councils comprise
            Clubs, Hobby Groups, and Institute Teams, which cater to specific
            activities.
          </h4>
        </div>

        {/* Councils Grid */}
        <div className="mt-12 w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-5">
            {councils.map((council, index) => (
              <TiltedCard
                key={index}
                imageSrc={council.image}
                altText={council.alt}
                captionText={council.title}
                containerHeight="320px"
                containerWidth="280px"
                imageHeight="300px"
                imageWidth="220px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
                overlayContent={
                  <p className="text-center text-lg text-black">
                    {council.title}
                  </p>
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Secretaries Section */}
      <div className="relative w-full flex flex-col items-center py-16 border-t border">
        <div className="relative z-10 text-white px-4 md:px-40 text-center">
          <h2 className="text-4xl font-bold pb-6">
            <TextPressure
              text="SECRETARIES!"
              flex
              alpha={false}
              stroke={false}
              width
              weight
              italic={false}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={50}
            />
          </h2>
        </div>

        {/* Secretaries Grid (Reusing Councils Data)
        <div className="mt-12 w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {councils.map((council, index) => (
              <TiltedCard
                key={index}
                imageSrc={council.image}
                altText={council.alt}
                captionText={council.title}
                containerHeight="320px"
                containerWidth="280px"
                imageHeight="280px"
                imageWidth="250px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
                overlayContent={
                  <p className="text-center text-lg ">
                    {council.title}
                  </p>
                }
              />
            ))}
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {secretaries.map((secretary, index) => (
            <div
              key={index}
              className="group shadow-lg rounded-lg p-10 flex flex-col items-center text-center 
                      transform transition duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-2
                      animate-fade-in"
            >
              {/* Profile Image */}
              <div className="w-24 text-white h-24 rounded-full border-4 border-gray-300 overflow-hidden transition-transform duration-300 group-hover:scale-110">
                <img
                  src={secretary.image}
                  alt={secretary.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Position */}
              <h3 className="text-xl font-semibold mt-4 text-white">
                {secretary.name}
              </h3>
              <p className="text-sm font-bold text-white uppercase">
                {secretary.position}
              </p>
              <p className="text-sm text-white">{secretary.subPosition}</p>

              {/* Social Icons */}
              <div className="flex gap-4 mt-4">
                <a
                  href={secretary.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 transition duration-300 transform hover:scale-110"
                >
                  <FaLinkedin size={22} />
                </a>
                <a
                  href={secretary.email}
                  className="text-gray-700 hover:text-gray-500 transition duration-300 transform hover:scale-110"
                >
                  <FaEnvelope size={22} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center py-16 border-t border">
        <div className="mb-8 flex align-center p-2 space-x-1">
          <h2 className="text-4xl font-bold text-center text-black">
            <TextPressure
              text="ABOUT"
              flex
              alpha={false}
              stroke={false}
              width
              weight
              italic={false}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={50}
            />
          </h2>
          <h2 className="text-4xl font-bold text-center text-black">
            <TextPressure
              text=" US"
              flex
              alpha={false}
              stroke={false}
              width
              weight
              italic={false}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={50}
            />
          </h2>
        </div>
        {/* Logo with Hover Effect */}
        <div className="mb-6 animate-fade-in">
          <img
            src="/main_logo.png"
            alt="IITI Gymkhana Logo"
            className="w-32 md:w-40 lg:w-80 transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Text Section */}
        {/* <div className="max-w-4xl px-6 md:px-12 text-center ">
          <h4 className="text-lg md:text-xl text-white leading-relaxed tracking-wide animate-slide-up">
            A major attraction of IIT Indore is its eminent faculty members and
            flexible education system. The faculty at IITI is among the best in
            India, with deep expertise in their respective fields. Many of our
            professors are active researchers, making the learning experience
            immersive and insightful.
            <br />
            <br />
            Student Gymkhana is the student organization of IIT Indore. The
            Senate consists of two branches: the Executive and the Councillors.
            Elected student representatives work towards fostering growth,
            leadership, and talent development through a variety of programs.
            <br />
            <br />
            To promote co-curricular activities, Gymkhana features multiple
            clubs and groups, catering to the diverse interests of students.
            These platforms help nurture creativity, innovation, and teamwork
            beyond academics.
          </h4>
        </div> */}
        <div
          ref={containerRef}
          className="max-w-4xl text-center text-lg text-white"
        >
          <VariableProximity
            label=" A major attraction of IITI is its eminent faculty members and flexible education system. The faculty at IITI is one of the best among Indian professional institutes. The faculty members are excellent teachers and mentors and have many achievements in their fields. Most of our professors are researchers themselves and are deeply connected to their subjects of interest, says a student. It is this attitude of our professors that really makes them special and attractive to our students. Student Gymkhana is the student organization of IIT Indore. The Senate consists of two branches namely the Executive and the Councillors. The elected representatives of the students strive to promote growth and leadership among the students by helping them maximize their talents by coordinating various programs. To promote co-curricular activities and interests. Gymkhana has a number of clubs and groups dedicated to the interests of the students."
            className="variable-proximity-demo"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
        <div className="my-8 p-12 border text-white">
          <Magnet padding={100} disabled={false} magnetStrength={1}>
            <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg transition duration-300 ease-in-out">
              Learn More
            </button>
          </Magnet>
        </div>
      </div>
    </div>
  );
}
