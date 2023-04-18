const $app = document.querySelector("#app");
// 저장소
let state = {
  items: ['item1', 'item2', 'item3'],
}

// 실질적인 랜더
const render = () => {
  const { items } = state;
  console.log(items);
  $app.innerHTML = `
  <ul class="item-list">
      ${items.map((el) => `<li>${el}</li>`).join('')}
    </ul>
    <button id="add-state" type="button">추가 버튼</button>
  `;
  const $addStateBtn = document.querySelector("#add-state");
  $addStateBtn.addEventListener('click', () => {
    setState({ items: [...items, `item${items.length + 1}`] });
  })
}

// 셋업하는 함수 state셋업은 setState로만 한다.
const setState = (newState) => {
  state = { ...state, ...newState }
  render();
}

render();