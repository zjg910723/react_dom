import { observable, action, runInAction } from "mobx";

import axios from "axios";


// observable   定义应用状态变量，
class Store {
    @observable text = "";
    @observable list = [];
    

    @action async getCustomerList(){
        var backer = await axios({
            method: 'GET',
            url: 'https://randomuser.me/api/',
        });

        runInAction(() => {
            console.log(backer);
        })
    }

}   

export default new Store();