import pkg from 'react-loader-spinner';
const {ThreeDots} = pkg;

const Loader = () => {
  return (
      <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
      >

        <img src="/images/epc-logo.svg" alt="epc logo" width="200"/>

        <ThreeDots
            visible={true}
            height="60"
            width="60"
            color="#fff"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
      </div>
  );
};

export default Loader;