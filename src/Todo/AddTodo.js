import React, { useState } from 'react'
import PropTypes from 'prop-types'

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState (defaultValue)

    return {
        bind: {
            value: value,
            onChange: event => setValue (event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
       
    }

}

const styles ={
    form: {
        marginBottom: '1rem'
    }
}

function AddTodo(props) {
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if (input.value().trim() ) {
            props.onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form style={styles.form} onSubmit={submitHandler} >
            <input {...input.bind} />
            <button type='submit'> Add todo... </button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo