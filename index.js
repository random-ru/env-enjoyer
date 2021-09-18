#!/usr/bin/env node
"use strict";

const path = require("path");
const fs = require("fs");

const SEPARATOR = process.env.SEPARATOR;
const FILENAME = process.env.FILENAME;

const filePath = path.resolve(process.cwd(), FILENAME);

if (!SEPARATOR) {
  throw new Error("SEPARATOR is required");
}

const envSource = fs.readFileSync(filePath, { encoding: "utf8" });

const res = envSource.trim().split(SEPARATOR).join("\n");

fs.writeFileSync(filePath, res, { encoding: "utf8" });
