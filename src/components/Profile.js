import { useSelector } from 'react-redux';
import css from './Profile.module.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.allRockets);
  const reserved = rockets.filter((rocket) => rocket.reserved === true);

  const missions = useSelector((state) => state.missions.missions);
  const joined = missions.filter((mission) => mission.reserved);
  return (
    <>
      <div className={css.container}>
        <div className={css.missions}>
          <p className={css.heading}>My Missions</p>
          { joined.map((mission) => (
            <p className={css.elem} key={mission.id}>{mission.name}</p>
          ))}
        </div>
        <div className={css.rocketsCont}>
          <p className={css.heading}>My Rockets</p>
          { reserved ? reserved.map((rocket) => (<p key={rocket.id} className={css.elem}>{rocket.rocket_name}</p>)) : ''}
        </div>
      </div>
    </>
  );
};

export default Profile;
