import React from 'react'
import Todo from './Todo'

const List = ({taskList}) => {
    return (
        taskList.map(task => <Todo task={task} />)
    )
}

export default List