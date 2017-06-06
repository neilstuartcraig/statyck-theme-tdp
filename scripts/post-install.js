#! /usr/local/bin/node

/* 
Post-install script for statyck-theme-tdp

This script is run after npm install statyck-theme-tdp or yarn add statyck-theme-tdp and will:

1. Create a dir in . named "config" (if it doesn't already exist - it should have been created by installing statyck)
2. Copies the local (to this package) config/theme-config.json to the above "config" dir
*/

// Core deps
// import path from "path";
const path = require("path");

// 3rd party deps
// import fse from "fs-extra";
const fse = require("fs-extra");

// Config
const blogDir = path.join(process.cwd(), "..", ".."); // Down 2 dirs from install location
const configDirName = "statyck-config";
const configFilename = "theme-config.json";

const configSrcFilename = path.join(__dirname, "..", configDirName, configFilename);

const configDestDirName = path.join(blogDir, configDirName);
const configDestFilename = path.join(configDestDirName, configFilename);

fse.ensureDir(configDestDirName, (EDErr) => 
{
    if(EDErr)
    {
        throw EDErr;
    }

    const copyOptions = 
    {
        overwrite: false,
        errorOnExist: true
    };

    fse.copy(configSrcFilename, configDestFilename, (CErr) => 
    {
        if(CErr)
        {
            throw CErr;
        }
    });
});