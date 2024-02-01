import PropTypes from 'prop-types';

const MashedPotatoes = (props) => {
	const { mashedPotatoes, stepsListed } = props;
	

	return (
		<div className='food'>
			{mashedPotatoes.length > 0 && (
				<>
					 <img src='/images/mashed-potatoes.jpg'  style={{display: stepsListed ? 'block' : 'none'}}/>
					<ol>
						{mashedPotatoes.map((e) => (
							 <li key={e}>{e}</li>
						))}
					</ol>
				</>
			)}
		</div>
	);
};



MashedPotatoes.propTypes = {
	mashedPotatoes: PropTypes.array	
};
export default MashedPotatoes;