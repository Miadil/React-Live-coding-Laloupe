import Axios from 'axios'
import React, {useState , useEffect} from 'react'
import axios from 'axios'

const Count = () => {
    const [count, setCount] = useState(0)
    const [firstName, setFirstName] = useState('')
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://hp-api.herokuapp.com/api/characters')
            setCharacters(result.data)
        }
        fetchData()
    },[])

    return(
        <div>
            <div>{count}</div>
            <input type='button' value="+ 1" onClick={() => setCount(count + 1)} />
            <input type='button' value="- 1" onClick={() => setCount(count - 1)} />
            <p>input first: {firstName} </p>
            <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        
            {characters.map((character, index) => { 
                return (
                <p key={index}>{character.name}</p>
                )})
            }

        </div>
    )
}

export default Count
    // useEffect(() => {
    //     console.log('je suis dans useEffect')
    //     document.title = `${count}`
    // },[count])
    // useEffect(() => {
    //     console.log('je suis dans useEffect firstName')
    
    // },[firstName])