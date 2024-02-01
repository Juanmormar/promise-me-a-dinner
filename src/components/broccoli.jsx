import PropTypes from 'prop-types';

const Broccoli = (props) => {
	const { broccoli,stepsListed3 } = props;

	return (
		<div className='food'>
			{broccoli.length > 0 && (
				<>
					<img  src='/images/broccoli.jpg' style={{display: stepsListed3 ? 'block' : 'none'}} />
					<ol>
						{broccoli.map((e) => (
							<li key={e}>{e}</li>
						))}
					</ol>
				</>
			)}
		</div>
	);
};

export default Broccoli;

Broccoli.propTypes = {
	broccoli: PropTypes.array,
};