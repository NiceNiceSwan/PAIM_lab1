import {useInput} from '../hooks';
import {useTasks} from "../task-hooks";

export default function AddtaskForm () {
    const [titleProps, resetTitle] = useInput("");
    const [detailProps, resetDetail] = useInput("");
    const [expiryProps, resetExpiry] = useInput("");
    const [completionProps, resetCompletion] = useInput("");
    const [ratingProps, resetRating] = useInput(0);
    const {addTask} = useTasks();

    const submit = event => {
        event.preventDefault();
        addTask(titleProps.value, 
                detailProps.value,
                expiryProps.value,
                completionProps.value,
                ratingProps.value);
        resetTitle();
        resetDetail();
        resetExpiry();
        resetCompletion();
        resetRating();
    };
    
    return (
        <form onSubmit={submit}>
            <input {...titleProps} type="text" placeholder = "Nazwa..." required />
            <input {...detailProps} type="textarea" placeholder = "Szczegóły..." required />
            <input {...expiryProps} type="date" required />
            <input {...completionProps} type="text" placeholder = "Status..." required />
            <input {...ratingProps} type="number" placeholder = "Trudność..." min={0} max={10} required />
            <button>DODAJ</button> 
        </form>
    )
}


