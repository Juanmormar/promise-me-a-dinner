import PropTypes from 'prop-types';

const Steak = (props) => {
	const { steak, stepsListed2 } = props;

	return (
		<div className='food'>
			{steak.length > 0 && (
				<>
					<img  src='/images/steak.jpg' style={{display: stepsListed2 ? "block" : "none"}} />
					<ol>
						{steak.map((e) => (
							<li key={e}>
								<span>{e}</span>
							</li>
						))}
					</ol>
				</>
			)}
		</div>
	);
};

export default Steak;

Steak.propTypes = {
	steak: PropTypes.array
};
