function Card(){
    return (
        <>
        <div className="reactCard">
             <img className="cardImage" src="https://via.placeholder.com/150" alt="image of rokari"/>
             <h2>Rokari</h2>
             <p>Cyber Security Student</p>
        </div>
        </>
    );

    // to use images in react you need to import it
    /*
    the syntax is as follows:
    import picture from './assets/picture.jpg';
    ...
    <img src={picture} />
     */
}

export default Card;