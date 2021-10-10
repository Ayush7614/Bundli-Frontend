import './Dot.css';

interface Props {
    isActive: string;
}

const Dot = ({ isActive} : Props) : JSX.Element  => {
    return (
        <div className="Point">
            <div className= {isActive === "1" ? "Active" : "Inactive"}>
            </div>
            <svg height="50" width="50">
                <circle cx="25" cy="25" r="23" fill="transparent" strokeWidth="4" stroke="#b1c3cf" />
            </svg>
        </div>
    );
}

export default Dot;