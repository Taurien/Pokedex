import pkball_bn from '../../../assets/pokeball-bn.svg'

const Loader = () => {
    return (
        <div className='c-loader'>
            {/* <div className='c-loader__load'></div> */}
            <img className='c-loader__load' src={pkball_bn} alt="" />
            <span className='c-loader__txt'>Loading...</span>
        </div>
    )
}

export default Loader
