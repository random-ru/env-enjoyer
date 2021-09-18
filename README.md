# Env enjoyer

A package to transform single line to multiple lines by SEPARATOR

Version 2

## Usage
```sh
$ SEPARATOR=@@@ FILENAME=.env npx env-enjoyer 
```

## Example
Before:
```ini
a=b@@@c=d
```
After
```ini
a=b
c=d
```