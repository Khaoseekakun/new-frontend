"use client"

import { useEffect } from "react";

function bootstrapclient() {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js")
    }, []);

    
}

export default bootstrapclient