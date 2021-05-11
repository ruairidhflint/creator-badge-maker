const NotFound = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:py-3 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="max-w-4xl mx-auto mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Umm?
          </p>
          <p className="max-w-xl mt-5 mb-8 mx-auto text-xl text-gray-500 text-center">
            Nothing to be found here, I'm afraid!{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
