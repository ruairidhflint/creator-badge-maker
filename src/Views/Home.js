import { Link } from 'react-router-dom';
import Input from './Input';

import Rory from '../Assets/rory.jpeg';

const Home = ({ choice, setChoice, ...props }) => {
  const submit = (e) => {
    e.preventDefault();
    props.history.push('/result');
  };
  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:py-3 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="max-w-4xl mx-auto mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Generate A <span className="text-ruairidh">Maker</span> Badge In Seconds
          </p>
        </div>
      </div>
      {!choice.type && (
        <>
          {' '}
          <p className="max-w-xl mt-5 mb-8 mx-auto text-xl text-gray-500 text-center">
            Choose Twitter, GitHub or Custom below to begin making a unique badge to add to your projects or{' '}
            <Link
              to="/about"
              className="text-gray-700 hover:text-gray-200 transition duration-250 ease-in-out cursor-pointer underline"
            >
              read more.
            </Link>
          </p>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
            <svg
              onClick={() => setChoice({ ...choice, type: 'Twitter' })}
              className="mx-8 hover:opacity-50 cursor-pointer transition duration-300 ease-in-out"
              width="60px"
              height="60px"
              viewBox="328 355 335 276"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="
    M 630, 425
    A 195, 195 0 0 1 331, 600
    A 142, 142 0 0 0 428, 570
    A  70,  70 0 0 1 370, 523
    A  70,  70 0 0 0 401, 521
    A  70,  70 0 0 1 344, 455
    A  70,  70 0 0 0 372, 460
    A  70,  70 0 0 1 354, 370
    A 195, 195 0 0 0 495, 442
    A  67,  67 0 0 1 611, 380
    A 117, 117 0 0 0 654, 363
    A  65,  65 0 0 1 623, 401
    A 117, 117 0 0 0 662, 390
    A  65,  65 0 0 1 630, 425
    Z"
                style={{ fill: '#3BA9EE' }}
              />
            </svg>
            <svg
              onClick={() => setChoice({ ...choice, type: 'GitHub' })}
              className="mx-8 hover:opacity-50 cursor-pointer transition duration-300 ease-in-out"
              height="60px"
              viewBox="0 0 16 16"
              version="1.1"
              width="60px"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
            <img
              onClick={() => setChoice({ ...choice, type: 'Custom' })}
              src={Rory}
              alt=""
              width="60px"
              height="60px"
              style={{ borderRadius: '50%' }}
              className="mx-8 opacity-85 hover:opacity-50 cursor-pointer transition duration-300 ease-in-out"
            />
          </div>
        </>
      )}
      {choice.type && <Input choice={choice} setChoice={setChoice} submit={submit} />}
    </div>
  );
};

export default Home;
