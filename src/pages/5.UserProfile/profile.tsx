import s from './profile.module.scss';

const ProfilePage = () => {
  return (
    <div className={s.profile_wrapper}>
      <p className={s.welcome}>Welcome to the Profile Page!</p>
    </div>
  );
};

export default ProfilePage;
