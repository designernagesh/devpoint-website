import data from '../../constants/data';
import './Stats.scss';

const Stats = () => {
    return (
        <div className="stats bg__blue section__padding">
            <div className="container">
                <div className = "stats__content grid">
                    {
                        data.stats.map((stat, i) => {
                            return (
                                <div className="stats__item text__light text__center" key = {i}>
                                    <div className="stats__item--left">
                                        <img src = {stat.img} alt = "" className="img" />
                                    </div>
                                    <div className="stats__item--right">
                                        <span className="value fw__6">{stat.value}</span>
                                        <span className="text text__upper fw__5 ls__2">{stat.title}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Stats;