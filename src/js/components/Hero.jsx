const Hero = () => {
    return (
        <div className="bg-body-secondary rounded py-5 my-5">
            <h1 className="display-5 fw-bold">¡Estación de juegos!</h1>
            <div>
                <p>
                    Esta es una selección de juegos que recomiendo jugar al menos una vez, abarcan géneros como aventura, acción y estrategia. Además están disponibles en distintas plataformas como PS5, Xbox, Nintendo Switch y Steam.
                </p>
                <div>
                    <button className="btn btn-primary" type="button">¡Ver todo!</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;