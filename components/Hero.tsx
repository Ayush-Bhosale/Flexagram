import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center text-center">
      <div className="px-4 md:px-6 max-w-[1500px] mx-auto w-[90%]">
        <div className="space-y-2">
          <h1 className="head-text tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-dark">
            Ready to take this week's quiz?
          </h1>
          <div className="mt-2 border border-gray-200 p-4 rounded-lg">
            <h2 className="head-text">
              The Rules
            </h2>
            <ul className="list-disc text-left text-gray-600 pl-8">
              <li>Submit your choice to reveal the answer; then go to the next one.</li>
              <li>You won't be allowed to submit "no choice" but wrong answers won't affect your score.</li>
              <li>This game is timed - get the most correct answers in the least amount of time!</li>
              <li>The timer won't continue to increase when you're looking at the correct answer - so feel free to relax after submission.</li>
              <li>Check how you rank on our top 10 scoreboard - and continue to increase your skills.</li>
            </ul>
          </div>
          <p className="custom-radio-label mt-6">
            Get ready to ace it.
          </p>
          <div className="mt-6">
            <Button className='bg-primary-500'>
              <Link href={"/quiz"}>
                <span className="flex items-center">
                  I'm ready !!
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
