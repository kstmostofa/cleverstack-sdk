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
    {{-- <script src="/js/app.js" defer async></script>
    <script>
        window.CleverStack = {
            api: '0c31f913e24067a4',
            user_id: '243',
            authAPI: 'https://dev-api.cleverstack.in',
            open: false,
            env: 'dev'
        };
    </script> --}}

    <script>
        (function(d, t) {
            var SRC_FILE = "/js/app.js";
            var g = d.createElement(t),
                s = d.getElementsByTagName(t)[0];
            g.src = SRC_FILE;
            g.defer = true;
            g.async = true;
            s.parentNode.insertBefore(g, s);
            window.CleverStack = {
                api: 'c82677ed89ede671',
                user_id: '121',
                authAPI: 'https://api.cleverstack.in',
                open: false,
                env: 'prod',
                // wssServerEnv: 'prod'

            };
        })(document, "script");
    </script>

</body>

</html>
