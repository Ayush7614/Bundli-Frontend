import { Dot, EmptyDot } from "../index";
import Util, { Binary } from "../../../../utils/index";
import './Minutes.css';

interface Props {
    digit: number;
}

const Minutes = ({ digit }:Props) : JSX.Element  => {

    let binaryNumbers: Binary = {
        firstCol: [],
        secondCol: []
    };
    binaryNumbers = Util.convertToBinaryColumns(digit);

    return (
        <div className="Minutes">
            <div className="Column">
                <EmptyDot/>
                <Dot isActive={binaryNumbers.firstCol[2] === undefined ? "0" : binaryNumbers.firstCol[2]}/>
                <Dot isActive={binaryNumbers.firstCol[1] === undefined ? "0" : binaryNumbers.firstCol[1]}/>
                <Dot isActive={binaryNumbers.firstCol[0] === undefined ? "0" : binaryNumbers.firstCol[0]}/>
            </div>
            <div className="Column">
                <Dot isActive={binaryNumbers.secondCol[3] === undefined ? "0" : binaryNumbers.secondCol[3]}/>
                <Dot isActive={binaryNumbers.secondCol[2] === undefined ? "0" : binaryNumbers.secondCol[2]}/>
                <Dot isActive={binaryNumbers.secondCol[1] === undefined ? "0" : binaryNumbers.secondCol[1]}/>
                <Dot isActive={binaryNumbers.secondCol[0] === undefined ? "0" : binaryNumbers.secondCol[0]}/>
            </div>
        </div>
    );
}

export default Minutes;