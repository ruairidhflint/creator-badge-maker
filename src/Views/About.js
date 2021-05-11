import { TwitterTweetEmbed } from 'react-twitter-embed';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const About = () => {
  return (
    <div className="max-w-5xl min-w-6xl my-6 mx-auto bg-white flex flex-col items-center min-h-screen px-4 sm:py-8 sm:px-6 lg:px-8">
      <div className="max-w-3xl flex-col items-center text-xl text-gray-500">
        <p className="max-w-4xl mx-auto mt-1 text-4xl mb-8 font-extrabold text-gray-800 text-center sm:text-4xl sm:tracking-tight lg:text-5xl">
          What's the deal here?
        </p>
        <p>
          It all started with the tweet below by{' '}
          <a
            className="text-gray-700 hover:text-gray-200 transition duration-250 ease-in-out cursor-pointer underline"
            href="https://jakobgreenfeld.com/"
            target="_blank"
            rel="noreferrer noopenner"
          >
            Jakob Greenfeld
          </a>
          . A Maker Badge is a great little addition to any project for an Indie Hacker/Creator. He wrote a subsequent{' '}
          <a
            className="text-gray-700 hover:text-gray-200 transition duration-250 ease-in-out cursor-pointer underline"
            href="https://jakobgreenfeld.com/badge"
            target="_blank"
            rel="noreferrer noopenner"
          >
            post
          </a>{' '}
          about his reasoning and thoughts on the idea which is well worth the short read.
        </p>
        <div style={{ width: '60%', margin: '0 auto' }} className="py-5">
          <TwitterTweetEmbed
            tweetId={'1331984868700467201'}
            options={{ width: '900px', margin: '0 auto' }}
            placeholder={
              <div className="text-center flex justify-center">
                <Loader type="TailSpin" color="#00BFFF" height={60} width={60} />
              </div>
            }
          />
        </div>
        <p>
          When looking through small projects of my own I came to the conclusion that on some I wanted to link to my
          Twitter, other more technical projects I wanted to link to Github, and the rest I would like to link to my own
          website. The code to create these little badges is simple,{' '}
          <a
            className="text-gray-700 hover:text-gray-200 transition duration-250 ease-in-out cursor-pointer underline"
            href="https://levels.io/"
            target="_blank"
            rel="noreferrer noopenner"
          >
            Pieter Levels
          </a>{' '}
          has created a{' '}
          <a
            className="text-gray-700 hover:text-gray-200 transition duration-250 ease-in-out cursor-pointer underline"
            href="https://gist.github.com/levelsio/9c531122e557da6282458bbc2a8e2aff"
            target="_blank"
            rel="noreferrer noopenner"
          >
            Gist
          </a>{' '}
          that this project is almost entirely based on.
        </p>
        <p className="mt-4">
          I currently only use either fairly vanilla HTML/CSS/JS projects or React so those are the initial two options.
          I hope to add support for Vue, Angular and other common styles soon. Please feel free to contribute any other
          component form via a{' '}
          <a
            className="text-gray-700 hover:text-gray-200 transition duration-250 ease-in-out cursor-pointer underline"
            href="https://github.com/ruairidhflint/creator-badge-maker/pulls"
            target="_blank"
            rel="noreferrer noopenner"
          >
            pull request
          </a>
          .
        </p>
      </div>
    </div>
  );
};
export default About;
