import React, { useEffect } from 'react';
import '../application.css';

  
const Home = (props) => {

	return (
		<div className="container">
			<div className='flex-wrap flex-row d-flex justify-content-around align-items-stretch card mt-5 p-3'>
				<div className="col-12 col-md-10 text-center p-3">
					<h1>Water Utility Calculator App</h1>
					<h4>A basic breakdown of how your bill is calculated. For more information visit <a target="_blank" href="https://charlottenc.gov/Water/RatesBilling/Pages/CLTWRates.aspx">Charlotte Water</a>.</h4>				
				</div>
				<div>
					<h3>
						Residential Rates &amp; Fees
					</h3>
					<h4>Water Usage:</h4>
					<ul>
						<li>Tier 1 (1-4 Ccf ): $1.69/Ccf</li>
						<li>Tier 2 (5-8 Ccf): $2.18/Ccf</li>
						<li>Tier 3 (9-16 Ccf): $5.04/Ccf</li>
						<li>Tier 4 (Over 16 Ccf): $9.55/Ccf</li>
					</ul>

					<h4>Sewer Usage:</h4>
					<ul>
						<li>$5.19 Per Ccf of Water Used (up to 16 Ccf)</li>
					</ul>

					<h4>Fixed Fees</h4>
					<ul>
						<li>Water: $4.22/month</li>
						<li>Sewer: $4.22/month</li>
					</ul>

					<h4>Irrigation Meter Rates</h4>
					<ul>
						<li>Tier 1: (1-16 Ccf): $5.04</li>
						<li>Tier 2: (17+ CCf): $9.55</li>
					</ul>
				</div>
				<div>
					<h3>
						Commercial Rates &amp; Fees
					</h3>
					<h4>Water &amp Sewer Usage:</h4>
					<ul>
						<li>Water Charge per Ccf: $2.92</li>
						<li>Sewer Charge per Ccf: $5.19</li>
					</ul>

					<h4>Fixed Fees</h4>
					<ul>
						<li>Water: $4.22/month</li>
						<li>Sewer: $4.22/month</li>
					</ul>
					
					<h4>Irrigation Meter Rates</h4>
					<ul>
						<li>Tier 1: (1-16 Ccf): $5.04</li>
						<li>Tier 2: (17+ CCf): $9.55</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Home;
