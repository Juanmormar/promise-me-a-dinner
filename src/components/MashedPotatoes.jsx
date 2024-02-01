import PropTypes from 'prop-types';

const MashedPotatoes = (props) => {
	const { mashedPotatoes } = props;
	

	return (
		<div className='food'>
			{mashedPotatoes.length > 0 && (
				<>
					<img src='/images/mashed-potatoes.jpg' />
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

export default MashedPotatoes;

MashedPotatoes.propTypes = {
	mashedPotatoes: PropTypes.array,
};