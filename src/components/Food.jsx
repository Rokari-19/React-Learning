function Food() {
    const food1 = "Pizza";
    const food2 =  "Burgers";
    return (
        <>
        <h1>List of food items</h1>
        <ul>
            <li>Beans</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
        </>
    );
}

export default Food;