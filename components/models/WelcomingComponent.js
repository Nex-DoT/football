const WelcomingComponent = () => {
    return (
        <div className=" relative bg-red-100 -z-10">
            <div className=" w-200 h-200 rounded-full bg-color4 absolute -top-40 -left-16 ">
                <div className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-3/4">
                    <h1 className=" italic bold text-4xl">Welcome to football club website!</h1>
                    <br/>
                    <br/>
                    <h2 className=" font-thin pr-2">Here, you can find the latest results and analysis of all your favorite football matches, from the Premier League to the Champions League. We also have in-depth statistics and records on all teams and players.</h2>
                    <br/>
                    <ul className="list-disc w-11/12">
                        <h2 className=" font-thin">Here are some of the things you can do on our website:</h2>
                        <br/>
                        <li className=" italic text-sm bold">Check the latest results and analysis of all your favorite football matches.</li>
                        <li className=" italic text-sm bold">Browse in-depth statistics and records on all teams and players.</li>
                        <li className=" italic text-sm bold">Sign up for our newsletter to receive the latest football news and updates straight to your inbox.</li>
                    </ul>
                    <br/>
                    <br/>
                    <p className="text-2xl italic">We hope you enjoy your time on our website!</p>
                 </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default WelcomingComponent;