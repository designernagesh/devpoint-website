import data from "../../constants/data";
import './Services.scss';

const Services = () => {
    return (
        <>
            <div className="services section__padding bg__whitesmoke">
                <div className="container">
                    <div className="services__content grid">
                        {
                            data.services.map((service, i) => {
                                let {img, title, text } = service;
                                return (
                                    <div className="services__content--item text__center" key={i}>
                                        <img src={img} alt="" className="icon" />
                                        <h4 className="text__upper text">{title}</h4>
                                        <p className="para__text text__grey">{text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;