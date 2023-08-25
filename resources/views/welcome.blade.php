<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

</head>

<body class="antialiased">
    {{-- <script src="https://cdn.jsdelivr.net/gh/kstmostofa/cleverstack-sdk@main/app.js" defer></script> --}}
    {{-- <script>
        window.CleverStack = {
            api: '0c31f913e24067a4',
            user_id: '63',
            authAPI: 'https://dev-api.cleverstack.in',
            open: false,
            env: 'dev'
        };
    </script> --}}

    <script>
        (function(d, t) {
            var SRC_FILE = "http://127.0.0.1:8000/js/app.js";
            var g = d.createElement(t),
                s = d.getElementsByTagName(t)[0];
            g.src = SRC_FILE;
            g.defer = true;
            g.async = true;
            s.parentNode.insertBefore(g, s);
            window.CleverStack = {
                api: '0c31f913e24067a4',
                user_id: '63',
                authAPI: 'https://dev-api.cleverstack.in',
                open: false,
                env: 'dev'
            };
        })(document, "script");
    </script>

</body>

</html>
