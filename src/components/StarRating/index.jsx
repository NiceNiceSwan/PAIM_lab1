import Star from '../Star';

const createArray = length => [...Array(length)];

export default function StarRating({
    totalStars=10, 
    selectedStars=0,
    onRate = f => f,
    completion
}) 
{
    return (
        <>
            {createArray(totalStars).map((n,i) => (
                <Star
                    key={i}
                    selected = {selectedStars > i}
                    onSelect = {() => onRate(completion !== "niewykonane" ? selectedStars : (selectedStars + 1) % 11)}
                />
            ))}
        </>
    );
};



