export default function TodoSubmit() {
  return (
    <section>
      <form>
        <label>제목 : </label>
        <input type="text" name="title" />
        <label>내용 : </label>
        <input type="text" name="content" />
        <button>추가하기</button>
      </form>
    </section>
  );
}
