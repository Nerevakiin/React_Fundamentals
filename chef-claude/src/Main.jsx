export default function Main() {

    
    
    function handleClick(e) {
        console.log("clicked!")
        e.preventDefault()
    }




    return (
        <main>
            <form className="add-ingredient-form">
                <input 
                aria-label="add-ingredient"
                type="text"
                placeholder="e.g. oregano"
                name="ingredient"
                />
                <button onClick={handleClick}>Add ingredient</button>
            </form>
        </main>
    )
}