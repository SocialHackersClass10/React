import React from 'react'
import Hobby from './Hobby'

function HobbyList(props){
    return props.hobbyList.map(
        hobby => <Hobby hobby={hobby}/>
    )
}

export default HobbyList