export function createContent() {
  let plannerContent = document.querySelector(".planner-content");
  let content = 
  `<div class="planner-content-global">
  <section class="content-index">1</section>
  <section class="content-name">Name</section>
  <section class="content-description">description</section>
  <section class="content-date">date</section>
  <section class="content-status">status</section>
</div>
`;
plannerContent.innerHTML += content;
}
