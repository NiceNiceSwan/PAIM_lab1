import {FaCheck, FaCalendar, FaMinusCircle} from 'react-icons/fa';

export default function TaskIcon({completion}){
        if (completion === "wykonane") {
            return(
            <>
                <FaCheck color="green" id="checkmark" />
            </>
            );
        }
        else if (completion === "niewykonane") {
            return(
            <>
                <FaMinusCircle color="red" id="X" />
            </>
            );
        }
        else
        {
            return(
            <>
                <FaCalendar color="red" id="X" />
            </>
            );
        }
};
