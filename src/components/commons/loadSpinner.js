import { ThreeDots } from 'react-loader-spinner';

function LoadSpinner({ isDisabled, children }) {
    const text = children;
    const load = (isDisabled ? <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3D97EB"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true} />
        : text);
    return (load);
};

export default LoadSpinner