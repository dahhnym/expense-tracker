import "./NewExpense.scss";

const NewExpense = () => {
  return (
    <div className='new-expense'>
      <form action=''>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label htmlFor=''>항목</label>
            <input type='text' />
          </div>
          <div className='new-expense__control'>
            <label htmlFor=''>금액</label>
            <input type='number' min='0' />
          </div>
          <div className='new-expense__control'>
            <label htmlFor='' className='new-expense__date'>
              날짜
            </label>
            <input type='date' min='2019-01-01' max='2022-12-31' />
          </div>
        </div>
        <button type='submit' className='new-expense__actions'>
          추가하기
        </button>
      </form>
    </div>
  );
};

export default NewExpense;
