import s from './location.module.css';

const Location = () => {
  return (
    <div className={s.location_wrapper}>
      <h3>Our location</h3>
      <div className={s.links_wrapper}>
        <a
          className={s.adress}
          href='https://yandex.by/maps/10445/rome/search/Rome%2C%20st.%20Via%20Tuscolana%2C%20225/?ll=12.533407%2C41.869911&sll=27.555691%2C53.902735&sspn=0.471725%2C0.179023&z=14'
        >
          Rome, st. Via Tuscolana, 225
        </a>
        <a
          className={s.adress}
          href='https://yandex.by/maps/10445/rome/house/ZUsYcwFnS0IPQFprfXR5eXVkZA==/?ll=12.567278%2C41.888970&z=17'
        >
          Rome, st. dei Chiclamini, 5
        </a>
      </div>
    </div>
  );
};

export default Location;
