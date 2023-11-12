export default function Contact() {
  return (
    <div>
<form class="form-floating">
  <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com" value="test@example.com"/>
  <label for="floatingInputValue">Input with value</label>
</form>

  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea"></label>
  <button className="button">Submit</button>
</div>
  );
}
