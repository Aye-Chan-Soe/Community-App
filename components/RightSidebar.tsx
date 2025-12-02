import { FaQuestionCircle } from "react-icons/fa";
import {
  IoLogoLaravel,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoReact,
  IoLogoVue,
} from "react-icons/io5";

function RightSidebar() {
  return (
    <div className="p-5">
      <div>
        <h1 className="font-bold text-xl">Popular Questions</h1>
        <div className="mt-5 pl-3 space-y-5">
          <div className="flex items-center space-x-2">
            <span className="text-main text-xl">
              <FaQuestionCircle />
            </span>
            <span className="line-clamp-2 text-[16px]">
              This is question one. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Labore ea, odio magni nobis vel quaerat
              praesentium facere corrupti totam. Dolorum, perspiciatis modi! Rem
              nostrum quod possimus beatae voluptatibus dolor quaerat? Quia,
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-main text-xl">
              <FaQuestionCircle />
            </span>
            <span className="line-clamp-2 text-[16px]">
              This is question one. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Labore ea, odio magni nobis vel quaerat
              praesentium facere corrupti totam. Dolorum, perspiciatis modi! Rem
              nostrum quod possimus beatae voluptatibus dolor quaerat? Quia,
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-main text-xl">
              <FaQuestionCircle />
            </span>
            <span className="line-clamp-2 text-[16px]">
              This is question one. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Labore ea, odio magni nobis vel quaerat
              praesentium facere corrupti totam. Dolorum, perspiciatis modi! Rem
              nostrum quod possimus beatae voluptatibus dolor quaerat? Quia,
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-main text-xl">
              <FaQuestionCircle />
            </span>
            <span className="line-clamp-2 text-[16px]">
              This is question one. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Labore ea, odio magni nobis vel quaerat
              praesentium facere corrupti totam. Dolorum, perspiciatis modi! Rem
              nostrum quod possimus beatae voluptatibus dolor quaerat? Quia,
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-main text-xl">
              <FaQuestionCircle />
            </span>
            <span className="line-clamp-2 text-[16px]">
              This is question one. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Labore ea, odio magni nobis vel quaerat
              praesentium facere corrupti totam. Dolorum, perspiciatis modi! Rem
              nostrum quod possimus beatae voluptatibus dolor quaerat? Quia,
            </span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="font-bold text-xl">Popular Tags</h1>
        <div className="mt-5 pl-3 space-y-5">
          <div className="flex items-center space-x-2">
            <span className="text-main text-xl" style={{ color: "#61DAFB" }}>
              <IoLogoReact />
            </span>
            <span className="line-clamp-2 text-[16px]">React</span>
          </div>
        </div>
        <div className="mt-5 pl-3 space-y-5">
          <div className="flex items-center space-x-2">
            <span className="text-main text-xl" style={{ color: "#4FC08D" }}>
              <IoLogoVue />
            </span>
            <span className="line-clamp-2 text-[16px]">Vue</span>
          </div>
        </div>
        <div className="mt-5 pl-3 space-y-5">
          <div className="flex items-center space-x-2">
            <span className="text-main text-xl" style={{ color: "#FF2D20" }}>
              <IoLogoLaravel />
            </span>
            <span className="line-clamp-2 text-[16px]">Laravel</span>
          </div>
        </div>
        <div className="mt-5 pl-3 space-y-5">
          <div className="flex items-center space-x-2">
            <span className="text-main text-xl" style={{ color: "#3776AB" }}>
              <IoLogoPython />
            </span>
            <span className="line-clamp-2 text-[16px]">Python</span>
          </div>
        </div>
        <div className="mt-5 pl-3 space-y-5">
          <div className="flex items-center space-x-2">
            <span className="text-main text-xl" style={{ color: "#339933" }}>
              <IoLogoNodejs />
            </span>
            <span className="line-clamp-2 text-[16px]">Node.js</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
