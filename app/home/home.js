class Home {

    constructor() {
        this.template = "app/home/home.html";

        state.title = "test 123";

        // setTimeout(
        //     function () {
        //         state.title = "test 456";
        //         render();
        //     }, 2000);

        this.getRobots();

        var self = this;
        setInterval(function () {
            self.getRobots();
        }, 5000);
    }

    getRobots() {
        var self = this;
        axios({
            method: 'get',
            url: `${API_URL}/robots`
        })
            .then(function (response) {
                state = {
                    ...state,
                    robots: response.data
                };
                render();
                self.setRobots();
            })
            .catch(function (error) {
            });
    }

    ready() {
    }

    rendered() {
        this.createGrid();
    }

    createGrid() {
        const size = 13;
        const caseSize = 50;

        var mapGrid = document.getElementById('map-grid');
        var mapGridTemp = "";

        for (let row = 0; row < size; row++) {
            mapGridTemp += "<div class='row'>";
            for (let column = 0; column < size; column++) {
                var color = "white";
                if (row % 4 === 0 && column % 4 === 0)
                    color = "#fab1a0";
                else if ((row % 4 === 2 && column % 4 === 0) || (column % 4 === 2 && row % 4 === 0))
                    color = "#e17055";
                else if (row % 4 === 0 || column % 4 === 0)
                    color = "#2d3436";
                mapGridTemp += "<div id='pos-" + row + "-" + column + "' style='background:" + color + ";width:" + caseSize + "px;height:" + caseSize + "px'></div>";
            }
            mapGridTemp += "</div>";
        }

        mapGrid.innerHTML = mapGridTemp;
    }

    setRobots() {
        state.robots.forEach(function (robot) {
            var pos = document.getElementById("pos-" + robot.positionX + "-" + robot.positionY);
            var imgLink = "https://library.kissclipart.com/20180916/wyq/kissclipart-lego-31313-mindstorm-ev3-clipart-lego-mindstorms-e-5c5a92f079f5431e.png";
            var img = "<img src='" + imgLink + "' height='50'/>"
            pos.innerHTML = img;
        });
    }

}