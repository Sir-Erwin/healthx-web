// Helper Functions

import React from "react";
import bcrypt from ('bcrypt');

export function encrypt(data) {
    const {string} = props;
        return bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(string, salt, function(err, hash) {
                if (err) {
                    console.error(err);
                    return;
                }
            });
        });
}

export function formDataToJson(formData) {
        var jsonObject = {};
        formData.forEach(function(value, key){
            jsonObject[key] = value;
        });
        return jsonObject;
    }

export function isLoggedIn(){
        if(localStorage.getItem("username"))
            return true;
        return false;
};