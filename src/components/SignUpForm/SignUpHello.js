import React from "react";

function SignUpHello(props) {
    if(props.text.length !== 0) {
    return (
        <div>Hello, {props.text}! We are glad to see you.</div>
    )
}
}

export default SignUpHello;