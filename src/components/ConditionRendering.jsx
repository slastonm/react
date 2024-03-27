import React from 'react';
import PropTypes from 'prop-types';

function ConditionRendering(props) {
        // if(props.isLogin){
    //     return(
    //         <h2>
    //             {props.username}
    //         </h2>
    //     )
    // }
    // else{
    //     return(
    //         <h2>
    //             Not login
    //         </h2>
    //     )
    // }
    const login = <h2> {props.username}</h2>
    const noLogin = <h2> No login</h2>
    return (props.isLogin? login:noLogin)
}
ConditionRendering.propTypes ={
    username:PropTypes.string,
    isLogin:PropTypes.bool
}
ConditionRendering.defaultProps ={
    username:'Test',
    isLogin:false
}

export default ConditionRendering;