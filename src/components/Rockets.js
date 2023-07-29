import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './Rockets.module.css';
import { fetchRockets, setReserve } from '../redux/rockets/rocketsSlice';
import LoadingSpinner from './Loading';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.allRockets);
  const { loading } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets.length]);

  if (loading) {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  }
  return (
    <>
      {rockets.map((rocket) => (
        <div key={rocket.id} className={css.container}>
          <div className={css.imageContainer}>
            <img src={rocket.flickr_images} alt="rocket" />
          </div>
          <div className={css.info}>
            <p className={css.title}>{rocket.rocket_name}</p>
            <p className={css.desc}>
              {rocket.reserved ? <span className={css.badge}>Reserved</span> : ''}
              {' '}
              {rocket.description}
            </p>
            {rocket.reserved
              && <button type="button" className={css.cancelReservation} onClick={() => { dispatch(setReserve({ id: rocket.id, reserved: !rocket.reserved })); }}>Cancel Reservation</button> }
            {!rocket.reserved && <button type="button" className={css.reserve} onClick={() => { dispatch(setReserve({ id: rocket.id, reserved: !rocket.reserved })); }}>Reserve Rocket</button> }
          </div>
        </div>
      ))}
    </>
  );
};

export default Rockets;
