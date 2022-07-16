

export const GifItem = ({ title, url, id }) => {


    return (
        <div className="card animate__animated animate__slideInLeft">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
