// const API_URL = "http://localhost:3000/api"
const API_URL = "https://gspd-team-9-api.azurewebsites.net/api"

var page = null;
var source = null;
var template = null;
var state = {};

var router = new Navigo();

rivets.configure({
    templateDelimiters: ['{{', '}}']
});
var binding = rivets.bind($('#content'), state);

router.on({
    'settings': () => {
        page = new Settings();
        loadHTML(page.template);
    },
    'about': () => {
        page = new About();
        loadHTML(page.template);
    },
    'camera': () => {
        page = new Camera();
        loadHTML(page.template);
    },
    'data': () => {
        page = new Data();
        loadHTML(page.template);
    }
});

// set the default route
router.on(() => {
    page = new Home();
    loadHTML(page.template);
});

// set the 404 route
router.notFound((query) => {
    console.log("not found");
});

router.resolve();

function loadHTML(url) {
    req = new XMLHttpRequest();
    req.open('GET', url);
    req.send();
    req.onload = () => {
        document.getElementById('content').innerHTML = req.responseText;
        // loadTemplate("template");
        binding = rivets.bind($('#content'), state);
        render();
        if (typeof page.ready !== "undefined")
            page.ready();
    };
}

// function loadTemplate(name) {
//     source = document.getElementById(name).innerHTML.trim();
//     template = Handlebars.compile(source);
// }

function render() {
    // document.getElementById('content').innerHTML = template(state);
    // binding = rivets.bind($('#content'), state);
    binding.update(state);
    if (typeof page.rendered !== "undefined")
        page.rendered();
}