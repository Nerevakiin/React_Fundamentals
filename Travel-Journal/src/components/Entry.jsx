export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" 
                    src= {props.img.src}
                    alt= {props.img.alt}
                />
            </div>
            <div className="info-container">
                <img className="map-marker-icon" src="/marker.png" alt="map marker icon" />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
                <h2>{props.destination}</h2>
                <p>{props.dates}</p>
                <p>{props.description}</p>
            </div>
            
        </article>
    )
}