import './Work.scss';
import data from '../../constants/data';
import images from '../../constants/images';
import { FaTimesCircle } from 'react-icons/fa';
import { useState } from 'react';

const Work = () => {
    const [imageModal, setImageModal] = useState(false);
    const [imageSrc, setImageSrc] = useState("");

    const imageClickHandler = (src) => {
        setImageModal(true);
        setImageSrc(src);
    }

    return (
        <>
            <div className="work">
                <div className={imageModal ? "image__modal image__modal__show" : "image__modal"}>
                    <div className="image__modal--content">
                        <FaTimesCircle className="modal__close--btn text__light bg__blue" size={30} onClick={() => setImageModal(false)} />
                        <img src={imageSrc} alt="" />
                    </div>
                </div>

                <div className="work__content grid">
                    {/* <button  onClick={imageClickHandler()}>Click Me </button> */}
                    {
                        data.works.map((work, i) => {
                            return (
                                <div className="work__content--item" key={i} onClick={()=>imageClickHandler(work.img)}>
                                    <img src={work.img} alt="" className="img" />
                                    <div className="icon">
                                        <img src={images.icon_eye} alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Work;