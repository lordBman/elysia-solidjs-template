import staticPlugin from '@elysiajs/static';
import { Elysia } from 'elysia';

let app = new Elysia();

app = app.use(staticPlugin({ assets: "public", prefix: "/assets" }));

app = app.get("/", ()=>{
    const html = `<html lang="en">
        <head>
            <title>Connect | App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="/assets/css/app.css" />
            <link rel="icon" href="/favicon.ico" />
        </head>
        <body>
            <main id="root"></main>
            <script src="/assets/js/client.js"></script>
        </body>
    </html>`;

    return new Response(html, {
        headers: {
            'Content-Type': 'text/html',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
        }
    });
});

app.listen(3000, (details)=>{
    console.log(details);
});