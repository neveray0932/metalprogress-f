"use strict";

import Vue from "vue";
import axios from "axios";
import router from "../router";
import baseUrl from "../../baseUrl.js";
// import store from "@/store";
// let AUTH_TOKEN = "Cadtech " + localStorage.getItem("jwt");
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
    // baseURL: process.env.baseURL || process.env.apiUrl || ""
    // timeout: 60 * 1000, // Timeout
    // withCredentials: true, // Check cross-site Access-Control
    baseURL: baseUrl,
    // headers: { Authorization: "Cadtech " + localStorage.getItem("jwt") }
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function(config) {
        // console.log(process.env);
        // Do something before request is sent
        if (localStorage.getItem("jwt").length != 0) {
            config.headers["Authorization"] = `Cadtech ${localStorage.getItem(
        "jwt"
      )}`;
        }
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function(response) {
        // Do something with response data
        console.log(response);
        return response;
    },
    function(error) {
        // Do something with response error
        console.log(error);
        if (error.response.status === 403) {
            router.push("/");
        }
        return Promise.reject(error);
    }
);

Plugin.install = function(Vue, options) {
    options;
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            },
        },
        $axios: {
            get() {
                return _axios;
            },
        },
    });
};

Vue.use(Plugin);

export default Plugin;