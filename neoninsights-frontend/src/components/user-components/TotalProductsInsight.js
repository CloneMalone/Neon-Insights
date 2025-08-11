import productsInsightLogo from '../../assets/products-insight-logo.png';
import StatCounter from '../helper-components/StatCounter.js';

function TotalProductsInsight() {
    return (
        <div className="insight-card">
            <div className="insight-label-logo-container">
                <div className="insight-logo-container">
                    <img className="insight-logo-img"
                        src={productsInsightLogo}
                        alt="Products Insight Logo"
                    />
                </div>
                <p className="insight-card-label">Total Products</p>
            </div>
            <span class="insight-card-value">
                <StatCounter className="insight-card-value" id="total-products" endValue={58} />
            </span>
        </div>
    );
}

export default TotalProductsInsight;