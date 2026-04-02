import {reactSvg} from '../assets/react.svg'

export default function Navbar() {
    return (
        <header>
            <nav>
                <img src={reactSvg} className="logo" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}