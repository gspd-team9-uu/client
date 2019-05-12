class Settings {

    constructor() {
        this.template = "app/settings/settings.html";
        this.getRobots();
        state = {
            ...state
        };
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

    onSubmit(form) {
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

}