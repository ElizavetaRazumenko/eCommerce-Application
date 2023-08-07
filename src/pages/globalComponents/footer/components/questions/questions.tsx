import s from './questions.module.css';

const Question = () => {
  return (
    <div className={s.question_wrapper}>
      <h3>For questions</h3>
      <a className={s.email} href='mailto:pizza_italiano@food.com'>
        pizza_italiano@food.com
      </a>
      <a className={s.contact} href='tel:+37539125621548'>
        +39 12 562 15 48
      </a>
    </div>
  );
};

export default Question;
