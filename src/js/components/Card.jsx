const Card = (props) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card mb-4">
                <img src={props.image} style={{aspectRatio: '334/217', objectFit: 'cover'}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <button className="btn btn-primary" type="button" href="#">¡Descubre más!</button>
                </div>
            </div>
        </div>
    );
};

export default Card;