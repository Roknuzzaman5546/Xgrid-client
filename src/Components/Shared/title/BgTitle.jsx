import underLine from '../.../../../../assets/Logo/Path 79.png'

const BgTitle = ({ title }) => {
    return (
        <div className="relative">
            <img className="w-80 h-5" src={underLine} alt="" />
            <h1 className="text-2xl absolute -top-2 left-3 uppercase ">{title}</h1>
        </div>
    );
};

export default BgTitle;