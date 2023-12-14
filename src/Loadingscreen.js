import './loadingscreen.css'
const Loadingscreen = () => {
    return (
        <div className="loader">
            <div style={{'--i': 1}}></div>
            <div style={{'--i': 2}}></div>
            <div style={{'--i': 3}}></div>
            <div style={{'--i': 4}}></div>
        </div>
    );
}

export default Loadingscreen;