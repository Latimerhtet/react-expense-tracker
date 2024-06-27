import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
const HeroSection = () => {
  return (
    <section className="flex justify-around items-center p-10">
      <div className="flex flex-col gap-6 items-start">
        <p className="text-4xl font-semibold">Your Daily Budget Tracker</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
          facilis, consequuntur laboriosam quaerat, veniam, quod est consequatur
          nemo repudiandae omnis natus nam quia. Aspernatur ipsa ad similique
          laboriosam explicabo totam incidunt consequuntur hic non optio vero
          sequi harum molestias eveniet quo veritatis dolorem dicta dolores
          exercitationem, tenetur eos mollitia sint.
        </p>

        <button className="p-2  border-2 border-cyan-800 text-cyan-800">
          Explore our service
        </button>
        <div className="px-5 flex  items-center text-xl gap-8">
          <span>
            <FaFacebook />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaTiktok />
          </span>
        </div>
      </div>
      <img
        className="w-[700px]"
        src=" https://media.licdn.com/dms/image/D5612AQGplp7JKG6Iiw/article-cover_image-shrink_720_1280/0/1673950361361?e=2147483647&v=beta&t=NxzErCoXqQ-xwkHJZZkKGKYNA21hJh3oNMUJzNKQr9M"
        alt="herosection-image"
      />
    </section>
  );
};

export default HeroSection;
