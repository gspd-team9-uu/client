class Home {

    constructor() {
        this.template = "app/home/home.html";

        state.title = "test 123";

        setTimeout(
            function () {
                state.title = "test 456";
                render();
            }, 2000);
    }

    ready() {
    }

}