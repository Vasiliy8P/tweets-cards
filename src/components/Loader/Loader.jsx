import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
    return (
        <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4B2A99"
            ariaLabel="three-dots-loading"
            wrapperStyle={{marginLeft: "auto", marginRight: "auto"}}
            wrapperClassName=""
            visible={true}
        />
    )
}

export default Loader;