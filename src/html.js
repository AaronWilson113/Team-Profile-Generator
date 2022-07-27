


const generateHTML = function (data) {
    return`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <link  rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <title>Team-profile-generator</title>
</head>

<body>
    <header>
        <nav class="navbar" id="navbar">
        <span class="navbar-brand mb-0 h1 w-80 text-center" id="navbar-text">Team Profile</span>
        </nav>
    </header>

    <main>
    <div class="container">
    <div class="row">
        <div class="row team-area col-12 d-flex justify-content-center">
            ${input}
        </div>
    </div>
    </div>
    </main>
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>

</html>


`
}


