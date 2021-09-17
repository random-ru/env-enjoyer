#!/usr/bin/env node
"use strict";

const path = require("path");
const fs = require("fs");

const filePath = path.resolve(process.cwd(), ".env");

const SEPARATOR = process.env.SEPARATOR;

if (!SEPARATOR) {
  throw new Error("SEPARATOR is required");
}

const envSource = fs.readFileSync(filePath, { encoding: "utf8" });

const res = envSource.split("\n").join("").trim().split(SEPARATOR).join("\n");

console.log(res);

fs.writeFileSync(filePath, res, { encoding: "utf8" });
