import { useState } from "react";

function useFormState(initialValue){
    const [value, setValue] = useState(initialValue);

    function handleChange(e){
        setValue(e.target.value);
    }

    return {
        value,
        onChange:handleChange
    };
}

export default useFormState;