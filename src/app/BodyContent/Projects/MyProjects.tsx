import ProjectSwiper from "./ProjectSwiper";

export default function MyProjects() {
  return (
    <div className="lg:flex justify-between item-center gap-10 ">
      <div className="lg:w-[30%] text-white flex flex-col justify-center items-center text-center lg:text-left mb-10 mx-auto">
        <h1 className="text-4xl text-red-500 mb-5">My work</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          pariatur est ducimus dolore corporis assumenda.
        </p>
      </div>
      <ProjectSwiper />
    </div>
  );
}
