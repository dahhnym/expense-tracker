const NewExpense = () => {
  return (
    <div>
      <form action=''>
        <label htmlFor=''>항목</label>
        <input type='text' />
        <label htmlFor=''>금액</label>
        <input type='number' min='0' />
        <label htmlFor=''>날짜</label>
        <input type='date' />
      </form>
    </div>
  );
};

export default NewExpense;
