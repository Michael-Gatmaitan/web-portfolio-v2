import Button from "../components/button";

const Home = () => {
  return (
    <div className="mt-[120px] lg:mt-[160px]">
      <div>
        <div className="text-h1-mobile lg:text-h1-desktop font-header leading-none text-pri">
          FRONTEND NERD
        </div>

        <div className="font-body text-body-mobile lg:text-body-desktop text-white opacity-70 mt-[16px] lg:mt-[24px]">
          Hi! I’m <span className="font-bold">Michael</span>. A creative self
          taught Frontend Developer. I program for fun since 2018 and still
          learning.
        </div>

        <Button
          className="font-header tracking-wider hover:text-gray-900 transition mt-[32px]"
          onClick={() => console.log("Hello")}
          text="HIRE ME"
        />
      </div>
    </div>
  );
};

export default Home;
