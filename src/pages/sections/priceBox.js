import React from 'react';

const PriceBox = (props) => {
	return (
		<div className="price-card p-3">
			{props.waterUsage && (
				<h4 className="px-3 bold">
					Water Usage:  <span className="float-right">$ {props.waterUsage}</span>
				</h4>	
			)}
			{props.sewerUsage && (
				<h4 className="px-3 bold">
					Sewer Usage:  <span className="float-right">$ {props.sewerUsage}</span>
				</h4>	
			)}
			{props.irrigationUsage && (
				<h4 className="px-3 bold">
					Irrigation Usage:  <span className="float-right">$ {props.irrigationUsage}</span>
				</h4>	
			)}
			{props.waterFee && (
				<h4 className="px-3 bold">
					Water Availability Fee:  <span className="float-right">$ {props.meter[0]}</span>
				</h4>	
			)}
			{props.sewerFee && (
				<h4 className="px-3 bold">
					Sewer Availability Fee:  <span className="float-right">$ {props.meter[1]}</span>
				</h4>	
			)}
			{props.subtotal > 0 && (
				<h4 className="px-3 bold">
					Fixed Fees:  <span className="float-right">$ 8.44</span>
				</h4>	
			)}

			<hr />
			<h4 className="px-3 bold">
				Subtotal:  <span className="float-right">$ {props.subtotal}</span>
			</h4>				
		</div>
	);
}

export default PriceBox