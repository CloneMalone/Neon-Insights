import customersInsightLogo from '../../assets/customers-insight-logo.png';
import StatCounter from '../helper-components/StatCounter.js';

function TotalCustomersInsight() {
    return (
        <div className="insight-card">
            <div className="insight-label-logo-container">
                <div className="insight-logo-container">
                    <img className="insight-logo-img"
                        src={customersInsightLogo}
                        alt="Customers Insight Logo"
                    />
                </div>
                <p className="insight-card-label">Total Customers</p>
            </div>
            <span className="insight-card-value">
                <StatCounter className="insight-card-value" id="total-customers" endValue={45} />
            </span>
        </div>
    );
}

export default TotalCustomersInsight;