<script>
    document.querySelector('form').addEventListener('submit', function(e) {
        var email = document.getElementById('email');
        var password = document.getElementById('password');
        
        if (!email.value || !password.value) {
            alert("All fields are required!");
            e.preventDefault();  // Prevent form submission if validation fails
        }
    });
</script>
