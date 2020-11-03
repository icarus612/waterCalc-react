import React from 'react';
import Input from '../components/input.js';
import 	PriceBox from '../sections/priceBox.js';

const ResidentialRates = (props) => {
	const [water, setWater] = React.useState(0);
	const [sewer, setSewer] = React.useState(0);
	const [withSewer, setWithSewer] = React.useState(0);
	const [withoutSewer, setWithoutSewer] = React.useState(0);
	const [irrigation, setIrrigation] = React.useState(0);
	const [subtotal, setSubtotal] = React.useState(0);
	const rates = [1.69, 2.18, 5.04, 5.04, 9.55];

	const handleWithSewer = (e) => {
		let s = 5.19 * (e > 16 ? 16 : e);
		let x = 0;
		for (let i = 0; i < (Number(e) + Number(withoutSewer)); i++) {
			x += i < 16 ? rates[Math.floor(i/4)] : rates[4];
		}
		setWithSewer(e);
		setWater(x.toFixed(2));
		setSewer(s.toFixed(2));
		setSubtotal((x + Number(water) + Number(irrigation) + 8.44).toFixed(2));
	}

	const handleWithoutSewer = (e) => {
		let x = 0;
		for (let i = 0; i < (Number(e) + Number(withSewer)); i++) {
			console.log(x)
			x += i < 16 ? rates[Math.floor(i/4)] : rates[4];
		}
		setWithoutSewer(e);
		setWater(x.toFixed(2));
		setSubtotal((x + Number(sewer) + Number(irrigation) + 8.44).toFixed(2));
	}

	const handleIrrigation = (e) => {
		let x = 0;
		for (let i = 0; i < e; i++) {
			x += i < 16 ? rates[3] : rates[4];
		}
		setIrrigation(x.toFixed(2));
		setSubtotal((x + Number(water) + Number(sewer) + 8.44).toFixed(2));
	}

	return (
		<React.Fragment>
				<div className="d-flex flex-column flex-wrap flex-md-row justify-content-start align-items-around">
						<h3 className="m-4">
								Residential Rates
						</h3>
						<div className="col-12 d-flex flex-column justify-content-start align-items-start">
								<Input label="With Sewer" type="number" className="col-6" placeholder={0} min={0} max={10000} onChange={(e)=> handleWithSewer(e.target.value)} />
								<Input label="Without Sewer" type="number" className="col-6" placeholder={0} min={0} max={10000} onChange={(e)=> handleWithoutSewer(e.target.value)} />
								<Input label="Irrigation" type="number" className="col-6" placeholder={0} min={0} max={10000} onChange={(e)=> handleIrrigation(e.target.value)} />
						</div>
				</div>
				<PriceBox sewerUsage={sewer > 0 && sewer} irrigationUsage={irrigation > 0 && irrigation} waterUsage={water > 0 &&  water} subtotal={subtotal > 8.45 ? subtotal : 0} />
		</React.Fragment>
	)
}
export default ResidentialRates;