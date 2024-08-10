import React from "react";

interface CardProps {
  imgSrc: string;
  title: string;
  text: string;
}
const Card: React.FC<CardProps> = ({ imgSrc, title, text }) => (
  <div className="card border rounded-lg m-2 shadow-sm overflow-hidden">
    <div className="image-container h-64  w-full flex justify-center items-center overflow-hidden">
      <img src={imgSrc} alt={title} className="object-cover h-full w-full" />
    </div>
    <div className="card-content p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{text}</p>
    </div>
  </div>
);

const WhyAttend = () => {
  return (
    <div className="pt-20 w-full flex flex-col justify-center ">
      <div className="flex w-full  justify-center items-center flex-col space-x-5">
        <span className=" text-themeBlue font-semibold text-[40px] text-center">
          Why Attend PELA
        </span>
        <span className="py-5 text-black font-semibold text-[15px] text-center">
          What makes PELA the most sought after event in the energy industry?
        </span>
      </div>
      <div className="flex  ">
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 justify-center px-[3rem]  lg:px-[14rem]">
          <Card
            imgSrc="/attend/recognition.jpg"
            title="Recognition"
            text="Recognition at Leading Energy Sector Focused B2B Platform"
          />
          <Card
            imgSrc="/attend/connection.jpg"
            title="Build New Partnerships"
            text="Build new partnerships with industries in smart solutions, renewable & clean energy, energy storage, green hydrogen, transmission & distribution."
          />
          <Card
            imgSrc="/attend/innovation.jpg"
            title="Learn More"
            text="Learn more about trending energy solutions and connect with companies that will maximise the value of your energy project."
          />
          <Card
            imgSrc="/attend/award.jpg"
            title="Encourage Innovation"
            text="Encourage innovation and excellence within your organization by celebrating and learning from industry trailblazers."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyAttend;
