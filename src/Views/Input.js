const Input = ({ choice, setChoice, submit, ...props }) => {
  const singleHandleChange = (e) => {
    setChoice({
      ...choice,
      name: e.target.value,
      url: `https://www.${choice.type.toLowerCase()}.com/${e.target.value}`,
    });
  };
  if (choice.type === 'Twitter' || choice.type === 'GitHub') {
    return (
      <div>
        <p className="max-w-xl mt-4 mb-6 mx-auto text-xl text-gray-500 text-center">
          Enter your {choice.type} Username or{' '}
          <span
            className="underline hover:text-gray-200 transition duration-250 ease-in-out cursor-pointer"
            onClick={() => setChoice({ type: '', name: '', url: '' })}
          >
            go back
          </span>
        </p>
        <div className="relative w-full sm:mx-3">
          <form onSubmit={submit} className="sm:mx-auto sm:max-w-lg sm:flex">
            <div className="min-w-0 flex-1">
              <label htmlFor="twitter-handle" className="sr-only">
                Username
              </label>
              <input
                required
                id="twitter-handle"
                type="text"
                className="block w-full border rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ruairidh"
                placeholder="Username"
                value={choice.name}
                onChange={singleHandleChange}
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                className="block w-full rounded-md border border-transparent px-5 py-3 bg-gray-800 text-base font-medium text-white shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-600 sm:px-8"
              >
                Generate
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p className="max-w-xl mt-4 mb-6 mx-auto text-xl text-gray-500 text-center">
          Enter your name and custom URL or{' '}
          <span
            className="underline hover:text-gray-200 transition duration-250 ease-in-out cursor-pointer"
            onClick={() => setChoice({ type: '', name: '', url: '' })}
          >
            go back
          </span>
        </p>
        <div className="relative w-full sm:mx-3">
          <form onSubmit={submit} className="sm:mx-auto sm:max-w-lg flex flex-col items-center">
            <div className="min-w-0 w-full flex-1 mb-5">
              <label htmlFor="twitter-handle" className="sr-only">
                Name
              </label>
              <input
                required
                id="twitter-handle"
                type="text"
                className="block w-full border rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ruairidh"
                placeholder="Name"
                value={choice.name}
                onChange={(e) => setChoice({ ...choice, name: e.target.value })}
              />
            </div>
            <div className="min-w-0 w-full flex-1 mb-5">
              <label htmlFor="twitter-handle" className="sr-only">
                Custom URL
              </label>
              <input
                required
                id="twitter-handle"
                type="text"
                className="block w-full border rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ruairidh"
                placeholder="Custom URL"
                value={choice.url}
                onChange={(e) => setChoice({ ...choice, url: e.target.value })}
              />
            </div>
            <div className="min-w-0 w-full flex-1 mb-5">
              <label htmlFor="twitter-handle" className="sr-only">
                Image URL
              </label>
              <input
                required
                id="twitter-handle"
                type="url"
                className="block w-full border rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ruairidh"
                placeholder="Image URL"
                value={choice.image}
                onChange={(e) => setChoice({ ...choice, image: e.target.value })}
              />
            </div>
            <div className="mt-4 sm:mt-0">
              <button
                type="submit"
                className="block w-half rounded-md border border-transparent px-5 py-3 bg-gray-800 text-base font-medium text-white shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-600 sm:px-8"
              >
                Generate
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default Input;
