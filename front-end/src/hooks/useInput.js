import { useState } from "react";

function useInput(defaultValus= '') {
    const [value, setValue] = useState(defaultValus)

    function handleValueChange({target}) {
        setValue(target.value)
    }

    return [value, setValue, handleValueChange]
}

export default useInput