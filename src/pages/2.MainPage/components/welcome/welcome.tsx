import s from './welcome.module.css';

const SectionWelcome = () => {
  return (
    <section className={s.section_welcome}>
      <h2 className={s.title_welcome + ' ' + s.title_left}>Welcome to the Italian pizzeria!</h2>
      <p className={s.welcome_content}>
        We have been preparing the best pizza for you for many years. Our chefs use the finest
        ingredients and the freshest vegetables for cooking. But the most important ingredient is
        that we make pizza with love!
      </p>
    </section>
  );
};

export default SectionWelcome;
