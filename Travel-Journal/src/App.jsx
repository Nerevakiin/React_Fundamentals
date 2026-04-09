import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

export default function App() {
    
    const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                
                // img={entry.img}
                // title={entry.title}
                // country={entry.country}
                // googleMapsLink={entry.googleMapsLink}
                // dates={entry.dates}
                // text={entry.text}
                // all above can be replaced with the following if tweaked in the Entry.jsx component properly
                entry = {entry}
            />
        )
    })
    
    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}