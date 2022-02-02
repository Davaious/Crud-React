import React, {useState} from "react";



const Create =()=>{
    const [form, setform] = useState ()

    return(
        <div>
            <h3> New Token </h3>
            <form>
                <input
                type = "text"
                name = "name"
                placeholder = "Name"
                value = ""
                />

                <input
                type = "text"
                name = "price"
                placeholder = "Price"
                value = ""
                />

<input
                type = "text"
                name = "img"
                placeholder = "Picture"
                value = ""
                />

            </form>
        </div>
    );
}

export default Create;
