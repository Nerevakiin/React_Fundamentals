export default function Die(props) {
    
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    return (
        <button 
            onClick={() => props.hold(props.id)} 
            style={styles}
            aria-pressed={props.isHeld}
            aria-label={`Die with a value of ${props.value}, is currently {props.isHeld ? "held" : "not held}`}
        >{props.value}</button>
    )
}