import { TwitterTweetEmbed } from 'react-twitter-embed';

const About = () => {
  return (
    <div className="max-w-6xl min-w-7xl mt-4 mx-auto bg-white flex flex-col items-center min-h-screen px-4 sm:py-8 sm:px-6 lg:px-8">
      <div
        // style={{ border: '1px solid red' }}
        className="max-w-4xl text-center flex flex-col items-center"
      >
        <p className="max-w-4xl mx-auto mt-1 text-4xl mb-8 font-extrabold text-gray-800 sm:text-4xl sm:tracking-tight lg:text-5xl">
          What's the deal here?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <div style={{ width: '60%', margin: '0 auto' }}>
          <TwitterTweetEmbed tweetId={'1331984868700467201'} options={{ width: '900px', margin: '0 auto' }} />
        </div>
      </div>
    </div>
  );
};
export default About;
