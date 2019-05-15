class Settings {

    constructor() {
        this.template = "app/settings/settings.html";
        this.getRobots();
        this.getPackages();
        state = {
            ...state
        };
    }

    ready() {
    }

    rendered() {
    }

    getRobots() {
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
            })
            .catch(function (error) {
            });
    }

    getPackages() {
        axios({
            method: 'get',
            url: `${API_URL}/packages`
        })
            .then(function (response) {
                state = {
                    ...state,
                    packages: response.data
                };
                render();
            })
            .catch(function (error) {
            });
    }

    onSubmitRobot(form) {
        const data = {
            "positionX": form.positionX.value,
            "positionY": form.positionY.value,
            "bluetoothName": form.bluetoothName.value
        };
        var context = this;
        axios({
            method: 'post',
            url: `${API_URL}/robots`,
            data: data,
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(function (response) {
                context.getRobots();
            })
            .catch(function (error) {
            });
        return false;
    }

    onSubmitPackage(form) {
        const data = {
            "name": form.name.value,
            "positionX": form.positionX.value,
            "positionY": form.positionY.value,
            "delivered": false
        };
        var context = this;
        axios({
            method: 'post',
            url: `${API_URL}/packages`,
            data: data,
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(function (response) {
                context.getPackages();
            })
            .catch(function (error) {
            });
        return false;
    }

}