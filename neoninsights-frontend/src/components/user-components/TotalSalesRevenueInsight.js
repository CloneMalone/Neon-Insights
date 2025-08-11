import revenueInsightLogo from '../../assets/revenue-insight-logo.png';
import StatCounter from '../helper-components/StatCounter.js';

function TotalSalesRevenueInsight() {
    return (
        <div className="insight-card">
            <div className="insight-label-logo-container">
                <div className="insight-logo-container">
                    <img className="insight-logo-img"
                        src={revenueInsightLogo}
                        alt="Revenue Insight Logo"
                    />
                </div>
                <p className="insight-card-label">Total Sales Revenue</p>
            </div>
            <span className="insight-card-value">$<StatCounter id="total-sales-revenue" endValue={4234.65} /></span>
        </div>
    );
}

export default TotalSalesRevenueInsight;