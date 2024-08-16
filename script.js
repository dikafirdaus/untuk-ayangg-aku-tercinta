<script>
    document.getElementById("letter").addEventListener("click", function() {
        var content = document.getElementById("letterContent");
        if (content.style.display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
</script>
