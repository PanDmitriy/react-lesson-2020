import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alingItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '7px',
        marginBottom: '.5 rem'
    },
    input: {
        marginRight: '1rem'
    },
    rm: {
        background: 'red',
        borderRadius: '50%',
        color: '#fff',
        border: 'none'
    },
    done: {
        textDecoration: 'line-through'
    }
}

function TodoItem(props) {

    const { deleteTodo } = useContext(Context)

    const classes = []

    if (props.todo.completed) {
        classes.push('done')
    }

    return (
        <li style={styles.li}> 
            <span className={classes.join(' ')} >
                <input 
                    style={styles.input} 
                    type='checkbox' 
                    checked={props.todo.completed}
                    onChange={ () => props.onCheckmark(props.todo.id) } />
                <strong>{props.index + 1}</strong> 
                &nbsp; {props.todo.title} 
            </span>
            <button style={styles.rm} onClick={deleteTodo.bind(null, props.todo.id)} > x </button>
        </li> 
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object,
    index: PropTypes.number,
    onCheckmark: PropTypes.func.isRequired
}

export default TodoItem