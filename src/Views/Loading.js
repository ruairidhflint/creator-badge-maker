import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
const Loading = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen">
      <Loader type="Grid" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loading;
