import styles from "./NewExpense.module.scss";

const NewExpense = () => {
  return (
    <div className={styles["new-expense"]}>
      <form action=''>
        <div className={styles["new-expense__controls"]}>
          <div className={styles["new-expense__control"]}>
            <label htmlFor=''>항목</label>
            <input type='text' />
          </div>
          <div>
            <label htmlFor=''>금액</label>
            <input type='number' min='0' />
          </div>
          <div>
            <label htmlFor='' className={styles["new-expense__date"]}>
              날짜
            </label>
            <input type='date' />
          </div>
          <button type='submit'>추가하기</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpense;
