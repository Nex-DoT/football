import Image from "next/image";
import football from "/public/image/15.png";

const WelcomingComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:gap-10 mt-9 p-10 mb-9">
      {/* Image on mobile, hidden on desktop */}
      <div className="md:hidden mb-10">
        <Image className="bg-transparent" width={800} src={football} alt="png" />
      </div>

      {/* Text content */}
      <div className="flex flex-col">
        <h1 className="text-4xl italic font-bold mb-5">
          Welcome to <p className="inline font-ProtestG"> FC Goal</p> website!
        </h1>
        <p className="text-lg font-thin mb-10 p-3">
          Here, you can find the latest results and analysis of all your favorite
          football matches, from the Premier League to the Champions League. We
          also have in-depth statistics and records on all teams and players.
        </p>
        <ul className="list-disc p-3">
          <h2 className="font-bold text-lg mb-5">
            Here are some of the things you can do on our website:
          </h2>
          <li className="text-sm font-bold">
            Check the latest results and analysis of all your favorite football
            matches.
          </li>
          <li className="text-sm font-bold">
            Browse in-depth statistics and records on all teams and players.
          </li>
          <li className="text-sm font-bold">
            Sign up for our newsletter to receive the latest football news and
            updates straight to your inbox.
          </li>
        </ul>
        <p className="text-2xl font-thin mt-10">We hope you enjoy your time on our website!</p>
      </div>

      {/* Image on desktop, hidden on mobile */}
      <div className="hidden md:block">
        <Image className="bg-transparent" width={800} src={football} alt="png" />
      </div>
    </div>
  );
};

export default WelcomingComponent;
