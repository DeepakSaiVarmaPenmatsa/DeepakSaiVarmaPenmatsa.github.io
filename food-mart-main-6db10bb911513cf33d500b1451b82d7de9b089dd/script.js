<script>
  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("cartbtn");
    const dropdown = document.getElementById("cartContent");

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function () {
      dropdown.style.display = "none";
    });
  });
</script>
